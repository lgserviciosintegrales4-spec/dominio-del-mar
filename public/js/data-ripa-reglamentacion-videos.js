// ============================================================================
// VIDEOTECA COMPLETA ANIMADA (ESTILO 3D + TÁCTICO "CÓDIGO NÁUTICO")
// 1) RIPA COMPLETO (Reglas 1 a 38 + Anexos I, II, III y IV)
// 2) BALIZAMIENTO MARÍTIMO I.A.L.A. REGIÓN B (Boyas Laterales, Cardinales, etc.)
// 3) REGLAMENTACIÓN ARGENTINA: Ley de la Navegación 20.094, REGINAVE,
//    Ordenanzas Marítimas PNA (1/18, 17/72), Tratado del Río de la Plata y CONVEMAR
// ============================================================================

window.PNA_CATEGORY_EVALUATION_MATRIX = {
  conductor: {
    levelId: 'conductor',
    title: 'Conductor Náutico (Propulsión Motor hasta 7 m y 140 HP - Navegación Diurna)',
    summary: 'Exige dominio práctico e inmediato de lo indispensable para interpretar lo que se aviste y proceder con seguridad en horas diurnas en ríos interiores, lagos y Río de la Plata costero.',
    ripaScope: [
      'Parte A (Reglas 1 a 3): Responsabilidad (Regla 2) y definiciones de buque de propulsión mecánica y a vela (Regla 3).',
      'Parte B (Reglas 5 a 18): Vigilancia (R.5), Velocidad de seguridad (R.6), Riesgo de abordaje (R.7), Canales angostos (R.9), Vuelta encontrada a motor (R.14), Cruce a motor (R.15), Buque que alcanza (R.13) y Prelación general de categorías (R.18).',
      'Parte C (Reglas 20 a 23 y 30): Sectores y colores de luces básicas de navegación y fondeo; marcas diurnas de fondeo (esfera negra) y velero a motor (cono vértice abajo).',
      'Parte D (Reglas 34 y 37): Señales acústicas de maniobra a la vista (1, 2, 3 y 5 pitadas cortas; 1 larga en recodo) y señales visuales/pirotécnicas de auxilio (Anexo IV).'
    ],
    argentineLawScope: [
      'IALA Región B: Boyas laterales (Babor verde cilíndrica / Estribor roja cónica entrando), Bifurcación, Cardinales (N, S, E, W), Peligro Aislado, Aguas Seguras, Especiales y Nuevos Peligros.',
      'REGINAVE (Tít. 4 Cap. 2) y Ordenanza 1/18 PNA: Atribuciones del Conductor Náutico (máx. 7 m eslora, 140 HP, luz diurna), Certificado de Matrícula (REY/Jurisdiccional), elementos de seguridad obligatorios y prohibición de lucro.',
      'Ordenanza Marítima 17/72: Precauciones antes, durante y después de cargar combustible; ventilación de sentina.',
      'Régimen Contravencional, Civil y Penal básico; Despacho Electrónico (DEB), Migraciones y Aduana.'
    ]
  },
  timonel: {
    levelId: 'timonel',
    title: 'Timonel de Yate (Vela, Motor y Vela-Motor hasta 12 m - Navegación Diurna y Nocturna)',
    summary: 'Amplía la exigencia a la navegación nocturna, el gobierno a vela y motor, el cruce del Río de la Plata Interior (hasta línea Punta Atalaya - Punta Rosario) y la navegación con visibilidad reducida.',
    ripaScope: [
      'Todo lo de Conductor Náutico + Regla 12 completa (Derechos de paso entre veleros: distinta amura, misma amura barlovento/sotavento, y duda de amura).',
      'Regla 19 y Regla 35 completas: Conducta de los buques y señales acústicas en Visibilidad Reducida (niebla, lluvia intensa) tanto a motor con/sin arrancada como a vela, remolque, pesca y fondeo.',
      'Parte C ampliada (Reglas 24 a 30): Luces nocturnas y marcas diurnas de veleros (tricolor y Rojo sobre Verde), remolcadores, pesqueros (arrastre y no arrastre), sin gobierno, maniobra restringida, práctico, fondeado y varado.',
      'Reglas 16 y 17: Acción del buque que cede el paso y acción del buque que mantiene rumbo y velocidad.'
    ],
    argentineLawScope: [
      'IALA Región B Diurno y Nocturno: Identificación nocturna por ritmo de destellos de boyas cardinales (reloj Q/VQ), peligro aislado GpD(2), aguas seguras y faros costeros.',
      'REGINAVE (Tít. 3 y Tít. 4 Cap. 2) y Ordenanza 1/18: Navegación en canales de jurisdicción nacional, prioridad absoluta de buques de ultramar, atribuciones hasta 12 m de eslora y despacho a puertos extranjeros limítrofes (Uruguay).',
      'Tratado del Río de la Plata (Ley 20.645) y Espacios Marítimos (Ley 23.968): Límites del Río de la Plata, franjas costeras exclusivas de 2 MN y 7 MN, aguas de uso común, Mar Territorial (12 MN), Zona Contigua (24 MN) y ZEE (200 MN).',
      'Protocolo y Normas de Cortesía Naval: Uso del Pabellón Nacional, bandera de cortesía en aguas extranjeras (obenque de estribor), gallardete y normas de abarloamiento.'
    ]
  },
  patron: {
    levelId: 'patron',
    title: 'Patrón de Yate (Navegación Lacustre, Fluvial Completa y Marítima Costera a Vista de Costa)',
    summary: 'Exige el conocimiento detallado e integral de todas las reglas del RIPA y del REGINAVE para navegación marítima costera y Río de la Plata Exterior.',
    ripaScope: [
      'Dominio detallado de las 38 Reglas del RIPA: incluyendo Regla 10 (Dispositivos de Separación de Tráfico - DST/TSS), Regla 24 (Remolque >200 m y <200 m, empuje y abarloado), Regla 27 (Dragas y operaciones submarinas con bandas libre/obstruida), Regla 28 (Restringido por su calado), Regla 29 (Práctico) y Regla 30 (Fondeado >50 m y Varado).',
      'Anexos I, II, III y IV del RIPA: Alcances luminosos mínimos según eslora, señales acústicas y código de auxilio.'
    ],
    argentineLawScope: [
      'Caracterización completa de Faros y Balizas del SHN: Fases y períodos (Fija, Destellos, Grupos de Destellos, Ocultaciones, Isofase, Alternada) y lectura de Lista de Faros y Avisos a los Navegantes.',
      'REGINAVE disposiciones complementarias fluviales y marítimas: Velocidad en proximidad de muelles, artefactos de practicaje, prohibiciones en canales y zonas de alijo.',
      'Protocolo Internacional Marítimo: Libre plática (Bandera Q amarilla), sanidad marítima, rol de despacho marítimo e internacional y código Q de radiocomunicaciones (SECOSENA / SECONADE).'
    ]
  },
  piloto: {
    levelId: 'piloto',
    title: 'Piloto de Yate (Navegación de Altura, Oceánica y Astronómica sin límite de alejamiento)',
    summary: 'Máxima categoría deportiva PNA. Exige actualización total de RIPA/REGINAVE más Derecho de la Navegación (Ley 20.094) ante accidentes marítimos, Derecho Internacional del Mar (CONVEMAR) y Tratado del Río de la Plata y su Frente Marítimo completo.',
    ripaScope: [
      'Dominio experto de las 38 Reglas y los 4 Anexos del RIPA, con especial énfasis en Regla 7b/c y Regla 19d (empleo obligatorio del ploteo cinemático Radar para determinar CPA/TCPA y maniobra evasiva anticipada en visibilidad reducida sin caer a babor para un buque a proa del través).',
      'Anexo I a IV completos y vinculación con el Código Internacional de Señales (CIS) y SMSSM/GMDSS.'
    ],
    argentineLawScope: [
      'Ley de la Navegación N° 20.094: Régimen jurídico de los Accidentes de la Navegación: Abordaje (fortuito, culposo y concurrente), Asistencia y Salvamento (obligatoriedad de auxilio a vidas humanas, salario de salvamento de bienes), Avería Gruesa, Naufragio y Protesta de Mar / Sumario ante PNA.',
      'CONVEMAR y Ley 23.968: Régimen jurídico integral de Aguas Interiores, Mar Territorial (paso inocente), Zona Contigua, Zona Económica Exclusiva, Plataforma Continental y Alta Mar (libertades y jurisdicción del Estado de pabellón).',
      'Tratado del Río de la Plata y su Frente Marítimo (Ley 20.645): División del lecho y subsuelo (poligonal de 23 puntos), estatuto de la Isla Martín García, CARP, COFREMAR y Zona Común de Pesca (arcos de 200 MN desde Punta Rasa y Punta del Este).'
    ]
  }
};

window.RIPA_AND_ARG_VIDEOS = [
  // ==========================================================================
  // BLOQUE 1: RIPA - PARTE A: GENERALIDADES (REGLAS 1 A 3)
  // ==========================================================================
  {
    id: 'vid-ripa-r1-r3',
    code: 'RIPA Reglas 1, 2 y 3',
    title: 'Ámbito de Aplicación, Regla de Responsabilidad del Capitán y Definiciones de Buques',
    category: 'RIPA Parte A (Generalidades)',
    requiredForLevels: ['conductor', 'timonel', 'patron', 'piloto'],
    levelDepthNote: 'Conductor y Timonel: distinguir cuándo un velero pasa a ser buque a motor y la jerarquía de definiciones. Patrón y Piloto: eximente de la Regla 2b por peligro inmediato y aguas de aplicación.',
    animationConfig: {
      template: 'vessels_definitions',
      topTitle: 'RIPA REGLAS 1 A 3: DEFINICIONES Y RESPONSABILIDAD',
      trickBadge: 'EL TRUCO: Velero con motor en marcha = BUQUE A MOTOR (Cono punta abajo)',
      callouts: [
        { text: 'REGLA 2: NADA EXIME LA NEGLIGENCIA', x: 0.5, y: 0.16, color: '#f97316' },
        { text: 'CONO PUNTA ABAJO = VELA + MOTOR', x: 0.72, y: 0.48, color: '#facc15' },
        { text: 'EN NAVEGACIÓN = NI FONDEADO, NI AMARRADO, NI VARADO', x: 0.28, y: 0.76, color: '#38bdf8' }
      ]
    },
    scenes: [
      {
        subtitle: 'Regla 1 y 2: El RIPA se aplica en alta mar y todas las aguas navegables conectadas. Ninguna regla exime de mantener buena práctica marinera.',
        narration: 'Reglas uno y dos del RIPA. Este reglamento se aplica a todos los buques en alta mar y en todas las aguas que tengan comunicación con ella. La Regla dos es fundamental en los exámenes de Prefectura: ninguna disposición te exime de las consecuencias de cualquier negligencia, e incluso debés apartarte del reglamento cuando sea indispensable para evitar un peligro inmediato de colisión.'
      },
      {
        subtitle: 'Regla 3: "En navegación" significa que el barco NO está fondeado, ni amarrado a tierra, ni varado (aunque esté detenido en el agua sin arrancada).',
        narration: 'Atención al truco de la Regla tres: un buque está en navegación cuando no está fondeado, ni amarrado a tierra, ni varado. Es decir, si apagás el motor en medio del río pero no tiraste el ancla, seguís estando reglamentariamente en navegación, pero sin arrancada. Y si navegás en un velero con el motor encendido, aunque tengas las velas izadas, sos un buque de propulsión mecánica y de día debés exhibir un cono negro con la punta hacia abajo.'
      }
    ]
  },

  // ==========================================================================
  // BLOQUE 2: RIPA - PARTE B SECCIÓN I: TODA VISIBILIDAD (REGLAS 4 A 10)
  // ==========================================================================
  {
    id: 'vid-ripa-r4-r8',
    code: 'RIPA Reglas 4, 5, 6, 7 y 8',
    title: 'Vigilancia Permanente, Velocidad de Seguridad, Riesgo de Abordaje (Marcación Constante) y Maniobra Franca',
    category: 'RIPA Parte B (Rumbo y Gobierno)',
    requiredForLevels: ['conductor', 'timonel', 'patron', 'piloto'],
    levelDepthNote: 'Pregunta obligatoria en los 4 niveles: ¿Cómo se determina que existe riesgo de abordaje según la Regla 7? Por marcación constante y distancia decreciente.',
    animationConfig: {
      template: 'constant_bearing_r7',
      topTitle: 'REGLA 7 RIPA: RIESGO DE ABORDAJE POR MARCACIÓN CONSTANTE',
      trickBadge: 'EL TRUCO: Si el otro barco se acerca y SU ÁNGULO NO CAMBIA = ¡CHOQUE SEGURO!',
      callouts: [
        { text: 'MARCACIÓN CONSTANTE (45°)', x: 0.48, y: 0.42, color: '#ef4444' },
        { text: 'REGLA 8: MANIOBRA AMPLIA Y A TIEMPO', x: 0.72, y: 0.65, color: '#22c55e' }
      ]
    },
    scenes: [
      {
        subtitle: 'Reglas 5 y 6: Todo buque mantendrá eficaz vigilancia visual y auditiva en todo momento y navegará a una Velocidad de Seguridad.',
        narration: 'Las Reglas cuatro a diez se aplican en cualquier condición de visibilidad. La Regla cinco exige mantener siempre vigilancia visual y auditiva permanente. La Regla seis obliga a navegar a una velocidad de seguridad que te permita detener la embarcación o maniobrar a tiempo según la visibilidad, la densidad del tráfico y la proximidad de peligros.'
      },
      {
        subtitle: 'Regla 7 (El Truco de la Marcación Constante): Si otro barco se acerca y su marcación en tu compás no varía apreciablemente, ¡hay riesgo de abordaje!',
        narration: 'Mirá en la animación cómo funciona la Regla siete: si otro barco se acerca y el ángulo o marcación con que lo ves desde tu barco permanece constante mientras la distancia se achica, ambos van a llegar exactamente al mismo punto al mismo tiempo: existe riesgo de abordaje. Según la Regla ocho, tu maniobra para evitarlo debe ser amplia, franca, hecha con buen tiempo y nunca mediante pequeños cambios sucesivos de rumbo.'
      }
    ]
  },
  {
    id: 'vid-ripa-r9-r10',
    code: 'RIPA Reglas 9 y 10',
    title: 'Navegación en Canales Angostos (Regla 9) y Dispositivos de Separación de Tráfico (Regla 10)',
    category: 'RIPA Parte B (Rumbo y Gobierno)',
    requiredForLevels: ['conductor', 'timonel', 'patron', 'piloto'],
    levelDepthNote: 'Conductor y Timonel: Regla 9 (mantenerse a estribor del canal, cruce a 90° y prioridad de buques mercantes). Patrón y Piloto: suman Regla 10 (DST / TSS internacionales).',
    animationConfig: {
      template: 'narrow_channel_r9',
      topTitle: 'REGLA 9 Y 10: CANALES ANGOSTOS Y SEPARACIÓN DE TRÁFICO',
      trickBadge: 'REGLA DE ORO: Navegá pegado al borde de ESTRIBOR y cruzá el canal a 90°',
      callouts: [
        { text: 'BORDE EXTERIOR DE ESTRIBOR', x: 0.74, y: 0.55, color: '#22c55e' },
        { text: 'NO ESTORBAR A BUQUES <20m O VELEROS', x: 0.35, y: 0.35, color: '#f97316' },
        { text: 'CRUCE PERPENDICULAR (90°)', x: 0.50, y: 0.75, color: '#38bdf8' }
      ]
    },
    scenes: [
      {
        subtitle: 'Regla 9: En un canal angosto o paso, toda embarcación debe mantenerse lo más cerca posible del límite exterior del canal que quede por su ESTRIBOR.',
        narration: 'Regla nueve: Canales angostos. Cuando navegues por un canal o río estrecho, mantenete siempre lo más cerca que sea seguro del borde exterior que quede por tu banda de estribor. Las embarcaciones menores de veinte metros y los veleros tienen prohibido estorbar el tránsito de un buque que solo pueda navegar con seguridad dentro del canal.'
      },
      {
        subtitle: 'Prohibido fondear en un canal angosto. Al llegar a un recodo sin visión se toca 1 pitada larga. En la Regla 10 (DST), si se cruza una vía de tráfico se hace a 90°.',
        narration: 'Además, está prohibido fondear dentro de un canal angosto. Si necesitás cruzar un canal comercial o una vía de un dispositivo de separación de tráfico de la Regla diez, debés hacerlo siguiendo un rumbo perpendicular de noventa grados respecto a la dirección general del tráfico para permanecer el menor tiempo posible dentro del cauce.'
      }
    ]
  },

  // ==========================================================================
  // BLOQUE 3: RIPA - PARTE B SECCIÓN II: A LA VISTA UNO DEL OTRO (REGLAS 11 A 18)
  // ==========================================================================
  {
    id: 'vid-ripa-r12',
    code: 'RIPA Regla 12',
    title: 'Derechos de Paso entre Dos Embarcaciones a Vela (Distinta Amura, Misma Amura y Duda)',
    category: 'RIPA Parte B (Rumbo y Gobierno)',
    requiredForLevels: ['timonel', 'patron', 'piloto'],
    levelDepthNote: 'Fundamental para Timonel, Patrón y Piloto de Yate (y noción básica en Conductor). Se evalúa en el examen teórico y en la maniobra práctica a bordo.',
    animationConfig: {
      template: 'sailing_r12',
      topTitle: 'REGLA 12 RIPA: DERECHO DE PASO ENTRE VELEROS',
      trickBadge: 'EL TRUCO: Viento por BABOR (Rojo) = CEDE EL PASO | Misma amura: BARLOVENTO CEDE',
      callouts: [
        { text: 'AMURAS A ESTRIBOR (TIENE PASO)', x: 0.70, y: 0.42, color: '#22c55e' },
        { text: 'AMURAS A BABOR (CEDE EL PASO)', x: 0.28, y: 0.42, color: '#ef4444' },
        { text: 'MISMA AMURA: CEDE BARLOVENTO', x: 0.50, y: 0.80, color: '#facc15' }
      ]
    },
    scenes: [
      {
        subtitle: 'Caso 1 (Distinta Amura): El velero que recibe el viento por la banda de BABOR debe mantenerse apartado del que recibe el viento por ESTRIBOR.',
        narration: 'Regla doce del RIPA: Derecho de paso entre dos veleros. Recordá que la amura por la que navegás es la banda por donde entra el viento, es decir, la banda contraria a donde está la botavara de la vela mayor. Primer caso: si reciben el viento por bandas contrarias, el que recibe el viento por babor debe ceder el paso al que va con amuras a estribor.'
      },
      {
        subtitle: 'Caso 2 (Misma Amura): El velero que está a BARLOVENTO debe cederle el paso al que está a SOTAVENTO.',
        narration: 'Segundo caso: si ambos veleros reciben el viento por la misma banda, el buque que se encuentra a barlovento, es decir, más cerca de donde viene el viento, debe mantenerse apartado del que se encuentra a sotavento. Y tercer caso: si vas con amuras a babor y ves un velero a barlovento sin poder distinguir con certeza por qué amura viene, debés cederle el paso.'
      }
    ]
  },
  {
    id: 'vid-ripa-r13-r17',
    code: 'RIPA Reglas 13, 14, 15, 16 y 17',
    title: 'Buque que Alcanza, Situación de Vuelta Encontrada, Situación de Cruce y Obligaciones al Maniobrar',
    category: 'RIPA Parte B (Rumbo y Gobierno)',
    requiredForLevels: ['conductor', 'timonel', 'patron', 'piloto'],
    levelDepthNote: 'Obligatorio en los 4 niveles. Incluye el ángulo exacto de alcance (más de 22,5° a popa del través = sector de 135° de la luz de alcance).',
    animationConfig: {
      template: 'motor_encounters_r13_15',
      topTitle: 'REGLAS 13, 14 Y 15: ALCANCE, VUELTA ENCONTRADA Y CRUCE',
      trickBadge: 'DE FRENTE: Ambos caen a ESTRIBOR | CRUCE: Si lo ves por tu ESTRIBOR (Rojo), CEDÉS VOS',
      callouts: [
        { text: 'R.14 VUELTA ENCONTRADA: AMBOS A ESTRIBOR', x: 0.25, y: 0.35, color: '#22c55e' },
        { text: 'R.15 CRUCE: CEDE QUIEN VE POR SU ESTRIBOR', x: 0.72, y: 0.35, color: '#f97316' },
        { text: 'R.13 BUQUE QUE ALCANZA (SECTOR 135° POPA): CEDE SIEMPRE', x: 0.50, y: 0.78, color: '#facc15' }
      ]
    },
    scenes: [
      {
        subtitle: 'Regla 13 (Buque que alcanza): Todo buque que alcance a otro viniendo en el sector de los 135° de popa (luz de alcance) debe ceder el paso siempre.',
        narration: 'Regla trece: Buque que alcanza. Todo barco que alcance a otro viniendo desde una dirección de más de veintidós coma cinco grados a popa de su través, donde de noche solo vería la luz blanca de alcance de popa, debe mantenerse apartado del buque alcanzado. Esta regla tiene prioridad sobre las demás: incluso un velero que alcanza a una lancha a motor debe cederle el paso.'
      },
      {
        subtitle: 'Regla 14 (Vuelta encontrada): Dos buques a motor de frente caen AMBOS a ESTRIBOR. Regla 15 (Cruce): Cede el paso el que tiene al otro por su propio ESTRIBOR.',
        narration: 'Regla catorce: cuando dos buques a motor se encuentran de frente o casi de frente, ambos deben caer a estribor para pasar babor con babor. Regla quince: cuando dos buques a motor se cruzan, el que tenga al otro por su propio costado de estribor debe cederle el paso y evitar cortarle la proa. Por las Reglas dieciséis y diecisiete, el que cede maniobra con anticipación y el que tiene paso mantiene su rumbo y velocidad.'
      }
    ]
  },
  {
    id: 'vid-ripa-r18-r19',
    code: 'RIPA Reglas 18 y 19',
    title: 'Pirámide de Prioridades entre Categorías de Buques (Regla 18) y Conducta en Visibilidad Reducida (Regla 19)',
    category: 'RIPA Parte B (Rumbo y Gobierno)',
    requiredForLevels: ['conductor', 'timonel', 'patron', 'piloto'],
    levelDepthNote: 'Conductor: orden de prelación Regla 18. Timonel, Patrón y Piloto: agregan Regla 19 completa (maniobra por radar en niebla sin caer a babor para un buque a proa del través).',
    animationConfig: {
      template: 'hierarchy_r18',
      topTitle: 'REGLA 18 Y 19: PIRÁMIDE DE PRIORIDADES Y VISIBILIDAD REDUCIDA',
      trickBadge: 'ORDEN DE PASO: 1° Sin Gobierno -> 2° Maniobra Restr. -> 3° Calado -> 4° Pesca -> 5° Vela -> 6° Motor',
      callouts: [
        { text: '1° SIN GOBIERNO / 2° MANIOBRA RESTRINGIDA', x: 0.50, y: 0.25, color: '#ef4444' },
        { text: '3° RESTRINGIDO POR CALADO / 4° PESCA', x: 0.50, y: 0.48, color: '#f97316' },
        { text: '5° VELA / 6° PROPULSIÓN MECÁNICA', x: 0.50, y: 0.72, color: '#22c55e' }
      ]
    },
    scenes: [
      {
        subtitle: 'Regla 18: Un buque de propulsión mecánica cede el paso a: Sin gobierno, Capacidad de maniobra restringida, Restringido por su calado, Pesca y Vela.',
        narration: 'La Regla dieciocho establece la pirámide de prioridades entre categorías de buques. En la cima están el buque sin gobierno y el buque con capacidad de maniobra restringida, como una draga. Le siguen el buque restringido por su calado, luego los buques dedicados a la pesca con redes o aparejos, luego los veleros y por último los buques a motor.'
      },
      {
        subtitle: 'Regla 19 (Visibilidad Reducida): En niebla no rigen las reglas de vista. Navegar a velocidad de seguridad y, al oír una señal a proa del través, reducir al mínimo.',
        narration: 'Según la Regla diecinueve, en niebla o visibilidad reducida ningún barco tiene prioridad automática sobre otro. Si detectás por radar otro buque con riesgo de choque, evitá caer a babor para un buque situado a proa de tu través. Y si escuchás la señal de niebla de otro buque aparentemente a proa de tu través, debés reducir tu velocidad al mínimo de gobierno o detener la arrancada.'
      }
    ]
  },

  // ==========================================================================
  // BLOQUE 4: RIPA - PARTE C: LUCES Y MARCAS DIURNAS (REGLAS 20 A 31)
  // ==========================================================================
  {
    id: 'vid-ripa-r20-r23',
    code: 'RIPA Reglas 20, 21, 22 y 23',
    title: 'Ángulos de Luces (Tope 225°, Bandas 112,5°, Alcance 135°), Alcances y Buques de Propulsión Mecánica',
    category: 'RIPA Parte C (Luces y Marcas)',
    requiredForLevels: ['conductor', 'timonel', 'patron', 'piloto'],
    levelDepthNote: 'Todos los niveles deben conocer los ángulos exactos (225°, 112,5°, 135° y 360°) y cuándo un buque lleva 1 o 2 luces de tope (<50 m vs. >=50 m de eslora).',
    animationConfig: {
      template: 'lights_sectors_3d',
      topTitle: 'REGLAS 20 A 23: SECTORES LUMINOSOS Y BUQUES A MOTOR',
      trickBadge: 'ÁNGULOS EXACTOS: Tope 225° + Alcance 135° = 360° | Cada Banda = 112,5° | ≥50m lleva 2 luces de tope',
      callouts: [
        { text: 'LUZ DE TOPE BLANCA (225°)', x: 0.50, y: 0.22, color: '#ffffff' },
        { text: 'ESTRIBOR VERDE (112,5°)', x: 0.78, y: 0.52, color: '#22c55e' },
        { text: 'BABOR ROJA (112,5°)', x: 0.22, y: 0.52, color: '#ef4444' },
        { text: 'ALCANCE POPA BLANCA (135°)', x: 0.50, y: 0.82, color: '#93c5fd' }
      ]
    },
    scenes: [
      {
        subtitle: 'Reglas 20 y 21: Las luces se exhiben desde la puesta hasta la salida del sol y en visibilidad reducida. Las marcas diurnas son siempre de color NEGRO.',
        narration: 'Parte C del RIPA: Luces y Marcas. Las luces se encienden desde la puesta hasta la salida del sol y también de día si hay visibilidad reducida. Las marcas diurnas son formas geométricas de color negro. Mirá los ángulos exactos de la Regla veintiuno: la luz de tope blanca cubre doscientos veinticinco grados hacia proa; cada luz de banda, verde a estribor y roja a babor, cubre ciento doce coma cinco grados; y la luz de alcance blanca en popa cubre ciento treinta y cinco grados.'
      },
      {
        subtitle: 'Regla 23: Un buque a motor menor de 50 m lleva 1 luz de tope blanca; si mide 50 m o más, lleva una 2° luz de tope más alta a popa de la primera.',
        narration: 'Por la Regla veintitrés, todo buque de propulsión mecánica en navegación exhibe luz de tope, luces de costado y luz de alcance. Si mide cincuenta metros o más de eslora, agrega una segunda luz de tope blanca más atrás y más alta. Y en embarcaciones deportivas menores de doce metros, la luz de tope y la de alcance pueden unificarse en una luz blanca todo horizonte más las luces de bandas.'
      }
    ]
  },
  {
    id: 'vid-ripa-r24-r26',
    code: 'RIPA Reglas 24, 25 y 26',
    title: 'Luces y Marcas de Remolque (Regla 24), Veleros y Botes a Remo (Regla 25) y Buques Pesqueros (Regla 26)',
    category: 'RIPA Parte C (Luces y Marcas)',
    requiredForLevels: ['timonel', 'patron', 'piloto'],
    levelDepthNote: 'Esencial para Timonel, Patrón y Piloto en navegación nocturna por el Río de la Plata y litoral marítimo.',
    animationConfig: {
      template: 'tow_sail_fish_3d',
      topTitle: 'REGLAS 24, 25 Y 26: REMOLQUE, VELEROS Y PESQUEROS (3D + MARCAS)',
      trickBadge: 'EL TRUCO: Roja sobre Verde = Velero | Verde sobre Blanca = Pesca Arrastre | Roja sobre Blanca = Otra Pesca',
      callouts: [
        { text: 'REMOLQUE ≤200m: 2 TOPES BLANCOS (>200m: 3 TOPES + ROMBO)', x: 0.22, y: 0.28, color: '#facc15' },
        { text: 'VELERO: ROJA SOBRE VERDE EN TOPE', x: 0.50, y: 0.50, color: '#ef4444' },
        { text: 'PESCA ARRASTRE: VERDE SOBRE BLANCA (2 CONOS UNIDOS)', x: 0.78, y: 0.38, color: '#22c55e' }
      ]
    },
    scenes: [
      {
        subtitle: 'Regla 24 (Remolque): Remolcador exhibe 2 luces de tope blancas verticales (o 3 luces blancas verticales si el remolque supera los 200 m) más luz AMARILLA de remolque en popa.',
        narration: 'Regla veinticuatro: Buque remolcando. De noche, el remolcador exhibe en proa dos luces blancas de tope en línea vertical si la longitud del remolque no supera los doscientos metros, o tres luces blancas verticales si el remolque mide más de doscientos metros. Además, en popa lleva una luz amarilla de remolque encima de su luz blanca de alcance, y de día exhibe un rombo negro cuando el remolque supera los doscientos metros.'
      },
      {
        subtitle: 'Regla 25 (Veleros) y Regla 26 (Pesqueros): Velero = bandas + alcance (opcional Roja sobre Verde). Pesca de arrastre = Verde sobre Blanca; Otra pesca = Roja sobre Blanca.',
        narration: 'Regla veinticinco: un velero nunca lleva luz de tope blanca; lleva luces de bandas y alcance, y opcionalmente en el tope del palo dos luces todo horizonte: roja arriba y verde abajo. Regla veintiséis: los buques pesqueros exhiben de día dos conos negros unidos por sus puntas; de noche, el pesquero de arrastre lleva luz verde sobre blanca, y el que no es de arrastre lleva luz roja sobre blanca.'
      }
    ]
  },
  {
    id: 'vid-ripa-r27-r31',
    code: 'RIPA Reglas 27, 28, 29, 30 y 31',
    title: 'Sin Gobierno, Maniobra Restringida (Draga), Restringido por su Calado, Práctico, Fondeado y Varado',
    category: 'RIPA Parte C (Luces y Marcas)',
    requiredForLevels: ['conductor', 'timonel', 'patron', 'piloto'],
    levelDepthNote: 'Reconocimiento visual 3D de las torres de luces verticales y marcas negras diurnas exigidas en todos los exámenes de PNA.',
    animationConfig: {
      template: 'special_lights_towers_3d',
      topTitle: 'REGLAS 27 A 30: TORRES DE LUCES VERTICALES Y MARCAS DIURNAS',
      trickBadge: '2 Rojas = Sin Gobierno | Roja-Blanca-Roja = Maniobra Restr. | 3 Rojas = Calado | Blanca-Roja = Práctico',
      callouts: [
        { text: 'SIN GOBIERNO: 2 ROJAS (DÍA: 2 ESFERAS)', x: 0.18, y: 0.26, color: '#ef4444' },
        { text: 'DRAGA: R-B-R + 2 VERDES (PASO LIBRE)', x: 0.48, y: 0.26, color: '#22c55e' },
        { text: 'CALADO: 3 ROJAS (CILINDRO) | VARADO: 2 ROJAS + FONDEO (3 ESFERAS)', x: 0.80, y: 0.26, color: '#f97316' }
      ]
    },
    scenes: [
      {
        subtitle: 'Regla 27: Buque Sin Gobierno = 2 luces rojas verticales (2 esferas). Capacidad de Maniobra Restringida = Roja - Blanca - Roja (Esfera - Rombo - Esfera).',
        narration: 'Mirá en vista tres D las combinaciones de las Reglas veintisiete a treinta. Un buque sin gobierno exhibe dos luces rojas todo horizonte verticales y de día dos esferas negras. Un buque con capacidad de maniobra restringida exhibe tres luces verticales: roja, blanca y roja, y de día esfera, rombo y esfera. Si es una draga trabajando, marca la banda obstruida con dos luces rojas o dos esferas, y la banda libre para pasar con dos luces verdes o dos rombos.'
      },
      {
        subtitle: 'Regla 28 (Calado) = 3 rojas (cilindro). Regla 29 (Práctico) = Blanca sobre Roja. Regla 30 (Fondeado = 1 blanca / 1 esfera; Varado = fondeo + 2 rojas / 3 esferas).',
        narration: 'Por la Regla veintiocho, el buque restringido por su calado lleva tres luces rojas verticales y de día un cilindro negro. Por la Regla veintinueve, la lancha de práctico lleva luz blanca sobre roja: gorra blanca, nariz roja. Y por la Regla treinta, el buque fondeado lleva una luz blanca todo horizonte o una esfera negra en proa; mientras que si está varado agrega dos luces rojas verticales, o tres esferas negras de día.'
      }
    ]
  },

  // ==========================================================================
  // BLOQUE 5: RIPA - PARTE D, E Y ANEXOS (REGLAS 32 A 38 Y ANEXOS I A IV)
  // ==========================================================================
  {
    id: 'vid-ripa-r32-r38-anexos',
    code: 'RIPA Reglas 32 a 38 y Anexos I a IV',
    title: 'Señales Acústicas de Maniobra y Niebla, Señales de Peligro (Anexo IV) y Especificaciones Técnicas',
    category: 'RIPA Parte D/E y Anexos',
    requiredForLevels: ['conductor', 'timonel', 'patron', 'piloto'],
    levelDepthNote: 'Pitadas de maniobra (R.34) y señales de auxilio (R.37/Anexo IV) van en todos los niveles; señales de niebla (R.35) y Anexos I-III se profundizan en Timonel, Patrón y Piloto.',
    animationConfig: {
      template: 'sound_distress_signals',
      topTitle: 'REGLAS 32 A 37 Y ANEXO IV: SEÑALES ACÚSTICAS Y DE AUXILIO',
      trickBadge: 'PITADAS MANIOBRA: 1=Estribor | 2=Babor | 3=Atrás | 5=Duda || NIEBLA (c/2m): 1 Larga=Motor | 1L+2C=Vela/Restr.',
      callouts: [
        { text: 'R.34 A LA VISTA: 1 CORTA (1s) = ESTRIBOR | 2 = BABOR | 3 = ATRÁS', x: 0.30, y: 0.30, color: '#38bdf8' },
        { text: 'R.35 NIEBLA: 1 LARGA (4-6s) = MOTOR | 2 LARGAS = PARADO', x: 0.72, y: 0.30, color: '#facc15' },
        { text: 'ANEXO IV AUXILIO: BENGALA ROJA, HUMO NARANJA, BRAZOS, MAYDAY, NC', x: 0.50, y: 0.78, color: '#ef4444' }
      ]
    },
    scenes: [
      {
        subtitle: 'Reglas 32 a 34: Pitada corta dura ~1 segundo; pitada larga dura de 4 a 6 segundos. A la vista: 1 corta = Estribor, 2 = Babor, 3 = Máquinas atrás, 5 = Duda.',
        narration: 'En la Parte D del RIPA, una pitada corta dura un segundo y una pitada larga dura de cuatro a seis segundos. Cuando dos buques están a la vista uno del otro, la Regla treinta y cuatro indica: una pitada corta, caigo a estribor; dos cortas, caigo a babor; tres cortas, mis máquinas van atrás; cinco o más cortas y rápidas, señal de duda; y una larga al llegar a un recodo de canal.'
      },
      {
        subtitle: 'Regla 35 (Niebla, máx. cada 2 min): Motor con arrancada = 1 larga; sin arrancada = 2 largas; Velero/Pesca/Sin gobierno/Remolque = 1 larga y 2 cortas. Anexo IV: Señales de Auxilio.',
        narration: 'Con niebla o visibilidad reducida, la Regla treinta y cinco exige tocar cada dos minutos: un buque a motor con arrancada, una pitada larga; detenido sin arrancada, dos largas; y los veleros, pesqueros, remolcadores o sin gobierno, una larga seguida de dos cortas. El Anexo cuatro detalla las señales oficiales de auxilio: bengalas rojas, humo naranja, mover los brazos extendidos arriba y abajo, banderas Noviembre Charlie y MAYDAY por radio.'
      }
    ]
  },

  // ==========================================================================
  // BLOQUE 6: BALIZAMIENTO I.A.L.A. REGIÓN B (ESTILO REEL "CÓDIGO NÁUTICO")
  // ==========================================================================
  {
    id: 'vid-iala-cardinales-3d',
    code: 'IALA Región B - Boyas Cardinales',
    title: 'Las 4 Boyas Cardinales (Norte, Sur, Este y Oeste): Truco de los Conos, Colores y Reloj Nocturno',
    category: 'Balizamiento IALA Región B',
    requiredForLevels: ['conductor', 'timonel', 'patron', 'piloto'],
    levelDepthNote: 'Inspirado directamente en la animación táctica y 3D de Código Náutico: muestra el peligro central, las 4 boyas cardinales en vista aérea y el primer plano 3D de los conos y bandas negras/amarillas.',
    animationConfig: {
      template: 'codigo_nautico_cardinales_3d',
      topTitle: 'BOYAS CARDINALES IALA: TE DICEN POR QUÉ LADO PASAR',
      trickBadge: 'UN TRUCO: Las puntas de los 2 conos negros apuntan SIEMPRE a donde va la franja NEGRA en la boya',
      callouts: [
        { text: 'CARDINAL NORTE: PUNTAS ARRIBA (PASA POR EL NORTE)', x: 0.50, y: 0.15, color: '#f97316' },
        { text: 'CARDINAL SUR: PUNTAS ABAJO (PASA POR EL SUR)', x: 0.50, y: 0.82, color: '#f97316' },
        { text: 'ESTE (BASE CON BASE = 3 DEST.) | OESTE (PUNTA CON PUNTA = 9 DEST.)', x: 0.75, y: 0.48, color: '#facc15' }
      ]
    },
    scenes: [
      {
        subtitle: '¿Sabías que los dos conos de una Boya Cardinal te dicen por dónde pasar? Marcan un PELIGRO y llevan el nombre del lado donde está el agua segura.',
        narration: 'Mirá la vista táctica aérea y el modelo tres D de las boyas cardinales. Una señal cardinal se coloca alrededor de un peligro, como una roca o bajo fondo, y su nombre te indica en qué cuadrante está el agua segura. A una Cardinal Norte le pasás por el Norte; a una Cardinal Sur le pasás por el Sur; a la Este por el Este y a la Oeste por el Oeste.'
      },
      {
        subtitle: 'Cardinal Norte = 2 conos puntas arriba (negro arriba). Cardinal Sur = 2 conos puntas abajo (negro abajo). Este = base con base. Oeste = punta contra punta.',
        narration: 'Acá está el truco infalible para recordar sus conos y colores: las puntas de los dos conos negros apuntan siempre hacia donde va pintada la franja negra en el cuerpo de la boya. Norte tiene las dos puntas hacia arriba y el negro arriba. Sur tiene las dos puntas hacia abajo y el negro abajo. Este tiene las puntas hacia afuera y negro arriba y abajo. Oeste tiene punta contra punta en el centro y la franja negra en el medio. Y de noche, sus destellos blancos siguen las horas del reloj: tres para el Este, seis más uno largo para el Sur, nueve para el Oeste y continuo para el Norte.'
      }
    ]
  },
  {
    id: 'vid-iala-laterales-especiales-3d',
    code: 'IALA Región B - Laterales y Otras',
    title: 'Boyas Laterales (Babor/Estribor), Canal Preferido, Peligro Aislado, Aguas Seguras, Especiales y Wreck',
    category: 'Balizamiento IALA Región B',
    requiredForLevels: ['conductor', 'timonel', 'patron', 'piloto'],
    levelDepthNote: 'Obligatorio en los 4 niveles. Incluye la boya de Emergencia por Nuevo Peligro / Naufragio (azul y amarilla vertical).',
    animationConfig: {
      template: 'iala_all_marks_3d',
      topTitle: 'SISTEMA IALA REGIÓN B COMPLETO (ARGENTINA / SHN)',
      trickBadge: 'ENTRANDO DE MAR A RÍO: Verde Cilíndrica a Babor | Roja Cónica a Estribor | 2 Esferas = Peligro Aislado',
      callouts: [
        { text: 'ENTRANDO: VERDE A BABOR / ROJA A ESTRIBOR', x: 0.26, y: 0.30, color: '#22c55e' },
        { text: 'PELIGRO AISLADO: NEGRA Y ROJA (2 ESFERAS - 2 DESTELLOS)', x: 0.52, y: 0.45, color: '#ef4444' },
        { text: 'AGUAS SEGURAS (1 ESFERA ROJA) | NUEVO PELIGRO (AZUL/AMARILLA)', x: 0.78, y: 0.65, color: '#38bdf8' }
      ]
    },
    scenes: [
      {
        subtitle: 'En IALA Región B (Argentina), entrando desde el mar o río exterior hacia puerto: Boyas Verdes Cilíndricas se dejan a BABOR y Rojas Cónicas a ESTRIBOR.',
        narration: 'En la Región B del sistema IALA, vigente en la República Argentina, cuando entramos desde el mar o aguas abiertas hacia un puerto o remontamos un río, dejamos las boyas verdes cilíndricas por babor y las boyas rojas cónicas por estribor. Si el canal se bifurca, una boya lateral con una franja horizontal del otro color en el medio te indica de qué lado está el canal principal.'
      },
      {
        subtitle: 'Peligro Aislado (2 esferas negras, negra/roja horizontal), Aguas Seguras (1 esfera roja, franjas verticales), Especial (Amarilla X) y Nuevo Peligro (Azul/Amarilla).',
        narration: 'Completamos el sistema IALA con cuatro señales clave en tres D: Peligro Aislado es negra con franja horizontal roja, dos esferas negras de tope y dos destellos blancos. Aguas Seguras tiene franjas verticales rojas y blancas y una esfera roja. Las Marcas Especiales son amarillas con una cruz en equis. Y la boya de Nuevos Peligros tiene franjas verticales azules y amarillas con una cruz vertical amarilla.'
      }
    ]
  },

  // ==========================================================================
  // BLOQUE 7: REGLAMENTACIÓN ARGENTINA (REGINAVE, ORDENANZAS PNA, LEY 20.094, TRATADOS)
  // ==========================================================================
  {
    id: 'vid-arg-reginave-om118',
    code: 'REGINAVE y Ordenanza PNA 1/18',
    title: 'Régimen de Actividades Náutico Deportivas: Categorías, Atribuciones, Matrícula REY y Elementos de Seguridad',
    category: 'REGINAVE y Ordenanzas PNA',
    requiredForLevels: ['conductor', 'timonel', 'patron', 'piloto'],
    levelDepthNote: 'Evalúa las atribuciones exactas de cada certificado (Grumete, Conductor, Timonel, Patrón y Piloto), el registro REY/Jurisdiccional y la tabla de seguridad de la Ordenanza 1/18.',
    animationConfig: {
      template: 'arg_reginave_categories',
      topTitle: 'REGINAVE (TÍT. 4 CAP. 2) Y ORDENANZA MARÍTIMA 1/18 PNA',
      trickBadge: 'CONDUCTOR: ≤7m y ≤140HP (Día) | TIMONEL: ≤12m (Día/Noche) | PATRÓN: Costero | PILOTO: Oceánico sin límite',
      callouts: [
        { text: 'CONDUCTOR: HASTA 7m Y 140 HP (SOLO DIURNO)', x: 0.25, y: 0.28, color: '#38bdf8' },
        { text: 'TIMONEL: HASTA 12m (RÍO DE LA PLATA HASTA ATALAYA-ROSARIO)', x: 0.72, y: 0.28, color: '#22c55e' },
        { text: 'PATRÓN (MARÍTIMO COSTERO) Y PILOTO (ALTURA SIN LÍMITE)', x: 0.50, y: 0.76, color: '#facc15' }
      ]
    },
    scenes: [
      {
        subtitle: 'El REGINAVE (Título 4, Capítulo 2) y la Ordenanza 1/18 de PNA regulan las embarcaciones deportivas (sin fines de lucro), su matrícula y las habilitaciones.',
        narration: 'En la reglamentación nacional argentina, el REGINAVE en su Título cuatro, Capítulo dos, y la Ordenanza uno barra dieciocho de Prefectura Naval Argentina establecen qué exige cada categoría. El Conductor Náutico gobierna lanchas a motor de hasta siete metros de eslora y ciento cuarenta caballos de fuerza solo de día. El Timonel de Yate gobierna embarcaciones a vela o motor de hasta doce metros, de día y de noche, hasta la línea Punta Atalaya, Punta Rosario.'
      },
      {
        subtitle: 'El Patrón de Yate habilita para navegación lacustre, fluvial completa y marítima costera a vista de costa; y el Piloto de Yate para navegación oceánica sin límite.',
        narration: 'Subiendo de categoría, el Patrón de Yate habilita para todo el Río de la Plata exterior y navegación marítima costera a vista de costa. Finalmente, el Piloto de Yate es la máxima categoría deportiva y habilita para navegación oceánica de altura en cualquier mar del mundo sin límite de alejamiento. Recordá que todo carnet náutico vence a los cinco años y está prohibido el uso comercial.'
      }
    ]
  },
  {
    id: 'vid-arg-om1772-contaminacion',
    code: 'Ordenanza 17/72 y REGINAVE Tít. 8',
    title: 'Seguridad en Circuitos de Combustible (OM 17/72) y Prevención de la Contaminación Acuática',
    category: 'REGINAVE y Ordenanzas PNA',
    requiredForLevels: ['conductor', 'timonel', 'patron', 'piloto'],
    levelDepthNote: 'Pregunta fija en Seguridad y Legislación de los 4 niveles sobre carga de combustible, venteos arrestallamas y prohibición de descargas contaminantes.',
    animationConfig: {
      template: 'safety_vhf',
      topTitle: 'ORDENANZA MARÍTIMA 17/72 (COMBUSTIBLES) Y MEDIO AMBIENTE',
      trickBadge: 'VAPOR DE NAFTA = MÁS PESADO QUE EL AIRE (Va a la sentina -> Ventilar 4 a 5 min con blower)',
      callouts: [
        { text: 'BOCA DE CARGA EN CUBIERTA EXTERIOR', x: 0.25, y: 0.30, color: '#22c55e' },
        { text: 'VENTEO AL EXTERIOR CON MALLA ARRESTALLAMAS', x: 0.75, y: 0.30, color: '#f97316' },
        { text: 'PROHIBIDO ARROJAR PLÁSTICOS E HIDROCARBUROS AL AGUA', x: 0.50, y: 0.80, color: '#ef4444' }
      ]
    },
    scenes: [
      {
        subtitle: 'Ordenanza Marítima 17/72: Boca de carga en cubierta exterior, venteo con malla arrestallamas, bandeja colectora en carburador y extractor de gases de sentina.',
        narration: 'La Ordenanza Marítima diecisiete barra setenta y dos de Prefectura regula los circuitos de combustible a bordo. Los tanques fijos deben tener su boca de carga en cubierta exterior para que ningún derrame caiga al interior, y su tubo de venteo al exterior con tela metálica arrestallamas. Antes de arrancar un motor naftero interno, es obligatorio accionar el extractor de gases de sentina durante cuatro a cinco minutos.'
      },
      {
        subtitle: 'Prevención de la Contaminación (REGINAVE Título 8 y MARPOL): Prohibición absoluta de arrojar plásticos, hidrocarburos o achicar sentinas con aceite al agua.',
        narration: 'Asimismo, el REGINAVE y el convenio MARPOL prohíben estrictamente arrojar plásticos, envases sintéticos, restos de pintura, baterías o aguas de sentina contaminadas con hidrocarburos o aceites en ríos, lagos y espacios marítimos. Si hay un derrame de combustible en la sentina, se debe cortar la corriente y absorberlo con paños para retirarlo a tierra.'
      }
    ]
  },
  {
    id: 'vid-arg-tratado-rdlp-convemar',
    code: 'Ley 20.645 y Ley 23.968 (CONVEMAR)',
    title: 'Jurisdicción Fluvio-Marítima: Tratado del Río de la Plata (Franjas de 2 y 7 MN) y Espacios Marítimos',
    category: 'Ley de la Navegación y Tratados',
    requiredForLevels: ['timonel', 'patron', 'piloto'],
    levelDepthNote: 'Timonel y Patrón: límites del Río de la Plata, franjas de 2 y 7 MN, Mar Territorial (12 MN), Zona Contigua (24 MN) y ZEE (200 MN). Piloto: agrega lecho/subsuelo (23 puntos) y Zona Común de Pesca (arcos de 200 MN).',
    animationConfig: {
      template: 'rdlp_treaty_map',
      topTitle: 'TRATADO DEL RÍO DE LA PLATA (LEY 20.645) Y ESPACIOS MARÍTIMOS',
      trickBadge: 'RÍO DE LA PLATA: Punta Gorda a Punta Rasa-Punta del Este | Franjas exclusivas: 2 MN (interno) y 7 MN (exterior)',
      callouts: [
        { text: 'FRANJA EXCLUSIVA 2 MN (HASTA COLONIA - PUNTA LARA)', x: 0.25, y: 0.30, color: '#38bdf8' },
        { text: 'FRANJA EXCLUSIVA 7 MN (HASTA PUNTA RASA - PUNTA DEL ESTE)', x: 0.72, y: 0.45, color: '#facc15' },
        { text: 'MAR TERRITORIAL 12 MN | ZONA CONTIGUA 24 MN | ZEE 200 MN', x: 0.50, y: 0.82, color: '#22c55e' }
      ]
    },
    scenes: [
      {
        subtitle: 'Tratado del Río de la Plata (Ley 20.645): Va desde el paralelo de Punta Gorda hasta la línea Punta Rasa (Cabo San Antonio) - Punta del Este.',
        narration: 'El Tratado del Río de la Plata y su Frente Marítimo establece que el río se extiende desde el paralelo de Punta Gorda hasta la línea imaginaria que une Punta Rasa del Cabo San Antonio en Argentina con Punta del Este en Uruguay. Cada país posee una franja costera de jurisdicción exclusiva de dos millas náuticas hasta la línea Colonia, Punta Lara, y de siete millas náuticas desde allí hasta el límite exterior. El resto es agua de uso común.'
      },
      {
        subtitle: 'En el Frente Marítimo rige la Zona Común de Pesca (2 arcos de 200 MN). En el mar (Ley 23.968): Mar Territorial 12 MN, Zona Contigua 24 MN y ZEE 200 MN.',
        narration: 'Para los exámenes de Patrón y Piloto de Yate, recordá además que el lecho y subsuelo del río se dividen por una línea poligonal de veintitrés puntos, y en el frente marítimo exterior existe una Zona Común de Pesca formada por dos arcos de doscientas millas trazados desde Punta Rasa y Punta del Este. En el litoral oceánico, Argentina ejerce soberanía en el Mar Territorial de doce millas, control fiscal y aduanero en la Zona Contigua de veinticuatro millas, y soberanía económica en la Zona Económica Exclusiva de doscientas millas.'
      }
    ]
  },
  {
    id: 'vid-arg-ley-20094-accidentes',
    code: 'Ley de la Navegación N° 20.094',
    title: 'Derecho de la Navegación: Abordaje, Asistencia y Salvamento, Avería Gruesa y Responsabilidades (Civil, Penal y Contravencional)',
    category: 'Ley de la Navegación y Tratados',
    requiredForLevels: ['conductor', 'timonel', 'patron', 'piloto'],
    levelDepthNote: 'Conductor, Timonel y Patrón: los 3 órdenes de responsabilidad (Contravencional, Civil y Penal) y obligación de auxilio. Piloto de Yate: figuras completas de Abordaje (fortuito, culposo, concurrente), Asistencia y Salvamento y Protesta de Mar ante PNA.',
    animationConfig: {
      template: 'maritime_law_20094',
      topTitle: 'LEY DE LA NAVEGACIÓN N° 20.094: ACCIDENTES Y RESPONSABILIDADES',
      trickBadge: 'AUXILIO A PERSONAS = OBLIGATORIO Y GRATUITO | 3 RESPONSABILIDADES: Contravencional (PNA), Civil y Penal',
      callouts: [
        { text: 'AUXILIO A VIDAS HUMANAS: DEBER LEGAL INELUDIBLE', x: 0.50, y: 0.22, color: '#22c55e' },
        { text: 'ABORDAJE: PROHIBIDO FUGARSE -> EXPOSICIÓN ANTE PNA', x: 0.28, y: 0.55, color: '#f97316' },
        { text: 'RESP. CONTRAVENCIONAL (MULTA/SUSPENSIÓN), CIVIL Y PENAL (ART. 190 CP)', x: 0.72, y: 0.78, color: '#ef4444' }
      ]
    },
    scenes: [
      {
        subtitle: 'Todo navegante al mando responde en 3 esferas: Contravencional (ante PNA por infracciones al REGINAVE), Civil (indemnización de daños) y Penal (delitos/lesiones).',
        narration: 'La Ley de la Navegación número veinte mil noventa y cuatro, el Código Civil y Comercial y el Código Penal determinan que quien gobierna una embarcación deportiva asume tres responsabilidades: responsabilidad contravencional ante Prefectura Naval Argentina, sancionada con multa, suspensión o cancelación del carnet; responsabilidad civil patrimonial por daños a terceros; y responsabilidad penal ante la justicia federal en caso de lesiones, homicidio culposo o abandono de persona.'
      },
      {
        subtitle: 'Ley 20.094 (Accidentes de la Navegación): En un abordaje es obligatorio asistir al otro buque, dar los datos y presentar exposición/protesta ante PNA.',
        narration: 'En el nivel de Piloto de Yate se evalúa en detalle el régimen de accidentes de la Ley veinte mil noventa y cuatro: el auxilio para salvar vidas humanas en peligro en el agua es siempre obligatorio y gratuito. En cambio, el salvamento de bienes o embarcaciones con resultado útil puede generar derecho a salario de asistencia y salvamento. Y si ocurre un abordaje, sea fortuito, culposo o de culpa concurrente, ambos capitanes deben asistirse y radicar la exposición sumarial ante Prefectura al arribar a puerto.'
      }
    ]
  }
];
