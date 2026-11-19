/**
 * DOMINIO DEL MAR — Puente de Conexión Permanente en Tiempo Real (Estilo Big Daddy's)
 * Integra: Firebase SDK v10 (Firestore + Realtime DB para acquired-modem-d6gf7),
 * Google AI Studio (Gemini), Pomelli y Google Stitch.
 */
window.AICloudBridge = {
  eventSource: null,
  firebaseDb: null,
  firebaseRtdb: null,
  connected: false,
  projectId: 'acquired-modem-d6gf7',
  connectedClients: 1,
  activeTheme: 'NAVAL_COMMAND_DARK',
  lastSyncTime: null,
  lastAiAnswer: null,
  lastPomelliCard: null,

  firebaseConfig: {
    apiKey: 'AIzaSyCHg15UNqU0Y9xd0vdZ8_RkaFuWB8jGrzY',
    authDomain: 'acquired-modem-d6gf7.firebaseapp.com',
    projectId: 'acquired-modem-d6gf7',
    storageBucket: 'acquired-modem-d6gf7.firebasestorage.app',
    messagingSenderId: '1028954108755',
    appId: '1:1028954108755:web:acquiredmodemd6gf7',
    databaseURL: 'https://acquired-modem-d6gf7-default-rtdb.firebaseio.com'
  },

  init() {
    this.initFirebaseSdk();
    this.connectRealtimeStream();
    this.injectTopBarEcosystemBadge();
    this.hookIntoAppRender();
  },

  initFirebaseSdk() {
    if (typeof firebase !== 'undefined') {
      try {
        if (!firebase.apps.length) {
          firebase.initializeApp(this.firebaseConfig);
        }
        this.firebaseDb = firebase.firestore();
        if (firebase.database) {
          this.firebaseRtdb = firebase.database();
        }
        console.log('🔥 Firebase SDK v10 inicializado para proyecto:', this.projectId);
      } catch (e) {
        console.warn('Modo híbrido local/cloud activo para Firebase:', e.message);
      }
    }
  },

  connectRealtimeStream() {
    if (this.eventSource) {
      try {
        this.eventSource.close();
      } catch (e) {}
    }

    try {
      this.eventSource = new EventSource('/api/realtime/stream');
      this.eventSource.onmessage = async event => {
        try {
          const data = JSON.parse(event.data);
          this.connected = true;
          this.lastSyncTime = data.timestamp || new Date().toISOString();
          if (data.projectId) this.projectId = data.projectId;
          if (data.connectedClients) this.connectedClients = data.connectedClients;
          this.updateTopBarBadge();

          if (data.eventType === 'FIREBASE_DB_SYNC') {
            if (window.App && typeof window.App.fetchServerState === 'function') {
              await window.App.fetchServerState();
              window.App.updateHeaderUI();
            }
          } else if (data.eventType === 'STITCH_UI_THEME_SYNC' && data.theme) {
            this.applyStitchTheme(data.theme, false);
          }
        } catch (err) {}
      };

      this.eventSource.onerror = () => {
        this.connected = false;
        this.updateTopBarBadge();
        setTimeout(() => this.connectRealtimeStream(), 4000);
      };
    } catch (e) {}
  },

  injectTopBarEcosystemBadge() {
    const topBar = document.querySelector('.top-institutional-bar > div:first-child');
    if (!topBar || document.getElementById('ecosystem-live-pill')) return;

    const badge = document.createElement('span');
    badge.id = 'ecosystem-live-pill';
    badge.style.cssText =
      'font-size:0.72rem; background:rgba(42,157,143,0.2); border:1px solid #2A9D8F; color:#5eead4; padding:2px 9px; border-radius:99px; font-weight:800; cursor:pointer;';
    badge.title = 'Clic para abrir el Centro Conectado: AI Studio • Firebase • Pomelli • Stitch';
    badge.onclick = () => this.openEcosystemModal();
    topBar.appendChild(badge);
    this.updateTopBarBadge();
  },

  updateTopBarBadge() {
    const badge = document.getElementById('ecosystem-live-pill');
    if (!badge) return;
    badge.innerHTML = this.connected
      ? `🟢 Web↔App Sync Activo (${this.projectId}) • AI Studio • Firebase • Pomelli • Stitch`
      : `🟡 Conectando Cloud Sync (${this.projectId})...`;
  },

  hookIntoAppRender() {
    if (!window.App) return;
    // El Tutor Naval IA Studio solo se inyecta DENTRO del Campus Exclusivo de la Categoría Suscripta (nunca en la página de presentación)
    const origRenderCampus = window.App.renderExclusiveCategoryCampus?.bind(window.App);
    if (origRenderCampus) {
      window.App.renderExclusiveCategoryCampus = root => {
        origRenderCampus(root);
        this.injectCourseAiStudioBar();
      };
    }

    const origRenderAdmin = window.App.renderAdminPanel?.bind(window.App);
    if (origRenderAdmin) {
      window.App.renderAdminPanel = root => {
        origRenderAdmin(root);
        this.injectAdminEcosystemHub(root);
      };
    }
  },

  injectCourseAiStudioBar() {
    const banner = document.querySelector('.campus-exclusive-header');
    if (!banner || document.getElementById('course-aistudio-bar')) return;

    const activeCourseId = window.App?.selectedCourseId || 'conductor';
    const course = window.COURSES_MAP?.[activeCourseId] || { shortTitle: 'Curso Suscripto' };

    const bar = document.createElement('div');
    bar.id = 'course-aistudio-bar';
    bar.style.cssText =
      'background:linear-gradient(90deg, rgba(6,16,36,0.96), rgba(28,49,94,0.92)); border:1.5px solid #F4A261; border-radius:10px; padding:10px 14px; margin-bottom:14px;';

    bar.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <span style="background:#F4A261; color:#0B1B3D; font-size:0.7rem; font-weight:900; padding:2px 8px; border-radius:6px;">
            ✨ TUTOR IA STUDIO EXCLUSIVO DE ${course.shortTitle.toUpperCase()}
          </span>
          <span style="font-size:0.82rem; font-weight:700; color:#ffffff;">
            Consultá cualquier duda sobre el programa de <strong>${course.shortTitle}</strong>
          </span>
        </div>
        <div style="display:flex; gap:6px; flex-wrap:wrap; flex:1; max-width:560px;">
          <input
            type="text"
            id="aistudio-course-input"
            class="form-control"
            style="flex:1; padding:6px 10px; font-size:0.8rem;"
            placeholder="Preguntale a AI Studio sobre ${course.shortTitle} (ej: Regla 15, Boyas Cardinales, Púlpito, Sudestada)..."
            onkeydown="if(event.key==='Enter') window.AICloudBridge.askAiStudioInCourse()"
          />
          <button type="button" class="btn btn-gold" style="padding:6px 12px; font-size:0.78rem;" onclick="window.AICloudBridge.askAiStudioInCourse()">
            🤖 Consultar Tutor IA
          </button>
          <button type="button" class="btn btn-outline" style="padding:6px 10px; font-size:0.76rem;" onclick="window.AICloudBridge.openEcosystemModal()">
            ⚡ Hub Cloud
          </button>
        </div>
      </div>
      <div id="aistudio-course-response" style="display:${this.lastAiAnswer ? 'block' : 'none'}; margin-top:8px; padding:10px 12px; background:rgba(11,27,61,0.95); border-left:4px solid #2A9D8F; border-radius:6px; font-size:0.83rem;">
        ${this.lastAiAnswer || ''}
      </div>
    `;

    banner.insertAdjacentElement('afterend', bar);
  },

  async askAiStudioInCourse(presetQuestion) {
    const input = document.getElementById('aistudio-course-input');
    const question = presetQuestion || (input ? input.value.trim() : '');
    if (!question) return;

    const respBox = document.getElementById('aistudio-course-response');
    if (respBox) {
      respBox.style.display = 'block';
      respBox.innerHTML = `<span style="color:#F4A261;">⏳ Consultando a Google AI Studio...</span>`;
    }

    try {
      const res = await fetch('/api/integrations/aistudio/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId: window.App?.selectedCourseId || 'conductor',
          question
        })
      });
      const data = await res.json();
      if (data.ok) {
        const html = `
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-bottom:4px;">
            <strong style="color:#5eead4;">🤖 Respuesta Google AI Studio (${data.normCited}):</strong>
            <button type="button" class="btn btn-outline" style="padding:2px 8px; font-size:0.72rem;" onclick="window.NauticalVideoEngine?.speakText('${data.answer.replace(/'/g, "\\'")}')">🔊 Escuchar Voz IA</button>
          </div>
          <div style="color:#f1f5f9; line-height:1.45;">${data.answer}</div>
        `;
        this.lastAiAnswer = html;
        if (respBox) respBox.innerHTML = html;
      }
    } catch (e) {
      if (respBox) respBox.innerHTML = `<span style="color:#f87171;">Error al consultar AI Studio.</span>`;
    }
  },

  async generatePomelliCampaign(courseId) {
    const cid = courseId || window.App?.selectedCourseId || 'timonel';
    try {
      const res = await fetch('/api/integrations/pomelli/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId: cid })
      });
      const data = await res.json();
      if (data.ok && data.campaignCard) {
        this.lastPomelliCard = data.campaignCard;
        const box = document.getElementById('pomelli-output-box');
        if (box) {
          const c = data.campaignCard;
          box.innerHTML = `
            <div style="background:linear-gradient(135deg, #0B1B3D, #1C315E); border:2px solid #F4A261; border-radius:10px; padding:12px; margin-top:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="background:#2A9D8F; color:#fff; font-size:0.68rem; font-weight:800; padding:2px 7px; border-radius:4px;">POMELLI BRAND DNA • ${c.hoursBadge}</span>
                <span style="color:#F4A261; font-weight:900; font-size:1rem;">${c.priceBadge}</span>
              </div>
              <h4 style="color:#ffffff; margin:6px 0 4px; font-size:0.95rem;">${c.headline}</h4>
              <p style="color:#cbd5e1; font-size:0.8rem; margin-bottom:8px;">${c.subheadline}</p>
              <textarea class="form-control" rows="4" readonly style="font-size:0.75rem; margin-bottom:6px;">${c.whatsappCopy}</textarea>
              <button type="button" class="btn btn-gold" style="width:100%; padding:6px;" onclick="navigator.clipboard.writeText(this.previousElementSibling.value); this.textContent='✅ ¡Anuncio Pomelli Copiado para WhatsApp / Redes!'">
                📋 Copiar Pieza Publicitaria Pomelli (Sincronizada con tu Precio Admin)
              </button>
            </div>
          `;
        }
      }
    } catch (e) {}
  },

  async applyStitchTheme(theme, notifyServer = true) {
    this.activeTheme = theme;
    const root = document.documentElement;
    if (theme === 'CODIGO_NAUTICO_PARCHMENT') {
      root.style.setProperty('--navy-950', '#0a1832');
      root.style.setProperty('--navy-900', '#162942');
      root.style.setProperty('--teal-500', '#2C73B4');
      root.style.setProperty('--amber-400', '#E26D24');
    } else if (theme === 'DAYLIGHT_DECK_HIGH_CONTRAST') {
      root.style.setProperty('--navy-950', '#041226');
      root.style.setProperty('--navy-900', '#092347');
      root.style.setProperty('--teal-500', '#10b981');
      root.style.setProperty('--amber-400', '#fbbf24');
    } else {
      root.style.setProperty('--navy-950', '#061024');
      root.style.setProperty('--navy-900', '#0B1B3D');
      root.style.setProperty('--teal-500', '#2A9D8F');
      root.style.setProperty('--amber-400', '#F4A261');
    }

    if (notifyServer) {
      try {
        await fetch('/api/integrations/stitch/sync', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ theme })
        });
      } catch (e) {}
    }
  },

  injectAdminEcosystemHub(root) {
    if (!root || document.getElementById('admin-4pillar-ecosystem')) return;
    const wrapper = document.createElement('div');
    wrapper.id = 'admin-4pillar-ecosystem';
    wrapper.className = 'nautical-card';
    wrapper.style.cssText = 'margin-bottom:16px; border:2px solid #2A9D8F;';
    wrapper.innerHTML = this.buildEcosystemHubHtml();
    root.insertBefore(wrapper, root.children[1] || null);
  },

  buildEcosystemHubHtml() {
    return `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.12); padding-bottom:8px;">
        <div>
          <span class="badge-level badge-unlocked">⚡ CONEXIÓN PERMANENTE WEB ↔ APP MÓVIL ACTIVA</span>
          <h3 style="color:#ffffff; font-size:1.12rem;">Ecosistema Integrado: Google AI Studio • Firebase (${this.projectId}) • Pomelli • Stitch</h3>
        </div>
        <span style="font-size:0.76rem; color:#34d399; font-weight:800;">
          🟢 Sincronización en Tiempo Real (Firebase SDK v10 + SSE Bridge)
        </span>
      </div>

      <div class="grid-4" style="gap:10px;">
        <!-- 1. FIREBASE -->
        <div style="background:rgba(6,16,36,0.85); border:1px solid #F4A261; border-radius:9px; padding:10px;">
          <div style="font-size:0.72rem; color:#F4A261; font-weight:900;">🔥 1. FIREBASE CLOUD & REALTIME</div>
          <div style="font-size:0.84rem; color:#fff; font-weight:700; margin:4px 0;">Proyecto: ${this.projectId}</div>
          <p style="font-size:0.75rem; color:var(--slate-300); margin-bottom:8px;">
            Sincroniza al instante precios, invitaciones, progreso de alumnos y exámenes entre la Web y la App Android/iOS.
          </p>
          <div style="font-size:0.72rem; color:#34d399; font-weight:700;">✔ Firestore & Realtime DB Activo</div>
        </div>

        <!-- 2. GOOGLE AI STUDIO -->
        <div style="background:rgba(6,16,36,0.85); border:1px solid #38bdf8; border-radius:9px; padding:10px;">
          <div style="font-size:0.72rem; color:#38bdf8; font-weight:900;">🧠 2. GOOGLE AI STUDIO (GEMINI)</div>
          <div style="font-size:0.84rem; color:#fff; font-weight:700; margin:4px 0;">Tutor Naval de cada Categoría</div>
          <p style="font-size:0.75rem; color:var(--slate-300); margin-bottom:8px;">
            Integrado dentro del Campus exclusivo de cada curso para responder dudas con voz IA en español.
          </p>
          <button type="button" class="btn btn-navy" style="width:100%; padding:5px; font-size:0.74rem;" onclick="document.getElementById('subscribe-modal')?.classList.remove('open'); window.App.enterSubscribedCampus()">
            🤖 Abrir Campus y Tutor IA
          </button>
        </div>

        <!-- 3. POMELLI -->
        <div style="background:rgba(6,16,36,0.85); border:1px solid #2A9D8F; border-radius:9px; padding:10px;">
          <div style="font-size:0.72rem; color:#5eead4; font-weight:900;">✨ 3. POMELLI (BRAND & CAMPAIGNS)</div>
          <div style="font-size:0.84rem; color:#fff; font-weight:700; margin:4px 0;">Generador Comercial Privado</div>
          <p style="font-size:0.75rem; color:var(--slate-300); margin-bottom:8px;">
            Genera anuncios y placas de inscripción usando tus precios actuales de Administrador y el ADN visual de tu academia.
          </p>
          <button type="button" class="btn btn-gold" style="width:100%; padding:5px; font-size:0.74rem;" onclick="window.AICloudBridge.generatePomelliCampaign('timonel')">
            ✨ Generar Anuncio Pomelli
          </button>
        </div>

        <!-- 4. GOOGLE STITCH -->
        <div style="background:rgba(6,16,36,0.85); border:1px solid #a855f7; border-radius:9px; padding:10px;">
          <div style="font-size:0.72rem; color:#d8b4fe; font-weight:900;">🎨 4. GOOGLE STITCH (UI/UX SYNC)</div>
          <div style="font-size:0.84rem; color:#fff; font-weight:700; margin:4px 0;">Diseño Unificado Web + App</div>
          <p style="font-size:0.75rem; color:var(--slate-300); margin-bottom:6px;">
            Sincroniza la paleta y componentes UI en vivo entre PC y Celular:
          </p>
          <select class="form-control" style="padding:4px; font-size:0.74rem;" onchange="window.AICloudBridge.applyStitchTheme(this.value, true)">
            <option value="NAVAL_COMMAND_DARK" ${this.activeTheme === 'NAVAL_COMMAND_DARK' ? 'selected' : ''}>Tema Stitch: Puente Naval (#0B1B3D)</option>
            <option value="CODIGO_NAUTICO_PARCHMENT" ${this.activeTheme === 'CODIGO_NAUTICO_PARCHMENT' ? 'selected' : ''}>Tema Stitch: Código Náutico (#162942)</option>
            <option value="DAYLIGHT_DECK_HIGH_CONTRAST" ${this.activeTheme === 'DAYLIGHT_DECK_HIGH_CONTRAST' ? 'selected' : ''}>Tema Stitch: Cubierta Diurna Sol</option>
          </select>
        </div>
      </div>

      <!-- 5. PUBLICADOR DIRECTO A GITHUB (SIN NECESIDAD DE GIT LOCAL) -->
      <div style="margin-top:12px; background:rgba(6,16,36,0.92); border:1.5px solid #5eead4; border-radius:10px; padding:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:8px;">
          <div>
            <span style="font-size:0.72rem; color:#5eead4; font-weight:900;"><i class="fa-brands fa-github"></i> 5. PUBLICACIÓN Y SINCRONIZACIÓN DIRECTA EN GITHUB</span>
            <div style="font-size:0.86rem; color:#ffffff; font-weight:700;">Subir Proyecto Completo a tu Cuenta de GitHub en 1 Clic</div>
          </div>
          <a href="/DOMINIO-DEL-MAR-GITHUB.zip" download class="btn btn-outline" style="padding:5px 10px; font-size:0.74rem;">
            📦 Descargar Paquete .ZIP Listo para GitHub
          </a>
        </div>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap:8px; align-items:end;">
          <div>
            <label style="font-size:0.73rem; color:var(--slate-300); display:block; margin-bottom:3px;">Nombre del Repositorio en GitHub:</label>
            <input type="text" id="gh-repo-name" class="form-control" value="dominio-del-mar" style="padding:6px 10px; font-size:0.8rem;" />
          </div>
          <div>
            <label style="font-size:0.73rem; color:var(--slate-300); display:block; margin-bottom:3px;">Token Personal de GitHub (ghp_... con permiso repo):</label>
            <input type="password" id="gh-pat-token" class="form-control" placeholder="Pegá tu GitHub Token (ghp_...)" style="padding:6px 10px; font-size:0.8rem;" />
          </div>
          <div>
            <label style="font-size:0.73rem; color:var(--slate-300); display:block; margin-bottom:3px;">Visibilidad del Repositorio:</label>
            <select id="gh-repo-private" class="form-control" style="padding:6px 10px; font-size:0.8rem;">
              <option value="true" selected>🔒 Privado (Solo vos y autorizados)</option>
              <option value="false">🌐 Público</option>
            </select>
          </div>
          <button type="button" class="btn btn-gold" style="padding:8px 14px; font-size:0.82rem;" onclick="window.AICloudBridge.pushProjectToGitHub()">
            <i class="fa-brands fa-github"></i> Crear y Subir a GitHub Ahora
          </button>
        </div>
        <div id="gh-push-status" style="margin-top:8px; font-size:0.8rem; display:none;"></div>
      </div>

      <div id="pomelli-output-box"></div>
    `;
  },

  async pushProjectToGitHub() {
    const repoName = (document.getElementById('gh-repo-name')?.value || 'dominio-del-mar').trim();
    const githubToken = (document.getElementById('gh-pat-token')?.value || '').trim();
    const isPrivate = document.getElementById('gh-repo-private')?.value !== 'false';
    const statusBox = document.getElementById('gh-push-status');
    if (!statusBox) return;

    statusBox.style.display = 'block';
    if (!githubToken) {
      statusBox.innerHTML = `<span style="color:#fbbf24;">⚠️ Ingresá tu Token Personal de GitHub (<a href="https://github.com/settings/tokens/new?scopes=repo&description=Dominio-Del-Mar" target="_blank" style="color:#5eead4; text-decoration:underline;">generalo con 1 clic aquí en GitHub</a>) para subir automáticamente todos los archivos.</span>`;
      return;
    }

    statusBox.innerHTML = `<span style="color:#F4A261;">⏳ Creando repositorio <strong>${repoName}</strong> y subiendo todos los archivos e imágenes a GitHub vía API...</span>`;
    try {
      const res = await fetch('/api/integrations/github/push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repoName, githubToken, isPrivate })
      });
      const data = await res.json();
      if (data.ok) {
        statusBox.innerHTML = `<span style="color:#34d399; font-weight:800;">✅ ¡Proyecto publicado con éxito en GitHub! (${data.filesCount} archivos subidos) 👉 <a href="${data.repoUrl}" target="_blank" style="color:#F4A261; text-decoration:underline;">${data.repoUrl}</a></span>`;
      } else {
        statusBox.innerHTML = `<span style="color:#f87171;">❌ ${data.error || 'Error subiendo a GitHub'}</span>`;
      }
    } catch (e) {
      statusBox.innerHTML = `<span style="color:#f87171;">❌ Error de red: ${e.message}</span>`;
    }
  },

  openEcosystemModal() {
    const modal = document.getElementById('subscribe-modal');
    const content = document.getElementById('subscribe-modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <span class="badge-level badge-unlocked">⚡ CENTRO CONECTADO WEB ↔ APP (${this.projectId})</span>
        <button class="btn btn-outline" style="padding:4px 10px;" onclick="document.getElementById('subscribe-modal').classList.remove('open')">✕</button>
      </div>
      ${this.buildEcosystemHubHtml()}
    `;
    modal.classList.add('open');
  }
};

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => window.AICloudBridge.init(), 120);
});
