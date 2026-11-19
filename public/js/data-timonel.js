window.COURSE_TIMONEL = {
  id: 'timonel',
  code: 'PNA-TY-02',
  title: 'Timonel de Yate (Vela / Motor / Vela-Motor)',
  shortTitle: 'Timonel de Yate',
  badge: 'Nivel Intermedio Diurno y Nocturno',
  propulsion: 'Vela, Motor y Vela-Motor (Habilita hasta 12 m de eslora / navegación diurna y nocturna)',
  suggestedHours: '114 Horas Cátedra (64 hs Navegación I + 40 hs Seguridad I + 10 hs Legislación I)',
  scopeSummary: 'Habilita para el gobierno de embarcaciones deportivas (a Vela, a Motor o Vela-Motor según se rinda) de hasta 12 metros de eslora, de día y de noche, en navegación lacustre y ríos interiores en toda su extensión, Río de la Plata al oeste de la línea imaginaria Punta Atalaya (Argentina) - Punta Rosario (R.O. del Uruguay), y zonas marítimas que establezca la Dependencia de Prefectura.',
  coevNotice: 'Programa Oficial de Examen para Timonel de Yate (Certificados: Timonel de Yate a Vela, Timonel de Yate a Motor, Timonel de Yate a Vela y Motor) - PNA.',
  subjects: [
    {
      id: 'ty-navegacion',
      title: 'Materia 1: Navegación I',
      propulsion: 'Vela, Motor y Vela-Motor',
      Modality: 'Teórico-Práctico (64 horas / clase de 45 min c/u)',
      objectivesGeneral: 'Capacitar para apreciar la situación de la embarcación a partir de referencias respecto de objetos ubicados en tierra y en el agua, los que a su vez serán reconocidos en las cartas y croquis de navegación; adquiriendo habilidad para entrada y salida a los puertos, de día y de noche, reconociendo referencias para dirección, distancia y posición.',
      objectivesSpecific: [
        '1. Adquirir fundamentos respecto de los cuatro problemas fundamentales de la navegación: de la dirección, de la distancia, de la posición y de la profundidad.',
        '2. Determinar una derrota, la distancia navegada y por navegar, apreciando en todo momento la situación de la embarcación recurriendo a objetos o puntos notables existentes en el agua y en la costa.',
        '3. Apreciar los efectos del viento y corriente en la derrota.',
        '4. Apreciar profundidades por sondaje y por apariencia de la superficie del agua.',
        '5. Preparar una derrota. Interpretar y emplear la información de publicaciones, cartas, croquis, avisos a los navegantes y patrón de signos.'
      ],
      units: [
        {
          id: 'ty-nav-u1',
          number: 'Unidad 1',
          title: 'Nociones sobre Cartas Náuticas y su Uso',
          isDemoOpen: true,
          videoSceneId: 'cartas_coordenadas_compas',
          videoTitle: 'Video Explicativo IA (Español): Lectura de Cartas Náuticas, Latitud, Longitud y Escalas',
          summary: 'Cartas náuticas: tipos según la escala. Croquis de los ríos. Escalas. Meridianos y paralelos. Coordenadas geográficas. El patrón de signos (H-5000). Reconocimiento de puntos notables y ayudas a la navegación.',
          beginnerContent: `
            <h4>🟢 Explicación desde Cero: El Mapa de los Navegantes</h4>
            <p>Una <strong>Carta Náutica</strong> no es un mapa común de rutas terrestres: muestra qué hay <strong>debajo del agua</strong> (profundidades en metros, bancos de arena, piedras, cascos hundidos, tipo de fondo) y las referencias visuales de la costa y el agua (faros, boyas, edificios notables) que nos sirven para saber dónde estamos.</p>
            <h5>1. Meridianos y Paralelos (Cómo ubicarse con Latitud y Longitud)</h5>
            <ul>
              <li><strong>Paralelos (Latitud - $L$ o $\\varphi$):</strong> Son círculos horizontales paralelos al Ecuador ($0^\\circ$). Miden la <strong>Latitud</strong> hacia el Norte ($N$) o hacia el Sur ($S$) de $0^\\circ$ a $90^\\circ$. En Argentina estamos siempre en <strong>Latitud Sur</strong>. Se leen en los márgenes izquierdo y derecho (verticales) de la carta.</li>
              <li><strong>Meridianos (Longitud - $\\omega$ o $G$):</strong> Son semicírculos verticales que van de Polo a Polo pasando por Greenwich ($0^\\circ$). Miden la <strong>Longitud</strong> hacia el Este ($E$) o hacia el Oeste ($W$) de $0^\\circ$ a $180^\\circ$. En Argentina estamos siempre en <strong>Longitud Oeste ($W$)</strong>. Se leen en los márgenes superior e inferior de la carta.</li>
            </ul>
            <h5>2. ¡Regla de Oro en la Carta Mercator!</h5>
            <p>En la escala vertical de las <strong>Latitudes</strong> (a los costados de la carta), <strong>1 minuto de arco de Latitud ($1'$) equivale exactamente a 1 Milla Náutica ($1852\\text{ metros}$)</strong>. Por eso, las distancias con el compás de punta seca se miden <strong>SIEMPRE en la escala de Latitudes (costados laterales) a la altura de tu barco</strong>, y NUNCA en la escala de longitudes (arriba o abajo).</p>
            <h5>3. Tipos de Cartas según su Escala</h5>
            <ul>
              <li><strong>Cartas Generales (pequeña escala, ej. $1:500.000$):</strong> Abarcan una gran superficie con poco detalle (para travesías largas).</li>
              <li><strong>Cartas de Aproximación o Costeras (escala media, ej. $1:100.000$ o $1:50.000$):</strong> Como la clásica Carta H-118 del Río de la Plata Interior.</li>
              <li><strong>Cuarterones / Portulanos (gran escala, ej. $1:15.000$):</strong> Muestran una zona pequeña (un puerto o entrada de canal) con muchísimo detalle.</li>
              <li><strong>Croquis de los Ríos:</strong> Publicaciones del SHN para ríos interiores (Paraná, Uruguay) que muestran el canal, kilometraje y boyado sin proyección cartográfica estricta.</li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Publicación H-5000 (Patrón de Signos y Abreviaturas del SHN)</h5>
            <p>Toda carta oficial argentina es editada por el <strong>Servicio de Hidrografía Naval (SHN)</strong>. Para su lectura técnica se emplea el Patrón de Signos H-5000:</p>
            <ul>
              <li><strong>Sondajes (números en el agua):</strong> Indican la profundidad en metros referida al <strong>Plano de Reducción de Sondajes (PRS)</strong>. Los números en cursiva o sobre zonas verdes entre la línea de costa y el verih (isóbata de $0\\text{ m}$) con una rayita debajo (ej. $\\underline{0}_5$) son <em>alturas de secado</em> (bancos que descubre la bajamar).</li>
              <li><strong>Isóbatas (Veriles):</strong> Líneas que unen puntos de igual profundidad ($2\\text{ m}$, $3\\text{ m}$, $5\\text{ m}$, $10\\text{ m}$).</li>
              <li><strong>Calidad del fondo:</strong> $A$ (Arena), $F$ (Fango/Barro), $P$ (Piedra), $Co$ (Conchilla), $D$ (Duro), $To$ (Tosca). Fundamental para decidir dónde fondear.</li>
              <li><strong>Cascos a pique (Naufragios):</strong> Con parte del casco visible sobre el PRS o sumergidos peligrosos para la navegación de superficie (rodeados de línea punteada y veriles de peligro).</li>
              <li><strong>Puntos Notables:</strong> Objetos conspicuos en tierra o agua cuya posición exacta está cartografiada (faros, antenas, tanques de agua, campanarios, edificios destacados) aptos para tomar marcaciones con la pínula.</li>
            </ul>
          `,
          keyTakeaways: [
            '1 minuto de Latitud (1\') = 1 Milla Náutica = 1852 metros.',
            'Las distancias se miden SIEMPRE en la escala vertical de LATITUDES a la altura de la zona navegada.',
            'Cuanto menor es el denominador de la escala (ej. 1:10.000 vs 1:500.000), MAYOR es la escala y mayor el detalle (Cuarterón).',
            'En Argentina la Latitud es siempre SUR (crece hacia abajo) y la Longitud es siempre OESTE (crece hacia la izquierda).'
          ]
        },
        {
          id: 'ty-nav-u2',
          number: 'Unidad 2',
          title: 'Los Cuatro Problemas Fundamentales de la Navegación',
          isDemoOpen: false,
          videoSceneId: 'cuatro_problemas_rumbos_mareas',
          videoTitle: 'Video Explicativo IA (Español): Rumbos (Rv, Rm, Rc), Distancia, Posición y Cálculo de Mareas',
          summary: 'Dirección (Compás, Declinación, Desvío, Variación Total, Rumbos, Abatimiento y Deriva), Distancia (Milla y Nudo), Velocidad (Corredera vs. Efectiva), Posición y Profundidad (Sondaje + Altura de Marea).',
          beginnerContent: `
            <h4>🟢 Explicación desde Cero: Cómo resolver los 4 Problemas del Navegante</h4>
            <p>Cada vez que salís a navegar tenés que responder 4 preguntas básicas:</p>
            <ol>
              <li><strong>DIRECCIÓN:</strong> ¿Hacia dónde apunto el barco?</li>
              <li><strong>DISTANCIA y VELOCIDAD:</strong> ¿Cuánto falta y a qué velocidad voy?</li>
              <li><strong>POSICIÓN (Situación):</strong> ¿Dónde estoy exactamente ahora?</li>
              <li><strong>PROFUNDIDAD:</strong> ¿Cuánta agua tengo debajo para no tocar el fondo?</li>
            </ol>
            <h5>Problema 1: La Dirección y la Fórmula de los Rumbos</h5>
            <p>En la carta náutica medimos respecto al <strong>Norte Verdadero (Geográfico)</strong>, pero el compás de tu barco apunta al <strong>Norte Magnético</strong> y además sufre el desvío de los metales y cables del propio barco. Por eso existen 3 rumbos:</p>
            <ul>
              <li><strong>Rumbo Verdadero ($Rv$):</strong> El ángulo que trazás y medís en la carta náutica respecto al Norte Verdadero.</li>
              <li><strong>Declinación Magnética ($Dm$):</strong> La diferencia entre el Norte Verdadero y el Norte Magnético del lugar (figura en la rosa de la carta con su variación anual, ej. $8^\\circ 30'\\text{ W}$ en el Río de la Plata). Si es Oeste ($W$) es <strong>negativa ($-$)</strong>; si es Este ($E$) es <strong>positiva ($+$)</strong>.</li>
              <li><strong>Desvío del Compás ($d$):</strong> El error propio de tu compás por el hierro y electricidad del barco (cambia según el rumbo y se saca de la tablilla de desvíos del barco).</li>
              <li><strong>Variación Total ($Vt$):</strong> Es la suma algebraica de ambos errores:
                $$Vt = Dm + d$$
              </li>
              <li><strong>Las 2 Fórmulas que te salvan en el examen:</strong>
                <ul>
                  <li>De Compás a la Carta (para saber por dónde vas):
                    $$Rv = Rc + Dm + d \\quad (\\text{o bien } Rv = Rc + Vt)$$
                  </li>
                  <li>De la Carta al Compás (para saber qué número poner en el compás del barco):
                    $$Rc = Rv - Dm - d \\quad (\\text{o bien } Rc = Rv - Vt)$$
                  </li>
                </ul>
              </li>
            </ul>
            <h5>Problema 4: La Profundidad y las Mareas (Fórmula Clásica de Examen)</h5>
            <p>La profundidad real de agua que tenés en un momento dado es la suma de lo que dice la carta más la altura de la marea en ese instante:</p>
            $$\\text{Profundidad Real (Sondaje)} = \\text{Profundidad de Carta (Plano)} + \\text{Altura de Marea (Hidrometeorológica)}$$
            <p>Y para saber cuánta agua libre queda debajo de tu quilla (<strong>Margen de Seguridad</strong>):</p>
            $$\\text{Agua Bajo Quilla} = \\text{Profundidad Real} - \\text{Calado de tu Barco}$$
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Actualización de la Declinación Magnética ($Dm$)</h5>
            <p>Ejemplo práctico de mesa examinadora PNA: Una carta náutica indica en su rosa: <em>"Declinación Magnética $7^\\circ 10'\\text{ W}$ (2016) - Variación anual $8'\\text{ W}$"</em>. Si navegamos en $2026$ (han transcurrido $10$ años):</p>
            <ul>
              <li>Incremento acumulado: $10 \\times 8'\\text{ W} = 80'\\text{ W} = 1^\\circ 20'\\text{ W}$.</li>
              <li>$Dm$ actualizada a $2026$: $(-7^\\circ 10') + (-1^\\circ 20') = -8^\\circ 30'\\text{ (es decir, } 8^\\circ 30'\\text{ W)}$.</li>
            </ul>
            <h5>2. Rumbo vs. Derrota (Abatimiento y Deriva)</h5>
            <ul>
              <li><strong>Rumbo:</strong> Dirección hacia la cual apunta la línea de crujía (la proa) de la embarcación.</li>
              <li><strong>Derrota:</strong> Trayectoria real efectivamente descripta por la embarcación sobre el fondo.</li>
              <li><strong>Abatimiento ($Ab$):</strong> Desplazamiento lateral provocado por la acción del <strong>viento</strong> sobre la obra muerta y el velamen (hace que el barco "resbale" hacia sotavento). Se compensa orzando (corrigiendo hacia barlovento).</li>
              <li><strong>Deriva:</strong> Desplazamiento de la masa de agua provocado por la <strong>corriente</strong> (fluvial o de marea).</li>
            </ul>
            <h5>3. Unidades y Fórmulas de Distancia y Horizonte</h5>
            <ul>
              <li><strong>Milla Náutica Internacional ($MN$):</strong> $1852\\text{ metros}$ (longitud media de $1'$ de arco de meridiano terrestre).</li>
              <li><strong>Nudo ($kt$):</strong> Unidad de velocidad equivalente a $1\\text{ Milla Náutica por hora}$ ($1,852\\text{ km/h}$).</li>
              <li><strong>Braza:</strong> $6\\text{ pies} = 1,8288\\text{ metros}$ ($\\approx 1,83\\text{ m}$).</li>
              <li><strong>Distancia al Horizonte Marino:</strong> $D_{\\text{millas}} \\approx 2,08 \\times \\sqrt{h_{\\text{ojo (m)}}}$.</li>
            </ul>
            <h5>4. Régimen Mareológico del Río de la Plata</h5>
            <ul>
              <li><strong>Marea Astronómica:</strong> Régimen semidiurno desigual (dos pleamares y dos bajamares por día lunar de $24\\text{ h } 50\\text{ m}$). Entre bajamar y pleamar hay <strong>creciente</strong> (corriente de <em>flujo</em> que entra); en el máximo se produce la <strong>pleamar</strong>; luego la <strong>bajante</strong> (corriente de <em>reflujo</em> que vacía); y en el mínimo la <strong>bajamar</strong>. El instante de inversión en que la corriente se anula se denomina <strong>estoa</strong>.</li>
              <li><strong>Incidencia Meteorológica:</strong> En el Río de la Plata el factor meteorológico (viento SE que apila agua o viento SW/N que la retira) puede superar en amplitud a la marea astronómica. Por ello es obligatorio consultar el <strong>Boletín Mareológico del SHN</strong> que suma la predicción astronómica + la corrección meteorológica.</li>
            </ul>
          `,
          keyTakeaways: [
            'De Compás a Carta: Rv = Rc + Dm + d (donde W es negativo y E es positivo).',
            'De Carta a Compás: Rc = Rv - Dm - d.',
            'Abatimiento es el efecto del VIENTO; Deriva es el efecto de la CORRIENTE.',
            'Profundidad Total = Sondaje de Carta (PRS) + Altura de Marea (Tabla + Corrección Meteorológica).'
          ]
        },
        {
          id: 'ty-nav-u3',
          number: 'Unidad 3',
          title: 'Navegación y Situación en Zonas Especiales',
          isDemoOpen: false,
          videoSceneId: 'derrota_rio_de_la_plata',
          videoTitle: 'Video Explicativo IA (Español): Navegación en el Río de la Plata, Canales y Preparación de Derrota',
          summary: 'Características de las vías navegables (Río de la Plata hasta línea Punta Atalaya - Punta Rosario, Delta y ríos interiores). Entrada y salida a puertos de día y de noche (nacionales y extranjeros limítrofes). Preparación de derrota.',
          beginnerContent: `
            <h4>🟢 Explicación desde Cero: Cómo planificar una salida o cruce real</h4>
            <h5>1. ¿Hasta dónde puedo navegar como Timonel de Yate?</h5>
            <p>Tu habilitación de Timonel te permite navegar <strong>de día y de noche</strong> en:</p>
            <ul>
              <li>Todos los lagos y ríos interiores en toda su extensión.</li>
              <li>Todo el <strong>Río de la Plata Interior</strong> hasta el límite exterior fijado para Timonel: la <strong>línea imaginaria que une Punta Atalaya (Argentina) con Punta Rosario (Uruguay)</strong>. Es decir, ¡podés cruzar al Uruguay (Carmelo, Nueva Palmira, Riachuelo, Colonia del Sacramento, San Juan) siendo Timonel!</li>
            </ul>
            <h5>2. Los pasos para preparar tu Derrota antes de soltar amarras</h5>
            <ol>
              <li><strong>Estudiar la Carta Actualizada:</strong> Traza tu derrota desde tu puerto de salida (ej. San Isidro / La Plata) hasta destino, verificando que no cruces bancos de baja profundidad (como el Banco Playa Honda, Banco Palmas o las rocas de las islas frente a Colonia: Farallón, San Gabriel, López del Este y Oeste).</li>
              <li><strong>Cruzar Canales Comerciales a $90^\\circ$:</strong> Para cruzar el Canal Emilio Mitre o los canales de Martín García / Acceso al Puerto de Buenos Aires o La Plata, hacelo por los pasos habilitados o cortándolos en forma <strong>perpendicular ($90^\\circ$)</strong> para estar el menor tiempo posible dentro del canal y nunca estorbar a los buques mercantes.</li>
              <li><strong>Anotar Rumbos, Distancias y Waypoints:</strong> Medí cada tramo (pierna), su Rumbo Compás ($Rc$) y la distancia en millas para calcular el tiempo estimado de arribo (ETA).</li>
              <li><strong>Identificar Puertos de Alternativa (Abrigos):</strong> Tené siempre previsto a qué puerto o arroyo entrar si el tiempo desmejora a mitad de camino.</li>
            </ol>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Características Hidrográficas del Río de la Plata Superior e Intermedio</h5>
            <ul>
              <li><strong>Sector Costanero Norte (Tigre - San Isidro - Olivos - Dársena Norte):</strong> Presencia del <strong>Banco Playa Honda</strong> (fondos someros limo-arenosos entre $1,20\\text{ m}$ y $2,20\\text{ m}$ al PRS), Canal Costanero, restitución de bikini/pilotes y canal de vinculación.</li>
              <li><strong>Canales de Navegación de Ultramar:</strong> Canal Argentino de Vinculación, Canal Emilio Mitre, Canal Norte/Sur de Acceso a Buenos Aires, Canal Martín García y Canal de Acceso al Puerto La Plata (entre las escolleras de Ensenada/Berisso, con corrientes traversas en la boca de las escolleras).</li>
              <li><strong>Recalada a Colonia del Sacramento (R.O.U.):</strong> Exige especial atención a los bajos fondos rocosos y restingas (Isla San Gabriel, Isla Farallón, Islas López del Este y del Oeste, Restinga de Santa Rita y Banco de los Pescadores), utilizando las boyas laterales y cardinales de ingreso y las enfilaciones luminosas de noche.</li>
            </ul>
          `,
          keyTakeaways: [
            'Límite geográfico del Timonel de Yate en el Río de la Plata: al Oeste de la línea imaginaria Punta Atalaya (Arg.) - Punta Rosario (R.O.U.).',
            'Los canales de navegación comercial deben cruzarse a 90° (perpendicularmente al eje) y sin interferir jamás con buques de ultramar.',
            'En recalada nocturna es fundamental identificar el ritmo y color de los faros y boyas en la carta antes de avistarlos.'
          ]
        }
      ]
    },
    {
      id: 'ty-seguridad',
      title: 'Materia 2: Seguridad I',
      propulsion: 'Vela, Motor y Vela-Motor',
      Modality: 'Teórico-Práctico (40 horas / clase de 45 min c/u)',
      objectivesGeneral: 'Capacitar para familiarizarse con el detalle de la nomenclatura y tecnología marinera básica; adquiriendo nociones relativas a la seguridad de la embarcación y de las personas y a la meteorología. Adquirir habilidad y conocimientos relativos al gobierno y maniobra de una embarcación deportiva y en navegación en zonas especiales, de día y de noche.',
      objectivesSpecific: [
        '1. Reconocer los elementos estructurales, de medida, de arboladura, maniobra, gobierno, armamento, propulsión, jarcias y sistemas funiculares.',
        '2. Actuar en salvaguarda de la vida humana, control de averías, lucha contra incendios, condiciones hidrometeorológicas y comunicaciones.',
        '3. Adquirir capacidad y habilidad en la navegación, gobierno y maniobra de día y de noche.',
        '4. Formar conciencia y criterio de las buenas y normales prácticas marineras.'
      ],
      units: [
        {
          id: 'ty-seg-u1',
          number: 'Unidad 1',
          title: 'Nomenclatura, Estructuras, Arboladura (Vela) y Propulsión (Motor)',
          isDemoOpen: false,
          videoSceneId: 'velero_arboladura_motor',
          videoTitle: 'Video Explicativo IA (Español): Estructura del Casco, Jarcia Firme/Labor, Velas y Motores Marinos',
          summary: 'Flotabilidad, estabilidad, estanqueidad. Estructura del casco (quilla, cuadernas, baos, arrufo, quebranto). Fondeo. Especial Vela: Arboladura, jarcia firme y de labor, partes de la vela. Especial Motor: Motores internos/fuera de borda, hélice, refrigeración, fallas y OM 17/72.',
          beginnerContent: `
            <h4>🟢 Explicación desde Cero: Cómo está construido un yate por dentro y por fuera</h4>
            <h5>1. Las 4 Condiciones que debe cumplir todo barco</h5>
            <ul>
              <li><strong>Flotabilidad:</strong> Capacidad de mantenerse a flote gracias al volumen de agua que desplaza (Principio de Arquímedes: un cuerpo sumergido recibe un empuje de abajo hacia arriba igual al peso del líquido que desaloja).</li>
              <li><strong>Estanqueidad:</strong> Que el casco y las escotillas estén cerrados e impermeables para que no entre agua al interior.</li>
              <li><strong>Estabilidad:</strong> Capacidad del barco de volver a ponerse derecho (<em>adrizarse</em>) cuando una ola o el viento lo inclina (<em>escora</em>), gracias a la forma de su casco o al peso del <strong>quillote (lastre)</strong>.</li>
              <li><strong>Navegabilidad / Gobernabilidad:</strong> Que pueda avanzar y responder al timón.</li>
            </ul>
            <h5>2. El "Esqueleto" del Barco</h5>
            <ul>
              <li><strong>Quilla:</strong> La "columna vertebral" que corre por el fondo de proa a popa.</li>
              <li><strong>Cuadernas:</strong> Las "costillas" que salen hacia los costados desde la quilla para darle forma a las bandas.</li>
              <li><strong>Varengas:</strong> Refuerzos transversales que unen la base de las cuadernas con la quilla en el fondo.</li>
              <li><strong>Baos:</strong> Las vigas que cruzan de banda a banda por arriba para sostener el piso de la cubierta.</li>
              <li><strong>Arrufo, Quebranto y Boleo:</strong> El <em>Arrufo</em> es la curvatura de la cubierta donde la proa y la popa son más altas que el centro (ayuda a no embarcar olas). El <em>Quebranto</em> es lo opuesto (centro más alto). El <em>Boleo (Brusca)</em> es la leve curvatura de los baos para que el agua de lluvia u olas escurra sola hacia los costados.</li>
            </ul>
            <h5>3. Si rendís a VELA (o Vela-Motor): Partes del Velero</h5>
            <ul>
              <li><strong>Jarcia Firme (Cables de acero que sostienen el palo y NO se mueven):</strong>
                <ul>
                  <li><strong>Stay Proel:</strong> Cable que sostiene el mástil hacia la proa (donde se enverga el foque/genoa).</li>
                  <li><strong>Stay Popel:</strong> Cable que sostiene el mástil hacia la popa.</li>
                  <li><strong>Obenques:</strong> Cables laterales que sostienen el mástil hacia las bandas (pasando por las <em>crucetas</em>).</li>
                </ul>
              </li>
              <li><strong>Jarcia de Labor (Cabos que se mueven para subir y orientar las velas):</strong>
                <ul>
                  <li><strong>Drizas:</strong> Cabos que sirven para <strong>izar (subir)</strong> las velas.</li>
                  <li><strong>Escotas:</strong> Cabos que sirven para <strong>cazar (ajustar) o filar (soltar)</strong> el ángulo de las velas según el viento.</li>
                </ul>
              </li>
              <li><strong>Los 3 Puños y los 3 Lados de una Vela Triangular:</strong>
                <ul>
                  <li><strong>Puño de Driza (arriba):</strong> Donde se ata la driza para subirla.</li>
                  <li><strong>Puño de Amura (adelante abajo):</strong> Queda fijo en la proa o en la unión del palo y la botavara.</li>
                  <li><strong>Puño de Escota (atrás abajo):</strong> Donde tira la escota.</li>
                  <li><strong>Gratil:</strong> Lado delantero (envergado al palo o al stay).</li>
                  <li><strong>Pujamen:</strong> Lado inferior (sobre la botavara).</li>
                  <li><strong>Baluma:</strong> Lado trasero libre (donde van los <em>sables o battens</em>).</li>
                </ul>
              </li>
            </ul>
            <h5>4. Si rendís a MOTOR (o Vela-Motor): El Motor Marino</h5>
            <ul>
              <li><strong>Refrigeración:</strong> A diferencia de un auto que se enfría con aire en un radiador, el motor marino se enfría aspirando agua del río/mar mediante una bomba con un <strong>rotor de goma (impulsor)</strong>. ¡En cuanto arrancás el motor, siempre mirá por la banda o popa que salga el chorro testigo de agua de refrigeración! Si no sale agua, apagá el motor de inmediato porque se recalienta y se quema la junta.</li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. ¿Por qué los veleros pueden avanzar en contra del viento (hacer bordes)?</h5>
            <p>Un velero no puede navegar exactamente de proa al viento (zona muerta de $\\approx 45^\\circ$ a cada banda del viento real, donde las velas flamean). Sin embargo, al navegar en <strong>ceñida</strong> (a $45^\\circ$ del viento real), la vela actúa como un <strong>perfil aerodinámico (como el ala de un avión vertical)</strong>:</p>
            <ul>
              <li>El flujo de aire recorre mayor velocidad en la cara convexa de sotavento que en la cara cóncava de barlovento.</li>
              <li>Por el <strong>Teorema de Bernoulli</strong>, esa mayor velocidad en sotavento genera una depresión (succión) que, sumada a la sobrepresión en barlovento, origina una <strong>Fuerza Vélica Total ($F_T$)</strong> casi perpendicular a la vela.</li>
              <li>Esa fuerza se descompone en dos vectores: una <strong>Fuerza de Escora/Abatimiento</strong> (transversal, que es contrarrestada por la resistencia lateral del <strong>quillote u orza</strong> debajo del agua) y una <strong>Fuerza Propulsiva</strong> hacia adelante que hace avanzar al barco hacia barlovento haciendo zigzag (<em>bordejear</em>).</li>
            </ul>
            <h5>2. Motores de Combustión Interna: Otto (Naftero) vs. Diesel</h5>
            <ul>
              <li><strong>Motor Ciclo Otto (Nafta, 2 o 4 tiempos):</strong> La mezcla aire-nafta se inflama mediante el salto de chispa eléctrica en la <strong>bujía</strong>. Es más liviano y potente por kilo, pero utiliza combustible muy volátil (exige estricto cumplimiento de la OM 17/72) y su encendido es sensible a la humedad.</li>
              <li><strong>Motor Ciclo Diesel (Gasoil):</strong> Aspira solo aire, lo comprime a alta presión elevando su temperatura ($>500^\\circ\\text{C}$) y el <strong>inyector</strong> pulveriza gasoil que se autoinflama por compresión (no usa bujías de chispa). Es mucho más seguro contra incendios, de menor consumo específico y gran torque a bajas RPM; su falla más común es la entrada de aire o agua al circuito de gasoil (requiere purgado y filtro trampa de agua).</li>
            </ul>
          `,
          keyTakeaways: [
            'Jarcia Firme sostiene el palo (stay proel, stay popel, obenques); Jarcia de Labor mueve las velas (drizas izan, escotas cazan/filan).',
            'Lados de la vela: Gratil (adelante), Pujamen (abajo), Baluma (atrás, lleva los sables/battens).',
            'Cazar = cobrar/ajustar un cabo; Filar = soltar progresivamente; Azocar = apretar bien un nudo.',
            'En motores marinos, verificar siempre la salida de agua de refrigeración tras el arranque (falla típica: rotura del impulsor/rotor de goma o toma de agua tapada).'
          ]
        },
        {
          id: 'ty-seg-u2',
          number: 'Unidad 2, 3 y 4',
          title: 'Control de Averías, Salvaguarda, Meteorología, Primeros Auxilios y Contaminación',
          isDemoOpen: false,
          videoSceneId: 'meteorologia_frentes_vientos',
          videoTitle: 'Video Explicativo IA (Español): Meteorología Náutica, Frentes, Escala Beaufort, Viento Aparente y Averías',
          summary: 'Averías, timón y aparejo de fortuna. Salvaguarda y VHF. Meteorología: Presión, altas y bajas presiones, nubes, viento real vs. aparente, escala Beaufort, frentes fríos y cálidos, Pampero y Sudestada. Primeros auxilios y prevención de contaminación.',
          beginnerContent: `
            <h4>🟢 Explicación desde Cero: Leer el Cielo, el Barómetro y Cuidar a la Tripulación</h4>
            <h5>1. Centros de Alta y Baja Presión en nuestro Hemisferio Sur</h5>
            <ul>
              <li><strong>Presión Normal al nivel del mar:</strong> $1013\\text{ hectopascales (hPa)}$.</li>
              <li><strong>Baja Presión (Ciclón - $<1013\\text{ hPa}$):</strong> El aire caliente y húmedo sube, se enfría y forma nubes y tormentas. En el <strong>Hemisferio Sur</strong>, los vientos en una Baja Presión giran en <strong>sentido HORARIO (como las agujas del reloj)</strong> hacia el centro. ¡Si el barómetro baja rápido (más de $1\\text{ hPa}$ por hora), se viene mal tiempo o viento fuerte!</li>
              <li><strong>Alta Presión (Anticiclón - $>1013\\text{ hPa}$):</strong> El aire desciende y despeja el cielo (buen tiempo). En el <strong>Hemisferio Sur</strong>, los vientos en una Alta Presión giran en <strong>sentido ANTIHORARIO (contrario a las agujas del reloj)</strong> hacia afuera.</li>
            </ul>
            <h5>2. Viento Real vs. Viento Aparente</h5>
            <ul>
              <li><strong>Viento Real ($Vr$):</strong> Es el viento meteorológico verdadero que sentirías si el barco estuviera fondeado o quieto.</li>
              <li><strong>Viento de la Marcha ($Vm$):</strong> Es el viento que genera tu propio barco al avanzar (igual a tu velocidad pero de proa hacia popa).</li>
              <li><strong>Viento Aparente ($Va$):</strong> Es la suma de los dos, es decir, <strong>el viento que sienten tus velas, tu cara y la veleta en el tope del palo mientras navegás</strong>. Cuando vas en ceñida (hacia adelante), el viento aparente es más fuerte y viene más de proa; cuando vas en empopada (viento de atrás), el viento aparente se siente mucho más suave.</li>
            </ul>
            <h5>3. Frente Frío vs. Frente Cálido</h5>
            <ul>
              <li><strong>Frente Frío (Ej. el Pampero):</strong> Una masa de aire frío y pesado avanza metiéndose como una cuña por debajo del aire caliente y obligándolo a subir de golpe. Forma nubes verticales gigantes (<strong>Cumulonimbus</strong>), tormentas eléctricas cortas y violentas, el viento rota de golpe al Sudoeste (SW) con ráfagas fuertes, baja la temperatura y <strong>sube la presión bruscamente</strong>.</li>
              <li><strong>Frente Cálido:</strong> El aire cálido se desliza suavemente por encima del aire frío. Se anuncia con días de anticipación por nubes altas (<em>Cirrus</em>), luego nubes en capas cada vez más bajas (<em>Altostratus</em>, <em>Nimbostratus</em>) y lluvias finas y continuas.</li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Averías Graves: Timón de Fortuna y Aparejo de Fortuna</h5>
            <ul>
              <li><strong>Timón de Fortuna (si se rompe la pala o la mecha del timón):</strong> Se improvisa remolcando por popa un tangón, bichero o remo largo con una tabla o puerta de tambucho abulonada en su extremo (o remolcando un balde/ancla de capa con dos cabos llevados a los molinetes de ambas bandas del cockpit para dirigir la popa), combinándolo en un velero con el equilibrio vélico (cazar mayor orza el barco; cazar foque/genoa deriva el barco).</li>
              <li><strong>Aparejo de Fortuna (ante rotura de un stay u obenque):</strong> Si falta un obenque, virar inmediatamente para que el obenque roto quede a <strong>sotavento</strong> (donde no trabaja), arriar la vela y asegurar el palo al cadenote con una driza firme de repuesto antes de volver a puerto.</li>
            </ul>
            <h5>2. Virazón (Brisa Marina) y Terral</h5>
            <ul>
              <li><strong>Virazón (Tarde):</strong> Durante el día soleado la tierra se calienta mucho más rápido que el agua; el aire sobre la costa sube (baja presión térmica) y entra aire fresco desde el río/mar hacia la costa.</li>
              <li><strong>Terral (Noche/Madrugada):</strong> De noche la tierra se enfría más rápido que el agua; el aire sobre el agua sube y sopla brisa desde la tierra hacia el agua.</li>
            </ul>
            <h5>3. Primeros Auxilios y Prevención de la Contaminación</h5>
            <ul>
              <li><strong>Hipotermia:</strong> Pérdida de calor corporal central ($<35^\\circ\\text{C}$). En el agua se pierde calor $25$ veces más rápido que en el aire. Retirar ropa mojada, abrigar gradualmente tronco y cabeza, suministrar bebidas tibias dulces solo si está consciente (jamás alcohol ni friccionar extremidades con fuerza en hipotermia severa).</li>
              <li><strong>Prevención de Contaminación (MARPOL / REGINAVE):</strong> Prohibición absoluta de arrojar plásticos, sintéticos, aceites, aguas de sentina con hidrocarburos o baterías en cualquier espejo de agua.</li>
            </ul>
          `,
          keyTakeaways: [
            'En el Hemisferio Sur: Baja Presión (Ciclón) gira en sentido HORARIO; Alta Presión (Anticiclón) gira en sentido ANTIHORARIO.',
            'Nube de tormenta violenta, chubascos, rayos y ráfagas de frente frío: Cumulonimbus (Cb).',
            'Si se corta un obenque navegando a vela, hay que virar de inmediato para dejar el obenque roto a SOTAVENTO.',
            'Las velas trabajan siempre con el VIENTO APARENTE (resultante vectorial del Viento Real y el Viento de la Marcha).'
          ]
        },
        {
          id: 'ty-seg-u5',
          number: 'Unidad 5 y 6',
          title: 'Teoría de Maniobra a Vela y a Motor, y Navegación con Mal Tiempo',
          isDemoOpen: false,
          videoSceneId: 'rosa_vientos_maniobras_vela',
          videoTitle: 'Video Explicativo IA (Español): Rumbos de Vela (Ceñida a Empopada), Virar por Avante, Trasluchar y Mal Tiempo',
          summary: 'Rumbos respecto al viento (ceñida, descuartelar, través, largo, aleta, empopada). Orzar y derivar. Virar por avante y en redondo (trasluchar). Pairear, capear, tomar rizos, tormentín y hombre al agua a vela y motor.',
          beginnerContent: `
            <h4>🟢 Explicación desde Cero: Cómo navegar a Vela en todos los ángulos del viento</h4>
            <h5>1. Los Rumbos del Velero respecto al Viento (La Rosa de los Vientos)</h5>
            <ul>
              <li><strong>Proa al Viento / Enfachado ($0^\\circ$ a $45^\\circ$):</strong> Las velas flamean como una bandera y el barco se frena (no puede avanzar en este ángulo).</li>
              <li><strong>Ceñida o Bolina ($45^\\circ$ del viento):</strong> El ángulo más cerrado posible hacia el viento. Las velas van bien <strong>cazadas (ajustadas al centro)</strong>.</li>
              <li><strong>Descuartelar ($\approx 60^\\circ - 70^\\circ$):</strong> Entre la ceñida y el través. El barco camina rápido y cómodo.</li>
              <li><strong>Través o a la Cuadra ($90^\\circ$):</strong> El viento entra perpendicular al costado del barco. Las velas van a mitad de camino ($45^\\circ$).</li>
              <li><strong>A un Largo ($\approx 120^\\circ$):</strong> El viento entra desde atrás del través. Es el rumbo donde el velero suele alcanzar mayor velocidad.</li>
              <li><strong>Por la Aleta ($135^\\circ$):</strong> El viento entra por la esquina trasera del barco.</li>
              <li><strong>Empopada o Popa Redonda ($180^\\circ$):</strong> El viento entra exactamente desde atrás y las velas van totalmente abiertas (<em>filadas</em> a $90^\\circ$, incluso una a cada banda: "en orejas de burro").</li>
            </ul>
            <h5>2. Las 4 palabras clave de maniobra a vela</h5>
            <ul>
              <li><strong>ORZAR:</strong> Llevar la proa <strong>hacia el viento</strong> (y acompañar <em>cazando</em> las escotas).</li>
              <li><strong>DERIVAR (Arribar):</strong> Alejar la proa <strong>del viento</strong> hacia sotavento (y acompañar <em>filando</em> las escotas).</li>
              <li><strong>VIRAR POR AVANTE:</strong> Cambiar el viento de una banda a la otra pasando la <strong>PROA por el viento</strong> (de ceñida a ceñida). Es una maniobra suave y muy segura.</li>
              <li><strong>VIRAR EN REDONDO (TRASLUCHAR):</strong> Cambiar el viento de una banda a la otra pasando la <strong>POPA por el viento</strong> (en aleta/empopada). ¡Cuidado! Hay que cazar primero la mayor al medio antes de que el viento cambie de lado para que la botavara no cruce de golpe y golpee a un tripulante o rompa la jarcia.</li>
            </ul>
            <h5>3. ¿Qué significa ir con "Amuras a Estribor" o "Amuras a Babor"?</h5>
            <p>La <strong>amura</strong> por la que navegás es <strong>el lado por donde ENTRA el viento al barco</strong> (es decir, el lado contrario a donde está la botavara de la vela mayor):</p>
            <ul>
              <li>Si el viento entra por Estribor (y la botavara está a Babor) $\\rightarrow$ vas con <strong>Amuras a Estribor</strong> (¡tenés prioridad de paso frente a otro velero con amuras a babor!).</li>
              <li>Si el viento entra por Babor (y la botavara está a Estribor) $\\rightarrow$ vas con <strong>Amuras a Babor</strong>.</li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Maniobra de Ponerse a la Capa (Pairear / Capear en un Velero)</h5>
            <p>Para detener el barco en aguas abiertas con viento fuerte para descansar, esperar o pasar un temporal:</p>
            <ul>
              <li>Navegando de ceñida, se <strong>vira por avante SIN soltar la escota del foque/tormentín</strong> (de modo que el foque quede <em>acuartelado</em> a barlovento empujando la proa a derivar).</li>
              <li>Se fila la escota de la vela mayor y se trinca la caña del timón <strong>a la orza (hacia barlovento)</strong>.</li>
              <li>El foque acuartelado hace derivar la proa, mientras el timón y la mayor la hacen orzar: ambas fuerzas se equilibran y el velero queda casi detenido, recibiendo las olas por la amura a $45^\\circ - 60^\\circ$ y dejando una estela turbulenta a barlovento que amansa la rompiente de las olas.</li>
            </ul>
            <h5>2. Navegación con Mal Tiempo (Unidad 6)</h5>
            <ul>
              <li><strong>Reducción de paño (Tomar rizos):</strong> Antes de que llegue la racha del frente, disminuir superficie vélica tomando la 1° o 2° mano de rizos en la mayor y cambiando el genoa por foque o <strong>tormentín</strong> (bajando el centro vélico y reduciendo la escora).</li>
              <li><strong>Costa a sotavento cercana vs. Mar abierto:</strong>
                <ul>
                  <li>Si tenemos la <strong>costa peligrosa muy cerca a sotavento</strong>, no podemos correr hacia ella: debemos <strong>ceñir o capear</strong> con motor de apoyo o paño reducido para ganar barlovento y no terminar varados en la rompiente.</li>
                  <li>Si tenemos <strong>amplio espacio libre a sotavento (aguas abiertas)</strong>, podemos <strong>correr el temporal</strong> (por la aleta, con tormentín o a palo seco, largando cabos por popa en seno o un ancla de mar para frenar las barrenadas y mantener la popa alineada a las olas).</li>
                </ul>
              </li>
              <li><strong>Seguridad personal en cubierta:</strong> Uso obligatorio de chaleco salvavidas y <strong>arnés de seguridad con cabo de amarre enganchado a la línea de vida</strong> tendida de proa a popa antes de salir del cockpit.</li>
            </ul>
          `,
          keyTakeaways: [
            'Amuras a Estribor = el viento entra por Estribor (la botavara va a Babor).',
            'Orzar = acercar la proa al viento (se cazan velas); Derivar = alejar la proa del viento (se filan velas).',
            'Virar por avante pasa la PROA por el viento; Trasluchar (virar en redondo) pasa la POPA por el viento.',
            'Para Ponerse a la Capa (Pairear): foque acuartelado a barlovento, mayor filada y timón a la orza.'
          ]
        }
      ]
    },
    {
      id: 'ty-legislacion',
      title: 'Materia 3: Legislación y Reglamentación I',
      propulsion: 'Vela, Motor y Vela-Motor',
      Modality: 'Teórico-Práctico (10 horas / clase de 45 min c/u)',
      objectivesGeneral: 'Capacitar para tener fundamentos sobre los aspectos legislativos y reglamentarios que refieren a la navegación deportiva, de día y de noche.',
      objectivesSpecific: [
        '1. Identificar el balizamiento y las ayudas a la navegación de día y de noche.',
        '2. Adquirir el conocimiento e interpretación del RIPA y REGINAVE, luces, marcas y señales acústicas de día y de noche.',
        '3. Adquirir nociones sobre el régimen de las actividades náutico deportivas.',
        '4. Adquirir nociones sobre espacios fluvio-marítimos y Tratado del Río de la Plata.',
        '5. Adquirir nociones sobre el régimen contravencional, civil y penal, obligaciones aduaneras y migratorias y normas de cortesía.'
      ],
      units: [
        {
          id: 'ty-leg-u1',
          number: 'Unidad 1 y 2',
          title: 'RIPA Completo (Vela, Motor y Visibilidad Reducida) y Ayudas a la Navegación',
          isDemoOpen: false,
          videoSceneId: 'ripa_veleros_sonoras',
          videoTitle: 'Video Explicativo IA (Español): Derechos de Paso entre Veleros (Regla 12), Señales de Niebla y Luces Nocturnas',
          summary: 'Reglas de paso entre yates a vela (Regla 12 RIPA), señales sonoras en visibilidad reducida (Regla 35), luces de veleros, remolcadores y pesqueros, y ayudas a la navegación diurnas y nocturnas.',
          beginnerContent: `
            <h4>🟢 Explicación desde Cero: Quién tiene paso entre dos Veleros (Regla 12 del RIPA)</h4>
            <p>Cuando dos veleros se acercan con riesgo de choque (y ninguno está alcanzando al otro desde atrás), el RIPA tiene <strong>3 reglas muy simples en orden</strong>:</p>
            <ol>
              <li><strong>Regla 1 (Distinta Amura):</strong> Si uno recibe el viento por babor y el otro por estribor, <strong>el que recibe el viento por BABOR (Amuras a Babor) debe ceder el paso</strong> al que va con Amuras a Estribor.
                <br><em>Truco infalible:</em> Si el viento te entra por <strong>Babor</strong> (color <strong>Rojo</strong> = PARE), vos cedés el paso. Si el viento te entra por <strong>Estribor</strong> (color <strong>Verde</strong> = PASE), vos tenés derecho de paso.</li>
              <li><strong>Regla 2 (Misma Amura):</strong> Si los dos veleros reciben el viento por la misma banda, <strong>el que está a BARLOVENTO (del lado de donde viene el viento) debe ceder el paso</strong> al que está a SOTAVENTO.</li>
              <li><strong>Regla 3 (Duda de noche o mal tiempo):</strong> Si vas con amuras a babor y ves un velero a barlovento pero no podés distinguir con certeza si él viene con amuras a babor o a estribor, <strong>vos debés cederle el paso por precaución</strong>.</li>
            </ol>
            <h5>Señales Sonoras en Niebla o Visibilidad Reducida (Regla 35 - ¡Cada 2 minutos!)</h5>
            <ul>
              <li>🔊 <strong>Barco a motor navegando con arrancada (moviéndose):</strong> <strong>1 pitada larga</strong> cada 2 minutos ($\\text{—}$).</li>
              <li>🔊 <strong>Barco a motor en navegación pero parado (sin arrancada):</strong> <strong>2 pitadas largas</strong> cada 2 minutos ($\\text{— —}$).</li>
              <li>🔊 <strong>Velero, pesquero, sin gobierno, maniobra restringida o remolcando:</strong> <strong>1 pitada larga seguida de 2 cortas</strong> cada 2 minutos ($\\text{— } \\cdot \\cdot$).</li>
              <li>🔔 <strong>Barco fondeado en niebla ($<100\\text{ m}$):</strong> Repique rápido de <strong>campana durante 5 segundos</strong> cada 1 minuto.</li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Luces Especiales Nocturnas que se evalúan en Timonel</h5>
            <ul>
              <li><strong>Velero en navegación:</strong> Luces de bandas (verde y roja) y luz de alcance blanca en popa (nunca lleva luz de tope blanca proel; si es $<20\\text{ m}$ puede combinarlas en un farol tricolor en el tope del palo). Opcionalmente puede exhibir en el tope del palo dos luces todo horizonte en línea vertical: <strong>Roja arriba y Verde abajo</strong> (<em>"Rojo sobre Verde, velero que se pierde"</em>).</li>
              <li><strong>Buque dedicado a la pesca de arrastre:</strong> Dos luces todo horizonte verticales: <strong>Verde arriba y Blanca abajo</strong>.</li>
              <li><strong>Buque dedicado a la pesca que NO sea de arrastre:</strong> Dos luces todo horizonte verticales: <strong>Roja arriba y Blanca abajo</strong>.</li>
              <li><strong>Buque de Práctico:</strong> Dos luces todo horizonte verticales: <strong>Blanca arriba y Roja abajo</strong> (<em>"gorra blanca, nariz roja"</em>).</li>
              <li><strong>Buque con Capacidad de Maniobra Restringida (ej. Draga):</strong> Tres luces todo horizonte verticales: <strong>Roja - Blanca - Roja</strong> (de día: Bola - Rombo - Bola negros).</li>
            </ul>
          `,
          keyTakeaways: [
            'Entre dos veleros (Regla 12): 1° Distinta amura -> cede el de Amuras a Babor; 2° Misma amura -> cede el de Barlovento.',
            'En visibilidad reducida (niebla, Regla 35): Motor con arrancada = 1 larga; Motor sin arrancada = 2 largas; Velero/Pesquero/Sin gobierno/Remolque = 1 larga + 2 cortas (todo cada máx. 2 min).',
            'Luces opcionales de velero en el tope del palo: Roja sobre Verde.',
            'Capacidad de maniobra restringida: Roja - Blanca - Roja (de día: Esfera - Rombo - Esfera).'
          ]
        },
        {
          id: 'ty-leg-u3',
          number: 'Unidad 3, 4 y 5',
          title: 'Régimen Náutico, Jurisdicción Fluvio-Marítima (Tratado del Río de la Plata) y Cortesía',
          isDemoOpen: false,
          videoSceneId: 'jurisdiccion_cortesia_pna',
          videoTitle: 'Video Explicativo IA (Español): Tratado del Río de la Plata, Espacios Marítimos y Protocolo de Banderas',
          summary: 'Atribuciones del Timonel, despacho nacional y limítrofe, Tratado del Río de la Plata (franjas de jurisdicción exclusiva y aguas de uso común), espacios marítimos y normas de cortesía naval.',
          beginnerContent: `
            <h4>🟢 Explicación desde Cero: Límites del Río de la Plata, Soberanía y Cortesía</h4>
            <h5>1. El Tratado del Río de la Plata (Argentina - Uruguay)</h5>
            <p>El Río de la Plata se extiende desde el <strong>Paralelo de Punta Gorda</strong> (donde desembocan el Paraná y el Uruguay) hasta la línea imaginaria que une <strong>Punta Rasa del Cabo San Antonio (Argentina) con Punta del Este (Uruguay)</strong>. El Tratado establece:</p>
            <ul>
              <li><strong>Franjas de Jurisdicción Exclusiva Costera:</strong>
                <ul>
                  <li>En la parte superior/interna (entre Punta Gorda y la línea Colonia - Punta Lara): cada país tiene jurisdicción exclusiva sobre una franja de <strong>2 Millas Náuticas</strong> desde su costa.</li>
                  <li>En la parte media/exterior (desde la línea Colonia - Punta Lara hasta el límite exterior Punta Rasa - Punta del Este): la franja exclusiva costera de cada país es de <strong>7 Millas Náuticas</strong>.</li>
                </ul>
              </li>
              <li><strong>Aguas de Uso Común:</strong> Todo el espejo de agua central por fuera de las franjas de 2 y 7 millas es de uso común y libre navegación para ambos países.</li>
            </ul>
            <h5>2. Normas de Cortesía y Protocolo de Banderas</h5>
            <ul>
              <li><strong>Pabellón Nacional Argentino:</strong> Es el más importante a bordo. Se iza en el asta de popa (o en la baluma/stay popel en navegación a vela) a las 08:00 hs y se arría a la puesta del sol (en navegación o entrando/saliendo de puerto puede mantenerse izado). Ninguna otra bandera puede ser más grande ni estar por encima del Pabellón Nacional.</li>
              <li><strong>Bandera de Cortesía (Cuando visitás un país extranjero, ej. Uruguay):</strong> Al entrar en aguas jurisdiccionales extranjeras, se iza una bandera pequeña de ese país en el <strong>obenque de ESTRIBOR</strong> (el lado de honor).</li>
              <li><strong>Gallardete del Club Náutico:</strong> Se iza en el tope del palo o en el obenque de <strong>BABOR</strong>.</li>
              <li><strong>Cortesía en Amarre y Abarloamiento:</strong> Si tenés que amarrar al costado de otro barco (<em>abarloarte</em>), primero pedí permiso, colocá tus propias defensas, pasá tus cabos principales a tierra (al muelle) para no recargar las cornamusas del otro barco, y cuando tengas que cruzar para bajar a tierra, <strong>pasá siempre por la PROA de la cubierta del barco vecino</strong>, nunca por su cockpit (que es su espacio privado).</li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Espacios Marítimos (Ley 23.968 y CONVEMAR)</h5>
            <p>Medidos a partir de las Líneas de Base normales o rectas de la costa:</p>
            <ul>
              <li><strong>Aguas Interiores:</strong> Ríos, lagos y aguas situadas al interior de las líneas de base. Soberanía plena del Estado ribereño.</li>
              <li><strong>Mar Territorial ($12\\text{ Millas Náuticas}$):</strong> Soberanía plena del Estado ribereño (suelo, subsuelo, columna de agua y espacio aéreo), con la única limitación del <em>derecho de paso inocente</em> de buques extranjeros.</li>
              <li><strong>Zona Contigua ($24\\text{ Millas Náuticas}$ desde las líneas de base):</strong> El Estado ejerce facultades de fiscalización y sanción en materia <strong>aduanera, fiscal, inmigratoria y sanitaria</strong>.</li>
              <li><strong>Zona Económica Exclusiva - ZEE ($200\\text{ Millas Náuticas}$ desde las líneas de base):</strong> Derechos de soberanía para los fines de exploración, explotación, conservación y administración de los recursos naturales vivos y no vivos.</li>
            </ul>
          `,
          keyTakeaways: [
            'Límites del Río de la Plata: nace en el Paralelo de Punta Gorda y termina en la línea Punta Rasa (Cabo San Antonio) - Punta del Este.',
            'Franjas de jurisdicción exclusiva en el Río de la Plata: 2 MN hasta la línea Colonia-Punta Lara, y 7 MN desde allí hasta el límite exterior.',
            'La bandera de cortesía de un país extranjero visitado se iza en el obenque de ESTRIBOR.',
            'Al estar abarloado a otra embarcación, para ir a tierra se debe cruzar siempre por su PROA (nunca por el cockpit).'
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: 'q-ty-1',
      unit: 'Navegación I - Unidad 1',
      question: 'En una Carta Náutica de proyección Mercator, ¿a qué equivale exactamente 1 minuto (1\') medido en la escala vertical de Latitudes?',
      options: [
        'A 1 kilómetro (1000 metros).',
        'A 1 Milla Náutica (1852 metros).',
        'A 1 Braza (1,83 metros).',
        'A 100 metros.'
      ],
      correctIndex: 1,
      explanation: 'Por definición náutica e hidrográfica, 1 minuto de arco de meridiano (leído en la escala lateral de Latitudes a la altura de la zona navegada) equivale a 1 Milla Náutica = 1852 metros.'
    },
    {
      id: 'q-ty-2',
      unit: 'Navegación I - Unidad 2',
      question: 'Si trazamos en la carta un Rumbo Verdadero (Rv) de 110°, la Declinación Magnética actualizada del lugar es de 8° W (-8°) y el Desvío del compás para ese rumbo es de +2° E, ¿qué Rumbo Compás (Rc) debemos gobernar en el barco?',
      options: [
        'Rc = 104°',
        'Rc = 116°',
        'Rc = 120°',
        'Rc = 100°'
      ],
      correctIndex: 1,
      explanation: 'La Variación Total es Vt = Dm + d = (-8°) + (+2°) = -6°. Aplicando la fórmula de Carta a Compás: Rc = Rv - Vt = 110° - (-6°) = 110° + 6° = 116°.'
    },
    {
      id: 'q-ty-3',
      unit: 'Navegación I - Unidad 2',
      question: '¿Cuál es la diferencia técnica entre "Abatimiento" y "Deriva"?',
      options: [
        'Son exactamente sinónimos.',
        'El Abatimiento es el desplazamiento lateral causado por la acción del VIENTO sobre la obra muerta/velas, mientras que la Deriva es el desplazamiento causado por la CORRIENTE del agua.',
        'El Abatimiento lo produce la hélice y la Deriva el timón.',
        'El Abatimiento ocurre solo de noche y la Deriva solo de día.'
      ],
      correctIndex: 1,
      explanation: 'En navegación, el Abatimiento es el ángulo o desplazamiento hacia sotavento producto de la fuerza del viento, mientras que la Deriva es el efecto vectorial de la corriente sobre el casco.'
    },
    {
      id: 'q-ty-4',
      unit: 'Navegación I - Unidad 2',
      question: 'Si en un lugar la Carta Náutica indica un sondaje de 1,40 m al Plano de Reducción, la Tabla de Marea más el boletín meteorológico indican una altura de marea de +0,90 m, y nuestro velero tiene un calado de 1,50 m, ¿cuánta agua libre tenemos bajo la quilla?',
      options: [
        '2,30 metros',
        '0,80 metros',
        '0,10 metros',
        'Estamos varados'
      ],
      correctIndex: 1,
      explanation: 'Profundidad Real = Sondaje de Carta (1,40 m) + Altura de Marea (0,90 m) = 2,30 m. Restando el calado del barco (1,50 m): Agua bajo la quilla = 2,30 m - 1,50 m = 0,80 metros.'
    },
    {
      id: 'q-ty-5',
      unit: 'Navegación I - Unidad 3',
      question: '¿Cuál es el límite exterior en el Río de la Plata hasta el cual se encuentra habilitado para navegar un Timonel de Yate?',
      options: [
        'Hasta la línea imaginaria Punta Rasa (Cabo San Antonio) - Punta del Este.',
        'Al oeste de la línea imaginaria que une Punta Atalaya (República Argentina) con Punta Rosario (República Oriental del Uruguay).',
        'Solo hasta 500 metros de la costa de su club.',
        'Hasta las Islas Malvinas.'
      ],
      correctIndex: 1,
      explanation: 'El programa oficial y el REGINAVE establecen para el Timonel de Yate la navegación en el Río de la Plata al oeste de la línea imaginaria que une Punta Atalaya (Argentina) con Punta Rosario (Uruguay).'
    },
    {
      id: 'q-ty-6',
      unit: 'Seguridad I - Unidad 1',
      question: '¿Cómo se clasifican los elementos de la "Jarcia Firme" de un velero y cuáles son sus componentes principales?',
      options: [
        'Son los cabos móviles para subir y orientar las velas (drizas y escotas).',
        'Son los cables fijos que sostienen el mástil o arboladura (stay proel, stay popel, obenques y burdas).',
        'Son las cadenas y el ancla de fondeo.',
        'Son las defensas y amarras de muelle.'
      ],
      correctIndex: 1,
      explanation: 'La Jarcia Firme está constituida por los cables de acero (o varilla) que sujetan de manera permanente la arboladura: stay de proa, stay de popa y obenques laterales.'
    },
    {
      id: 'q-ty-7',
      unit: 'Seguridad I - Unidad 1',
      question: 'En una vela triangular (como la vela mayor o el foque), ¿cómo se llaman sus tres lados (bordes)?',
      options: [
        'Babor, Estribor y Crujía.',
        'Gratil (borde delantero), Pujamen (borde inferior) y Baluma (borde trasero de salida).',
        'Driza, Amura y Escota.',
        'Quilla, Cuaderna y Bao.'
      ],
      correctIndex: 1,
      explanation: 'Los tres lados de la vela son el Gratil (proel, que se enverga al mástil o stay), el Pujamen (inferior, sobre la botavara) y la Baluma (popel/salida de aire). Driza, Amura y Escota son los tres puños (vértices).'
    },
    {
      id: 'q-ty-8',
      unit: 'Seguridad I - Unidad 2',
      question: 'En el Hemisferio Sur, ¿en qué sentido giran los vientos alrededor de un Centro de Baja Presión (Ciclón) y de un Centro de Alta Presión (Anticiclón)?',
      options: [
        'Baja Presión: sentido HORARIO (hacia adentro); Alta Presión: sentido ANTIHORARIO (hacia afuera).',
        'Baja Presión: sentido ANTIHORARIO; Alta Presión: sentido HORARIO.',
        'Ambos giran siempre de Norte a Sur en línea recta.',
        'No tienen sentido de giro definido.'
      ],
      correctIndex: 0,
      explanation: 'Por efecto de la Fuerza de Coriolis (que en el Hemisferio Sur desvía las masas de aire en movimiento hacia su izquierda), en un Ciclón o Baja Presión el viento gira en sentido HORARIO convergiendo al centro, y en un Anticiclón o Alta Presión gira en sentido ANTIHORARIO divergiendo.'
    },
    {
      id: 'q-ty-9',
      unit: 'Seguridad I - Unidad 5',
      question: '¿En qué consiste la maniobra de "Virar por Avante" en un velero?',
      options: [
        'Cambiar el viento de una banda a la otra pasando la POPA por la dirección del viento.',
        'Cambiar el viento de una banda a la otra orzando hasta pasar la PROA por la dirección del viento.',
        'Arriar todas las velas y fondear de emergencia.',
        'Soltar todas las escotas navegando con viento en popa.'
      ],
      correctIndex: 1,
      explanation: 'Virar por avante consiste en orzar desde un rumbo de ceñida pasando la PROA a través del eje del viento para quedar ciñendo por la otra amura. Pasar la popa por el viento se denomina Virar en Redondo o Trasluchar.'
    },
    {
      id: 'q-ty-10',
      unit: 'Seguridad I - Unidad 5 y 6',
      question: '¿Cómo se ejecuta la maniobra de "Ponerse a la Capa" (Pairear) en un velero sloop para detener la embarcación de forma estable en aguas abiertas con viento fuerte?',
      options: [
        'Izando el spinnaker y poniendo el motor a toda máquina.',
        'Virando por avante sin soltar la escota del foque (para que quede acuartelado a barlovento), filando la vela mayor y fijando el timón a la orza (barlovento).',
        'Poniéndose exactamente en empopada con las dos velas cazadas al medio.',
        'Atando el timón a sotavento con ambas velas sueltas.'
      ],
      correctIndex: 1,
      explanation: 'Al dejar el foque acuartelado a barlovento (que empuja la proa a derivar) y el timón a la orza con la mayor filada (que tiende a orzar), ambas fuerzas se equilibran y el velero queda paireando de forma estable a unos 50°-60° del viento.'
    },
    {
      id: 'q-ty-11',
      unit: 'Legislación I - Unidad 1',
      question: 'Según la Regla 12 del RIPA, cuando dos veleros se aproximan con riesgo de abordaje y reciben el viento por bandas contrarias (distinta amura), ¿cuál debe mantenerse apartado (ceder el paso)?',
      options: [
        'El que recibe el viento por la banda de ESTRIBOR (amuras a estribor).',
        'El que recibe el viento por la banda de BABOR (amuras a babor).',
        'El velero de menor eslora.',
        'El que tenga el casco pintado de blanco.'
      ],
      correctIndex: 1,
      explanation: 'La Regla 12 a) i) del RIPA establece que cuando dos buques de vela reciban el viento por bandas contrarias, el que lo reciba por BABOR se mantendrá apartado de la derrota del otro (el que va con amuras a estribor tiene derecho de paso).'
    },
    {
      id: 'q-ty-12',
      unit: 'Legislación I - Unidad 1',
      question: 'Y si dos veleros se aproximan con riesgo de abordaje recibiendo ambos el viento por la MISMA banda (misma amura), ¿cuál debe ceder el paso?',
      options: [
        'El que esté a SOTAVENTO.',
        'El que esté a BARLOVENTO se mantendrá apartado del que esté a SOTAVENTO.',
        'Ambos deben virar en redondo.',
        'El que vaya más lento.'
      ],
      correctIndex: 1,
      explanation: 'Según la Regla 12 a) ii) del RIPA, cuando ambos veleros reciban el viento por la misma banda, el buque que esté a BARLOVENTO se mantendrá apartado de la derrota del que esté a SOTAVENTO.'
    },
    {
      id: 'q-ty-13',
      unit: 'Legislación I - Unidad 1',
      question: 'Navegando con niebla o visibilidad reducida (Regla 35 del RIPA), ¿qué señal acústica debe emitir una embarcación a motor que navega CON arrancada a intervalos que no excedan de 2 minutos?',
      options: [
        'Una (1) pitada larga.',
        'Dos (2) pitadas largas.',
        'Una (1) pitada larga seguida de dos (2) cortas.',
        'Cinco (5) pitadas cortas.'
      ],
      correctIndex: 0,
      explanation: 'En visibilidad reducida (Regla 35): buque de propulsión mecánica CON arrancada emite 1 pitada larga cada 2 min; SIN arrancada emite 2 pitadas largas; y un velero/pesquero/remolque/sin gobierno emite 1 pitada larga seguida de 2 cortas.'
    },
    {
      id: 'q-ty-14',
      unit: 'Legislación I - Unidad 4',
      question: 'De acuerdo con el Tratado del Río de la Plata y su Frente Marítimo, ¿qué ancho tienen las franjas de jurisdicción exclusiva costera de cada país?',
      options: [
        '12 millas en todo el río.',
        '2 Millas Náuticas en la zona interna (desde Punta Gorda hasta la línea Colonia-Punta Lara) y 7 Millas Náuticas desde allí hasta el límite exterior (Punta Rasa - Punta del Este).',
        '200 Millas Náuticas en cada orilla.',
        'No existen franjas de jurisdicción exclusiva.'
      ],
      correctIndex: 1,
      explanation: 'El Tratado del Río de la Plata establece franjas costeras de jurisdicción exclusiva de 2 MN en el sector superior (Punta Gorda a Colonia-Punta Lara) y de 7 MN en el sector medio/exterior hasta la línea Punta Rasa - Punta del Este.'
    },
    {
      id: 'q-ty-15',
      unit: 'Legislación I - Unidad 5',
      question: 'Según las normas de protocolo y cortesía naval, al ingresar con nuestra embarcación deportiva argentina en aguas y puerto de un país extranjero (por ejemplo, Uruguay), ¿dónde se iza el pabellón de cortesía de ese país?',
      options: [
        'En el asta de popa, reemplazando a la bandera argentina.',
        'En el obenque de ESTRIBOR (banda de honor).',
        'En el obenque de BABOR debajo de las defensas.',
        'Atado al ancla de proa.'
      ],
      correctIndex: 1,
      explanation: 'El Pabellón Nacional propio permanece siempre en el lugar de máximo honor en popa, mientras que la bandera de cortesía del país visitado se iza en el obenque de ESTRIBOR.'
    }
  ]
};
