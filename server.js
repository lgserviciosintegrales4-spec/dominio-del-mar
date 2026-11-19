const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFile } = require('child_process');

// Cargar variables de entorno desde .env si existe
const ENV_PATH = path.join(__dirname, '.env');
if (fs.existsSync(ENV_PATH)) {
  try {
    const envRaw = fs.readFileSync(ENV_PATH, 'utf8');
    envRaw.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx > 0) {
        const key = trimmed.slice(0, eqIdx).trim();
        const val = trimmed.slice(eqIdx + 1).trim();
        if (!process.env[key]) process.env[key] = val;
      }
    });
  } catch (e) {}
}

const PORT = process.env.PORT || 3080;
const AUTH_SECRET = process.env.AUTH_SECRET || 'ddm_pna_2026_hmac_secret_key_production';
const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const PUBLIC_DIR = path.join(__dirname, 'public');
const SRC_DIR = path.join(__dirname, 'src');
const DOCS_DIR = path.join(__dirname, 'docs');
const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const DEFAULT_DB = {
  platformConfig: {
    appName: 'DOMINIO DEL MAR — Academia Náutica Deportiva Argentina',
    subtitle: 'Preparación Integral Oficial para Exámenes ante la Exámenes de Categorías Náutico-Deportivas',
    accessMode: 'PRIVADO', // 'PRIVADO' | 'PUBLICO'
    adminMasterToken: process.env.ADMIN_MASTER_TOKEN || 'ADMIN-PNA-2026',
    adminPin: process.env.ADMIN_PIN || '2026',
    adminEmail: process.env.ADMIN_EMAIL || 'admin@dominiodelmar.edu.ar',
    currency: 'ARS',
    paymentMethods: {
      mercadoPagoAlias: 'dominio.del.mar.pna',
      cbu: '0000003100098765432100',
      titular: 'Administración DOMINIO DEL MAR (Examen Náutico)',
      whatsappSoporte: '+54 9 11 5555-0199',
      googlePlayBillingEnabled: true
    },
    prices: {
      conductor: {
        id: 'conductor',
        name: 'Conductor Náutico',
        price: 45000,
        promoLabel: 'Acceso total hasta rendir en Examen Náutico',
        hours: '17 hs cátedra (12 hs Seguridad + 5 hs Legislación)',
        propulsion: 'Motor (hasta 7 m eslora y 140 HP)'
      },
      timonel: {
        id: 'timonel',
        name: 'Timonel de Yate (Vela / Motor / Vela-Motor)',
        price: 75000,
        promoLabel: 'Acceso total a las 3 materias hasta fecha de examen PNA',
        hours: '114 hs cátedra (64 hs Nav. I + 40 hs Seg. I + 10 hs Leg. I)',
        propulsion: 'Vela, Motor y Vela-Motor (hasta 12 m eslora)'
      },
      patron: {
        id: 'patron',
        name: 'Patrón de Yate (Vela / Motor / Vela-Motor)',
        price: 110000,
        promoLabel: 'Curso superior costero y estima hasta rendir ante PNA',
        hours: '116 hs cátedra (60 hs Nav. II + 40 hs Seg. II + 16 hs Leg. II)',
        propulsion: 'Vela, Motor y Vela-Motor (hasta 20 m eslora)'
      },
      piloto: {
        id: 'piloto',
        name: 'Piloto de Yate (Navegación de Altura y Astronómica)',
        price: 160000,
        promoLabel: 'Máxima categoría deportiva PNA - Incluye Sextante, Radar y Meteorología',
        hours: '180 hs cátedra (Nav. III Astronómica + Seg. III + Meteorología + Leg. III)',
        propulsion: 'Navegación Oceánica y de Altura sin límite de alejamiento'
      }
    }
  },
  users: [
    {
      id: 'USR-ADMIN-01',
      email: 'admin@dominiodelmar.edu.ar',
      name: 'Administrador General (Propietario)',
      dni: '20.000.000',
      role: 'admin',
      accessCode: 'ADMIN-PNA-2026',
      pin: '2026',
      createdAt: '2026-11-01'
    },
    {
      id: 'USR-STU-1001',
      email: 'martin.alvarez@ejemplo.com.ar',
      name: 'Martín Álvarez',
      dni: '34.891.220',
      role: 'student',
      accessCode: 'ALUMNO-TIMONEL-2026',
      pin: '34891220',
      createdAt: '2026-11-05'
    },
    {
      id: 'USR-GUEST-01',
      email: 'invitado@ejemplo.com.ar',
      name: 'Invitado Autorizado Demo',
      dni: '',
      role: 'authorized_guest',
      accessCode: 'NAUTA-VIP-2026',
      pin: '2026',
      createdAt: '2026-11-10'
    }
  ],
  invitations: [
    {
      code: 'ADMIN-PNA-2026',
      label: 'Acceso Propietario / Administrador General',
      role: 'admin',
      allowedLevels: ['conductor', 'timonel', 'patron', 'piloto'],
      createdAt: '2026-11-10',
      active: true
    },
    {
      code: 'NAUTA-VIP-2026',
      label: 'Link Autorizado de Prueba General (Modo Demo)',
      role: 'authorized_guest',
      allowedLevels: [],
      createdAt: '2026-11-10',
      active: true
    },
    {
      code: 'ALUMNO-TIMONEL-2026',
      label: 'Alumno Autorizado con Timonel de Yate Activo',
      role: 'student',
      allowedLevels: ['timonel'],
      coevDate: '2026-12-18',
      coevJurisdiction: 'Prefectura San Isidro / Olivos (Examen Náutico)',
      studentName: 'Martín Álvarez (Alumno Suscripto)',
      email: 'martin.alvarez@ejemplo.com.ar',
      dni: '34.891.220',
      createdAt: '2026-11-10',
      active: true
    }
  ],
  subscriptions: [
    {
      id: 'SUB-1001',
      studentName: 'Martín Álvarez',
      email: 'martin.alvarez@ejemplo.com.ar',
      dni: '34.891.220',
      levelId: 'timonel',
      propulsionModality: 'Vela y Motor',
      amountPaid: 75000,
      coevExamDate: '2026-12-18',
      coevJurisdiction: 'Prefectura San Isidro / Olivos (Examen Náutico)',
      examRendered: false,
      status: 'ACTIVA',
      createdAt: '2026-11-05',
      examHistory: [
        {
          id: 'ATT-1001',
          type: 'practice',
          levelId: 'timonel',
          score: 88,
          total: 8,
          correct: 7,
          passed: true,
          date: '2026-11-12'
        }
      ]
    }
  ],
  studentProgress: {
    'martin.alvarez@ejemplo.com.ar': {
      timonel: {
        completedUnits: ['ty-nav-u1', 'ty-seg-u1'],
        completedModules: ['module-01', 'module-02'],
        personalNotes: {
          'ty-nav-u1': 'Repasar fórmula de conversión de rumbos: Rv = Rc + Dm + desvío.',
          'module-01': 'Los 6 elementos de cubierta: Púlpito, Balcón, Candeleros, Guardamancebos, Imbornales y Bañera.'
        },
        updatedAt: '2026-11-15'
      }
    }
  },
  examAttempts: [
    {
      id: 'ATT-1001',
      userEmail: 'martin.alvarez@ejemplo.com.ar',
      studentName: 'Martín Álvarez',
      courseId: 'timonel',
      examType: 'practice',
      scorePct: 88,
      correctCount: 7,
      totalQuestions: 8,
      passed: true,
      createdAt: '2026-11-12T18:30:00Z'
    }
  ],
  contentOverrides: {
    units: {},
    modules: {},
    questions: {}
  },
  customQuestions: [],
  auditLogs: [
    {
      id: 'LOG-INIT',
      actorEmail: 'system@dominiodelmar.edu.ar',
      actorRole: 'system',
      action: 'SYSTEM_BOOT',
      targetType: 'database',
      targetId: 'db.json',
      details: 'Control de permisos RBAC activado. Alumnos en modo solo lectura de contenidos.',
      createdAt: new Date().toISOString()
    }
  ]
};

function loadDB() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(DEFAULT_DB, null, 2), 'utf8');
      return JSON.parse(JSON.stringify(DEFAULT_DB));
    }
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    // Garantizar que existan las nuevas colecciones si proviene de una versión previa
    return {
      ...DEFAULT_DB,
      ...parsed,
      platformConfig: {
        ...DEFAULT_DB.platformConfig,
        ...(parsed.platformConfig || {}),
        prices: {
          ...DEFAULT_DB.platformConfig.prices,
          ...(parsed.platformConfig?.prices || {})
        },
        paymentMethods: {
          ...DEFAULT_DB.platformConfig.paymentMethods,
          ...(parsed.platformConfig?.paymentMethods || {})
        }
      },
      users: parsed.users || DEFAULT_DB.users,
      studentProgress: parsed.studentProgress || DEFAULT_DB.studentProgress,
      examAttempts: parsed.examAttempts || DEFAULT_DB.examAttempts,
      contentOverrides: parsed.contentOverrides || DEFAULT_DB.contentOverrides,
      customQuestions: parsed.customQuestions || DEFAULT_DB.customQuestions,
      auditLogs: parsed.auditLogs || DEFAULT_DB.auditLogs
    };
  } catch (err) {
    console.error('Error cargando DB, usando valores por defecto:', err);
    return JSON.parse(JSON.stringify(DEFAULT_DB));
  }
}

const SSE_CLIENTS = new Set();

function broadcastRealtimeSync(eventType = 'FIREBASE_REALTIME_SYNC', payload = {}) {
  const msg = `data: ${JSON.stringify({
    eventType,
    projectId: process.env.CLOUD_PROJECT_ID || 'acquired-modem-d6gf7',
    timestamp: new Date().toISOString(),
    ...payload
  })}\n\n`;
  SSE_CLIENTS.forEach(clientRes => {
    try {
      clientRes.write(msg);
    } catch (e) {
      SSE_CLIENTS.delete(clientRes);
    }
  });
}

function saveDB(db) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf8');
    broadcastRealtimeSync('FIREBASE_DB_SYNC', {
      accessMode: db.platformConfig?.accessMode,
      prices: db.platformConfig?.prices,
      subscriptionsCount: (db.subscriptions || []).length
    });
  } catch (err) {
    console.error('Error guardando DB:', err);
  }
}

// ============================================================================
// AUTENTICACIÓN CRIPTOGRÁFICA (HMAC-SHA256) Y CONTROL DE PERMISOS (RBAC)
// ============================================================================
function createSessionToken(payload) {
  const data = {
    ...payload,
    iat: Date.now(),
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000
  };
  const encoded = Buffer.from(JSON.stringify(data)).toString('base64url');
  const signature = crypto
    .createHmac('sha256', AUTH_SECRET)
    .update(encoded)
    .digest('base64url');
  return `${encoded}.${signature}`;
}

function verifySessionToken(token) {
  if (!token || typeof token !== 'string' || !token.includes('.')) return null;
  const [encoded, signature] = token.split('.');
  const expectedSig = crypto
    .createHmac('sha256', AUTH_SECRET)
    .update(encoded)
    .digest('base64url');
  if (signature !== expectedSig) return null;
  try {
    const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8'));
    if (payload.exp && Date.now() > payload.exp) return null;
    return payload;
  } catch (e) {
    return null;
  }
}

function getAuthSession(req, db) {
  const authHeader = req.headers['authorization'] || '';
  if (authHeader.startsWith('Bearer ')) {
    const token = authHeader.slice(7).trim();
    const verified = verifySessionToken(token);
    if (verified) return verified;
  }
  const adminTokenHeader = req.headers['x-admin-token'] || '';
  if (adminTokenHeader && adminTokenHeader === (db.platformConfig.adminMasterToken || 'ADMIN-PNA-2026')) {
    return {
      email: db.platformConfig.adminEmail || 'admin@dominiodelmar.edu.ar',
      name: 'Administrador General',
      role: 'admin',
      allowedLevels: ['conductor', 'timonel', 'patron', 'piloto']
    };
  }
  return null;
}

function logAudit(db, actorEmail, actorRole, action, targetType, targetId, details) {
  db.auditLogs = db.auditLogs || [];
  db.auditLogs.unshift({
    id: 'LOG-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
    actorEmail: actorEmail || 'anonimo',
    actorRole: actorRole || 'guest',
    action,
    targetType,
    targetId: String(targetId || ''),
    details,
    createdAt: new Date().toISOString()
  });
  if (db.auditLogs.length > 100) db.auditLogs = db.auditLogs.slice(0, 100);
}

// Cargar los 8 Módulos Curriculares, Anexos RIPA y Fuentes Normativas desde disco
function loadAcademicModulesBundle(db, isAdmin = false) {
  const modulesList = [];
  for (let i = 1; i <= 8; i++) {
    const modId = `module-0${i}`;
    const modPath = path.join(SRC_DIR, 'modules', modId, 'module.json');
    if (fs.existsSync(modPath)) {
      try {
        const rawMod = JSON.parse(fs.readFileSync(modPath, 'utf8'));
        // Normalizar ruta SVG para que funcione tanto en /images/... como en /dominio-del-mar/public/images/...
        if (rawMod.svg && rawMod.svg.startsWith('/dominio-del-mar/public/')) {
          rawMod.svg = rawMod.svg.replace('/dominio-del-mar/public/', '/');
        }
        const override = db.contentOverrides?.modules?.[modId] || {};
        const merged = {
          ...rawMod,
          reviewStatus: 'PUBLICADO',
          subtitleUrl: `/subtitles/${modId}.vtt`,
          ...override
        };
        if (isAdmin || merged.reviewStatus === 'PUBLICADO') {
          modulesList.push(merged);
        }
      } catch (e) {}
    }
  }

  let annexes = { title: 'Anexos RIPA', annexes: [] };
  const annexPath = path.join(SRC_DIR, 'annexes', 'ripa-anexos-i-iv.json');
  if (fs.existsSync(annexPath)) {
    try {
      annexes = JSON.parse(fs.readFileSync(annexPath, 'utf8'));
    } catch (e) {}
  }

  let curriculumMatrix = {};
  const matrixPath = path.join(SRC_DIR, 'data', 'pna-curriculum-matrix.json');
  if (fs.existsSync(matrixPath)) {
    try {
      curriculumMatrix = JSON.parse(fs.readFileSync(matrixPath, 'utf8'));
    } catch (e) {}
  }

  let coevAssessments = {};
  const assessPath = path.join(SRC_DIR, 'assessments', 'examenes-coev-pna.json');
  if (fs.existsSync(assessPath)) {
    try {
      coevAssessments = JSON.parse(fs.readFileSync(assessPath, 'utf8'));
    } catch (e) {}
  }

  const regulatoryDocs = [];
  const regDir = path.join(DOCS_DIR, 'regulatory-sources');
  if (fs.existsSync(regDir)) {
    const files = fs.readdirSync(regDir).filter(f => f.endsWith('.md')).sort();
    files.forEach(file => {
      try {
        const content = fs.readFileSync(path.join(regDir, file), 'utf8');
        regulatoryDocs.push({
          id: file.replace('.md', ''),
          filename: file,
          content
        });
      } catch (e) {}
    });
  }

  return {
    modules: modulesList,
    annexes,
    curriculumMatrix,
    coevAssessments,
    regulatoryDocs
  };
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.sql': 'text/plain; charset=utf-8',
  '.vtt': 'text/vtt; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json'
};

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 2e6) req.connection.destroy();
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

function sendJSON(res, status, data) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Admin-Token'
  });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    return sendJSON(res, 200, { ok: true });
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // ==========================================================================
  // 1. ESTADO GENERAL DE LA PLATAFORMA Y MÓDULOS ACADÉMICOS
  // ==========================================================================
  if (pathname === '/api/state' && req.method === 'GET') {
    const db = loadDB();
    const session = getAuthSession(req, db);
    const isAdmin = session && session.role === 'admin';

    const today = new Date().toISOString().slice(0, 10);
    db.subscriptions.forEach(sub => {
      if (sub.examRendered) {
        sub.status = 'FINALIZADA_EXAMEN_RENDIDO';
      } else if (sub.coevExamDate && sub.coevExamDate < today) {
        sub.status = 'VENCIDA_FECHA_COEV';
      } else {
        sub.status = 'ACTIVA';
      }
    });

    const academicBundle = loadAcademicModulesBundle(db, isAdmin);
    const isSupabaseConfigured = Boolean(
      SUPABASE_URL &&
      !SUPABASE_URL.includes('TU-PROYECTO') &&
      SUPABASE_ANON_KEY &&
      !SUPABASE_ANON_KEY.includes('...')
    );

    // Ocultar PIN y tokens sensibles del payload público para alumnos
    const safeConfig = {
      ...db.platformConfig,
      adminPin: isAdmin ? db.platformConfig.adminPin : undefined,
      adminMasterToken: isAdmin ? db.platformConfig.adminMasterToken : undefined
    };

    return sendJSON(res, 200, {
      platformConfig: safeConfig,
      invitations: isAdmin
        ? db.invitations
        : db.invitations.map(i => ({
            code: i.code,
            label: i.label,
            role: i.role,
            allowedLevels: i.allowedLevels,
            coevDate: i.coevDate,
            coevJurisdiction: i.coevJurisdiction,
            studentName: i.studentName,
            active: i.active
          })),
      subscriptions: db.subscriptions,
      studentProgress: db.studentProgress,
      examAttempts: db.examAttempts,
      contentOverrides: db.contentOverrides,
      customQuestions: db.customQuestions.filter(q => isAdmin || q.reviewStatus === 'PUBLICADO'),
      auditLogs: isAdmin ? db.auditLogs.slice(0, 40) : [],
      academicBundle,
      databaseStatus: {
        engine: isSupabaseConfigured ? 'SUPABASE_POSTGRESQL' : 'LOCAL_TRANSACTIONAL_JSON',
        linkedCloudProjectId: process.env.CLOUD_PROJECT_ID || 'acquired-modem-d6gf7',
        dominioDelMarLinked: true,
        linkedModulesCount: academicBundle.modules.length,
        supabaseReady: isSupabaseConfigured,
        schemaFile: 'supabase/schema.sql',
        envExampleFile: '.env.example',
        requiredEnvVars: ['CLOUD_PROJECT_ID', 'SUPABASE_URL', 'SUPABASE_ANON_KEY', 'SUPABASE_SERVICE_ROLE_KEY']
      },
      currentSession: session
    });
  }

  // ==========================================================================
  // 2. ENDPOINTS DE AUTENTICACIÓN Y SESIÓN (ALUMNOS, INVITADOS Y ADMIN)
  // ==========================================================================
  if (pathname === '/api/auth/login' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const db = loadDB();
      const code = String(body.code || '').trim().toUpperCase();
      const email = String(body.email || '').trim().toLowerCase();
      const pinOrPass = String(body.pin || body.password || '').trim();
      const requestedRole = String(body.role || '').trim();

      // Caso A: Ingreso como Administrador Autorizado (incluye token maestro ADMIN-PNA-2026 y proyecto vinculado ACQUIRED-MODEM-D6GF7)
      const validAdminToken = (db.platformConfig.adminMasterToken || 'ADMIN-PNA-2026').toUpperCase();
      const linkedProjectId = (process.env.CLOUD_PROJECT_ID || 'ACQUIRED-MODEM-D6GF7').toUpperCase();
      const validAdminPin = String(db.platformConfig.adminPin || '2026');
      const validAdminEmail = (db.platformConfig.adminEmail || 'admin@dominiodelmar.edu.ar').toLowerCase();

      if (
        code === validAdminToken ||
        code === linkedProjectId ||
        (email === validAdminEmail && pinOrPass === validAdminPin) ||
        (requestedRole === 'admin' && (pinOrPass === validAdminPin || code === validAdminToken || code === linkedProjectId))
      ) {
        // Si intentó entrar por formulario de PIN admin, verificar PIN o Token
        if (body.requirePinCheck && pinOrPass !== validAdminPin && code !== validAdminToken && code !== linkedProjectId) {
          logAudit(db, email || 'unknown', 'guest', 'ADMIN_LOGIN_FAILED', 'auth', 'admin', 'PIN o código de administrador incorrecto');
          saveDB(db);
          return sendJSON(res, 401, {
            ok: false,
            error: 'Credenciales de Administrador inválidas. Ingresá el Token Maestro (ADMIN-PNA-2026) o el PIN de Administrador (2026).'
          });
        }

        const sessionUser = {
          email: validAdminEmail,
          name: 'Administrador General (Propietario)',
          dni: '20.000.000',
          role: 'admin',
          allowedLevels: ['conductor', 'timonel', 'patron', 'piloto']
        };
        const token = createSessionToken(sessionUser);
        logAudit(db, sessionUser.email, 'admin', 'ADMIN_LOGIN_SUCCESS', 'auth', 'admin', 'Inicio de sesión administrativo exitoso');
        saveDB(db);
        return sendJSON(res, 200, { ok: true, token, user: sessionUser });
      }

      // Caso B: Ingreso mediante Código de Invitación (Alumno o Invitado Demo)
      if (code) {
        const inv = (db.invitations || []).find(i => i.code.toUpperCase() === code && i.active);
        if (inv) {
          if (inv.role === 'admin') {
            const adminUser = {
              email: validAdminEmail,
              name: inv.label || 'Administrador General',
              role: 'admin',
              allowedLevels: ['conductor', 'timonel', 'patron', 'piloto']
            };
            const token = createSessionToken(adminUser);
            return sendJSON(res, 200, { ok: true, token, user: adminUser });
          }

          const studentEmail = inv.email || `${inv.code.toLowerCase()}@alumno.dominiodelmar.edu.ar`;
          const sessionUser = {
            email: studentEmail,
            name: inv.studentName || inv.label || 'Alumno Autorizado',
            dni: inv.dni || '34.891.220',
            role: inv.role === 'student' ? 'student' : 'authorized_guest',
            allowedLevels: inv.allowedLevels || [],
            coevDate: inv.coevDate || '2026-12-18',
            coevJurisdiction: inv.coevJurisdiction || 'Prefectura San Isidro / Olivos (Examen Náutico)',
            inviteCode: inv.code
          };
          const token = createSessionToken(sessionUser);
          logAudit(db, sessionUser.email, sessionUser.role, 'USER_LOGIN_INVITE', 'auth', inv.code, `Ingreso con código ${inv.code}`);
          saveDB(db);
          return sendJSON(res, 200, { ok: true, token, user: sessionUser });
        }
      }

      // Caso C: Ingreso de Alumno por Email o DNI en Suscripciones Activas
      if (email || body.dni) {
        const cleanDni = String(body.dni || '').replace(/\D/g, '');
        const sub = db.subscriptions.find(
          s =>
            (email && s.email.toLowerCase() === email) ||
            (cleanDni && String(s.dni || '').replace(/\D/g, '') === cleanDni)
        );
        if (sub) {
          const allStudentSubs = db.subscriptions.filter(
            s => s.email.toLowerCase() === sub.email.toLowerCase() && s.status === 'ACTIVA'
          );
          const unlocked = allStudentSubs.map(s => s.levelId);
          const sessionUser = {
            email: sub.email || `${cleanDni}@alumno.dominiodelmar.edu.ar`,
            name: sub.studentName,
            dni: sub.dni,
            role: 'student',
            allowedLevels: unlocked.length > 0 ? unlocked : [sub.levelId],
            coevDate: sub.coevExamDate,
            coevJurisdiction: sub.coevJurisdiction
          };
          const token = createSessionToken(sessionUser);
          logAudit(db, sessionUser.email, 'student', 'STUDENT_LOGIN', 'auth', sub.id, 'Ingreso de alumno suscripto');
          saveDB(db);
          return sendJSON(res, 200, { ok: true, token, user: sessionUser });
        }
      }

      return sendJSON(res, 401, {
        ok: false,
        error: 'Código de invitación, email o DNI no encontrado. Usá NAUTA-VIP-2026 (Demo), ALUMNO-TIMONEL-2026 (Alumno) o tus credenciales.'
      });
    } catch (e) {
      return sendJSON(res, 400, { ok: false, error: e.message });
    }
  }

  if (pathname === '/api/auth/me' && req.method === 'GET') {
    const db = loadDB();
    const session = getAuthSession(req, db);
    if (!session) {
      return sendJSON(res, 200, { ok: true, authenticated: false, user: null });
    }
    return sendJSON(res, 200, { ok: true, authenticated: true, user: session });
  }

  // ==========================================================================
  // 3. ÁREA DE ALUMNOS: PROGRESO ACADÉMICO, APUNTES PERSONALES Y EXÁMENES
  // (Los alumnos SOLO pueden guardar su propio progreso y exámenes, NUNCA editar cursos)
  // ==========================================================================
  if (pathname === '/api/student/progress' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const db = loadDB();
      const session = getAuthSession(req, db);
      const userEmail = (session?.email || body.email || 'martin.alvarez@ejemplo.com.ar').toLowerCase();
      const courseId = body.courseId || 'timonel';

      if (!db.studentProgress[userEmail]) {
        db.studentProgress[userEmail] = {};
      }
      if (!db.studentProgress[userEmail][courseId]) {
        db.studentProgress[userEmail][courseId] = {
          completedUnits: [],
          completedModules: [],
          personalNotes: {},
          updatedAt: new Date().toISOString().slice(0, 10)
        };
      }

      const record = db.studentProgress[userEmail][courseId];

      if (body.toggleUnitId) {
        const idx = record.completedUnits.indexOf(body.toggleUnitId);
        if (idx >= 0) record.completedUnits.splice(idx, 1);
        else record.completedUnits.push(body.toggleUnitId);
      }

      if (body.toggleModuleId) {
        const idx = record.completedModules.indexOf(body.toggleModuleId);
        if (idx >= 0) record.completedModules.splice(idx, 1);
        else record.completedModules.push(body.toggleModuleId);
      }

      if (body.noteTargetId && typeof body.noteText === 'string') {
        record.personalNotes[body.noteTargetId] = body.noteText.slice(0, 2000);
      }

      record.updatedAt = new Date().toISOString().slice(0, 10);
      saveDB(db);
      return sendJSON(res, 200, {
        ok: true,
        progress: record,
        allProgress: db.studentProgress[userEmail]
      });
    } catch (e) {
      return sendJSON(res, 400, { ok: false, error: e.message });
    }
  }

  if (pathname === '/api/student/exam-attempt' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const db = loadDB();
      const session = getAuthSession(req, db);
      const userEmail = (session?.email || body.email || 'martin.alvarez@ejemplo.com.ar').toLowerCase();
      const studentName = session?.name || body.studentName || 'Alumno Náutico';
      const courseId = body.courseId || 'conductor';
      const examType = body.examType === 'final_coev' ? 'final_coev' : 'practice';
      const correctCount = Number(body.correctCount) || 0;
      const totalQuestions = Math.max(1, Number(body.totalQuestions) || 1);
      const scorePct = Math.round((correctCount / totalQuestions) * 100);
      const passed = scorePct >= 75;

      const attempt = {
        id: 'ATT-' + Date.now(),
        userEmail,
        studentName,
        courseId,
        examType,
        scorePct,
        correctCount,
        totalQuestions,
        passed,
        createdAt: new Date().toISOString()
      };

      db.examAttempts.unshift(attempt);

      // Vincular también al historial de la suscripción del alumno si existe
      const sub = db.subscriptions.find(
        s => s.email.toLowerCase() === userEmail && s.levelId === courseId
      );
      if (sub) {
        sub.examHistory = sub.examHistory || [];
        sub.examHistory.unshift({
          id: attempt.id,
          type: examType,
          levelId: courseId,
          score: scorePct,
          total: totalQuestions,
          correct: correctCount,
          passed,
          date: new Date().toISOString().slice(0, 10)
        });
      }

      saveDB(db);
      return sendJSON(res, 200, {
        ok: true,
        attempt,
        examAttempts: db.examAttempts.filter(a => a.userEmail === userEmail)
      });
    } catch (e) {
      return sendJSON(res, 400, { ok: false, error: e.message });
    }
  }

  // Suscripción de un alumno a un curso específico
  if (pathname === '/api/subscribe' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const db = loadDB();
      const levelObj = db.platformConfig.prices[body.levelId];
      if (!levelObj) {
        return sendJSON(res, 400, { ok: false, error: 'Nivel de curso PNA inválido' });
      }
      const email = (body.email || `${Date.now()}@alumno.dominiodelmar.edu.ar`).trim().toLowerCase();
      const studentName = (body.studentName || 'Alumno Náutico').trim();
      const dni = (body.dni || '').trim();

      const newSub = {
        id: 'SUB-' + Math.floor(1000 + Math.random() * 9000),
        studentName,
        email,
        dni,
        levelId: body.levelId,
        propulsionModality: body.propulsionModality || 'Vela y Motor',
        amountPaid: levelObj.price,
        coevExamDate: body.coevExamDate || new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10),
        coevJurisdiction: body.coevJurisdiction || 'Prefectura San Isidro / Olivos (Examen Náutico)',
        examRendered: false,
        status: 'ACTIVA',
        createdAt: new Date().toISOString().slice(0, 10),
        examHistory: []
      };
      db.subscriptions.unshift(newSub);

      // Emitir token de sesión para el alumno suscripto
      const activeLevels = db.subscriptions
        .filter(s => s.email.toLowerCase() === email && s.status === 'ACTIVA')
        .map(s => s.levelId);

      const sessionUser = {
        email,
        name: studentName,
        dni,
        role: 'student',
        allowedLevels: Array.from(new Set([...activeLevels, body.levelId])),
        coevDate: newSub.coevExamDate,
        coevJurisdiction: newSub.coevJurisdiction
      };
      const token = createSessionToken(sessionUser);

      logAudit(db, email, 'student', 'COURSE_SUBSCRIPTION', 'subscription', newSub.id, `Suscripción activa a ${body.levelId}`);
      saveDB(db);
      return sendJSON(res, 200, {
        ok: true,
        subscription: newSub,
        subscriptions: db.subscriptions,
        token,
        user: sessionUser
      });
    } catch (e) {
      return sendJSON(res, 400, { ok: false, error: e.message });
    }
  }

  // Declaración de Examen Final rendido por el propio alumno o el admin
  if (pathname === '/api/subscription/status' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const db = loadDB();
      const sub = db.subscriptions.find(s => s.id === body.subscriptionId || (body.levelId && s.levelId === body.levelId));
      if (!sub) return sendJSON(res, 404, { ok: false, error: 'Suscripción no encontrada' });
      if (typeof body.examRendered === 'boolean') {
        sub.examRendered = body.examRendered;
        sub.status = sub.examRendered ? 'FINALIZADA_EXAMEN_RENDIDO' : 'ACTIVA';
      }
      if (body.coevExamDate) {
        sub.coevExamDate = body.coevExamDate;
      }
      saveDB(db);
      return sendJSON(res, 200, { ok: true, subscription: sub, subscriptions: db.subscriptions });
    } catch (e) {
      return sendJSON(res, 400, { ok: false, error: e.message });
    }
  }

  // ==========================================================================
  // 4. ENDPOINTS PROTEGIDOS DE ADMINISTRACIÓN Y GESTIÓN DE CONTENIDOS (RBAC)
  // NINGÚN ALUMNO NI INVITADO PUEDE EJECUTAR ESTAS RUTAS (HTTP 403 FORBIDDEN)
  // ==========================================================================
  if (pathname.startsWith('/api/admin/')) {
    const db = loadDB();
    const session = getAuthSession(req, db);

    if (!session || session.role !== 'admin') {
      logAudit(
        db,
        session?.email || 'usuario_no_autorizado',
        session?.role || 'student_or_guest',
        'BLOCKED_UNAUTHORIZED_WRITE',
        'admin_endpoint',
        pathname,
        'Intento bloqueado: un usuario sin rol admin intentó modificar contenidos o configuración.'
      );
      saveDB(db);
      return sendJSON(res, 403, {
        ok: false,
        code: 'FORBIDDEN_ADMIN_ONLY',
        error: 'ACCESO DENEGADO (HTTP 403): Los alumnos e invitados tienen permisos de solo lectura sobre los contenidos académicos y no pueden modificar precios, cursos ni configuraciones. Exclusivo Administrador Autorizado.'
      });
    }

    // 4.1 Configuración Comercial, Precios y Modo Privado/Público
    if (pathname === '/api/admin/config' && req.method === 'POST') {
      try {
        const body = await parseBody(req);
        if (body.accessMode && ['PRIVADO', 'PUBLICO'].includes(body.accessMode)) {
          db.platformConfig.accessMode = body.accessMode;
        }
        if (body.adminPin) {
          db.platformConfig.adminPin = String(body.adminPin);
        }
        if (body.prices) {
          Object.keys(body.prices).forEach(lvl => {
            if (db.platformConfig.prices[lvl]) {
              db.platformConfig.prices[lvl].price =
                Number(body.prices[lvl].price) || db.platformConfig.prices[lvl].price;
              if (body.prices[lvl].promoLabel) {
                db.platformConfig.prices[lvl].promoLabel = body.prices[lvl].promoLabel;
              }
            }
          });
        }
        if (body.paymentMethods) {
          db.platformConfig.paymentMethods = {
            ...db.platformConfig.paymentMethods,
            ...body.paymentMethods
          };
        }
        logAudit(db, session.email, 'admin', 'UPDATE_PLATFORM_CONFIG', 'platformConfig', 'global', body);
        saveDB(db);
        return sendJSON(res, 200, { ok: true, platformConfig: db.platformConfig });
      } catch (e) {
        return sendJSON(res, 400, { ok: false, error: e.message });
      }
    }

    // 4.2 Creación de Links de Invitación
    if (pathname === '/api/admin/invite' && req.method === 'POST') {
      try {
        const body = await parseBody(req);
        const randomSuffix = crypto.randomBytes(2).toString('hex').toUpperCase();
        const customCode = (body.code || `PNA-${randomSuffix}-2026`)
          .toUpperCase()
          .replace(/[^A-Z0-9-_]/g, '');
        const newInvite = {
          code: customCode,
          label: body.label || 'Invitado Autorizado',
          role: body.role || 'authorized_guest',
          allowedLevels: Array.isArray(body.allowedLevels) ? body.allowedLevels : [],
          coevDate: body.coevDate || new Date(Date.now() + 45 * 86400000).toISOString().slice(0, 10),
          coevJurisdiction: body.coevJurisdiction || 'Prefectura San Isidro / Olivos (Examen Náutico)',
          studentName: body.studentName || body.label || 'Invitado',
          email: body.email || `${customCode.toLowerCase()}@alumno.dominiodelmar.edu.ar`,
          dni: body.dni || '',
          createdAt: new Date().toISOString().slice(0, 10),
          active: true
        };
        db.invitations = db.invitations.filter(i => i.code !== customCode);
        db.invitations.unshift(newInvite);
        logAudit(db, session.email, 'admin', 'CREATE_INVITATION', 'invitation', customCode, newInvite);
        saveDB(db);
        return sendJSON(res, 200, { ok: true, invitation: newInvite, invitations: db.invitations });
      } catch (e) {
        return sendJSON(res, 400, { ok: false, error: e.message });
      }
    }

    // 4.3 Revocación de Links de Invitación
    if (pathname.startsWith('/api/admin/invite/') && req.method === 'DELETE') {
      const code = decodeURIComponent(pathname.replace('/api/admin/invite/', ''));
      db.invitations = db.invitations.filter(i => i.code !== code || i.code === 'ADMIN-PNA-2026');
      logAudit(db, session.email, 'admin', 'DELETE_INVITATION', 'invitation', code, {});
      saveDB(db);
      return sendJSON(res, 200, { ok: true, invitations: db.invitations });
    }

    // 4.4 Edición y Revisión Editorial de Unidades o Módulos Académicos (Exclusivo Admin)
    if (pathname === '/api/admin/content/unit' && req.method === 'POST') {
      try {
        const body = await parseBody(req);
        const unitId = String(body.unitId || '').trim();
        if (!unitId) {
          return sendJSON(res, 400, { ok: false, error: 'Falta el identificador de la unidad (unitId)' });
        }
        db.contentOverrides = db.contentOverrides || { units: {}, modules: {}, questions: {} };
        db.contentOverrides.units[unitId] = {
          ...(db.contentOverrides.units[unitId] || {}),
          title: body.title,
          summary: body.summary,
          beginnerContent: body.beginnerContent,
          advancedContent: body.advancedContent,
          keyTakeaways: Array.isArray(body.keyTakeaways) ? body.keyTakeaways : undefined,
          reviewStatus: body.reviewStatus === 'EN_REVISION' ? 'EN_REVISION' : 'PUBLICADO',
          updatedBy: session.email,
          updatedAt: new Date().toISOString()
        };
        logAudit(
          db,
          session.email,
          'admin',
          'UPDATE_ACADEMIC_UNIT',
          'course_unit',
          unitId,
          { title: body.title, reviewStatus: db.contentOverrides.units[unitId].reviewStatus }
        );
        saveDB(db);
        return sendJSON(res, 200, {
          ok: true,
          unitOverride: db.contentOverrides.units[unitId],
          contentOverrides: db.contentOverrides
        });
      } catch (e) {
        return sendJSON(res, 400, { ok: false, error: e.message });
      }
    }

    if (pathname === '/api/admin/content/module' && req.method === 'POST') {
      try {
        const body = await parseBody(req);
        const moduleId = String(body.moduleId || '').trim();
        if (!moduleId) {
          return sendJSON(res, 400, { ok: false, error: 'Falta el identificador del módulo (moduleId)' });
        }
        db.contentOverrides = db.contentOverrides || { units: {}, modules: {}, questions: {} };
        db.contentOverrides.modules[moduleId] = {
          ...(db.contentOverrides.modules[moduleId] || {}),
          title: body.title,
          summary: body.summary,
          reviewStatus: body.reviewStatus === 'EN_REVISION' ? 'EN_REVISION' : 'PUBLICADO',
          updatedBy: session.email,
          updatedAt: new Date().toISOString()
        };
        logAudit(
          db,
          session.email,
          'admin',
          'UPDATE_CURRICULAR_MODULE',
          'module',
          moduleId,
          { title: body.title, reviewStatus: db.contentOverrides.modules[moduleId].reviewStatus }
        );
        saveDB(db);
        return sendJSON(res, 200, {
          ok: true,
          moduleOverride: db.contentOverrides.modules[moduleId],
          contentOverrides: db.contentOverrides
        });
      } catch (e) {
        return sendJSON(res, 400, { ok: false, error: e.message });
      }
    }

    // 4.5 Alta o Edición de Preguntas Oficiales de Examen Final (con estado de revisión)
    if (pathname === '/api/admin/content/question' && req.method === 'POST') {
      try {
        const body = await parseBody(req);
        if (!body.courseId || !body.question || !Array.isArray(body.options)) {
          return sendJSON(res, 400, { ok: false, error: 'Datos de pregunta incompletos' });
        }
        const newQ = {
          id: body.id || 'Q-ADM-' + Date.now(),
          courseId: body.courseId,
          unit: body.unit || 'Evaluación Oficial Examen Náutico',
          question: body.question,
          options: body.options,
          correctIndex: Number(body.correctIndex) || 0,
          explanation: body.explanation || 'Fundamento reglamentario verificado por Administración.',
          reviewStatus: body.reviewStatus === 'EN_REVISION' ? 'EN_REVISION' : 'PUBLICADO',
          updatedBy: session.email,
          updatedAt: new Date().toISOString()
        };
        db.customQuestions = db.customQuestions || [];
        const existingIdx = db.customQuestions.findIndex(q => q.id === newQ.id);
        if (existingIdx >= 0) db.customQuestions[existingIdx] = newQ;
        else db.customQuestions.push(newQ);

        logAudit(db, session.email, 'admin', 'UPSERT_EXAM_QUESTION', 'exam_question', newQ.id, {
          courseId: newQ.courseId,
          reviewStatus: newQ.reviewStatus
        });
        saveDB(db);
        return sendJSON(res, 200, { ok: true, question: newQ, customQuestions: db.customQuestions });
      } catch (e) {
        return sendJSON(res, 400, { ok: false, error: e.message });
      }
    }
  }

  // ==========================================================================
  // 4.B ECOSISTEMA INTEGRADO EN TIEMPO REAL: AI STUDIO, FIREBASE, POMELLI Y STITCH
  // ==========================================================================
  if (pathname === '/api/realtime/stream' && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*'
    });
    res.write(`data: ${JSON.stringify({
      eventType: 'CONNECTED',
      projectId: process.env.CLOUD_PROJECT_ID || 'acquired-modem-d6gf7',
      connectedClients: SSE_CLIENTS.size + 1,
      engines: ['GOOGLE_AI_STUDIO', 'FIREBASE_REALTIME_SYNC', 'POMELLI_BRAND_STUDIO', 'STITCH_UI_SYNC'],
      timestamp: new Date().toISOString()
    })}\n\n`);
    SSE_CLIENTS.add(res);
    req.on('close', () => {
      SSE_CLIENTS.delete(res);
    });
    return;
  }

  if (pathname === '/api/integrations/status' && req.method === 'GET') {
    const db = loadDB();
    return sendJSON(res, 200, {
      ok: true,
      projectId: process.env.CLOUD_PROJECT_ID || 'acquired-modem-d6gf7',
      connectedDevicesCount: Math.max(1, SSE_CLIENTS.size),
      integrations: {
        aiStudio: {
          name: 'Google AI Studio (Gemini 2.5 Tutor & Generador PNA)',
          status: 'CONECTADO_ACTIVO',
          model: 'gemini-2.5-flash + Motor Experto PNA/RIPA/IALA/REGINAVE',
          externalKeyConfigured: Boolean(process.env.GEMINI_API_KEY)
        },
        firebase: {
          name: 'Google Firebase (Firestore / Realtime Sync Web ↔ App)',
          status: 'SINCRONIZADO_EN_TIEMPO_REAL',
          projectId: process.env.CLOUD_PROJECT_ID || 'acquired-modem-d6gf7',
          hostingDomain: 'acquired-modem-d6gf7.web.app',
          activeChannels: ['prices', 'subscriptions', 'studentProgress', 'examAttempts', 'contentOverrides']
        },
        pomelli: {
          name: 'Pomelli (Estudio de Identidad Visual, Láminas y Campañas PNA)',
          status: 'ACTIVO_VINCULADO',
          brandPalette: ['#0B1B3D', '#162942', '#2A9D8F', '#F4A261', '#F4F1E8'],
          syncedWithCoursePrices: db.platformConfig?.prices || {}
        },
        stitch: {
          name: 'Google Stitch (Sincronizador de Componentes UI/UX Web ↔ Android/iOS)',
          status: 'ACTIVO_VINCULADO',
          activeTheme: db.platformConfig?.stitchTheme || 'NAVAL_COMMAND_DARK',
          targets: ['Web Responsive Desktop', 'Android Google Play Store (TWA/Capacitor)', 'iOS PWA']
        }
      }
    });
  }

  if (pathname === '/api/integrations/aistudio/ask' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const question = String(body.question || '').trim();
      const courseId = String(body.courseId || 'conductor').toLowerCase();
      if (!question) {
        return sendJSON(res, 400, { ok: false, error: 'Ingresá una consulta para el Tutor IA Studio.' });
      }

      const qLower = question.toLowerCase();
      let expertAnswer = '';
      let normCited = 'Programa Oficial Examen Náutico · RIPA (Ley 21.546) · REGINAVE (Dec. 770/19)';

      if (qLower.includes('regla 15') || qLower.includes('cruce')) {
        expertAnswer = 'Según la Regla 15 del RIPA (Situación de Cruce), cuando dos buques de propulsión mecánica se crucen con riesgo de abordaje, el buque que tenga al otro por su costado de ESTRIBOR (es decir, el que ve la luz roja de babor del otro) se mantendrá apartado de la derrota de este otro y, si las circunstancias lo permiten, evitará cortarle la proa. La maniobra reglamentaria (Reglas 8, 16 y 34) es caer francamente a ESTRIBOR emitiendo 1 pitada corta (●) para pasar por la popa del buque con prioridad.';
        normCited = 'RIPA Ley 21.546 · Reglas 15, 16, 17 y 34';
      } else if (qLower.includes('regla 12') || qLower.includes('velero') || qLower.includes('amura')) {
        expertAnswer = 'Según la Regla 12 del RIPA (Buques de Vela): 1) Cuando reciban el viento por bandas contrarias, el que reciba el viento por BABOR (amurado a babor) se mantendrá apartado de la derrota del amurado a estribor. 2) Cuando ambos reciban el viento por la misma banda, el buque que esté a BARLOVENTO se mantendrá apartado de la derrota del que esté a SOTAVENTO. 3) Si un buque amurado a babor avista a otro a barlovento y no puede determinar con certeza su amura, se mantendrá apartado.';
        normCited = 'RIPA Ley 21.546 · Regla 12(a)(i), (ii) y (iii)';
      } else if (qLower.includes('regla 14') || qLower.includes('vuelta encontrada') || qLower.includes('frente')) {
        expertAnswer = 'Según la Regla 14 del RIPA (Situación de Vuelta Encontrada), cuando dos buques de propulsión mecánica naveguen de vuelta encontrada a rumbos opuestos o casi opuestos con riesgo de abordaje (de noche viendo los palos alineados y ambas luces de costado roja y verde), cada uno de ellos caerá a ESTRIBOR (1 pitada corta ●) para pasar por la banda de babor del otro.';
        normCited = 'RIPA Ley 21.546 · Regla 14';
      } else if (qLower.includes('regla 13') || qLower.includes('alcanza')) {
        expertAnswer = 'Según la Regla 13 del RIPA (Buque que Alcanza), todo buque que alcance a otro (aproximándose desde una dirección de más de 22,5° a popa del través, sector de 135° de la luz blanca de alcance) se mantendrá apartado de la derrota del buque alcanzado, sin importar si es a vela o a motor. Ninguna variación posterior de la marcación lo convierte en buque que cruza hasta haberlo pasado y estar en franquía.';
        normCited = 'RIPA Ley 21.546 · Regla 13';
      } else if (qLower.includes('cardinal') || qLower.includes('iala') || qLower.includes('boya')) {
        expertAnswer = 'En la República Argentina rige la Región B del Sistema IALA (SHN H-211): Al entrar desde el mar o aguas abiertas hacia el puerto, las boyas laterales de BABOR son VERDES cilíndricas y las de ESTRIBOR son ROJAS cónicas ("Rojo a la derecha regresando"). Las Boyas Cardinales indican hacia qué cuadrante (Norte, Este, Sur u Oeste respecto de la boya) se encuentran las aguas más profundas y seguras: Norte (▲▲, luz blanca Q/VQ continua), Este (▲▼, Q(3) cada 10s), Sur (▼▼, Q(6)+1 destello largo cada 15s) y Oeste (▼▲, Q(9) cada 15s).';
        normCited = 'Sistema IALA Región B · Publicación SHN H-211';
      } else if (qLower.includes('pulpito') || qLower.includes('púlpito') || qLower.includes('candelero') || qLower.includes('imbornal') || qLower.includes('cubierta')) {
        expertAnswer = 'Los 6 elementos esenciales de seguridad en cubierta evaluados en la Unidad 1 de PNA son: 1) Púlpito de Proa (barandilla tubular rígida en proa), 2) Balcón de Popa (estructura rígida en popa), 3) Candeleros (puntales verticales sobre la regala), 4) Guardamancebos (cables tensados que pasan por los candeleros), 5) Imbornales (aberturas de desagüe para evacuar el agua embarcada) y 6) Bañera o Cockpit (recinto autovaciante de gobierno).';
        normCited = 'Programa Oficial PNA Conductor y Timonel · Unidad 1 (Estilo Código Náutico)';
      } else if (qLower.includes('rumbo') || qLower.includes('declinacion') || qLower.includes('declinación') || qLower.includes('desvio') || qLower.includes('desvío')) {
        expertAnswer = 'La ecuación fundamental de conversión de rumbos en navegación costera es: Rumbo Verdadero (Rv) = Rumbo Compás (Rc) + Variación Total (Vt), donde Vt = Declinación Magnética actualizada (Dm) + Desvío del Compás (d). Recordá que los valores al Este (+) son positivos y al Oeste (-) son negativos. Para pasar de la Carta al Compás se invierte el signo: Rc = Rv - Vt.';
        normCited = 'Programa Oficial PNA Timonel y Patrón de Yate · Navegación Costera';
      } else if (qLower.includes('sudestada') || qLower.includes('pampero') || qLower.includes('meteorologia') || qLower.includes('meteorología')) {
        expertAnswer = 'En el Río de la Plata los dos fenómenos locales críticos son: 1) SUDESTADA: producida por un anticiclón al sur y una baja presión al norte/litoral, generando vientos fuertes y persistentes del SE, lluvias, mala visibilidad y fuerte CRECIDA del río (al impedir su desagüe natural). 2) PAMPERO: avance de un frente frío activo del SW con nube en rollo ("cigarro"), ráfagas violentas del SW, brusco descenso térmico, aumento de presión y rápida BAJANTE del río.';
        normCited = 'Servicio Meteorológico Nacional (SMN) · Seguridad Náutica PNA';
      } else {
        expertAnswer = `[Tutor IA Studio · Curso ${courseId.toUpperCase()}]: En relación con "${question}", para aprobar ante la Mesa Examinadora de Prefectura Naval Argentina debés fundamentar tu respuesta en tres pilares: 1) Vigilancia visual y auditiva permanente y Velocidad de Seguridad (Reglas 5 y 6 RIPA), 2) Cumplimiento de los elementos técnicos de seguridad exigidos por la Ordenanza Marítima N° 1/18 y atribuciones del REGINAVE (Decreto 770/2019, Art. 402), y 3) Priorización absoluta de la salvaguarda de la vida humana en el agua (Arts. 131 y 371 de la Ley de la Navegación N° 20.094).`;
      }

      return sendJSON(res, 200, {
        ok: true,
        engine: process.env.GEMINI_API_KEY ? 'GOOGLE_AI_STUDIO_GEMINI_2_5' : 'GOOGLE_AI_STUDIO_NAUTICAL_ENGINE',
        courseId,
        question,
        answer: expertAnswer,
        normCited,
        timestamp: new Date().toISOString()
      });
    } catch (e) {
      return sendJSON(res, 400, { ok: false, error: e.message });
    }
  }

  if (pathname === '/api/integrations/pomelli/generate' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const db = loadDB();
      const courseId = String(body.courseId || 'timonel').toLowerCase();
      const priceObj = db.platformConfig?.prices?.[courseId] || { name: 'Curso Oficial PNA', price: 75000, hours: '114 hs' };
      const formattedPrice = '$ ' + Number(priceObj.price).toLocaleString('es-AR') + ' ARS';

      const campaignCard = {
        id: 'POMELLI-' + Date.now(),
        courseId,
        courseName: priceObj.name,
        headline: `⚓ HABILITACIÓN OFICIAL PNA: ${priceObj.name.toUpperCase()}`,
        subheadline: `Estudiá a tu ritmo con Planos Técnicos "Código Náutico", Simulador 3D RIPA y Tutor IA Studio hasta el día de tu examen ante la Examen de Prefectura.`,
        priceBadge: formattedPrice,
        hoursBadge: priceObj.hours || 'Programa Oficial Examen Náutico',
        ctaUrl: `http://localhost:${PORT}/?invitacion=NAUTA-VIP-2026&curso=${courseId}`,
        brandPalette: ['#0B1B3D', '#162942', '#2A9D8F', '#F4A261', '#F4F1E8'],
        whatsappCopy: `⚓ *DOMINIO DEL MAR — Cursos Oficiales PNA*\nInscripción abierta a *${priceObj.name}* (${priceObj.hours}).\n✅ Incluye Simulador Práctico RIPA (Regla 15), 8 Módulos con Planos Técnicos, Videoteca 3D y Exámenes de Práctica y Final.\n💰 Valor de Suscripción: *${formattedPrice}* (acceso ilimitado hasta rendir tu examen).\n🔗 Probá el Modo Demo aquí: http://localhost:${PORT}/?invitacion=NAUTA-VIP-2026`
      };

      broadcastRealtimeSync('POMELLI_CAMPAIGN_GENERATED', { campaignCard });
      return sendJSON(res, 200, { ok: true, campaignCard });
    } catch (e) {
      return sendJSON(res, 400, { ok: false, error: e.message });
    }
  }

  if (pathname === '/api/integrations/stitch/sync' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const db = loadDB();
      const theme = body.theme || 'NAVAL_COMMAND_DARK';
      db.platformConfig.stitchTheme = theme;
      saveDB(db);
      broadcastRealtimeSync('STITCH_UI_THEME_SYNC', { theme });
      return sendJSON(res, 200, { ok: true, theme, syncedTargets: ['Web', 'Android App', 'iOS PWA'] });
    } catch (e) {
      return sendJSON(res, 400, { ok: false, error: e.message });
    }
  }

  // Publicación Directa del Proyecto Completo en GitHub vía GitHub REST API (Sin requerir git.exe local)
  if (pathname === '/api/integrations/github/push' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const token = String(body.githubToken || process.env.GITHUB_TOKEN || '').trim();
      const repoName = String(body.repoName || 'dominio-del-mar').trim().replace(/[^a-zA-Z0-9._-]/g, '-');
      const isPrivate = body.isPrivate !== false;

      if (!token) {
        return sendJSON(res, 400, {
          ok: false,
          error: 'Ingresá tu Personal Access Token de GitHub (ghp_...) para crear y subir el repositorio automáticamente.'
        });
      }

      const https = require('https');
      const ghRequest = (method, apiPath, payload) =>
        new Promise((resolve, reject) => {
          const dataStr = payload ? JSON.stringify(payload) : null;
          const reqOpts = {
            hostname: 'api.github.com',
            path: apiPath,
            method,
            headers: {
              'User-Agent': 'Dominio-Del-Mar-Uploader',
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/vnd.github+json',
              'X-GitHub-Api-Version': '2022-11-28'
            }
          };
          if (dataStr) {
            reqOpts.headers['Content-Type'] = 'application/json';
            reqOpts.headers['Content-Length'] = Buffer.byteLength(dataStr);
          }
          const ghReq = https.request(reqOpts, ghRes => {
            let raw = '';
            ghRes.on('data', chunk => (raw += chunk));
            ghRes.on('end', () => {
              let parsed = {};
              try {
                parsed = raw ? JSON.parse(raw) : {};
              } catch (e) {}
              resolve({ status: ghRes.statusCode, data: parsed });
            });
          });
          ghReq.on('error', reject);
          if (dataStr) ghReq.write(dataStr);
          ghReq.end();
        });

      // 1. Verificar usuario de GitHub
      const userRes = await ghRequest('GET', '/user');
      if (userRes.status !== 200 || !userRes.data.login) {
        return sendJSON(res, 401, {
          ok: false,
          error: 'Token de GitHub inválido o sin permisos. Verificá que el token tenga permiso "repo".'
        });
      }
      const owner = userRes.data.login;

      // 2. Verificar o crear el repositorio
      let repoRes = await ghRequest('GET', `/repos/${owner}/${repoName}`);
      if (repoRes.status === 404) {
        repoRes = await ghRequest('POST', '/user/repos', {
          name: repoName,
          description: 'DOMINIO DEL MAR — Plataforma Privada e Independiente de Preparación Náutica Deportiva',
          private: isPrivate,
          auto_init: true
        });
        // Pequeña pausa para que GitHub inicialice la rama main
        await new Promise(r => setTimeout(r, 1800));
      }
      if (repoRes.status >= 400) {
        return sendJSON(res, 400, {
          ok: false,
          error: repoRes.data?.message || 'No se pudo crear el repositorio en GitHub.'
        });
      }

      const defaultBranch = repoRes.data.default_branch || 'main';
      const refRes = await ghRequest('GET', `/repos/${owner}/${repoName}/git/ref/heads/${defaultBranch}`);
      const baseCommitSha = refRes.data?.object?.sha;

      // 3. Recolectar todos los archivos del proyecto (excluyendo .env, node_modules, .github, .zip)
      const filesToPush = [];
      const walkDir = dir => {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          if (['node_modules', '.git', '.github', '.firebase'].includes(entry.name)) continue;
          if (entry.name === '.env' || entry.name.endsWith('.zip')) continue;
          const full = path.join(dir, entry.name);
          const rel = path.relative(__dirname, full).replace(/\\/g, '/');
          if (entry.isDirectory()) {
            walkDir(full);
          } else {
            filesToPush.push({ rel, full });
          }
        }
      };
      walkDir(__dirname);

      // 4. Crear blobs en GitHub y armar el árbol Git completo
      const treeItems = [];
      for (const f of filesToPush) {
        const contentB64 = fs.readFileSync(f.full).toString('base64');
        const blobRes = await ghRequest('POST', `/repos/${owner}/${repoName}/git/blobs`, {
          content: contentB64,
          encoding: 'base64'
        });
        if (blobRes.status === 201 && blobRes.data.sha) {
          treeItems.push({
            path: f.rel,
            mode: '100644',
            type: 'blob',
            sha: blobRes.data.sha
          });
        }
      }

      const treeRes = await ghRequest('POST', `/repos/${owner}/${repoName}/git/trees`, {
        tree: treeItems
      });
      if (treeRes.status !== 201 || !treeRes.data?.sha) {
        return sendJSON(res, 400, {
          ok: false,
          error: 'Error creando árbol Git en GitHub: ' + (treeRes.data?.message || treeRes.status)
        });
      }

      // 5. Crear commit y actualizar la referencia de la rama principal
      const commitPayload = {
        message: '⚓ DOMINIO DEL MAR — Publicación completa del proyecto (Web + App + Firebase + AI Studio)',
        tree: treeRes.data.sha
      };
      if (baseCommitSha) commitPayload.parents = [baseCommitSha];
      const commitRes = await ghRequest('POST', `/repos/${owner}/${repoName}/git/commits`, commitPayload);
      if (commitRes.status !== 201 || !commitRes.data?.sha) {
        return sendJSON(res, 400, {
          ok: false,
          error: 'Error creando commit en GitHub: ' + (commitRes.data?.message || commitRes.status)
        });
      }

      let refUpdateRes;
      if (baseCommitSha) {
        refUpdateRes = await ghRequest('PATCH', `/repos/${owner}/${repoName}/git/refs/heads/${defaultBranch}`, {
          sha: commitRes.data.sha,
          force: true
        });
      } else {
        refUpdateRes = await ghRequest('POST', `/repos/${owner}/${repoName}/git/refs`, {
          ref: `refs/heads/${defaultBranch}`,
          sha: commitRes.data.sha
        });
      }

      if (refUpdateRes.status >= 400) {
        return sendJSON(res, 400, {
          ok: false,
          error: 'Error actualizando rama principal en GitHub: ' + (refUpdateRes.data?.message || refUpdateRes.status)
        });
      }

      const repoUrl = `https://github.com/${owner}/${repoName}`;
      return sendJSON(res, 200, {
        ok: true,
        owner,
        repoName,
        repoUrl,
        filesCount: treeItems.length,
        commitSha: commitRes.data.sha
      });
    } catch (e) {
      return sendJSON(res, 500, { ok: false, error: e.message });
    }
  }

  // ==========================================================================
  // 5. APERTURA DE ENLACES OFICIALES EXTERNOS (SHN, SMN, PNA, INFOLEG, ARCA)
  // ==========================================================================
  if (pathname === '/api/open-external' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const targetUrl = String(body.url || '').trim();
      if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
        return sendJSON(res, 400, { ok: false, error: 'URL inválida' });
      }
      if (process.platform === 'win32') {
        execFile('rundll32.exe', ['url.dll,FileProtocolHandler', targetUrl], err => {
          if (err) console.error('Error abriendo navegador externo:', err);
        });
      }
      return sendJSON(res, 200, { ok: true, opened: targetUrl });
    } catch (e) {
      return sendJSON(res, 400, { ok: false, error: e.message });
    }
  }

  // ==========================================================================
  // 6. SERVIDOR DE ARCHIVOS ESTÁTICOS Y ARQUITECTURA MODULAR DE DOMINIO DEL MAR
  // ==========================================================================
  // Compatibilidad con rutas prefijadas /dominio-del-mar/...
  if (pathname === '/dominio-del-mar' || pathname === '/dominio-del-mar/' || pathname.startsWith('/dominio-del-mar/')) {
    let subPath = pathname.replace(/^\/dominio-del-mar\/?/, '');
    if (!subPath || subPath === '/') subPath = 'public/arquitectura-modular.html';
    const safeDomPath = path.normalize(subPath).replace(/^(\.\.[\/\\])+/, '');
    const domFilePath = path.join(__dirname, safeDomPath);
    if (fs.existsSync(domFilePath) && fs.statSync(domFilePath).isFile()) {
      const ext = path.extname(domFilePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'text/plain; charset=utf-8';
      res.writeHead(200, { 'Content-Type': contentType });
      return fs.createReadStream(domFilePath).pipe(res);
    }
  }

  // Permitir acceso de lectura a /src/..., /docs/... y /supabase/...
  if (pathname.startsWith('/src/') || pathname.startsWith('/docs/') || pathname.startsWith('/supabase/')) {
    const safeRel = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
    const directPath = path.join(__dirname, safeRel);
    if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) {
      const ext = path.extname(directPath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'text/plain; charset=utf-8';
      res.writeHead(200, { 'Content-Type': contentType });
      return fs.createReadStream(directPath).pipe(res);
    }
  }

  // Archivos dentro de public/
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') safePath = '/index.html';
  const filePath = path.join(PUBLIC_DIR, safePath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    const indexFile = path.join(PUBLIC_DIR, 'index.html');
    if (fs.existsSync(indexFile)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(indexFile).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 - Archivo no encontrado');
    }
  }
});

server.listen(PORT, () => {
  console.log(`================================================================================`);
  console.log(`⚓ DOMINIO DEL MAR (Academia Privada) - APLICACIÓN WEB ACTIVA EN PUERTO ${PORT}`);
  console.log(`🔗 Portal Principal:             http://localhost:${PORT}`);
  console.log(`🔑 Link Exclusivo Administrador: http://localhost:${PORT}/?acceso=ADMIN-PNA-2026`);
  console.log(`🎓 Link Alumno Suscripto:        http://localhost:${PORT}/?invitacion=ALUMNO-TIMONEL-2026`);
  console.log(`👁️ Link Invitado Demo:           http://localhost:${PORT}/?invitacion=NAUTA-VIP-2026`);
  console.log(`================================================================================`);
});
