// ============================================================================
// MOTOR GRÁFICO INTERACTIVO DE VIDEOS EXPLICATIVOS IA
// ESTILO EDITORIAL TÉCNICO "CÓDIGO NÁUTICO" (PLANO ARQUITECTÓNICO NAVAL,
// PERGAMINO NÁUTICO #EFECE2, TINTA AZUL MARINO #162A42, OLAS #2C73B4,
// RESALTADOS ÁMBAR-NARANJA #E06D2B Y PUNTEROS TÉCNICOS CON NODO CIRCULAR)
// ============================================================================

window.NAUTICAL_VIDEO_SCENES = {
  // --- NIVEL 1: CONDUCTOR NÁUTICO ---
  nomenclatura_barco: {
    title: 'Cómo se Llama cada Cosa en Cubierta, las 8 Zonas del Barco, Dimensiones y Nudos',
    duration: '04:15',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_boat_parts_3d',
      topTitle: 'CÓMO SE LLAMA CADA COSA EN CUBIERTA Y CÓMO SE NOMBRA CADA ZONA',
      trickBadge: 'PÚLPITO (Proa) y BALCÓN (Popa) | GUARDAMANCEBOS = Cables entre CANDELEROS | IMBORNALES = Desagües de BAÑERA'
    },
    scenes: [
      {
        subtitle: '⚠️ Los nombres de cubierta no son postureo: sirven para pedir las cosas rápido cuando hay lío. Púlpito (proa), Balcón (popa), Candeleros, Guardamancebos, Bañera e Imbornales.',
        narration: 'Los nombres de cubierta no son postureo: sirven para pedir las cosas rápido cuando hay una emergencia a bordo. El Púlpito es la barandilla rígida de proa, y el Balcón es la de popa: la misma pieza cambia de nombre según en qué punta esté. Los Candeleros son los postes verticales clavados en cubierta que sostienen los Guardamancebos, que son los cables perimetrales entre vos y el agua. La Bañera es el hueco donde va la tripulación, y los Imbornales son sus desagües.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Cómo se nombra cada zona (360°): Proa (adelante), Popa (atrás), Amura de Babor y Estribor (45°), Través de Babor y Estribor (90°) y Aleta de Babor y Estribor (135°).',
        narration: 'Veamos ahora cómo se nombra cada zona del barco y del horizonte que lo rodea mirando desde popa hacia proa: adelante está la Proa y atrás la Popa. A la izquierda tenemos Babor, identificado con color rojo, y a la derecha Estribor, con color verde. Los sectores delanteros a cuarenta y cinco grados son la Amura de Babor y la Amura de Estribor; al medio a noventa grados están el Través de Babor y el Través de Estribor; y hacia atrás a ciento treinta y cinco grados están la Aleta de Babor y la Aleta de Estribor.',
        highlight: 'step_1'
      },
      {
        subtitle: 'Dimensiones reglamentarias PNA: Eslora (largo), Manga (ancho), Puntal (altura = Calado + Francobordo) y Nudos Marineros (As de Guía, Ballestrinque, Llano y Ocho).',
        narration: 'Las cuatro dimensiones fundamentales que exige Prefectura Naval Argentina son la Eslora o largo total, la Manga o ancho máximo, el Puntal que es la altura total igual al Calado más el Francobordo, y el Calado que es la profundidad sumergida. En el examen práctico ejecutarás el As de Guía, que forma una gaza fija que no se corre, el Ballestrinque, el nudo Llano y el Ocho de tope.',
        highlight: 'step_2'
      }
    ]
  },

  seguridad_combustibles_vhf: {
    title: 'Control de Averías, Lucha contra Incendios, Carga de Combustible (OM 17/72) y VHF Canal 16',
    duration: '04:10',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'safety_vhf',
      topTitle: 'SEGURIDAD EN CUBIERTA Y SENTINA: COMBUSTIBLES (OM 17/72), INCENDIOS Y VHF',
      trickBadge: 'VAPORES DE NAFTA = Más pesados que el aire (van al fondo de sentina -> Extractor Blower 4 a 5 min)'
    },
    scenes: [
      {
        subtitle: 'Ordenanza Marítima 17/72: Los vapores de nafta son más pesados que el aire y bajan al fondo de la sentina. Ventilar 4 a 5 minutos con el extractor antes de arrancar.',
        narration: 'Atención a una de las preguntas más importantes de Prefectura: los vapores de nafta son más pesados que el aire y se acumulan en el fondo de la sentina. La boca de carga debe estar en cubierta exterior y el venteo debe tener malla arrestallamas. Después de cargar combustible, accioná el extractor de gases de sentina durante cuatro a cinco minutos antes de dar arranque.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Lucha contra incendios: Matafuego Triclase ABC y maniobra de poner POPA AL VIENTO (Viento Aparente Cero).',
        narration: 'A bordo utilizamos matafuegos de Polvo Químico Seco Triclase A B C, aptos para sólidos, líquidos inflamables y equipos eléctricos. Si se declara un incendio navegando, poné inmediatamente la embarcación popa al viento para anular el viento aparente y alejar el humo y las llamas.',
        highlight: 'step_1'
      },
      {
        subtitle: 'Radiocomunicaciones VHF: Canal 16 (156,8 MHz) para MAYDAY (Socorro), PAN-PAN (Urgencia) y SECURITÉ (Seguridad).',
        narration: 'El Canal dieciséis de V H F, en ciento cincuenta y seis coma ocho megahertz, es el canal internacional de socorro y llamada. Usá MAYDAY tres veces cuando peligra la vida humana; PAN-PAN para una urgencia médica o mecánica; y SECURITÉ para avisos meteorológicos o de seguridad.',
        highlight: 'step_2'
      }
    ]
  },

  maniobra_motor_mob: {
    title: 'Gobierno a Motor, Efecto Evolutivo de la Hélice, Atraque y Maniobra de Hombre al Agua (MOB)',
    duration: '03:50',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_mob_propeller_3d',
      topTitle: 'MANIOBRA DE HOMBRE AL AGUA (MOB) Y EFECTO EVOLUTIVO DE LA HÉLICE',
      trickBadge: 'HOMBRE AL AGUA: 1° Timón a la MISMA banda de caída (aleja la hélice) -> 2° Acercarse PROA AL VIENTO'
    },
    scenes: [
      {
        subtitle: 'Paso 1 ante Hombre al Agua: Gritar "¡Hombre al agua!", desacelerar y girar el timón HACIA LA MISMA BANDA por donde cayó.',
        narration: 'Si un tripulante cae al agua por estribor, tu primera reacción inmediata debe ser girar el timón hacia estribor, es decir, hacia la misma banda por donde cayó. De esa manera alejás inmediatamente la popa y la hélice en movimiento del cuerpo del náufrago.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Paso 2 y 3: Arrojar salvavidas circular, describir curva de Anderson y aproximarse SIEMPRE PROA AL VIENTO con motor en punto muerto/apagado.',
        narration: 'En simultáneo, arrojale el salvavidas circular y designá a un vigía que lo señale con el brazo extendido. Describí una curva amplia para acercarte enfrentando el viento o la corriente dominante a mínima velocidad, y a una eslora del náufrago poné punto muerto y apagá el motor.',
        highlight: 'step_1'
      },
      {
        subtitle: 'Efecto evolutivo (Presión Lateral de las Palas): En hélice dextrógira dando marcha atrás, la POPA cae a BABOR.',
        narration: 'En una embarcación con una sola hélice dextrógira, que gira a la derecha en marcha adelante, al dar marcha atrás la presión lateral de las palas empuja la popa hacia babor. Por eso el atraque más favorable con hélice dextrógira es dejando el muelle por babor.',
        highlight: 'step_2'
      }
    ]
  },

  ripa_luces_paso: {
    title: 'Luces de Navegación Nocturna (Sectores 225°, 112,5°, 135°), Marcas Diurnas y Derechos de Paso (RIPA)',
    duration: '04:20',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'lights_sectors_3d',
      topTitle: 'SECTORES LUMINOSOS RIPA (225° / 112,5° / 135°) Y DERECHOS DE PASO',
      trickBadge: 'ÁNGULOS RIPA: Tope Blanca 225° | Bandas 112,5° c/u | Alcance Popa 135° | Cruce: cede quien ve por su ESTRIBOR'
    },
    scenes: [
      {
        subtitle: 'Sectores luminosos del RIPA: Luz de Tope Blanca (225°), Estribor Verde (112,5°), Babor Roja (112,5°) y Alcance Blanca (135°).',
        narration: 'De noche, las luces revelan el rumbo y tipo de embarcación. La luz de tope blanca ilumina doscientos veinticinco grados hacia proa. La banda de estribor es verde y la de babor es roja, con ciento doce coma cinco grados cada una. Hacia popa brilla la luz blanca de alcance cubriendo los ciento treinta y cinco grados restantes.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Vuelta Encontrada (ambos caen a Estribor) y Cruce (cede el paso quien ve al otro por su propio Estribor / ve su luz roja).',
        narration: 'Cuando dos lanchas vienen de frente en vuelta encontrada, ambas deben caer a estribor. Si se cruzan, debe ceder el paso la embarcación que ve a la otra por su propia banda de estribor, es decir, la que de noche ve la luz roja del otro barco.',
        highlight: 'step_1'
      }
    ]
  },

  iala_balizamiento: {
    title: 'Sistema de Balizamiento Marítimo I.A.L.A. Región B (Boyas Laterales, Cardinales, Peligro Aislado y Aguas Seguras)',
    duration: '04:30',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'codigo_nautico_cardinales_3d',
      topTitle: 'SISTEMA IALA REGIÓN B: BOYAS CARDINALES Y LATERALES',
      trickBadge: 'UN TRUCO: Las puntas de los 2 conos negros apuntan SIEMPRE a donde va la franja NEGRA en la boya'
    },
    scenes: [
      {
        subtitle: 'IALA Región B: Entrando desde el mar o aguas abiertas hacia el puerto -> VERDE a Babor (cilíndrica) y ROJO a Estribor (cónica).',
        narration: 'Argentina integra la Región B del sistema internacional IALA. Al entrar a un canal desde el mar o aguas abiertas, debemos dejar las boyas verdes cilíndricas por nuestra banda de babor, y las boyas rojas cónicas por nuestra banda de estribor.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Boyas Cardinales (Norte, Este, Sur, Oeste): Sus 2 conos negros y sus destellos tipo reloj te indican por qué cuadrante pasar.',
        narration: 'Las cuatro boyas cardinales marcan un peligro y llevan el nombre del lado donde está el agua segura. Las puntas de los dos conos negros apuntan siempre hacia donde está pintada la franja negra en la boya. De noche sus destellos blancos funcionan como un reloj: tres al Este, seis más uno largo al Sur, nueve al Oeste y continuo al Norte.',
        highlight: 'step_1'
      }
    ]
  },

  regimen_nautico_pna: {
    title: 'Régimen de las Actividades Náutico Deportivas (REGINAVE Tít. 4 Cap. 2, Matrícula REY, OM 1/18 y Despacho DEB)',
    duration: '04:05',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'arg_reginave_categories',
      topTitle: 'REGINAVE Y ORDENANZA 1/18 PNA: HABILITACIONES, MATRÍCULA Y SEGURIDAD',
      trickBadge: 'CONDUCTOR: ≤7m y ≤140HP (Diurno) | TIMONEL: ≤12m (Día/Noche) | PATRÓN: Costero | PILOTO: Oceánico'
    },
    scenes: [
      {
        subtitle: 'Certificado de Matrícula (REY / Jurisdiccional), Autorización de Manejo a terceros y límites de cada carnet deportivo PNA.',
        narration: 'Toda embarcación deportiva debe contar con su Certificado de Matrícula otorgado por Prefectura Naval Argentina. El Conductor Náutico puede gobernar lanchas a motor de hasta siete metros de eslora y ciento cuarenta caballos de fuerza únicamente en horario diurno. El Timonel extiende hasta doce metros de día y de noche.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Elementos obligatorios de seguridad (Ordenanza 1/18), Despacho Electrónico (DEB), Migraciones y Aduana.',
        narration: 'Antes de zarpar debés verificar que los chalecos salvavidas aprobados por Prefectura alcancen para el cien por ciento de los tripulantes, que la pirotecnia y el matafuego estén vigentes, y si viajás al exterior como la República Oriental del Uruguay, realizar el despacho ante Prefectura, Migraciones y Aduana.',
        highlight: 'step_1'
      }
    ]
  },

  // --- NIVEL 2: TIMONEL DE YATE ---
  cartas_coordenadas_compas: {
    title: 'Esfera Terrestre, Coordenadas Geográficas (Latitud y Longitud), Millas Náuticas y Cartas Mercator SHN',
    duration: '04:15',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_charts_coords_3d',
      topTitle: 'COORDENADAS GEOGRÁFICAS, ESCALA DE LATITUDES Y CARTAS NÁUTICAS SHN',
      trickBadge: 'REGLA DE ORO: 1 Minuto de LATITUD (1\') = 1 Milla Náutica (1.852 m) -> Medir distancias SOLO en escala vertical'
    },
    scenes: [
      {
        subtitle: 'Paralelos y Latitud (0° a 90° N/S desde el Ecuador) vs. Meridianos y Longitud (0° a 180° E/W desde Greenwich).',
        narration: 'En navegación ubicamos cualquier punto del planeta mediante dos coordenadas: la Latitud se mide desde el Ecuador hacia el Norte o el Sur de cero a noventa grados. La Longitud se mide desde el Meridiano de Greenwich hacia el Este o el Oeste de cero a ciento ochenta grados.',
        highlight: 'step_0'
      },
      {
        subtitle: 'La Milla Náutica (1.852 metros) equivale a 1 minuto de arco de meridiano. En la carta Mercator se mide SIEMPRE en el margen vertical (Latitud).',
        narration: 'Una Milla Náutica mide exactamente mil ochocientos cincuenta y dos metros y equivale a un minuto de arco de Latitud. Como en la proyección Mercator los meridianos se dibujan paralelos y la escala se estira con la latitud, las distancias con el compás de puntas secas se miden siempre en las escalas laterales verticales de Latitud, nunca en la de Longitud.',
        highlight: 'step_1'
      }
    ]
  },

  cuatro_problemas_rumbos_mareas: {
    title: 'Los 4 Problemas de la Navegación: Conversión de Rumbos (Rv, Rm, Rc, Dm, d, Vt), Mareas y Sonda',
    duration: '04:10',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_compass_tides_3d',
      topTitle: 'LOS 4 PROBLEMAS DE LA NAVEGACIÓN: RUMBOS (Rv, Rm, Rc) Y MAREAS SHN',
      trickBadge: 'DE COMPÁS A CARTA SE SUMA (Rv = Rc + Vt) | DE CARTA A COMPÁS SE RESTA (Rc = Rv - Vt) | W(-) E(+)'
    },
    scenes: [
      {
        subtitle: 'Variación Total (Vt = Dm + d): Declinación Magnética actualizada de la carta + Desvío propio de la embarcación.',
        narration: 'Para convertir rumbos primero calculamos la Variación Total sumando algebraicamente la Declinación Magnética de la carta náutica actualizada al año actual y el Desvío del compás para ese rumbo. Recordá siempre que Este es signo positivo y Oeste es signo negativo.',
        highlight: 'step_0'
      },
      {
        subtitle: 'De Compás a Carta: Rv = Rc + Vt. De Carta a Compás: Rc = Rv - Vt. Profundidad Real = Sondaje Carta (PRS) + Altura de Marea.',
        narration: 'Para pasar del compás a la carta sumamos la Variación Total: Rumbo Verdadero es igual a Rumbo Compás más Variación Total. Para pasar de la carta al compás restamos: Rumbo Compás es igual a Rumbo Verdadero menos Variación Total. Y para hallar la profundidad real, sumamos el sondaje impreso en la carta más la altura de marea del Servicio de Hidrografía Naval.',
        highlight: 'step_1'
      }
    ]
  },

  derrota_rio_de_la_plata: {
    title: 'Instrumental Náutico, Trazado de Derrota, Posición por Marcaciones Simultáneas, Enfilación y Río de la Plata',
    duration: '04:20',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_plotting_fix_3d',
      topTitle: 'POSICIÓN OBSERVADA: MARCACIONES SIMULTÁNEAS, ENFILACIÓN Y RÍO DE LA PLATA',
      trickBadge: 'POSICIÓN MÁS EXACTA: Una Enfilación (no tiene error de compás) + Dos o tres Marcaciones simultáneas a 60°/90°'
    },
    scenes: [
      {
        subtitle: 'Enfilación (línea de posición perfecta sin error instrumental) y cruce de 2 o 3 Marcaciones Simultáneas convertidas a Verdaderas.',
        narration: 'Para situar el barco en la carta náutica, la línea de posición más precisa es una enfilación, que se obtiene cuando dos objetos fijos de la carta se ven alineados uno detrás del otro sin depender de ningún error del compás. También obtenemos un punto observado tomando marcaciones simultáneas a dos o tres faros con pínula, convirtiéndolas a verdaderas y trazando sus opuestas desde cada faro.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Hidrografía del Río de la Plata: Bancos (Playa Honda, Ortiz, Cuirassier, Inglés), Canales de acceso y régimen de marea meteorológica.',
        narration: 'En el Río de la Plata el régimen de alturas depende principalmente del viento: la Sudestada apila el agua sobre la costa argentina provocando grandes crecidas, mientras que el viento Norte o Pampero provoca bajantes pronunciadas sobre el Banco Playa Honda y los canales costeros.',
        highlight: 'step_1'
      }
    ]
  },

  velero_arboladura_motor: {
    title: 'El Velero: Jarcia Fija y de Labor, Velas, Física Aero-Hidrodinámica (CV y CRL) y Propulsión Mecánica',
    duration: '04:15',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_sailboat_rig_3d',
      topTitle: 'ARBOLADURA DEL VELERO, JARCIAS Y EQUILIBRIO VÉLICO (CV vs. CRL)',
      trickBadge: 'SI CV ESTÁ A POPA DEL CRL = VELERO ARDIENTE (tiende a ORZAR solo hacia el viento por seguridad)'
    },
    scenes: [
      {
        subtitle: 'Jarcia Fija (Obenques a las bandas, Estay Proel, Estay Popel, Crucetas) vs. Jarcia de Labor (Drizas para izar y Escotas para cazar).',
        narration: 'La arboladura del velero se sostiene mediante la jarcia fija de cable de acero: el estay proel sujeta el mástil hacia proa, el estay popel hacia popa y los obenques con las crucetas hacia las bandas. La jarcia de labor son los cabos móviles: las drizas sirven para izar las velas y las escotas para orientarlas y cazarlas.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Equilibrio entre Centro Vélico (CV) y Centro de Resistencia Lateral (CRL): si el CV queda levemente a popa del CRL, el barco es "Ardiente".',
        narration: 'La fuerza del viento actúa concentrada en el Centro Vélico de las velas y el agua se opone al abatimiento en el Centro de Resistencia Lateral del quillote. Cuando el Centro Vélico está levemente a popa del Centro de Resistencia Lateral, el barco es ardiente: si soltás la caña tiende a orzar solo hacia el viento y detenerse con seguridad.',
        highlight: 'step_1'
      }
    ]
  },

  rosa_vientos_maniobras_vela: {
    title: 'Rosa de los Vientos, Rumbos de Vela, Virar por Avante, Trasluchar (Virar en Redondo) y Ponerse a la Capa',
    duration: '04:15',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_sail_maneuvers_3d',
      topTitle: 'MANIOBRA A VELA: CEÑIDA, TRAVÉS, LARGO, POPA, VIRADAS Y CAPA',
      trickBadge: 'ORZAR = Acercar proa al viento y CAZAR velas | DERIVAR = Alejar proa del viento y FILAR velas'
    },
    scenes: [
      {
        subtitle: 'La Rosa de los Vientos: Zona muerta (±45°), Ceñida (45°), Descuartelar, Través (90°), Largo (120°), Aleta (135°) y Empopada (180°).',
        narration: 'Un velero no puede navegar dentro de los cuarenta y cinco grados del viento, llamados zona muerta. A cuarenta y cinco grados navega en ceñida con las velas bien cazadas. Al derivar, es decir alejar la proa del viento, vamos filando las escotas pasando por descuartelar, través a noventa grados, un largo, por la aleta y empopada.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Virar por Avante (pasando la PROA por el viento) vs. Trasluchar o Virar en Redondo (pasando la POPA por el viento) y Ponerse a la Capa.',
        narration: 'Cuando cambiamos el viento de banda pasando la proa por el viento, hacemos una virada por avante. Cuando pasamos la popa por el viento en empopada, hacemos una trasluchada o virada en redondo, cazando antes la mayor al centro para evitar el golpe violento de la botavara. Para detener el barco con mal tiempo nos ponemos a la capa acuartelando el foque a barlovento, filando la mayor y fijando el timón a la orza.',
        highlight: 'step_1'
      }
    ]
  },

  meteorologia_frentes_vientos: {
    title: 'Meteorología Náutica: Presión Atmosférica, Frentes Fríos y Cálidos, Pampero, Sudestada y Escala Beaufort',
    duration: '04:20',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_weather_pampero_3d',
      topTitle: 'METEOROLOGÍA DEL RÍO DE LA PLATA: PAMPERO (SW) Y SUDESTADA (SE)',
      trickBadge: 'PAMPERO (SW): Frente frío violento, nube cigarro, baja la marea | SUDESTADA (SE): Temporal largo y gran crecida'
    },
    scenes: [
      {
        subtitle: 'Hemisferio Sur: En las Bajas Presiones (Ciclones) el viento gira en sentido HORARIO; en las Altas (Anticiclones) gira ANTIHORARIO.',
        narration: 'En el Hemisferio Sur, por efecto de la fuerza de Coriolis, los vientos giran en sentido horario alrededor de los centros de baja presión o ciclones, y en sentido antihorario alrededor de los centros de alta presión o anticiclones. Una caída brusca del barómetro de más de un hectopascal por hora anuncia la llegada inminente de un temporal.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Pampero (SW: nube "cigarro", ráfagas intensas, mejora rápida y bajante) vs. Sudestada (SE: lluvia persistente, 2 a 4 días, fuerte crecida).',
        narration: 'Los dos fenómenos locales clave del Río de la Plata son el Pampero y la Sudestada. El Pampero es un frente frío del Sudoeste precedido por una nube oscura en forma de rodillo o cigarro: trae ráfagas muy violentas, brusco descenso térmico, limpia rápido el cielo y provoca bajante. La Sudestada sopla del Sudeste durante varios días con lloviznas, mala visibilidad, gran oleaje y una importante crecida del río.',
        highlight: 'step_1'
      }
    ]
  },

  ripa_veleros_sonoras: {
    title: 'RIPA en Timonel: Regla 12 (Veleros), Regla 19 y 35 (Niebla y Señales Acústicas) y Luces Especiales',
    duration: '04:15',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'sailing_r12',
      topTitle: 'RIPA TIMONEL: REGLA 12 (VELEROS), VISIBILIDAD REDUCIDA Y PITADAS',
      trickBadge: 'VELEROS (Regla 12): Amuras a Babor CEDE a Estribor | Misma amura: BARLOVENTO cede a SOTAVENTO'
    },
    scenes: [
      {
        subtitle: 'Regla 12: Entre dos veleros con el viento por bandas contrarias, el que lleva el viento por BABOR cede el paso al que lo lleva por ESTRIBOR.',
        narration: 'En la Regla doce del RIPA, cuando dos veleros reciben el viento por bandas distintas, el que navega con amuras a babor debe ceder el paso al que navega con amuras a estribor. Y si ambos reciben el viento por la misma banda, el que está a barlovento debe mantenerse apartado del que está a sotavento.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Regla 35 (Señales Acústicas en Niebla cada 2 min): Motor con arrancada = 1 Larga; Sin arrancada = 2 Largas; Velero/Remolque/Pesca = 1 Larga + 2 Cortas.',
        narration: 'En niebla, la Regla treinta y cinco obliga a emitir señales sonoras cada dos minutos como máximo: un buque a motor en movimiento toca una pitada larga; detenido sin arrancada toca dos largas; y un velero, pesquero, remolcador o buque con maniobra restringida toca una pitada larga seguida de dos cortas.',
        highlight: 'step_1'
      }
    ]
  },

  jurisdiccion_cortesia_pna: {
    title: 'Jurisdicción Fluvio-Marítima (Tratado del Río de la Plata y Ley 23.968), Canales Nacionales y Cortesía Naval',
    duration: '04:10',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'rdlp_treaty_map',
      topTitle: 'TRATADO DEL RÍO DE LA PLATA (FRANJAS 2 Y 7 MN) Y CORTESÍA NAVAL',
      trickBadge: 'FRANJAS EXCLUSIVAS: 2 MN (hasta Colonia-Punta Lara) y 7 MN (hasta el exterior) | Bandera de cortesía: Obenque ESTRIBOR'
    },
    scenes: [
      {
        subtitle: 'Tratado del Río de la Plata (Ley 20.645): Franjas exclusivas de 2 MN y 7 MN, límite exterior Punta Rasa - Punta del Este y prioridad en canales.',
        narration: 'El Río de la Plata se extiende desde Punta Gorda hasta la línea Punta Rasa, Punta del Este. Posee franjas de jurisdicción exclusiva de dos millas náuticas en el sector interno hasta la línea Colonia, Punta Lara, y de siete millas náuticas en el sector exterior. En los canales boyados, toda embarcación deportiva debe ceder el paso a los buques de ultramar.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Cortesía Naval: Pabellón Nacional Argentino en el asta de popa (de salida a puesta del sol) y Bandera de Cortesía extranjera en el obenque de ESTRIBOR.',
        narration: 'En materia de protocolo y cortesía naval, el Pabellón Nacional Argentino ocupa siempre el lugar de honor en popa. Al ingresar en aguas o puertos de un país extranjero, como Uruguay, se debe izar la bandera de cortesía de ese país en el obenque de estribor.',
        highlight: 'step_1'
      }
    ]
  },

  // --- NIVEL 3: PATRÓN DE YATE ---
  mercator_faros_compas: {
    title: 'Proyección Mercator (Latitudes Crecientes), Recalada, Alcance Geográfico y Luminoso de Faros y Compensación del Compás',
    duration: '04:25',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_lighthouse_range_3d',
      topTitle: 'ALCANCE GEOGRÁFICO Y LUMINOSO DE FAROS SHN: Dg = 2,08 × (√H + √h)',
      trickBadge: 'FÓRMULA SHN: Dg (MN) = 2,08 × (√Elevación Faro H + √Altura Ojo h) | Comparar siempre con Alcance Luminoso'
    },
    scenes: [
      {
        subtitle: 'Alcance Geográfico de un Faro por curvatura terrestre: Dg = 2,08 × (√H + √h), donde H es la elevación focal del faro y h la altura del ojo.',
        narration: 'Para calcular a cuántas millas náuticas veremos asomar la luz de un faro sobre el horizonte marino debido a la curvatura de la Tierra, aplicamos la fórmula oficial del Servicio de Hidrografía Naval: Alcance Geográfico es igual a dos coma cero ocho por la raíz cuadrada de la altura del faro en metros, más dos coma cero ocho por la raíz cuadrada de la altura del ojo del observador.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Compensación del Compás Magnético y Tabla de Desvíos: Hierros Duros (magnetismo permanente) y Hierros Dulces (inducido), Imanes Correctores.',
        narration: 'El desvío del compás es provocado por los hierros duros y dulces del propio barco. Luego de compensar los coeficientes principales con imanes longitudinales, transversales y esferas de Thomson, levantamos la curva o tabla de desvíos residuales en función del rumbo magnético o compás.',
        highlight: 'step_1'
      }
    ]
  },

  mareas_tablas_puentes: {
    title: 'Cálculo Completo de Mareas (Puertos Patrones y Secundarios, Regla de los Duodécimos) y Paso Bajo Puentes / Cables',
    duration: '04:20',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_tides_bridges_3d',
      topTitle: 'MAREAS SHN (DUODÉCIMOS: 1/12 - 2/12 - 3/12 - 3/12 - 2/12 - 1/12) Y PASO BAJO PUENTES',
      trickBadge: 'BAJO EL AGUA: Sondaje referenciado al Plano de Reducción (Bajamar) | EN EL AIRE: Puentes referenciados al Nivel Medio / Pleamar'
    },
    scenes: [
      {
        subtitle: 'Regla de los Duodécimos entre Pleamar y Bajamar (6 horas): la amplitud varía 1/12 en la 1°h, 2/12 en la 2°h, 3/12 en la 3° y 4°h, 2/12 en la 5°h y 1/12 en la 6°h.',
        narration: 'La marea no sube ni baja en forma lineal sino sinusoidal. Con la Regla de los Duodécimos dividimos la amplitud total entre pleamar y bajamar en doce partes: en la primera hora varía un doceavo; en la segunda, dos doceavos; en la tercera y cuarta hora centrales, tres doceavos en cada una, es decir la mitad de toda la marea; en la quinta, dos doceavos; y en la sexta, el último doceavo.',
        highlight: 'step_0'
      },
      {
        subtitle: '¡Doble control en examen de Patrón! Agua Bajo Quilla = (Sonda + Marea) - Calado | Margen Aéreo Bajo Puente = Cota del Puente - (Marea sobre ref. + Altura Mástil).',
        narration: 'Cuando un velero pasa bajo un puente o cable de alta tensión, debés verificar dos márgenes simultáneos: abajo, que la sonda más la marea supere ampliamente tu calado; y arriba, que la altura de marea sumada a la altura de tu mástil desde la línea de flotación no supere el gálibo libre del puente.',
        highlight: 'step_1'
      }
    ]
  },

  estima_grafica_corriente: {
    title: 'Navegación por Estima Gráfica y Analítica: Los 3 Problemas de Corriente (Triángulo de Velocidades) y Abatimiento',
    duration: '04:30',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_current_triangle_3d',
      topTitle: 'TRIÁNGULO VECTORIAL DE CORRIENTE: PROPIO (Rv/Vp) + CORRIENTE (Rc/Vc) = EFECTIVO (Re/Ve)',
      trickBadge: 'VECTORIAL EN CARTA: En 1 hora, el Vector Propio (Rv/Vp) sumado al Vector Corriente (Rc/Vc) cierra el Vector Efectivo (Re/Ve)'
    },
    scenes: [
      {
        subtitle: 'Abatimiento por viento (a): si el viento entra por Estribor te abate a Babor (-); si entra por Babor te abate a Estribor (+).',
        narration: 'El abatimiento es el ángulo entre la línea de crujía y la estela debido al empuje lateral del viento. Para corregirlo, si querés mantener un rumbo verdadero sobre el agua, debés gobernar orzando unos grados hacia barlovento para compensar lo que el viento te empuja hacia sotavento.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Los 3 Problemas de Corriente en la Carta (Triángulo de 1 Hora): 1° Directo (hallar Re/Ve), 2° Inverso (qué Rv poner para seguir Re) y 3° Hallar Rc/Vc.',
        narration: 'En el triángulo vectorial de corriente de una hora tenemos tres vectores: el vector propio del barco con su rumbo verdadero y velocidad de corredera; el vector de la corriente con su rumbo e intensidad horaria; y la resultante sobre el fondo que es el rumbo efectivo y la velocidad efectiva.',
        highlight: 'step_1'
      }
    ]
  },

  fondeo_dos_anclas_maniobra: {
    title: 'Maniobra Avanzada de Fondeo con Dos Anclas (Barbas de Gato y Engalgar), Radio de Borneo y Maniobra en Dársenas',
    duration: '04:05',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_anchoring_two_3d',
      topTitle: 'FONDEO AVANZADO: BARBAS DE GATO (90°-120°), ENGALGAR Y RADIO DE BORNEO',
      trickBadge: 'BARBAS DE GATO: 2 anclas por proa a 90°-120° (reduce el radio de borneo) | ENGALGAR: 2 anclas en tándem sobre 1 línea'
    },
    scenes: [
      {
        subtitle: 'Fondeo a Barbas de Gato (2 anclas abiertas entre 90° y 120° por proa) para reducir el círculo de borneo y resistir cambios de viento.',
        narration: 'Cuando fondeamos en un tenedero estrecho o esperamos fuertes rachas cambiantes, empleamos el fondeo a barbas de gato: fondeamos dos anclas por proa formando un ángulo de entre noventa y ciento veinte grados entre ambos cabos o cadenas. Así reducimos drásticamente el radio de borneo.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Engalgar un ancla (2 anclas en serie sobre la misma cadena) para duplicar el poder de agarre en fondos pobres o temporal severo.',
        narration: 'En cambio, engalgar consiste en afirmar una segunda ancla por delante de la primera sobre la misma línea de fondeo mediante un tramo de cadena, duplicando el poder de agarre sobre el fondo cuando enfrentamos un temporal severo.',
        highlight: 'step_1'
      }
    ]
  },

  superficie_libre_sar_comunicaciones: {
    title: 'Estabilidad (Efecto de Superficie Libre en Sentina/Tanques), Balsa Salvavidas SOLAS, EPIRB y Patrones de Búsqueda SAR',
    duration: '04:20',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_sar_stability_3d',
      topTitle: 'SUPERFICIE LIBRE EN TANQUES, BALSA SALVAVIDAS (ZAFA HIDROSTÁTICA) Y PATRONES SAR',
      trickBadge: 'SUPERFICIE LIBRE: Líquido suelto en sentina o tanque a media carga se desplaza a la banda escorada y REDUCE la estabilidad (GM)'
    },
    scenes: [
      {
        subtitle: 'Efecto de Superficie Libre: el agua acumulada en la sentina o un tanque parcialmente lleno corre hacia la banda de escora elevando virtualmente el Centro de Gravedad (G).',
        narration: 'El efecto de superficie libre ocurre cuando hay agua suelta en la sentina o tanques a media carga: al escorar el barco, el líquido se desplaza hacia la banda baja, desplazando el centro de gravedad y reduciendo peligrosamente la altura metacéntrica y la estabilidad transversal.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Balsa Salvavidas (Zafa Hidrostática a 1,5 - 4 m de profundidad), Radiobaliza EPIRB 406 MHz y Patrones SAR (Cuadrado Expandido, Sector y Paralelo).',
        narration: 'La balsa salvavidas cuenta con una válvula de zafa hidrostática que la libera e infla automáticamente si el barco se hunde entre uno coma cinco y cuatro metros. Para operaciones de búsqueda y rescate usamos tres patrones oficiales IAMSAR: cuadrado expandido, búsqueda por sectores y barrido por calles paralelas.',
        highlight: 'step_1'
      }
    ]
  },

  faros_luces_especiales_ripa: {
    title: 'RIPA Avanzado (Reglas 24 a 31: Remolque >200m, Draga, Calado, Práctico, Varado) y Caracterización de Faros SHN',
    duration: '04:25',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'special_lights_towers_3d',
      topTitle: 'TORRES DE LUCES ESPECIALES RIPA (REGLAS 27 A 30) Y FASES LUMINOSAS DE FAROS',
      trickBadge: '2 Rojas = Sin Gobierno | R-B-R = Maniobra Restr. (Draga: 2 Verdes = Paso Libre) | 3 Rojas = Calado | B-R = Práctico'
    },
    scenes: [
      {
        subtitle: 'Reconocimiento de Torres Verticales: Sin Gobierno (2 Rojas), Draga (R-B-R + 2 Rojas obstruido / 2 Verdes libre), Calado (3 Rojas) y Práctico (Blanca sobre Roja).',
        narration: 'En navegación nocturna costera debés identificar al instante las torres verticales de luces todo horizonte: dos rojas identifican a un buque sin gobierno; roja, blanca y roja a un buque con capacidad de maniobra restringida; si es una draga, agrega dos luces rojas en la banda obstruida y dos verdes en la banda libre; tres rojas indican restringido por su calado; y blanca sobre roja identifica al práctico.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Fases Luminosas de Faros y Balizas SHN: Fija (F), Destellos (Fl / D), Grupo de Destellos GpD(2), Ocultaciones (Oc), Isofase (Iso = luz igual a eclipse) y Alternada (Al).',
        narration: 'En las cartas náuticas y Lista de Faros del Servicio de Hidrografía Naval, cada faro se identifica por su fase luminosa, color y período: en una luz de Destellos la duración de la luz es más corta que la oscuridad; en una de Ocultaciones la luz dura más que el eclipse; y en una Isofase los tiempos de luz y oscuridad son exactamente iguales.',
        highlight: 'step_1'
      }
    ]
  },

  // --- NIVEL 4: PILOTO DE YATE ---
  astronomia_triangulo_posicion: {
    title: 'Esfera Celeste, Coordenadas Astronómicas (AHG, AHL, Declinación, Altura y Acimut) y el Triángulo de Posición (P-Z-A)',
    duration: '04:35',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_celestial_sphere_3d',
      topTitle: 'ESFERA CELESTE, ALMANAQUE NÁUTICO (AHG, Dec) Y TRIÁNGULO DE POSICIÓN (P-Z-A)',
      trickBadge: 'ECUACIÓN HORARIA FUNDAMENTAL: AHL = AHG - Longitud Oeste (o + Longitud Este) | Vértices: Polo (P), Cenit (Z) y Astro (A)'
    },
    scenes: [
      {
        subtitle: 'De la hora UTC del cronómetro al Almanaque Náutico: obtenemos el Ángulo Horario en Greenwich (AHG) y la Declinación (d) del astro, y hallamos AHL = AHG - Longitud W.',
        narration: 'En navegación astronómica para Piloto de Yate, con la hora exacta U T C de la observación entramos al Almanaque Náutico para obtener el Ángulo Horario en Greenwich y la Declinación del astro. Restando nuestra Longitud Oeste al Ángulo Horario en Greenwich obtenemos el Ángulo Horario Local.',
        highlight: 'step_0'
      },
      {
        subtitle: 'El Triángulo Esférico de Posición (P-Z-A): sus 3 vértices son el Polo Elevado (P), el Cenit del Observador (Z) y el Astro (A).',
        narration: 'Con la Latitud estimada, la Declinación y el Ángulo Horario en el Polo resolvemos el Triángulo de Posición cuyos tres vértices son el Polo Elevado, el Cenit del observador y el Astro.',
        highlight: 'step_1'
      }
    ]
  },

  sextante_saint_hilaire: {
    title: 'El Sextante Marino, Corrección de Alturas (Ai a Av), Latitud Meridiana y Recta de Altura de Marcq Saint-Hilaire',
    duration: '04:40',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_sextant_saint_hilaire_3d',
      topTitle: 'SEXTANTE MARINO Y RECTA DE ALTURA MARCQ SAINT-HILAIRE (Δa = Av - Ac)',
      trickBadge: 'REGLA "MÁS CERCA / MENOS LEJOS": Si Altura Verdadera (Av) > Calculada (Ac), Δa es POSITIVO (hacia el Acimut Zv del astro)'
    },
    scenes: [
      {
        subtitle: 'Del Sextante a la Altura Verdadera: Av = Ai ± Error de Índice (Ei) - Depresión del Horizonte (D) - Refracción (R) + Semidiámetro (SD) + Paralaje (P).',
        narration: 'Al medir la altura instrumental de un astro con el sextante, aplicamos primero el error de índice y la depresión del horizonte según la altura del ojo; luego restamos la refracción atmosférica y sumamos el semidiámetro para obtener la Altura Verdadera.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Método de Marcq Saint-Hilaire: Determinante Δa = Av - Ac. Cada minuto de arco = 1 Milla Náutica hacia el astro (si Av > Ac) o en sentido opuesto (si Av < Ac).',
        narration: 'En el método de Marcq Saint-Hilaire comparamos la Altura Verdadera medida con el sextante contra la Altura Calculada para nuestro punto estimado. Cada minuto de diferencia equivale a una milla náutica hacia el astro si la verdadera es mayor, o en sentido opuesto si es menor.',
        highlight: 'step_1'
      }
    ]
  },

  cinematica_radar_saint_hilaire: {
    title: 'Cinemática Naval y Ploteo Radar (Rosa de Maniobra, Triángulo Relativo e-r-m, CPA/TCPA) y Traslado de Rectas de Altura',
    duration: '04:30',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_radar_plotting_3d',
      topTitle: 'CINEMÁTICA RADAR EN ROSA DE MANIOBRA: CPA (DISTANCIA MÍNIMA) Y TCPA',
      trickBadge: 'EN LA ROSA DE MANIOBRA: Si la prolongación de la Línea de Movimiento Relativo (LMR) pasa por el centro = ¡CPA CERO (ABORDAJE)!'
    },
    scenes: [
      {
        subtitle: 'Ploteo en la Rosa de Maniobra Radar: marcando 3 ecos sucesivos (M1, M2, M3) trazamos la Línea de Movimiento Relativo (LMR) y hallamos el CPA y TCPA.',
        narration: 'En navegación con visibilidad reducida, el ploteo cinemático radar es obligatorio según las Reglas siete y diecinueve del RIPA. Marcando en la rosa de maniobra las posiciones sucesivas de un blanco, trazamos su Línea de Movimiento Relativo y hallamos la Distancia Mínima de Paso o C P A.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Triángulo de Velocidades Radar (e - r - m): del origen "e" a "r" va el vector propio (R/V) y de "r" a "m" el vector relativo (Rr/Vr), obteniendo en "e-m" el rumbo y velocidad real del otro buque.',
        narration: 'Construyendo el triángulo de velocidades e, r, m en la rosa de maniobra, determinamos el rumbo y la velocidad verdaderos del otro buque y calculamos el nuevo rumbo propio evasivo.',
        highlight: 'step_1'
      }
    ]
  },

  estabilidad_gm_gz_temporal: {
    title: 'Estabilidad Transversal y Longitudinal (K, B, G, M, GM y Curva de Brazos Adrizantes GZ), Averías y Navegación con Temporal en Altura',
    duration: '04:35',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_gz_stability_3d',
      topTitle: 'ESTABILIDAD TRANSVERSAL (GM = KM - KG), CURVA ESTÁTICA GZ Y CAPA EN TEMPORAL',
      trickBadge: 'ESTABILIDAD POSITIVA: Metacentro (M) arriba de Gravedad (G) -> Brazo Adrizante GZ = GM × sen(θ) | Ángulo Límite (AVS > 120°)'
    },
    scenes: [
      {
        subtitle: 'Puntos K (Quilla), B (Carena), G (Gravedad) y M (Metacentro): Altura Metacéntrica GM = KM - KG y Curva de Estabilidad Estática (Brazo Adrizante GZ).',
        narration: 'Al escorar un yate, el centro de carena B se desplaza hacia la banda sumergida y el empuje vertical corta la línea de crujía en el Metacentro M. Siempre que el Metacentro esté por encima del Centro de Gravedad G, se genera un par adrizante cuyo brazo es G Z igual a G M por el seno del ángulo de escora.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Tácticas de Temporal en Alta Mar: Ponerse a la Capa, Correr el Temporal con Ancla de Mar o Cabos por Popa (Drogue) para evitar atravesarse a la ola rompiente.',
        narration: 'En un temporal oceánico con olas rompientes, el mayor peligro es quedar atravesado al mar. Las dos tácticas maestras son ponerse a la capa con vela de capa o ancla de mar por proa, o correr el temporal remolcando un dispositivo de freno por popa.',
        highlight: 'step_1'
      }
    ]
  },

  sar_blu_comunicaciones: {
    title: 'Comunicaciones Oceánicas (SMSSM/GMDSS, BLU/HF 2182 y 4125 kHz, DSC, Inmarsat), COSPAS-SARSAT 406 MHz y SART Radar',
    duration: '04:20',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_gmdss_epirb_3d',
      topTitle: 'SMSSM / GMDSS OCEÁNICO: BLU/HF, EPIRB 406 MHz (COSPAS-SARSAT) Y TRANSPONDEDOR SART',
      trickBadge: 'VHF = 25-30 MN | BLU/HF (2182 / 4125 / 6215 kHz) = Centenares de MN por Ionósfera | EPIRB 406 MHz = Cobertura Global Satelital'
    },
    scenes: [
      {
        subtitle: 'Alcance de Comunicaciones: VHF (alcance visual ~25-30 MN) vs. Onda Media/Corta BLU-HF (2182 kHz, 4125 kHz, 6215 kHz, 8291 kHz por reflexión ionosférica).',
        narration: 'Más allá de las treinta millas de la costa utilizamos equipos de Banda Lateral Única en frecuencias de dos mil ciento ochenta y dos, cuatro mil ciento veinticinco y ocho mil doscientos noventa y un kilohertz, cuyas ondas se reflejan en la ionósfera alcanzando miles de millas.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Radiobaliza Satelital EPIRB (406 MHz COSPAS-SARSAT + 121,5 MHz) y Transpondedor Radar SART (9 GHz Banda X: dibuja 12 puntos en el radar de rescate).',
        narration: 'En caso de abandono, la radiobaliza EPIRB transmite en cuatrocientos seis megahertz a la constelación satelital COSPAS SARSAT identificando el M M S I y la posición G P S. Y el transpondedor SART de nueve gigahertz dibuja doce puntos en los radares de banda X de rescate.',
        highlight: 'step_1'
      }
    ]
  },

  coriolis_circulacion_ciclones: {
    title: 'Meteorología Oceánica I: Fuerza de Coriolis, Circulación General de la Atmósfera, Alisios, Vientos del Oeste y Ley de Buys-Ballot',
    duration: '04:25',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_coriolis_buysballot_3d',
      topTitle: 'CIRCULACIÓN GENERAL ATMOSFÉRICA, CORIOLIS Y LEY DE BUYS-BALLOT',
      trickBadge: 'LEY DE BUYS-BALLOT (Hemisferio Sur): De CARA al viento real, el Centro de BAJA PRESIÓN está a tu IZQUIERDA (y algo atrás)'
    },
    scenes: [
      {
        subtitle: 'Fuerza de Coriolis (desvía hacia la IZQUIERDA en el Hemisferio Sur y a la DERECHA en el Norte) y Celdas de Hadley, Ferrel y Polar.',
        narration: 'La rotación terrestre genera la fuerza aparente de Coriolis, desviando todo movimiento hacia la izquierda en el Hemisferio Sur y hacia la derecha en el Hemisferio Norte. Esto organiza los vientos Alisios del Sudeste, las calmas subtropicales y los vientos del Oeste.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Ley de Buys-Ballot en el Hemisferio Sur: poniéndote de CARA al viento verdadero, el centro de Baja Presión se ubica a tu mano IZQUIERDA y algo hacia atrás.',
        narration: 'Por la Ley de Buys Ballot, en el Hemisferio Sur, si te parás en cubierta mirando de frente al viento verdadero, el centro de baja presión se encuentra hacia tu mano izquierda y unos grados hacia atrás.',
        highlight: 'step_1'
      }
    ]
  },

  ciclones_pilot_charts: {
    title: 'Meteorología Oceánica II: Ciclones Tropicales (Semicírculo Peligroso vs. Navegable), Olas, Corrientes Oceánicas y Pilot Charts',
    duration: '04:30',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'unit_cyclone_semicircles_3d',
      topTitle: 'CICLONES TROPICALES: SEMICÍRCULO PELIGROSO VS. NAVEGABLE Y MANIOBRA DE ESCAPE',
      trickBadge: 'HEMISFERIO SUR: Semicírculo PELIGROSO = IZQUIERDO (escapar ciñendo amuras a Babor) | NAVEGABLE = DERECHO (aleta Babor)'
    },
    scenes: [
      {
        subtitle: 'Ciclón Tropical en el Hemisferio Sur: el Semicírculo PELIGROSO es el IZQUIERDO (suma velocidad de traslación y empuja hacia la trayectoria del ojo).',
        narration: 'En un ciclón tropical del Hemisferio Sur, mirando hacia donde avanza la tormenta, el semicírculo izquierdo es el semicírculo peligroso porque allí el giro horario del viento se suma a la velocidad de traslación del ciclón.',
        highlight: 'step_0'
      },
      {
        subtitle: 'Maniobra de Evasión en Hemisferio Sur: en el Semicírculo Peligroso ceñir con amuras a BABOR; en el Navegable correr con viento por la aleta de BABOR.',
        narration: 'Para escapar de un ciclón en el Hemisferio Sur: si estás en el semicírculo peligroso izquierdo debés navegar en ceñida con amuras a babor; si estás en el semicírculo navegable derecho debés correr con el viento por la aleta de babor.',
        highlight: 'step_1'
      }
    ]
  },

  derecho_mar_accidentes_pna: {
    title: 'Derecho Internacional del Mar (CONVEMAR, Ley 23.968), Tratado del Río de la Plata y Accidentes de la Navegación (Ley 20.094)',
    duration: '04:25',
    visualMode: 'codigo_nautico_blueprint',
    animationConfig: {
      template: 'maritime_law_20094',
      topTitle: 'LEY DE LA NAVEGACIÓN 20.094 (ABORDAJE, SALVAMENTO, AVERÍA GRUESA) Y CONVEMAR',
      trickBadge: 'AUXILIO A PERSONAS = Obligatorio y Gratuito | SALVAMENTO DE BIENES = Salario por resultado útil ("No Cure, No Pay")'
    },
    scenes: [
      {
        subtitle: 'Ley 20.094: Abordaje (Fortuito, Culposo o de Culpa Concurrente), Asistencia y Salvamento, Avería Gruesa, Hallazgos y Protesta de Mar ante PNA.',
        narration: 'En Piloto de Yate la Ley de la Navegación veinte mil noventa y cuatro exige distinguir las figuras jurídicas ante siniestros: abordaje fortuito, culposo y de culpa concurrente. El auxilio a vidas humanas es obligatorio y gratuito, mientras que el salvamento de bienes con resultado útil da derecho a salario.',
        highlight: 'step_0'
      },
      {
        subtitle: 'CONVEMAR y Ley 23.968: Aguas Interiores, Mar Territorial (12 MN con derecho de Paso Inocente), Zona Contigua (24 MN), ZEE (200 MN) y Alta Mar.',
        narration: 'Argentina ejerce soberanía plena en su Mar Territorial de doce millas náuticas; poder de policía fiscal y aduanero en la Zona Contigua hasta las veinticuatro millas; y soberanía económica en la Zona Económica Exclusiva de doscientas millas.',
        highlight: 'step_1'
      }
    ]
  }
};

window.NauticalVideoEngine = {
  currentSceneKey: 'nomenclatura_barco',
  sceneIndex: 0,
  isPlaying: false,
  voiceEnabled: true,
  speechRate: 1.0,
  animFrameId: null,
  tick: 0,
  _ripaSynced: false,

  // Exact Color Palette from https://www.facebook.com/share/r/1BrDc7dreR/ (Código Náutico)
  PALETTE: {
    parchmentLight: '#F4F1E8',
    parchmentMid: '#EAE5D7',
    parchmentEdge: '#DCD5C4',
    navyInk: '#162942',
    navyMuted: '#3B526E',
    hullIvory: '#FAF8F2',
    seaBlue: '#2C73B4',
    seaBlueDark: '#1E578F',
    waveCrest: '#68A9E2',
    sectorSteel: 'rgba(65, 126, 184, 0.48)',
    amberOrange: '#E26D24',
    amberSoft: 'rgba(226, 109, 36, 0.18)',
    portRed: '#D94336',
    stbdGreen: '#269B56',
    yellowBuoy: '#EAB308'
  },

  syncAllScenes() {
    if (window.RIPA_AND_ARG_VIDEOS && !this._ripaSynced) {
      window.RIPA_AND_ARG_VIDEOS.forEach(v => {
        window.NAUTICAL_VIDEO_SCENES[v.id] = {
          title: `${v.code}: ${v.title}`,
          duration: '04:30',
          visualMode: 'codigo_nautico_blueprint',
          animationConfig: v.animationConfig,
          scenes: v.scenes.map((s, idx) => ({
            subtitle: s.subtitle,
            narration: s.narration,
            highlight: `step_${idx}`
          }))
        };
      });
      this._ripaSynced = true;
    }
  },

  getSceneData(key) {
    this.syncAllScenes();
    if (key && window.NAUTICAL_VIDEO_SCENES[key]) {
      return window.NAUTICAL_VIDEO_SCENES[key];
    }
    return window.NAUTICAL_VIDEO_SCENES.nomenclatura_barco;
  },

  speakText(text, onEndCallback) {
    if (!('speechSynthesis' in window)) {
      if (onEndCallback) setTimeout(onEndCallback, 6000);
      return;
    }
    window.speechSynthesis.cancel();
    if (!this.voiceEnabled) {
      if (onEndCallback) setTimeout(onEndCallback, 6000);
      return;
    }
    const utter = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const esVoice =
      voices.find(v => v.lang && v.lang.toLowerCase().includes('es-ar')) ||
      voices.find(v => v.lang && v.lang.toLowerCase().includes('es-419')) ||
      voices.find(v => v.lang && v.lang.toLowerCase().startsWith('es'));
    if (esVoice) utter.voice = esVoice;
    utter.lang = 'es-AR';
    utter.rate = this.speechRate;
    utter.pitch = 1.0;
    utter.onend = () => {
      if (onEndCallback && this.isPlaying) onEndCallback();
    };
    window.speechSynthesis.speak(utter);
  },

  stop() {
    this.isPlaying = false;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    const playBtn = document.getElementById('video-play-btn');
    if (playBtn) playBtn.innerHTML = '▶ Reproducir Infografía Animada + Locución Español';
  },

  playScene(sceneKey, idx = 0) {
    this.syncAllScenes();
    this.currentSceneKey = sceneKey;
    const data = this.getSceneData(sceneKey);
    if (!data) return;
    this.sceneIndex = idx % data.scenes.length;
    this.isPlaying = true;
    this.tick = 0;

    const scene = data.scenes[this.sceneIndex];
    const subEl = document.getElementById('video-subtitle-box');
    if (subEl) subEl.textContent = scene.subtitle;

    const titleEl = document.getElementById('classroom-active-video-title');
    if (titleEl) titleEl.textContent = data.title;

    const stepBtns = document.querySelectorAll('.video-step-pill');
    stepBtns.forEach((b, i) => b.classList.toggle('active', i === this.sceneIndex));

    const playBtn = document.getElementById('video-play-btn');
    if (playBtn) playBtn.innerHTML = '⏸ Pausar Explicación';

    this.startCanvasLoop(data.visualMode, scene.highlight, sceneKey);

    this.speakText(scene.narration, () => {
      if (!this.isPlaying) return;
      if (this.sceneIndex + 1 < data.scenes.length) {
        this.playScene(this.currentSceneKey, this.sceneIndex + 1);
      } else {
        this.isPlaying = false;
        if (playBtn) playBtn.innerHTML = '↻ Repetir Infografía Animada';
      }
    });
  },

  togglePlay(sceneKey) {
    if (this.isPlaying) {
      this.stop();
      const activeKey = sceneKey || this.currentSceneKey;
      const data = this.getSceneData(activeKey);
      this.startCanvasLoop(data.visualMode, data.scenes[this.sceneIndex]?.highlight || 'step_0', activeKey);
    } else {
      this.playScene(sceneKey || this.currentSceneKey, this.sceneIndex);
    }
  },

  startCanvasLoop(visualMode, highlight, explicitSceneKey) {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    if (explicitSceneKey) {
      this.currentSceneKey = explicitSceneKey;
    }
    const canvas = document.getElementById('nautical-video-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const render = () => {
      this.tick += 1;
      const w = canvas.width;
      const h = canvas.height;

      this.drawCodigoNauticoBlueprintEngine(ctx, w, h, highlight);

      if (this.isPlaying) {
        ctx.fillStyle = this.PALETTE.amberOrange;
        for (let i = 0; i < 9; i++) {
          const barH = 4 + Math.abs(Math.sin(this.tick * 0.16 + i * 0.6)) * 12;
          ctx.fillRect(w - 66 + i * 5, 17 - barH / 2, 3, barH);
        }
        ctx.font = 'bold 9.5px sans-serif';
        ctx.fillStyle = this.PALETTE.navyInk;
        ctx.textAlign = 'right';
        ctx.fillText('🔊 LOCUCIÓN ACTIVA', w - 72, 20);
      }

      this.animFrameId = requestAnimationFrame(render);
    };
    render();
  },

  // ==========================================================================
  // CORE PRIMITIVES: ESTILO INFOGRAFÍA TÉCNICA "CÓDIGO NÁUTICO" (1BrDc7dreR)
  // ==========================================================================

  drawSeaCutawayBlock(ctx, x, yTop, width, yBottom, phaseOffset = 0) {
    // Draws the stylized royal-blue organic wave block from Reel 1BrDc7dreR
    const P = this.PALETTE;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, yTop);
    const steps = 28;
    for (let i = 0; i <= steps; i++) {
      const px = x + (i / steps) * width;
      const waveY =
        yTop +
        Math.sin((i / steps) * Math.PI * 2 + this.tick * 0.04 + phaseOffset) * 10 +
        (i / steps) * 16;
      ctx.lineTo(px, waveY);
    }
    ctx.lineTo(x + width, yBottom);
    ctx.lineTo(x, yBottom);
    ctx.closePath();

    const seaGrad = ctx.createLinearGradient(x, yTop, x, yBottom);
    seaGrad.addColorStop(0, P.seaBlue);
    seaGrad.addColorStop(1, P.seaBlueDark);
    ctx.fillStyle = seaGrad;
    ctx.fill();

    // Organic flowing white/sky wave crest contours inside the blue water block
    ctx.strokeStyle = 'rgba(135, 196, 245, 0.45)';
    ctx.lineWidth = 1.6;
    for (let row = 0; row < 4; row++) {
      const baseRowY = yTop + 26 + row * ((yBottom - yTop - 30) / 4);
      ctx.beginPath();
      for (let i = 0; i <= 20; i++) {
        const px = x + 8 + (i / 20) * (width - 16);
        const py = baseRowY + Math.sin(i * 0.6 + this.tick * 0.05 + row * 1.4) * 5;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }
    ctx.restore();
  },

  drawDotLeaderCallout(ctx, label, lx, ly, dotX, dotY, align = 'left', highlight = false, customColor = null) {
    // Exact technical leader line from 1BrDc7dreR: solid circular dot on boat + crisp horizontal/angled line + bold condensed uppercase text
    const P = this.PALETTE;
    const strokeCol = customColor || (highlight ? P.amberOrange : P.navyInk);
    ctx.save();

    if (typeof dotX === 'number' && typeof dotY === 'number') {
      ctx.strokeStyle = strokeCol;
      ctx.lineWidth = highlight ? 2.2 : 1.5;
      ctx.beginPath();
      // Horizontal shelf + angled segment if needed
      const shelfX = align === 'left' ? lx + 6 : align === 'right' ? lx - 6 : lx;
      ctx.moveTo(dotX, dotY);
      if (Math.abs(dotY - ly) > 4) {
        const elbowX = (dotX + shelfX) / 2;
        ctx.lineTo(elbowX, ly);
        ctx.lineTo(shelfX, ly);
      } else {
        ctx.lineTo(shelfX, ly);
      }
      ctx.stroke();

      // Solid anchor dot on component
      ctx.fillStyle = strokeCol;
      ctx.beginPath();
      ctx.arc(dotX, dotY, highlight ? 4.5 : 3.4, 0, Math.PI * 2);
      ctx.fill();

      if (highlight) {
        const ringR = 6.5 + Math.sin(this.tick * 0.14) * 2;
        ctx.strokeStyle = strokeCol;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(dotX, dotY, ringR, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    ctx.font = `${highlight ? '900' : '800'} 11.5px "Segoe UI", Impact, Arial Narrow, sans-serif`;
    const metrics = ctx.measureText(label);
    const padX = 6;
    const boxW = metrics.width + padX * 2;
    const boxH = 19;
    let boxX = lx - boxW / 2;
    if (align === 'left') boxX = lx - boxW;
    if (align === 'right') boxX = lx;

    // Subtle parchment pill behind label so it is 100% legible over water or sector lines
    ctx.fillStyle = highlight ? '#FFF7ED' : 'rgba(244, 241, 232, 0.92)';
    ctx.strokeStyle = highlight ? strokeCol : 'rgba(22, 41, 66, 0.25)';
    ctx.lineWidth = highlight ? 1.8 : 1;
    ctx.beginPath();
    ctx.roundRect(boxX, ly - boxH / 2, boxW, boxH, 4);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = strokeCol;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, boxX + boxW / 2, ly + 0.5);
    ctx.restore();
  },

  drawDetailedArchitecturalBoatPlan(ctx, cx, cy, scale = 1.0, angleRad = 0, opts = {}) {
    // Exact architectural blueprint top-down yacht from 1BrDc7dreR:
    // Double hull gunwale, bow pulpit, anchor well, forward hatch, coachroof,
    // 5 pairs of stanchions (candeleros), orange lifelines (guardamancebos),
    // cockpit (bañera), benches, helm wheel, scuppers (imbornales), stern pushpit (balcón)
    const P = this.PALETTE;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angleRad);
    ctx.scale(scale, scale);

    // Optional Port (Red) and Starboard (Green) side glows (like in step_14.png "Zonas del Barco")
    if (opts.showPortStbdGlow) {
      const portGrad = ctx.createRadialGradient(-38, 0, 4, -38, 0, 34);
      portGrad.addColorStop(0, 'rgba(217, 67, 54, 0.55)');
      portGrad.addColorStop(1, 'rgba(217, 67, 54, 0)');
      ctx.fillStyle = portGrad;
      ctx.beginPath(); ctx.ellipse(-38, 0, 26, 56, 0, 0, Math.PI * 2); ctx.fill();

      const stbdGrad = ctx.createRadialGradient(38, 0, 4, 38, 0, 34);
      stbdGrad.addColorStop(0, 'rgba(38, 155, 86, 0.55)');
      stbdGrad.addColorStop(1, 'rgba(38, 155, 86, 0)');
      ctx.fillStyle = stbdGrad;
      ctx.beginPath(); ctx.ellipse(38, 0, 26, 56, 0, 0, Math.PI * 2); ctx.fill();
    }

    // 1. Outer Hull Outline (Ivory Fill + Deep Navy Linework)
    ctx.fillStyle = opts.hullColor || P.hullIvory;
    ctx.strokeStyle = P.navyInk;
    ctx.lineWidth = 2.0;
    ctx.beginPath();
    ctx.moveTo(0, -106); // Bow tip
    ctx.bezierCurveTo(26, -78, 42, -26, 40, 44);
    ctx.bezierCurveTo(38, 76, 30, 96, 22, 102);
    ctx.quadraticCurveTo(0, 108, -22, 102);
    ctx.bezierCurveTo(-30, 96, -38, 76, -40, 44);
    ctx.bezierCurveTo(-42, -26, -26, -78, 0, -106);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // 2. Inner Gunwale / Deck Toe-Rail Line
    ctx.strokeStyle = P.navyInk;
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.moveTo(0, -98);
    ctx.bezierCurveTo(22, -72, 35, -22, 34, 42);
    ctx.bezierCurveTo(32, 72, 25, 90, 18, 95);
    ctx.quadraticCurveTo(0, 100, -18, 95);
    ctx.bezierCurveTo(-25, 90, -32, 72, -34, 42);
    ctx.bezierCurveTo(-35, -22, -22, -72, 0, -98);
    ctx.closePath();
    ctx.stroke();

    // 3. Triangular Bow Anchor Locker (Pozo de Anclas)
    ctx.beginPath();
    ctx.moveTo(0, -92);
    ctx.lineTo(13, -64);
    ctx.lineTo(-13, -64);
    ctx.closePath();
    ctx.stroke();

    // 4. Forward Square Hatch (Escotilla de Proa)
    ctx.beginPath();
    ctx.roundRect(-9, -46, 18, 17, 3);
    ctx.stroke();
    ctx.beginPath();
    ctx.roundRect(-6.5, -43.5, 13, 12, 2);
    ctx.stroke();

    // 5. Coachroof / Cabin Superstructure & Windshield
    ctx.beginPath();
    ctx.moveTo(-20, -22);
    ctx.quadraticCurveTo(0, -28, 20, -22);
    ctx.lineTo(24, 34);
    ctx.lineTo(-24, 34);
    ctx.closePath();
    ctx.stroke();

    // Central Companionway & Helm Console
    ctx.beginPath();
    ctx.roundRect(-11, -10, 22, 42, 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.roundRect(-8, 10, 16, 14, 2);
    ctx.stroke();

    // 6. Cockpit (Bañera) & Benches
    ctx.beginPath();
    ctx.roundRect(-25, 36, 50, 48, 5);
    ctx.stroke();
    // Port & Starboard cockpit seats
    ctx.beginPath();
    ctx.roundRect(-21, 40, 12, 36, 2);
    ctx.roundRect(9, 40, 12, 36, 2);
    ctx.stroke();
    // Helm / Tiller line in center of cockpit
    ctx.beginPath();
    ctx.moveTo(0, 58);
    ctx.lineTo(0, 82);
    ctx.stroke();

    // 7. Scuppers (Imbornales - circular drains in cockpit corners)
    const scupperCol = opts.highlightPart === 'imbornales' ? P.amberOrange : P.navyInk;
    ctx.strokeStyle = scupperCol;
    ctx.lineWidth = opts.highlightPart === 'imbornales' ? 2.2 : 1.3;
    [-28, 28].forEach(sx => {
      ctx.beginPath();
      ctx.arc(sx, 68, 3.2, 0, Math.PI * 2);
      ctx.stroke();
    });

    // 8. Bow Pulpit (Púlpito de Proa)
    ctx.strokeStyle = opts.highlightPart === 'pulpito' ? P.amberOrange : P.navyInk;
    ctx.lineWidth = opts.highlightPart === 'pulpito' ? 2.8 : 1.8;
    ctx.beginPath();
    ctx.moveTo(-16, -74);
    ctx.bezierCurveTo(-12, -96, -5, -109, 0, -110);
    ctx.bezierCurveTo(5, -109, 12, -96, 16, -74);
    ctx.stroke();

    // 9. Stern Pushpit (Balcón de Popa)
    ctx.strokeStyle = opts.highlightPart === 'balcon' ? P.amberOrange : P.navyInk;
    ctx.lineWidth = opts.highlightPart === 'balcon' ? 2.8 : 1.8;
    ctx.beginPath();
    ctx.moveTo(-26, 82);
    ctx.quadraticCurveTo(-24, 102, 0, 105);
    ctx.quadraticCurveTo(24, 102, 26, 82);
    ctx.stroke();

    // 10. Stanchions (Candeleros) & Safety Amber-Orange Lifelines (Guardamancebos)
    const stanchionCoords = [
      [-16, -74],
      [-28, -42],
      [-36, -6],
      [-37, 30],
      [-32, 64],
      [-26, 82]
    ];
    // Lifelines (Guardamancebos) in signature Safety Amber-Orange #E26D24
    ctx.strokeStyle = P.amberOrange;
    ctx.lineWidth = 2.0;
    [-1, 1].forEach(side => {
      ctx.beginPath();
      stanchionCoords.forEach(([sx, sy], idx) => {
        if (idx === 0) ctx.moveTo(sx * side, sy);
        else ctx.lineTo(sx * side, sy);
      });
      ctx.stroke();
    });

    // Stanchion posts (Candeleros)
    ctx.strokeStyle = P.navyInk;
    ctx.fillStyle = P.hullIvory;
    ctx.lineWidth = 1.4;
    [-1, 1].forEach(side => {
      stanchionCoords.slice(1, -1).forEach(([sx, sy]) => {
        ctx.beginPath();
        ctx.arc(sx * side, sy, 2.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    });

    // Optional Sail / Boom overlay for sailboat maneuvers
    if (opts.sailBoomSide) {
      const dir = opts.sailBoomSide; // -1 port, +1 starboard
      ctx.strokeStyle = P.amberOrange;
      ctx.fillStyle = 'rgba(226, 109, 36, 0.25)';
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(0, -18);
      ctx.quadraticCurveTo(dir * 28, 12, dir * 36, 48);
      ctx.lineTo(0, -18);
      ctx.fill();
      ctx.stroke();
    }

    ctx.restore();
  },

  drawDetailedSideProfileBlueprint(ctx, cx, cy, scale = 1.0, opts = {}) {
    // Architectural side-elevation blueprint of a yacht/cruiser on parchment + sea cutaway
    const P = this.PALETTE;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(scale, scale);

    // Hull Freeboard (Obra Muerta) above waterline (y = 0)
    ctx.fillStyle = P.hullIvory;
    ctx.strokeStyle = P.navyInk;
    ctx.lineWidth = 2.0;
    ctx.beginPath();
    ctx.moveTo(96, -34); // Bow sheer
    ctx.lineTo(-92, -26); // Stern sheer
    ctx.lineTo(-84, 0); // Stern waterline
    ctx.lineTo(78, 0); // Bow waterline
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Underwater Hull & Keel (Obra Viva / Carena) below waterline (y > 0)
    ctx.fillStyle = 'rgba(250, 248, 242, 0.86)';
    ctx.strokeStyle = P.navyInk;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(78, 0);
    ctx.quadraticCurveTo(50, 18, 16, 20);
    // Fin keel & bulb
    if (opts.withKeel !== false) {
      ctx.lineTo(10, 56);
      ctx.lineTo(-14, 56);
      ctx.lineTo(-8, 20);
    }
    ctx.lineTo(-64, 16);
    // Rudder (Timón)
    ctx.lineTo(-68, 46);
    ctx.lineTo(-78, 44);
    ctx.lineTo(-76, 12);
    ctx.lineTo(-84, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Cabin Coachroof & Windows
    ctx.fillStyle = P.hullIvory;
    ctx.beginPath();
    ctx.moveTo(-36, -28);
    ctx.lineTo(-24, -44);
    ctx.lineTo(32, -42);
    ctx.lineTo(48, -31);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Pulpit, Stanchions & Orange Lifelines on deck profile
    ctx.strokeStyle = P.amberOrange;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(-90, -40);
    ctx.lineTo(94, -48);
    ctx.stroke();

    // Optional Mast & Sails
    if (opts.withRig) {
      ctx.strokeStyle = P.navyInk;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(12, -42);
      ctx.lineTo(12, -148);
      ctx.stroke();

      // Mainsail (Vela Mayor) & Headsail (Foque/Génova)
      ctx.fillStyle = 'rgba(250, 248, 242, 0.88)';
      ctx.strokeStyle = P.navyInk;
      ctx.lineWidth = 1.5;
      // Mainsail
      ctx.beginPath();
      ctx.moveTo(10, -144);
      ctx.lineTo(-64, -50);
      ctx.lineTo(10, -50);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      // Headsail
      ctx.beginPath();
      ctx.moveTo(14, -138);
      ctx.lineTo(92, -36);
      ctx.lineTo(22, -36);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    // Optional Black Cone Apex Down (Regla 3 / 25 Velero a motor)
    if (opts.withConeDown) {
      ctx.fillStyle = P.navyInk;
      ctx.strokeStyle = P.amberOrange;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(58, -68); // Apex down
      ctx.lineTo(44, -94);
      ctx.lineTo(72, -94);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    ctx.restore();
  },

  drawBlueprintBuoy(ctx, x, yBase, title, bodyBands, topmarkType, flashText, isHighlighted = false) {
    // Draws a technical blueprint buoy on parchment + water line
    const P = this.PALETTE;
    ctx.save();
    const bW = 34;
    const bH = 66;
    const yTop = yBase - bH;

    // Buoy body segments
    const segH = bH / bodyBands.length;
    bodyBands.forEach((col, i) => {
      ctx.fillStyle = col;
      ctx.fillRect(x - bW / 2, yTop + i * segH, bW, segH);
    });

    ctx.strokeStyle = isHighlighted ? P.amberOrange : P.navyInk;
    ctx.lineWidth = isHighlighted ? 2.6 : 1.8;
    ctx.strokeRect(x - bW / 2, yTop, bW, bH);

    // Mast & Lantern
    ctx.strokeStyle = P.navyInk;
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(x, yTop);
    ctx.lineTo(x, yTop - 42);
    ctx.stroke();

    // Flashing lantern glow
    if ((this.tick % 26) < 12) {
      ctx.fillStyle = 'rgba(226, 109, 36, 0.32)';
      ctx.beginPath();
      ctx.arc(x, yTop - 8, 13, 0, Math.PI * 2);
      ctx.fill();
    }

    // Topmarks (Cones, Cylinder, Spheres, X)
    const drawCone = (cy, up, col = P.navyInk) => {
      ctx.fillStyle = col;
      ctx.beginPath();
      if (up) {
        ctx.moveTo(x, cy - 12); ctx.lineTo(x - 10, cy); ctx.lineTo(x + 10, cy);
      } else {
        ctx.moveTo(x, cy + 12); ctx.lineTo(x - 10, cy); ctx.lineTo(x + 10, cy);
      }
      ctx.closePath();
      ctx.fill();
    };

    if (topmarkType === 'N') {
      drawCone(yTop - 28, true);
      drawCone(yTop - 13, true);
    } else if (topmarkType === 'S') {
      drawCone(yTop - 38, false);
      drawCone(yTop - 23, false);
    } else if (topmarkType === 'E') {
      drawCone(yTop - 26, true);
      drawCone(yTop - 24, false);
    } else if (topmarkType === 'W') {
      drawCone(yTop - 38, false);
      drawCone(yTop - 13, true);
    } else if (topmarkType === 'cyl') {
      ctx.fillStyle = P.stbdGreen;
      ctx.strokeStyle = P.navyInk;
      ctx.fillRect(x - 8, yTop - 34, 16, 18);
      ctx.strokeRect(x - 8, yTop - 34, 16, 18);
    } else if (topmarkType === 'cone_red') {
      drawCone(yTop - 18, true, P.portRed);
    } else if (topmarkType === '2balls') {
      ctx.fillStyle = P.navyInk;
      ctx.beginPath(); ctx.arc(x, yTop - 34, 5.5, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(x, yTop - 20, 5.5, 0, Math.PI * 2); ctx.fill();
    } else if (topmarkType === '1ball') {
      ctx.fillStyle = P.portRed;
      ctx.beginPath(); ctx.arc(x, yTop - 28, 6.5, 0, Math.PI * 2); ctx.fill();
    }

    // Label below buoy
    this.drawDotLeaderCallout(ctx, title, x, yBase + 16, null, null, 'center', isHighlighted);
    if (flashText) {
      ctx.fillStyle = P.navyInk;
      ctx.font = 'bold 9.5px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(flashText, x, yBase + 33);
    }
    ctx.restore();
  },

  // ==========================================================================
  // MASTER ENGINE: TODOS LOS VIDEOS CON EL MISMO ESTILO DE 1BrDc7dreR
  // ==========================================================================
  drawCodigoNauticoBlueprintEngine(ctx, w, h, highlight) {
    const P = this.PALETTE;
    const sceneObj = this.getSceneData(this.currentSceneKey);
    const cfg = sceneObj?.animationConfig || {
      template: 'unit_boat_parts_3d',
      topTitle: sceneObj?.title || 'INFOGRAFÍA TÉCNICA NAVAL — PNA / RIPA',
      trickBadge: 'REGLA DE ORO PNA'
    };
    const tpl = cfg.template || 'unit_boat_parts_3d';

    ctx.save();
    const midX = Math.floor(w * 0.48);
    const rx = midX + 2;
    const rw = w - rx;
    const tcx = midX / 2;
    const tcy = h / 2 + 6;
    const rcx = rx + rw / 2;
    const rcy = h / 2 + 6;
    const prog = (this.tick % 220) / 220;

    // 1. WARM NAUTICAL PARCHMENT BACKGROUND (#F4F1E8 -> #EAE5D7) ON WHOLE CANVAS
    const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 40, w / 2, h / 2, w * 0.75);
    bgGrad.addColorStop(0, P.parchmentLight);
    bgGrad.addColorStop(0.75, P.parchmentMid);
    bgGrad.addColorStop(1, P.parchmentEdge);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Subtle technical blueprint grid lines on parchment
    ctx.strokeStyle = 'rgba(22, 41, 66, 0.055)';
    ctx.lineWidth = 1;
    for (let gx = 36; gx < w; gx += 40) {
      ctx.beginPath(); ctx.moveTo(gx, 34); ctx.lineTo(gx, h - 32); ctx.stroke();
    }
    for (let gy = 64; gy < h - 32; gy += 40) {
      ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke();
    }

    // Stylized Royal-Blue Sea Wave Cutaway on Lower Half of Left & Right Panels (Exact 1BrDc7dreR look)
    this.drawSeaCutawayBlock(ctx, 14, h * 0.46, midX - 28, h - 36, 0);
    this.drawSeaCutawayBlock(ctx, rx + 14, h * 0.52, rw - 28, h - 36, 1.5);

    // Panel Sub-headers in Condensed Navy Ink
    ctx.fillStyle = P.navyMuted;
    ctx.font = '800 10px "Segoe UI", Arial Narrow, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('📐 ESQUEMA TÉCNICO DE PLANTA', 16, 48);
    ctx.fillText('⚓ DETALLE ARQUITECTÓNICO Y REGLA OPERATIVA', rx + 16, 48);

    // Compass North indicator N ↑
    ctx.fillStyle = P.navyInk;
    ctx.font = '900 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('N ↑', midX - 24, 49);

    // ========================================================================
    // RENDER EACH TOPIC IN THE EXACT "1BrDc7dreR" ARCHITECTURAL INFOGRAPHIC STYLE
    // ========================================================================
    switch (tpl) {
      // ----------------------------------------------------------------------
      // 1. NOMENCLATURA CUBIERTA + 8 ZONAS DEL BARCO (EXACTO A LOS 2 REELS!)
      // ----------------------------------------------------------------------
      case 'unit_boat_parts_3d': {
        // LEFT PANEL: Exact "CÓMO SE LLAMA CADA COSA EN CUBIERTA" (step_28_shot_1.png)
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, tcy + 4, 1.02, 0, {
          highlightPart: highlight === 'step_0' ? 'pulpito' : null
        });

        this.drawDotLeaderCallout(ctx, 'PÚLPITO (PROA)', tcx - 56, tcy - 86, tcx - 12, tcy - 86, 'left', highlight === 'step_0');
        this.drawDotLeaderCallout(ctx, 'GUARDAMANCEBOS', tcx + 46, tcy - 54, tcx + 24, tcy - 54, 'right', true, P.amberOrange);
        this.drawDotLeaderCallout(ctx, 'CANDELEROS', tcx + 52, tcy - 6, tcx + 36, tcy - 6, 'right', highlight === 'step_0');
        this.drawDotLeaderCallout(ctx, 'IMBORNALES', tcx - 52, tcy + 72, tcx - 28, tcy + 72, 'left', highlight === 'step_0');
        this.drawDotLeaderCallout(ctx, 'BAÑERA', tcx + 52, tcy + 62, tcx + 12, tcy + 62, 'right', highlight === 'step_0');
        this.drawDotLeaderCallout(ctx, 'BALCÓN (POPA)', tcx + 48, tcy + 104, tcx + 16, tcy + 104, 'right', highlight === 'step_0');

        // RIGHT PANEL: Exact "CÓMO SE NOMBRA CADA ZONA" (step_14.png) with 8 radiating steel-blue sectors!
        ctx.save();
        ctx.translate(rcx, rcy + 4);
        const sectorRadius = 104;
        // 8 sector division angles (-22.5° offset so Proa/Popa/Traveses/Amuras/Aletas align cleanly)
        const angles = [-112.5, -67.5, -22.5, 22.5, 67.5, 112.5, 157.5, 202.5].map(d => (d * Math.PI) / 180);
        for (let i = 0; i < 8; i++) {
          const a1 = angles[i];
          const a2 = angles[(i + 1) % 8] + (i === 7 ? Math.PI * 2 : 0);
          if (i % 2 === 0) {
            ctx.fillStyle = P.sectorSteel;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, sectorRadius, a1, a2);
            ctx.closePath();
            ctx.fill();
          }
          ctx.strokeStyle = P.navyInk;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(a1) * (sectorRadius + 14), Math.sin(a1) * (sectorRadius + 14));
          ctx.stroke();
        }
        // Transverse beam line (Través a Través)
        ctx.beginPath();
        ctx.moveTo(-sectorRadius - 12, 0);
        ctx.lineTo(sectorRadius + 12, 0);
        ctx.stroke();
        ctx.restore();

        this.drawDetailedArchitecturalBoatPlan(ctx, rcx, rcy + 4, 0.88, 0, {
          showPortStbdGlow: true
        });

        // 8 Sector Labels around perimeter (exact match to step_14.png)
        this.drawDotLeaderCallout(ctx, 'PROA', rcx, rcy - 108, null, null, 'center', highlight === 'step_1');
        this.drawDotLeaderCallout(ctx, 'AMURA DE BABOR', rcx - 115, rcy - 68, null, null, 'center', highlight === 'step_1', P.portRed);
        this.drawDotLeaderCallout(ctx, 'AMURA DE ESTRIBOR', rcx + 115, rcy - 68, null, null, 'center', highlight === 'step_1', P.stbdGreen);
        this.drawDotLeaderCallout(ctx, 'TRAVÉS DE BABOR', rcx - 122, rcy + 4, null, null, 'center', highlight === 'step_1', P.portRed);
        this.drawDotLeaderCallout(ctx, 'TRAVÉS DE ESTRIBOR', rcx + 122, rcy + 4, null, null, 'center', highlight === 'step_1', P.stbdGreen);
        this.drawDotLeaderCallout(ctx, 'ALETA DE BABOR', rcx - 112, rcy + 76, null, null, 'center', highlight === 'step_1', P.portRed);
        this.drawDotLeaderCallout(ctx, 'ALETA DE ESTRIBOR', rcx + 112, rcy + 76, null, null, 'center', highlight === 'step_1', P.stbdGreen);
        this.drawDotLeaderCallout(ctx, 'POPA', rcx, rcy + 112, null, null, 'center', highlight === 'step_1');
        break;
      }

      // ----------------------------------------------------------------------
      // 2. BOYAS CARDINALES IALA REGIÓN B (ESTILO PLANO TÉCNICO + RELOJ)
      // ----------------------------------------------------------------------
      case 'codigo_nautico_cardinales_3d': {
        // Left: Central rocky hazard + 4 Cardinal sectors & safe water trajectories
        ctx.fillStyle = '#C2B299';
        ctx.strokeStyle = P.navyInk;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(tcx, tcy, 24, 16, 0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        this.drawDotLeaderCallout(ctx, 'PELIGRO AISLADO / BAJO', tcx, tcy - 32, tcx, tcy - 6, 'center', true);

        const cPos = [
          { lbl: 'CARDINAL NORTE (12h)', x: tcx, y: tcy - 82 },
          { lbl: 'CARDINAL SUR (6h + 1L)', x: tcx, y: tcy + 82 },
          { lbl: 'ESTE (3h)', x: tcx + 102, y: tcy },
          { lbl: 'OESTE (9h)', x: tcx - 102, y: tcy }
        ];
        cPos.forEach(c => {
          this.drawDotLeaderCallout(ctx, c.lbl, c.x, c.y, null, null, 'center', false);
        });

        const bx = tcx - 95 + prog * 190;
        this.drawDetailedArchitecturalBoatPlan(ctx, bx, tcy + 112, 0.26, Math.PI / 2);

        // Right: 4 Architectural Blueprint Cardinal Buoys showing exact Cones & Black/Yellow bands
        const base = h - 76;
        this.drawBlueprintBuoy(ctx, rx + rw * 0.14, base, 'NORTE', [P.navyInk, P.yellowBuoy], 'N', 'Puntas Arriba', true);
        this.drawBlueprintBuoy(ctx, rx + rw * 0.38, base, 'ESTE', [P.navyInk, P.yellowBuoy, P.navyInk], 'E', 'Base con Base', false);
        this.drawBlueprintBuoy(ctx, rx + rw * 0.62, base, 'SUR', [P.yellowBuoy, P.navyInk], 'S', 'Puntas Abajo', true);
        this.drawBlueprintBuoy(ctx, rx + rw * 0.86, base, 'OESTE', [P.yellowBuoy, P.navyInk, P.yellowBuoy], 'W', 'Punta c/ Punta', false);
        this.drawDotLeaderCallout(ctx, 'LAS PUNTAS DE LOS CONOS APUNTAN A LA FRANJA NEGRA', rcx, 72, null, null, 'center', true);
        break;
      }

      // ----------------------------------------------------------------------
      // 3. IALA REGIÓN B COMPLETO: LATERALES, PELIGRO AISLADO Y AGUAS SEGURAS
      // ----------------------------------------------------------------------
      case 'iala_all_marks_3d': {
        // Left: Buoyed Channel Plan View (Verde Cilíndrica a Babor / Roja Cónica a Estribor entrando)
        ctx.strokeStyle = P.stbdGreen;
        ctx.lineWidth = 2.5;
        ctx.setLineDash([7, 4]);
        ctx.beginPath(); ctx.moveTo(tcx - 56, 62); ctx.lineTo(tcx - 56, h - 46); ctx.stroke();
        ctx.strokeStyle = P.portRed;
        ctx.beginPath(); ctx.moveTo(tcx + 56, 62); ctx.lineTo(tcx + 56, h - 46); ctx.stroke();
        ctx.setLineDash([]);

        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, h - 65 - prog * 130, 0.42, 0, { showPortStbdGlow: true });
        this.drawDotLeaderCallout(ctx, 'BABOR: VERDE (CILINDRO)', tcx - 64, 108, tcx - 56, 135, 'center', false, P.stbdGreen);
        this.drawDotLeaderCallout(ctx, 'ESTRIBOR: ROJA (CONO)', tcx + 64, 168, tcx + 56, 135, 'center', false, P.portRed);

        // Right: 4 Architectural Blueprint Buoys
        const base = h - 76;
        this.drawBlueprintBuoy(ctx, rx + rw * 0.15, base, 'BABOR', [P.stbdGreen], 'cyl', 'Cilindro Verde', false);
        this.drawBlueprintBuoy(ctx, rx + rw * 0.38, base, 'ESTRIBOR', [P.portRed], 'cone_red', 'Cono Rojo', false);
        this.drawBlueprintBuoy(ctx, rx + rw * 0.63, base, 'PELIGRO AISL.', [P.navyInk, P.portRed, P.navyInk], '2balls', '2 Esferas / GpD(2)', true);
        this.drawBlueprintBuoy(ctx, rx + rw * 0.87, base, 'AGUAS SEG.', [P.portRed, P.hullIvory, P.portRed], '1ball', '1 Esfera Roja', false);
        this.drawDotLeaderCallout(ctx, 'ENTRANDO DESDE EL MAR A RÍO/PUERTO: VERDE A BABOR / ROJA A ESTRIBOR', rcx, 72, null, null, 'center', true);
        break;
      }

      // ----------------------------------------------------------------------
      // 4. RIPA REGLAS 1 A 3: DEFINICIONES Y VELERO A MOTOR (CONO VÉRTICE ABAJO)
      // ----------------------------------------------------------------------
      case 'vessels_definitions': {
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx - 88, tcy - 10, 0.36, 0);
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, tcy - 10, 0.36, 0.25);
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx + 88, tcy - 10, 0.36, -0.15);
        this.drawDotLeaderCallout(ctx, 'CON ARRANCADA', tcx - 88, tcy + 48, tcx - 88, tcy + 20, 'center', false, P.stbdGreen);
        this.drawDotLeaderCallout(ctx, 'SIN ARRANCADA', tcx, tcy + 48, tcx, tcy + 20, 'center', true);
        this.drawDotLeaderCallout(ctx, 'FONDEADO (ANCLA)', tcx + 88, tcy + 48, tcx + 88, tcy + 20, 'center', false);
        this.drawDotLeaderCallout(ctx, 'REGLA 3: "EN NAVEGACIÓN" = NI FONDEADO, NI AMARRADO, NI VARADO', tcx, 74, null, null, 'center', true);

        // Right: Architectural side elevation of sailboat motor-sailing with Black Cone Apex Down
        this.drawDetailedSideProfileBlueprint(ctx, rcx, h * 0.56, 1.05, { withRig: true, withConeDown: true });
        this.drawDotLeaderCallout(ctx, 'CONO PUNTA ABAJO = VELA + MOTOR', rcx + 62, 82, rcx + 58, h * 0.56 - 80, 'center', true);
        this.drawDotLeaderCallout(ctx, 'REGLA 3b: REGLAMENTARIAMENTE ES BUQUE DE PROPULSIÓN MECÁNICA', rcx, h - 52, null, null, 'center', false);
        break;
      }

      // ----------------------------------------------------------------------
      // 5. RIPA REGLAS 4 A 8: RIESGO DE ABORDAJE POR MARCACIÓN CONSTANTE
      // ----------------------------------------------------------------------
      case 'constant_bearing_r7': {
        const colX = tcx + 18;
        const colY = tcy - 62;
        const o0 = { x: tcx - 78, y: tcy + 78 };
        const t0 = { x: tcx + 98, y: tcy + 36 };

        for (let s = 0; s < 4; s++) {
          const f = s * 0.26;
          ctx.strokeStyle = P.amberOrange;
          ctx.lineWidth = 1.4;
          ctx.setLineDash([5, 3]);
          ctx.beginPath();
          ctx.moveTo(o0.x + (colX - o0.x) * f, o0.y + (colY - o0.y) * f);
          ctx.lineTo(t0.x + (colX - t0.x) * f, t0.y + (colY - t0.y) * f);
          ctx.stroke();
        }
        ctx.setLineDash([]);

        this.drawDetailedArchitecturalBoatPlan(ctx, o0.x + (colX - o0.x) * prog, o0.y + (colY - o0.y) * prog, 0.34, 0.55);
        this.drawDetailedArchitecturalBoatPlan(ctx, t0.x + (colX - t0.x) * prog, t0.y + (colY - t0.y) * prog, 0.34, -0.68);
        this.drawDotLeaderCallout(ctx, 'MARCACIÓN CONSTANTE (045°) = ¡RIESGO DE ABORDAJE!', tcx, 72, colX, colY, 'center', true);

        // Right: Large Blueprint Bearing Compass & Rule 8 Evasive Turn
        ctx.strokeStyle = P.navyInk;
        ctx.lineWidth = 2.2;
        ctx.beginPath(); ctx.arc(rcx, rcy, 76, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = P.amberOrange;
        ctx.lineWidth = 2.8;
        ctx.beginPath(); ctx.moveTo(rcx, rcy); ctx.lineTo(rcx + 54, rcy - 54); ctx.stroke();
        this.drawDetailedArchitecturalBoatPlan(ctx, rcx, rcy, 0.38, 0);
        this.drawDotLeaderCallout(ctx, 'REGLA 7: ÁNGULO FIJO EN COMPÁS MIENTRAS SE ACERCA', rcx, 72, rcx + 54, rcy - 54, 'center', true);
        this.drawDotLeaderCallout(ctx, 'REGLA 8: MANIOBRA FRANCA, AMPLIA Y CON ANTICIPACIÓN', rcx, h - 50, null, null, 'center', false, P.stbdGreen);
        break;
      }

      // ----------------------------------------------------------------------
      // 6. RIPA REGLAS 9 Y 10: CANALES ANGOSTOS Y SEPARACIÓN DE TRÁFICO
      // ----------------------------------------------------------------------
      case 'narrow_channel_r9': {
        // Left: Dredged Narrow Channel blueprint with bank lines
        ctx.fillStyle = 'rgba(22, 41, 66, 0.14)';
        ctx.fillRect(18, 60, 38, h - 100);
        ctx.fillRect(midX - 56, 60, 38, h - 100);
        ctx.strokeStyle = P.navyInk;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(56, 60); ctx.lineTo(56, h - 40); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(midX - 56, 60); ctx.lineTo(midX - 56, h - 40); ctx.stroke();

        // Merchant vessel in center
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, 95 + prog * 95, 0.56, Math.PI);
        // Small sport boat hugging outer starboard bank
        this.drawDetailedArchitecturalBoatPlan(ctx, midX - 74, h - 65 - prog * 110, 0.30, 0);

        this.drawDotLeaderCallout(ctx, 'BUQUE DE ULTRAMAR (PRIORIDAD EN CANAL)', tcx, 72, tcx, 130, 'center', true);
        this.drawDotLeaderCallout(ctx, 'REGLA 9: NAVEGAR PEGADO AL BORDE EXTERIOR DE ESTRIBOR', tcx, h - 48, midX - 74, tcy + 20, 'center', false, P.stbdGreen);

        // Right: Rule 9 & Rule 10 (90° perpendicular crossing + 1 long blast at bend)
        this.drawDetailedSideProfileBlueprint(ctx, rcx, h * 0.54, 1.0, { withRig: false });
        this.drawDotLeaderCallout(ctx, 'REGLA 9b: <20m Y VELEROS NO ESTORBARÁN EN EL CANAL', rcx, 82, null, null, 'center', true);
        this.drawDotLeaderCallout(ctx, 'REGLA 9e: 1 PITADA LARGA AL LLEGAR A UN RECODO SIN VISIÓN', rcx, 128, null, null, 'center', false);
        this.drawDotLeaderCallout(ctx, 'REGLA 10 (DST): CRUZAR PERPENDICULARMENTE A 90° DE RUMBO', rcx, h - 50, null, null, 'center', false, P.stbdGreen);
        break;
      }

      // ----------------------------------------------------------------------
      // 7. RIPA REGLA 12: DERECHOS DE PASO ENTRE VELEROS
      // ----------------------------------------------------------------------
      case 'sailing_r12': {
        // Left: Case 1 (Distinta Amura: Babor cede a Estribor)
        ctx.fillStyle = P.navyInk;
        ctx.font = '900 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('⬇ VIENTO REAL (000°) ⬇', tcx, 68);

        this.drawDetailedArchitecturalBoatPlan(ctx, tcx - 64, tcy, 0.48, 0.65, { sailBoomSide: 1, showPortStbdGlow: true });
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx + 64, tcy, 0.48, -0.65, { sailBoomSide: -1, showPortStbdGlow: true });

        this.drawDotLeaderCallout(ctx, 'AMURAS A BABOR (CEDE EL PASO)', tcx - 64, tcy + 68, tcx - 64, tcy + 22, 'center', true, P.portRed);
        this.drawDotLeaderCallout(ctx, 'AMURAS A ESTRIBOR (TIENE PASO)', tcx + 64, tcy + 68, tcx + 64, tcy + 22, 'center', false, P.stbdGreen);

        // Right: Case 2 (Misma Amura: Barlovento cede a Sotavento)
        ctx.fillStyle = P.navyInk;
        ctx.fillText('⬇ VIENTO REAL (MISMA AMURA) ⬇', rcx, 68);
        this.drawDetailedArchitecturalBoatPlan(ctx, rcx - 46, rcy - 28, 0.45, 0.65, { sailBoomSide: 1 });
        this.drawDetailedArchitecturalBoatPlan(ctx, rcx + 48, rcy + 32, 0.45, 0.65, { sailBoomSide: 1 });

        this.drawDotLeaderCallout(ctx, 'BARLOVENTO (MÁS CERCA DEL VIENTO): CEDE EL PASO', rcx - 20, rcy - 86, rcx - 46, rcy - 45, 'center', true);
        this.drawDotLeaderCallout(ctx, 'SOTAVENTO: MANTIENE RUMBO Y VELOCIDAD', rcx + 20, h - 50, rcx + 48, rcy + 50, 'center', false, P.stbdGreen);
        break;
      }

      // ----------------------------------------------------------------------
      // 8. RIPA REGLAS 13 A 17: ALCANZANTE, VUELTA ENCONTRADA Y CRUCE A MOTOR
      // ----------------------------------------------------------------------
      case 'motor_encounters_r13_15': {
        // Left: Vuelta Encontrada (R.14) & Alcanzante (R.13 135° stern sector)
        ctx.fillStyle = P.sectorSteel;
        ctx.beginPath();
        ctx.moveTo(tcx, tcy + 34);
        ctx.arc(tcx, tcy + 34, 58, Math.PI * 0.125, Math.PI * 0.875);
        ctx.closePath();
        ctx.fill();

        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, tcy - 54, 0.36, Math.PI * 0.88);
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, tcy + 34, 0.36, 0.15);
        this.drawDotLeaderCallout(ctx, 'R.14 VUELTA ENCONTRADA: AMBOS CAEN A ESTRIBOR', tcx, 72, tcx, tcy - 54, 'center', true);
        this.drawDotLeaderCallout(ctx, 'R.13 ALCANZANTE (SECTOR 135° POPA): CEDE SIEMPRE', tcx, h - 48, tcx, tcy + 78, 'center', false);

        // Right: Situación de Cruce (R.15)
        this.drawDetailedArchitecturalBoatPlan(ctx, rcx - 28, rcy + 32, 0.46, 0, { showPortStbdGlow: true });
        this.drawDetailedArchitecturalBoatPlan(ctx, rcx + 68, rcy - 22, 0.46, -Math.PI / 2, { showPortStbdGlow: true });

        // Dashed give-way curve to starboard passing astern
        ctx.strokeStyle = P.amberOrange;
        ctx.lineWidth = 2.2;
        ctx.setLineDash([5, 3]);
        ctx.beginPath();
        ctx.moveTo(rcx - 28, rcy);
        ctx.quadraticCurveTo(rcx + 36, rcy - 4, rcx + 95, rcy - 22);
        ctx.stroke();
        ctx.setLineDash([]);

        this.drawDotLeaderCallout(ctx, 'R.15 CRUCE: QUIEN VE AL OTRO POR SU ESTRIBOR CEDE EL PASO', rcx, 72, rcx + 68, rcy - 22, 'center', true);
        this.drawDotLeaderCallout(ctx, 'R.16 Y R.17: CAER A ESTRIBOR Y PASAR POR LA POPA DEL OTRO', rcx, h - 48, rcx - 28, rcy + 32, 'center', false, P.stbdGreen);
        break;
      }

      // ----------------------------------------------------------------------
      // 9. RIPA REGLAS 18 Y 19: PIRÁMIDE DE PRIORIDADES Y VISIBILIDAD REDUCIDA
      // ----------------------------------------------------------------------
      case 'hierarchy_r18': {
        // Left: Rule 19 Radar Plot in Fog
        ctx.strokeStyle = P.navyInk;
        ctx.lineWidth = 2;
        [32, 62, 92].forEach(r => {
          ctx.beginPath(); ctx.arc(tcx, tcy, r, 0, Math.PI * 2); ctx.stroke();
        });
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, tcy, 0.34, 0);
        this.drawDotLeaderCallout(ctx, 'R.19 NIEBLA: VELOCIDAD DE SEGURIDAD', tcx, 70, null, null, 'center', true);
        this.drawDotLeaderCallout(ctx, 'PROHIBIDO CAER A BABOR PARA BUQUE A PROA DEL TRAVÉS', tcx, h - 48, tcx, tcy, 'center', true);

        // Right: Rule 18 Priority Ladder in Technical Blueprint boxes
        const ranks = [
          '1° BUQUE SIN GOBIERNO (2 Rojas / 2 Esferas)',
          '2° CAPACIDAD DE MANIOBRA RESTRINGIDA (R-B-R)',
          '3° RESTRINGIDO POR SU CALADO (3 Rojas / Cilindro)',
          '4° BUQUE DEDICADO A LA PESCA (V-B o R-B)',
          '5° EMBARCACIÓN A VELA (Cede a 1°, 2°, 3° y 4°)',
          '6° PROPULSIÓN MECÁNICA (Motor cede a todos)'
        ];
        const activeR = Math.floor((this.tick / 55) % ranks.length);
        ranks.forEach((txt, i) => {
          this.drawDotLeaderCallout(ctx, txt, rcx, 68 + i * 38, null, null, 'center', i === activeR);
        });
        break;
      }

      // ----------------------------------------------------------------------
      // 10. RIPA REGLAS 20 A 23: SECTORES LUMINOSOS (225°, 112,5°, 135°)
      // ----------------------------------------------------------------------
      case 'lights_sectors_3d': {
        // Left: Blueprint Yacht surrounded by the exact RIPA Light Sectors (225°, 112.5°, 135°)
        ctx.save();
        ctx.translate(tcx, tcy);
        // Starboard Green 112.5°
        ctx.fillStyle = 'rgba(38, 155, 86, 0.35)';
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 84, -Math.PI / 2, -Math.PI / 2 + (112.5 * Math.PI) / 180); ctx.closePath(); ctx.fill();
        // Port Red 112.5°
        ctx.fillStyle = 'rgba(217, 67, 54, 0.35)';
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 84, -Math.PI / 2 - (112.5 * Math.PI) / 180, -Math.PI / 2); ctx.closePath(); ctx.fill();
        // Stern White 135°
        ctx.fillStyle = P.sectorSteel;
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 74, -Math.PI / 2 + (112.5 * Math.PI) / 180, -Math.PI / 2 - (112.5 * Math.PI) / 180); ctx.closePath(); ctx.fill();
        // Masthead 225° arc
        ctx.strokeStyle = P.navyInk;
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(0, 0, 96, -Math.PI / 2 - (112.5 * Math.PI) / 180, -Math.PI / 2 + (112.5 * Math.PI) / 180); ctx.stroke();
        ctx.restore();

        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, tcy, 0.56, 0, { showPortStbdGlow: true });
        this.drawDotLeaderCallout(ctx, 'LUZ DE TOPE BLANCA (225°)', tcx, 66, tcx, tcy - 96, 'center', true);
        this.drawDotLeaderCallout(ctx, 'BABOR ROJA (112,5°)', tcx - 88, tcy, tcx - 50, tcy, 'center', false, P.portRed);
        this.drawDotLeaderCallout(ctx, 'ESTRIBOR VERDE (112,5°)', tcx + 88, tcy, tcx + 50, tcy, 'center', false, P.stbdGreen);
        this.drawDotLeaderCallout(ctx, 'ALCANCE POPA BLANCA (135°)', tcx, h - 46, tcx, tcy + 74, 'center', false);

        // Right: Side elevation showing 1 Masthead (<50m) vs 2 Mastheads (>=50m)
        this.drawDetailedSideProfileBlueprint(ctx, rcx, h * 0.56, 1.0, { withRig: false });
        this.drawDotLeaderCallout(ctx, 'ESLORA < 50m: 1 LUZ DE TOPE BLANCA A PROA', rcx, 78, rcx + 40, h * 0.56 - 35, 'center', true);
        this.drawDotLeaderCallout(ctx, 'ESLORA ≥ 50m: 2° LUZ DE TOPE MÁS ALTA Y A POPA', rcx, 122, rcx - 30, h * 0.56 - 30, 'center', false);
        this.drawDotLeaderCallout(ctx, 'MENOR DE 12m: BLANCA 360° + LUCES DE BANDAS', rcx, h - 50, null, null, 'center', false, P.stbdGreen);
        break;
      }

      // ----------------------------------------------------------------------
      // 11. RIPA REGLAS 24 A 26: REMOLQUE, VELEROS Y PESQUEROS
      // ----------------------------------------------------------------------
      case 'tow_sail_fish_3d': {
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, 102, 0.38, 0);
        ctx.strokeStyle = P.amberOrange;
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3]);
        ctx.beginPath(); ctx.moveTo(tcx, 142); ctx.lineTo(tcx, 202); ctx.stroke();
        ctx.setLineDash([]);
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, 228, 0.32, 0);

        this.drawDotLeaderCallout(ctx, 'REMOLQUE ≤200m: 2 BLANCAS VERTICALES', tcx, 66, tcx, 102, 'center', true);
        this.drawDotLeaderCallout(ctx, 'REMOLQUE >200m: 3 BLANCAS + ROMBO NEGRO', tcx, h - 48, tcx, 172, 'center', true);

        // Right: Technical Mast Diagram for Velero, Pesca Arrastre, Otra Pesca
        const masts = [
          { x: rx + rw * 0.20, lbl: 'VELERO (R/V)', c1: P.portRed, c2: P.stbdGreen, sub: 'Roja s/ Verde' },
          { x: rx + rw * 0.50, lbl: 'ARRASTRE (V/B)', c1: P.stbdGreen, c2: '#FFFFFF', sub: 'Verde s/ Blanca' },
          { x: rx + rw * 0.80, lbl: 'OTRA PESCA (R/B)', c1: P.portRed, c2: '#FFFFFF', sub: 'Roja s/ Blanca' }
        ];
        masts.forEach((m, i) => {
          const base = h - 76;
          ctx.strokeStyle = P.navyInk; ctx.lineWidth = 2.5;
          ctx.beginPath(); ctx.moveTo(m.x, base); ctx.lineTo(m.x, 96); ctx.stroke();
          [m.c1, m.c2].forEach((col, idx) => {
            ctx.fillStyle = col;
            ctx.strokeStyle = P.navyInk;
            ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.arc(m.x, 114 + idx * 28, 8.5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
          });
          this.drawDotLeaderCallout(ctx, m.lbl, m.x, base + 18, null, null, 'center', i === 1);
        });
        this.drawDotLeaderCallout(ctx, 'MARCA DIURNA PESQUEROS: 2 CONOS NEGROS UNIDOS POR SUS PUNTAS', rcx, 72, null, null, 'center', true);
        break;
      }

      // ----------------------------------------------------------------------
      // 12. RIPA REGLAS 27 A 31: SIN GOBIERNO, DRAGA, CALADO, PRÁCTICO Y VARADO
      // ----------------------------------------------------------------------
      case 'special_lights_towers_3d': {
        // Left: Dredge (Draga Regla 27) blueprint showing Obstructed Side (2 Red) & Clear Side (2 Green)
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, tcy, 0.56, 0);
        this.drawDotLeaderCallout(ctx, 'BANDA OBSTRUIDA (2 ROJAS / 2 ESFERAS)', tcx - 86, tcy - 22, tcx - 26, tcy, 'center', true, P.portRed);
        this.drawDotLeaderCallout(ctx, 'PASO LIBRE (2 VERDES / 2 ROMBOS)', tcx + 86, tcy + 22, tcx + 26, tcy, 'center', false, P.stbdGreen);
        this.drawDotLeaderCallout(ctx, 'DRAGA (REGLA 27): R-B-R EN EL MÁSTIL CENTRAL', tcx, 68, tcx, tcy - 56, 'center', true);

        // Right: 5 Technical Light & Day-Shape Towers
        const towers = [
          { x: rx + rw * 0.12, lbl: 'SIN GOB.', lights: [P.portRed, P.portRed] },
          { x: rx + rw * 0.31, lbl: 'RESTRING.', lights: [P.portRed, '#FFFFFF', P.portRed] },
          { x: rx + rw * 0.50, lbl: 'CALADO', lights: [P.portRed, P.portRed, P.portRed] },
          { x: rx + rw * 0.69, lbl: 'PRÁCTICO', lights: ['#FFFFFF', P.portRed] },
          { x: rx + rw * 0.88, lbl: 'VARADO', lights: [P.portRed, P.portRed, '#FFFFFF'] }
        ];
        towers.forEach((t, idx) => {
          const base = h - 76;
          ctx.strokeStyle = P.navyInk; ctx.lineWidth = 2.5;
          ctx.beginPath(); ctx.moveTo(t.x, base); ctx.lineTo(t.x, 96); ctx.stroke();
          t.lights.forEach((col, li) => {
            ctx.fillStyle = col;
            ctx.strokeStyle = P.navyInk;
            ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.arc(t.x, 110 + li * 26, 7.5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
          });
          this.drawDotLeaderCallout(ctx, t.lbl, t.x, base + 18, null, null, 'center', idx === 1);
        });
        this.drawDotLeaderCallout(ctx, 'DÍA: 2 Esferas (Sin Gob) | Esfera-Rombo-Esfera (Restr) | Cilindro (Calado) | 3 Esferas (Varado)', rcx, 70, null, null, 'center', true);
        break;
      }

      // ----------------------------------------------------------------------
      // 13. RIPA REGLAS 32 A 38 Y ANEXO IV: SEÑALES ACÚSTICAS Y DE AUXILIO
      // ----------------------------------------------------------------------
      case 'sound_distress_signals': {
        const list = [
          '1 CORTA (1s): CAIGO A ESTRIBOR',
          '2 CORTAS: CAIGO A BABOR',
          '3 CORTAS: MIS MÁQUINAS VAN ATRÁS',
          '5 O MÁS CORTAS: SEÑAL DE DUDA / ALERTA',
          'NIEBLA (c/2m): 1 LARGA (Motor) | 1L + 2C (Vela/Restr.)'
        ];
        list.forEach((item, i) => {
          this.drawDotLeaderCallout(ctx, item, tcx, 76 + i * 42, null, null, 'center', i === (Math.floor(this.tick / 50) % 5));
        });

        // Right: Distress Signals Blueprint (Anexo IV)
        this.drawDetailedSideProfileBlueprint(ctx, rcx, h * 0.58, 0.92, { withRig: false });
        this.drawDotLeaderCallout(ctx, 'BENGALA ROJA DE MANO O CON PARACAÍDAS', rcx - 35, 76, rcx - 20, h * 0.58 - 35, 'center', true, P.portRed);
        this.drawDotLeaderCallout(ctx, 'SEÑAL FUMÍGENA DE HUMO NARANJA FLOTANTE', rcx + 35, 116, rcx + 35, h * 0.58 - 30, 'center', true);
        this.drawDotLeaderCallout(ctx, 'BRAZOS EXTENDIDOS ARRIBA/ABAJO + MAYDAY CH 16 + BANDERAS N.C.', rcx, h - 48, null, null, 'center', false);
        break;
      }

      // ----------------------------------------------------------------------
      // 14. REGINAVE Y ORDENANZA 1/18 PNA: CATEGORÍAS Y ELEMENTOS DE SEGURIDAD
      // ----------------------------------------------------------------------
      case 'arg_reginave_categories': {
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, tcy + 6, 0.92, 0);
        this.drawDotLeaderCallout(ctx, 'CHALECOS DAF PNA (100%)', tcx - 64, tcy - 48, tcx - 16, tcy - 20, 'left', true);
        this.drawDotLeaderCallout(ctx, 'MATAFUEGO TRICLASE ABC', tcx + 64, tcy - 28, tcx + 14, tcy + 10, 'right', true);
        this.drawDotLeaderCallout(ctx, 'PIROTECNIA Y ESPEJO', tcx - 62, tcy + 36, tcx - 18, tcy + 46, 'left', false);
        this.drawDotLeaderCallout(ctx, 'PALA BICHERO Y ACHICADOR', tcx + 62, tcy + 58, tcx + 18, tcy + 58, 'right', false);

        const cats = [
          '1. CONDUCTOR NÁUTICO: Motor hasta 7 m y 140 HP (Navegación Diurna)',
          '2. TIMONEL DE YATE: Vela/Motor hasta 12 m (Diurna/Nocturna - Atalaya/Rosario)',
          '3. PATRÓN DE YATE: Fluvial completa, R. de la Plata Exterior y Marítimo Costero',
          '4. PILOTO DE YATE: Navegación Oceánica y de Altura sin límite de alejamiento',
          'CERTIFICADO DE MATRÍCULA (REY) + CARNET VIGENTE (5 AÑOS) + DESPACHO DEB'
        ];
        cats.forEach((c, i) => {
          this.drawDotLeaderCallout(ctx, c, rcx, 78 + i * 42, null, null, 'center', i === 0 || i === 1);
        });
        break;
      }

      // ----------------------------------------------------------------------
      // 15. ORDENANZA 17/72 (COMBUSTIBLES Y SENTINA) Y VHF CANAL 16
      // ----------------------------------------------------------------------
      case 'safety_vhf': {
        this.drawDetailedSideProfileBlueprint(ctx, tcx, h * 0.56, 0.95, { withRig: false, withKeel: false });
        this.drawDotLeaderCallout(ctx, 'BOCA DE CARGA EN CUBIERTA EXTERIOR', tcx - 25, 76, tcx + 42, h * 0.56 - 30, 'center', true);
        this.drawDotLeaderCallout(ctx, 'VENTEO EXTERIOR CON MALLA ARRESTALLAMAS', tcx + 25, 114, tcx - 48, h * 0.56 - 26, 'center', false);
        this.drawDotLeaderCallout(ctx, 'VAPOR DE NAFTA EN SENTINA -> BLOWER 4 A 5 MIN', tcx, h - 48, tcx, h * 0.56 + 10, 'center', true, P.portRed);

        this.drawDotLeaderCallout(ctx, 'RADIO VHF CANAL 16 (156,8 MHz): SOCORRO Y LLAMADA', rcx, 82, null, null, 'center', true);
        this.drawDotLeaderCallout(ctx, 'MAYDAY (Peligro grave vida) | PAN-PAN (Urgencia) | SECURITÉ (Seguridad)', rcx, 134, null, null, 'center', false);
        this.drawDotLeaderCallout(ctx, 'INCENDIO NAVEGANDO: PONER POPA AL VIENTO (VIENTO APARENTE CERO)', rcx, 186, null, null, 'center', true, P.portRed);
        this.drawDotLeaderCallout(ctx, 'REGINAVE TÍT. 8 / MARPOL: PROHIBIDO ARROJAR PLÁSTICOS O HIDROCARBUROS', rcx, 238, null, null, 'center', false, P.stbdGreen);
        break;
      }

      // ----------------------------------------------------------------------
      // 16. TRATADO DEL RÍO DE LA PLATA (LEY 20.645) Y ESPACIOS MARÍTIMOS (CONVEMAR)
      // ----------------------------------------------------------------------
      case 'rdlp_treaty_map': {
        // Left: Architectural Cartographic Map of Río de la Plata
        ctx.fillStyle = '#D9D2C0';
        ctx.strokeStyle = P.navyInk;
        ctx.lineWidth = 2;
        // Uruguay North Coast
        ctx.beginPath(); ctx.moveTo(16, 66); ctx.lineTo(midX - 18, 104); ctx.lineTo(midX - 18, 60); ctx.closePath(); ctx.fill(); ctx.stroke();
        // Argentina South Coast
        ctx.beginPath(); ctx.moveTo(16, 142); ctx.lineTo(tcx, 198); ctx.lineTo(midX - 36, h - 42); ctx.lineTo(16, h - 42); ctx.closePath(); ctx.fill(); ctx.stroke();

        // Outer limit line Punta Rasa - Punta del Este
        ctx.strokeStyle = P.amberOrange;
        ctx.lineWidth = 2.5;
        ctx.setLineDash([6, 4]);
        ctx.beginPath(); ctx.moveTo(midX - 36, h - 42); ctx.lineTo(midX - 18, 104); ctx.stroke();
        ctx.setLineDash([]);

        this.drawDotLeaderCallout(ctx, 'FRANJA EXCLUSIVA 2 MN (HASTA COLONIA-PTA. LARA)', tcx - 10, 82, tcx - 50, 128, 'center', true);
        this.drawDotLeaderCallout(ctx, 'FRANJA EXCLUSIVA 7 MN (EXTERIOR)', tcx + 10, 148, tcx + 35, 165, 'center', false, P.stbdGreen);
        this.drawDotLeaderCallout(ctx, 'LÍMITE EXTERIOR: PUNTA RASA - PUNTA DEL ESTE', tcx, h - 48, midX - 27, 155, 'center', true);

        // Right: CONVEMAR / Ley 23.968 Maritime Spaces
        const spaces = [
          '1. MAR TERRITORIAL (12 MN): Soberanía Plena + Derecho de Paso Inocente',
          '2. ZONA CONTIGUA (24 MN): Poder de Policía Fiscal, Aduanero, Sanitario y Migratorio',
          '3. ZONA ECONÓMICA EXCLUSIVA (200 MN): Soberanía sobre Recursos Vivos y Minerales',
          '4. ZONA COMÚN DE PESCA: 2 Arcos de 200 MN desde Punta Rasa y Punta del Este',
          '5. CORTESÍA NAVAL: Pabellón Argentino en Popa | Bandera Extranjera en Obenque Estribor'
        ];
        spaces.forEach((s, i) => {
          this.drawDotLeaderCallout(ctx, s, rcx, 78 + i * 42, null, null, 'center', i === 0 || i === 2);
        });
        break;
      }

      // ----------------------------------------------------------------------
      // 17. LEY DE LA NAVEGACIÓN 20.094: ABORDAJE, SALVAMENTO Y 3 RESPONSABILIDADES
      // ----------------------------------------------------------------------
      case 'maritime_law_20094': {
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx - 38, tcy, 0.44, 0.45);
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx + 38, tcy, 0.44, -0.45);
        this.drawDotLeaderCallout(ctx, 'ABORDAJE: OBLIGACIÓN DE ASISTIR Y NO FUGARSE', tcx, 74, tcx, tcy, 'center', true, P.portRed);
        this.drawDotLeaderCallout(ctx, 'AUXILIO A PERSONAS = OBLIGATORIO Y GRATUITO', tcx, h - 78, null, null, 'center', false, P.stbdGreen);
        this.drawDotLeaderCallout(ctx, 'SALVAMENTO DE BIENES = SALARIO POR RESULTADO ÚTIL', tcx, h - 48, null, null, 'center', true);

        const spheres = [
          '1. RESPONSABILIDAD CONTRAVENCIONAL (PNA / REGINAVE: Multa / Suspensión)',
          '2. RESPONSABILIDAD CIVIL (CCyCN y Ley 20.094: Indemnización de Daños)',
          '3. RESPONSABILIDAD PENAL (Justicia Federal Art. 190 CP: Seguridad Naval)',
          'ABORDAJE FORTUITO (Cada uno su daño) vs. CULPOSO vs. CONCURRENTE',
          'PROTESTA DE MAR / EXPOSICIÓN SUMARIAL ANTE PNA AL ARRIBAR A PUERTO'
        ];
        spheres.forEach((sp, i) => {
          this.drawDotLeaderCallout(ctx, sp, rcx, 78 + i * 42, null, null, 'center', i < 3);
        });
        break;
      }

      // ----------------------------------------------------------------------
      // 18. UNIDADES ESPECÍFICAS DE LOS 4 CURSOS (CADA UNA CON SU PLANO PROPIO)
      // ----------------------------------------------------------------------
      case 'unit_mob_propeller_3d': {
        // Left: Anderson Turn Trajectory around Man Overboard (MOB)
        ctx.strokeStyle = P.amberOrange;
        ctx.lineWidth = 2.4;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.arc(tcx, tcy + 14, 64, -Math.PI * 0.2, Math.PI * 1.35);
        ctx.stroke();
        ctx.setLineDash([]);

        // Lifebuoy & MOB
        ctx.fillStyle = P.amberOrange;
        ctx.strokeStyle = P.navyInk;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(tcx + 18, tcy - 8, 9, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

        const ang = prog * Math.PI * 1.55 - Math.PI * 0.2;
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx + Math.cos(ang) * 64, tcy + 14 + Math.sin(ang) * 64, 0.36, ang + Math.PI / 2);
        this.drawDotLeaderCallout(ctx, 'NÁUFRAGO + SALVAVIDAS CIRCULAR', tcx + 18, 72, tcx + 18, tcy - 8, 'center', true);
        this.drawDotLeaderCallout(ctx, 'APROXIMACIÓN FINAL PROA AL VIENTO', tcx, h - 48, null, null, 'center', false, P.stbdGreen);

        // Right: Propeller Walk (Efecto Evolutivo Hélice Dextrógira) & MOB rules
        this.drawDetailedArchitecturalBoatPlan(ctx, rcx, rcy + 8, 0.78, -0.22, { showPortStbdGlow: true });
        this.drawDotLeaderCallout(ctx, '1° TIMÓN A LA BANDA DE CAÍDA (ALEJA LA HÉLICE)', rcx, 72, rcx + 26, rcy - 30, 'center', true);
        this.drawDotLeaderCallout(ctx, 'HÉLICE DEXTRÓGIRA ATRÁS: POPA CAE A BABOR', rcx - 30, h - 78, rcx - 20, rcy + 78, 'center', true, P.portRed);
        this.drawDotLeaderCallout(ctx, 'A 1 ESLORA: PUNTO MUERTO Y APAGAR MOTOR', rcx, h - 48, null, null, 'center', false, P.stbdGreen);
        break;
      }

      case 'unit_charts_coords_3d': {
        // Left: Terrestrial Globe Blueprint with Parallels (Latitud) & Meridians (Longitud)
        ctx.fillStyle = P.hullIvory;
        ctx.strokeStyle = P.navyInk;
        ctx.lineWidth = 2.2;
        ctx.beginPath(); ctx.arc(tcx, tcy, 78, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        [-44, -22, 0, 22, 44].forEach(dy => {
          const hw = Math.sqrt(Math.max(0, 78 * 78 - dy * dy));
          ctx.strokeStyle = dy === 0 ? P.amberOrange : P.navyInk;
          ctx.lineWidth = dy === 0 ? 2.4 : 1.2;
          ctx.beginPath(); ctx.moveTo(tcx - hw, tcy + dy); ctx.lineTo(tcx + hw, tcy + dy); ctx.stroke();
        });
        ctx.strokeStyle = P.seaBlue;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.ellipse(tcx, tcy, 30, 78, 0, 0, Math.PI * 2); ctx.stroke();
        this.drawDotLeaderCallout(ctx, 'ECUADOR (LAT 0°)', tcx - 52, tcy - 18, tcx - 30, tcy, 'center', true);
        this.drawDotLeaderCallout(ctx, 'MERIDIANO GREENWICH (LON 0°)', tcx, h - 48, tcx, tcy + 65, 'center', false);

        // Right: Mercator Nautical Chart Blueprint with Vertical Latitude Scale (1' = 1 MN)
        ctx.fillStyle = P.hullIvory;
        ctx.strokeStyle = P.navyInk;
        ctx.lineWidth = 2.2;
        ctx.fillRect(rx + 36, 68, rw - 72, h - 118);
        ctx.strokeRect(rx + 36, 68, rw - 72, h - 118);
        for (let my = 68; my < h - 50; my += 22) {
          ctx.fillStyle = (Math.floor(my / 22) % 2 === 0) ? P.navyInk : P.hullIvory;
          ctx.fillRect(rx + 36, my, 10, 22);
          ctx.strokeRect(rx + 36, my, 10, 22);
        }
        this.drawDetailedArchitecturalBoatPlan(ctx, rcx + 15, rcy + 10, 0.42, 0.55);
        this.drawDotLeaderCallout(ctx, 'ESCALA VERTICAL DE LATITUDES: 1\' = 1 MILLA NÁUTICA (1.852m)', rcx + 10, 92, rx + 41, 134, 'center', true);
        this.drawDotLeaderCallout(ctx, 'PROYECCIÓN MERCATOR: MERIDIANOS PARALELOS Y RUMBO LOXODRÓMICO', rcx, h - 48, null, null, 'center', false);
        break;
      }

      case 'unit_compass_tides_3d': {
        // Left: 3 Norths Blueprint (Norte Verdadero, Norte Magnético, Norte Compás)
        ctx.fillStyle = P.hullIvory;
        ctx.strokeStyle = P.navyInk;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(tcx, tcy, 76, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        const drawNorthAxis = (deg, col) => {
          const rad = (deg - 90) * (Math.PI / 180);
          ctx.strokeStyle = col; ctx.lineWidth = 2.6;
          ctx.beginPath(); ctx.moveTo(tcx, tcy); ctx.lineTo(tcx + Math.cos(rad) * 70, tcy + Math.sin(rad) * 70); ctx.stroke();
        };
        drawNorthAxis(0, P.navyInk);
        drawNorthAxis(-22, P.seaBlue);
        drawNorthAxis(-10, P.amberOrange);
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, tcy, 0.38, 0.4);
        this.drawDotLeaderCallout(ctx, 'NORTE VERDADERO (Nv) / MAGNÉTICO (Nm) / COMPÁS (Nc)', tcx, 70, tcx, tcy - 70, 'center', true);
        this.drawDotLeaderCallout(ctx, 'Vt = Dm + d  |  Rv = Rc + Vt  |  Rc = Rv - Vt', tcx, h - 48, null, null, 'center', true);

        // Right: Side-Elevation Sounding & Tide Diagram (PRS, Marea, Calado, Agua Bajo Quilla)
        this.drawDetailedSideProfileBlueprint(ctx, rcx, h * 0.52, 0.92, { withRig: false, withKeel: true });
        this.drawDotLeaderCallout(ctx, 'CALADO DEL BUQUE (OBRA VIVA)', rcx - 45, 78, rcx, h * 0.52 + 25, 'center', true);
        this.drawDotLeaderCallout(ctx, 'PROFUNDIDAD REAL = SONDAJE CARTA (PRS) + ALTURA DE MAREA', rcx, h - 78, null, null, 'center', false, P.stbdGreen);
        this.drawDotLeaderCallout(ctx, 'MARGEN BAJO QUILLA = PROFUNDIDAD REAL - CALADO', rcx, h - 48, null, null, 'center', true);
        break;
      }

      case 'unit_plotting_fix_3d': {
        // Left: Enfilación + Marcaciones Simultáneas en Carta Náutica
        ctx.strokeStyle = P.stbdGreen;
        ctx.lineWidth = 2.4;
        ctx.beginPath(); ctx.moveTo(42, 78); ctx.lineTo(tcx + 38, tcy + 36); ctx.stroke();
        ctx.strokeStyle = P.amberOrange;
        ctx.setLineDash([5, 3]);
        ctx.beginPath(); ctx.moveTo(midX - 42, 82); ctx.lineTo(tcx - 20, tcy + 48); ctx.stroke();
        ctx.setLineDash([]);

        this.drawDetailedArchitecturalBoatPlan(ctx, tcx + 16, tcy + 20, 0.42, -0.35);
        this.drawDotLeaderCallout(ctx, 'ENFILACIÓN DE 2 BALIZAS (SIN ERROR DE COMPÁS)', tcx - 10, 70, 65, 92, 'center', true, P.stbdGreen);
        this.drawDotLeaderCallout(ctx, 'PUNTO OBSERVADO POR CRUCE DE MARCACIONES', tcx, h - 48, tcx + 16, tcy + 20, 'center', true);

        // Right: Río de la Plata Navigation & Pínula Formula
        this.drawDetailedArchitecturalBoatPlan(ctx, rcx, rcy + 10, 0.72, 0, { showPortStbdGlow: true });
        this.drawDotLeaderCallout(ctx, 'MARCACIÓN VERDADERA: Mv = Mc + Vt', rcx, 74, rcx, rcy - 40, 'center', true);
        this.drawDotLeaderCallout(ctx, 'DESDE EL FARO SE TRAZA LA OPUESTA (Mv ± 180°)', rcx, h - 78, null, null, 'center', false);
        this.drawDotLeaderCallout(ctx, 'BANCOS RÍO DE LA PLATA: PLAYA HONDA, ORTIZ, CUIRASSIER', rcx, h - 48, null, null, 'center', true);
        break;
      }

      case 'unit_sailboat_rig_3d': {
        // Left: Top-down Velero showing CV (Centro Vélico) vs CRL (Centro de Resistencia Lateral)
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, tcy + 6, 0.88, 0, { sailBoomSide: 1, showPortStbdGlow: true });
        this.drawDotLeaderCallout(ctx, 'CRL (QUILLOTE / ORZA)', tcx - 58, tcy - 18, tcx, tcy - 8, 'left', false, P.stbdGreen);
        this.drawDotLeaderCallout(ctx, 'CV (CENTRO VÉLICO A POPA -> BARCO ARDIENTE)', tcx, h - 48, tcx + 10, tcy + 18, 'center', true);

        // Right: Side-elevation Sailboat Blueprint with Standing & Running Rigging callouts
        this.drawDetailedSideProfileBlueprint(ctx, rcx, h * 0.60, 1.0, { withRig: true, withKeel: true });
        this.drawDotLeaderCallout(ctx, 'ESTAY PROEL Y FOQUE', rcx + 68, 86, rcx + 55, h * 0.60 - 75, 'center', true);
        this.drawDotLeaderCallout(ctx, 'VELA MAYOR Y BOTAVARA', rcx - 66, 112, rcx - 32, h * 0.60 - 65, 'center', false);
        this.drawDotLeaderCallout(ctx, 'QUILLOTE Y TIMÓN (RESISTENCIA LATERAL)', rcx, h - 48, rcx, h * 0.60 + 40, 'center', true);
        break;
      }

      case 'unit_sail_maneuvers_3d': {
        // Left: Rosa de los Vientos a Vela (Zona Muerta ±45°, Ceñida, Través, Largo, Aleta, Popa)
        ctx.save();
        ctx.translate(tcx, tcy + 8);
        ctx.fillStyle = 'rgba(217, 67, 54, 0.28)';
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 82, -Math.PI * 0.75, -Math.PI * 0.25); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = P.navyInk; ctx.lineWidth = 1.8;
        ctx.beginPath(); ctx.arc(0, 0, 82, 0, Math.PI * 2); ctx.stroke();
        ctx.restore();

        this.drawDetailedArchitecturalBoatPlan(ctx, tcx + 52, tcy - 22, 0.34, 0.78, { sailBoomSide: -1 });
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx + 64, tcy + 26, 0.34, 1.57, { sailBoomSide: -1 });
        this.drawDotLeaderCallout(ctx, 'ZONA MUERTA (±45° NO FLAMEA)', tcx, 68, tcx, tcy - 35, 'center', true, P.portRed);
        this.drawDotLeaderCallout(ctx, 'CEÑIDA (45°) -> TRAVÉS (90°) -> LARGO -> POPA', tcx, h - 48, null, null, 'center', false, P.stbdGreen);

        // Right: Virar por Avante vs. Trasluchar vs. Ponerse a la Capa
        this.drawDetailedArchitecturalBoatPlan(ctx, rcx - 56, rcy + 6, 0.50, -0.45, { sailBoomSide: 1 });
        this.drawDetailedArchitecturalBoatPlan(ctx, rcx + 56, rcy + 6, 0.50, 0.45, { sailBoomSide: -1 });
        this.drawDotLeaderCallout(ctx, 'VIRAR POR AVANTE: PASAR LA PROA POR EL VIENTO', rcx, 72, rcx - 56, rcy - 35, 'center', true, P.stbdGreen);
        this.drawDotLeaderCallout(ctx, 'TRASLUCHAR: PASAR LA POPA (CONTROLAR BOTAVARA)', rcx, h - 78, rcx + 56, rcy + 40, 'center', true);
        this.drawDotLeaderCallout(ctx, 'A LA CAPA: FOQUE ACUARTELADO A BARLOVENTO + TIMÓN A LA ORZA', rcx, h - 48, null, null, 'center', false);
        break;
      }

      case 'unit_weather_pampero_3d': {
        // Left: Southern Hemisphere Cyclonic (Clockwise) & Anticyclonic (Counterclockwise) Isobars
        ctx.fillStyle = P.hullIvory;
        ctx.strokeStyle = P.portRed; ctx.lineWidth = 2.2;
        ctx.beginPath(); ctx.arc(tcx - 52, tcy, 40, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.strokeStyle = P.seaBlue;
        ctx.beginPath(); ctx.arc(tcx + 52, tcy, 40, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

        this.drawDotLeaderCallout(ctx, 'BAJA PRESIÓN (CICLÓN): GIRA HORARIO (HS)', tcx - 35, 72, tcx - 52, tcy - 20, 'center', true, P.portRed);
        this.drawDotLeaderCallout(ctx, 'ALTA (ANTICICLÓN): GIRA ANTIHORARIO (HS)', tcx + 35, h - 48, tcx + 52, tcy + 20, 'center', false);

        // Right: Pampero (SW) vs Sudestada (SE) on Yacht Profile
        this.drawDetailedSideProfileBlueprint(ctx, rcx, h * 0.56, 0.92, { withRig: true });
        this.drawDotLeaderCallout(ctx, 'PAMPERO (SW): NUBE CIGARRO, RÁFAGAS Y BAJANTE', rcx, 74, null, null, 'center', true);
        this.drawDotLeaderCallout(ctx, 'SUDESTADA (SE): TEMPORAL LARGO, LLUVIA Y CRECIDA', rcx, 118, null, null, 'center', true, P.portRed);
        this.drawDotLeaderCallout(ctx, 'BARÓMETRO: CAÍDA > 1 hPa/HORA = TEMPORAL INMINENTE', rcx, h - 48, null, null, 'center', false);
        break;
      }

      case 'unit_lighthouse_range_3d': {
        // Left: Earth Curvature & Geographical Range Formula Dg = 2.08 * (sqrt(H) + sqrt(h))
        ctx.strokeStyle = P.navyInk; ctx.lineWidth = 2.2;
        ctx.beginPath(); ctx.arc(tcx, h + 58, 162, Math.PI * 1.15, Math.PI * 1.85); ctx.stroke();
        // Lighthouse tower blueprint
        ctx.fillStyle = P.hullIvory;
        ctx.fillRect(tcx - 82, 92, 14, 48);
        ctx.strokeRect(tcx - 82, 92, 14, 48);
        ctx.strokeStyle = P.amberOrange; ctx.lineWidth = 2; ctx.setLineDash([5, 3]);
        ctx.beginPath(); ctx.moveTo(tcx - 75, 92); ctx.lineTo(tcx + 76, 128); ctx.stroke();
        ctx.setLineDash([]);
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx + 76, 134, 0.28, -Math.PI / 2);

        this.drawDotLeaderCallout(ctx, 'ALCANCE GEOGRÁFICO: Dg = 2,08 × (√H + √h)', tcx, 68, tcx, 110, 'center', true);
        this.drawDotLeaderCallout(ctx, 'COMPARAR SIEMPRE CON EL ALCANCE LUMINOSO (LISTA DE FAROS)', tcx, h - 48, null, null, 'center', false);

        // Right: Compass Compensation (Hierros Duros / Dulces & Curva de Desvíos)
        this.drawDetailedArchitecturalBoatPlan(ctx, rcx, rcy + 8, 0.78, 0);
        this.drawDotLeaderCallout(ctx, 'COMPENSACIÓN: IMANES LONGITUDINALES, TRANSVERSALES Y ESFERAS', rcx, 74, rcx, rcy - 10, 'center', true);
        this.drawDotLeaderCallout(ctx, 'TABLA DE DESVÍOS RESIDUALES SEGÚN EL RUMBO DEL BARCO', rcx, h - 48, null, null, 'center', false, P.stbdGreen);
        break;
      }

      case 'unit_tides_bridges_3d': {
        // Left: Sinusoidal Tide Curve (Rule of Twelfths: 1/12, 2/12, 3/12, 3/12, 2/12, 1/12)
        ctx.strokeStyle = P.navyInk; ctx.lineWidth = 2.6;
        ctx.beginPath();
        for (let i = 0; i <= 60; i++) {
          const px = 28 + (i / 60) * (midX - 56);
          const py = tcy + 40 - Math.sin((i / 60) * Math.PI * 0.5) * 84;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
        this.drawDotLeaderCallout(ctx, 'REGLA DE LOS DUODÉCIMOS: 1 - 2 - 3 - 3 - 2 - 1 DOCEAVOS', tcx, 70, tcx, tcy - 12, 'center', true);
        this.drawDotLeaderCallout(ctx, 'EN LAS HORAS 3° Y 4° VARÍA EL 50% DE LA AMPLITUD', tcx, h - 48, null, null, 'center', false);

        // Right: Sailboat under Bridge Blueprint (Air Draft vs Under-Keel Clearance)
        ctx.fillStyle = P.navyInk;
        ctx.fillRect(rx + 24, 68, rw - 48, 9);
        this.drawDetailedSideProfileBlueprint(ctx, rcx, h * 0.62, 0.86, { withRig: true, withKeel: true });
        this.drawDotLeaderCallout(ctx, 'ARRIBA: GÁLIBO DEL PUENTE vs. (MAREA + ALTURA MÁSTIL)', rcx, 94, rcx + 10, h * 0.62 - 125, 'center', true);
        this.drawDotLeaderCallout(ctx, 'ABAJO: (SONDA DE CARTA + MAREA) - CALADO = AGUA BAJO QUILLA', rcx, h - 48, rcx, h * 0.62 + 45, 'center', true, P.stbdGreen);
        break;
      }

      case 'unit_current_triangle_3d': {
        // Left: Vector Triangle of Current (1 Hour Plot on Chart)
        const p0 = { x: 48, y: h - 74 };
        const p1 = { x: tcx + 16, y: 88 };
        const p2 = { x: midX - 42, y: 136 };

        ctx.strokeStyle = P.navyInk; ctx.lineWidth = 2.4;
        ctx.beginPath(); ctx.moveTo(p0.x, p0.y); ctx.lineTo(p1.x, p1.y); ctx.stroke();
        ctx.strokeStyle = P.amberOrange; ctx.lineWidth = 2.4;
        ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
        ctx.strokeStyle = P.stbdGreen; ctx.lineWidth = 2.8;
        ctx.beginPath(); ctx.moveTo(p0.x, p0.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();

        this.drawDotLeaderCallout(ctx, 'VECTOR PROPIO (Rv / Vp)', tcx - 42, 122, (p0.x + p1.x) / 2, (p0.y + p1.y) / 2, 'center', false);
        this.drawDotLeaderCallout(ctx, 'CORRIENTE (Rc / Vc)', tcx + 55, 82, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2, 'center', true);
        this.drawDotLeaderCallout(ctx, 'VECTOR EFECTIVO (Re / Ve SOBRE EL FONDO)', tcx, h - 48, (p0.x + p2.x) / 2, (p0.y + p2.y) / 2, 'center', false, P.stbdGreen);

        // Right: Leeway (Abatimiento) & 3 Current Problems
        this.drawDetailedArchitecturalBoatPlan(ctx, rcx, rcy + 8, 0.76, -0.25, { sailBoomSide: 1, showPortStbdGlow: true });
        this.drawDotLeaderCallout(ctx, 'ABATIMIENTO: EMPUJE LATERAL DEL VIENTO HACIA SOTAVENTO', rcx, 74, rcx, rcy - 30, 'center', true);
        this.drawDotLeaderCallout(ctx, 'ORZAR A BARLOVENTO PARA COMPENSAR EL ABATIMIENTO', rcx, h - 48, null, null, 'center', false, P.stbdGreen);
        break;
      }

      case 'unit_anchoring_two_3d': {
        // Left: Fondeo a Barbas de Gato (2 anchors at 90°-120°)
        ctx.strokeStyle = P.amberOrange; ctx.lineWidth = 2.2;
        ctx.beginPath(); ctx.moveTo(tcx, tcy - 12); ctx.lineTo(tcx - 68, 84); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(tcx, tcy - 12); ctx.lineTo(tcx + 68, 84); ctx.stroke();
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, tcy + 32, 0.52, 0);
        this.drawDotLeaderCallout(ctx, 'BARBAS DE GATO: 2 ANCLAS POR PROA A 90° - 120°', tcx, 68, tcx - 68, 84, 'center', true);
        this.drawDotLeaderCallout(ctx, 'REDUCE EL RADIO DE BORNEO EN TENEDEROS ANGOSTOS', tcx, h - 48, null, null, 'center', false, P.stbdGreen);

        // Right: Engalgar (Tandem Anchors) & Scope (5x to 7x depth)
        this.drawDetailedSideProfileBlueprint(ctx, rcx + 45, h * 0.54, 0.82, { withRig: false });
        ctx.strokeStyle = P.amberOrange; ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.moveTo(rcx + 115, h * 0.54 - 28);
        ctx.quadraticCurveTo(rcx - 10, h - 55, rx + 35, h - 62);
        ctx.stroke();
        this.drawDotLeaderCallout(ctx, 'ENGALGAR: 2 ANCLAS EN SERIE SOBRE LA MISMA CADENA', rcx, 74, rx + 55, h - 62, 'center', true);
        this.drawDotLeaderCallout(ctx, 'FILAR DE 5 A 7 VECES LA PROFUNDIDAD TOTAL (SONDA + MAREA)', rcx, h - 48, null, null, 'center', false);
        break;
      }

      case 'unit_sar_stability_3d': {
        // Left: IAMSAR Expanding Square Pattern
        ctx.strokeStyle = P.navyInk; ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(tcx, tcy);
        ctx.lineTo(tcx, tcy - 22);
        ctx.lineTo(tcx + 22, tcy - 22);
        ctx.lineTo(tcx + 22, tcy + 22);
        ctx.lineTo(tcx - 22, tcy + 22);
        ctx.lineTo(tcx - 22, tcy - 44);
        ctx.lineTo(tcx + 44, tcy - 44);
        ctx.lineTo(tcx + 44, tcy + 44);
        ctx.stroke();
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx + 44, tcy + 44, 0.28, Math.PI);
        this.drawDotLeaderCallout(ctx, 'PATRÓN SAR: CUADRADO EXPANDIDO DESDE EL DATUM', tcx, 70, tcx, tcy, 'center', true);
        this.drawDotLeaderCallout(ctx, 'OTROS PATRONES IAMSAR: POR SECTORES Y CALLES PARALELAS', tcx, h - 48, null, null, 'center', false);

        // Right: Free Surface Effect & Liferaft Hydrostatic Release
        this.drawDetailedSideProfileBlueprint(ctx, rcx, h * 0.56, 0.90, { withRig: false, withKeel: true });
        this.drawDotLeaderCallout(ctx, 'SUPERFICIE LIBRE EN SENTINA: DESPLAZA "G" Y RESTA ESTABILIDAD', rcx, 76, rcx, h * 0.56 + 10, 'center', true, P.portRed);
        this.drawDotLeaderCallout(ctx, 'BALSA SALVAVIDAS: VÁLVULA DE ZAFA HIDROSTÁTICA (1,5 A 4 m)', rcx, h - 48, rcx - 40, h * 0.56 - 30, 'center', true);
        break;
      }

      case 'unit_celestial_sphere_3d': {
        // Left: Celestial Sphere & Astronomical Triangle P-Z-A
        ctx.fillStyle = P.hullIvory;
        ctx.strokeStyle = P.navyInk; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(tcx, tcy, 78, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.strokeStyle = P.amberOrange; ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.moveTo(tcx, tcy - 58); // P
        ctx.lineTo(tcx - 52, tcy + 34); // Z
        ctx.lineTo(tcx + 54, tcy + 26); // A
        ctx.closePath();
        ctx.stroke();
        this.drawDotLeaderCallout(ctx, 'POLO ELEVADO (P)', tcx, 66, tcx, tcy - 58, 'center', true);
        this.drawDotLeaderCallout(ctx, 'CENIT (Z) Y ASTRO OBSERVADO (A)', tcx, h - 48, tcx + 54, tcy + 26, 'center', true);

        // Right: Nautical Almanac Workflow
        const steps = [
          '1. CRONÓMETRO UTC -> ENTRAR AL ALMANAQUE NÁUTICO',
          '2. OBTENER ÁNGULO HORARIO EN GREENWICH (AHG) Y DECLINACIÓN (d)',
          '3. ÁNGULO HORARIO LOCAL: AHL = AHG - LONGITUD OESTE',
          '4. RESOLVER TRIÁNGULO P-Z-A: HALLAR ALTURA CALCULADA (Ac) Y ACIMUT (Zv)'
        ];
        steps.forEach((s, i) => {
          this.drawDotLeaderCallout(ctx, s, rcx, 82 + i * 48, null, null, 'center', i === 0 || i === 2);
        });
        break;
      }

      case 'unit_sextant_saint_hilaire_3d': {
        // Left: Marcq Saint-Hilaire Line of Position Plot
        ctx.strokeStyle = P.amberOrange; ctx.lineWidth = 2.4;
        ctx.beginPath(); ctx.moveTo(tcx - 42, tcy + 28); ctx.lineTo(tcx + 38, tcy - 28); ctx.stroke();
        // Perpendicular Line of Position (Recta de Altura)
        ctx.strokeStyle = P.stbdGreen; ctx.lineWidth = 3.2;
        ctx.beginPath(); ctx.moveTo(tcx + 8, tcy - 68); ctx.lineTo(tcx + 68, tcy + 14); ctx.stroke();
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx + 38, tcy - 28, 0.30, 0.6);

        this.drawDotLeaderCallout(ctx, 'PUNTO ESTIMADO (Pe) Y DETERMINANTE Δa = Av - Ac', tcx, 70, tcx - 42, tcy + 28, 'center', true);
        this.drawDotLeaderCallout(ctx, 'RECTA DE ALTURA PERPENDICULAR (90°) AL ACIMUT Zv', tcx, h - 48, tcx + 38, tcy - 28, 'center', false, P.stbdGreen);

        // Right: Sextant Reduction & "Más Cerca / Menos Lejos"
        const rules = [
          'ALTURA APARENTE: Aa = Ai ± Error Índice (Ei) - Depresión Horizonte (D)',
          'ALTURA VERDADERA: Av = Aa - Refracción (R) + Semidiámetro (SD) + Paralaje',
          'DETERMINANTE: Δa = Av - Ac (Cada 1\' de arco = 1 Milla Náutica)',
          'SI Av > Ac -> MÁS CERCA DEL ASTRO | SI Av < Ac -> EN SENTIDO OPUESTO'
        ];
        rules.forEach((r, i) => {
          this.drawDotLeaderCallout(ctx, r, rcx, 82 + i * 48, null, null, 'center', i >= 2);
        });
        break;
      }

      case 'unit_radar_plotting_3d': {
        // Left: Radar Maneuvering Board (Rosa de Maniobra: e - r - m & CPA)
        ctx.fillStyle = P.hullIvory;
        ctx.strokeStyle = P.navyInk; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(tcx, tcy, 80, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        [28, 54].forEach(r => {
          ctx.strokeStyle = 'rgba(22, 41, 66, 0.25)';
          ctx.beginPath(); ctx.arc(tcx, tcy, r, 0, Math.PI * 2); ctx.stroke();
        });
        // Relative Motion Line M1 -> M2 -> M3
        ctx.strokeStyle = P.amberOrange; ctx.lineWidth = 2.6;
        ctx.beginPath(); ctx.moveTo(tcx + 62, tcy - 44); ctx.lineTo(tcx - 46, tcy + 20); ctx.stroke();
        this.drawDotLeaderCallout(ctx, 'LÍNEA DE MOVIMIENTO RELATIVO (M1 -> M2 -> M3)', tcx, 68, tcx + 20, tcy - 20, 'center', true);
        this.drawDotLeaderCallout(ctx, 'CPA = DISTANCIA MÍNIMA DE PASO AL CENTRO', tcx, h - 48, tcx, tcy, 'center', false, P.stbdGreen);

        // Right: Radar Triangle (e-r-m) & Rule 19d
        const rNotes = [
          'VECTOR e -> r: RUMBO Y VELOCIDAD DE NUESTRO BUQUE',
          'VECTOR r -> m: MOVIMIENTO RELATIVO MEDIDO EN EL RADAR',
          'VECTOR e -> m: RUMBO Y VELOCIDAD VERDADERA DEL OTRO BUQUE',
          'REGLA 19d RIPA: EVITAR CAER A BABOR PARA BUQUE A PROA DEL TRAVÉS'
        ];
        rNotes.forEach((n, i) => {
          this.drawDotLeaderCallout(ctx, n, rcx, 82 + i * 48, null, null, 'center', i === 3);
        });
        break;
      }

      case 'unit_gz_stability_3d': {
        // Left: Heeled Hull Cross-Section (K, B, G, M and Righting Arm GZ)
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, tcy + 6, 0.76, 0.32, { sailBoomSide: 1 });
        this.drawDotLeaderCallout(ctx, 'METACENTRO (M) ARRIBA DE GRAVEDAD (G) = ESTABLE', tcx, 70, tcx, tcy - 20, 'center', true, P.stbdGreen);
        this.drawDotLeaderCallout(ctx, 'BRAZO ADRIZANTE: GZ = GM × sen(θ)', tcx, h - 48, tcx, tcy + 30, 'center', true);

        // Right: GZ Curve & Heavy Weather Tactics
        this.drawDetailedSideProfileBlueprint(ctx, rcx, h * 0.56, 0.94, { withRig: true, withKeel: true });
        this.drawDotLeaderCallout(ctx, 'ÁNGULO LÍMITE DE ESTABILIDAD POSITIVA (AVS > 120°)', rcx, 74, rcx, h * 0.56 - 60, 'center', true);
        this.drawDotLeaderCallout(ctx, 'TEMPORAL EN ALTURA: CAPA O CORRER CON ANCLA DE MAR / DROGUE', rcx, h - 48, rcx, h * 0.56 + 40, 'center', false);
        break;
      }

      case 'unit_gmdss_epirb_3d': {
        this.drawDetailedSideProfileBlueprint(ctx, tcx, h * 0.56, 0.90, { withRig: true });
        this.drawDotLeaderCallout(ctx, 'ANTENA VHF (TOPE DE PALO: 25 - 30 MN)', tcx, 70, tcx + 10, h * 0.56 - 130, 'center', false);
        this.drawDotLeaderCallout(ctx, 'ESTAY AISLADO BLU / HF (ALCANCE IONOSFÉRICO)', tcx, 114, tcx - 35, h * 0.56 - 80, 'center', true);
        this.drawDotLeaderCallout(ctx, 'EPIRB 406 MHz + SART RADAR 9 GHz EN POPA', tcx, h - 48, tcx - 60, h * 0.56 - 25, 'center', true, P.portRed);

        const gmdss = [
          'ÁREA MARÍTIMA A1 (25-30 MN): VHF Canal 70 DSC + Canal 16',
          'ÁREA MARÍTIMA A2 (150 MN): Onda Media MF 2182 / 2187,5 kHz DSC',
          'ÁREA MARÍTIMA A3 (OCEÁNICA): BLU/HF (4, 6, 8, 12, 16 MHz) + Inmarsat',
          'RADIOBALIZA EPIRB 406 MHz: Satélites COSPAS-SARSAT con MMSI y GPS'
        ];
        gmdss.forEach((g, i) => {
          this.drawDotLeaderCallout(ctx, g, rcx, 82 + i * 48, null, null, 'center', i >= 2);
        });
        break;
      }

      case 'unit_coriolis_buysballot_3d': {
        // Left: Buys-Ballot Law Blueprint (Skipper facing Wind -> Low Pressure on Left in Southern Hemisphere)
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx + 28, tcy + 8, 0.68, 0, { showPortStbdGlow: true });
        this.drawDotLeaderCallout(ctx, 'DE CARA AL VIENTO VERDADERO (HS)', tcx + 28, 70, tcx + 28, tcy - 55, 'center', false);
        this.drawDotLeaderCallout(ctx, 'CENTRO DE BAJA PRESIÓN A TU IZQUIERDA Y ATRÁS', tcx - 20, h - 48, tcx - 52, tcy + 25, 'center', true, P.portRed);

        const cor = [
          'FUERZA DE CORIOLIS: Desvía a la IZQUIERDA en el Hemisferio Sur',
          '0° ECUADOR: Calmas Ecuatoriales (Doldrums / ZCIT)',
          '0° A 30° SUR: Vientos Alisios regulares del Sudeste (SE)',
          '40° A 60° SUR: Vientos del Oeste (Westerlies / Roaring Forties)'
        ];
        cor.forEach((c, i) => {
          this.drawDotLeaderCallout(ctx, c, rcx, 82 + i * 48, null, null, 'center', i === 0 || i === 2);
        });
        break;
      }

      case 'unit_cyclone_semicircles_3d': {
        // Left: Tropical Cyclone Semicircles in Southern Hemisphere (Left = Dangerous, Right = Navigable)
        ctx.fillStyle = 'rgba(217, 67, 54, 0.30)';
        ctx.beginPath(); ctx.moveTo(tcx, tcy); ctx.arc(tcx, tcy, 74, Math.PI * 0.5, Math.PI * 1.5); ctx.closePath(); ctx.fill();
        ctx.fillStyle = 'rgba(38, 155, 86, 0.30)';
        ctx.beginPath(); ctx.moveTo(tcx, tcy); ctx.arc(tcx, tcy, 74, -Math.PI * 0.5, Math.PI * 0.5); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = P.navyInk; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(tcx, tcy, 74, 0, Math.PI * 2); ctx.stroke();

        this.drawDetailedArchitecturalBoatPlan(ctx, tcx - 42, tcy, 0.32, -0.5, { sailBoomSide: 1 });
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx + 42, tcy, 0.32, 2.2, { sailBoomSide: -1 });
        this.drawDotLeaderCallout(ctx, 'SEMICÍRCULO IZQUIERDO: PELIGROSO (HS)', tcx - 25, 70, tcx - 42, tcy - 20, 'center', true, P.portRed);
        this.drawDotLeaderCallout(ctx, 'SEMICÍRCULO DERECHO: NAVEGABLE (HS)', tcx + 25, h - 48, tcx + 42, tcy + 20, 'center', false, P.stbdGreen);

        const cyc = [
          'HEMISFERIO SUR — SEMICÍRCULO PELIGROSO: Ceñir con amuras a BABOR',
          'HEMISFERIO SUR — SEMICÍRCULO NAVEGABLE: Correr con viento en aleta de BABOR',
          'HEMISFERIO NORTE: Se invierten (Peligroso = Derecho / Navegable = Izquierdo)',
          'PILOT CHARTS: Cartas mensuales de vientos, corrientes y rutas oceánicas'
        ];
        cyc.forEach((c, i) => {
          this.drawDotLeaderCallout(ctx, c, rcx, 82 + i * 48, null, null, 'center', i < 2);
        });
        break;
      }

      default: {
        this.drawDetailedArchitecturalBoatPlan(ctx, tcx, tcy + 4, 0.85, 0, { showPortStbdGlow: true });
        this.drawDetailedSideProfileBlueprint(ctx, rcx, h * 0.56, 0.95, { withRig: true, withKeel: true });
        break;
      }
    }

    // ========================================================================
    // EDITORIAL FRAME BORDERS & HEADERS (EXACT STYLE OF 1BrDc7dreR)
    // ========================================================================
    // Center technical divider line
    ctx.strokeStyle = P.navyInk;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(midX, 34);
    ctx.lineTo(midX, h - 32);
    ctx.stroke();

    // Top Editorial Header Bar on Warm Parchment
    ctx.fillStyle = P.parchmentMid;
    ctx.fillRect(0, 0, w, 34);
    ctx.strokeStyle = P.navyInk;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, 34); ctx.lineTo(w, 34); ctx.stroke();

    ctx.fillStyle = P.navyInk;
    ctx.font = '900 13.5px "Segoe UI", Impact, Arial Narrow, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('⚓ ' + (cfg.topTitle || sceneObj?.title || 'INFOGRAFÍA NÁUTICA PNA'), 14, 22);

    // Bottom Trick / Mnemonic Bar in Navy Ink + Safety Amber-Orange Text
    ctx.fillStyle = P.navyInk;
    ctx.fillRect(0, h - 32, w, 32);
    ctx.fillStyle = '#FFF7ED';
    ctx.font = 'bold 11.5px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('💡 ' + (cfg.trickBadge || 'REGLA CLAVE DE EXAMEN PNA'), w / 2, h - 11);

    // Outer Architectural Blueprint Border
    ctx.strokeStyle = P.navyInk;
    ctx.lineWidth = 3;
    ctx.strokeRect(1.5, 1.5, w - 3, h - 3);

    ctx.restore();
  }
};
