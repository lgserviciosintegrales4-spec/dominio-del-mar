window.COURSES_MAP = {
  conductor: window.COURSE_CONDUCTOR,
  timonel: window.COURSE_TIMONEL,
  patron: window.COURSE_PATRON,
  piloto: window.COURSE_PILOTO
};

// Función global para el Simulador Práctico RIPA (Regla 15 y escenarios de maniobra)
window.verificarRespuesta = function (esCorrecta) {
  window.App.handleRipaSimAnswer(esCorrecta);
};

window.App = {
  mode: 'demo', // 'demo' | 'student' | 'admin'
  authToken: null,
  isAdminVerified: false,
  activeTab: 'cursos', // 'cursos' | 'alumno' | 'nauta' | 'admin'
  selectedCourseId: 'conductor',
  courseSubTab: 'unidades', // 'unidades' | 'modulos_pna' | 'simulador_ripa' | 'videoteca_curso' | 'bibliografia_curso' | 'examen_curso'
  courseSearchQuery: '',
  selectedUnitId: 'cn-seg-u1',
  selectedModuleId: 'module-01',
  selectedRipaVideoId: 'vid-iala-cardinales-3d',
  pedagogyLevel: 'beginner', // 'beginner' | 'advanced'
  activeRipaScenarioIdx: 0,
  db: null,
  studentSession: {
    studentName: 'Martín Álvarez',
    email: 'martin.alvarez@ejemplo.com.ar',
    dni: '34.891.220',
    unlockedLevels: ['timonel'],
    coevDates: {
      timonel: {
        date: '2026-12-18',
        jurisdiction: 'Prefectura San Isidro / Olivos (Examen Náutico)',
        examRendered: false
      }
    }
  },
  examState: {
    courseId: 'conductor',
    examType: 'practice', // 'practice' | 'final_coev'
    answers: {},
    submitted: false,
    lastAttemptSaved: false
  },

  ripaScenarios: [
    {
      id: 'regla-15-cruce',
      title: 'Módulo Práctico: Cruce de Embarcaciones (Regla 15 RIPA)',
      prompt: 'Navegas a motor. Observas otra embarcación a motor (B) acercándose por tu <strong>estribor</strong> con marcación constante y riesgo de abordaje (ves su luz roja de babor). ¿Cuál es la maniobra reglamentaria correcta?',
      btnWrong: 'Mantener Rumbo y Velocidad',
      btnRight: 'Caer a Estribor (Ceder el Paso - 1 pitada corta ●)',
      msgRight: '✅ ¡Correcto! (Reglas 15, 16 y 34 RIPA): El barco B está por tu estribor y tiene derecho de paso. Debes maniobrar con anticipación cayendo francamente a estribor (1 pitada corta ●) para pasar por su popa.',
      msgWrong: '❌ Incorrecto (Violación Regla 15 RIPA): Al tener al barco B por tu estribor, tú eres el buque que cede el paso. Si mantienes rumbo y velocidad, provocarás un abordaje.',
      initialOtherStyle: 'top: 38px; right: 48px; transform: rotate(-45deg);',
      evasiveMyTransform: 'translateX(95px) translateY(-15px) rotate(55deg)',
      evasiveOtherTransform: 'translateX(-210px) translateY(165px) rotate(-45deg)',
      collisionMyTransform: 'translateX(-50%) translateY(-105px)',
      collisionOtherTransform: 'translateX(-135px) translateY(115px) rotate(-45deg)'
    },
    {
      id: 'regla-14-vuelta-encontrada',
      title: 'Módulo Práctico: Vuelta Encontrada (Regla 14 RIPA)',
      prompt: 'Navegas a motor y avistas por tu proa otro buque a motor viniendo de frente (de noche ves sus dos luces de costado roja y verde y sus topes alineados). ¿Qué maniobra indica la Regla 14?',
      btnWrong: 'Caer a Babor (2 pitadas cortas ●●)',
      btnRight: 'Caer a Estribor (Pasar Babor con Babor - 1 pitada ●)',
      msgRight: '✅ ¡Correcto! (Regla 14 RIPA): En vuelta encontrada, ambos buques deben caer a ESTRIBOR para pasar claros por la banda de babor del otro.',
      msgWrong: '❌ Incorrecto: Caer a babor en vuelta encontrada cierra el cruce frente a la proa del otro buque que caerá a su estribor.',
      initialOtherStyle: 'top: 24px; left: 50%; transform: translateX(-50%) rotate(180deg);',
      evasiveMyTransform: 'translateX(45px) translateY(-80px) rotate(25deg)',
      evasiveOtherTransform: 'translateX(-105px) translateY(140px) rotate(165deg)',
      collisionMyTransform: 'translateX(-50%) translateY(-95px)',
      collisionOtherTransform: 'translateX(-50%) translateY(95px) rotate(180deg)'
    },
    {
      id: 'regla-12-veleros',
      title: 'Módulo Práctico: Encuentro entre Veleros (Regla 12 RIPA)',
      prompt: 'Navegas a vela recibiendo el viento por la banda de <strong>BABOR</strong> (amurado a babor) y te cruzas con otro velero que recibe el viento por <strong>ESTRIBOR</strong> (amurado a estribor). ¿Quién debe ceder el paso?',
      btnWrong: 'El otro velero cede el paso; yo mantengo rumbo',
      btnRight: 'Yo cedo el paso (Amurado a Babor cede a Estribor)',
      msgRight: '✅ ¡Correcto! (Regla 12 a.i RIPA): Cuando dos veleros reciben el viento por bandas contrarias, el que recibe el viento por BABOR se mantendrá apartado de la derrota del otro.',
      msgWrong: '❌ Incorrecto: El velero amurado a estribor tiene prioridad reglamentaria sobre el amurado a babor.',
      initialOtherStyle: 'top: 42px; left: 52px; transform: rotate(45deg);',
      evasiveMyTransform: 'translateX(55px) translateY(-45px) rotate(45deg)',
      evasiveOtherTransform: 'translateX(145px) translateY(145px) rotate(45deg)',
      collisionMyTransform: 'translateX(-50%) translateY(-100px)',
      collisionOtherTransform: 'translateX(100px) translateY(100px) rotate(45deg)'
    },
    {
      id: 'regla-13-alcanzante',
      title: 'Módulo Práctico: Buque que Alcanza (Regla 13 RIPA)',
      prompt: 'Te aproximas a otra embarcación desde su sector de popa (más de 22,5° a popa de su través, donde de noche solo verías su luz blanca de alcance de 135°). ¿Qué establece la Regla 13?',
      btnWrong: 'Tengo prioridad si soy más rápido o voy a vela',
      btnRight: 'Todo buque que alcanza se mantiene apartado del alcanzado',
      msgRight: '✅ ¡Correcto! (Regla 13 RIPA): La Regla 13 prevalece sobre las demás: TODO buque que alcance a otro (aun siendo un velero alcanzando a un motor) debe mantenerse apartado de la derrota del buque alcanzado.',
      msgWrong: '❌ Incorrecto: Ninguna variación posterior de marcación exime al buque que alcanza de mantenerse apartado hasta haberlo pasado y estar completamente en franquía.',
      initialOtherStyle: 'top: 95px; left: 50%; transform: translateX(-50%) rotate(0deg);',
      evasiveMyTransform: 'translateX(75px) translateY(-120px) rotate(20deg)',
      evasiveOtherTransform: 'translateX(-50%) translateY(-30px) rotate(0deg)',
      collisionMyTransform: 'translateX(-50%) translateY(-95px)',
      collisionOtherTransform: 'translateX(-50%) translateY(-20px) rotate(0deg)'
    }
  ],

  async init() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      this.deferredPrompt = e;
      const btn = document.getElementById('pwa-install-btn');
      if (btn) {
        btn.style.display = 'inline-flex';
        btn.onclick = async () => {
          this.deferredPrompt.prompt();
          await this.deferredPrompt.userChoice;
          btn.style.display = 'none';
        };
      }
    });

    const savedStudent = localStorage.getItem('pna_student_session');
    if (savedStudent) {
      try {
        this.studentSession = JSON.parse(savedStudent);
      } catch (e) {}
    }

    const savedJwt = localStorage.getItem('ddm_session_jwt');
    if (savedJwt) {
      this.authToken = savedJwt;
    }

    await this.checkUrlAccessTokens();
    await this.fetchServerState();
    this.applyContentOverridesToMemory();
    this.updateHeaderUI();
    this.render();
  },

  getAuthHeaders() {
    const headers = { 'Content-Type': 'application/json' };
    if (this.authToken && this.mode === 'admin') {
      headers['Authorization'] = `Bearer ${this.authToken}`;
    } else if (this.authToken && this.mode === 'student') {
      headers['Authorization'] = `Bearer ${this.authToken}`;
    }
    return headers;
  },

  async fetchServerState() {
    try {
      const res = await fetch('/api/state', {
        headers: this.getAuthHeaders()
      });
      this.db = await res.json();
      if (this.db?.currentSession?.role === 'admin') {
        this.isAdminVerified = true;
      }
      this.applyContentOverridesToMemory();
    } catch (e) {
      console.warn('Usando configuración local de respaldo:', e);
    }
  },

  // Aplica las ediciones y revisiones editoriales guardadas por el Administrador en la base de datos
  applyContentOverridesToMemory() {
    if (!this.db) return;
    const isAdmin = this.mode === 'admin' && this.isAdminVerified;
    const unitOverrides = this.db.contentOverrides?.units || {};

    Object.values(window.COURSES_MAP).forEach(course => {
      if (!course || !course.subjects) return;
      course.subjects.forEach(subj => {
        subj.units.forEach(u => {
          const ov = unitOverrides[u.id];
          if (ov) {
            u.reviewStatus = ov.reviewStatus || 'PUBLICADO';
            if (isAdmin || u.reviewStatus === 'PUBLICADO') {
              if (ov.title) u.title = ov.title;
              if (ov.summary) u.summary = ov.summary;
              if (ov.beginnerContent) u.beginnerContent = ov.beginnerContent;
              if (ov.advancedContent) u.advancedContent = ov.advancedContent;
              if (Array.isArray(ov.keyTakeaways)) u.keyTakeaways = ov.keyTakeaways;
            }
          } else {
            u.reviewStatus = u.reviewStatus || 'PUBLICADO';
          }
        });
      });
    });
  },

  saveStudentSession() {
    localStorage.setItem('pna_student_session', JSON.stringify(this.studentSession));
  },

  async loginWithCodeOrCredentials(payload) {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data && data.ok && data.token) {
        this.authToken = data.token;
        localStorage.setItem('ddm_session_jwt', data.token);
        if (data.user.role === 'admin') {
          this.isAdminVerified = true;
          this.mode = 'admin';
        } else if (data.user.role === 'student') {
          this.mode = 'student';
          this.studentSession.studentName = data.user.name || this.studentSession.studentName;
          this.studentSession.email = data.user.email || this.studentSession.email;
          this.studentSession.dni = data.user.dni || this.studentSession.dni;
          if (Array.isArray(data.user.allowedLevels) && data.user.allowedLevels.length > 0) {
            this.studentSession.unlockedLevels = data.user.allowedLevels;
            data.user.allowedLevels.forEach(lvl => {
              this.studentSession.coevDates[lvl] = {
                date: data.user.coevDate || '2026-12-18',
                jurisdiction: data.user.coevJurisdiction || 'Prefectura San Isidro / Olivos (Examen Náutico)',
                examRendered: false
              };
            });
            this.selectedCourseId = data.user.allowedLevels[0];
          }
          this.saveStudentSession();
        } else {
          this.mode = 'demo';
        }
        await this.fetchServerState();
        return { ok: true, user: data.user };
      }
      return { ok: false, error: data?.error || 'Credenciales inválidas' };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  },

  async checkUrlAccessTokens() {
    const params = new URLSearchParams(window.location.search);
    const adminCode = params.get('acceso');
    const inviteCode = params.get('invitacion');

    if (adminCode) {
      const result = await this.loginWithCodeOrCredentials({ code: adminCode, role: 'admin' });
      if (result.ok) {
        localStorage.setItem('pna_authorized_token', adminCode);
        this.activeTab = 'cursos';
        return;
      }
    }

    if (inviteCode) {
      const result = await this.loginWithCodeOrCredentials({ code: inviteCode });
      if (result.ok) {
        localStorage.setItem('pna_authorized_token', inviteCode.toUpperCase());
        return;
      }
    }

    const storedToken = localStorage.getItem('pna_authorized_token');
    if (storedToken === 'ADMIN-PNA-2026') {
      await this.loginWithCodeOrCredentials({ code: 'ADMIN-PNA-2026', role: 'admin' });
    } else if (storedToken) {
      await this.loginWithCodeOrCredentials({ code: storedToken });
    }
  },

  showPrivateGateModal() {
    const modal = document.getElementById('private-gate-modal');
    const content = document.getElementById('private-gate-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="text-align:center; margin-bottom:14px;">
        <img src="/assets/icon-512.svg" alt="Escudo" style="width:56px; height:56px; border-radius:12px; border:2px solid var(--amber-400);" />
        <h2 style="color:var(--amber-400); margin-top:8px; font-size:1.25rem;">🔒 Acceso Privado — DOMINIO DEL MAR</h2>
        <p style="font-size:0.86rem; color:var(--slate-300); margin-top:4px;">
          La plataforma se encuentra en <strong>Modo Privado Pre-Lanzamiento</strong> con control de permisos por rol. Seleccioná un perfil para ingresar o introducí tu código:
        </p>
      </div>

      <div style="background:rgba(6,16,36,0.9); border:1px solid rgba(244,162,97,0.4); border-radius:10px; padding:14px; margin-bottom:14px;">
        <div style="display:flex; flex-direction:column; gap:8px;">
          <button class="btn btn-gold" onclick="window.App.authorizeWithToken('ADMIN-PNA-2026', 'admin')">
            🔑 Entrar como Administrador Propietario (Acceso y Edición Total)
          </button>
          <button class="btn btn-navy" onclick="window.App.authorizeWithToken('ALUMNO-TIMONEL-2026', 'student')">
            🎓 Entrar como Alumno Suscripto (Timonel Activo • Solo Lectura)
          </button>
          <button class="btn btn-outline" onclick="window.App.authorizeWithToken('NAUTA-VIP-2026', 'demo')">
            👁️ Entrar como Invitado Modo Demo (Unidad 1 Libre • Solo Lectura)
          </button>
        </div>
      </div>

      <div class="form-group" style="margin-bottom:0;">
        <label>Ingresar Código de Invitación o Token:</label>
        <div style="display:flex; gap:8px;">
          <input type="text" id="gate-invite-input" class="form-control" value="ADMIN-PNA-2026" />
          <button class="btn btn-emerald" onclick="window.App.submitGateCode()">Entrar</button>
        </div>
      </div>
    `;
    modal.classList.add('open');
  },

  async authorizeWithToken(code, targetMode) {
    localStorage.setItem('pna_authorized_token', code);
    await this.loginWithCodeOrCredentials({ code, role: targetMode });
    document.getElementById('private-gate-modal')?.classList.remove('open');
    this.setMode(targetMode);
  },

  async submitGateCode() {
    const val = (document.getElementById('gate-invite-input')?.value || '').trim().toUpperCase();
    if (!val) return;
    const res = await this.loginWithCodeOrCredentials({ code: val });
    if (res.ok) {
      localStorage.setItem('pna_authorized_token', val);
      document.getElementById('private-gate-modal')?.classList.remove('open');
      this.updateHeaderUI();
      this.render();
    } else {
      alert(res.error || 'Código no válido. Usá ADMIN-PNA-2026, ALUMNO-TIMONEL-2026 o NAUTA-VIP-2026.');
    }
  },

  // Cambio de sesión desde la barra superior (con solicitud de PIN si pasa a Admin sin estar verificado)
  async switchRoleSession(targetMode) {
    if (targetMode === 'admin' && !this.isAdminVerified) {
      this.openAdminLoginModal();
      return;
    }
    if (targetMode === 'student') {
      await this.loginWithCodeOrCredentials({ code: 'ALUMNO-TIMONEL-2026' });
      this.mode = 'student';
      this.enterSubscribedCampus(this.studentSession.unlockedLevels[0] || 'timonel');
      return;
    } else if (targetMode === 'demo') {
      await this.loginWithCodeOrCredentials({ code: 'NAUTA-VIP-2026' });
      this.mode = 'demo';
      this.goToLandingPage();
      return;
    } else if (targetMode === 'admin') {
      await this.loginWithCodeOrCredentials({ code: 'ADMIN-PNA-2026', role: 'admin' });
      this.mode = 'admin';
      this.goToLandingPage();
      return;
    }
    this.setMode(targetMode);
  },

  openAdminLoginModal() {
    const modal = document.getElementById('subscribe-modal');
    const content = document.getElementById('subscribe-modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <span class="badge-level badge-unlocked">🔑 AUTENTICACIÓN DE ADMINISTRADOR AUTORIZADO</span>
        <button class="btn btn-outline" style="padding:4px 10px;" onclick="document.getElementById('subscribe-modal').classList.remove('open')">✕</button>
      </div>
      <h3 style="color:#ffffff; font-size:1.2rem;">Acceso Exclusivo al Panel de Administración</h3>
      <p style="color:var(--slate-300); font-size:0.84rem; margin:6px 0 12px;">
        Los alumnos e invitados tienen <strong>estrictamente prohibido</strong> modificar contenidos, precios o configuraciones. Ingresá el PIN o Token Maestro de Administrador para desbloquear los permisos de edición:
      </p>
      <div class="form-group">
        <label>Token Maestro o Email de Administrador:</label>
        <input type="text" id="admin-auth-code" class="form-control" value="ADMIN-PNA-2026" />
      </div>
      <div class="form-group">
        <label>PIN de Seguridad de Administrador (Por defecto: 2026):</label>
        <input type="password" id="admin-auth-pin" class="form-control" value="2026" placeholder="Ingresá PIN 2026" />
      </div>
      <div id="admin-auth-error" style="color:#f87171; font-size:0.82rem; margin-bottom:8px; display:none;"></div>
      <div style="display:flex; gap:8px;">
        <button class="btn btn-gold" style="flex:1;" onclick="window.App.submitAdminLoginModal()">🔓 Verificar y Entrar como Administrador</button>
        <button class="btn btn-outline" onclick="document.getElementById('subscribe-modal').classList.remove('open')">Cancelar</button>
      </div>
    `;
    modal.classList.add('open');
  },

  async submitAdminLoginModal() {
    const code = (document.getElementById('admin-auth-code')?.value || '').trim();
    const pin = (document.getElementById('admin-auth-pin')?.value || '').trim();
    const errBox = document.getElementById('admin-auth-error');

    const res = await this.loginWithCodeOrCredentials({
      code,
      pin,
      role: 'admin',
      requirePinCheck: true
    });

    if (res.ok && res.user?.role === 'admin') {
      this.isAdminVerified = true;
      localStorage.setItem('pna_authorized_token', 'ADMIN-PNA-2026');
      document.getElementById('subscribe-modal')?.classList.remove('open');
      this.setMode('admin');
    } else if (errBox) {
      errBox.style.display = 'block';
      errBox.textContent = res.error || 'PIN o Token de Administrador incorrecto.';
    }
  },

  setMode(newMode) {
    window.NauticalVideoEngine?.stop();
    this.mode = newMode;
    if (newMode === 'student' && this.studentSession.unlockedLevels.length > 0) {
      this.selectedCourseId = this.studentSession.unlockedLevels[0];
    }
    if (newMode !== 'admin' && this.activeTab === 'admin') {
      this.activeTab = 'cursos';
    }
    this.applyContentOverridesToMemory();
    this.updateHeaderUI();
    this.render();
  },

  switchTab(tab) {
    window.NauticalVideoEngine?.stop();
    if (tab === 'admin' && (this.mode !== 'admin' || !this.isAdminVerified)) {
      this.openAdminLoginModal();
      return;
    }
    if (['aula', 'ripa_videos', 'simuladores', 'examenes', 'bibliografia'].includes(tab)) {
      const mapSub = {
        aula: 'unidades',
        simuladores: 'simulador_ripa',
        ripa_videos: 'videoteca_curso',
        bibliografia: 'bibliografia_curso',
        examenes: 'examen_curso'
      };
      this.courseSubTab = mapSub[tab] || 'unidades';
      this.activeTab = 'cursos';
    } else {
      this.activeTab = tab;
    }
    this.updateHeaderUI();
    this.render();
  },

  isCourseUnlocked(courseId) {
    if (this.mode === 'admin' && this.isAdminVerified) return true;
    if (this.mode === 'demo') return false;
    if (!this.studentSession.unlockedLevels.includes(courseId)) return false;
    const coevInfo = this.studentSession.coevDates[courseId];
    if (coevInfo) {
      if (coevInfo.examRendered) return false;
      const today = new Date().toISOString().slice(0, 10);
      if (coevInfo.date && coevInfo.date < today) return false;
    }
    return true;
  },

  getCourseSubscriptionState(courseId) {
    if (this.mode === 'admin' && this.isAdminVerified) return { status: 'ADMIN_FULL', label: 'Acceso y Edición Total Admin' };
    if (this.mode === 'demo') return { status: 'DEMO', label: 'Modo Demo (Unidad 1 Libre • Solo Lectura)' };

    const isInList = this.studentSession.unlockedLevels.includes(courseId);
    if (!isInList) {
      return { status: 'LOCKED_UNPAID', label: 'No Suscripto (Bloqueado)' };
    }
    const coev = this.studentSession.coevDates[courseId];
    const today = new Date().toISOString().slice(0, 10);
    if (coev && coev.examRendered) {
      return { status: 'EXPIRED_RENDERED', label: 'Examen Final Rendido (Suscripción Finalizada)' };
    }
    if (coev && coev.date && coev.date < today) {
      return { status: 'EXPIRED_DATE', label: `Suscripción Vencida (${coev.date})` };
    }
    return { status: 'ACTIVE', label: `Suscripto hasta Examen Final: ${coev?.date || 'Activa'}` };
  },

  formatPrice(courseId) {
    const priceObj = this.db?.platformConfig?.prices?.[courseId];
    const amount = priceObj ? priceObj.price : 50000;
    return '$ ' + Number(amount).toLocaleString('es-AR') + ' ARS';
  },

  getStudentCourseProgress(courseId) {
    const email = (this.studentSession.email || 'martin.alvarez@ejemplo.com.ar').toLowerCase();
    const serverProg = this.db?.studentProgress?.[email]?.[courseId];
    return (
      serverProg || {
        completedUnits: [],
        completedModules: [],
        personalNotes: {}
      }
    );
  },

  updateHeaderUI() {
    document.getElementById('mode-btn-demo')?.classList.toggle('active', this.mode === 'demo');
    document.getElementById('mode-btn-student')?.classList.toggle('active', this.mode === 'student');
    document.getElementById('mode-btn-admin')?.classList.toggle('active', this.mode === 'admin');

    const accessPill = document.getElementById('access-status-pill');
    if (accessPill && this.db) {
      if (this.db.platformConfig.accessMode === 'PRIVADO') {
        accessPill.textContent = '🔒 Modo Privado (Solo con Link)';
        accessPill.style.borderColor = '#F4A261';
      } else {
        accessPill.textContent = '🌐 Modo Público Activo';
        accessPill.style.borderColor = '#10b981';
      }
    }

    const rbacPill = document.getElementById('rbac-permission-pill');
    if (rbacPill) {
      if (this.mode === 'admin' && this.isAdminVerified) {
        rbacPill.textContent = '✏️ Permisos: Administrador Autorizado (Edición Habilitada)';
        rbacPill.style.borderColor = '#F4A261';
        rbacPill.style.color = '#F4A261';
      } else {
        rbacPill.textContent = '🛡️ Permisos: Solo Lectura (Contenidos Protegidos)';
        rbacPill.style.borderColor = '#10b981';
        rbacPill.style.color = '#6ee7b7';
      }
    }

    const coevPill = document.getElementById('student-coev-pill');
    if (coevPill) {
      if (this.mode === 'student') {
        const activeLvl = this.studentSession.unlockedLevels[0];
        const info = activeLvl ? this.studentSession.coevDates[activeLvl] : null;
        coevPill.textContent = info
          ? `🎓 ${this.studentSession.studentName} • Categoría Suscripta: ${activeLvl.toUpperCase()} (Vigencia hasta Examen: ${info.date})`
          : '🎓 Alumno Suscripto';
      } else if (this.mode === 'demo') {
        coevPill.textContent = '👁️ Página de Presentación';
      } else {
        coevPill.textContent = '🔑 Administrador Propietario';
      }
    }

    const campusBtn = document.getElementById('nav-tab-campus');
    if (campusBtn) {
      const hasSubscribedCourse =
        (this.mode === 'student' && this.studentSession.unlockedLevels.length > 0) ||
        (this.mode === 'admin' && this.isAdminVerified);
      campusBtn.style.display = hasSubscribedCourse ? 'inline-flex' : 'none';
      if (this.mode === 'student' && this.studentSession.unlockedLevels.length > 0) {
        const subId = this.studentSession.unlockedLevels[0];
        const cObj = window.COURSES_MAP[subId];
        campusBtn.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> Mi Curso Suscripto: ${cObj ? cObj.shortTitle : subId.toUpperCase()}`;
      } else {
        campusBtn.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> Campus de Estudio por Categoría`;
      }
    }

    document.querySelectorAll('.nav-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === this.activeTab);
    });
  },

  goToLandingPage() {
    window.NauticalVideoEngine?.stop();
    this.activeTab = 'cursos';
    this.updateHeaderUI();
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  enterSubscribedCampus(courseId, defaultSubTab) {
    window.NauticalVideoEngine?.stop();
    let targetId = courseId || this.selectedCourseId;
    // Si es alumno suscripto, solo puede ingresar a la categoría que abonó
    if (this.mode === 'student') {
      if (!this.isCourseUnlocked(targetId)) {
        const firstUnlocked = this.studentSession.unlockedLevels.find(l => this.isCourseUnlocked(l));
        if (firstUnlocked) {
          targetId = firstUnlocked;
        } else {
          this.openSubscribeModal(targetId);
          return;
        }
      }
    } else if (this.mode === 'demo') {
      // En modo presentación sin suscripción, abrir el modal para suscribirse a esa categoría
      this.openSubscribeModal(targetId);
      return;
    }

    this.selectedCourseId = targetId;
    this.classroomOverrideVideoId = null;
    const course = window.COURSES_MAP[targetId];
    if (course && course.subjects?.[0]?.units?.[0]) {
      this.selectedUnitId = course.subjects[0].units[0].id;
    }
    this.examState.courseId = targetId;
    this.examState.answers = {};
    this.examState.submitted = false;
    this.examState.lastAttemptSaved = false;

    const courseVids = (window.RIPA_AND_ARG_VIDEOS || []).filter(v =>
      v.requiredForLevels.includes(targetId)
    );
    if (courseVids.length > 0) {
      this.selectedRipaVideoId = courseVids[0].id;
    }

    this.courseSubTab = defaultSubTab || 'unidades';
    this.activeTab = 'campus';
    this.updateHeaderUI();
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  render() {
    const root = document.getElementById('app-root');
    if (!root) return;

    const storedToken = localStorage.getItem('pna_authorized_token');
    if (this.db && this.db.platformConfig.accessMode === 'PRIVADO' && !storedToken && !this.authToken) {
      this.showPrivateGateModal();
    }

    if (this.activeTab === 'cursos') {
      this.renderLandingPresentationPage(root);
    } else if (this.activeTab === 'campus') {
      this.renderExclusiveCategoryCampus(root);
    } else if (this.activeTab === 'alumno') {
      this.renderStudentArea(root);
    } else if (this.activeTab === 'nauta') {
      this.renderNautaPortal(root);
    } else if (this.activeTab === 'admin') {
      if (this.mode !== 'admin' || !this.isAdminVerified) {
        this.openAdminLoginModal();
        this.activeTab = 'cursos';
        this.renderLandingPresentationPage(root);
        return;
      }
      this.renderAdminPanel(root);
    }
  },

  // ==========================================================================
  // CENTRO INTEGRAL DE ESTUDIO UNIFICADO POR CATEGORÍA PNA
  // ==========================================================================
  selectCourseCategory(courseId, defaultSubTab) {
    window.NauticalVideoEngine?.stop();
    this.selectedCourseId = courseId;
    this.classroomOverrideVideoId = null;
    const course = window.COURSES_MAP[courseId];
    if (course && course.subjects?.[0]?.units?.[0]) {
      this.selectedUnitId = course.subjects[0].units[0].id;
    }
    this.examState.courseId = courseId;
    this.examState.answers = {};
    this.examState.submitted = false;
    this.examState.lastAttemptSaved = false;

    const courseVids = (window.RIPA_AND_ARG_VIDEOS || []).filter(v =>
      v.requiredForLevels.includes(courseId)
    );
    if (courseVids.length > 0) {
      this.selectedRipaVideoId = courseVids[0].id;
    }
    if (defaultSubTab) {
      this.courseSubTab = defaultSubTab;
    }
    this.render();
  },

  setCourseSubTab(subTab) {
    window.NauticalVideoEngine?.stop();
    this.courseSubTab = subTab;
    this.courseSearchQuery = '';
    this.render();
  },

  onCourseSearchInput(val) {
    this.courseSearchQuery = val;
    const resultsBox = document.getElementById('course-instant-search-results');
    if (resultsBox) {
      resultsBox.innerHTML = this.buildCourseSearchResultsHtml(this.selectedCourseId, val);
      resultsBox.style.display = val.trim().length > 0 ? 'block' : 'none';
    }
  },

  buildCourseSearchResultsHtml(courseId, query) {
    const q = (query || '').trim().toLowerCase();
    if (!q) return '';

    const course = window.COURSES_MAP[courseId];
    const results = [];

    // 1. Buscar en Unidades de este Curso
    course.subjects.forEach(subj => {
      subj.units.forEach(u => {
        const hay = `${u.number} ${u.title} ${u.summary} ${u.beginnerContent} ${u.advancedContent}`.toLowerCase();
        if (hay.includes(q)) {
          results.push({
            type: '📖 Unidad del Curso',
            title: `${u.number}: ${u.title} (${subj.title})`,
            desc: u.summary,
            action: `window.App.jumpFromSearch('unidades', '${u.id}')`
          });
        }
      });
    });

    // 2. Buscar en los 8 Módulos Curriculares PNA
    const modulesList = this.db?.academicBundle?.modules || [];
    modulesList.forEach(m => {
      const hay = `${m.id} ${m.title} ${m.summary} ${(m.keyConcepts || []).map(k => k.term + ' ' + k.definition).join(' ')}`.toLowerCase();
      if (hay.includes(q)) {
        results.push({
          type: '📐 Módulo Curricular y Plano SVG',
          title: `${m.title}`,
          desc: m.summary,
          action: `window.App.jumpFromSearch('modulos_pna', '${m.id}')`
        });
      }
    });

    // 3. Buscar en Videos RIPA y Leyes de este Curso
    const vids = (window.RIPA_AND_ARG_VIDEOS || []).filter(v => v.requiredForLevels.includes(courseId));
    vids.forEach(v => {
      const hay = `${v.code} ${v.title} ${v.category} ${v.levelDepthNote}`.toLowerCase();
      if (hay.includes(q)) {
        results.push({
          type: '🎬 Video Animado 3D RIPA / Ley',
          title: `${v.code} — ${v.title}`,
          desc: v.levelDepthNote,
          action: `window.App.jumpFromSearch('videoteca_curso', '${v.id}')`
        });
      }
    });

    // 4. Buscar en Simuladores del Curso
    if ('regla 15 cruce abordaje estribor babor veleros vuelta encontrada alcanzante rumbo marea sonda faro sextante'.includes(q) || q.includes('regla') || q.includes('simulador')) {
      results.push({
        type: '🕹️ Simulador Práctico del Curso',
        title: 'Simulador Interactivo RIPA (Regla 15, 14, 12, 13) y Calculadoras Náuticas',
        desc: 'Práctica interactiva de maniobras de cruce, luces y cálculos de navegación del nivel.',
        action: `window.App.jumpFromSearch('simulador_ripa')`
      });
    }

    // 5. Buscar en Bibliografía Oficial de este Curso
    const bibs = (window.NAUTICAL_RESOURCES?.bibliography || []).filter(b => b.levels.includes(courseId));
    bibs.forEach(b => {
      const hay = `${b.code} ${b.title} ${b.summary} ${b.contentDigest}`.toLowerCase();
      if (hay.includes(q)) {
        results.push({
          type: '📚 Normativa Oficial',
          title: `${b.code} — ${b.title}`,
          desc: b.summary,
          action: `window.App.jumpFromSearch('bibliografia_curso')`
        });
      }
    });

    if (results.length === 0) {
      return `<div style="padding:12px; color:var(--slate-300); font-size:0.84rem;">No se encontraron coincidencias para "<strong>${query}</strong>" dentro de ${course.shortTitle}. Probá con "Regla 15", "Púlpito", "Boya", "Sudestada", "REGINAVE" o "Compás".</div>`;
    }

    return `
      <div style="font-size:0.75rem; font-weight:800; color:var(--amber-400); margin-bottom:8px; text-transform:uppercase;">
        🔍 ${results.length} resultados encontrados dentro de ${course.title}:
      </div>
      <div style="display:grid; gap:6px; max-height:280px; overflow-y:auto;">
        ${results
          .slice(0, 12)
          .map(
            r => `
            <div onclick="${r.action}" style="background:rgba(28,49,94,0.85); border:1px solid rgba(42,157,143,0.45); border-radius:8px; padding:8px 12px; cursor:pointer; display:flex; justify-content:space-between; align-items:center; gap:10px;">
              <div>
                <span style="font-size:0.7rem; color:#5eead4; font-weight:800;">${r.type}</span>
                <div style="font-size:0.86rem; color:#ffffff; font-weight:700;">${r.title}</div>
                <div style="font-size:0.76rem; color:var(--slate-300);">${r.desc}</div>
              </div>
              <span class="btn btn-gold" style="padding:4px 10px; font-size:0.74rem;">Abrir ➔</span>
            </div>
          `
          )
          .join('')}
      </div>
    `;
  },

  jumpFromSearch(targetSubTab, itemId) {
    this.courseSearchQuery = '';
    this.courseSubTab = targetSubTab;
    if (targetSubTab === 'unidades' && itemId) {
      this.selectedUnitId = itemId;
    } else if (targetSubTab === 'modulos_pna' && itemId) {
      this.selectedModuleId = itemId;
    } else if (targetSubTab === 'videoteca_curso' && itemId) {
      this.selectedRipaVideoId = itemId;
    }
    this.render();
  },

  getCourseMergedQuestions(courseId) {
    const course = window.COURSES_MAP[courseId] || window.COURSE_CONDUCTOR;
    const baseQuestions = course.questions || [];
    const customQuestions = (this.db?.customQuestions || []).filter(
      q => q.courseId === courseId && (this.mode === 'admin' || q.reviewStatus === 'PUBLICADO')
    );
    return [...baseQuestions, ...customQuestions];
  },

  // ==========================================================================
  // VISTA 1: PÁGINA DE PRESENTACIÓN PRINCIPAL (SIN MATERIAL DE ESTUDIO)
  // ==========================================================================
  renderLandingPresentationPage(root) {
    const order = ['conductor', 'timonel', 'patron', 'piloto'];
    const photos = {
      conductor: '/assets/course-conductor-real.jpg',
      timonel: '/assets/course-timonel-real.jpg',
      patron: '/assets/course-patron-real.jpg',
      piloto: '/assets/course-piloto-real.jpg'
    };
    const taglines = {
      conductor: 'Lanchas y artefactos deportivos a motor hasta 7 m de eslora y 140 HP',
      timonel: 'Embarcaciones a Vela y Motor hasta 12 m de eslora (navegación diurna y nocturna)',
      patron: 'Yates a Vela y Motor hasta 20 m de eslora (navegación lacustre, fluvial y costera marítima)',
      piloto: 'Navegación Oceánica, Astronómica y de Altura sin límite de alejamiento geográfico'
    };

    const courseCardsHtml = order
      .map(id => {
        const c = window.COURSES_MAP[id];
        const unlocked = this.isCourseUnlocked(id);
        const totalUnits = c.subjects.reduce((acc, s) => acc + s.units.length, 0);
        const courseVidsCount = (window.RIPA_AND_ARG_VIDEOS || []).filter(v =>
          v.requiredForLevels.includes(id)
        ).length;
        const priceStr = this.formatPrice(id);

        return `
          <div class="real-course-card">
            <div>
              <div class="real-course-photo-wrap">
                <img src="${photos[id]}" alt="${c.title}" class="real-course-photo" />
                <span class="real-course-overlay-badge">
                  ${unlocked ? '🟢 SUSCRIPCIÓN ACTIVA' : '⚓ PREPARACIÓN PRIVADA'}
                </span>
                <span class="real-course-price-float">${priceStr}</span>
              </div>

              <div class="real-course-body">
                <div>
                  <h3 style="font-family:'League Spartan', sans-serif; font-size:1.45rem; font-weight:900; color:#ffffff; margin-bottom:4px;">
                    ${c.shortTitle}
                  </h3>
                  <div style="font-size:0.8rem; color:var(--amber-400); font-weight:700; margin-bottom:8px;">
                    ⏱️ ${c.suggestedHours} • 🚤 ${taglines[id]}
                  </div>
                  <p style="font-size:0.84rem; color:var(--slate-300); line-height:1.45; margin-bottom:12px;">
                    ${c.scopeSummary}
                  </p>

                  <div style="background:rgba(6,16,36,0.85); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:10px 12px; margin-bottom:14px;">
                    <div style="font-size:0.72rem; font-weight:800; color:#5eead4; text-transform:uppercase; margin-bottom:6px;">
                      Qué incluye tu suscripción a ${c.shortTitle}:
                    </div>
                    <ul style="list-style:none; margin:0; padding:0; font-size:0.79rem; color:var(--slate-200);">
                      ${c.subjects
                        .map(
                          s =>
                            `<li style="margin-bottom:3px;"><i class="fa-solid fa-check" style="color:#2A9D8F; margin-right:5px;"></i> <strong>${s.title}</strong> (${s.units.length} unidades completas)</li>`
                        )
                        .join('')}
                      <li style="margin-bottom:3px;"><i class="fa-solid fa-film" style="color:#F4A261; margin-right:5px;"></i> <strong>${courseVidsCount} Videos 3D</strong> de Reglas de Maniobra y Normativa de esta categoría</li>
                      <li style="margin-bottom:3px;"><i class="fa-solid fa-compass-drafting" style="color:#F4A261; margin-right:5px;"></i> Planos Técnicos de Ingeniería, Simulador Práctico y Tutor IA 24/7</li>
                      <li><i class="fa-solid fa-file-circle-check" style="color:#2A9D8F; margin-right:5px;"></i> Examen de Práctica con corrección automática y Simulacro Final</li>
                    </ul>
                  </div>
                </div>

                <div style="display:flex; flex-direction:column; gap:8px;">
                  ${
                    unlocked
                      ? `<button type="button" class="btn btn-emerald" style="width:100%; padding:11px; font-size:0.9rem;" onclick="window.App.enterSubscribedCampus('${id}')">
                          <i class="fa-solid fa-door-open"></i> Ingresar al Campus Exclusivo de ${c.shortTitle}
                        </button>`
                      : `<button type="button" class="btn btn-gold" style="width:100%; padding:11px; font-size:0.9rem;" onclick="window.App.openSubscribeModal('${id}')">
                          <i class="fa-solid fa-lock-open"></i> Suscribirme a ${c.shortTitle} (${priceStr})
                        </button>`
                  }
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .join('');

    root.innerHTML = `
      <!-- 1. HERO DE PRESENTACIÓN COMERCIAL FOTORREALISTA -->
      <section class="landing-hero-card">
        <div style="max-width:760px;">
          <span class="badge-level badge-unlocked" style="font-size:0.76rem; padding:4px 12px;">
            <i class="fa-solid fa-anchor"></i> ACADEMIA PARTICULAR DE PREPARACIÓN NÁUTICA DEPORTIVA
          </span>
          <h1 class="landing-hero-title">
            PREPARATE A TU RITMO PARA RENDIR TU CATEGORÍA NÁUTICO-DEPORTIVA
          </h1>
          <p style="font-size:1rem; color:var(--slate-100); line-height:1.5; margin-bottom:12px;">
            Estudiá desde tu celular, tablet o computadora con clases audiovisuales en español, láminas técnicas de ingeniería naval, simuladores prácticos de maniobra en tiempo real y exámenes de autoevaluación hasta el día en que rindas tu examen.
          </p>

          <div class="private-disclaimer-box">
            <i class="fa-solid fa-scale-balanced"></i>
            <strong>ACLARACIÓN IMPORTANTE — PLATAFORMA PARTICULAR E INDEPENDIENTE:</strong>
            Esta aplicación móvil y sitio web son un emprendimiento educativo estrictamente privado y particular.
            <strong>No pertenecen, no dependen ni tienen vinculación oficial alguna con la Prefectura Naval Argentina (PNA).</strong>
            Su única finalidad es brindar material bibliográfico, audiovisual y práctico de estudio para que el usuario se prepare de forma privada para rendir los exámenes de las distintas categorías náutico-deportivas.
          </div>

          <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:18px;">
            <a href="#catalogo-cursos-section" class="btn btn-gold" style="padding:12px 22px; font-size:0.95rem;">
              <i class="fa-solid fa-ship"></i> Ver Cursos y Categorías Disponibles
            </a>
            ${
              (this.mode === 'student' && this.studentSession.unlockedLevels.length > 0) ||
              (this.mode === 'admin' && this.isAdminVerified)
                ? `<button type="button" class="btn btn-emerald" style="padding:12px 22px; font-size:0.95rem;" onclick="window.App.enterSubscribedCampus()">
                    <i class="fa-solid fa-graduation-cap"></i> Ir Directo a Mi Curso Suscripto
                  </button>`
                : ''
            }
          </div>
        </div>
      </section>

      <!-- 2. LAS BONDADES Y BENEFICIOS QUE TENDRÁ EL USUARIO UNA VEZ SUSCRIPTO -->
      <section style="margin-bottom:28px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
          <div>
            <span class="badge-level badge-demo">VENTAJAS EXCLUSIVAS PARA ALUMNOS SUSCRIPTOS</span>
            <h2 style="font-family:'League Spartan', sans-serif; font-size:1.75rem; font-weight:900; color:#ffffff; margin-top:2px;">
              ¿Qué bondades y herramientas tendrás al suscribirte a tu categoría?
            </h2>
          </div>
          <span style="font-size:0.82rem; color:#5eead4; font-weight:700;">
            <i class="fa-solid fa-mobile-screen-button"></i> Sincronización permanente en tiempo real entre Web y App Móvil
          </span>
        </div>

        <div class="benefits-grid">
          <div class="benefit-card">
            <div style="font-size:1.5rem; color:var(--amber-400); margin-bottom:6px;"><i class="fa-solid fa-layer-group"></i></div>
            <h4 style="color:#ffffff; font-size:1rem; margin-bottom:4px;">1. Aula Exclusiva de tu Categoría</h4>
            <p style="font-size:0.83rem; color:var(--slate-300);">
              Al suscribirte ingresás a un Campus privado dedicado exclusivamente a la categoría que abonaste, sin distracciones ni material mezclado de otros niveles.
            </p>
          </div>

          <div class="benefit-card">
            <div style="font-size:1.5rem; color:#5eead4; margin-bottom:6px;"><i class="fa-solid fa-brain"></i></div>
            <h4 style="color:#ffffff; font-size:1rem; margin-bottom:4px;">2. Doble Estrategia de Explicación</h4>
            <p style="font-size:0.83rem; color:var(--slate-300);">
              Cada unidad cuenta con <strong>Modo Inicial (paso a paso desde cero)</strong> para quienes recién comienzan y <strong>Modo Técnico Avanzado</strong> para profundizar con precisión.
            </p>
          </div>

          <div class="benefit-card">
            <div style="font-size:1.5rem; color:var(--amber-400); margin-bottom:6px;"><i class="fa-solid fa-film"></i></div>
            <h4 style="color:#ffffff; font-size:1rem; margin-bottom:4px;">3. Videos Animados 3D y Voz IA en Español</h4>
            <p style="font-size:0.83rem; color:var(--slate-300);">
              Visualizá y escuchá cada maniobra, regla internacional para prevenir abordajes, luces, marcas diurnas, boyas y legislación explicadas de forma visual y auditiva.
            </p>
          </div>

          <div class="benefit-card">
            <div style="font-size:1.5rem; color:#5eead4; margin-bottom:6px;"><i class="fa-solid fa-compass-drafting"></i></div>
            <h4 style="color:#ffffff; font-size:1rem; margin-bottom:4px;">4. Planos Técnicos y Simulador Interactivo</h4>
            <p style="font-size:0.83rem; color:var(--slate-300);">
              Practicá cruces de embarcaciones (Regla 15 y maniobras evasivas), cálculo de rumbos, mareas y margen de agua bajo la quilla en el laboratorio práctico de tu nivel.
            </p>
          </div>

          <div class="benefit-card">
            <div style="font-size:1.5rem; color:var(--amber-400); margin-bottom:6px;"><i class="fa-solid fa-robot"></i></div>
            <h4 style="color:#ffffff; font-size:1rem; margin-bottom:4px;">5. Tutor Naval Google AI Studio 24/7</h4>
            <p style="font-size:0.83rem; color:var(--slate-300);">
              Consultá cualquier duda durante tu estudio dentro del curso y recibí respuestas instantáneas fundamentadas en la bibliografía y reglamentación de tu categoría.
            </p>
          </div>

          <div class="benefit-card">
            <div style="font-size:1.5rem; color:#5eead4; margin-bottom:6px;"><i class="fa-solid fa-calendar-check"></i></div>
            <h4 style="color:#ffffff; font-size:1rem; margin-bottom:4px;">6. Acceso Ilimitado hasta tu Fecha de Examen</h4>
            <p style="font-size:0.83rem; color:var(--slate-300);">
              Estudiá sin apuros las 24 hs, realizá exámenes de prueba con corrección automática y muestra de errores, y mantené tu acceso activo hasta la fecha probable de tu examen.
            </p>
          </div>
        </div>
      </section>

      <!-- 3. CATÁLOGO FOTOGRÁFICO DE LOS 4 CURSOS (SIN MOSTRAR MATERIAL DE ESTUDIO EN LA PORTADA) -->
      <section id="catalogo-cursos-section">
        <div style="margin-bottom:16px;">
          <span class="badge-level badge-unlocked">CURSOS DE PREPARACIÓN POR CATEGORÍA</span>
          <h2 style="font-family:'League Spartan', sans-serif; font-size:1.8rem; font-weight:900; color:#ffffff; margin-top:2px;">
            Elegí la Categoría Náutico-Deportiva que vas a Rendir
          </h2>
          <p style="font-size:0.88rem; color:var(--slate-300);">
            Al suscribirte a tu categoría se habilita de inmediato tu Campus Privado con todo el material de estudio, videos, planos técnicos, simuladores y exámenes correspondientes únicamente a ese nivel.
          </p>
        </div>

        <div class="grid-4" style="grid-template-columns: repeat(auto-fit, minmax(295px, 1fr)); gap:18px;">
          ${courseCardsHtml}
        </div>
      </section>
    `;
  },

  // ==========================================================================
  // VISTA 2: CAMPUS EXCLUSIVO DEL CURSO SUSCRIPTO (DIFERENCIADO DE LA PORTADA
  // Y AISLADO ÚNICAMENTE PARA LA CATEGORÍA CORRESPONDIENTE)
  // ==========================================================================
  renderExclusiveCategoryCampus(root) {
    const icons = { conductor: '🚤', timonel: '⛵', patron: '🧭', piloto: '🌍' };
    const photos = {
      conductor: '/assets/course-conductor-real.jpg',
      timonel: '/assets/course-timonel-real.jpg',
      patron: '/assets/course-patron-real.jpg',
      piloto: '/assets/course-piloto-real.jpg'
    };

    const activeCourse = window.COURSES_MAP[this.selectedCourseId] || window.COURSE_CONDUCTOR;
    const isUnlocked = this.isCourseUnlocked(activeCourse.id);
    const activeSubState = this.getCourseSubscriptionState(activeCourse.id);

    // Si un usuario no suscripto intenta entrar al campus, redirigir a la presentación y abrir modal de suscripción
    if (!isUnlocked) {
      this.activeTab = 'cursos';
      this.renderLandingPresentationPage(root);
      this.openSubscribeModal(activeCourse.id);
      return;
    }

    const totalUnits = activeCourse.subjects.reduce((acc, s) => acc + s.units.length, 0);
    // Filtrar módulos exclusivamente pertinentes a esta categoría
    const allModules = this.db?.academicBundle?.modules || [];
    const categoryModules = allModules.filter(m => {
      if (activeCourse.id === 'conductor') return m.id !== 'module-06';
      return true;
    });
    const totalModules = categoryModules.length || (activeCourse.id === 'conductor' ? 7 : 8);

    const courseVideosCount = (window.RIPA_AND_ARG_VIDEOS || []).filter(v =>
      v.requiredForLevels.includes(activeCourse.id)
    ).length;
    const courseBibsCount = (window.NAUTICAL_RESOURCES?.bibliography || []).filter(b =>
      b.levels.includes(activeCourse.id)
    ).length;
    const courseQuestionsCount = this.getCourseMergedQuestions(activeCourse.id).length;

    const prog = this.getStudentCourseProgress(activeCourse.id);
    const completedUnitsCount = (prog.completedUnits || []).length;

    // Selector rápido SOLO para el Administrador (para que el dueño pueda auditar cada campus individualmente; los alumnos NUNCA ven otras categorías)
    const adminCategorySwitchHtml =
      this.mode === 'admin' && this.isAdminVerified
        ? `<div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; margin-bottom:12px; padding:8px 12px; background:rgba(244,162,97,0.12); border:1px dashed var(--amber-400); border-radius:10px; font-size:0.78rem;">
            <strong style="color:var(--amber-400);"><i class="fa-solid fa-eye"></i> Vista Auditoría Admin (El alumno suscripto solo ve su propia categoría):</strong>
            ${['conductor', 'timonel', 'patron', 'piloto']
              .map(cid => {
                const cObj = window.COURSES_MAP[cid];
                return `<button type="button" class="btn ${cid === activeCourse.id ? 'btn-gold' : 'btn-outline'}" style="padding:4px 10px; font-size:0.74rem;" onclick="window.App.enterSubscribedCampus('${cid}')">${icons[cid]} ${cObj.shortTitle}</button>`;
              })
              .join('')}
          </div>`
        : '';

    root.innerHTML = `
      <div class="campus-exclusive-shell">
        <!-- Barra Superior del Campus Exclusivo con Botón para Volver a la Página de Presentación -->
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
          <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
            <span class="badge-level badge-unlocked" style="margin:0; font-size:0.76rem; padding:4px 12px;">
              🎓 CAMPUS PRIVADO DEL SUSCRIPTOR • CATEGORÍA EXCLUSIVA: ${activeCourse.shortTitle.toUpperCase()}
            </span>
            <span style="font-size:0.78rem; color:#5eead4; font-weight:700;">
              📈 Mi Avance en ${activeCourse.shortTitle}: <strong>${completedUnitsCount} de ${totalUnits} unidades completadas</strong>
            </span>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button type="button" class="btn btn-outline" style="padding:6px 12px; font-size:0.78rem;" onclick="window.App.switchTab('alumno')">
              <i class="fa-solid fa-chart-line"></i> Mi Progreso y Fecha de Examen
            </button>
            <button type="button" class="btn btn-navy" style="padding:6px 12px; font-size:0.78rem;" onclick="window.App.goToLandingPage()">
              <i class="fa-solid fa-arrow-left"></i> Volver a la Página de Presentación
            </button>
          </div>
        </div>

        ${adminCategorySwitchHtml}

        <!-- Cabecera Fotorrealista Exclusiva de la Categoría Suscripta -->
        <div class="campus-exclusive-header course-hub-banner" style="background-image: linear-gradient(90deg, rgba(6,16,36,0.95) 0%, rgba(11,27,61,0.86) 60%, rgba(6,16,36,0.55) 100%), url('${photos[activeCourse.id]}');">
          <div style="max-width:620px;">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <span class="badge-level badge-unlocked">${activeSubState.label}</span>
              <span style="font-size:0.76rem; color:var(--amber-400); font-weight:800;">⏱️ ${activeCourse.suggestedHours}</span>
            </div>
            <h2 style="font-family:'League Spartan', sans-serif; font-size:1.75rem; color:#ffffff; font-weight:900; margin-top:4px;">
              ${icons[activeCourse.id]} ${activeCourse.title}
            </h2>
            <p style="font-size:0.84rem; color:var(--slate-200); margin-top:4px;">
              ${activeCourse.scopeSummary}
            </p>
          </div>

          <!-- Buscador Interno Exclusivo de esta Categoría -->
          <div class="course-search-wrap">
            <span style="position:absolute; left:11px; top:9px; font-size:0.9rem;">🔍</span>
            <input
              type="search"
              class="course-search-input"
              placeholder="Buscar tema, regla, ley, boya o maniobra dentro de ${activeCourse.shortTitle}..."
              value="${this.courseSearchQuery}"
              oninput="window.App.onCourseSearchInput(this.value)"
            />
            <div style="font-size:0.72rem; color:#5eead4; margin-top:6px;">
              <i class="fa-solid fa-filter"></i> Mostrando únicamente el material de estudio competente a <strong>${activeCourse.shortTitle}</strong>.
            </div>
          </div>
        </div>

        <!-- Caja Desplegable Instantánea de Resultados del Buscador de esta Categoría -->
        <div id="course-instant-search-results" style="display:${this.courseSearchQuery.trim() ? 'block' : 'none'}; background:#061024; border:2px solid var(--amber-400); border-radius:10px; padding:12px; margin-bottom:14px;">
          ${this.buildCourseSearchResultsHtml(activeCourse.id, this.courseSearchQuery)}
        </div>

        <!-- 6 Secciones de Estudio Competentes Únicamente a esta Categoría -->
        <div class="course-subtabs-bar" style="grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));">
          <button class="course-subtab-btn ${this.courseSubTab === 'unidades' ? 'active' : ''}" onclick="window.App.setCourseSubTab('unidades')">
            📖 1. Unidades de ${activeCourse.shortTitle} (${totalUnits})
          </button>
          <button class="course-subtab-btn ${this.courseSubTab === 'modulos_pna' ? 'active' : ''}" onclick="window.App.setCourseSubTab('modulos_pna')">
            📐 2. Planos y Módulos del Nivel (${totalModules})
          </button>
          <button class="course-subtab-btn ${this.courseSubTab === 'simulador_ripa' ? 'active' : ''}" onclick="window.App.setCourseSubTab('simulador_ripa')">
            🕹️ 3. Simulador Regla 15 y Práctica
          </button>
          <button class="course-subtab-btn ${this.courseSubTab === 'videoteca_curso' ? 'active' : ''}" onclick="window.App.setCourseSubTab('videoteca_curso')">
            🎬 4. Videos 3D de ${activeCourse.shortTitle} (${courseVideosCount})
          </button>
          <button class="course-subtab-btn ${this.courseSubTab === 'bibliografia_curso' ? 'active' : ''}" onclick="window.App.setCourseSubTab('bibliografia_curso')">
            📚 5. Bibliografía de ${activeCourse.shortTitle} (${courseBibsCount})
          </button>
          <button class="course-subtab-btn ${this.courseSubTab === 'examen_curso' ? 'active' : ''}" onclick="window.App.setCourseSubTab('examen_curso')">
            📝 6. Examen de ${activeCourse.shortTitle} (${courseQuestionsCount})
          </button>
        </div>

        <!-- Contenedor Dinámico del Material de Estudio de la Categoría -->
        <div id="course-subtab-body"></div>
      </div>
    `;

    const subRoot = document.getElementById('course-subtab-body');
    if (!subRoot) return;

    if (this.courseSubTab === 'unidades') {
      this.renderCourseUnitsSection(subRoot, activeCourse);
    } else if (this.courseSubTab === 'modulos_pna') {
      this.renderCourseModulesSection(subRoot, activeCourse);
    } else if (this.courseSubTab === 'simulador_ripa') {
      this.renderCourseSimulatorsSection(subRoot, activeCourse);
    } else if (this.courseSubTab === 'videoteca_curso') {
      this.renderCourseRipaVideosSection(subRoot, activeCourse);
    } else if (this.courseSubTab === 'bibliografia_curso') {
      this.renderCourseBibliographySection(subRoot, activeCourse);
    } else if (this.courseSubTab === 'examen_curso') {
      this.examState.courseId = activeCourse.id;
      this.renderExams(subRoot);
    }
  },

  // ==========================================================================
  // SECCIÓN 1 DEL CURSO: UNIDADES, PLANOS TÉCNICOS E INFOGRAFÍAS IA
  // ==========================================================================
  renderCourseUnitsSection(subRoot, course) {
    const isCourseUnlocked = this.isCourseUnlocked(course.id);
    const isAdmin = this.mode === 'admin' && this.isAdminVerified;
    const prog = this.getStudentCourseProgress(course.id);

    let activeSubject = course.subjects[0];
    let activeUnit = activeSubject.units[0];
    for (const subj of course.subjects) {
      for (const u of subj.units) {
        if (u.id === this.selectedUnitId) {
          activeSubject = subj;
          activeUnit = u;
        }
      }
    }

    const canReadUnit = isCourseUnlocked || activeUnit.isDemoOpen;
    const isUnitDone = (prog.completedUnits || []).includes(activeUnit.id);
    const studentNote = prog.personalNotes?.[activeUnit.id] || '';

    const sidebarHtml = course.subjects
      .map(subj => {
        const unitsHtml = subj.units
          .filter(u => isAdmin || u.reviewStatus !== 'EN_REVISION')
          .map(u => {
            const uOpen = isCourseUnlocked || u.isDemoOpen;
            const uDone = (prog.completedUnits || []).includes(u.id);
            return `
              <button class="unit-item-btn ${u.id === activeUnit.id ? 'active' : ''}" onclick="window.App.selectUnit('${u.id}')">
                <span><strong>${u.number}:</strong> ${u.title} ${u.reviewStatus === 'EN_REVISION' ? '⚠️(En Revisión)' : ''}</span>
                <span>${uDone ? '✅' : uOpen ? '📖' : '🔒'}</span>
              </button>
            `;
          })
          .join('');
        return `
          <div class="subject-group">
            <div class="subject-group-title">${subj.title}</div>
            ${unitsHtml}
          </div>
        `;
      })
      .join('');

    const activeVideoKey = this.classroomOverrideVideoId || activeUnit.videoSceneId;
    const sceneData = window.NauticalVideoEngine.getSceneData(activeVideoKey);
    const activeVideoTitle = this.classroomOverrideVideoId
      ? sceneData.title
      : activeUnit.videoTitle || sceneData.title;

    // Selección de lámina técnica SVG de apoyo según la unidad
    let blueprintSvgUrl = '/images/cubierta-nomenclatura.svg';
    let blueprintSecondSvgUrl = '/images/zonas-barco-sectores.svg';
    const uidLower = activeUnit.id.toLowerCase();
    if (uidLower.includes('leg')) {
      blueprintSvgUrl = '/images/ripa-sectores-luces.svg';
      blueprintSecondSvgUrl = '/images/tratado-rio-de-la-plata.svg';
    } else if (uidLower.includes('nav')) {
      blueprintSvgUrl = '/images/iala-b-cardinales.svg';
      blueprintSecondSvgUrl = '/images/ripa-regla12-veleros.svg';
    }

    const adminUnitEditorHtml = isAdmin
      ? `
        <div style="margin-top:16px; background:rgba(244,162,97,0.1); border:2px dashed var(--amber-400); border-radius:10px; padding:14px;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
            <div>
              <span class="badge-level badge-unlocked">✏️ MODO EDICIÓN EDITORIAL (EXCLUSIVO ADMINISTRADOR AUTORIZADO)</span>
              <h4 style="color:#ffffff; margin-top:4px; font-size:0.95rem;">Editar o Poner en Revisión esta Unidad (${activeUnit.id})</h4>
            </div>
            <button type="button" class="btn btn-gold" onclick="window.App.openAdminUnitEditorModal('${course.id}', '${activeUnit.id}')">
              ✏️ Editar Contenido Oficial de ${activeUnit.number}
            </button>
          </div>
        </div>
      `
      : '';

    const lessonContentHtml = canReadUnit
      ? `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px; margin-bottom:12px;">
          <div>
            <span class="badge-level ${isCourseUnlocked ? 'badge-unlocked' : 'badge-demo'}">
              ${course.shortTitle} • ${activeSubject.title} • ${activeUnit.number}
            </span>
            <h3 style="font-size:1.25rem; color:#ffffff;">${activeUnit.title}</h3>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button class="btn ${isUnitDone ? 'btn-emerald' : 'btn-outline'}" style="padding:6px 11px; font-size:0.78rem;" onclick="window.App.toggleCompleteUnit('${course.id}', '${activeUnit.id}')">
              ${isUnitDone ? '✅ Unidad Estudiada' : '☐ Marcar como Estudiada'}
            </button>
            <button class="btn btn-navy" style="padding:6px 11px; font-size:0.78rem;" onclick="window.App.setCourseSubTab('simulador_ripa')">
              🕹️ Practicar en Simulador
            </button>
            <button class="btn btn-gold" style="padding:6px 11px; font-size:0.78rem;" onclick="window.App.setCourseSubTab('examen_curso')">
              📝 Autoevaluación del Nivel
            </button>
          </div>
        </div>

        <!-- Reproductor de Video Explicativo IA (Estilo Plano Naval Código Náutico) -->
        <div class="video-player-card">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:8px;">
            <div>
              <span style="font-size:0.7rem; background:var(--teal-500); color:#fff; padding:2px 8px; border-radius:99px; font-weight:800;">
                🎥 VIDEO EXPLICATIVO IA (ESTILO PLANO NAVAL "CÓDIGO NÁUTICO" + VOZ ESPAÑOL)
              </span>
              <h4 id="classroom-active-video-title" style="color:#ffffff; font-size:0.98rem; margin-top:4px;">${activeVideoTitle}</h4>
            </div>
            <div style="display:flex; gap:5px; flex-wrap:wrap;">
              ${sceneData.scenes
                .map(
                  (_, idx) =>
                    `<button type="button" class="video-step-pill ${idx === 0 ? 'active' : ''}" onclick="window.NauticalVideoEngine.playScene('${activeVideoKey}', ${idx})">Escena ${idx + 1}</button>`
                )
                .join('')}
            </div>
          </div>

          <canvas id="nautical-video-canvas" width="760" height="320"></canvas>

          <div class="video-subtitle" id="video-subtitle-box">
            ${sceneData.scenes[0].subtitle}
          </div>

          <div class="video-controls-row">
            <div style="display:flex; gap:6px; flex-wrap:wrap;">
              <button type="button" class="btn btn-gold" id="video-play-btn" onclick="window.NauticalVideoEngine.togglePlay('${activeVideoKey}')">
                ▶ Reproducir Clase Animada (Voz IA Español)
              </button>
              <button type="button" class="btn btn-outline" onclick="window.NauticalVideoEngine.stop()">⏹ Detener Voz</button>
            </div>
            <div style="display:flex; align-items:center; gap:6px; font-size:0.78rem; color:var(--slate-300);">
              <label>Velocidad:</label>
              <select class="form-control" style="width:auto; padding:3px 7px; font-size:0.78rem;" onchange="window.NauticalVideoEngine.speechRate = parseFloat(this.value)">
                <option value="0.9">0.9x</option>
                <option value="1.0" selected>1.0x</option>
                <option value="1.15">1.15x</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Selector Pedagógico Adaptativo Compacto -->
        <div class="pedagogy-switch">
          <button class="pedagogy-btn ${this.pedagogyLevel === 'beginner' ? 'active' : ''}" onclick="window.App.setPedagogy('beginner')">
            🟢 Nivel Inicial: Explicación Paso a Paso desde Cero
          </button>
          <button class="pedagogy-btn ${this.pedagogyLevel === 'advanced' ? 'active' : ''}" onclick="window.App.setPedagogy('advanced')">
            🔵 Nivel Avanzado: Rigor Técnico y Reglamentario Examen Náutico
          </button>
          <button class="btn btn-outline" style="padding:5px 10px; font-size:0.76rem;" onclick="window.App.readLessonAloud()">
            🔊 Escuchar Apunte
          </button>
        </div>

        <!-- Desarrollo Teórico-Práctico de la Unidad (Solo Lectura para Alumnos) -->
        <div class="lesson-body" id="lesson-text-container" style="margin-top:12px;">
          ${this.pedagogyLevel === 'beginner' ? activeUnit.beginnerContent : activeUnit.advancedContent}
        </div>

        <!-- Láminas Técnicas Vectoriales de Ingeniería Naval (Código Náutico) -->
        <div style="margin-top:16px; background:#F4F1E8; border:2px solid #162942; border-radius:10px; padding:12px; color:#162942;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; border-bottom:2px solid #E26D24; padding-bottom:6px;">
            <strong style="font-size:0.82rem; letter-spacing:0.5px;">📐 LÁMINAS TÉCNICAS DE INGENIERÍA NAVAL DE ESTA UNIDAD (ESTILO CÓDIGO NÁUTICO)</strong>
            <span style="font-size:0.72rem; color:#2C73B4; font-weight:800;">PNA / RIPA / IALA B</span>
          </div>
          <div class="grid-2" style="gap:10px;">
            <img src="${blueprintSvgUrl}" alt="Plano Técnico Naval 1" style="width:100%; height:auto; border:1px solid #162942; border-radius:6px;" />
            <img src="${blueprintSecondSvgUrl}" alt="Plano Técnico Naval 2" style="width:100%; height:auto; border:1px solid #162942; border-radius:6px;" />
          </div>
        </div>

        <!-- Puntos Clave de Examen PNA -->
        <div class="takeaways-box">
          <h4>⚓ Puntos Clave de Examen ante la Mesa Examinadora:</h4>
          <ul>
            ${(activeUnit.keyTakeaways || []).map(k => `<li><strong>${k}</strong></li>`).join('')}
          </ul>
        </div>

        <!-- Cuaderno de Apuntes Personales del Alumno (Privado del Alumno, no altera el curso) -->
        <div style="margin-top:14px; background:rgba(6,16,36,0.85); border:1px solid rgba(42,157,143,0.45); border-radius:10px; padding:12px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <strong style="font-size:0.84rem; color:#5eead4;">📝 Mis Apuntes Personales de Estudio (${activeUnit.number})</strong>
            <span style="font-size:0.72rem; color:var(--slate-300);">Privado de tu cuenta de alumno • El material oficial del curso es inmutable</span>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <input type="text" id="student-unit-note-input" class="form-control" style="flex:1;" placeholder="Escribí un recordatorio personal para repasar antes de la Fecha de Examen..." value="${studentNote.replace(/"/g, '&quot;')}" />
            <button type="button" class="btn btn-navy" onclick="window.App.saveStudentPersonalNote('${course.id}', '${activeUnit.id}')">💾 Guardar Mi Apunte</button>
          </div>
        </div>

        ${adminUnitEditorHtml}
      `
      : `
        <div style="text-align:center; padding:36px 18px;">
          <div style="font-size:2.6rem; margin-bottom:8px;">🔒</div>
          <span class="badge-level badge-locked">CONTENIDO EXCLUSIVO PARA SUSCRIPTORES DE ${course.shortTitle.toUpperCase()}</span>
          <h3 style="color:#ffffff; margin-top:8px;">${activeUnit.number}: ${activeUnit.title}</h3>
          <p style="color:var(--slate-300); max-width:520px; margin:8px auto 18px; font-size:0.88rem;">
            En el Modo Demo está habilitada la Unidad 1 de muestra. Al suscribirte a <strong>${course.title}</strong> por <strong>${this.formatPrice(course.id)}</strong>, desbloqueás en el acto todas las unidades, los 8 módulos SVG, videos IA, simuladores y exámenes hasta tu fecha de Examen Final.
          </p>
          <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap;">
            <button class="btn btn-gold" onclick="window.App.openSubscribeModal('${course.id}')">
              💳 Suscribirme a ${course.shortTitle} (${this.formatPrice(course.id)})
            </button>
            <button class="btn btn-outline" onclick="window.App.selectUnit('${course.subjects[0].units[0].id}')">
              ↩ Volver a la Unidad 1 Libre
            </button>
          </div>
        </div>
      `;

    subRoot.innerHTML = `
      <div class="classroom-layout">
        <aside class="syllabus-sidebar">
          <div style="font-size:0.86rem; font-weight:900; color:#ffffff; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
            <span>📋 Programa ${course.shortTitle}</span>
            <span style="font-size:0.7rem; color:var(--amber-400);">${course.code}</span>
          </div>
          ${sidebarHtml}
        </aside>
        <section class="lesson-panel">
          ${lessonContentHtml}
        </section>
      </div>
    `;

    if (canReadUnit) {
      setTimeout(() => {
        const scene = window.NauticalVideoEngine.getSceneData(activeVideoKey);
        window.NauticalVideoEngine.currentSceneKey = activeVideoKey;
        window.NauticalVideoEngine.startCanvasLoop(scene.visualMode, scene.scenes[0].highlight, activeVideoKey);
      }, 50);
    }
  },

  // ==========================================================================
  // SECCIÓN 2 DEL CURSO: LOS 8 MÓDULOS CURRICULARES PNA Y PLANOS VECTORIALES SVG
  // ==========================================================================
  renderCourseModulesSection(subRoot, course) {
    const rawModules = this.db?.academicBundle?.modules || [];
    const allModules = rawModules.filter(m => {
      if (course.id === 'conductor') return m.id !== 'module-06';
      return true;
    });
    const activeMod =
      allModules.find(m => m.id === this.selectedModuleId) ||
      allModules[0] || {
        id: 'module-01',
        title: 'Módulo 01: Nomenclatura Marinera y Seguridad de Cubierta',
        svg: '/images/cubierta-nomenclatura.svg',
        summary: 'Estudio integral del casco, dimensiones y elementos de cubierta.',
        normativeSources: ['Programa Oficial PNA'],
        keyConcepts: []
      };

    const prog = this.getStudentCourseProgress(course.id);
    const isModDone = (prog.completedModules || []).includes(activeMod.id);
    const isUnlocked = this.isCourseUnlocked(course.id) || activeMod.id === 'module-01';

    const sidebarHtml = allModules
      .map(m => {
        const done = (prog.completedModules || []).includes(m.id);
        const open = this.isCourseUnlocked(course.id) || m.id === 'module-01';
        return `
          <button type="button" class="unit-item-btn ${m.id === activeMod.id ? 'active' : ''}" onclick="window.App.selectCurricularModule('${m.id}')">
            <span><strong>${m.id.toUpperCase()}:</strong> ${m.title.replace(/^Módulo \d+:\s*/, '')}</span>
            <span>${done ? '✅' : open ? '📐' : '🔒'}</span>
          </button>
        `;
      })
      .join('');

    const contentHtml = isUnlocked
      ? `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
          <div>
            <span class="badge-level badge-unlocked">${activeMod.id.toUpperCase()} • MATRIZ CURRICULAR Examen Náutico</span>
            <h3 style="color:#ffffff; font-size:1.2rem; margin-top:4px;">${activeMod.title}</h3>
          </div>
          <div style="display:flex; gap:8px;">
            <button type="button" class="btn ${isModDone ? 'btn-emerald' : 'btn-outline'}" onclick="window.App.toggleCompleteModule('${course.id}', '${activeMod.id}')">
              ${isModDone ? '✅ Módulo Completado' : '☐ Marcar Módulo Completado'}
            </button>
            <button type="button" class="btn btn-gold" onclick="window.NauticalVideoEngine.speakText('${(activeMod.title + '. ' + activeMod.summary).replace(/'/g, '')}')">
              🔊 Escuchar Síntesis
            </button>
          </div>
        </div>

        <p style="font-size:0.9rem; color:var(--slate-200); margin-bottom:14px;">${activeMod.summary}</p>

        <!-- Renderizador Oficial de Infografía Técnica estilo "Código Náutico" (#F4F1E8 / #162942 / #2C73B4 / #E26D24) -->
        <figure style="background:#F4F1E8; border:2px solid #162942; border-radius:10px; padding:16px; color:#162942; margin:0 0 16px 0;">
          <header style="border-bottom:2px solid #E26D24; padding-bottom:8px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap;">
            <div>
              <div style="font-size:11px; font-weight:800; color:#E26D24; letter-spacing:1.2px;">PLANO DE INGENIERÍA NAVAL · ESTILO CÓDIGO NÁUTICO</div>
              <h4 style="margin:4px 0 0; font-weight:900; font-size:1.05rem; color:#162942;">${activeMod.title}</h4>
            </div>
            <a href="${activeMod.svg}" target="_blank" style="font-size:12px; font-weight:800; color:#2C73B4; text-decoration:underline;">🔍 Abrir Plano Vectorial SVG en Alta Resolución ↗</a>
          </header>
          <div>
            <img src="${activeMod.svg}" alt="${activeMod.title}" style="width:100%; height:auto; display:block; border:1px solid #162942; border-radius:6px;" />
          </div>
          <ul style="display:grid; grid-template-columns:repeat(auto-fit, minmax(230px, 1fr)); gap:8px; margin-top:12px; padding:0; list-style:none;">
            ${(activeMod.keyConcepts || [])
              .map(
                c => `
                <li style="background:#EDE7D8; padding:8px 10px; border-left:4px solid #E26D24; font-size:12.5px; line-height:1.4;">
                  <strong style="color:#162942;">●──── ${c.term}:</strong> ${c.definition}
                </li>
              `
              )
              .join('')}
          </ul>
          <footer style="margin-top:10px; font-size:11.5px; font-family:monospace; color:#162942; display:flex; justify-content:space-between; flex-wrap:wrap;">
            <span><strong>Fuentes Reglamentarias:</strong> ${(activeMod.normativeSources || []).join(' · ')}</span>
            <a href="/subtitles/${activeMod.id}.vtt" target="_blank" style="color:#2C73B4; font-weight:700;">💬 Ver Subtítulos WebVTT (${activeMod.id}.vtt)</a>
          </footer>
        </figure>
      `
      : `
        <div style="text-align:center; padding:36px 18px;">
          <div style="font-size:2.4rem; margin-bottom:8px;">🔒</div>
          <span class="badge-level badge-locked">MÓDULO RESERVADO PARA ALUMNOS SUSCRIPTOS EN ${course.shortTitle.toUpperCase()}</span>
          <h3 style="color:#ffffff; margin-top:8px;">${activeMod.title}</h3>
          <p style="color:var(--slate-300); max-width:520px; margin:8px auto 16px; font-size:0.88rem;">
            En el Modo Demo podés inspeccionar libremente el Módulo 01. Suscribite a <strong>${course.title}</strong> para desbloquear los 8 módulos curriculares completos y sus planos técnicos vectoriales.
          </p>
          <button class="btn btn-gold" onclick="window.App.openSubscribeModal('${course.id}')">
            💳 Desbloquear Curso Completo (${this.formatPrice(course.id)})
          </button>
        </div>
      `;

    subRoot.innerHTML = `
      <div class="classroom-layout">
        <aside class="syllabus-sidebar">
          <div style="font-size:0.86rem; font-weight:900; color:#ffffff; margin-bottom:10px;">
            📐 8 Módulos Oficiales PNA
          </div>
          ${sidebarHtml}
        </aside>
        <section class="lesson-panel">
          ${contentHtml}
        </section>
      </div>
    `;
  },

  selectCurricularModule(modId) {
    this.selectedModuleId = modId;
    this.render();
  },

  // ==========================================================================
  // SECCIÓN 3 DEL CURSO: SIMULADOR PRÁCTICO RIPA (REGLA 15 Y MÁS) + CÁLCULOS
  // ==========================================================================
  renderCourseSimulatorsSection(subRoot, course) {
    const scenario = this.ripaScenarios[this.activeRipaScenarioIdx] || this.ripaScenarios[0];

    const scenarioTabs = this.ripaScenarios
      .map(
        (sc, idx) => `
        <button type="button" class="btn ${idx === this.activeRipaScenarioIdx ? 'btn-gold' : 'btn-outline'}" style="padding:6px 12px; font-size:0.78rem;" onclick="window.App.selectRipaScenario(${idx})">
          ${idx + 1}. ${sc.title.replace('Módulo Práctico: ', '')}
        </button>
      `
      )
      .join('');

    subRoot.innerHTML = `
      <!-- 1. SIMULADOR INTERACTIVO DE CRUCE Y MANIOBRAS RIPA (REGLA 15, 14, 12, 13) -->
      <div class="ripa-sim-wrapper" style="margin-bottom:18px;">
        <div style="display:flex; justify-content:center; gap:8px; flex-wrap:wrap; margin-bottom:12px;">
          ${scenarioTabs}
        </div>

        <h2>${scenario.title}</h2>
        <p style="max-width:680px; margin:0 auto; font-size:0.92rem; color:#e2e8f0;">
          ${scenario.prompt}
        </p>

        <div class="escenario">
          <div style="position:absolute; top:10px; left:12px; font-size:0.72rem; color:#5eead4; font-weight:800; text-align:left;">
            🧭 NORTE (000°)<br>
            <span style="color:#F4A261;">Curso: ${course.shortTitle}</span>
          </div>
          <div id="otroBarco" class="barco" style="${scenario.initialOtherStyle}">B</div>
          <div id="miBarco" class="barco">TÚ</div>
        </div>

        <div class="ripa-opciones">
          <button class="ripa-btn" onclick="verificarRespuesta(false)">${scenario.btnWrong}</button>
          <button class="ripa-btn" onclick="verificarRespuesta(true)">${scenario.btnRight}</button>
          <button class="ripa-btn" style="background:#2A9D8F; color:#ffffff;" onclick="window.App.resetRipaScenario()">🔄 Reiniciar Maniobra</button>
        </div>

        <div id="resultado">Seleccioná una maniobra arriba para ejecutar la simulación cinemática.</div>
      </div>

      <!-- 2. CALCULADORAS Y SIMULADORES TÉCNICOS CORRESPONDIENTES A ESTE CURSO -->
      <div class="grid-2">
        <!-- Conversor de Rumbos y Compás -->
        <div class="nautical-card">
          <div>
            <h3 style="color:var(--amber-400); font-size:1.05rem; margin-bottom:6px;">🧭 Calculadora de Rumbos (Rv, Rm, Rc, Dm, d, Vt)</h3>
            <p style="font-size:0.82rem; color:var(--slate-300); margin-bottom:10px;">
              Practicá la conversión de rumbos magnéticos, verdaderos y de compás exigida en ${course.shortTitle}.
            </p>
            <div class="grid-2" style="grid-template-columns: 1fr 1fr; gap:8px;">
              <div class="form-group">
                <label>Conversión:</label>
                <select id="sim-rumbo-mode" class="form-control" onchange="window.App.calcRumboSim()">
                  <option value="c2v">De Compás a Carta (Hallar Rv)</option>
                  <option value="v2c">De Carta a Compás (Hallar Rc)</option>
                </select>
              </div>
              <div class="form-group">
                <label>Rumbo Entrada (°):</label>
                <input type="number" id="sim-rumbo-in" class="form-control" value="110" min="0" max="360" oninput="window.App.calcRumboSim()" />
              </div>
              <div class="form-group">
                <label>Declinación (Dm, -W / +E):</label>
                <input type="number" id="sim-dm" class="form-control" value="-8" step="0.5" oninput="window.App.calcRumboSim()" />
              </div>
              <div class="form-group">
                <label>Desvío (d, -W / +E):</label>
                <input type="number" id="sim-desvio" class="form-control" value="2" step="0.5" oninput="window.App.calcRumboSim()" />
              </div>
            </div>
            <div id="sim-rumbo-result" style="background:#061024; border:1px solid var(--teal-500); border-radius:8px; padding:10px; margin-top:6px;"></div>
          </div>
        </div>

        <!-- Sondaje, Marea y Agua Bajo Quilla -->
        <div class="nautical-card">
          <div>
            <h3 style="color:var(--amber-400); font-size:1.05rem; margin-bottom:6px;">🌊 Simulador de Marea, Sondaje y Agua Bajo Quilla</h3>
            <p style="font-size:0.82rem; color:var(--slate-300); margin-bottom:10px;">
              Verificá el margen de seguridad bajo la quilla combinando Carta SHN, Tabla de Mareas y Calado.
            </p>
            <div class="grid-2" style="grid-template-columns: 1fr 1fr 1fr; gap:8px;">
              <div class="form-group">
                <label>Sondaje Carta (m):</label>
                <input type="number" id="sim-sonda" class="form-control" value="1.50" step="0.1" oninput="window.App.calcMareaSim()" />
              </div>
              <div class="form-group">
                <label>Altura Marea (m):</label>
                <input type="number" id="sim-marea" class="form-control" value="0.85" step="0.05" oninput="window.App.calcMareaSim()" />
              </div>
              <div class="form-group">
                <label>Calado Barco (m):</label>
                <input type="number" id="sim-calado" class="form-control" value="1.40" step="0.1" oninput="window.App.calcMareaSim()" />
              </div>
            </div>
            <div id="sim-marea-result" style="background:#061024; border:1px solid var(--emerald-500); border-radius:8px; padding:10px; margin-top:6px;"></div>
          </div>
        </div>

        <!-- Alcance Geográfico de Faros -->
        <div class="nautical-card">
          <div>
            <h3 style="color:var(--amber-400); font-size:1.05rem; margin-bottom:6px;">🚨 Alcance Geográfico de Faros (Dg = 2,08 × (√H + √h))</h3>
            <div class="grid-2" style="grid-template-columns: 1fr 1fr; gap:8px;">
              <div class="form-group">
                <label>Elevación Faro H (m):</label>
                <input type="number" id="sim-faro-H" class="form-control" value="49" min="1" oninput="window.App.calcFaroSim()" />
              </div>
              <div class="form-group">
                <label>Ojo Observador h (m):</label>
                <input type="number" id="sim-faro-h" class="form-control" value="4" min="0.5" step="0.5" oninput="window.App.calcFaroSim()" />
              </div>
            </div>
            <div id="sim-faro-result" style="background:#061024; border:1px solid var(--amber-400); border-radius:8px; padding:10px; margin-top:6px;"></div>
          </div>
        </div>

        <!-- Recta de Altura Marcq Saint-Hilaire -->
        <div class="nautical-card">
          <div>
            <h3 style="color:var(--amber-400); font-size:1.05rem; margin-bottom:6px;">☀️ Recta Astronómica Marcq Saint-Hilaire (Δa = Av − Ac)</h3>
            <div class="grid-2" style="grid-template-columns: 1fr 1fr 1fr; gap:8px;">
              <div class="form-group">
                <label>Altura Av (°):</label>
                <input type="number" id="sim-av" class="form-control" value="42.30" step="0.05" oninput="window.App.calcSaintHilaireSim()" />
              </div>
              <div class="form-group">
                <label>Altura Ac (°):</label>
                <input type="number" id="sim-ac" class="form-control" value="42.15" step="0.05" oninput="window.App.calcSaintHilaireSim()" />
              </div>
              <div class="form-group">
                <label>Acimut Zv (°):</label>
                <input type="number" id="sim-zv" class="form-control" value="65" min="0" max="360" oninput="window.App.calcSaintHilaireSim()" />
              </div>
            </div>
            <div id="sim-sh-result" style="background:#061024; border:1px solid var(--sky-400); border-radius:8px; padding:10px; margin-top:6px;"></div>
          </div>
        </div>
      </div>
    `;

    this.calcRumboSim();
    this.calcMareaSim();
    this.calcFaroSim();
    this.calcSaintHilaireSim();
  },

  selectRipaScenario(idx) {
    this.activeRipaScenarioIdx = idx;
    const subRoot = document.getElementById('course-subtab-body');
    const course = window.COURSES_MAP[this.selectedCourseId] || window.COURSE_CONDUCTOR;
    if (subRoot) this.renderCourseSimulatorsSection(subRoot, course);
  },

  resetRipaScenario() {
    this.selectRipaScenario(this.activeRipaScenarioIdx);
  },

  handleRipaSimAnswer(esCorrecta) {
    const scenario = this.ripaScenarios[this.activeRipaScenarioIdx] || this.ripaScenarios[0];
    const resultado = document.getElementById('resultado');
    const miBarco = document.getElementById('miBarco');
    const otroBarco = document.getElementById('otroBarco');
    if (!resultado || !miBarco || !otroBarco) return;

    if (esCorrecta) {
      resultado.innerHTML = scenario.msgRight;
      resultado.style.color = '#2A9D8F';
      miBarco.style.transform = scenario.evasiveMyTransform;
      otroBarco.style.transform = scenario.evasiveOtherTransform;
      window.NauticalVideoEngine?.speakText(scenario.msgRight.replace(/✅|¡|!/g, ''));
    } else {
      resultado.innerHTML = scenario.msgWrong;
      resultado.style.color = '#E63946';
      miBarco.style.transform = scenario.collisionMyTransform;
      otroBarco.style.transform = scenario.collisionOtherTransform;
      window.NauticalVideoEngine?.speakText(scenario.msgWrong.replace(/❌/g, ''));
    }
  },

  // ==========================================================================
  // SECCIÓN 4 DEL CURSO: VIDEOTECA RIPA Y LEYES 3D EXCLUSIVA DE ESTA CATEGORÍA
  // ==========================================================================
  renderCourseRipaVideosSection(subRoot, course) {
    const allVideos = window.RIPA_AND_ARG_VIDEOS || [];
    const filteredVideos = allVideos.filter(v => v.requiredForLevels.includes(course.id));
    const activeVideo =
      filteredVideos.find(v => v.id === this.selectedRipaVideoId) ||
      filteredVideos[0] ||
      allVideos[0];

    const evalMatrix = window.PNA_CATEGORY_EVALUATION_MATRIX?.[course.id];

    const playlistHtml = filteredVideos
      .map(v => {
        const isCurrent = v.id === activeVideo.id;
        return `
          <button type="button" class="unit-item-btn ${isCurrent ? 'active' : ''}" style="flex-direction:column; align-items:flex-start; gap:3px;" onclick="window.App.selectRipaVideo('${v.id}')">
            <div style="display:flex; justify-content:space-between; width:100%; font-size:0.72rem; color:var(--amber-400); font-weight:800;">
              <span>🎬 ${v.code}</span>
              <span>${v.category}</span>
            </div>
            <div style="font-size:0.82rem; color:#ffffff; font-weight:700;">${v.title}</div>
          </button>
        `;
      })
      .join('');

    subRoot.innerHTML = `
      ${
        evalMatrix
          ? `<div class="nautical-card" style="margin-bottom:14px; border-color:var(--amber-400);">
              <h4 style="color:var(--amber-400); font-size:1rem; margin-bottom:4px;">
                📋 Qué exige la Comisión Evaluadora PNA en ${evalMatrix.title}:
              </h4>
              <p style="font-size:0.84rem; color:var(--slate-200); margin-bottom:10px;">${evalMatrix.summary}</p>
              <div class="grid-2" style="gap:10px;">
                <div style="background:rgba(6,16,36,0.8); padding:10px; border-radius:8px; border:1px solid rgba(42,157,143,0.4);">
                  <strong style="color:#5eead4; font-size:0.8rem;">Reglas RIPA Exigidas en ${course.shortTitle}:</strong>
                  <ul style="font-size:0.78rem; color:var(--slate-200); margin:4px 0 0 16px;">
                    ${evalMatrix.ripaScope.map(s => `<li>${s}</li>`).join('')}
                  </ul>
                </div>
                <div style="background:rgba(6,16,36,0.8); padding:10px; border-radius:8px; border:1px solid rgba(244,162,97,0.4);">
                  <strong style="color:var(--amber-400); font-size:0.8rem;">Leyes Argentinas e IALA B Exigidas en ${course.shortTitle}:</strong>
                  <ul style="font-size:0.78rem; color:var(--slate-200); margin:4px 0 0 16px;">
                    ${evalMatrix.argentineLawScope.map(s => `<li>${s}</li>`).join('')}
                  </ul>
                </div>
              </div>
            </div>`
          : ''
      }

      <div class="classroom-layout">
        <aside class="syllabus-sidebar">
          <div style="font-size:0.86rem; font-weight:900; color:#ffffff; margin-bottom:8px;">
            🎞️ Videos Obligatorios de ${course.shortTitle} (${filteredVideos.length})
          </div>
          ${playlistHtml}
        </aside>

        <section class="lesson-panel">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:8px; margin-bottom:10px;">
            <div>
              <span class="badge-level badge-unlocked">${activeVideo.code} • ${activeVideo.category}</span>
              <h3 style="color:#ffffff; font-size:1.2rem;">${activeVideo.title}</h3>
            </div>
            <div style="display:flex; gap:5px;">
              ${activeVideo.scenes
                .map(
                  (_, idx) =>
                    `<button type="button" class="video-step-pill ${idx === 0 ? 'active' : ''}" onclick="window.NauticalVideoEngine.playScene('${activeVideo.id}', ${idx})">Parte ${idx + 1}</button>`
                )
                .join('')}
            </div>
          </div>

          <div class="video-player-card">
            <canvas id="nautical-video-canvas" width="760" height="340"></canvas>
            <div class="video-subtitle" id="video-subtitle-box">
              ${activeVideo.scenes[0].subtitle}
            </div>
            <div class="video-controls-row">
              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <button type="button" class="btn btn-gold" id="video-play-btn" onclick="window.NauticalVideoEngine.togglePlay('${activeVideo.id}')">
                  ▶ Reproducir Video Reglamentario + Voz IA
                </button>
                <button type="button" class="btn btn-outline" onclick="window.NauticalVideoEngine.stop()">⏹ Detener Voz</button>
              </div>
              <div style="font-size:0.78rem; color:var(--amber-400); font-weight:700;">
                💡 ${activeVideo.animationConfig?.trickBadge || ''}
              </div>
            </div>
          </div>

          <div class="lesson-body">
            <h4>📜 Desarrollo Completo de la Norma para ${course.shortTitle}:</h4>
            <p style="font-size:0.84rem; color:#5eead4; font-weight:700;">${activeVideo.levelDepthNote}</p>
            ${activeVideo.scenes
              .map(
                (s, i) => `
                <div style="background:rgba(6,16,36,0.8); border-left:3px solid var(--teal-500); padding:10px 12px; border-radius:6px; margin-bottom:8px;">
                  <div style="font-size:0.76rem; color:var(--amber-400); font-weight:800;">ESCENA ${i + 1}: ${s.subtitle}</div>
                  <p style="margin:4px 0 0; font-size:0.86rem; color:var(--slate-200);">${s.narration}</p>
                </div>
              `
              )
              .join('')}
          </div>
        </section>
      </div>
    `;

    setTimeout(() => {
      const scene = window.NauticalVideoEngine.getSceneData(activeVideo.id);
      window.NauticalVideoEngine.currentSceneKey = activeVideo.id;
      window.NauticalVideoEngine.startCanvasLoop(scene.visualMode, scene.scenes[0].highlight);
    }, 50);
  },

  // ==========================================================================
  // SECCIÓN 5 DEL CURSO: BIBLIOGRAFÍA, ANEXOS RIPA Y FUENTES NORMATIVAS
  // ==========================================================================
  renderCourseBibliographySection(subRoot, course) {
    const items = (window.NAUTICAL_RESOURCES?.bibliography || []).filter(b =>
      b.levels.includes(course.id)
    );
    const annexes = this.db?.academicBundle?.annexes?.annexes || [];
    const regDocs = this.db?.academicBundle?.regulatoryDocs || [];

    const cards = items
      .map(
        item => `
        <div class="nautical-card" style="margin-bottom:12px;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;">
              <span class="badge-level badge-unlocked">${item.code} • ${item.category}</span>
              <span style="font-size:0.75rem; color:var(--amber-400); font-weight:700;">${item.authority}</span>
            </div>
            <h3 style="color:#ffffff; font-size:1.1rem; margin-top:2px;">${item.title}</h3>
            <p style="color:var(--slate-300); font-size:0.84rem; margin:6px 0 10px;">${item.summary}</p>
            <div class="lesson-body" style="background:rgba(6,16,36,0.8); padding:12px; border-radius:8px; border:1px solid rgba(255,255,255,0.08);">
              ${item.contentDigest}
            </div>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:10px;">
            <button type="button" class="btn btn-navy" onclick="window.App.openExternalLink('${item.officialUrl}', '${item.title.replace(/'/g, "\\'")}', '${item.summary.replace(/'/g, "\\'")}')">
              🏛️ Fuente Oficial (${item.authority.split('/')[0].trim()}) ↗
            </button>
            ${
              item.infolegUrl
                ? `<button type="button" class="btn btn-outline" onclick="window.App.openExternalLink('${item.infolegUrl}', 'InfoLEG - ${item.code}', 'Texto oficial completo en InfoLEG.')">
                    📜 Texto Completo InfoLEG ↗
                  </button>`
                : ''
            }
          </div>
        </div>
      `
      )
      .join('');

    const annexesHtml = annexes.length
      ? `
        <div class="nautical-card" style="margin-bottom:14px; border-color:var(--teal-500);">
          <h3 style="color:var(--amber-400); font-size:1.08rem; margin-bottom:8px;">⚓ Anexos Técnicos Oficiales I a IV del RIPA (Ley 21.546)</h3>
          <div class="grid-2" style="gap:10px;">
            ${annexes
              .map(
                a => `
                <div style="background:#061024; border:1px solid rgba(42,157,143,0.4); border-radius:8px; padding:10px;">
                  <strong style="color:#5eead4; font-size:0.84rem;">${a.title}</strong>
                  <p style="font-size:0.8rem; color:var(--slate-200); margin-top:4px;">${a.summary}</p>
                </div>
              `
              )
              .join('')}
          </div>
        </div>
      `
      : '';

    const docsHtml = regDocs.length
      ? `
        <div class="nautical-card" style="margin-bottom:14px;">
          <h3 style="color:#ffffff; font-size:1.05rem; margin-bottom:8px;">📂 Compendios Normativos Verificados del Repositorio (docs/regulatory-sources/)</h3>
          <div class="grid-2" style="gap:10px;">
            ${regDocs
              .map(
                d => `
                <div style="background:#061024; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                    <strong style="color:var(--amber-400); font-size:0.82rem;">📄 ${d.filename}</strong>
                    <a href="/docs/regulatory-sources/${d.filename}" target="_blank" style="font-size:0.74rem; color:#5eead4; text-decoration:underline;">Abrir archivo .md ↗</a>
                  </div>
                  <pre style="white-space:pre-wrap; font-family:inherit; font-size:0.78rem; color:var(--slate-200); margin:0; max-height:130px; overflow-y:auto;">${d.content}</pre>
                </div>
              `
              )
              .join('')}
          </div>
        </div>
      `
      : '';

    subRoot.innerHTML = `
      <div style="margin-bottom:12px;">
        <h3 style="font-size:1.15rem; color:#ffffff;">📚 Bibliografía Oficial, Leyes, Ordenanzas y Anexos RIPA exigidos en ${course.title}</h3>
        <p style="color:var(--slate-300); font-size:0.84rem;">
          Compendio normativo verificado y filtrado para los exámenes teóricos y prácticos de <strong>${course.shortTitle}</strong> ante PNA.
        </p>
      </div>
      ${annexesHtml}
      ${docsHtml}
      <div>${cards}</div>
    `;
  },

  // ==========================================================================
  // ÁREA EXCLUSIVA DE ALUMNOS: PERFIL, PROGRESO, APUNTES, HISTORIAL Y VERIFICACIÓN RBAC
  // ==========================================================================
  renderStudentArea(root) {
    const order = ['conductor', 'timonel', 'patron', 'piloto'];
    const icons = { conductor: '🚤', timonel: '⛵', patron: '🧭', piloto: '🌍' };
    const email = (this.studentSession.email || 'martin.alvarez@ejemplo.com.ar').toLowerCase();
    const attempts = (this.db?.examAttempts || []).filter(
      a => a.userEmail.toLowerCase() === email || this.mode === 'admin'
    );

    const coursesStatusHtml = order
      .map(cid => {
        const c = window.COURSES_MAP[cid];
        const unlocked = this.isCourseUnlocked(cid);
        const st = this.getCourseSubscriptionState(cid);
        const prog = this.getStudentCourseProgress(cid);
        const totalU = c.subjects.reduce((acc, s) => acc + s.units.length, 0);
        const doneU = (prog.completedUnits || []).length;
        const pctU = totalU ? Math.round((doneU / totalU) * 100) : 0;
        const coevInfo = this.studentSession.coevDates[cid];

        let daysRemainingStr = '';
        if (coevInfo && coevInfo.date && !coevInfo.examRendered) {
          const diffDays = Math.ceil((new Date(coevInfo.date + 'T23:59:59') - new Date()) / 86400000);
          daysRemainingStr =
            diffDays >= 0
              ? `⏳ Faltan ${diffDays} días para tu Examen Final (${coevInfo.date})`
              : `⚠️ Fecha de Examen cumplida (${coevInfo.date})`;
        }

        return `
          <div class="nautical-card" style="border-color:${unlocked ? '#10b981' : 'rgba(255,255,255,0.12)'};">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="badge-level ${unlocked ? 'badge-unlocked' : 'badge-locked'}">${st.label}</span>
                <span style="font-size:0.78rem; color:var(--amber-400); font-weight:800;">${pctU}% Completado</span>
              </div>
              <h3 style="color:#ffffff; font-size:1.05rem; margin-top:4px;">${icons[cid]} ${c.title}</h3>
              <p style="font-size:0.8rem; color:var(--slate-300); margin:4px 0 8px;">
                Unidades estudiadas: <strong>${doneU} de ${totalU}</strong> • Módulos PNA: <strong>${(prog.completedModules || []).length}/8</strong>
              </p>
              <div style="background:#061024; height:8px; border-radius:99px; overflow:hidden; margin-bottom:8px;">
                <div style="width:${pctU}%; height:100%; background:linear-gradient(90deg, #2A9D8F, #34d399);"></div>
              </div>
              ${
                coevInfo
                  ? `<div style="font-size:0.78rem; color:#5eead4; margin-bottom:8px;">
                      🏛️ <strong>Sede:</strong> ${coevInfo.jurisdiction}<br>
                      ${daysRemainingStr}
                    </div>`
                  : ''
              }
            </div>
            <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:6px;">
              ${
                unlocked
                  ? `<button class="btn btn-gold" style="flex:1; font-size:0.78rem;" onclick="window.App.selectCourseCategory('${cid}', 'unidades'); window.App.switchTab('cursos')">📖 Continuar Estudio</button>
                     ${
                       coevInfo
                         ? `<button class="btn btn-outline" style="font-size:0.74rem;" onclick="window.App.toggleExamRendered('${cid}')">${coevInfo.examRendered ? 'Reactivar' : '✔ Ya Rendí Examen'}</button>`
                         : ''
                     }`
                  : `<button class="btn btn-navy" style="flex:1; font-size:0.78rem;" onclick="window.App.openSubscribeModal('${cid}')">🔓 Suscribirme (${this.formatPrice(cid)})</button>`
              }
            </div>
          </div>
        `;
      })
      .join('');

    const attemptsRowsHtml = attempts.length
      ? attempts
          .map(
            a => `
            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
              <td style="padding:8px;">${String(a.createdAt || '').slice(0, 10)}</td>
              <td style="padding:8px; text-transform:uppercase; color:#5eead4; font-weight:700;">${a.courseId}</td>
              <td style="padding:8px;">${a.examType === 'final_coev' ? '🏛️ Simulacro Simulacro Final' : '🧪 Examen de Prueba'}</td>
              <td style="padding:8px; font-weight:800;">${a.scorePct}% (${a.correctCount}/${a.totalQuestions})</td>
              <td style="padding:8px;"><span class="badge-level ${a.passed ? 'badge-unlocked' : 'badge-locked'}">${a.passed ? 'APROBADO (≥75%)' : 'REPASAR'}</span></td>
            </tr>
          `
          )
          .join('')
      : `<tr><td colspan="5" style="padding:12px; color:var(--slate-300); text-align:center;">Aún no registraste exámenes. Ingresá a la pestaña 6 de tu curso para rendir un Examen de Prueba o Simulacro Final.</td></tr>`;

    root.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
        <div>
          <span class="badge-level badge-unlocked">ÁREA PRIVADA DEL ALUMNO • SEGUIMIENTO Examen Náutico</span>
          <h2 style="font-size:1.35rem; color:#ffffff;">🎓 Perfil Académico: ${this.studentSession.studentName} (DNI: ${this.studentSession.dni || '34.891.220'})</h2>
          <p style="font-size:0.84rem; color:var(--slate-300);">
            Email: <strong>${this.studentSession.email}</strong> • Rol activo: <strong style="color:#5eead4;">${this.mode === 'admin' ? 'Administrador' : this.mode === 'student' ? 'Alumno Suscripto (Solo Lectura de Contenidos)' : 'Invitado Demo (Solo Lectura)'}</strong>
          </p>
        </div>
      </div>

      <!-- Tarjetas de Estado de los 4 Niveles PNA (Habilitado vs Bloqueado) -->
      <div class="grid-4" style="margin-bottom:16px;">
        ${coursesStatusHtml}
      </div>

      <div class="grid-2" style="margin-bottom:16px;">
        <!-- Historial de Exámenes Rendidos -->
        <div class="nautical-card">
          <div>
            <h3 style="color:var(--amber-400); font-size:1.05rem; margin-bottom:8px;">📊 Historial de Exámenes de Prueba y Simulacros Examen</h3>
            <div style="overflow-x:auto;">
              <table style="width:100%; border-collapse:collapse; font-size:0.8rem;">
                <thead>
                  <tr style="border-bottom:1px solid rgba(255,255,255,0.15); text-align:left; color:var(--amber-400);">
                    <th style="padding:8px;">Fecha</th>
                    <th style="padding:8px;">Curso</th>
                    <th style="padding:8px;">Modalidad</th>
                    <th style="padding:8px;">Puntaje</th>
                    <th style="padding:8px;">Resultado</th>
                  </tr>
                </thead>
                <tbody>
                  ${attemptsRowsHtml}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Verificador en Vivo de Seguridad y Permisos RBAC -->
        <div class="nautical-card" style="border-color:#10b981;">
          <div>
            <span class="badge-level badge-unlocked">🛡️ SEGURIDAD Y PERMISOS VERIFICADOS (PASO 8)</span>
            <h3 style="color:#ffffff; font-size:1.05rem; margin-top:4px;">Protección de Contenidos contra Modificación por Alumnos</h3>
            <p style="font-size:0.82rem; color:var(--slate-300); margin:6px 0 12px;">
              En <strong>DOMINIO DEL MAR</strong>, los alumnos e invitados poseen acceso de <strong>solo lectura</strong> sobre las unidades, módulos, planos SVG y normas. Cualquier intento de alterar contenidos o precios sin credenciales de Administrador es rechazado por el servidor con código <code>HTTP 403 Forbidden</code> y registrado en la auditoría.
            </p>
            <button type="button" class="btn btn-navy" style="width:100%;" onclick="window.App.verifyStudentCannotModifyContent()">
              🧪 Ejecutar Prueba de Seguridad: Intentar Modificar Contenido como Alumno
            </button>
            <div id="rbac-test-result-box" style="margin-top:10px; display:none; padding:10px; border-radius:8px; font-size:0.8rem;"></div>
          </div>
        </div>
      </div>
    `;
  },

  async verifyStudentCannotModifyContent() {
    const box = document.getElementById('rbac-test-result-box');
    if (!box) return;
    box.style.display = 'block';
    box.style.background = '#061024';
    box.style.border = '1px solid var(--amber-400)';
    box.innerHTML = 'Probando envío de modificación sin privilegios de Administrador a <code>POST /api/admin/content/unit</code>...';

    try {
      // Enviar petición deliberadamente sin token de administrador (simulando un alumno intentando alterar una unidad)
      const res = await fetch('/api/admin/content/unit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          unitId: 'cn-seg-u1',
          title: 'Intento de modificación por alumno'
        })
      });
      const data = await res.json();
      if (res.status === 403) {
        box.style.border = '1px solid #10b981';
        box.innerHTML = `
          <strong style="color:#34d399;">✅ VERIFICACIÓN EXITOSA (Bloqueo HTTP ${res.status} Confirmado):</strong>
          <div style="color:var(--slate-200); margin-top:4px;">Respuesta del Servidor: <em>"${data.error}"</em></div>
        `;
      } else {
        box.innerHTML = `Estado recibido: ${res.status}`;
      }
    } catch (e) {
      box.innerHTML = 'Error de red en la prueba: ' + e.message;
    }
  },

  async toggleCompleteUnit(courseId, unitId) {
    try {
      const res = await fetch('/api/student/progress', {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({
          email: this.studentSession.email,
          courseId,
          toggleUnitId: unitId
        })
      });
      const data = await res.json();
      if (data.ok && this.db) {
        const email = (this.studentSession.email || 'martin.alvarez@ejemplo.com.ar').toLowerCase();
        this.db.studentProgress = this.db.studentProgress || {};
        this.db.studentProgress[email] = data.allProgress;
      }
      this.render();
    } catch (e) {}
  },

  async toggleCompleteModule(courseId, moduleId) {
    try {
      const res = await fetch('/api/student/progress', {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({
          email: this.studentSession.email,
          courseId,
          toggleModuleId: moduleId
        })
      });
      const data = await res.json();
      if (data.ok && this.db) {
        const email = (this.studentSession.email || 'martin.alvarez@ejemplo.com.ar').toLowerCase();
        this.db.studentProgress = this.db.studentProgress || {};
        this.db.studentProgress[email] = data.allProgress;
      }
      this.render();
    } catch (e) {}
  },

  async saveStudentPersonalNote(courseId, unitId) {
    const val = document.getElementById('student-unit-note-input')?.value || '';
    try {
      const res = await fetch('/api/student/progress', {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({
          email: this.studentSession.email,
          courseId,
          noteTargetId: unitId,
          noteText: val
        })
      });
      const data = await res.json();
      if (data.ok && this.db) {
        const email = (this.studentSession.email || 'martin.alvarez@ejemplo.com.ar').toLowerCase();
        this.db.studentProgress = this.db.studentProgress || {};
        this.db.studentProgress[email] = data.allProgress;
        alert('✅ Apunte personal guardado en tu Área de Alumno.');
      }
    } catch (e) {}
  },

  toggleExamRendered(levelId) {
    const info = this.studentSession.coevDates[levelId];
    if (!info) return;
    info.examRendered = !info.examRendered;
    this.saveStudentSession();
    fetch('/api/subscription/status', {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ levelId, examRendered: info.examRendered })
    }).catch(() => {});
    this.updateHeaderUI();
    this.render();
  },

  openCourseClassroom(courseId, unitId) {
    this.selectedCourseId = courseId;
    this.classroomOverrideVideoId = null;
    const course = window.COURSES_MAP[courseId];
    this.selectedUnitId = unitId || course.subjects[0].units[0].id;
    this.activeTab = 'cursos';
    this.courseSubTab = 'unidades';
    this.render();
  },

  openCourseExam(courseId, type = 'practice') {
    this.selectedCourseId = courseId;
    this.examState = {
      courseId,
      examType: type,
      answers: {},
      submitted: false,
      lastAttemptSaved: false
    };
    this.activeTab = 'cursos';
    this.courseSubTab = 'examen_curso';
    this.render();
  },

  selectUnit(unitId) {
    window.NauticalVideoEngine?.stop();
    this.classroomOverrideVideoId = null;
    this.selectedUnitId = unitId;
    this.render();
  },

  setPedagogy(level) {
    this.pedagogyLevel = level;
    this.render();
  },

  readLessonAloud() {
    const container = document.getElementById('lesson-text-container');
    if (!container) return;
    const plainText = container.innerText || container.textContent;
    window.NauticalVideoEngine.isPlaying = true;
    window.NauticalVideoEngine.speakText(plainText);
  },

  selectRipaVideo(videoId) {
    window.NauticalVideoEngine?.stop();
    this.selectedRipaVideoId = videoId;
    this.render();
    setTimeout(() => {
      window.NauticalVideoEngine.playScene(videoId, 0);
    }, 80);
  },

  calcRumboSim() {
    const mode = document.getElementById('sim-rumbo-mode')?.value || 'c2v';
    const rIn = parseFloat(document.getElementById('sim-rumbo-in')?.value) || 0;
    const dm = parseFloat(document.getElementById('sim-dm')?.value) || 0;
    const d = parseFloat(document.getElementById('sim-desvio')?.value) || 0;
    const vt = dm + d;
    const box = document.getElementById('sim-rumbo-result');
    if (!box) return;

    if (mode === 'c2v') {
      const rm = ((rIn + d) % 360 + 360) % 360;
      const rv = ((rIn + vt) % 360 + 360) % 360;
      box.innerHTML = `
        <div style="font-size:0.84rem; color:var(--slate-200);">
          1° Variación Total: <strong>Vt = Dm (${dm}°) + d (${d}°) = ${vt >= 0 ? '+' + vt : vt}°</strong><br>
          2° Rumbo Magnético: <strong>Rm = ${rm.toFixed(1)}°</strong> • 3° Rumbo Verdadero (Carta): <strong style="color:#5eead4; font-size:1rem;">Rv = ${rv.toFixed(1)}°</strong>
        </div>
      `;
    } else {
      const rm = ((rIn - dm) % 360 + 360) % 360;
      const rc = ((rIn - vt) % 360 + 360) % 360;
      box.innerHTML = `
        <div style="font-size:0.84rem; color:var(--slate-200);">
          1° Variación Total: <strong>Vt = Dm (${dm}°) + d (${d}°) = ${vt >= 0 ? '+' + vt : vt}°</strong><br>
          2° Rumbo Magnético: <strong>Rm = ${rm.toFixed(1)}°</strong> • 3° Rumbo Compás (Timón): <strong style="color:var(--amber-400); font-size:1rem;">Rc = ${rc.toFixed(1)}°</strong>
        </div>
      `;
    }
  },

  calcMareaSim() {
    const sonda = parseFloat(document.getElementById('sim-sonda')?.value) || 0;
    const marea = parseFloat(document.getElementById('sim-marea')?.value) || 0;
    const calado = parseFloat(document.getElementById('sim-calado')?.value) || 0;
    const profReal = sonda + marea;
    const bajoQuilla = profReal - calado;
    const box = document.getElementById('sim-marea-result');
    if (!box) return;

    const statusColor = bajoQuilla >= 0.5 ? '#34d399' : bajoQuilla > 0 ? '#fbbf24' : '#f87171';
    const statusMsg =
      bajoQuilla >= 0.5
        ? '✅ NAVEGACIÓN SEGURA (Margen suficiente)'
        : bajoQuilla > 0
        ? '⚠️ PRECAUCIÓN EXTREMA (Poco margen bajo quilla)'
        : '🚨 PELIGRO DE VARADURA';

    box.innerHTML = `
      <div style="font-size:0.84rem; color:var(--slate-200);">
        Prof. Real = <strong>${profReal.toFixed(2)} m</strong> • Agua Bajo Quilla = <strong style="color:${statusColor}; font-size:1rem;">${bajoQuilla.toFixed(2)} m</strong>
        <div style="margin-top:4px; color:${statusColor}; font-weight:800;">${statusMsg}</div>
      </div>
    `;
  },

  calcFaroSim() {
    const H = Math.max(0, parseFloat(document.getElementById('sim-faro-H')?.value) || 0);
    const h = Math.max(0, parseFloat(document.getElementById('sim-faro-h')?.value) || 0);
    const total = 2.08 * (Math.sqrt(H) + Math.sqrt(h));
    const box = document.getElementById('sim-faro-result');
    if (!box) return;

    box.innerHTML = `
      <div style="font-size:0.84rem; color:var(--slate-200);">
        Alcance Geográfico Total de Avistaje: <strong style="color:var(--amber-400); font-size:1rem;">${total.toFixed(2)} Millas Náuticas</strong>
      </div>
    `;
  },

  calcSaintHilaireSim() {
    const av = parseFloat(document.getElementById('sim-av')?.value) || 0;
    const ac = parseFloat(document.getElementById('sim-ac')?.value) || 0;
    const zv = parseFloat(document.getElementById('sim-zv')?.value) || 0;
    const diffMin = (av - ac) * 60;
    const box = document.getElementById('sim-sh-result');
    if (!box) return;

    const isMasCerca = diffMin >= 0;
    const dir = isMasCerca ? zv : (zv + 180) % 360;
    box.innerHTML = `
      <div style="font-size:0.84rem; color:var(--slate-200);">
        Determinante Δa = <strong style="color:${isMasCerca ? '#34d399' : '#fbbf24'};">${diffMin >= 0 ? '+' : ''}${diffMin.toFixed(1)}' (${Math.abs(diffMin).toFixed(1)} MN)</strong> •
        <strong>${isMasCerca ? 'MÁS CERCA' : 'MÁS LEJOS'}</strong> hacia <strong>${dir}°</strong>
      </div>
    `;
  },

  renderExams(root) {
    const course = window.COURSES_MAP[this.examState.courseId] || window.COURSE_CONDUCTOR;
    const isUnlocked = this.isCourseUnlocked(course.id);

    const allQuestions = this.getCourseMergedQuestions(course.id);
    const questions = isUnlocked ? allQuestions : allQuestions.slice(0, 5);
    const isFinalCoev = this.examState.examType === 'final_coev';

    let scoreHtml = '';
    if (this.examState.submitted) {
      let correctCount = 0;
      questions.forEach((q, idx) => {
        if (this.examState.answers[idx] === q.correctIndex) correctCount++;
      });
      const pct = Math.round((correctCount / questions.length) * 100);
      const passed = pct >= 75;

      scoreHtml = `
        <div class="nautical-card" style="margin-bottom:14px; border:2px solid ${passed ? '#10b981' : '#E63946'};">
          <span class="badge-level ${passed ? 'badge-unlocked' : 'badge-locked'}">
            ${isFinalCoev ? 'ACTA DE SIMULACRO DE EXAMEN Simulacro Final PNA (EXIGENCIA 75%)' : 'RESULTADO DE EXAMEN DE PRUEBA CON CORRECCIÓN AUTOMÁTICA'}
          </span>
          <h3 style="color:${passed ? '#34d399' : '#f87171'}; font-size:1.3rem;">
            ${passed ? '🎉 ¡APROBADO! Listo para rendir en el examen de tu categoría' : '⚠️ REPASAR UNIDADES MARCADAS'} — Calificación: ${pct}% (${correctCount}/${questions.length})
          </h3>
          <p style="font-size:0.8rem; color:var(--slate-300); margin-top:4px;">
            ✔ Este intento quedó guardado en tu <strong>Área de Alumno</strong>.
          </p>
        </div>
      `;
    }

    const questionsHtml = questions
      .map((q, qIdx) => {
        const chosen = this.examState.answers[qIdx];
        const isSubmitted = this.examState.submitted;

        const optsHtml = q.options
          .map((optText, oIdx) => {
            let optClass = '';
            if (isSubmitted) {
              if (oIdx === q.correctIndex) optClass = 'option-correct';
              else if (chosen === oIdx && chosen !== q.correctIndex) optClass = 'option-wrong';
            }
            return `
              <label class="option-label ${optClass}">
                <input type="radio" name="q-${qIdx}" ${chosen === oIdx ? 'checked' : ''} ${isSubmitted ? 'disabled' : ''} onchange="window.App.selectExamAnswer(${qIdx}, ${oIdx})" />
                <span>${optText}</span>
              </label>
            `;
          })
          .join('');

        const explanationHtml = isSubmitted
          ? `<div style="margin-top:8px; padding:10px; border-radius:6px; background:rgba(6,16,36,0.9); border-left:3px solid ${chosen === q.correctIndex ? '#10b981' : '#E63946'}; font-size:0.82rem;">
              <strong style="color:${chosen === q.correctIndex ? '#34d399' : '#f87171'};">
                ${chosen === q.correctIndex ? '✔ Respuesta Correcta' : '✖ Muestra de Error y Fundamento PNA'}:
              </strong>
              <p style="color:var(--slate-200); margin-top:3px;">${q.explanation}</p>
            </div>`
          : '';

        return `
          <div class="question-card">
            <div style="display:flex; justify-content:space-between; font-size:0.74rem; color:var(--amber-400); font-weight:800; margin-bottom:4px;">
              <span>PREGUNTA ${qIdx + 1} DE ${questions.length} (${course.shortTitle})</span>
              <span>${q.unit}</span>
            </div>
            <h4 style="color:#ffffff; font-size:0.95rem;">${q.question}</h4>
            <div style="margin-top:6px;">${optsHtml}</div>
            ${explanationHtml}
          </div>
        `;
      })
      .join('');

    root.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
        <div>
          <h3 style="color:#ffffff; font-size:1.15rem;">📝 Evaluación Oficial de ${course.title}</h3>
          <p style="font-size:0.82rem; color:var(--slate-300);">Corrección instantánea, muestra detallada de errores reglamentarios y Simulacro de Examen Final (aprobación ≥ 75%).</p>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button class="btn ${!isFinalCoev ? 'btn-emerald' : 'btn-outline'}" onclick="window.App.openCourseExam('${course.id}', 'practice')">
            🧪 Examen de Prueba
          </button>
          <button class="btn ${isFinalCoev ? 'btn-gold' : 'btn-outline'}" onclick="window.App.openCourseExam('${course.id}', 'final_coev')">
            🏛️ Simulacro de Examen Final
          </button>
        </div>
      </div>

      ${
        !isUnlocked
          ? `<div class="nautical-card" style="margin-bottom:14px; border-color:var(--amber-400); padding:12px 16px;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                <span style="font-size:0.84rem;">🔒 Estás viendo las 5 preguntas de demostración de <strong>${course.shortTitle}</strong>. Suscribite para desbloquear el banco completo (${allQuestions.length} preguntas).</span>
                <button class="btn btn-gold" onclick="window.App.openSubscribeModal('${course.id}')">Desbloquear (${this.formatPrice(course.id)})</button>
              </div>
            </div>`
          : ''
      }

      ${scoreHtml}
      <div>${questionsHtml}</div>

      <div style="display:flex; gap:10px; margin-top:14px;">
        ${
          !this.examState.submitted
            ? `<button class="btn btn-gold" style="font-size:0.95rem; padding:12px 24px;" onclick="window.App.submitExam()">
                ✅ Corregir Examen y Registrar Calificación
              </button>`
            : `<button class="btn btn-navy" style="font-size:0.95rem; padding:12px 24px;" onclick="window.App.openCourseExam('${course.id}', '${this.examState.examType}')">
                🔄 Reiniciar Examen
              </button>`
        }
      </div>
    `;
  },

  selectExamAnswer(qIdx, oIdx) {
    this.examState.answers[qIdx] = oIdx;
  },

  async submitExam() {
    this.examState.submitted = true;
    const course = window.COURSES_MAP[this.examState.courseId] || window.COURSE_CONDUCTOR;
    const isUnlocked = this.isCourseUnlocked(course.id);
    const allQuestions = this.getCourseMergedQuestions(course.id);
    const questions = isUnlocked ? allQuestions : allQuestions.slice(0, 5);

    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (this.examState.answers[idx] === q.correctIndex) correctCount++;
    });

    if (!this.examState.lastAttemptSaved) {
      this.examState.lastAttemptSaved = true;
      try {
        await fetch('/api/student/exam-attempt', {
          method: 'POST',
          headers: this.getAuthHeaders(),
          body: JSON.stringify({
            email: this.studentSession.email,
            studentName: this.studentSession.studentName,
            courseId: course.id,
            examType: this.examState.examType,
            correctCount,
            totalQuestions: questions.length
          })
        });
        await this.fetchServerState();
      } catch (e) {}
    }

    this.render();
  },

  renderNautaPortal(root) {
    const portals = window.NAUTICAL_RESOURCES.officialPortals;
    const cards = portals
      .map(
        p => `
        <div class="nautical-card">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
              <span class="badge-level badge-demo">${p.category}</span>
              <span style="font-size:0.7rem; color:var(--amber-400); font-weight:800;">${p.badge}</span>
            </div>
            <h3 style="color:#ffffff; font-size:1rem; margin-top:4px;">${p.title}</h3>
            <p style="color:var(--slate-300); font-size:0.82rem; margin:6px 0 10px;">${p.description}</p>
          </div>
          <div style="display:flex; gap:6px;">
            <button type="button" class="btn btn-gold" style="flex:1;" onclick="window.App.openExternalLink('${p.url}', '${p.title.replace(/'/g, "\\'")}', '${p.description.replace(/'/g, "\\'")}')">
              🌐 Abrir Portal Oficial ↗
            </button>
            <button type="button" class="btn btn-outline" onclick="navigator.clipboard.writeText('${p.url}'); this.textContent='✅'">
              📋
            </button>
          </div>
        </div>
      `
      )
      .join('');

    root.innerHTML = `
      <div style="margin-bottom:14px;">
        <span class="badge-level badge-unlocked">CENTRO OPERATIVO DEL NAUTA — ENLACES OFICIALES</span>
        <h2 style="font-size:1.35rem; color:#ffffff;">🌐 Alturas de Ríos, Meteorología, Despacho Web PNA, Carnet Náutico y Migraciones/ARCA</h2>
      </div>
      <div class="grid-4">${cards}</div>
    `;
  },

  async openExternalLink(url, title, description) {
    let openedViaServer = false;
    try {
      const res = await fetch('/api/open-external', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      const data = await res.json();
      if (data && data.ok) openedViaServer = true;
    } catch (e) {}

    if (!openedViaServer) {
      try {
        window.open(url, '_blank', 'noopener,noreferrer');
      } catch (e) {}
    }

    const modal = document.getElementById('subscribe-modal');
    const content = document.getElementById('subscribe-modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <span class="badge-level badge-unlocked">🌐 ENLACE OFICIAL VERIFICADO</span>
        <button class="btn btn-outline" style="padding:4px 10px;" onclick="document.getElementById('subscribe-modal').classList.remove('open')">✕</button>
      </div>
      <h3 style="color:#ffffff; font-size:1.15rem;">${title}</h3>
      <p style="color:var(--slate-300); font-size:0.86rem; margin:8px 0 12px;">${description}</p>
      <div style="background:#061024; border:1px solid var(--teal-500); border-radius:8px; padding:10px; margin-bottom:12px; word-break:break-all;">
        <code style="color:#5eead4; font-size:0.82rem;">${url}</code>
      </div>
      <div style="display:flex; gap:8px;">
        <button type="button" class="btn btn-gold" onclick="navigator.clipboard.writeText('${url}'); this.textContent='✅ Copiado'">📋 Copiar Enlace</button>
        <button type="button" class="btn btn-outline" onclick="document.getElementById('subscribe-modal').classList.remove('open')">Cerrar</button>
      </div>
    `;
    modal.classList.add('open');
  },

  openSubscribeModal(courseId) {
    const course = window.COURSES_MAP[courseId] || window.COURSE_TIMONEL;
    const priceStr = this.formatPrice(course.id);
    const pm = this.db?.platformConfig?.paymentMethods || {};
    const defaultDate = new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10);

    const modal = document.getElementById('subscribe-modal');
    const content = document.getElementById('subscribe-modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <span class="badge-level badge-unlocked">HABILITACIÓN INMEDIATA DEL CURSO</span>
        <button class="btn btn-outline" style="padding:4px 10px;" onclick="document.getElementById('subscribe-modal').classList.remove('open')">✕</button>
      </div>
      <h2 style="color:#ffffff; font-size:1.25rem;">Suscripción a: ${course.title}</h2>
      <div class="price-tag">${priceStr}</div>
      <p style="font-size:0.82rem; color:var(--slate-300); margin-bottom:12px;">
        Accedé sin límites a todas las unidades, los 8 módulos curriculares SVG, simuladores y exámenes de <strong>${course.shortTitle}</strong> hasta la <strong>fecha probable de tu examen en el examen de tu categoría</strong>.
      </p>

      <div style="background:rgba(6,16,36,0.9); border:1px solid rgba(244,162,97,0.4); border-radius:8px; padding:10px; margin-bottom:12px; font-size:0.8rem;">
        • Alias Mercado Pago: <strong>${pm.mercadoPagoAlias || 'dominio.del.mar.pna'}</strong> | CBU: <strong>${pm.cbu || '0000003100098765432100'}</strong>
      </div>

      <div class="grid-2" style="grid-template-columns:1fr 1fr; gap:8px;">
        <div class="form-group">
          <label>Nombre y Apellido del Alumno:</label>
          <input type="text" id="sub-name" class="form-control" value="${this.studentSession.studentName}" />
        </div>
        <div class="form-group">
          <label>Email del Alumno:</label>
          <input type="email" id="sub-email" class="form-control" value="${this.studentSession.email}" />
        </div>
      </div>
      <div class="grid-2" style="grid-template-columns:1fr 1fr; gap:8px;">
        <div class="form-group">
          <label>DNI:</label>
          <input type="text" id="sub-dni" class="form-control" value="${this.studentSession.dni}" />
        </div>
        <div class="form-group">
          <label>Propulsión:</label>
          <select id="sub-prop" class="form-control">
            <option value="Motor">Motor</option>
            <option value="Vela y Motor" selected>Vela y Motor</option>
          </select>
        </div>
      </div>
      <div class="grid-2" style="grid-template-columns:1fr 1fr; gap:8px;">
        <div class="form-group">
          <label>📅 Fecha Probable Examen Final:</label>
          <input type="date" id="sub-coev-date" class="form-control" value="${defaultDate}" />
        </div>
        <div class="form-group">
          <label>Dependencia donde rinde:</label>
          <select id="sub-jurisdiction" class="form-control">
            <option value="Prefectura San Isidro / Olivos / Tigre">Prefectura San Isidro / Olivos / Tigre</option>
            <option value="Prefectura La Plata / Zárate (Examen Náutico)">Prefectura La Plata / Zárate</option>
            <option value="Prefectura Buenos Aires / Dársena Norte">Prefectura Dársena Norte</option>
          </select>
        </div>
      </div>

      <button class="btn btn-gold" style="width:100%; padding:11px; font-size:0.92rem;" onclick="window.App.confirmSubscription('${course.id}')">
        ✅ Confirmar Suscripción y Abrir Curso Ahora
      </button>
    `;
    modal.classList.add('open');
  },

  async confirmSubscription(courseId) {
    const studentName = document.getElementById('sub-name')?.value || 'Alumno Suscripto';
    const email = document.getElementById('sub-email')?.value || this.studentSession.email;
    const dni = document.getElementById('sub-dni')?.value || '';
    const propulsionModality = document.getElementById('sub-prop')?.value || 'Vela y Motor';
    const coevExamDate = document.getElementById('sub-coev-date')?.value || '';
    const coevJurisdiction = document.getElementById('sub-jurisdiction')?.value || 'Examen Náutico';

    if (!coevExamDate) {
      alert('Por favor ingresá la fecha probable de tu examen en el examen de tu categoría.');
      return;
    }

    this.studentSession.studentName = studentName;
    this.studentSession.email = email;
    this.studentSession.dni = dni;
    if (!this.studentSession.unlockedLevels.includes(courseId)) {
      this.studentSession.unlockedLevels.push(courseId);
    }
    this.studentSession.coevDates[courseId] = {
      date: coevExamDate,
      jurisdiction: coevJurisdiction,
      examRendered: false
    };
    this.saveStudentSession();

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName,
          email,
          dni,
          levelId: courseId,
          propulsionModality,
          coevExamDate,
          coevJurisdiction
        })
      });
      const data = await res.json();
      if (data && data.token) {
        this.authToken = data.token;
        localStorage.setItem('ddm_session_jwt', data.token);
      }
      await this.fetchServerState();
    } catch (e) {}

    document.getElementById('subscribe-modal')?.classList.remove('open');
    this.mode = 'student';
    this.studentSession.unlockedLevels = [courseId];
    this.saveStudentSession();
    this.enterSubscribedCampus(courseId);
  },

  // ==========================================================================
  // PANEL PRIVADO DEL ADMINISTRADOR (PROTEGIDO POR TOKEN Y ROL ADMIN)
  // ==========================================================================
  openAdminUnitEditorModal(courseId, unitId) {
    if (this.mode !== 'admin' || !this.isAdminVerified) {
      alert('Acceso denegado: Solo el Administrador autorizado puede editar contenidos.');
      return;
    }
    const course = window.COURSES_MAP[courseId];
    let targetUnit = null;
    course.subjects.forEach(s => {
      s.units.forEach(u => {
        if (u.id === unitId) targetUnit = u;
      });
    });
    if (!targetUnit) return;

    const modal = document.getElementById('subscribe-modal');
    const content = document.getElementById('subscribe-modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <span class="badge-level badge-unlocked">✏️ EDITOR ACADÉMICO DE UNIDAD (${targetUnit.id})</span>
        <button class="btn btn-outline" style="padding:4px 10px;" onclick="document.getElementById('subscribe-modal').classList.remove('open')">✕</button>
      </div>
      <h3 style="color:#ffffff; font-size:1.15rem;">Editar Unidad: ${targetUnit.number} (${course.shortTitle})</h3>
      <div class="grid-2" style="grid-template-columns:2fr 1fr; gap:8px;">
        <div class="form-group">
          <label>Título Oficial de la Unidad:</label>
          <input type="text" id="edit-unit-title" class="form-control" value="${targetUnit.title.replace(/"/g, '&quot;')}" />
        </div>
        <div class="form-group">
          <label>Estado de Revisión Editorial:</label>
          <select id="edit-unit-status" class="form-control">
            <option value="PUBLICADO" ${targetUnit.reviewStatus !== 'EN_REVISION' ? 'selected' : ''}>🟢 PUBLICADO (Visible a Alumnos)</option>
            <option value="EN_REVISION" ${targetUnit.reviewStatus === 'EN_REVISION' ? 'selected' : ''}>🟡 EN REVISIÓN (Oculto a Alumnos)</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Resumen Curricular:</label>
        <input type="text" id="edit-unit-summary" class="form-control" value="${(targetUnit.summary || '').replace(/"/g, '&quot;')}" />
      </div>
      <div class="form-group">
        <label>Contenido Nivel Inicial (HTML):</label>
        <textarea id="edit-unit-beginner" class="form-control" rows="4">${targetUnit.beginnerContent}</textarea>
      </div>
      <div class="form-group">
        <label>Contenido Nivel Avanzado Examen Náutico (HTML):</label>
        <textarea id="edit-unit-advanced" class="form-control" rows="4">${targetUnit.advancedContent}</textarea>
      </div>
      <div style="display:flex; gap:8px;">
        <button type="button" class="btn btn-gold" style="flex:1;" onclick="window.App.saveAdminUnitChanges('${targetUnit.id}')">💾 Guardar Cambios verificados</button>
        <button type="button" class="btn btn-outline" onclick="document.getElementById('subscribe-modal').classList.remove('open')">Cancelar</button>
      </div>
    `;
    modal.classList.add('open');
  },

  async saveAdminUnitChanges(unitId) {
    const title = document.getElementById('edit-unit-title')?.value || '';
    const reviewStatus = document.getElementById('edit-unit-status')?.value || 'PUBLICADO';
    const summary = document.getElementById('edit-unit-summary')?.value || '';
    const beginnerContent = document.getElementById('edit-unit-beginner')?.value || '';
    const advancedContent = document.getElementById('edit-unit-advanced')?.value || '';

    try {
      const res = await fetch('/api/admin/content/unit', {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({
          unitId,
          title,
          summary,
          beginnerContent,
          advancedContent,
          reviewStatus
        })
      });
      const data = await res.json();
      if (!data.ok) {
        alert(data.error || 'Error guardando unidad');
        return;
      }
      await this.fetchServerState();
      document.getElementById('subscribe-modal')?.classList.remove('open');
      alert(`✅ Unidad ${unitId} actualizada (${reviewStatus}).`);
      this.render();
    } catch (e) {
      alert('Error: ' + e.message);
    }
  },

  renderAdminPanel(root) {
    const cfg = this.db?.platformConfig || {
      accessMode: 'PRIVADO',
      prices: {
        conductor: { price: 45000 },
        timonel: { price: 75000 },
        patron: { price: 110000 },
        piloto: { price: 160000 }
      },
      paymentMethods: {
        mercadoPagoAlias: 'dominio.del.mar.pna',
        cbu: '0000003100098765432100'
      }
    };

    const origin = window.location.origin;
    const invitations = this.db?.invitations || [];
    const subscriptions = this.db?.subscriptions || [];
    const auditLogs = this.db?.auditLogs || [];
    const dbStatus = this.db?.databaseStatus || {};

    root.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
        <div>
          <span class="badge-level badge-unlocked">PANEL EJECUTIVO PRIVADO DEL ADMINISTRADOR (PROYECTO VINCULADO: acquired-modem-d6gf7)</span>
          <h2 style="font-size:1.35rem; color:var(--amber-400);">⚙️ Administración de Precios, Invitaciones, Contenidos Examen, Alumnos y Base de Datos</h2>
        </div>
        <div style="background:#061024; border:1px solid var(--teal-500); border-radius:8px; padding:6px 12px; font-size:0.76rem; color:#5eead4;">
          🔗 Proyecto: <strong>${dbStatus.linkedCloudProjectId || 'acquired-modem-d6gf7'}</strong> • 🗄️ DB: <strong>${dbStatus.engine || 'LOCAL_TRANSACTIONAL_JSON'}</strong>
          • Esquema SQL: <a href="/supabase/schema.sql" target="_blank" style="color:var(--amber-400); text-decoration:underline;">supabase/schema.sql</a>
        </div>
      </div>

      <div class="grid-2">
        <!-- 1. Visibilidad y Links de Invitación -->
        <div class="nautical-card">
          <div>
            <h3 style="color:#ffffff; font-size:1.05rem; margin-bottom:6px;">🔒 1. Modo de Visibilidad y Links de Invitación</h3>
            <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px;">
              <button class="btn ${cfg.accessMode === 'PRIVADO' ? 'btn-gold' : 'btn-outline'}" onclick="window.App.saveAdminAccessMode('PRIVADO')">
                🔒 Modo Privado (Solo con tu Link)
              </button>
              <button class="btn ${cfg.accessMode === 'PUBLICO' ? 'btn-emerald' : 'btn-outline'}" onclick="window.App.saveAdminAccessMode('PUBLICO')">
                🌐 Modo Público (Web / Play Store)
              </button>
            </div>

            <div style="background:#061024; border:1px solid rgba(244,162,97,0.4); border-radius:8px; padding:10px; margin-bottom:12px; font-size:0.8rem;">
              <div>🔑 <strong>Link Proyecto Propietario:</strong> <code style="color:#5eead4;">${origin}/?acceso=acquired-modem-d6gf7</code></div>
              <div style="margin-top:4px;">🔑 <strong>Link Administrador General:</strong> <code style="color:#5eead4;">${origin}/?acceso=ADMIN-PNA-2026</code></div>
              <div style="margin-top:4px;">🎓 <strong>Link Alumno Timonel:</strong> <code style="color:#34d399;">${origin}/?invitacion=ALUMNO-TIMONEL-2026</code></div>
              <div style="margin-top:4px;">🎟️ <strong>Link Invitado Demo:</strong> <code style="color:var(--amber-400);">${origin}/?invitacion=NAUTA-VIP-2026</code></div>
            </div>

            <div class="grid-2" style="grid-template-columns:1fr 1fr; gap:8px;">
              <div class="form-group">
                <label>Nombre Invitado / Alumno:</label>
                <input type="text" id="inv-label" class="form-control" placeholder="Ej: Juan Pérez" />
              </div>
              <div class="form-group">
                <label>Código Link:</label>
                <input type="text" id="inv-code" class="form-control" placeholder="Ej: JUAN-PNA-2026" />
              </div>
              <div class="form-group">
                <label>Rol:</label>
                <select id="inv-role" class="form-control">
                  <option value="authorized_guest">Invitado Modo Demo (Solo Lectura)</option>
                  <option value="student">Alumno con Curso Activo (Solo Lectura)</option>
                </select>
              </div>
              <div class="form-group">
                <label>Curso Asignado:</label>
                <select id="inv-level" class="form-control">
                  <option value="conductor">Conductor Náutico</option>
                  <option value="timonel" selected>Timonel de Yate</option>
                  <option value="patron">Patrón de Yate</option>
                  <option value="piloto">Piloto de Yate</option>
                </select>
              </div>
            </div>
            <button class="btn btn-navy" style="width:100%;" onclick="window.App.createInvitationLink()">🔗 Crear Link Autorizado</button>

            <div style="margin-top:10px; max-height:140px; overflow-y:auto;">
              ${invitations
                .map(
                  inv => `
                  <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.04); padding:6px 8px; border-radius:6px; margin-bottom:4px; font-size:0.76rem;">
                    <span><strong>${inv.label}</strong> (<code>${inv.code}</code> • ${inv.role})</span>
                    <div style="display:flex; gap:4px;">
                      <button class="btn btn-outline" style="padding:3px 7px; font-size:0.7rem;" onclick="navigator.clipboard.writeText('${origin}/?invitacion=${inv.code}'); this.textContent='✅'">📋 Copiar</button>
                      ${
                        inv.code !== 'ADMIN-PNA-2026'
                          ? `<button class="btn btn-outline" style="padding:3px 7px; font-size:0.7rem; color:#f87171;" onclick="window.App.deleteInvitationLink('${inv.code}')">🗑️</button>`
                          : ''
                      }
                    </div>
                  </div>
                `
                )
                .join('')}
            </div>
          </div>
        </div>

        <!-- 2. Valor de Suscripción por Nivel ($ ARS) -->
        <div class="nautical-card">
          <div>
            <h3 style="color:#ffffff; font-size:1.05rem; margin-bottom:6px;">💰 2. Valor de Suscripción por Nivel ($ ARS) y Cobros</h3>
            <div class="grid-2" style="grid-template-columns:1fr 1fr; gap:8px;">
              <div class="form-group">
                <label>Conductor Náutico ($ ARS):</label>
                <input type="number" id="adm-price-conductor" class="form-control" value="${cfg.prices.conductor.price}" />
              </div>
              <div class="form-group">
                <label>Timonel de Yate ($ ARS):</label>
                <input type="number" id="adm-price-timonel" class="form-control" value="${cfg.prices.timonel.price}" />
              </div>
              <div class="form-group">
                <label>Patrón de Yate ($ ARS):</label>
                <input type="number" id="adm-price-patron" class="form-control" value="${cfg.prices.patron.price}" />
              </div>
              <div class="form-group">
                <label>Piloto de Yate ($ ARS):</label>
                <input type="number" id="adm-price-piloto" class="form-control" value="${cfg.prices.piloto.price}" />
              </div>
            </div>
            <div class="form-group">
              <label>Alias Mercado Pago:</label>
              <input type="text" id="adm-mp-alias" class="form-control" value="${cfg.paymentMethods.mercadoPagoAlias}" />
            </div>
            <div class="form-group">
              <label>CBU / CVU Bancario:</label>
              <input type="text" id="adm-cbu" class="form-control" value="${cfg.paymentMethods.cbu}" />
            </div>
            <button class="btn btn-gold" style="width:100%;" onclick="window.App.saveAdminPricing()">💾 Guardar Precios en Tiempo Real</button>
          </div>
        </div>
      </div>

      <!-- 3. CMS Académico: Alta de Preguntas Oficiales con Control de Revisión -->
      <div class="nautical-card" style="margin-top:14px; border-color:var(--teal-500);">
        <h3 style="color:var(--amber-400); font-size:1.05rem; margin-bottom:6px;">✏️ 3. Gestor de Contenido Académico y Banco de Exámenes de Práctica y Final (Exclusivo Administrador)</h3>
        <p style="font-size:0.8rem; color:var(--slate-300); margin-bottom:10px;">
          Agregá nuevas preguntas al banco de exámenes de cualquier categoría PNA. Podés guardarlas como <strong>EN REVISIÓN</strong> (ocultas para alumnos hasta su verificación normativa) o <strong>PUBLICADO</strong>.
        </p>
        <div class="grid-2" style="grid-template-columns:1fr 1fr 1fr; gap:8px;">
          <div class="form-group">
            <label>Curso Destino:</label>
            <select id="cms-q-course" class="form-control">
              <option value="conductor">Conductor Náutico</option>
              <option value="timonel" selected>Timonel de Yate</option>
              <option value="patron">Patrón de Yate</option>
              <option value="piloto">Piloto de Yate</option>
            </select>
          </div>
          <div class="form-group">
            <label>Unidad / Norma de Referencia:</label>
            <input type="text" id="cms-q-unit" class="form-control" value="RIPA Ley 21.546 / REGINAVE" />
          </div>
          <div class="form-group">
            <label>Estado Editorial:</label>
            <select id="cms-q-status" class="form-control">
              <option value="PUBLICADO">🟢 PUBLICADO (Verificado)</option>
              <option value="EN_REVISION">🟡 EN REVISIÓN (Borrador Interno)</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Enunciado de la Pregunta Examen:</label>
          <input type="text" id="cms-q-text" class="form-control" placeholder="Ej: ¿Cuál es el arco horizontal de visibilidad de la luz de alcance según la Regla 21 del RIPA?" />
        </div>
        <div class="grid-2" style="grid-template-columns:1fr 1fr; gap:8px;">
          <div class="form-group">
            <label>Opción A (Correcta por defecto):</label>
            <input type="text" id="cms-q-opt0" class="form-control" placeholder="Ej: 135° (67,5° a cada banda desde la popa)" />
          </div>
          <div class="form-group">
            <label>Opción B:</label>
            <input type="text" id="cms-q-opt1" class="form-control" placeholder="Ej: 225° hacia proa" />
          </div>
          <div class="form-group">
            <label>Opción C:</label>
            <input type="text" id="cms-q-opt2" class="form-control" placeholder="Ej: 112,5° por una banda" />
          </div>
          <div class="form-group">
            <label>Fundamento Reglamentario:</label>
            <input type="text" id="cms-q-exp" class="form-control" placeholder="Ej: Regla 21(c) RIPA: Luz blanca en popa visible en un arco de 135°." />
          </div>
        </div>
        <button type="button" class="btn btn-emerald" onclick="window.App.createAdminExamQuestion()">➕ Incorporar Pregunta al Banco Oficial</button>
      </div>

      <!-- 4. Tabla de Alumnos Suscriptos y Mesas Examen -->
      <div class="nautical-card" style="margin-top:14px;">
        <h3 style="color:#ffffff; font-size:1.05rem; margin-bottom:8px;">🎓 4. Alumnos Suscriptos y Fechas de Examen Final</h3>
        <div style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; font-size:0.82rem;">
            <thead>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.15); text-align:left; color:var(--amber-400);">
                <th style="padding:8px;">Alumno</th>
                <th style="padding:8px;">Curso</th>
                <th style="padding:8px;">Abono</th>
                <th style="padding:8px;">Fecha Probable Examen Final</th>
                <th style="padding:8px;">Estado</th>
              </tr>
            </thead>
            <tbody>
              ${subscriptions
                .map(
                  s => `
                  <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
                    <td style="padding:8px;"><strong>${s.studentName}</strong> (${s.dni || 'S/D'} • ${s.email || ''})</td>
                    <td style="padding:8px; text-transform:uppercase; color:#5eead4; font-weight:700;">${s.levelId}</td>
                    <td style="padding:8px;">$ ${Number(s.amountPaid).toLocaleString('es-AR')}</td>
                    <td style="padding:8px;">📅 <strong>${s.coevExamDate}</strong> (${s.coevJurisdiction})</td>
                    <td style="padding:8px;"><span class="badge-level ${s.status === 'ACTIVA' ? 'badge-unlocked' : 'badge-locked'}">${s.status}</span></td>
                  </tr>
                `
                )
                .join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- 5. Registro de Auditoría de Seguridad RBAC -->
      <div class="nautical-card" style="margin-top:14px;">
        <h3 style="color:#ffffff; font-size:1rem; margin-bottom:8px;">🛡️ 5. Registro de Auditoría de Seguridad y Control de Permisos</h3>
        <div style="max-height:170px; overflow-y:auto; font-size:0.76rem; font-family:monospace;">
          ${auditLogs
            .slice(0, 15)
            .map(
              l => `
              <div style="padding:5px 8px; border-bottom:1px solid rgba(255,255,255,0.06); display:flex; justify-content:space-between; gap:8px;">
                <span><strong style="color:${l.action.includes('BLOCKED') ? '#f87171' : '#5eead4'};">[${l.action}]</strong> ${l.actorEmail} (${l.actorRole}) → ${l.targetType}:${l.targetId}</span>
                <span style="color:var(--slate-300);">${String(l.createdAt || '').slice(0, 19).replace('T', ' ')}</span>
              </div>
            `
            )
            .join('')}
        </div>
      </div>
    `;
  },

  async saveAdminAccessMode(accessMode) {
    try {
      const res = await fetch('/api/admin/config', {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ accessMode })
      });
      const data = await res.json();
      if (!data.ok) {
        alert(data.error || 'Sin permisos de administrador');
        return;
      }
      await this.fetchServerState();
      this.updateHeaderUI();
      this.render();
    } catch (e) {}
  },

  async saveAdminPricing() {
    const prices = {
      conductor: { price: Number(document.getElementById('adm-price-conductor')?.value) || 45000 },
      timonel: { price: Number(document.getElementById('adm-price-timonel')?.value) || 75000 },
      patron: { price: Number(document.getElementById('adm-price-patron')?.value) || 110000 },
      piloto: { price: Number(document.getElementById('adm-price-piloto')?.value) || 160000 }
    };
    const paymentMethods = {
      mercadoPagoAlias: document.getElementById('adm-mp-alias')?.value || '',
      cbu: document.getElementById('adm-cbu')?.value || ''
    };
    try {
      const res = await fetch('/api/admin/config', {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ prices, paymentMethods })
      });
      const data = await res.json();
      if (!data.ok) {
        alert(data.error || 'Error de permisos');
        return;
      }
      await this.fetchServerState();
      alert('✅ Precios y datos de cobro actualizados en toda la plataforma.');
      this.render();
    } catch (e) {}
  },

  async createInvitationLink() {
    const label = document.getElementById('inv-label')?.value || 'Invitado Autorizado';
    const code = document.getElementById('inv-code')?.value || '';
    const role = document.getElementById('inv-role')?.value || 'authorized_guest';
    const level = document.getElementById('inv-level')?.value || 'timonel';
    try {
      const res = await fetch('/api/admin/invite', {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({
          label,
          code,
          role,
          allowedLevels: role === 'student' ? [level] : [],
          coevDate: new Date(Date.now() + 45 * 86400000).toISOString().slice(0, 10)
        })
      });
      const data = await res.json();
      if (!data.ok) {
        alert(data.error || 'No autorizado');
        return;
      }
      await this.fetchServerState();
      this.render();
    } catch (e) {}
  },

  async deleteInvitationLink(code) {
    try {
      await fetch(`/api/admin/invite/${encodeURIComponent(code)}`, {
        method: 'DELETE',
        headers: this.getAuthHeaders()
      });
      await this.fetchServerState();
      this.render();
    } catch (e) {}
  },

  async createAdminExamQuestion() {
    const courseId = document.getElementById('cms-q-course')?.value || 'timonel';
    const unit = document.getElementById('cms-q-unit')?.value || 'RIPA / REGINAVE';
    const reviewStatus = document.getElementById('cms-q-status')?.value || 'PUBLICADO';
    const question = (document.getElementById('cms-q-text')?.value || '').trim();
    const opt0 = (document.getElementById('cms-q-opt0')?.value || '').trim();
    const opt1 = (document.getElementById('cms-q-opt1')?.value || '').trim();
    const opt2 = (document.getElementById('cms-q-opt2')?.value || '').trim();
    const explanation = (document.getElementById('cms-q-exp')?.value || '').trim();

    if (!question || !opt0 || !opt1) {
      alert('Completá el enunciado y al menos las opciones A y B.');
      return;
    }

    try {
      const res = await fetch('/api/admin/content/question', {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({
          courseId,
          unit,
          question,
          options: [opt0, opt1, opt2 || 'Ninguna de las anteriores'],
          correctIndex: 0,
          explanation: explanation || 'Fundamento reglamentario oficial PNA.',
          reviewStatus
        })
      });
      const data = await res.json();
      if (!data.ok) {
        alert(data.error || 'Error guardando pregunta');
        return;
      }
      await this.fetchServerState();
      alert(`✅ Pregunta incorporada a ${courseId.toUpperCase()} con estado ${reviewStatus}.`);
      this.render();
    } catch (e) {}
  }
};

window.addEventListener('DOMContentLoaded', () => {
  window.App.init();
});
