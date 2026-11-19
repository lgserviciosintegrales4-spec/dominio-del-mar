-- ============================================================================
-- DOMINIO DEL MAR (COEV - PNA) — ESQUEMA DE BASE DE DATOS Y PERMISOS (SUPABASE / POSTGRESQL)
-- Incluye Row Level Security (RLS) estricto:
--   1. Los alumnos (role = 'student' / 'authorized_guest') SOLO tienen lectura (SELECT)
--      sobre contenidos publicados (review_status = 'PUBLICADO') y escritura sobre su
--      propio progreso (student_progress) e intentos de examen (exam_attempts).
--   2. ÚNICAMENTE el Administrador Autorizado (role = 'admin') puede crear, editar,
--      aprobar o eliminar módulos, unidades, preguntas de examen, precios e invitaciones.
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Tabla de Perfiles de Usuario y Roles (vinculada a auth.users en Supabase)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  dni TEXT DEFAULT '',
  role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'authorized_guest', 'admin')),
  invite_code TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Configuración General de la Plataforma (Precios, Modo Privado/Público, Medios de Pago)
CREATE TABLE IF NOT EXISTS public.platform_config (
  id INT PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  app_name TEXT NOT NULL DEFAULT 'DOMINIO DEL MAR — Academia Náutica Deportiva Argentina (COEV - PNA)',
  access_mode TEXT NOT NULL DEFAULT 'PRIVADO' CHECK (access_mode IN ('PRIVADO', 'PUBLICO')),
  currency TEXT NOT NULL DEFAULT 'ARS',
  prices JSONB NOT NULL DEFAULT '{}'::jsonb,
  payment_methods JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_by TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Códigos y Links de Invitación
CREATE TABLE IF NOT EXISTS public.invitations (
  code TEXT PRIMARY KEY,
  label TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'authorized_guest' CHECK (role IN ('student', 'authorized_guest', 'admin')),
  allowed_levels TEXT[] NOT NULL DEFAULT '{}',
  coev_date DATE,
  coev_jurisdiction TEXT DEFAULT 'Prefectura San Isidro / Olivos (COEV PNA)',
  student_name TEXT,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Los 8 Módulos Curriculares PNA (module-01 a module-08)
CREATE TABLE IF NOT EXISTS public.modules (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  pna_categories TEXT[] NOT NULL DEFAULT '{}',
  template TEXT NOT NULL,
  svg_url TEXT NOT NULL,
  normative_sources TEXT[] NOT NULL DEFAULT '{}',
  summary TEXT NOT NULL,
  key_concepts JSONB NOT NULL DEFAULT '[]'::jsonb,
  review_status TEXT NOT NULL DEFAULT 'PUBLICADO' CHECK (review_status IN ('PUBLICADO', 'EN_REVISION')),
  updated_by TEXT DEFAULT 'admin',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Unidades Académicas por Curso (Conductor, Timonel, Patrón, Piloto)
CREATE TABLE IF NOT EXISTS public.course_units (
  id TEXT PRIMARY KEY,
  course_id TEXT NOT NULL CHECK (course_id IN ('conductor', 'timonel', 'patron', 'piloto')),
  subject_id TEXT NOT NULL,
  subject_title TEXT NOT NULL,
  unit_number TEXT NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  beginner_content TEXT NOT NULL,
  advanced_content TEXT NOT NULL,
  key_takeaways JSONB NOT NULL DEFAULT '[]'::jsonb,
  video_scene_id TEXT,
  video_title TEXT,
  is_demo_open BOOLEAN NOT NULL DEFAULT FALSE,
  review_status TEXT NOT NULL DEFAULT 'PUBLICADO' CHECK (review_status IN ('PUBLICADO', 'EN_REVISION')),
  updated_by TEXT DEFAULT 'admin',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. Banco Oficial de Preguntas de Examen COEV PNA
CREATE TABLE IF NOT EXISTS public.exam_questions (
  id TEXT PRIMARY KEY,
  course_id TEXT NOT NULL CHECK (course_id IN ('conductor', 'timonel', 'patron', 'piloto')),
  unit_ref TEXT NOT NULL,
  question TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_index INT NOT NULL,
  explanation TEXT NOT NULL,
  norm_reference TEXT DEFAULT 'Programa Oficial COEV PNA',
  review_status TEXT NOT NULL DEFAULT 'PUBLICADO' CHECK (review_status IN ('PUBLICADO', 'EN_REVISION')),
  updated_by TEXT DEFAULT 'admin',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 7. Suscripciones de Alumnos y Vencimiento por Fecha de Examen COEV PNA
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  student_name TEXT NOT NULL,
  email TEXT NOT NULL,
  dni TEXT NOT NULL,
  level_id TEXT NOT NULL CHECK (level_id IN ('conductor', 'timonel', 'patron', 'piloto')),
  propulsion_modality TEXT NOT NULL DEFAULT 'Vela y Motor',
  amount_paid NUMERIC(12,2) NOT NULL DEFAULT 0,
  coev_exam_date DATE NOT NULL,
  coev_jurisdiction TEXT NOT NULL,
  exam_rendered BOOLEAN NOT NULL DEFAULT FALSE,
  status TEXT NOT NULL DEFAULT 'ACTIVA' CHECK (status IN ('ACTIVA', 'FINALIZADA_EXAMEN_RENDIDO', 'VENCIDA_FECHA_COEV', 'SUSPENDIDA')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 8. Progreso Académico y Apuntes Personales del Alumno (Área de Alumnos)
CREATE TABLE IF NOT EXISTS public.student_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  course_id TEXT NOT NULL CHECK (course_id IN ('conductor', 'timonel', 'patron', 'piloto')),
  completed_units JSONB NOT NULL DEFAULT '[]'::jsonb,
  completed_modules JSONB NOT NULL DEFAULT '[]'::jsonb,
  personal_notes JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_email, course_id)
);

-- 9. Historial de Exámenes de Prueba y Simulacros Finales COEV Rendidos
CREATE TABLE IF NOT EXISTS public.exam_attempts (
  id TEXT PRIMARY KEY,
  user_email TEXT NOT NULL,
  student_name TEXT NOT NULL,
  course_id TEXT NOT NULL CHECK (course_id IN ('conductor', 'timonel', 'patron', 'piloto')),
  exam_type TEXT NOT NULL CHECK (exam_type IN ('practice', 'final_coev')),
  score_pct INT NOT NULL,
  correct_count INT NOT NULL,
  total_questions INT NOT NULL,
  passed BOOLEAN NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 10. Auditoría de Seguridad y Modificaciones Administrativas
CREATE TABLE IF NOT EXISTS public.audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_email TEXT NOT NULL,
  actor_role TEXT NOT NULL,
  action TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id TEXT,
  details JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================================
-- POLÍTICAS DE SEGURIDAD ROW LEVEL SECURITY (RLS)
-- ============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.platform_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invitations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_units ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exam_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exam_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Función auxiliar para verificar si el usuario autenticado es Administrador
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER;

-- Lectura de contenidos académicos: Alumnos ven únicamente material PUBLICADO; Admin ve todo
CREATE POLICY "Lectura de modulos publicados" ON public.modules
  FOR SELECT USING (review_status = 'PUBLICADO' OR public.is_admin());

CREATE POLICY "Solo Admin modifica modulos" ON public.modules
  FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Lectura de unidades publicadas" ON public.course_units
  FOR SELECT USING (review_status = 'PUBLICADO' OR public.is_admin());

CREATE POLICY "Solo Admin modifica unidades" ON public.course_units
  FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Lectura de preguntas publicadas" ON public.exam_questions
  FOR SELECT USING (review_status = 'PUBLICADO' OR public.is_admin());

CREATE POLICY "Solo Admin modifica preguntas" ON public.exam_questions
  FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

-- Configuración e Invitaciones: Solo Admin escribe
CREATE POLICY "Lectura publica de configuracion" ON public.platform_config
  FOR SELECT USING (true);

CREATE POLICY "Solo Admin modifica configuracion" ON public.platform_config
  FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Solo Admin gestiona invitaciones" ON public.invitations
  FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());
