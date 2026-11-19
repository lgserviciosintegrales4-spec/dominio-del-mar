window.COURSE_PATRON = {
  id: 'patron',
  code: 'PNA-PY-03',
  title: 'Patrón de Yate (Vela / Motor / Vela-Motor)',
  shortTitle: 'Patrón de Yate',
  badge: 'Nivel Avanzado Costero y Marítimo',
  propulsion: 'Vela, Motor y Vela-Motor (Navegación Lacustre, Fluvial en toda su extensión y Marítima Costera a vista de costa)',
  suggestedHours: '116 Horas Cátedra (60 hs Navegación II + 40 hs Seguridad II + 16 hs Legislación II)',
  scopeSummary: 'Capacita y habilita para el gobierno de embarcaciones deportivas en navegación lacustre, fluvial en toda su extensión (incluyendo todo el Río de la Plata Exterior hasta Punta Rasa - Punta del Este) y navegación marítima nacional a vista de costa que supone la cercanía de puertos de apoyo.',
  coevNotice: 'Programa Oficial de Examen para Patrón de Yate (Requisito: poseer antigüedad reglamentaria como Timonel de Yate y aprobar ante PNA / Clubes Náuticos).',
  subjects: [
    {
      id: 'py-navegacion',
      title: 'Materia 1: Navegación II',
      propulsion: 'Vela, Motor y Vela-Motor',
      Modality: 'Teórico-Práctico (60 horas / clase de 45 min c/u)',
      objectivesGeneral: 'Capacitar para determinar la posición de una embarcación deportiva en navegación lacustre, fluvial y marítima nacional a vista de costa que supone la cercanía de puertos de apoyo.',
      objectivesSpecific: [
        '1. Resolver los cuatro problemas fundamentales de la navegación: de la dirección, de la distancia, de la posición y de la profundidad.',
        '2. Adquirir habilidad para el empleo de compases, taxímetros, pínulas y todo otro instrumento que permita determinar líneas de posición, rumbos y derrotas.',
        '3. Determinar mareas, profundidades y sus efectos (puertos patrones y secundarios).',
        '4. Reconocer los principios de construcción y cuidados en el uso de las cartas según sean sus proyecciones (Mercator y Gnomónica).',
        '5. Establecer la situación mediante la navegación por estima gráfica y analítica con viento y corriente.',
        '6. Adquirir habilidad en el empleo de publicaciones náuticas y Avisos a los Navegantes.'
      ],
      units: [
        {
          id: 'py-nav-u1',
          number: 'Unidad 1, 2 y 3',
          title: 'Proyecciones Cartográficas (Mercator y Gnomónica), Alcance de Faros y Magnetismo/Compases',
          isDemoOpen: true,
          videoSceneId: 'mercator_faros_compas',
          videoTitle: 'Video Explicativo IA (Español): Loxodromia vs. Ortodromia, Alcance de Faros y Compensación del Compás',
          summary: 'Proyección Mercator y Gnomónica. Loxodromia y Ortodromia. Alcance geográfico y luminoso de faros. Magnetismo terrestre, taxímetros, demora, marcación y confección de curva de desvíos.',
          beginnerContent: `
            <h4>🟢 Explicación Clara: Loxodromia vs. Ortodromia y Cómo Avistar un Faro de Noche</h4>
            <h5>1. Las 2 líneas de ruta en el planeta: Loxodromia y Ortodromia</h5>
            <ul>
              <li><strong>Loxodromia (La línea recta en tu carta Mercator):</strong> Es la curva que corta a todos los meridianos con el <strong>mismo ángulo (mismo Rumbo Verdadero)</strong>. Es comodísima porque ponés un solo rumbo en el compás y no lo cambiás, aunque en distancias muy largas sobre la esfera terrestre no es el camino más corto.</li>
              <li><strong>Ortodromia (El camino más corto en la esfera):</strong> Es un arco de círculo máximo terrestre. En una carta <strong>Gnomónica</strong> se ve como una línea recta, pero en la carta Mercator se ve como una curva que se arquea hacia el polo.</li>
            </ul>
            <h5>2. ¿A qué distancia se ve la luz de un Faro de noche?</h5>
            <p>Como la Tierra es curva, para ver un faro de noche tienen que cumplirse dos cosas a la vez:</p>
            <ol>
              <li><strong>Alcance Luminoso (Meteorológico):</strong> Qué tan potente es la lámpara del faro y qué tan limpia está la atmósfera (figura en la Lista de Faros).</li>
              <li><strong>Alcance Geográfico ($D_g$):</strong> La distancia máxima a la que la luz asoma sobre la curvatura del horizonte según la altura del faro ($H$ en metros) y la altura de tus propios ojos sobre el agua ($h$ en metros):
                $$D_g \\text{ (en Millas Náuticas)} = 2,08 \\times \\left(\\sqrt{H} + \\sqrt{h}\\right)$$
                <em>Ejemplo de examen:</em> Si un faro mide $H = 36\\text{ m}$ de altura ($\sqrt{36} = 6$) y tus ojos están a $h = 4\\text{ m}$ sobre el agua ($\sqrt{4} = 2$), ¡lo vas a ver asomar en el horizonte a $2,08 \\times (6 + 2) = 16,64\\text{ Millas Náuticas}$!</li>
            </ol>
            <h5>3. Diferencia entre Marcación (Nomenclatura Argentina) y Demora</h5>
            <p><em>¡Atención a la nota oficial del programa de PNA!</em> En Argentina (SHN/PNA) y en otros países a veces se usan al revés, por eso debés conocer ambas definiciones:</p>
            <ul>
              <li><strong>Marcación Absoluta (o Acimut / Demora al Norte):</strong> Es el ángulo medido de $000^\\circ$ a $360^\\circ$ desde el <strong>Norte</strong> (Verdadero, Magnético o Compás) hasta el objeto o faro.</li>
              <li><strong>Marcación Relativa (o Demora Relativa a Proa):</strong> Es el ángulo medido desde la <strong>PROA del barco ($000^\\circ$)</strong> hacia Estribor ($+$) o Babor ($-$) hasta el objeto.</li>
              <li><strong>Fórmula que las relaciona siempre:</strong>
                $$\\text{Marcación al Norte} = \\text{Rumbo del Barco} + \\text{Marcación Relativa a Proa}$$
              </li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Propiedades de la Proyección Cilíndrica Conforme de Mercator</h5>
            <ul>
              <li>Es una proyección <strong>conforme</strong>: conserva exactamente los ángulos (un rumbo medido en la carta es igual al ángulo real en la superficie terrestre).</li>
              <li>Los meridianos son rectas paralelas equidistantes; los paralelos son rectas perpendiculares a los meridianos cuya separación <strong>aumenta con la latitud</strong> proporcionalmente a la secante de la latitud ($\\sec \\varphi$, llamadas <em>latitudes aumentadas o partes meridionales</em>).</li>
              <li>Debido a esta dilatación en latitud, para medir distancias entre dos puntos de distinta latitud se debe tomar la escala sobre el margen vertical en torno a la <strong>Latitud Media ($\\varphi_m = \\frac{\\varphi_1 + \\varphi_2}{2}$)</strong>.</li>
            </ul>
            <h5>2. Magnetismo a Bordo y Confección de la Planilla de Desvíos</h5>
            <ul>
              <li><strong>Hierro Duro (Magnetismo Permanente):</strong> Adquirido durante la construcción del buque y por el bloque del motor; genera desvío semicircular. Se compensa con imanes permanentes longitudinales y transversales en la bitácora (correctores $B$ y $C$).</li>
              <li><strong>Hierro Dulce (Magnetismo Inducido):</strong> Inducido de forma variable por el campo magnético terrestre según el rumbo; genera desvío cuadrantal. Se compensa con las esferas de hierro dulce laterales.</li>
              <li><strong>Levantamiento de la Curva de Desvíos (Borneo del buque):</strong> Se coloca la embarcación sucesivamente a los 8 rumbos principales de compás ($000^\\circ, 045^\\circ, 090^\\circ, 135^\\circ, 180^\\circ, 225^\\circ, 270^\\circ, 315^\\circ$) sobre una <strong>enfilación terrestre de Marcación Verdadera conocida ($Mv$)</strong> (o tomando marcaciones a un punto lejano desde un boyón fijo). Comparando la Marcación Magnética conocida ($Mm = Mv - Dm$) con la Marcación Compás medida ($Mc$), se obtiene el desvío para cada rumbo:
                $$d = Mm - Mc$$
              </li>
            </ul>
          `,
          keyTakeaways: [
            'Loxodromia = recta en carta Mercator (corta meridianos con igual ángulo). Ortodromia = recta en carta Gnomónica (distancia mínima).',
            'Alcance Geográfico de un Faro: Dg = 2,08 * (√H + √h). El alcance efectivo real de avistaje es el MENOR entre el Alcance Geográfico y el Alcance Luminoso.',
            'Para convertir una Marcación Compás (Mc) a Marcación Verdadera (Mv) para trazarla en la carta: Mv = Mc + Dm + d (usando el desvío "d" del RUMBO que lleva el barco, NO el de la marcación).',
            'Verificar siempre que la línea de fe del compás o taxímetro esté perfectamente paralela al plano de crujía.'
          ]
        },
        {
          id: 'py-nav-u4',
          number: 'Unidad 4',
          title: 'Mareas: Sicigia, Cuadratura, Puertos Patrones y Secundarios y Paso bajo Puentes',
          isDemoOpen: false,
          videoSceneId: 'mareas_tablas_puentes',
          videoTitle: 'Video Explicativo IA (Español): Cálculo Completo con Tablas de Marea SHN (Puerto Patrón y Secundario)',
          summary: 'Mareas de sicigia y cuadratura. Puertos patrones y secundarios (Tablas de Marea SHN). Problema directo e inverso. Cálculo de paso sobre bajos fondos y por debajo de puentes.',
          beginnerContent: `
            <h4>🟢 Explicación Paso a Paso: Cómo calcular la Marea en cualquier Puerto y Hora</h4>
            <h5>1. ¿Por qué hay mareas más grandes en ciertos días del mes?</h5>
            <ul>
              <li><strong>Mareas de Sicigia (Mareas Vivas):</strong> Ocurren en <strong>Luna Llena y Luna Nueva</strong>, cuando el Sol, la Tierra y la Luna están alineados y suman su fuerza de atracción. Las pleamares son <strong>más altas</strong> y las bajamares son <strong>más bajas</strong> (máxima amplitud).</li>
              <li><strong>Mareas de Cuadratura (Mareas Muertas):</strong> Ocurren en <strong>Cuarto Creciente y Cuarto Menguante</strong>, cuando el Sol y la Luna forman un ángulo de $90^\\circ$ y sus fuerzas se restan parcialmente. Hay poca diferencia entre pleamar y bajamar (mínima amplitud).</li>
            </ul>
            <h5>2. Puertos Patrones y Puertos Secundarios en la Tabla del SHN</h5>
            <ul>
              <li><strong>Puerto Patrón (ej. Buenos Aires, San Fernando, Martín García, Mar del Plata):</strong> Las Tablas de Marea del SHN traen impresa la hora y altura de todas sus pleamares y bajamares de los 365 días del año.</li>
              <li><strong>Puerto Secundario:</strong> No tiene tabla diaria propia, sino una tabla de <strong>diferencias de hora y de altura</strong> que se le suman o restan a su Puerto Patrón de referencia.</li>
            </ul>
            <h5>3. La Regla de los Doceavos (Para saber la altura entre la Pleamar y la Bajamar)</h5>
            <p>La marea no sube ni baja a velocidad constante (parece una curva sinusoidal: empieza lento, acelera a la mitad y frena al final). Si dividís la duración en 6 horas (6 sextos):</p>
            <ul>
              <li>1ª hora: sube <strong>1/12</strong> de la amplitud.</li>
              <li>2ª hora: sube <strong>2/12</strong> de la amplitud.</li>
              <li>3ª hora: sube <strong>3/12</strong> de la amplitud (¡en la mitad del tiempo ya subió $6/12$, la mitad de la altura!).</li>
              <li>4ª hora: sube <strong>3/12</strong> de la amplitud.</li>
              <li>5ª hora: sube <strong>2/12</strong> de la amplitud.</li>
              <li>6ª hora: sube <strong>1/12</strong> de la amplitud.</li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Resolución del Problema Directo e Inverso con la Tabla N° 1 de Interpolación del SHN</h5>
            <ul>
              <li><strong>Elementos de cálculo:</strong>
                <ul>
                  <li><strong>Duración ($D$):</strong> Tiempo transcurrido entre la pleamar y la bajamar consecutivas ($D = \\text{Hora}_{2} - \\text{Hora}_{1}$).</li>
                  <li><strong>Intervalo ($I$):</strong> Tiempo entre la hora de nuestra observación ($H$) y la pleamar o bajamar más próxima.</li>
                  <li><strong>Amplitud ($A$):</strong> Diferencia absoluta de altura entre la pleamar y la bajamar ($A = h_{\\text{plea}} - h_{\\text{baja}}$).</li>
                </ul>
              </li>
              <li>Con $D$, $I$ y $A$ se ingresa en la tabla de corrección del SHN (o se aplica la fórmula armónica $c = \\frac{A}{2} \\left(1 - \\cos\\left(\\frac{180^\\circ \\cdot I}{D}\\right)\\right)$) para obtener la corrección que se suma a la bajamar o se resta a la pleamar más cercana.</li>
            </ul>
            <h5>2. Cálculo para Paso por Debajo de Puentes (Gálibo Vertical)</h5>
            <p>En las cartas náuticas, la altura libre (<em>gálibo vertical</em>) de los puentes se indica referida al <strong>Nivel Medio (o a la Pleamar Media según la carta)</strong>, mientras que los sondajes están referidos al <strong>Plano de Reducción de Sondajes (PRS)</strong>. Para que el mástil de un velero pase con margen de seguridad bajo un puente, una mayor altura de marea <strong>aumenta la profundidad bajo la quilla pero DISMINUYE la luz libre bajo el puente</strong>:</p>
            $$\\text{Luz Libre Real} = \\text{Cota del Puente al PRS} - \\text{Altura de Marea Actual}$$
          `,
          keyTakeaways: [
            'Sicigia = Luna Llena y Nueva (máxima amplitud). Cuadratura = Cuarto Creciente y Menguante (mínima amplitud).',
            'Regla de los doceavos en las 6 horas de creciente/bajante: 1/12 - 2/12 - 3/12 - 3/12 - 2/12 - 1/12.',
            'Para pasar sobre un banco se busca la PLEAMAR; para pasar con un mástil alto bajo un puente se busca la BAJAMAR.'
          ]
        },
        {
          id: 'py-nav-u5',
          number: 'Unidad 5, 6, 7 y 8',
          title: 'Navegación a Vista de Costa, Marcaciones Sucesivas, Estima Gráfica (Viento/Corriente), Radar y GPS',
          isDemoOpen: false,
          videoSceneId: 'estima_grafica_corriente',
          videoTitle: 'Video Explicativo IA (Español): Marcaciones Sucesivas (4 Cuartas) y Triángulo de Velocidades con Corriente',
          summary: 'Líneas de posición (enfilaciones, corte de marcaciones simultáneas y sucesivas, 4 cuartas y través, ángulo vertical con sextante, arco capaz). Estima directa e inversa con abatimiento y corriente. Radar, GPS y Publicaciones Náuticas.',
          beginnerContent: `
            <h4>🟢 Explicación Paso a Paso: Cómo situarte con 1 solo Faro y Cómo vencer a la Corriente</h4>
            <h5>1. Situarse cuando ves 2 o 3 puntos en la costa (Marcaciones Simultáneas)</h5>
            <p>Tomás con tu pínula la marcación a dos o tres faros/torres separados por un buen ángulo (idealmente cerca de $90^\\circ$ o $60^\\circ$), las convertís a <strong>Marcación Verdadera ($Mv = Mc + Vt$)</strong>, y desde cada faro trazás la línea en la carta. ¡Donde se cruzan las líneas está tu barco!</p>
            <h5>2. ¿Y si de noche hay UN SOLO faro en toda la costa? (Marcaciones Sucesivas y Método de las "4 Cuartas")</h5>
            <p>¡También podés obtener tu posición exacta con un solo faro! El método más famoso y práctico es el de <strong>"Cuatro Cuartas ($45^\\circ$) y Través ($90^\\circ$)"</strong>:</p>
            <ol>
              <li>Navegando a rumbo y velocidad constantes, anotás la hora y la lectura de la corredera cuando el faro está exactamente a <strong>$45^\\circ$ de tu proa (por la amura, o sea 4 cuartas)</strong>.</li>
              <li>Seguís navegando al mismo rumbo hasta que el faro queda exactamente al <strong>Través ($90^\\circ$ de tu proa)</strong>.</li>
              <li>Como se formó un triángulo rectángulo isósceles (dos ángulos de $45^\\circ$), <strong>la distancia que navegaste entre la primera y la segunda marcación es EXACTAMENTE IGUAL a la distancia que te separa del faro cuando lo tenés al través</strong>. ¡Sin hacer ninguna cuenta difícil!</li>
            </ol>
            <h5>3. Los 2 Problemas de Estima Gráfica con Corriente (¡Fijos en el examen!)</h5>
            <ul>
              <li><strong>Problema Directo ("¿A dónde voy a parar?"):</strong> Vos ponés un Rumbo Verdadero (corregido por abatimiento) y navegás $1\\text{ hora}$ a tu velocidad de corredera ($V_p$). Al final de ese vector le sumás la flecha de la corriente (Dirección de la corriente $Rc_{orr}$ e Intensidad horaria $Ih$). Uniendo el inicio con la punta de la corriente obtenés tu <strong>Derrota Verdadera ($Dv$) y tu Velocidad Efectiva ($Ve$)</strong>.</li>
              <li><strong>Problema Inverso ("¿Qué rumbo tengo que poner para llegar al puerto sin que la corriente me tire afuera?"):</strong>
                <ol>
                  <li>Trazás en la carta la línea de la <strong>Derrota Verdadera ($Dv$)</strong> que querés seguir desde tu salida ($A$) hasta el puerto ($B$).</li>
                  <li>Desde el punto de salida ($A$), dibujás el vector de la <strong>Corriente durante 1 hora</strong> ($Rc_{orr}$ e $Ih$).</li>
                  <li>Desde la punta de la flecha de la corriente, abrís el compás de punta seca con la medida de tu <strong>Velocidad de Propulsión en 1 hora ($V_p$)</strong> y cortás la línea de la derrota deseada.</li>
                  <li>¡La dirección de ese segmento es el <strong>Rumbo Verdadero que debés gobernar</strong> para contrarrestar la corriente!</li>
                </ol>
              </li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Distancia a un Faro de Altura Conocida por Ángulo Vertical con Sextante</h5>
            <p>Si conocemos la altura de la estructura de un faro sobre el nivel de pleamar ($H$ en metros) y medimos con el sextante el ángulo vertical ($\\alpha$ en minutos de arco) entre su base y su cúspide:</p>
            $$D \\text{ (en Millas Náuticas)} = \\frac{1,856 \\times H_m}{\\alpha'}$$
            <h5>2. Arco Capaz y Ángulo Horizontal de Seguridad</h5>
            <ul>
              <li><strong>Arco Capaz:</strong> Lugar geométrico de los puntos desde los cuales dos puntos notables de la costa se ven bajo un mismo ángulo horizontal medido con sextante. Es totalmente <strong>independiente de los errores del compás</strong>.</li>
              <li><strong>Ángulo Horizontal de Seguridad:</strong> Permite contornear un banco o bajo fondo peligroso manteniéndose fuera del círculo que encierra el peligro (si el ángulo medido es <em>menor</em> que el ángulo límite de seguridad, estamos en aguas seguras por fuera del peligro).</li>
            </ul>
            <h5>3. Equipos Electrónicos: Radar y GPS</h5>
            <ul>
              <li><strong>GPS / GNSS:</strong> Determina posición, velocidad sobre el fondo (<strong>SOG</strong> - <em>Speed Over Ground</em>), rumbo efectivo sobre el fondo (<strong>COG</strong> - <em>Course Over Ground</em>) y error transversal de derrota (<strong>XTE</strong> - <em>Cross Track Error</em>). Verificar siempre que el Datum configurado en el GPS coincida con el de la carta náutica (<strong>WGS-84</strong>).</li>
              <li><strong>Radar:</strong> Emite pulsos electromagnéticos en banda X ($9\\text{ GHz}$). Es excelente para medir <strong>distancias</strong> (mediante los anillos variables VRM), y algo menos preciso en marcación (cursor EBL) que una marcación visual directa. Tener precaución con ecos falsos por reflexiones múltiples, sectores de sombra producidos por el propio mástil e interferencia por retorno de mar (<em>Sea Clutter</em>) y de lluvia (<em>Rain Clutter</em>).</li>
            </ul>
          `,
          keyTakeaways: [
            'En el método de 4 cuartas (45°) y través (90°), la distancia navegada entre ambas marcaciones es igual a la distancia al faro en el través.',
            'La corriente SIEMPRE lleva el nombre de la dirección HACIA DONDE VA (ej. corriente al 150°), mientras que el viento lleva el nombre de DONDE VIENE.',
            'En GPS: SOG = Velocidad Efectiva sobre el fondo; COG = Derrota Verdadera sobre el fondo; XTE = apartamiento lateral de la ruta.',
            'Las cartas náuticas se actualizan obligatoriamente mediante el folleto quincenal de Avisos a los Navegantes del SHN.'
          ]
        }
      ]
    },
    {
      id: 'py-seguridad',
      title: 'Materia 2: Seguridad II',
      propulsion: 'Vela, Motor y Vela-Motor',
      Modality: 'Teórico-Práctico (40 horas / clase de 45 min c/u)',
      objectivesGeneral: 'Capacitar para actuar con seguridad frente a eventos que pueden ocurrir en navegación lacustre, fluvial y marítima nacional a vista de costa.',
      objectivesSpecific: [
        '1. Ampliar conocimientos respecto de la tecnología marinera, cabos sintéticos, cables y fondeo con dos anclas.',
        '2. Prevenir y actuar en la salvaguarda de la vida humana ante averías, efecto de superficie libre, incendios, naufragio y abandono en balsa salvavidas.',
        '3. Dominar las comunicaciones navales (VHF/HF, CIS, Código Q, SECOSENA y SECONADE) y búsqueda y rescate (SAR).',
        '4. Analizar la carta del tiempo, cálculo del viento verdadero y propulsión mecánica.'
      ],
      units: [
        {
          id: 'py-seg-u1',
          number: 'Unidad 1 y 2',
          title: 'Tecnología Marinera Avanzada, Fondeo con Dos Anclas, Aguas Someras y Remolque en Mar',
          isDemoOpen: false,
          videoSceneId: 'fondeo_dos_anclas_maniobra',
          videoTitle: 'Video Explicativo IA (Español): Fibras Sintéticas, Fondeo a Barba de Gato / Engalgado y Efecto Squat',
          summary: 'Cabos sintéticos (Poliamida, Poliéster, Polipropileno, Kevlar, Dyneema). Cables de acero. Navegación en aguas someras (ola crítica y squat). Fondeo con dos anclas (barba de gato y engalgado). Ancla de capa y Hombre al Agua.',
          beginnerContent: `
            <h4>🟢 Explicación Práctica: Qué Cabo elegir para cada Función y Cómo Fondear con Dos Anclas</h4>
            <h5>1. Las Fibras Sintéticas a Bordo (¿Cuál se estira y cuál no?)</h5>
            <ul>
              <li><strong>Poliamida (Nylon):</strong> Es muy resistente y <strong>se estira mucho (tiene gran elasticidad, hasta $20-25\\%$)</strong>. Por eso es el <strong>MEJOR cabo para FONDEO y AMARRAS</strong> (porque actúa como un elástico que amortigua los tirones de las olas), pero NO sirve para drizas (porque la vela se bajaría al estirarse).</li>
              <li><strong>Poliéster (Dacron):</strong> Muy resistente al sol (UV), al roce y <strong>casi no se estira</strong>. Es el ideal para <strong>DRIZAS y ESCOTAS</strong> de uso general.</li>
              <li><strong>Polipropileno:</strong> Es el único cabo común que <strong>FLOTA en el agua</strong> (y es de colores vivos). No resiste bien el sol ni el roce, pero es obligatorio para la <strong>rabiza del salvavidas circular y para el cabo de remolque</strong> (porque al flotar no se enreda en la hélice).</li>
              <li><strong>Aramida (Kevlar) y Polietileno de Alto Módulo (Dyneema / Spectra):</strong> Fibras de altísima resistencia (más fuertes que el acero a igual peso) y estiramiento casi cero, usadas en drizas y jarcias de competición o altura.</li>
            </ul>
            <h5>2. Las dos formas de Fondear con 2 Anclas con Mal Tiempo</h5>
            <ul>
              <li><strong>A Barba de Gato (En "V" abierta a $45^\\circ - 60^\\circ$ por proa):</strong> Se fondean dos anclas separadas hacia las amuras de babor y estribor. Reduce muchísimo el borneo del barco en fondeaderos estrechos y reparte la carga si el viento bornea.</li>
              <li><strong>Engalgado (En Tándem, una detrás de la otra en la misma línea):</strong> Se une una segunda ancla por delante de la principal mediante un tramo de cadena. Es la técnica de mayor poder de agarre cuando el viento viene de una sola dirección muy fuerte y el fondo es blando (barro/arena suelta).</li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Navegación en Aguas Someras y Canales (Efecto Squat y Ola Crítica)</h5>
            <ul>
              <li>Por el Principio de Venturi/Bernoulli, al navegar con poca agua bajo la quilla en un canal estrecho, el agua acelerada entre el casco y el fondo disminuye su presión hidrostática. Esto provoca el <strong>Efecto Squat (Hundimiento dinámico y alteración del asiento)</strong>: la embarcación <strong>aumenta su calado dinámico</strong> (especialmente en popa), genera una gran ola de popa (<em>ola crítica</em>) y pierde respuesta de timón. La solución inmediata es <strong>reducir la velocidad</strong>.</li>
            </ul>
            <h5>2. Curvas de Evolución para Hombre al Agua con Mal Tiempo o Baja Visibilidad</h5>
            <ul>
              <li><strong>Curva de Anderson (Giro directo de $270^\\circ$):</strong> La más rápida cuando el náufrago está a la vista.</li>
              <li><strong>Curva de Williamson ($60^\\circ$ a una banda y luego todo el timón a la banda opuesta hasta el rumbo inverso $R \\pm 180^\\circ$):</strong> Te devuelve exactamente sobre la propia estela en sentido inverso; es la ideal de noche, con niebla o cuando no se vio el instante exacto de caída.</li>
              <li><strong>Curva de Scharnow / Boutakoff ($240^\\circ$):</strong> Similar a Williamson pero más corta para regresar sobre la derrota recíproca.</li>
            </ul>
          `,
          keyTakeaways: [
            'Nylon (Poliamida) = gran elasticidad -> ideal para FONDEO y AMARRAS.',
            'Dacron (Poliéster) = baja elasticidad -> ideal para DRIZAS y ESCOTAS.',
            'Polipropileno = FLOTA en el agua -> ideal para rabiza de salvavidas y cabo de REMOLQUE (no se engancha en la hélice).',
            'De noche o con niebla para volver sobre la propia estela exacta en Hombre al Agua se utiliza la Curva de Williamson.'
          ]
        },
        {
          id: 'py-seg-u3',
          number: 'Unidad 3, 4 y 5',
          title: 'Superficie Libre, Balsas Salvavidas, Comunicaciones (CIS/Código Q/SECOSENA), Meteorología y Motores',
          isDemoOpen: false,
          videoSceneId: 'superficie_libre_sar_comunicaciones',
          videoTitle: 'Video Explicativo IA (Español): Efecto de Superficie Libre, Balsa Salvavidas, Código Q y Carta Sinóptica',
          summary: 'Efecto de superficie libre del agua embarcada. Tormentas eléctricas y pararrayos. Balsas salvavidas, abandono e hipotermia. Búsqueda y Rescate (SAR). Comunicaciones VHF/HF, Código Q, SECOSENA y SECONADE. Carta del tiempo y diagnóstico de motores.',
          beginnerContent: `
            <h4>🟢 Explicación Clara: Los temas clave de Seguridad II en el examen de Patrón</h4>
            <h5>1. ¿Por qué el agua suelta adentro del barco ("Superficie Libre") puede darlo vuelta?</h5>
            <p>Si entra agua al barco y queda libre moviéndose de banda a banda cuando el barco rola con las olas (<strong>Efecto de Superficie Libre</strong>), cada vez que el barco se inclina hacia un lado, toda esa masa de agua corre de golpe hacia el lado más bajo, desplazando el centro de gravedad hacia afuera y haciendo que el barco pierda su estabilidad y pueda sufrir una <strong>vuelta de campana</strong>. Por eso hay que achicar de inmediato y los tanques y sentinas tienen tabiques internos (<em>rompeolas</em>).</p>
            <h5>2. Cómo usar la Balsa Salvavidas en caso de Abandono</h5>
            <p><em>Regla de oro de supervivencia:</em> <strong>"Siempre se sube a la balsa salvavidas hacia arriba (es decir, recién se abandona el barco cuando el barco realmente se está hundiendo)"</strong>, porque el barco, mientras flote aunque esté averiado, es más visible y seguro que la balsa. Para activarla:</p>
            <ol>
              <li>Atar firme el cabo de disparo (<em>boza</em>) a una cornamusa fuerte del barco.</li>
              <li>Arrojar el contenedor de la balsa al agua por <strong>sotavento</strong>.</li>
              <li>Cobrar todo el cabo de la boza y dar un tirón firme para accionar la botella de $\\text{CO}_2$ que la infla automáticamente.</li>
              <li>Embarcar sin saltar sobre el techo de la balsa, llevar la bolsa de abandono (agua, bengalas, VHF portátil, botiquín) y recién cuando el barco se hunde cortar la boza con el cuchillo sin punta de la balsa (si uno no llega a cortarla, a los $1,5$ a $4\\text{ m}$ de profundidad salta sola la <strong>zafa hidrostática</strong>).</li>
            </ol>
            <h5>3. El Código "Q" y los Sistemas SECOSENA y SECONADE de PNA</h5>
            <ul>
              <li><strong>QTH:</strong> ¿Cuál es su posición (latitud y longitud)? / Mi posición es...</li>
              <li><strong>QTR:</strong> ¿Cuál es la hora exacta?</li>
              <li><strong>QSL:</strong> ¿Acusa recibo? / Comprendido / Recibido.</li>
              <li><strong>QSY:</strong> ¿Cambio a transmitir en otro canal/frecuencia?</li>
              <li><strong>QRM:</strong> Interferencia producida por otros equipos humanos. / <strong>QRN:</strong> Interferencia atmosférica (estática/tormentas).</li>
              <li><strong>SECONADE (Servicio de Comunicaciones para la Navegación Deportiva):</strong> Operado por Prefectura Naval Argentina (Canal 16 de llamada y canales de trabajo informativos como el 15, 71, etc.) para asistencia, partes meteorológicos, alturas de marea y control de tránsito deportivo.</li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Protección contra Descargas Atmosféricas (Rayos a Bordo)</h5>
            <ul>
              <li>El mástil metálico debe estar eléctricamente vinculado a tierra (al agua) mediante cables de cobre de gruesa sección ($\\ge 25\\text{ mm}^2$) conectados a los bulones del quillote metálico o a una placa de descarga sumergida, formando un <strong>cono de protección (Jaula de Faraday)</strong> de aproximadamente $45^\\circ$ a $60^\\circ$ desde el tope del palo. Si no posee instalación fija en una tormenta eléctrica, se puede prender un cable grueso o cadena desde un obenque y sumergir su extremo en el agua.</li>
            </ul>
            <h5>2. Meteorología: Viento contra Corriente e Interpretación de Isobaras</h5>
            <ul>
              <li><strong>Viento en contra de la corriente (ej. Sudestada contra la corriente de bajante del Paraná/Río de la Plata):</strong> Disminuye la longitud de onda de las olas y aumenta drásticamente su altura y pendiente, provocando olas cortas, empinadas y rompientes muy peligrosas en bancos y bocas de canales.</li>
              <li><strong>Gradiente Bárico en la Carta del Tiempo:</strong> Cuanto más juntas están las líneas <strong>isobaras</strong> (líneas que unen puntos de igual presión atmosférica reducida al nivel del mar), mayor es el gradiente de presión y <strong>más intenso es el viento</strong>.</li>
            </ul>
          `,
          keyTakeaways: [
            'El Efecto de Superficie Libre del agua embarcada reduce drásticamente la estabilidad transversal por desplazamiento del centro de gravedad hacia la banda escorada.',
            'Código Q esencial: QTH = Posición; QSL = Recibido; QTR = Hora exacta; QSY = Cambio de canal/frecuencia.',
            'Cuando el viento sopla en dirección OPUESTA a la corriente, las olas se acortan, aumentan su altura y rompen con violencia.',
            'Cuanto más juntas están las isobaras en la carta sinóptica, más fuerte es el viento.'
          ]
        }
      ]
    },
    {
      id: 'py-legislacion',
      title: 'Materia 3: Legislación y Reglamentación II',
      propulsion: 'Vela, Motor y Vela-Motor',
      Modality: 'Teórico-Práctico (16 horas / clase de 45 min c/u)',
      objectivesGeneral: 'Reconocer en detalle los aspectos legislativos y reglamentarios que se refieren a la navegación, la embarcación deportiva y sus tripulantes tanto para los espacios lacustres y fluviales como para los marítimos costeros nacionales.',
      objectivesSpecific: [
        '1. Reconocimiento detallado de las características lumínicas y funciones de boyas, balizas y faros (IALA y anterior).',
        '2. Conocimiento, interpretación y aplicación integral de las reglas del RIPA y REGINAVE.',
        '3. Deberes, derechos, regímenes contravencional, civil y penal, y protocolo en puertos extranjeros.'
      ],
      units: [
        {
          id: 'py-leg-u1',
          number: 'Unidad 1, 2 y 3',
          title: 'Características Lumínicas de Faros, RIPA Integral (Todos los Buques) y Protocolo Internacional',
          isDemoOpen: false,
          videoSceneId: 'faros_luces_especiales_ripa',
          videoTitle: 'Video Explicativo IA (Español): Fases de Faros, Luces de Remolque/Restringidos/Varados y Libre Plática',
          summary: 'Fases y ritmos de faros y boyas (Fija, Destellos, Ocultaciones, Isofase, Centelleante). RIPA detallado (Remolcadores >200m y <200m, Restringido por su calado, Dragas, Buque varado, Anexos). Reglas de cortesía y sanidad en puertos extranjeros.',
          beginnerContent: `
            <h4>🟢 Explicación Clara: Ritmos de Faros y Todas las Combinaciones de Luces del RIPA</h4>
            <h5>1. Cómo distinguir los Faros de Noche por su ritmo de luz</h5>
            <ul>
              <li><strong>Fija ($F$):</strong> Luz encendida de forma continua sin apagarse.</li>
              <li><strong>De Destellos ($D$ o $Fl$):</strong> El tiempo de luz es <strong>más corto</strong> que el tiempo de oscuridad (son breves fogonazos de luz). Ejemplo en la carta: $D\\text{ B } 5\\text{s } 12\\text{M}$ = Destello Blanco cada 5 segundos con 12 Millas de alcance.</li>
              <li><strong>De Ocultaciones ($Oc$):</strong> Al revés del destello: el tiempo de luz es <strong>más largo</strong> que el tiempo de oscuridad (la luz está prendida y se apaga un instante).</li>
              <li><strong>Isofase ($Iso$):</strong> El tiempo de luz y el tiempo de oscuridad duran <strong>exactamente lo mismo</strong> (ej. 2 seg prendida, 2 seg apagada).</li>
              <li><strong>Centelleante ($Q$ o $VQ$):</strong> Destellos muy rápidos y continuos ($50-60$ o $100-120$ por minuto), típicos de las Boyas Cardinales.</li>
            </ul>
            <h5>2. El Cuadro Definitivo de Luces Todo Horizonte Verticales (RIPA)</h5>
            <ul>
              <li>🔴🔴 <strong>Dos Rojas verticales:</strong> Buque <strong>Sin Gobierno</strong> (marca diurna: 2 esferas negras).</li>
              <li>🔴🔴 + ⚪ (fondeo): Buque <strong>Varado</strong> (marca diurna: 3 esferas negras verticales).</li>
              <li>🔴⚪🔴 <strong>Roja - Blanca - Roja:</strong> Buque con <strong>Capacidad de Maniobra Restringida</strong> (marca diurna: Esfera - Rombo - Esfera). Si es una <strong>Draga</strong> trabajando, agrega además 2 luces rojas verticales en la banda obstruida y 2 luces verdes verticales en la banda por donde se puede pasar.</li>
              <li>🔴🔴🔴 <strong>Tres Rojas verticales:</strong> Buque <strong>Restringido por su Calado</strong> (marca diurna: un cilindro negro).</li>
              <li>🟢⚪ <strong>Verde sobre Blanca:</strong> Pesquero de <strong>Arrastre</strong> (marca diurna: 2 conos unidos por sus vértices).</li>
              <li>🔴⚪ <strong>Roja sobre Blanca:</strong> Pesquero que <strong>NO es de arrastre</strong>.</li>
              <li>⚪🔴 <strong>Blanca sobre Roja:</strong> Embarcación de <strong>Práctico</strong>.</li>
              <li>⚪⚪ (o ⚪⚪⚪ en el tope proel) + 🟡 <strong>Luz Amarilla de remolque</strong> sobre la blanca de alcance en popa: <strong>Remolcador</strong> (2 luces de tope blancas si la longitud del remolque es $\\le 200\\text{ m}$; 3 luces de tope blancas si el remolque supera los $200\\text{ m}$).</li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Protocolo Internacional y Arribo a Puerto Extranjero (Unidad 3)</h5>
            <ul>
              <li>Al ingresar desde aguas internacionales o de otro Estado a un puerto extranjero, además de izar la bandera de cortesía del país visitado en el obenque de estribor, la práctica marítima e internacional (Código Internacional de Señales) contempla el izado de la bandera <strong>"Q" (Quebec - totalmente amarilla)</strong> que significa: <em>"Mi buque está sano y pido libre plática"</em> (permiso sanitario, migratorio y aduanero para desembarcar).</li>
              <li>Ningún tripulante puede bajar a tierra ni recibir personas a bordo hasta haber formalizado el Despacho de Entrada ante la Autoridad Marítima, Migraciones y Aduana del puerto receptor.</li>
            </ul>
          `,
          keyTakeaways: [
            'Destello: luz < oscuridad. Ocultación: luz > oscuridad. Isofase: luz = oscuridad.',
            'Tres luces rojas verticales = Restringido por su calado (de día: 1 cilindro negro).',
            'Remolcador: 2 luces blancas de tope verticales si el remolque mide hasta 200 m; 3 luces blancas verticales si supera los 200 m (marca diurna: un rombo negro).',
            'En una draga (Maniobra Restringida: Roja-Blanca-Roja), las 2 luces verdes verticales indican la banda libre de paso y las 2 rojas la banda obstruida.'
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: 'q-py-1',
      unit: 'Navegación II - Unidad 2',
      question: '¿Cómo se representa una línea Loxodrómica y una línea Ortodrómica en una Carta Náutica de proyección Mercator?',
      options: [
        'La Loxodromia se ve como una línea recta (que corta a todos los meridianos con igual ángulo) y la Ortodromia como una curva cóncava hacia el Ecuador.',
        'Ambas se ven siempre como círculos concéntricos.',
        'La Ortodromia es recta en Mercator y curva en Gnomónica.',
        'Ninguna puede dibujarse en una carta.'
      ],
      correctIndex: 0,
      explanation: 'En la proyección cilíndrica conforme de Mercator, todo rumbo constante (Loxodromia) es una línea recta, mientras que la distancia más corta sobre la esfera (Ortodromia / círculo máximo) se proyecta como una curva arqueada hacia el polo correspondiente.'
    },
    {
      id: 'q-py-2',
      unit: 'Navegación II - Unidad 2',
      question: 'Si la elevación focal de un faro sobre el nivel del mar es H = 49 metros y la altura del ojo del observador sobre el agua es h = 4 metros, ¿cuál es el Alcance Geográfico de avistaje del faro? (Fórmula: D = 2,08 * (√H + √h))',
      options: [
        '10,40 Millas Náuticas',
        '18,72 Millas Náuticas',
        '25,00 Millas Náuticas',
        '6,24 Millas Náuticas'
      ],
      correctIndex: 1,
      explanation: 'Aplicando la fórmula de alcance geográfico: √49 = 7 y √4 = 2. Por lo tanto, D = 2,08 * (7 + 2) = 2,08 * 9 = 18,72 Millas Náuticas.'
    },
    {
      id: 'q-py-3',
      unit: 'Navegación II - Unidad 3',
      question: 'Navegando a un Rumbo Compás Rc = 090° (para el cual nuestra tablilla indica un desvío d = +3° E), tomamos con la pínula una Marcación Compás a un faro de Mc = 020°. Si la Declinación Magnética del lugar es Dm = 8° W (-8°), ¿cuál es la Marcación Verdadera (Mv) a trazar en la carta?',
      options: [
        'Mv = 015°',
        'Mv = 025°',
        'Mv = 031°',
        'Mv = 085°'
      ],
      correctIndex: 0,
      explanation: 'La Variación Total depende del RUMBO que lleva el buque (Rc = 090° -> d = +3° E): Vt = Dm + d = -8° + 3° = -5°. Entonces la Marcación Verdadera es Mv = Mc + Vt = 020° + (-5°) = 015°.'
    },
    {
      id: 'q-py-4',
      unit: 'Navegación II - Unidad 4',
      question: '¿En qué fases lunares se producen las "Mareas de Sicigia" (mareas vivas) y qué efecto tienen sobre la amplitud de la marea?',
      options: [
        'En Cuarto Creciente y Cuarto Menguante, produciendo la mínima amplitud.',
        'En Luna Llena y Luna Nueva (conjugación o alineación Sol-Tierra-Luna), produciendo la máxima amplitud (pleamares más altas y bajamares más bajas).',
        'Solo una vez por año en el solsticio de invierno.',
        'Cuando sopla viento del Norte.'
      ],
      correctIndex: 1,
      explanation: 'Las mareas de sicigia ocurren en novilunio (Luna Nueva) y plenilunio (Luna Llena) al sumarse las fuerzas gravitatorias del Sol y la Luna, generando las mayores amplitudes de marea.'
    },
    {
      id: 'q-py-5',
      unit: 'Navegación II - Unidad 5',
      question: 'Navegando a vista de costa a rumbo constante y velocidad de 6 nudos, marcamos un faro a 45° de nuestra proa (4 cuartas) a las 10:00 hs, y a las 10:30 hs lo marcamos exactamente al través (90°). ¿A qué distancia nos encontramos del faro a las 10:30 hs?',
      options: [
        'A 6 Millas Náuticas.',
        'A 3 Millas Náuticas.',
        'A 1,5 Millas Náuticas.',
        'A 12 Millas Náuticas.'
      ],
      correctIndex: 1,
      explanation: 'Por el método de Cuatro Cuartas (45°) y Través (90°), la distancia al faro en el momento del través es igual a la distancia navegada en el intervalo. En 30 minutos (0,5 h) a 6 nudos navegamos 3 Millas Náuticas, por lo que estamos a 3 MN del faro.'
    },
    {
      id: 'q-py-6',
      unit: 'Seguridad II - Unidad 1',
      question: '¿Por qué los cabos de Poliamida (Nylon) son los más recomendados para líneas de fondeo y amarras de muelle, pero NO para drizas de velas?',
      options: [
        'Porque flotan en el agua y se derriten al sol.',
        'Porque tienen un gran coeficiente de elasticidad (se estiran hasta un 20-25% bajo carga), lo que amortigua los tirones del fondeo o el oleaje en el muelle.',
        'Porque son de acero inoxidable trenzado.',
        'Porque son descartables tras un solo uso.'
      ],
      correctIndex: 1,
      explanation: 'La poliamida (Nylon) combina gran resistencia a la tracción con alta elongación elástica, absorbiendo la energía dinámica de los tirones en fondeo y amarre; para drizas se prefiere Poliéster (Dacron) o Dyneema por su bajo estiramiento.'
    },
    {
      id: 'q-py-7',
      unit: 'Seguridad II - Unidad 2',
      question: '¿Cómo se denomina el método de fondeo con dos anclas en el cual ambas se tienden por proa formando un ángulo ("V") de entre 45° y 60° para limitar el borneo y aumentar la seguridad?',
      options: [
        'Fondeo engalgado (en tándem).',
        'Fondeo a barba de gato.',
        'Fondeo a la gira simple.',
        'Fondeo por popa a palo seco.'
      ],
      correctIndex: 1,
      explanation: 'El fondeo con dos anclas abiertas por ambas amuras formando una "V" se denomina "a barba de gato"; mientras que colocar una segunda ancla en la misma cadena/línea delante de la principal se denomina "engalgado".'
    },
    {
      id: 'q-py-8',
      unit: 'Seguridad II - Unidad 3',
      question: '¿Qué peligro crítico produce el "Efecto de Superficie Libre" cuando se acumula agua suelta en la sentina o cabina de una embarcación?',
      options: [
        'Hace que el barco navegue más rápido en ceñida.',
        'Al escorar el barco, el agua libre se desplaza hacia la banda más baja, corriendo el centro de gravedad hacia esa banda y disminuyendo drásticamente la estabilidad transversal (riesgo de vuelta de campana).',
        'Aumenta el francobordo de la embarcación.',
        'Limpia automáticamente el fondo del casco.'
      ],
      correctIndex: 1,
      explanation: 'El efecto de superficie libre desplaza dinámicamente el centro de gravedad hacia la banda de escora, reduciendo la altura metacéntrica virtual (GM) y el brazo adrizante (GZ), pudiendo provocar la pérdida de estabilidad.'
    },
    {
      id: 'q-py-9',
      unit: 'Seguridad II - Unidad 3',
      question: 'En las radiocomunicaciones marítimas, ¿qué significan las siglas "QTH" del Código Internacional Q?',
      options: [
        '¿Cuál es la hora exacta?',
        '¿Cuál es su posición (en latitud y longitud o respecto a una referencia)? / Mi posición es...',
        '¿Tiene interferencia atmosférica?',
        'Apague su equipo de radio inmediatamente.'
      ],
      correctIndex: 1,
      explanation: 'En el Código Q operativo: QTH = Posición actual; QTR = Hora exacta; QSL = Acuse de recibo/comprendido; QSY = Cambio de frecuencia o canal.'
    },
    {
      id: 'q-py-10',
      unit: 'Legislación II - Unidad 1 y 2',
      question: 'De noche avista un buque que exhibe en el maste tres luces todo horizonte en línea vertical: ROJA arriba, BLANCA en el medio y ROJA abajo, y además dos luces VERDES verticales en una banda y dos ROJAS verticales en la otra. ¿De qué buque se trata y por dónde debe pasar?',
      options: [
        'Un pesquero de arrastre; se puede pasar por cualquier lado.',
        'Una draga o buque en operaciones submarinas con capacidad de maniobra restringida; se debe pasar por la banda que exhibe las dos luces VERDES verticales.',
        'Un buque restringido por su calado varado.',
        'Un submarino en superficie.'
      ],
      correctIndex: 1,
      explanation: 'Según la Regla 27 d) del RIPA, un buque dedicado a operaciones de dragado o submarinas exhibe Roja-Blanca-Roja (maniobra restringida) más dos rojas verticales en la banda obstruida y dos verdes verticales en la banda por la que puede pasarse con seguridad.'
    },
    {
      id: 'q-py-11',
      unit: 'Legislación II - Unidad 2',
      question: '¿Qué indica un buque que de noche exhibe TRES (3) luces ROJAS todo horizonte en línea vertical (y de día un cilindro negro)?',
      options: [
        'Buque sin gobierno.',
        'Buque varado.',
        'Buque restringido por su calado (Regla 28 RIPA).',
        'Buque remolcando a más de 200 metros.'
      ],
      correctIndex: 2,
      explanation: 'Por la Regla 28 del RIPA, un buque restringido por su calado exhibe tres luces rojas todo horizonte en línea vertical de noche, o un cilindro negro de día.'
    },
    {
      id: 'q-py-12',
      unit: 'Legislación II - Unidad 1',
      question: '¿Cómo se define una luz "De Ocultaciones" (Oc) en un faro o baliza luminosa?',
      options: [
        'Aquella en la que la duración total de la luz en cada período es visiblemente MÁS LARGA que la duración total de la oscuridad.',
        'Aquella en la que el destello de luz es mucho más corto que la oscuridad.',
        'Aquella en la que la luz y la oscuridad duran exactamente lo mismo.',
        'Una luz que permanece apagada toda la noche.'
      ],
      correctIndex: 0,
      explanation: 'En una luz de Ocultaciones (Oc), la luz permanece encendida y se apaga brevemente (tiempo de luz > tiempo de oscuridad). En la de Destellos (D/Fl), el tiempo de luz es menor que el de oscuridad; y en la Isofase (Iso) ambos tiempos son iguales.'
    }
  ]
};
