window.COURSE_PILOTO = {
  id: 'piloto',
  code: 'PNA-PIY-04',
  title: 'Piloto de Yate (Navegación de Altura, Oceánica y Astronómica)',
  shortTitle: 'Piloto de Yate',
  badge: 'Máxima Habilitación Deportiva PNA',
  propulsion: 'Vela, Motor y Vela-Motor (Navegación Oceánica y de Altura sin límite de alejamiento geográfico)',
  suggestedHours: '180 Horas Cátedra (Navegación III + Seguridad III + Meteorología + Legislación III)',
  scopeSummary: 'Es la máxima habilitación náutico deportiva otorgada por la Prefectura Naval Argentina. Capacita y habilita para el gobierno de embarcaciones deportivas en cualquier tipo de navegación (lacustre, fluvial, costera, marítima y oceánica de altura) sin límite de alejamiento de la costa, empleando navegación astronómica (sextante), radioeléctrica, satelital y meteorología sinóptica.',
  coevNotice: 'Programa Oficial de Examen para Piloto de Yate (Materias: Navegación III, Seguridad III, Meteorología y Legislación y Reglamentación III) - PNA.',
  subjects: [
    {
      id: 'piy-navegacion',
      title: 'Materia 1: Navegación III (Oceánica, Astronómica y Cinemática Radar)',
      propulsion: 'Vela, Motor y Vela-Motor',
      Modality: 'Teórico-Práctico (14 Unidades Oficiales)',
      objectivesGeneral: 'Dominar la navegación fuera de costa y oceánica mediante el trazado de derrotas ortodrómicas y mixtas, la navegación astronómica completa (empleo del sextante, almanaque náutico, tablas de cálculo rápido y rectas de altura de Marcq Saint-Hilaire) y la cinemática de radar.',
      objectivesSpecific: [
        '1. Trazar derrotas ortodrómicas en proyección Gnomónica y trasladarlas por puntos a la carta Mercator (economía de distancia, vértice y derrota mixta).',
        '2. Comprender la Esfera Celeste, los tres sistemas de coordenadas esféricas ortogonales y el Triángulo de Posición.',
        '3. Dominar la medición del tiempo (Tiempo Solar, Sidéreo, UTC, Cronómetro) y el manejo del Almanaque Náutico.',
        '4. Operar el Sextante, rectificar sus errores instrumentales, corregir alturas observadas y calcular rectas de altura (Método de Saint-Hilaire, Meridiana de Sol y corte de estrellas en crepúsculos).',
        '5. Analizar errores sistemáticos (bisectrices de altura, polígono de seguridad) y resolver ploteo cinemático en Radar (triángulo de velocidades, CPA/TCPA y maniobra evasiva).'
      ],
      units: [
        {
          id: 'piy-nav-u1',
          number: 'Unidades 1 a 5',
          title: 'Derrota Ortodrómica, Esfera Celeste, Coordenadas Uranográficas/Horarias y el Tiempo',
          isDemoOpen: true,
          videoSceneId: 'astronomia_triangulo_posicion',
          videoTitle: 'Video Explicativo IA (Español): Derrota Ortodrómica, Esfera Celeste y El Triángulo de Posición',
          summary: 'Revisión general y corrientes oceánicas. Traslado de derrota ortodrómica de carta Gnomónica a Mercator (vértice y derrota mixta). Esfera celeste, coordenadas horizontales, horarias y uranográficas, Triángulo de Posición, Tiempo Solar y Sidéreo.',
          beginnerContent: `
            <h4>🟢 Explicación Conceptual Clara: Cómo Navegar por los Océanos mirando el Cielo</h4>
            <h5>1. Ortodromia y Derrota Mixta en Travesías Oceánicas (Unidad 2)</h5>
            <p>Cuando cruzás un océano (por ejemplo, de Buenos Aires a Ciudad del Cabo), ir en línea recta en la carta Mercator (<em>Loxodromia</em>) suma cientos de millas de más. El camino más corto sobre la esfera es la <strong>Ortodromia</strong>:</p>
            <ol>
              <li>Trazás una línea recta entre salida y llegada en una <strong>Carta Gnomónica</strong> (donde toda recta es una ortodromia).</li>
              <li>Anotás las coordenadas (Latitud y Longitud) donde esa recta corta los meridianos cada $5^\\circ$ o $10^\\circ$ de longitud, y las pasás a tu <strong>Carta Mercator</strong>.</li>
              <li>Unís esos puntos con tramos rectos (<em>piernas loxodrómicas</em>), cambiando ligeramente de rumbo en cada punto.</li>
              <li><strong>¿Qué es la Derrota Mixta?</strong> Como la ortodromia se curva hacia el Polo (su punto más alto de latitud se llama <strong>Vértice</strong>), si esa curva te mete en latitudes muy altas llenas de hielos o temporales, fijás un <em>paralelo límite</em>: bajás por ortodromia hasta tocar ese paralelo, navegás sobre el paralelo y luego subís por ortodromia a destino.</li>
            </ol>
            <h5>2. La Idea Genial detrás de la Navegación Astronómica (Unidades 3 y 4)</h5>
            <p>Imaginá que en un instante exacto (medido al segundo con tu reloj UTC) el Sol o una estrella es como un foco colgado del cielo que ilumina perpendicularmente un punto exacto de la Tierra llamado <strong>Punto Astral (o Polo de Iluminación)</strong>:</p>
            <ul>
              <li>Si vos estuvieras parado exactamente en el Punto Astral, verías al astro justo arriba de tu cabeza (en tu <strong>Cenit</strong>, a $90^\\circ$ de altura sobre el horizonte).</li>
              <li>A medida que te alejás de ese punto sobre la esfera terrestre, el astro se ve más bajo respecto al horizonte. De hecho, <strong>cada minuto de arco ($1'$) que baja la altura del astro equivale a 1 Milla Náutica que estás alejado de su Punto Astral</strong>.</li>
            </ul>
            <h5>3. El Triángulo de Posición (Los 3 vértices que unen Tierra y Cielo)</h5>
            <p>En la esfera celeste formamos un triángulo esférico con tres vértices:</p>
            <ol>
              <li><strong>El Polo Elevado ($P$):</strong> El Polo Sur celeste (en nuestro hemisferio).</li>
              <li><strong>El Cenit del Observador ($Z$):</strong> Tu posición estimada proyectada verticalmente en el cielo.</li>
              <li><strong>El Astro ($A$):</strong> La posición del Sol, la Luna, un planeta o una estrella (obtenida del <strong>Almanaque Náutico</strong> a la hora exacta UTC).</li>
            </ol>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Los 3 Sistemas de Coordenadas Esféricas Celestes (Unidad 4)</h5>
            <ul>
              <li><strong>1° Coordenadas Horizontales (Locales del Observador - Medibles con Sextante y Compás):</strong>
                <ul>
                  <li><strong>Altura verdadera ($a$ o $Av$):</strong> Arco de vertical entre el horizonte racional y el astro ($0^\\circ$ a $90^\\circ$). Su complemento es la <strong>Distancia Cenital ($z = 90^\\circ - a$)</strong>.</li>
                  <li><strong>Acimut ($Z$):</strong> Arco de horizonte entre el Norte/Sur verdadero y el vertical del astro.</li>
                </ul>
              </li>
              <li><strong>2° Coordenadas Ecuatoriales Locales u Horarias (Puente de cálculo):</strong>
                <ul>
                  <li><strong>Declinación ($\\delta$):</strong> Arco de meridiano celeste entre el Ecuador Celeste y el astro ($N$ o $S$, análogo a la Latitud terrestre).</li>
                  <li><strong>Ángulo Horario Local ($AHL$):</strong> Arco de Ecuador Celeste medido hacia el Oeste de $0^\\circ$ a $360^\\circ$ desde el meridiano superior del observador hasta el meridiano del astro. (Para resolver el triángulo se usa el <strong>Ángulo en el Polo $P$</strong>, menor de $180^\\circ$ hacia el $E$ o $W$).</li>
                </ul>
              </li>
              <li><strong>3° Coordenadas Ecuatoriales Uranográficas / Almanaque (Unidad 5 y 6):</strong>
                <ul>
                  <li><strong>Ángulo Horario en Greenwich ($AHG$):</strong> Medido desde el meridiano de Greenwich hacia el Oeste ($0^\\circ$ a $360^\\circ$).</li>
                  <li><strong>Ángulo Sidéreo ($SHA$ o $AS$):</strong> Para las estrellas, arco medido hacia el Oeste desde el <strong>Primer Punto de Aries ($\\gamma$)</strong> hasta el meridiano de la estrella.</li>
                </ul>
              </li>
            </ul>
            <h5>2. Ecuaciones Fundamentales del Tiempo y del Ángulo Horario (Unidad 5)</h5>
            <ul>
              <li>Para el Sol, la Luna y los Planetas:
                $$AHL = AHG - \\omega_W \\quad (\\text{o } AHL = AHG + \\omega_E)$$
              </li>
              <li>Para una Estrella ($*$):
                $$AHL_* = AHG_\\gamma + SHA_* - \\omega_W$$
              </li>
            </ul>
          `,
          keyTakeaways: [
            'En una carta Gnomónica la Ortodromia es una línea recta; la Derrota Mixta combina dos arcos de ortodromia unidos por un paralelo límite.',
            'Los 3 vértices del Triángulo de Posición son: Polo Elevado (P), Cenit del Observador (Z) y Astro (A).',
            'Los 3 lados del Triángulo de Posición son: Colatitud (90° - φ), Distancia Polar (90° ± δ) y Distancia Cenital (90° - a).',
            'Para estrellas: AHL* = AHG de Aries + Ángulo Sidéreo (SHA*) - Longitud Oeste.'
          ]
        },
        {
          id: 'piy-nav-u6',
          number: 'Unidades 6 a 10',
          title: 'Almanaque Náutico, El Sextante, Corrección de Alturas, Tablas Rápidas e Identificación de Astros',
          isDemoOpen: false,
          videoSceneId: 'sextante_saint_hilaire',
          videoTitle: 'Video Explicativo IA (Español): Uso del Sextante, Corrección de Alturas (Ei, D, R, SD) y Almanaque Náutico',
          summary: 'Manejo del Almanaque Náutico (Sol, Aries, Luna, Planetas y crepúsculos). El Sextante: principio óptico, verificación de errores y Error de Índice. Correcciones de altura (Depresión, Refracción, Paralaje, Semidiámetro). Tablas HO-249/HO-229 y Rude Star Finder.',
          beginnerContent: `
            <h4>🟢 Explicación Paso a Paso: Cómo usar el Sextante y convertir tu medición en Altura Verdadera</h4>
            <h5>1. Cómo funciona el Sextante (Unidad 7)</h5>
            <p>El sextante es un instrumento óptico de alta precisión que mide el ángulo vertical entre el horizonte del mar y un astro (Sol, Luna, planeta o estrella) gracias a la <strong>ley de doble reflexión</strong> en dos espejos:</p>
            <ul>
              <li>Mirás por el anteojo hacia el horizonte del mar a través de la mitad transparente del <strong>espejo chico (de horizonte)</strong>.</li>
              <li>Movés el brazo (la <strong>alidada</strong>) sobre el arco graduado (<strong>limbo</strong>) hasta que la imagen del Sol reflejada en el <strong>espejo grande (de índice)</strong> baje y toque suavemente la línea del horizonte.</li>
              <li>Para asegurarte de que el sextante esté bien vertical, lo inclinás suavemente a izquierda y derecha (<em>"balancear el arco"</em>): el Sol describe una sonrisa y tenés que ajustar el tambor micrométrico para que la pancita inferior del Sol roce el horizonte. En ese instante exacto gritás <strong>"¡TOP!"</strong> y anotás la hora al segundo ($UTC$) y los grados y minutos del sextante (esa es tu <strong>Altura Instrumental $Ai$</strong>).</li>
            </ul>
            <h5>2. Las 5 Correcciones para pasar de Altura Instrumental ($Ai$) a Altura Verdadera ($Av$) (Unidad 8)</h5>
            <ol>
              <li><strong>Error de Índice del Sextante ($Ei$):</strong> Poniendo el sextante en $0^\\circ 00'$ y mirando el horizonte, si el horizonte se ve partido, los minutos que hay que corregir son el Error de Índice. Regla tradicional: <em>"Si está en el arco se resta ($-$); si está fuera del arco se suma ($+$)"</em>. Con eso obtenés la <strong>Altura Observada ($Ao = Ai \\pm Ei$)</strong>.</li>
              <li><strong>Depresión del Horizonte ($D$, siempre negativa $-$):</strong> Como tus ojos están a cierta altura sobre el agua ($h$), ves el horizonte aparente más abajo que el horizonte horizontal verdadero ($D \\approx -1,77' \\times \\sqrt{h_m}$).</li>
              <li><strong>Refracción Atmosférica ($R$, siempre negativa $-$):</strong> La atmósfera curva el rayo de luz haciendo que el astro parezca estar más alto de lo real.</li>
              <li><strong>Semidiámetro ($SD$):</strong> Como al Sol o la Luna le medimos el borde inferior (<em>limbo inferior</em>), hay que <strong>sumarle el radio del disco solar ($+SD \\approx +16'$)</strong> para llegar al centro del astro (si mediste el limbo superior, se resta). <em>Nota: las estrellas son puntos de luz, no tienen semidiámetro ni paralaje.</em></li>
              <li><strong>Paralaje en Altura ($P$, siempre positiva $+$):</strong> Corrección por observar desde la superficie de la Tierra y no desde su centro (muy pequeña en el Sol, pero enorme en la Luna por estar tan cerca de la Tierra).</li>
            </ol>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Los 4 Errores del Sextante y Orden de Rectificación (Unidad 7)</h5>
            <p>El navegante debe verificar y corregir los 3 errores mecánicos ajustables en este estricto orden:</p>
            <ol>
              <li><strong>1° Error de Perpendicularidad del Espejo Grande (Índice) respecto al plano del instrumento:</strong> Se verifica colocando la alidada hacia el centro del limbo ($\approx 45^\\circ$) y observando si el arco reflejado en el espejo grande continúa sin quiebre al arco visto directamente. Se corrige con el <strong>único tornillo del espejo grande</strong>.</li>
              <li><strong>2° Error de Lateralidad (Perpendicularidad del Espejo Chico respecto al plano del instrumento):</strong> Poniendo índice en $0^\\circ$, se apunta a una estrella o al horizonte e inclinando el sextante se verifica si las imágenes se desplazan lateralmente. Se corrige con el <strong>tornillo más alejado del bastidor en el espejo chico</strong>.</li>
              <li><strong>3° Error de Índice (Falta de paralelismo entre ambos espejos en $0^\\circ 00'$):</strong> Se corrige con el <strong>tornillo más cercano al bastidor en el espejo chico</strong>, o bien se mide su valor en minutos y se aplica algebraicamente como $Ei$.</li>
              <li><em>Error de excentricidad y de graduación/prismatismo:</em> No ajustables por el usuario (constan en el certificado de fábrica de la caja del sextante).</li>
            </ol>
            <h5>2. Cálculo de la Altura Calculada ($Ac$) y Acimut ($Z$) (Unidad 9)</h5>
            <p>Con la Latitud Estimada ($\\varphi_e$), la Declinación ($\\delta$) y el Ángulo en el Polo ($P$), se resuelve el triángulo esférico de posición mediante tablas de inspección (<strong>HO-249 / HO-229</strong>) o por trigonometría esférica (Teorema del Coseno):</p>
            $$\\sin(Ac) = \\sin(\\varphi_e)\\cdot\\sin(\\delta) + \\cos(\\varphi_e)\\cdot\\cos(\\delta)\\cdot\\cos(P)$$
            $$\\cos(Z) = \\frac{\\sin(\\delta) - \\sin(\\varphi_e)\\cdot\\sin(Ac)}{\\cos(\\varphi_e)\\cdot\\cos(Ac)}$$
          `,
          keyTakeaways: [
            'Orden de ajuste de los espejos del sextante: 1° Perpendicularidad espejo grande, 2° Lateralidad espejo chico, 3° Paralelismo (Error de Índice).',
            'Error de Índice: "En el arco se resta (-), fuera del arco se suma (+)".',
            'La Depresión aparente del horizonte (D) y la Refracción media (R) son SIEMPRE negativas (-).',
            'El momento ideal para observar estrellas es el Crepúsculo Náutico (Sol entre 6° y 12° bajo el horizonte), cuando se ven simultáneamente las estrellas de primera magnitud y la línea nítida del horizonte marino.'
          ]
        },
        {
          id: 'piy-nav-u11',
          number: 'Unidades 11 a 14',
          title: 'Recta de Altura de Saint-Hilaire, Meridiana de Sol, Bisectrices de Error y Cinemática de Radar',
          isDemoOpen: false,
          videoSceneId: 'cinematica_radar_saint_hilaire',
          videoTitle: 'Video Explicativo IA (Español): Trazado de la Recta Saint-Hilaire, Meridiana de Sol y Ploteo Cinemático Radar',
          summary: 'Método de Marcq Saint-Hilaire (Determinante Δa = Av - Ac, trazado y traslado de rectas). Latitud por altura meridiana del Sol. Bisectrices de altura y polígono de seguridad. Radiogoniómetro (Givry), GNSS y Cinemática de Radar (Triángulo de velocidades, CPA y TCPA).',
          beginnerContent: `
            <h4>🟢 Explicación Paso a Paso: Cómo trazar la Recta de Altura (Saint-Hilaire) y la Meridiana del Mediodía</h4>
            <h5>1. El Método de Marcq Saint-Hilaire en 4 Pasos (Unidad 11)</h5>
            <p>Una vez que tenés tu <strong>Altura Verdadera ($Av$, medida con el sextante y corregida)</strong> y tu <strong>Altura Calculada ($Ac$ y Acimut $Z_v$, calculados para tu Posición Estimada)</strong>, las comparás restándolas para obtener el <strong>Determinante ($\\Delta a$)</strong>:</p>
            $$\\Delta a = Av - Ac$$
            <ul>
              <li><strong>Regla de Oro "MÁS CERCA, MENOS LEJOS":</strong>
                <ul>
                  <li>Si $Av > Ac$ ($\\Delta a$ es <strong>POSITIVO $+$</strong>): Estás <strong>MÁS CERCA</strong> del astro que lo que creías. Desde tu Punto Estimado en la carta, medís los minutos de $\\Delta a$ (en millas náuticas) <strong>HACIA el Acimut del astro ($Z_v$)</strong>.</li>
                  <li>Si $Av < Ac$ ($\\Delta a$ es <strong>NEGATIVO $-$</strong>): Estás <strong>MÁS LEJOS</strong> del astro. Medís esas millas en sentido opuesto al Acimut ($Z_v + 180^\\circ$).</li>
                </ul>
              </li>
              <li>Por ese punto final (llamado <em>Punto Determinante</em>) trazás una línea perpendicular ($90^\\circ$) a la dirección del Acimut: ¡esa línea es tu <strong>Recta de Altura (Línea de Posición Astronómica)</strong>! Cruzando 2 o 3 rectas de estrellas (o trasladando la recta del Sol de la mañana hasta cruzarla con la del mediodía) tenés tu <strong>Punto Astronómico</strong> en medio del océano.</li>
            </ul>
            <h5>2. La Observación más Famosa de la Historia: La Meridiana del Sol al Mediodía</h5>
            <p>Cuando el Sol pasa exactamente por tu meridiano al mediodía solar verdadero (alcanza su altura máxima y está exactamente al Norte $000^\\circ$ o al Sur $180^\\circ$), el triángulo desaparece y podés obtener tu <strong>Latitud exacta en 10 segundos con una sola suma o resta</strong>:</p>
            <ol>
              <li>Restás $90^\\circ - Av$ para obtener la <strong>Distancia Cenital ($z = 90^\\circ - Av$)</strong>.</li>
              <li>Buscás en el Almanaque la <strong>Declinación del Sol ($\\delta$)</strong> a esa hora.</li>
              <li>Combinás $z$ y $\\delta$ (sumándolas si tienen igual signo o restándolas si tienen distinto signo) y obtenés directamente tu <strong>Latitud Verdadera ($\\varphi$)</strong>, que en la carta es un paralelo horizontal.</li>
            </ol>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Errores Sistemáticos y Bisectrices de Altura (Unidad 13)</h5>
            <ul>
              <li>Al cortar 3 rectas de altura de estrellas separadas aproximadamente $120^\\circ$ en acimut, los errores forman un <strong>triángulo de incertidumbre</strong> en la carta.</li>
              <li>Un <strong>error sistemático constante</strong> en las tres alturas (por ejemplo, una refracción anormal en el horizonte o un Error de Índice mal aplicado) desplaza las tres rectas paralelamente una misma cantidad $e$. Para eliminar geométricamente el error sistemático y hallar la posición verdadera se trazan las <strong>Bisectrices de Altura</strong> de los ángulos del triángulo (usando las bisectrices interiores si las 3 estrellas rodean los $360^\\circ$ del horizonte, o dos exteriores y una interior si las 3 estrellas están en un mismo semiplano $<180^\\circ$).</li>
            </ul>
            <h5>2. Cinemática Naval en Pantalla de Radar (Ploteo en Movimiento Relativo - Unidad 14)</h5>
            <p>Al observar un blanco en el radar en dos instantes ($t_1$, posición $O$ y $t_2$, posición $M$, por ejemplo con $6\\text{ minutos} = 0,1\\text{ h}$ de intervalo):</p>
            <ul>
              <li>La recta que une $O$ con $M$ prolongada hacia el centro de la pantalla es la <strong>Derrota Relativa del eco ($DRM$)</strong>.</li>
              <li>La distancia perpendicular mínima desde el centro de la pantalla (nuestro barco) a la prolongación de la recta $O\\text{--}M$ es el <strong>CPA (Distancia de Más Próxima Aproximación o DMP)</strong>. Si la recta pasa por el centro ($CPA = 0$), <strong>existe riesgo inminente de colisión</strong>.</li>
              <li><strong>Triángulo de Velocidades ($O - R - M$):</strong>
                <ul>
                  <li>De $O$ hacia atrás (o de $R$ a $O$) se traza el vector propio $\\vec{W}$ (nuestro rumbo y distancia navegada en el intervalo: $\\vec{R} \\to \\vec{O}$).</li>
                  <li>El vector que va de $R$ a $M$ ($\\vec{R} \\to \\vec{M}$) representa en dirección y magnitud el <strong>Rumbo Verdadero y la Velocidad Verdadera del buque blanco</strong>.</li>
                </ul>
              </li>
            </ul>
          `,
          keyTakeaways: [
            'Determinante de Saint-Hilaire: Δa = Av - Ac. Si Av > Ac (+) se mide HACIA el astro ("Más cerca, Menos lejos").',
            'En la Meridiana de Sol, el astro está sobre el meridiano del observador (Z = 000° o 180°) y brinda directamente la LATITUD (φ = z ± δ).',
            'Para eliminar un error sistemático en el corte de 3 rectas de estrellas se trazan las Bisectrices de Altura.',
            'En ploteo radar relativo, si la línea de movimiento relativo del eco (O-M) pasa por el centro de la pantalla (CPA = 0) con marcación constante y distancia decreciente, hay riesgo de abordaje.'
          ]
        }
      ]
    },
    {
      id: 'piy-seguridad',
      title: 'Materia 2: Seguridad III (Estabilidad, Control de Averías, Maniobra Oceánica, SAR y Comunicaciones)',
      propulsion: 'Vela, Motor y Vela-Motor',
      Modality: 'Teórico-Práctico (6 Unidades Oficiales)',
      objectivesGeneral: 'Dominar la teoría de estabilidad transversal y longitudinal del buque, el control de averías en navegación de altura, la supervivencia oceánica, la planificación de Búsqueda y Rescate (SAR) y las radiocomunicaciones en VHF y HF/BLU.',
      objectivesSpecific: [
        '1. Analizar los parámetros de estabilidad estática y dinámica (Centro de Gravedad G, Centro de Carena B, Metacentro M, Altura Metacéntrica GM y Brazo Adrizante GZ).',
        '2. Ejecutar maniobras en condiciones de tiempo duro en alta mar (capear, correr con dispositivos de freno, aceite, ancla de capa y remolque oceánico).',
        '3. Planificar operaciones SAR y operar sistemas de radiocomunicaciones VHF y HF/BLU (Código Morse, frecuencias de socorro, propagación ionosférica).'
      ],
      units: [
        {
          id: 'piy-seg-u1',
          number: 'Unidades 1, 2 y 3',
          title: 'Estabilidad del Buque (GM y Brazo Adrizante GZ), Control de Averías y Maniobras en Mar Duro',
          isDemoOpen: false,
          videoSceneId: 'estabilidad_gm_gz_temporal',
          videoTitle: 'Video Explicativo IA (Español): Estabilidad Transversal (G, B, M, GM, GZ), Curva de Estabilidad y Temporal Oceánico',
          summary: 'Principio de Arquímedes, Centro de Gravedad (G), Centro de Carena (B), Metacentro (M), Altura Metacéntrica (GM) y cupla adrizante (GZ). Estabilidad longitudinal y dinámica. Control de averías y maniobra en temporal en alta mar.',
          beginnerContent: `
            <h4>🟢 Explicación Visual: Por qué un Barco se mantiene derecho y cuándo puede darse vuelta</h4>
            <h5>1. Los 3 Puntos Mágicos de la Estabilidad: $G$, $B$ y $M$ (Unidad 1)</h5>
            <ul>
              <li><strong>Centro de Gravedad ($G$):</strong> Es el punto donde se concentra todo el <strong>peso</strong> del barco tirando hacia abajo ($\\downarrow$). Depende de dónde pongamos la carga y del peso del quillote. Solo se mueve si movemos pesos a bordo (o si entra agua suelta).</li>
              <li><strong>Centro de Carena o Boyantez ($B$):</strong> Es el centro geométrico de la parte sumergida (obra viva), por donde el agua empuja hacia arriba ($\\uparrow$). Cuando el barco se inclina (<em>escora</em>), la forma sumergida cambia y el punto $B$ se desplaza hacia la banda inclinada.</li>
              <li><strong>Metacentro ($M$):</strong> Es el punto donde la línea vertical del empuje del agua ($B$) corta al eje central del barco (crujía).</li>
              <li><strong>La Regla de Oro de la Estabilidad Inicial:</strong>
                <ul>
                  <li>Mientras el <strong>Metacentro ($M$) esté POR ENCIMA del Centro de Gravedad ($G$)</strong>, la distancia entre ambos se llama <strong>Altura Metacéntrica ($GM$) positiva</strong>: se forma una palanca (<strong>Brazo Adrizante $GZ$</strong>) que endereza al barco solo.</li>
                  <li>Si cargamos mucho peso arriba (en cubierta o en el mástil) o se inunda la sentina, $G$ sube: si $G$ supera a $M$, el barco pierde estabilidad y vuelca.</li>
                </ul>
              </li>
            </ul>
            <h5>2. Barco "Duro" vs. Barco "Blando"</h5>
            <ul>
              <li><strong>Barco Duro (Gran $GM$, mucho peso abajo):</strong> Le cuesta mucho escorar, pero cuando las olas lo mueven, vuelve con un sacudón muy rápido y brusco (período de rolido corto, incómodo para la tripulación y exigente para la jarcia).</li>
              <li><strong>Barco Blando (Pequeño $GM$):</strong> Escora fácilmente al principio, pero tiene un rolido suave y lento.</li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Curva de Estabilidad Estática (Curva de Brazos Adrizantes $GZ$ vs. Ángulo de Escora $\\theta$)</h5>
            <ul>
              <li>Para pequeños ángulos de escora ($\\theta < 10^\\circ\\text{--}15^\\circ$):
                $$GZ = GM \\cdot \\sin(\\theta)$$
                Y el Momento Adrizante es $M_a = \\Delta \\cdot GZ$ (donde $\\Delta$ es el desplazamiento en toneladas).</li>
              <li><strong>Ángulo de Vuelco o de Estabilidad Nula (AVS - <em>Angle of Vanishing Stability</em>):</strong> Ángulo de escora (en veleros oceánicos con quillote lastre suele ser $>120^\\circ\\text{--}130^\\circ$) a partir del cual el brazo $GZ$ se hace negativo y la cupla pasa a ser <em>escorante</em> (vuelta de campana).</li>
              <li><strong>Estabilidad Dinámica:</strong> Es el trabajo mecánico necesario para escorar el buque hasta un ángulo dado, representado geométricamente por el <strong>área encerrada bajo la curva de $GZ$</strong>.</li>
            </ul>
            <h5>2. Maniobras Oceánicas en Condiciones de Tiempo Duro (Unidad 3)</h5>
            <ul>
              <li><strong>Correr el temporal con dispositivos de retención por popa:</strong> Cuando las olas rompientes amenazan con atravesar al yate (<em>broaching</em>) o tumbarlo por popa (<em>pitchpoling</em>), se remolcan cabos largos en seno (guirnalda) o un <strong>ancla de serie (tipo Jordan) / drogue</strong> por popa con arraigo en ambas aletas para frenar las barrenadas y mantener la popa perpendicular a la cresta de la ola.</li>
              <li><strong>Uso de aceite en alta mar:</strong> El vertido controlado de una pequeña película de aceite pesado o animal/vegetal por barlovento o proa modifica la tensión superficial del agua, impidiendo que la cresta de la ola rompa sobre la embarcación.</li>
            </ul>
          `,
          keyTakeaways: [
            'Para que exista equilibrio estable inicial, el Metacentro (M) debe estar POR ENCIMA del Centro de Gravedad (G), es decir GM > 0.',
            'Brazo adrizante a pequeños ángulos: GZ = GM * sen(θ). Momento adrizante = Desplazamiento (Δ) * GZ.',
            'El área bajo la curva de estabilidad estática (GZ) representa la Estabilidad Dinámica.',
            'Embarcar pesos por debajo de G (o desembarcar pesos altos) baja el Centro de Gravedad y AUMENTA el GM.'
          ]
        },
        {
          id: 'piy-seg-u4',
          number: 'Unidades 4, 5 y 6',
          title: 'Supervivencia en Alta Mar, Búsqueda y Rescate (SAR) y Radiocomunicaciones (VHF, HF/BLU y Morse)',
          isDemoOpen: false,
          videoSceneId: 'sar_blu_comunicaciones',
          videoTitle: 'Video Explicativo IA (Español): Supervivencia en Balsa SOLAS, Patrones SAR y Propagación HF/BLU',
          summary: 'Supervivencia en el mar (racionamiento de agua, hipotermia, rescate médico). Búsqueda y Rescate (patrones SAR). Radiocomunicaciones: Código Morse, propagación VHF vs. HF (BLU), frecuencias internacionales de socorro (2182 kHz / Canal 16), EPIRB y SART.',
          beginnerContent: `
            <h4>🟢 Explicación Clara: Supervivencia en el Océano y Comunicaciones de Larga Distancia</h4>
            <h5>1. Reglas Vitales de Supervivencia en una Balsa Salvavidas (Unidad 4)</h5>
            <ul>
              <li><strong>Racionamiento del Agua:</strong> Durante las primeras <strong>24 horas no se bebe agua de la ración</strong> (el cuerpo aún está bien hidratado y se reserva el agua potable; luego se raciona a unos $500\\text{ ml}$ por día por persona).</li>
              <li><strong>¡PROHIBIDO BEBER AGUA DE MAR O ALCOHOL!</strong> El agua de mar tiene más sal que la que pueden filtrar los riñones: beberla deshidrata el cuerpo mucho más rápido y provoca delirio y falla renal. Tampoco se debe comer alimentos ricos en proteínas (pescado crudo sin agua dulce disponible) porque digerir proteínas consume el agua del propio cuerpo.</li>
              <li><strong>Recuperación de un Náufrago con Hipotermia (Unidad 5):</strong> Al rescatar del agua fría a una persona que estuvo mucho tiempo sumergida, hay que izarla en <strong>posición HORIZONTAL</strong> (no parada ni colgada verticalmente), porque al sacarla de la presión del agua la sangre baja de golpe a las piernas y puede sufrir un paro cardíaco (<em>colapso post-rescate</em>).</li>
            </ul>
            <h5>2. ¿Por qué en medio del Océano no alcanza el VHF y usamos HF / BLU? (Unidad 6)</h5>
            <ul>
              <li><strong>VHF (Muy Alta Frecuencia, ej. Canal 16 - $156,8\\text{ MHz}$):</strong> Sus ondas viajan en línea recta (onda espacial directa / visual). Como la Tierra es curva, el alcance entre dos barcos es de apenas <strong>$20\\text{ a }30\\text{ Millas Náuticas}$</strong> (o hasta $50\\text{ MN}$ con una antena alta en la costa).</li>
              <li><strong>HF / BLU (Banda Lateral Única - Onda Corta e Intermedia, ej. $2182\\text{ kHz}$, $4\\text{ MHz}$, $8\\text{ MHz}$, $12\\text{ MHz}$):</strong> Sus ondas suben hasta la <strong>Ionosfera</strong>, rebotan como en un espejo y vuelven a la Tierra a cientos o miles de millas de distancia.
                <br><em>Regla práctica de frecuencias HF:</em> <strong>"A mayor sol (de día), mayor frecuencia ($8, 12, 16\\text{ MHz}$); de noche, menor frecuencia ($2, 4\\text{ MHz}$)"</strong>.</li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Frecuencias y Sistemas del SMSSM / GMDSS y Señales Distintivas</h5>
            <ul>
              <li><strong>Frecuencia Internacional de Socorro en Telefonía MF (Onda Media / BLU):</strong> <strong>$2182\\text{ kHz}$</strong> (y en Llamada Selectiva Digital DSC: $2187,5\\text{ kHz}$). En HF/BLU también son frecuencias de socorro las bandas de $4125\\text{ kHz}$, $6215\\text{ kHz}$, $8291\\text{ kHz}$, $12290\\text{ kHz}$ y $16420\\text{ kHz}$.</li>
              <li><strong>Frecuencia Aérea Internacional de Emergencia:</strong> $121,5\\text{ MHz}$ (VHF aeronáutico para recalada de aeronaves SAR) y $406\\text{ MHz}$ (frecuencia satelital COSPAS-SARSAT de las radiobalizas <strong>EPIRB / RLS</strong>).</li>
              <li><strong>Prefijos de Señales Distintivas de la República Argentina (UIT):</strong> Bloques <strong>LO a LW</strong> (y AY a AZ / L2 a L9). Las estaciones costeras de la Prefectura Naval Argentina emplean el prefijo <strong>L2</strong> a <strong>L9</strong> (ej. <em>L2G Prefectura Buenos Aires</em>).</li>
              <li><strong>Períodos de Silencio Radioeléctrico Tradicional:</strong> De 3 minutos de duración a los minutos $:00$ a $:03$ y $:30$ a $:33$ de cada hora para escuchar llamadas débiles de socorro.</li>
              <li><strong>Código Internacional Morse Básico:</strong> Señal de Socorro <strong>SOS</strong>: <code>· · · — — — · · ·</code> (tres cortos, tres largos, tres cortos transmitidos como un solo signo sin pausa entre letras).</li>
            </ul>
          `,
          keyTakeaways: [
            'En supervivencia en balsa: jamás beber agua de mar, alcohol ni orina; no ingerir proteínas si no se dispone de agua dulce.',
            'El VHF tiene alcance óptico/visual (~25-30 MN); el HF/BLU logra alcance oceánico por reflexión en la IONOSFERA.',
            'Frecuencia internacional de socorro radiotelefónico en MF/BLU: 2182 kHz (y 156,8 MHz Canal 16 en VHF).',
            'Radiobaliza satelital EPIRB transmite en 406 MHz hacia la constelación COSPAS-SARSAT.'
          ]
        }
      ]
    },
    {
      id: 'piy-meteorologia',
      title: 'Materia 3: Meteorología Marina y Oceánica',
      propulsion: 'Vela, Motor y Vela-Motor',
      Modality: 'Teórico-Práctico (12 Unidades Oficiales)',
      objectivesGeneral: 'Dominar la física de la atmósfera, la circulación general planetaria, la dinámica de masas de aire, frentes y ciclones tropicales y extratropicales, la interpretación de cartas sinópticas (Weather Fax) y la planificación oceánica con Pilot Charts.',
      objectivesSpecific: [
        '1. Analizar la estructura térmica de la atmósfera, transferencia de calor, presión, humedad y formación de nubes y nieblas.',
        '2. Aplicar la Ley de Buys-Ballot, Fuerza de Coriolis y circulación general atmosférica.',
        '3. Distinguir el semicírculo peligroso y el semicírculo navegable de un ciclón tropical en ambos hemisferios y ejecutar la maniobra de evasión.',
        '4. Interpretar cartas sinópticas de superficie, Weather Fax y Pilot Charts para travesías oceánicas.'
      ],
      units: [
        {
          id: 'piy-met-u1',
          number: 'Unidades 1 a 6',
          title: 'Atmósfera, Calor, Presión, Humedad, Nubes, Nieblas, Fuerza de Coriolis y Circulación General',
          isDemoOpen: false,
          videoSceneId: 'coriolis_circulacion_ciclones',
          videoTitle: 'Video Explicativo IA (Español): Circulación Planetaria, Ley de Buys-Ballot, Nieblas Marinas y Ciclones Tropicales',
          summary: 'Capas de la atmósfera y gradiente térmico. Radiación, conducción y convección. Barómetros, marea barométrica y gradiente bárico. Humedad, psicrómetro, punto de rocío, clasificación de 10 géneros de nubes y nieblas. Fuerza de Coriolis, viento geostrófico y circulación general.',
          beginnerContent: `
            <h4>🟢 Explicación Clara: Cómo funciona la Gran Máquina del Clima en los Océanos</h4>
            <h5>1. La Ley de Buys-Ballot (Cómo saber dónde está el centro de la tormenta mirando el viento)</h5>
            <p>En nuestro <strong>Hemisferio Sur</strong>, la rotación de la Tierra (<em>Fuerza de Coriolis</em>) desvía los vientos hacia su <strong>izquierda</strong>. Por eso se cumple siempre la <strong>Ley de Buys-Ballot para el Hemisferio Sur</strong>:</p>
            <blockquote>
              <strong>"Si te parás de CARA al viento en el Hemisferio Sur, el centro de BAJA PRESIÓN (la tormenta/ciclón) está a tu IZQUIERDA (y unos $15^\\circ$ a $30^\\circ$ hacia atrás), y el centro de ALTA PRESIÓN está a tu DERECHA."</strong>
            </blockquote>
            <h5>2. ¿Cómo se forma la Niebla en el Mar? (Unidad 5 y 11)</h5>
            <p>La niebla es simplemente una nube tipo <em>Stratus</em> pegada a la superficie del agua que reduce la visibilidad a <strong>menos de 1000 metros</strong> (si se ve entre $1000\\text{ m}$ y $5000\\text{ m}$ se llama <em>neblina</em>). Se forma cuando el aire húmedo se enfría hasta alcanzar su <strong>Punto de Rocío</strong> (temperatura a la cual la humedad relativa llega al $100\\%$ y el vapor se condensa en gotitas):</p>
            <ul>
              <li><strong>Niebla de Advección (La más común y persistente en el mar):</strong> Ocurre cuando sopla <strong>aire cálido y húmedo (por ejemplo, viento Norte/Noreste) sobre una superficie de mar o río fría</strong> (por ejemplo, en invierno en el Río de la Plata o cuando el viento pasa sobre la corriente fría de Malvinas).</li>
              <li><strong>Niebla de Radiación:</strong> Se forma en tierra en noches despejadas y sin viento por enfriamiento del suelo, y a la mañana puede deslizarse sobre los ríos, puertos y costas.</li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Estructura de la Atmósfera y Gradiente Térmico Vertical (Unidades 2 y 3)</h5>
            <ul>
              <li><strong>Troposfera:</strong> Capa inferior (desde la superficie hasta $\\approx 8\\text{ km}$ en los polos y $16\\text{--}18\\text{ km}$ en el Ecuador) donde ocurren prácticamente todos los fenómenos meteorológicos. Su límite superior es la <em>Tropopausa</em>.</li>
              <li><strong>Gradiente Térmico Vertical Estándar:</strong> En la troposfera la temperatura disminuye en promedio **$6,5^\\circ\\text{C}$ por cada $1000\\text{ metros}$ de ascenso** (mientras que el gradiente adiabático seco de una parcela que asciende es de $\\approx 1^\\circ\\text{C}/100\\text{ m}$ y el adiabático saturado/húmedo es de $\\approx 0,5^\\circ\\text{C}/100\\text{ m}$).</li>
            </ul>
            <h5>2. Marea Barométrica Diurna (Unidad 4)</h5>
            <ul>
              <li>La presión atmosférica presenta una oscilación regular dos veces por día (muy marcada en latitudes bajas y medias): alcanza <strong>dos máximos a las 10:00 y 22:00 hs</strong> (hora local) y <strong>dos mínimos a las 04:00 y 16:00 hs</strong>. Si en latitudes tropicales se altera el ritmo normal de la marea barométrica y la presión cae más de $3\\text{ a }5\\text{ hPa}$ por debajo de la media, es un indicio clásico de la proximidad de un <strong>ciclón tropical</strong>.</li>
            </ul>
            <h5>3. Circulación General de la Atmósfera (Unidad 6)</h5>
            <ul>
              <li><strong>Zona de Convergencia Intertropical (ZCIT / ITCZ / Doldrums):</strong> Cinturón ecuatorial de bajas presiones térmicas, calmas ecuatoriales y chubascos convectivos intensos.</li>
              <li><strong>Vientos Alisios (Trade Winds):</strong> Soplan desde las altas subtropicales ($30^\\circ$) hacia el Ecuador: del <strong>Sudeste (SE) en el Hemisferio Sur</strong> y del <strong>Noreste (NE) en el Hemisferio Norte</strong>.</li>
              <li><strong>Cinturón de Altas Presiones Subtropicales ($30^\\circ\\text{ S y N}$ - Latitudes de los Caballos):</strong> Zonas de subsidencia de aire seco y vientos suaves variables.</li>
              <li><strong>Vientos del Oeste (Westerlies / "Roaring Forties"):</strong> Entre $35^\\circ$ y $60^\\circ$ de latitud, predominan fuertes vientos del sector Oeste/Noroeste.</li>
            </ul>
          `,
          keyTakeaways: [
            'Ley de Buys-Ballot en el Hemisferio Sur: mirando de cara al viento, el centro de Baja Presión queda a la IZQUIERDA y algo atrás.',
            'Niebla = visibilidad menor a 1 km; Neblina = visibilidad entre 1 km y 5 km.',
            'La niebla marina típica (de advección) se forma cuando aire CÁLIDO y húmedo se desplaza sobre agua FRÍA.',
            'Los vientos Alisios soplan del SUDESTE (SE) en el Hemisferio Sur y del NORESTE (NE) en el Hemisferio Norte.'
          ]
        },
        {
          id: 'piy-met-u7',
          number: 'Unidades 7 a 12',
          title: 'Masas de Aire, Frentes, Ciclones Tropicales (Semicírculo Peligroso/Navegable), Carta Sinóptica y Pilot Charts',
          isDemoOpen: false,
          videoSceneId: 'ciclones_pilot_charts',
          videoTitle: 'Video Explicativo IA (Español): Semicírculo Peligroso vs. Navegable en Huracanes, Frentes y Pilot Charts',
          summary: 'Masas de aire y frentes (frío, cálido, ocluido y estacionario). Ciclogénesis y Huracán Tropical (semicírculo peligroso y navegable según hemisferio). Situaciones sinópticas en Argentina. Análisis de carta del tiempo (Weather Fax) y Pilot Charts.',
          beginnerContent: `
            <h4>🟢 Explicación Paso a Paso: Cómo escapar de un Ciclón Tropical / Huracán en cada Hemisferio (Unidad 8)</h4>
            <p>Un Ciclón Tropical (Huracán / Tifón) es una baja presión profundísima que avanza por el océano mientras gira a velocidades destructivas. Si dividimos el huracán en dos mitades mirando hacia dónde avanza su trayectoria:</p>
            <ul>
              <li><strong>Semicírculo Peligroso:</strong> Es la mitad donde la velocidad de giro del viento se <strong>SUMA</strong> a la velocidad de traslación del huracán (los vientos y las olas son mucho más violentos y el giro tiende a empujar tu barco hacia adelante del centro del huracán).</li>
              <li><strong>Semicírculo Navegable (Manejable):</strong> Es la mitad donde la velocidad de traslación se <strong>RESTA</strong> del giro del viento.</li>
            </ul>
            <h5>¿Cuál es cuál en cada Hemisferio? (¡Pregunta fija de Piloto de Yate!)</h5>
            <ul>
              <li>🌍 <strong>En el HEMISFERIO SUR (donde el ciclón gira en sentido HORARIO):</strong>
                <ul>
                  <li>El <strong>Semicírculo Peligroso</strong> es el <strong>IZQUIERDO</strong> (y el viento va borneando en sentido horario).</li>
                  <li>El <strong>Semicírculo Navegable</strong> es el <strong>DERECHO</strong>.</li>
                  <li><em>Maniobra de escape en el Hemisferio Sur:</em> Si estás en el semicírculo peligroso (izquierdo), debés <strong>ceñir o capear con amuras a BABOR</strong>; si estás en el semicírculo navegable (derecho), debés <strong>correr con el viento por la aleta de BABOR</strong> para alejarte del centro.</li>
                </ul>
              </li>
              <li>🌎 <strong>En el HEMISFERIO NORTE (donde el ciclón gira en sentido ANTIHORARIO):</strong>
                <ul>
                  <li>Es exactamente al revés: el <strong>Semicírculo Peligroso</strong> es el <strong>DERECHO</strong> (se escapa ciñendo con amuras a ESTRIBOR), y el <strong>Semicírculo Navegable</strong> es el <strong>IZQUIERDO</strong> (se escapa corriendo con el viento por la aleta de ESTRIBOR).</li>
                </ul>
              </li>
            </ul>
            <h5>¿Qué son las Pilot Charts (Cartas de Vientos Mensuales - Unidad 11)?</h5>
            <p>Son cartas oceánicas editadas para cada mes del año basadas en estadísticas históricas de décadas. En cada cuadrícula de $5^\\circ \\times 5^\\circ$ muestran una <strong>Rosa de Vientos</strong> (las flechas indican de dónde sopla el viento con mayor frecuencia, las plumas indican la fuerza en Beaufort y el número del círculo central indica el porcentaje de calmas), además de las corrientes oceánicas en nudos, límites de hielos, porcentaje de nieblas y rutas recomendadas.</p>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Estabilidad Térmica de las Masas de Aire sobre el Mar (Unidad 7)</h5>
            <ul>
              <li><strong>Masa de aire FRÍO desplazándose sobre mar CÁLIDO (ej. aire polar tras un frente frío subiendo hacia el Brasil):</strong> El aire se calienta por debajo, se vuelve <strong>inestable</strong>, asciende por convección formando nubes cumuliformes (<em>Cumulus</em> y <em>Cumulonimbus</em>), chubascos aislados, viento racheado y <strong>excelente visibilidad horizontal</strong> entre chaparrones.</li>
              <li><strong>Masa de aire CÁLIDO desplazándose sobre mar FRÍO (ej. aire tropical del Norte bajando sobre la Corriente de Malvinas):</strong> El aire se enfría por su base, se vuelve <strong>estable</strong> (inversión térmica superficial), formando nubes estratificadas bajas (<em>Stratus</em>), lloviznas continuas y <strong>nieblas de advección</strong> con muy mala visibilidad.</li>
            </ul>
            <h5>2. Situaciones Sinópticas Típicas de la República Argentina (Unidad 9 y 12)</h5>
            <ul>
              <li><strong>Sudestada (Ciclogénesis del Litoral):</strong> Formación de una depresión frontal sobre el Litoral/Uruguay combinada con un potente anticiclón post-frontal al sur de la Provincia de Buenos Aires/Patagonia Norte. Genera fuerte gradiente bárico con vientos del SE de $30\\text{ a }50+\\text{ nudos}$.</li>
              <li><strong>Pampero:</strong> Avance de un frente frío de origen polar marítimo del Pacífico Sur que cruza la cordillera (secándose por efecto Foehn) y barre la llanura pampeana y el Río de la Plata de SW a NE (<em>Pampero Sucio</em> con línea de turbonada inicial, seguido de <em>Pampero Limpio</em> con fuerte ascenso barométrico y aire seco y frío).</li>
            </ul>
          `,
          keyTakeaways: [
            'En un Ciclón Tropical en el Hemisferio Sur: Semicírculo Peligroso = IZQUIERDO (se escapa con amuras a BABOR); Semicírculo Navegable = DERECHO (viento por la aleta de BABOR).',
            'Aire frío sobre mar cálido = INESTABILIDAD (cúmulos, chubascos, rachas y buena visibilidad).',
            'Aire cálido sobre mar frío = ESTABILIDAD (estratos, llovizna y niebla de advección).',
            'En una Pilot Chart, el número dentro del círculo de cada rosa de vientos indica el porcentaje de CALMAS en ese mes.'
          ]
        }
      ]
    },
    {
      id: 'piy-legislacion',
      title: 'Materia 4: Legislación y Reglamentación III',
      propulsion: 'Vela, Motor y Vela-Motor',
      Modality: 'Teórico-Práctico (4 Unidades Oficiales)',
      objectivesGeneral: 'Actualizar e integrar el dominio completo del balizamiento, RIPA, REGINAVE, el régimen de actividades náutico deportivas de altura, el derecho de la navegación ante accidentes marítimos y el régimen jurídico de los espacios fluviales y marítimos.',
      objectivesSpecific: [
        '1. Dominar las actualizaciones de IALA, RIPA (con sus 4 Anexos) y REGINAVE.',
        '2. Conocer el régimen de registro, despachos oceánicos y atribuciones del Piloto de Yate.',
        '3. Comprender los procedimientos legales y responsabilidades ante accidentes de la navegación (abordaje, asistencia y salvamento, protesta de mar).',
        '4. Dominar el Derecho del Mar (CONVEMAR) y el Tratado del Río de la Plata y su Frente Marítimo.'
      ],
      units: [
        {
          id: 'piy-leg-u1',
          number: 'Unidades 1, 2, 3 y 4',
          title: 'RIPA/REGINAVE Integral, Accidentes de la Navegación (Ley 20.094), Derecho del Mar y Tratado del Río de la Plata',
          isDemoOpen: false,
          videoSceneId: 'derecho_mar_accidentes_pna',
          videoTitle: 'Video Explicativo IA (Español): Accidentes de la Navegación, Asistencia y Salvamento, CONVEMAR y Atribuciones',
          summary: 'Actualización IALA, RIPA y REGINAVE. Atribuciones del Piloto de Yate. Accidentes de la navegación (abordaje, asistencia y salvamento, protesta/exposición ante PNA). Espacios marítimos (CONVEMAR) y Tratado del Río de la Plata y su Frente Marítimo.',
          beginnerContent: `
            <h4>🟢 Explicación Clara: Qué hacer legalmente ante un Accidente y Derechos en el Mar</h4>
            <h5>1. ¿Qué obligaciones legales tenés si ocurre un Abordaje (choque) o ves un Barco en Peligro? (Unidad 4)</h5>
            <p>La <strong>Ley de la Navegación Argentina N° 20.094</strong> y los convenios internacionales establecen dos deberes sagrados en el agua:</p>
            <ul>
              <li><strong>Obligación de Asistencia a las Personas:</strong> Todo capitán, patrón o piloto está <strong>legal y penalmente obligado a prestar auxilio a cualquier persona en peligro en el agua</strong> (incluso si fuera de un país enemigo), siempre que pueda hacerlo sin poner en peligro grave a su propia embarcación y tripulantes. El salvamento de vidas humanas es obligatorio y gratuito (no da derecho a cobrar recompensa por salvar personas, a diferencia del <em>salvamento de bienes/embarcaciones</em> que sí puede generar salario de asistencia o salvamento si se pacta o reclama comercialmente).</li>
              <li><strong>En caso de Abordaje (Colisión entre dos barcos):</strong> Ninguno de los dos barcos puede darse a la fuga. Ambos deben asistirse mutuamente, intercambiar los datos de nombre de la embarcación, matrícula, puerto de origen y destino, y al arribar al primer puerto presentar la <strong>Exposición / Protesta de Mar ante la Prefectura Naval Argentina</strong> dentro de las 24/48 horas para el sumario administrativo correspondiente.</li>
            </ul>
            <h5>2. Atribuciones del Piloto de Yate (Unidad 3)</h5>
            <p>El certificado de <strong>Piloto de Yate</strong> habilita para el gobierno de embarcaciones deportivas (a vela, a motor o vela-motor según corresponda) en <strong>cualquier tipo de navegación (lacustre, fluvial, costera, marítima y oceánica de altura) sin ningún límite geográfico de alejamiento de la costa</strong>.</p>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Figuras Jurídicas de la Ley de la Navegación N° 20.094 (Unidad 4)</h5>
            <ul>
              <li><strong>Abordaje Fortuito o Dudoso:</strong> Cuando el choque se produce por caso fortuito, fuerza mayor o existen dudas sobre sus causas, cada embarcación soporta sus propios daños.</li>
              <li><strong>Abordaje Culposo:</strong> Si media culpa exclusiva de una embarcación, el culpable debe indemnizar la totalidad de los daños causados; si existe <em>culpa concurrente</em>, la responsabilidad se gradúa en proporción a la gravedad de la falta de cada una.</li>
              <li><strong>Asistencia y Salvamento:</strong> Todo hecho de auxilio a un buque en peligro que tenga <em>resultado útil</em> ("No cure, no pay"). En el ámbito deportivo entre consocios o nautas suele prestarse el remolque por solidaridad marinera dejando constancia por VHF de que se trata de un remolque de cortesía sin reclamo de salario de salvamento.</li>
            </ul>
            <h5>2. Tratado del Río de la Plata y su Frente Marítimo (Ley 20.645)</h5>
            <ul>
              <li><strong>División del Lecho y del Subsuelo:</strong> A diferencia del espejo de agua (que se rige por las franjas costeras de 2 y 7 millas y aguas de uso común), el lecho y el subsuelo del Río de la Plata están divididos longitudinalmente por una <strong>línea poligonal de 23 puntos</strong> definida por coordenadas geográficas en el Tratado.</li>
              <li><strong>Isla Martín García:</strong> Bajo jurisdicción de la República Argentina, destinada exclusivamente a reserva natural para la conservación de la fauna y flora autóctonas y sede de la Comisión Administradora del Río de la Plata (CARP).</li>
              <li><strong>Frente Marítimo (Zona Común de Pesca):</strong> Más allá del límite exterior del Río de la Plata, establece una zona común de pesca determinada por dos arcos de circunferencia de <strong>$200\\text{ Millas Náuticas}$</strong> de radio trazados desde Punta Rasa (Argentina) y desde Punta del Este (Uruguay).</li>
            </ul>
          `,
          keyTakeaways: [
            'El auxilio para salvar VIDAS HUMANAS en el mar es una obligación legal ineludible (Ley 20.094 y CONVEMAR) siempre que no implique riesgo grave para el propio buque.',
            'En el Tratado del Río de la Plata, las aguas se dividen en franjas de 2 y 7 MN + zona común, mientras que el lecho y subsuelo se dividen por una línea poligonal de 23 puntos.',
            'La Zona Común de Pesca del Frente Marítimo está delimitada por dos arcos de circunferencia de 200 MN de radio desde Punta Rasa y Punta del Este.'
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: 'q-piy-1',
      unit: 'Navegación III - Unidad 2',
      question: 'Al planificar una travesía oceánica de gran distancia, ¿en qué consiste una "Derrota Mixta"?',
      options: [
        'Navegar la mitad del viaje a vela y la mitad a motor.',
        'Combinar dos arcos de ortodromia (uno desde la salida hasta ser tangente a un paralelo límite de seguridad, y otro desde ese paralelo hasta el destino) unidos por un tramo loxodrómico sobre dicho paralelo límite para no incursionar en latitudes peligrosas por hielos o temporales.',
        'Navegar en zigzag al azar.',
        'Usar una carta fluvial en medio del océano.'
      ],
      correctIndex: 1,
      explanation: 'Cuando el vértice de una derrota ortodrómica pura alcanza latitudes demasiado altas y peligrosas, se traza una Derrota Mixta: ortodromia hasta tangenciar el paralelo límite elegido, navegación por el paralelo (loxodromia) y ortodromia final a destino.'
    },
    {
      id: 'q-piy-2',
      unit: 'Navegación III - Unidad 4',
      question: '¿Cuáles son los tres vértices que conforman el "Triángulo Esférico de Posición" en navegación astronómica?',
      options: [
        'Proa, Popa y Estribor.',
        'El Polo Elevado (P), el Cenit del Observador (Z) y el Astro (A).',
        'Greenwich, el Ecuador y el Trópico de Capricornio.',
        'El Sol, la Luna y Marte.'
      ],
      correctIndex: 1,
      explanation: 'El Triángulo de Posición en la esfera celeste tiene por vértices el Polo Elevado del hemisferio del observador (P), el Cenit de la posición estimada del observador (Z) y el Astro observado (A).'
    },
    {
      id: 'q-piy-3',
      unit: 'Navegación III - Unidad 5 y 6',
      question: 'Para calcular el Ángulo Horario Local de una estrella (AHL*) en una longitud Oeste (ω W), ¿qué datos se extraen del Almanaque Náutico y cómo se combinan?',
      options: [
        'Se extrae únicamente la fase de la Luna.',
        'Se extrae el Ángulo Horario en Greenwich de Aries (AHG γ) para la hora UTC de observación, se le suma el Ángulo Sidéreo de la estrella (SHA*) y se le resta la Longitud Oeste (AHL* = AHG γ + SHA* - ω W).',
        'Se multiplica la altura del sextante por la velocidad del barco.',
        'Se resta la declinación del Sol a la latitud.'
      ],
      correctIndex: 1,
      explanation: 'Para las estrellas, el Almanaque Náutico tabula hora a hora el AHG del Primer Punto de Aries (γ) y el Ángulo Sidéreo (SHA o AS) de cada estrella: AHG* = AHG γ + SHA*, y luego AHL* = AHG* - Longitud Oeste.'
    },
    {
      id: 'q-piy-4',
      unit: 'Navegación III - Unidad 8',
      question: 'En la reducción de una altura del Sol medida con el sextante, ¿cuáles de las siguientes correcciones tienen SIEMPRE signo negativo (-)?',
      options: [
        'El Semidiámetro del limbo inferior y la Paralaje.',
        'La Depresión Aparente del Horizonte (por altura del ojo) y la Refracción Atmosférica.',
        'El Error de Índice en todos los sextantes del mundo.',
        'Ninguna, todas se suman siempre.'
      ],
      correctIndex: 1,
      explanation: 'Tanto la Depresión del horizonte (D = -1,77\' √h) como la Refracción atmosférica media (R) hacen que el astro se mida con un ángulo mayor al real, por lo que sus correcciones son siempre negativas (-).'
    },
    {
      id: 'q-piy-5',
      unit: 'Navegación III - Unidad 11',
      question: 'En el método de Marcq Saint-Hilaire, si la Altura Verdadera obtenida con el sextante es Av = 42° 18\' y la Altura Calculada para nuestro punto estimado es Ac = 42° 10\' con Acimut Verdadero Zv = 065°, ¿cómo se traza el determinante de la Recta de Altura?',
      options: [
        '8 Millas Náuticas desde el punto estimado ALEJÁNDOSE del astro (al rumbo 245°).',
        '8 Millas Náuticas desde el punto estimado HACIA el astro (en dirección del Acimut 065°), porque Av > Ac ("Más cerca, Menos lejos").',
        '42 Millas Náuticas hacia el Polo Sur.',
        'No se puede trazar porque las alturas son distintas.'
      ],
      correctIndex: 1,
      explanation: 'El determinante es Δa = Av - Ac = 42° 18\' - 42° 10\' = +8\' (+8 Millas Náuticas). Al ser positivo (Av > Ac), por la regla "Más cerca, Menos lejos", se llevan 8 MN desde el punto estimado HACIA el acimut del astro (065°) y allí se traza la perpendicular.'
    },
    {
      id: 'q-piy-6',
      unit: 'Navegación III - Unidad 14',
      question: 'En el ploteo cinemático de Radar en presentación de Movimiento Relativo, ¿qué indica el hecho de que un blanco se acerque manteniendo una marcación constante y su línea de movimiento relativo proyectada pase exactamente por el centro de la pantalla (CPA = 0)?',
      options: [
        'Que el blanco se está alejando sin peligro.',
        'Que existe riesgo cierto de abordaje (colisión) si no se modifica el rumbo o la velocidad.',
        'Que el radar está apagado.',
        'Que el blanco es una boya fija en tierra.'
      ],
      correctIndex: 1,
      explanation: 'Tanto por la Regla 7 del RIPA como por cinemática naval, si la marcación a un buque que se aproxima no varía en forma apreciable (su derrota relativa pasa por el centro de la rosa de maniobra, CPA = 0), existe riesgo de colisión.'
    },
    {
      id: 'q-piy-7',
      unit: 'Seguridad III - Unidad 1',
      question: 'En la teoría de estabilidad transversal del buque, ¿qué condición geométrica debe cumplirse entre el Centro de Gravedad (G) y el Metacentro Transversal (M) para que el buque tenga equilibrio estable inicial?',
      options: [
        'El Centro de Gravedad (G) debe estar lo más arriba posible, por encima del Metacentro (M).',
        'El Metacentro (M) debe encontrarse POR ENCIMA del Centro de Gravedad (G), de modo que la Altura Metacéntrica (GM) sea positiva y genere un brazo adrizante (GZ > 0).',
        'El barco no debe tener lastre en el quillote.',
        'El Centro de Carena (B) debe estar en el tope del mástil.'
      ],
      correctIndex: 1,
      explanation: 'La condición de estabilidad transversal inicial exige que el Metacentro (M) esté por encima del Centro de Gravedad (G), resultando en una Altura Metacéntrica positiva (GM > 0) y un brazo de cupla adrizante GZ = GM * sen(θ).'
    },
    {
      id: 'q-piy-8',
      unit: 'Seguridad III - Unidad 6',
      question: '¿Por qué los equipos de radio de HF / BLU (Banda Lateral Única) permiten comunicaciones a miles de millas en alta mar, mientras que el VHF se limita a unas 25-30 millas?',
      options: [
        'Porque el micrófono del BLU es más grande.',
        'Porque las ondas decamétricas de HF se reflejan en las capas de la IONOSFERA y regresan a la superficie terrestre más allá del horizonte, mientras que las ondas de VHF se propagan en línea recta (alcance visual).',
        'Porque el VHF solo funciona de día.',
        'Porque el BLU transmite por debajo del agua.'
      ],
      correctIndex: 1,
      explanation: 'En la banda de HF (3 a 30 MHz), la onda celeste experimenta refracción/reflexión en las capas ionizadas de la atmósfera (Ionosfera), salvando la curvatura terrestre y logrando enlaces oceánicos intercontinentales.'
    },
    {
      id: 'q-piy-9',
      unit: 'Meteorología - Unidad 6',
      question: 'Según la Ley de Buys-Ballot aplicada en el HEMISFERIO SUR, si un navegante se coloca de CARA al viento verdadero, ¿hacia qué lado se encuentra el centro de Baja Presión (Ciclón)?',
      options: [
        'Exactamente detrás de su espalda.',
        'A su IZQUIERDA (y unos 15° a 30° hacia atrás).',
        'A su DERECHA.',
        'Siempre hacia el Norte geográfico.'
      ],
      correctIndex: 1,
      explanation: 'Como en el Hemisferio Sur los vientos giran en sentido horario alrededor de la baja presión convergiendo hacia su centro, al pararse de cara al viento el centro de Baja Presión queda a la IZQUIERDA y algo hacia atrás.'
    },
    {
      id: 'q-piy-10',
      unit: 'Meteorología - Unidad 8',
      question: 'Al enfrentar un Ciclón Tropical (Huracán) en el HEMISFERIO SUR, ¿cuál es el "Semicírculo Peligroso" respecto a su trayectoria de avance y cuál es la maniobra recomendada para escapar de él en un velero?',
      options: [
        'El semicírculo peligroso es el derecho y hay que fondear.',
        'En el Hemisferio Sur el Semicírculo Peligroso es el IZQUIERDO, y para alejarse de la trayectoria del centro se debe ceñir o capear recibiendo el viento con AMURAS A BABOR.',
        'No existe diferencia entre ambos semicírculos.',
        'Hay que navegar directo hacia el ojo del huracán.'
      ],
      correctIndex: 1,
      explanation: 'En el Hemisferio Sur (giro horario del ciclón), la velocidad de traslación se suma al giro en el Semicírculo IZQUIERDO (Peligroso); para escapar de él se debe ceñir o capear con amuras a BABOR. En el Semicírculo Derecho (Navegable) se corre con el viento por la aleta de babor.'
    },
    {
      id: 'q-piy-11',
      unit: 'Meteorología - Unidad 7',
      question: '¿Qué fenómenos meteorológicos se producen cuando una masa de aire CÁLIDO y húmedo se desplaza sobre una corriente marina o superficie de agua FRÍA?',
      options: [
        'Gran inestabilidad vertical, tormentas eléctricas y visibilidad ilimitada.',
        'Estabilidad atmosférica en las capas bajas por enfriamiento basal, formación de nubes estratificadas (Stratus), lloviznas y NIEBLAS DE ADVECCIÓN con reducción severa de la visibilidad.',
        'Desaparición total de la humedad.',
        'Formación instantánea de un tornado seco.'
      ],
      correctIndex: 1,
      explanation: 'Cuando el aire cálido y húmedo pasa sobre agua fría, su capa inferior se enfría por conducción hasta su punto de rocío, generando estabilidad, inversión térmica baja y bancos persistentes de niebla marina de advección.'
    },
    {
      id: 'q-piy-12',
      unit: 'Legislación III - Unidad 4',
      question: 'Según el Tratado del Río de la Plata y su Frente Marítimo (Ley 20.645), ¿cómo se delimita la "Zona Común de Pesca" en el Frente Marítimo exterior?',
      options: [
        'Por una línea recta de 5 millas frente a Colonia.',
        'Más allá de las 12 millas costeras, por dos arcos de circunferencia de 200 Millas Náuticas de radio trazados uno desde Punta Rasa del Cabo San Antonio (Argentina) y el otro desde Punta del Este (Uruguay).',
        'Abarca únicamente el río Paraná.',
        'Es una franja de 1 milla alrededor de la Isla Martín García.'
      ],
      correctIndex: 1,
      explanation: 'El Artículo 73 del Tratado del Río de la Plata y su Frente Marítimo establece la Zona Común de Pesca para los buques de ambas banderas más allá de las 12 MN costeras, determinada por dos arcos de circunferencia de 200 MN de radio con centro en Punta Rasa y en Punta del Este.'
    }
  ]
};
