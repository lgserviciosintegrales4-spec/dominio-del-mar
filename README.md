# ⚓ DOMINIO DEL MAR — Plataforma Privada e Independiente de Preparación Náutica Deportiva

> **Aviso de Independencia Institucional:** Esta aplicación móvil y sitio web son un emprendimiento educativo estrictamente privado y particular. **No pertenecen, no dependen ni tienen vinculación oficial alguna con la Prefectura Naval Argentina (PNA).** Su única finalidad es brindar material bibliográfico, audiovisual y práctico de estudio para que cada alumno se prepare de forma particular para rendir los exámenes de las distintas categorías náutico-deportivas.

---

## 🚀 Características Principales

1. **Página de Presentación Fotorrealista (Sin Exponer Material de Estudio):**
   - Muestra las 6 bondades exclusivas del servicio y el catálogo fotográfico en alta definición de las 4 categorías náutico-deportivas:
     - **Conductor Náutico**
     - **Timonel de Yate (Vela / Motor / Vela-Motor)**
     - **Patrón de Yate**
     - **Piloto de Yate (Navegación Oceánica y Astronómica)**
2. **Campus Privado del Suscriptor (Aislado por Categoría):**
   - Al suscribirse e ingresar al curso, el alumno accede a un Campus exclusivo que muestra **únicamente el material de estudio competente a la categoría abonada**:
     - Unidades completas con doble estrategia pedagógica (*Nivel Inicial Paso a Paso* y *Nivel Técnico Avanzado*).
     - Videos explicativos 3D y vectoriales con **Voz IA en Español**.
     - Láminas técnicas de ingeniería naval estilo *Código Náutico* (`#F4F1E8`, `#162942`, `#2C73B4`, `#E26D24`).
     - **Simulador Práctico Interactivo de Maniobras RIPA (Regla 15, 14, 12 y 13)** y calculadoras de navegación.
     - **Tutor Naval Google AI Studio 24/7** integrado dentro del curso.
     - Bibliografía normativa, leyes, reglamentos y anexos técnicos.
     - Examen de práctica con corrección automática, muestra de errores y simulacro de examen final, con vigencia activa hasta la fecha probable de examen declarada por el alumno.
3. **Ecosistema Conectado en Tiempo Real (`acquired-modem-d6gf7`):**
   - Sincronización Web ↔ App Móvil mediante **Firebase SDK v10 (Firestore & Realtime DB)** + **SSE Real-Time Stream**, **Google AI Studio**, **Pomelli** y **Google Stitch**.
   - Listo para Web, PC/Notebook y Google Play Store (PWA + Capacitor + TWA Android).

---

## 🛠️ Instalación y Ejecución Local

```bash
# 1. Copiar variables de entorno
cp .env.example .env

# 2. Iniciar el servidor en el puerto 3080
npm start
```

- **Presentación Comercial:** `http://localhost:3080/`
- **Campus Alumno Suscripto (Demo Timonel):** `http://localhost:3080/?invitacion=ALUMNO-TIMONEL-2026`
- **Panel Dueño / Administrador:** `http://localhost:3080/?acceso=ADMIN-PNA-2026`
