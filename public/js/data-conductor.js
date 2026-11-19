window.COURSE_CONDUCTOR = {
  id: 'conductor',
  code: 'PNA-CN-01',
  title: 'Conductor Náutico',
  shortTitle: 'Conductor Náutico',
  badge: 'Nivel Inicial Motor',
  propulsion: 'Motor (Artefactos náuticos y lanchas hasta 7 m de eslora y 140 HP)',
  suggestedHours: '17 Horas Cátedra (12 hs Seguridad + 5 hs Legislación)',
  scopeSummary: 'Habilita para el gobierno de embarcaciones deportivas propulsadas a motor de hasta 7 metros de eslora y hasta 140 HP de potencia (y artefactos acuáticos deportivos sin límite de potencia), en navegación diurna en lagos, ríos interiores, Río de la Plata (con límite de alejamiento costero) y puertos marítimos.',
  coevNotice: 'Programa Oficial de la Comisión Evaluadora para Habilitaciones Náuticas Deportivas (Dirección de Educación - Prefectura Naval Argentina).',
  subjects: [
    {
      id: 'cn-seguridad',
      title: 'Asignatura 1: Seguridad',
      propulsion: 'Motor',
      Modality: 'Teórico-Práctico (12 horas sugeridas)',
      objectivesGeneral: 'Capacitar para familiarizarse con el detalle de la nomenclatura y tecnología marinera básica; adquiriendo nociones relativas a la seguridad de la embarcación y de las personas. Adquirir habilidad y conocimientos relativos al gobierno y maniobra de una embarcación de eslora adecuada y en navegación en zonas especiales.',
      objectivesSpecific: [
        '1. Reconocer los elementos constitutivos básicos, dimensiones, maniobra, gobierno y propulsión, para adquirir familiaridad con la nomenclatura marinera.',
        '2. Adquirir conocimientos básicos que permitan actuar en salvaguarda de la vida humana, en el control de pequeñas averías, en la prevención y lucha contra incendios y en la valorización de las comunicaciones por emergencia y seguridad.',
        '3. Adquirir capacidad y habilidad en la navegación, gobierno y maniobra de embarcaciones, tanto de día como de noche, en condiciones normales, especiales y adversas.',
        '4. Formar conciencia y criterio de las buenas y normales prácticas marineras.'
      ],
      units: [
        {
          id: 'cn-seg-u1',
          number: 'Unidad 1',
          title: 'Nomenclatura Marinera y Nudos Básicos',
          isDemoOpen: true,
          videoSceneId: 'nomenclatura_barco',
          videoTitle: 'Video Explicativo IA (Español): Partes del Barco, Dimensiones y Nudos Marineros',
          summary: 'Conceptos de babor, estribor, proa, popa, banda, calado, puntal y eslora. Nudos marineros más comunes y su aplicación práctica a bordo.',
          beginnerContent: `
            <h4>🟢 Explicación desde Cero (Para quienes recién comienzan)</h4>
            <p>En un barco no decimos "adelante, atrás, izquierda o derecha", porque si te das vuelta mirando hacia atrás, tu izquierda y tu derecha cambian. Por eso en náutica usamos referencias fijas mirando siempre desde la parte trasera hacia la delantera:</p>
            <ul>
              <li><strong>Proa:</strong> Es la parte delantera de la embarcación (la "nariz" que corta el agua).</li>
              <li><strong>Popa:</strong> Es la parte trasera de la embarcación (donde suele ir el motor fuera de borda y el espejo).</li>
              <li><strong>Línea de Crujía:</strong> Es la línea imaginaria longitudinal que divide al barco exactamente en dos mitades iguales de proa a popa (como la columna vertebral).</li>
              <li><strong>Estribor (Derecha - Verde):</strong> Mirando desde popa hacia proa, es todo el lado derecho del barco.</li>
              <li><strong>Babor (Izquierda - Rojo):</strong> Mirando desde popa hacia proa, es todo el lado izquierdo del barco. <em>Regla práctica:</em> En tu reloj de pulsera o en la palabra <strong>B</strong>abor pensá en el corazón (lado izquierdo, color rojo).</li>
              <li><strong>Banda:</strong> Cada una de las mitades laterales del casco (banda de babor y banda de estribor).</li>
              <li><strong>Amuras:</strong> Las partes curvas delanteras (entre el medio del barco y la proa). Hay amura de babor y amura de estribor.</li>
              <li><strong>Aletas:</strong> Las partes curvas traseras (antes de llegar a la popa). Hay aleta de babor y aleta de estribor.</li>
              <li><strong>Través:</strong> La dirección perpendicular ($90^\\circ$) al costado del barco, a la mitad de su largo (Través de Babor y Través de Estribor).</li>
            </ul>
            <h4>Elementos de Cubierta y Seguridad (Cómo se llama cada cosa cuando hay lío)</h4>
            <ul>
              <li><strong>Púlpito (en Proa) y Balcón (en Popa):</strong> Es la barandilla rígida de acero inoxidable. La misma estructura cambia de nombre según en qué punta esté: adelante es el <strong>Púlpito</strong> y atrás es el <strong>Balcón</strong>.</li>
              <li><strong>Candeleros:</strong> Son los postes verticales clavados en el borde de la cubierta (regala) que sostienen los cables perimetrales.</li>
              <li><strong>Guardamancebos:</strong> Son los cables de acero recubiertos o cabos tensos que van de candelero a candelero alrededor de toda la embarcación. Son la barrera de seguridad entre el tripulante y el agua.</li>
              <li><strong>Bañera (o Cockpit):</strong> Es el recinto o hueco abierto hacia popa donde se ubica la tripulación y desde donde se gobierna el timón.</li>
              <li><strong>Imbornales:</strong> Son los orificios o conductos de desagüe de la bañera y la cubierta para que el agua embarcada por lluvia o salpicaduras escurra sola hacia el exterior. ¡Deben mantenerse siempre destapados!</li>
            </ul>
            <h4>Las 4 Medidas que te preguntan siempre en el examen</h4>
            <ul>
              <li><strong>Eslora:</strong> El <em>largo</em> del barco medido de proa a popa (para Conductor Náutico tu límite máximo es de <strong>7 metros de eslora</strong>).</li>
              <li><strong>Manga:</strong> El <em>ancho</em> máximo del barco de banda a banda.</li>
              <li><strong>Puntal:</strong> La <em>altura</em> del casco medida desde la parte inferior (quilla) hasta la cubierta principal.</li>
              <li><strong>Calado:</strong> La profundidad que se hunde el barco en el agua (desde la línea de flotación hasta el punto más bajo del casco o la pata del motor). ¡Es vital conocerlo para no varar!</li>
            </ul>
            <h4>Los 5 Nudos Marineros Indispensables</h4>
            <ol>
              <li><strong>Nudo en Ocho (Lasca):</strong> Nudo de tope que se hace en la punta de un cabo para que no se escape por un pasacabos o roldana.</li>
              <li><strong>Nudo Llano (Rizo):</strong> Sirve para unir dos cabos del <em>mismo grosor (mena)</em> que no trabajen con gran tensión. Se hace: "derecha sobre izquierda, izquierda sobre derecha".</li>
              <li><strong>As de Guía (El rey de los nudos):</strong> Forma una gaza (lazo fijo) que <strong>no se corre ni se ahorca</strong> aunque soporte toneladas de fuerza, y es fácil de desatar después. Sirve para amarrar a un poste/noray o rescatar a una persona.</li>
              <li><strong>Ballestrinque:</strong> Sirve para afirmar rápido un cabo a un poste, pilote o barandilla (por ejemplo, para colgar las defensas).</li>
              <li><strong>Vuelta de Cornamusa:</strong> Es la forma correcta de amarrar el barco a las cornamusas del muelle o de cubierta (vuelta redonda en la base, ochos cruzados arriba y un medio cote de cierre).</li>
            </ol>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <p>De acuerdo con la terminología técnica exigida por la <strong>mesa examinadora de la Prefectura Naval Argentina</strong> y el <strong>REGINAVE (Decreto 779/2019)</strong>:</p>
            <h5>1. Geometría y Sektoriación del Buque</h5>
            <ul>
              <li><strong>Plano Longitudinal o de Crujía:</strong> Plano vertical de simetría que divide el casco en dos bandas: <strong>Estribor</strong> (derecha observando de popa a proa) y <strong>Babor</strong> (izquierda observando de popa a proa).</li>
              <li><strong>Obra Viva (Carena):</strong> Parte sumergida del casco por debajo de la línea de flotación. Proporciona el empuje hidrostático (Principio de Arquímedes).</li>
              <li><strong>Obra Muerta:</strong> Parte emergente del casco desde la línea de flotación hasta la borda o cubierta superior.</li>
              <li><strong>Francobordo:</strong> Distancia vertical medida sobre el costado, en la mitad de la eslora, desde la línea de flotación hasta la línea de la cubierta principal. Determina la reserva de flotabilidad.</li>
              <li><strong>Sectorización de los $360^\\circ$ del horizonte desde el buque:</strong>
                <ul>
                  <li>Proa pura: $000^\\circ$ relativos.</li>
                  <li>Amuras (Babor/Estribor): Sector en torno a los $045^\\circ$ relativos.</li>
                  <li>Través (Babor/Estribor): Dirección perpendicular a crujía ($090^\\circ$ / $270^\\circ$ relativos).</li>
                  <li>Aletas (Babor/Estribor): Sector en torno a los $135^\\circ$ relativos ($45^\\circ$ a proa de la popa).</li>
                  <li>Popa pura: $180^\\circ$ relativos.</li>
                </ul>
              </li>
            </ul>
            <h5>2. Dimensiones Principales Reglamentarias</h5>
            <ul>
              <li><strong>Eslora Máxima ($E_{max}$):</strong> Distancia longitudinal entre los puntos más salientes de proa y popa. Determina el encuadre de la habilitación (Conductor Náutico: hasta $7,00\\text{ m}$) y la tasa anual o matrícula.</li>
              <li><strong>Manga Máxima ($M$):</strong> Anchura máxima transversal medida fuera de forros.</li>
              <li><strong>Puntal de Construcción ($P$):</strong> Distancia vertical medida en el plano de la cuaderna maestra desde el canto superior de la quilla hasta la recta del bao de la cubierta principal. Relación fundamental: $\\text{Puntal} = \\text{Calado} + \\text{Francobordo}$.</li>
              <li><strong>Calado ($C$):</strong> Distancia vertical desde la línea de flotación hasta el canto inferior de la quilla (o apéndice más bajo: hélice/aleta anticavitación en lanchas). Se distingue calado de proa, de popa y calado medio.</li>
            </ul>
            <h5>3. Cabullería y Nudos de Examen Práctico</h5>
            <p>En la mesa práctica de Examen Náutico el examinador entrega un chicote de cabo y solicita ejecutar sin dudar:</p>
            <ul>
              <li><strong>Partes de un cabo:</strong> <em>Chicote</em> (extremo libre), <em>Firme</em> (parte larga o sujeta que trabaja) y <em>Seno</em> (arco o curva entre el chicote y el firme).</li>
              <li><strong>As de Guía:</strong> Gaza fija de amarre y salvamento. No se azoca bajo tracción.</li>
              <li><strong>Ballestrinque (y Ballestrinque doble):</strong> Nudo de sujeción a espeques, candeleros o pilotes; requiere tensión constante o un cote de seguridad en el chicote.</li>
              <li><strong>Vuelta de Rezón:</strong> Específico para entalingar un cabo al arganeo del ancla (incluye dos vueltas redondas sobre el arganeo para evitar el desgaste por rozamiento).</li>
              <li><strong>Vuelta de Escota (Simple o Doble):</strong> Para unir dos cabos de <em>diferente mena</em> (diámetro).</li>
            </ul>
          `,
          keyTakeaways: [
            'Puntal = Calado + Francobordo (pregunta clásica de examen teórico PNA).',
            'Obra Viva = sumergida (carena); Obra Muerta = fuera del agua.',
            'El As de Guía forma un lazo (gaza) que NO se corre; el Ballestrinque sirve para afirmar a un poste o candelero.',
            'Para unir dos cabos de igual mena se usa el Llano; para distinta mena, el Vuelta de Escota.'
          ]
        },
        {
          id: 'cn-seg-u2',
          number: 'Unidad 2',
          title: 'Seguridad de la Embarcación y de las Personas',
          isDemoOpen: false,
          videoSceneId: 'seguridad_combustibles_vhf',
          videoTitle: 'Video Explicativo IA (Español): Control de Averías, Incendios, Combustible y Canal 16 VHF',
          summary: 'Vías de agua y cómo obturarlas. Clases de incendios y matafuegos. Combustibles (OM 17/72) y derrames en sentina. Pirotecnia, Radio VHF Canal 16, Fondeo y Meteorología local.',
          beginnerContent: `
            <h4>🟢 Explicación desde Cero: Cómo cuidar el barco y tu vida</h4>
            <h5>1. Vías de Agua (Si entra agua al casco)</h5>
            <p>Una <strong>vía de agua</strong> es cualquier rotura o agujero en la obra viva (o una manguera suelta debajo de la línea de flotación) por donde ingresa agua al barco.</p>
            <ul>
              <li><strong>¿Qué hacer primero?</strong> Poner los chalecos salvavidas a toda la tripulación, encender la bomba de achique y <strong>localizar el ingreso</strong>.</li>
              <li><strong>¿Cómo se tapa?</strong> Si es un agujero circular (como un pasacasco roto), se clava un <strong>espiche</strong> (cono de madera blanda que al mojarse se hincha y sella). Si es una grieta en el casco, se presiona desde adentro con una almohadilla, colchoneta o trapo grueso apuntalado con una madera, o desde afuera pasando una lona por debajo de la proa (<em>pallete de colisión</em>) para que la misma presión del agua la pegue contra el agujero.</li>
            </ul>
            <h5>2. Incendios a bordo y qué matafuego usar</h5>
            <p>Para que haya fuego se necesitan 3 elementos (Triángulo del Fuego): <strong>Combustible + Oxígeno (aire) + Calor</strong>. En las lanchas deportivas llevamos matafuegos de <strong>Polvo Químico Seco Triclase (ABC)</strong> porque apagan los 3 fuegos que pueden ocurrir a bordo:</p>
            <ul>
              <li><strong>Clase A (Sólidos):</strong> Madera, telas, cabos, fibra de vidrio, tapizados (dejan brasas).</li>
              <li><strong>Clase B (Líquidos inflamables):</strong> Nafta, gasoil, aceite, pintura. ¡Nunca les tires agua porque la nafta flota encendida y desparrama el fuego!</li>
              <li><strong>Clase C (Eléctricos):</strong> Baterías, tablero, alternador, cables con corriente. ¡Tampoco usar agua porque conduce la electricidad!</li>
            </ul>
            <h5>3. Carga de Combustible (Nafta): El momento más crítico</h5>
            <p>El vapor de la nafta es <strong>más pesado que el aire</strong>: si se derrama o evapora, baja y queda atrapado en el fondo del barco (la <strong>sentina</strong>). Una sola chispa al darle arranque puede hacer explotar la lancha. Por eso:</p>
            <ul>
              <li><strong>ANTES de cargar:</strong> Apagar el motor, cortar corriente, apagar cigarrillos o artefactos, hacer bajar a los pasajeros al muelle, cerrar escotillas y puertas de cabina para que no entren gases, y tener el matafuego a mano.</li>
              <li><strong>DURANTE la carga:</strong> Mantener el pico del surtidor haciendo contacto metálico con la boca de carga (evita chispas de electricidad estática) y no rebalsar el tanque.</li>
              <li><strong>DESPUÉS de cargar:</strong> Tapar bien la boca de carga, limpiar inmediatamente cualquier gota derramada, <strong>abrir el compartimiento del motor, oler la sentina y encender el extractor de gases (blower) durante al menos 4 a 5 minutos</strong> antes de girar la llave de arranque.</li>
            </ul>
            <h5>4. Radio VHF y Canal 16 (Emergencias)</h5>
            <ul>
              <li>El <strong>Canal 16 de VHF ($156,8\\text{ MHz}$)</strong> es el canal internacional de <strong>Socorro, Urgencia y Llamada</strong>. Prefectura Naval Argentina lo escucha las 24 horas.</li>
              <li>Solo se usa para pedir auxilio o para llamar a otro barco/guardería y pasar inmediatamente a un canal de trabajo.</li>
              <li>Las 3 palabras clave de emergencia:
                <ul>
                  <li><strong>MAYDAY (3 veces):</strong> Peligro grave e inminente de perder el barco o una vida (hundimiento, incendio, hombre al agua).</li>
                  <li><strong>PAN-PAN (3 veces):</strong> Urgencia (ej. te quedaste sin motor a la deriva o tenés un herido que necesita médico, pero el barco no se hunde ya).</li>
                  <li><strong>SECURITÉ (3 veces):</strong> Aviso de seguridad para otros navegantes (ej. viste un tronco gigante flotando en el canal o aviso de temporal).</li>
                </ul>
              </li>
            </ul>
            <h5>5. Fondeo (Tirar el ancla) y Meteorología Local</h5>
            <ul>
              <li><strong>Línea de fondeo:</strong> Ancla + tramo de cadena (hace que el ancla trabaje horizontal y se clave en el fondo) + cabo afirmado al barco.</li>
              <li><strong>¿Cuánto cabo hay que largar (filar)?</strong> En condiciones normales, <strong>5 veces la profundidad</strong> del lugar (y si hay mucho viento o mal tiempo, de <strong>7 a 10 veces</strong> la profundidad).</li>
              <li><strong>Vientos locales peligrosos en el Río de la Plata y Delta:</strong>
                <ul>
                  <li><strong>Pampero (Sudoeste - SW):</strong> Sopla de tierra tras el paso de un frente frío. Entra de golpe con una nube en forma de "cigarro" y ráfagas muy fuertes, hace bajar el nivel del agua y limpia el cielo.</li>
                  <li><strong>Sudestada (Sudeste - SE):</strong> Dura de 2 a 4 días con lluvia, frío, mala visibilidad, mucha ola y <strong>hace crecer fuertemente el río</strong> porque empuja el agua del mar hacia adentro del Río de la Plata.</li>
                </ul>
              </li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Química del Fuego y Lucha Contra Incendios</h5>
            <ul>
              <li><strong>Tetraedro del Fuego:</strong> Material combustible, comburente (oxígeno $>16\\%$), temperatura de ignición y <em>reacción química en cadena</em>.</li>
              <li><strong>Clasificación Normativa de Fuegos:</strong>
                <ul>
                  <li><strong>Clase A:</strong> Sólidos con formación de brasa (madera, PRFV, textiles). Método principal: enfriamiento (agua) o polvo químico ABC.</li>
                  <li><strong>Clase B:</strong> Líquidos y gases inflamables (nafta, gasoil, GLP). Método principal: sofocación/inhibición (Polvo ABC, Espuma AFFF, $\\text{CO}_2$). Prohibido chorro de agua directo.</li>
                  <li><strong>Clase C:</strong> Equipos eléctricos bajo tensión. Agente no conductor: $\\text{CO}_2$ o Polvo Químico Seco ABC.</li>
                  <li><strong>Clase D:</strong> Metales combustibles (magnesio de bengalas, sodio, aluminio en polvo).</li>
                </ul>
              </li>
              <li><strong>Maniobra ante incendio a bordo:</strong> Reducir o ajustar la velocidad y el rumbo (ponerse popa al viento o navegar a la misma velocidad del viento) para lograr <strong>viento aparente cero</strong> y evitar avivar las llamas, manteniendo el foco de fuego a sotavento de la tripulación.</li>
            </ul>
            <h5>2. Circuito de Combustible (Ordenanza Marítima N° 17/72)</h5>
            <ul>
              <li>Los tanques fijos deben contar con venteo al exterior de la borda con malla arrestallamas, boca de carga sobre cubierta exterior (nunca dentro de la cabina/sentina) y válvula de cierre rápido a la salida del tanque.</li>
              <li>Los carburadores o sistemas de inyección en motores internos nafteros deben poseer bandeja colectora de goteo y pantalla apagallamas retroactiva.</li>
              <li><strong>Procedimiento ante derrame en sentina:</strong> Cortar inmediatamente el interruptor general de batería (para impedir que arranque la bomba de achique automática y genere una chispa o arroje hidrocarburo al agua), ventilar en forma natural abriendo tapas de motor, absorber el combustible con paños absorbentes (retirándolos en bolsas cerradas a tierra) y ventilar exhaustivamente antes de reconectar corriente.</li>
            </ul>
            <h5>3. Señales Pirotécnicas y Radiocomunicaciones</h5>
            <ul>
              <li><strong>Pirotecnia reglamentaria:</strong> Bengalas de mano rojas (visibles de noche y a corta/media distancia; se encienden siempre en el sector de <strong>sotavento</strong> con el brazo extendido hacia afuera de la borda y a $45^\\circ$ para que la escoria incandescente caiga al agua), bengalas con paracaídas (gran altura, visibles a $>15\\text{ MN}$) y señales fumígenas flotantes de humo naranja (uso exclusivamente diurno). Verificar fecha de vencimiento grabada en el cuerpo.</li>
              <li><strong>Radiotelefonía VHF Marino:</strong>
                <ul>
                  <li><strong>Canal 16 ($156,800\\text{ MHz}$):</strong> Socorro, urgencia, seguridad y llamada general. Prohibido mantener conversaciones o pruebas innecesarias.</li>
                  <li><strong>Potencias de transmisión:</strong> Baja potencia (<strong>$1\\text{ Watt}$</strong>) para comunicaciones a corta distancia o dentro de puerto/club; Alta potencia (<strong>$25\\text{ Watts}$</strong>) para llamadas de socorro o larga distancia con estaciones costeras de PNA (<em>L2G Prefectura</em>).</li>
                </ul>
              </li>
            </ul>
            <h5>4. Elementos Constitutivos del Fondeo</h5>
            <ul>
              <li><strong>Partes del ancla:</strong> Arganeo (donde se afirma el grillete/cadena), cepo (en anclas tipo Almirantazgo/Danforth), caña, cruz, brazos, uñas, mapa y pico de loro.</li>
              <li><strong>Función de la cadena:</strong> Su peso forma una curva (<em>catenaria</em>) que amortigua los tirones por oleaje y mantiene la caña del ancla pegada al fondo para que la tracción sea horizontal y no desclave las uñas.</li>
            </ul>
          `,
          keyTakeaways: [
            'Los vapores de nafta son MÁS PESADOS que el aire y se acumulan en la sentina.',
            'Antes de cargar combustible: apagar motor, desembarcar pasajeros, cerrar aberturas.',
            'Después de cargar: ventilar la sentina 4-5 minutos antes de dar contacto.',
            'Bengalas de mano se accionan siempre a SOTAVENTO y fuera de la borda.',
            'Canal 16 VHF (156.8 MHz): MAYDAY (peligro), PAN-PAN (urgencia), SECURITÉ (seguridad). Potencias: 1W y 25W.'
          ]
        },
        {
          id: 'cn-seg-u3',
          number: 'Unidad 3',
          title: 'Maniobra con Embarcaciones a Motor',
          isDemoOpen: false,
          videoSceneId: 'maniobra_motor_mob',
          videoTitle: 'Video Explicativo IA (Español): Zarpar, Gobierno a Motor y Maniobra de Hombre al Agua',
          summary: 'Preparación de la embarcación para zarpar. Arrancar, parar, acelerar y desacelerar. Inversión de marcha, atraque, desatraque y recuperación de hombre al agua.',
          beginnerContent: `
            <h4>🟢 Explicación desde Cero: Cómo manejar una lancha con seguridad</h4>
            <h5>1. Antes de salir (Preparación para zarpar)</h5>
            <ol>
              <li>Verificar que el <strong>tapón de espejo de popa (espiche)</strong> esté colocado y ajustado.</li>
              <li>Controlar cantidad de combustible (Regla del 1/3: un tercio para ir, un tercio para volver, un tercio de reserva), aceite y nivel de batería.</li>
              <li>Revisar que estén todos los <strong>elementos de seguridad obligatorios</strong> (chalecos para cada tripulante, matafuego con carga vigente, bengalas al día, pala bichero, silbato, achicador, linterna, ancla con cabo/cadena) y la documentación (Certificado de Matrícula, carnet náutico vigente y DNI).</li>
              <li>Colocarse el <strong>cordón de hombre al agua (corte de ignición)</strong> en la muñeca o el chaleco del conductor: si caés al agua, se desconecta y apaga el motor al instante para que la lancha no gire en círculos y te lastime con la hélice.</li>
            </ol>
            <h5>2. Cómo dobla una lancha (Diferencia con un auto)</h5>
            <p>En un auto doblan las ruedas de adelante, pero en una lancha el empuje está atrás (en la popa). Por eso, cuando doblás el volante hacia estribor, <strong>primero la popa se desplaza hacia babor</strong> y recién ahí la proa apunta a estribor. ¡Tenelo muy en cuenta al salir de un muelle para no golpear la popa contra el muelle o contra el barco de al lado!</p>
            <p>Además, las lanchas <strong>no tienen freno</strong>: para frenar hay que desacelerar, pasar por punto muerto (neutro) haciendo una pausa de un segundo para no romper la caja, y recién poner un toque de marcha atrás (<em>ciar</em>) para detener la inercia (<em>estropada</em>).</p>
            <h5>3. Maniobra de Hombre al Agua (¡Pregunta obligatoria!)</h5>
            <p>Si alguien cae al agua:</p>
            <ol>
              <li>Gritar fuerte <strong>"¡Hombre al agua por estribor/babor!"</strong> y <strong>tirar el timón hacia la MISMA banda por donde cayó</strong> la persona (así alejás inmediatamente la popa y la hélice del náufrago).</li>
              <li>Arrojarle un elemento flotante (salvavidas circular o DAF) y designar a un tripulante para que <strong>no deje de mirarlo ni señalarlo con el brazo extendido</strong> en ningún momento.</li>
              <li>Dar una vuelta amplia y acercarse al náufrago <strong>con la proa enfrentando al viento y la corriente</strong> a mínima velocidad.</li>
              <li>Ubicar al náufrago por la banda de <strong>barlovento</strong> (o del lado del timonel para verlo siempre) y, antes de tocarlo con la proa/banda, <strong>PONER PUNTO MUERTO Y APAGAR EL MOTOR</strong> para subirlo sin ningún riesgo con la hélice.</li>
            </ol>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Efectos Combinados de Hélice y Timón</h5>
            <ul>
              <li><strong>Giro de la hélice:</strong> La mayoría de las embarcaciones monohélice poseen hélice <strong>dextrógira</strong> (vista desde popa hacia proa, en marcha avante gira en sentido de las agujas del reloj; en marcha atrás gira en sentido antihorario).</li>
              <li><strong>Fuerza de presión lateral de las palas (Efecto evolutivo):</strong> Las palas inferiores trabajan en agua de mayor presión hidrostática y menos turbulenta que las superiores. Por ello:
                <ul>
                  <li>En <strong>marcha avante</strong> con hélice dextrógira, la popa tiende a caer a <strong>estribor</strong> y la proa a babor.</li>
                  <li>En <strong>marcha atrás (ciando)</strong> con hélice dextrógira, la popa cae fuertemente a <strong>babor</strong> y la proa a estribor.</li>
                </ul>
              </li>
            </ul>
            <h5>2. Atraque y Desatraque a Muelle</h5>
            <ul>
              <li><strong>Atraque:</strong> Aproximarse siempre <strong>en contra del elemento dominante (corriente o viento)</strong> con un ángulo de $20^\\circ$ a $30^\\circ$ respecto al muelle, a mínima velocidad de gobierno. Al estar la proa cerca del muelle, dar timón hacia afuera y un golpe corto de marcha atrás para detener la arrancada y adosar la popa paralelamente al muelle.</li>
              <li><strong>Desatraque con viento o corriente abatiendo sobre el muelle:</strong> Dejar pasado un <em>spring de proa</em> en seno, colocar defensas en la amura, timón hacia el muelle y dar avante muy suave para abrir la popa; una vez libre la popa, largar el spring y salir dando marcha atrás con la popa hacia aguas libres.</li>
            </ul>
            <h5>3. Protocolo Exacto de Hombre al Agua (MOB) en Examen Práctico PNA</h5>
            <ul>
              <li>1° Acción inmediata: Timón a la banda de caída (libera la hélice) y desacelerar.</li>
              <li>2° Arrojar salvavidas y mantener vigía visual permanente.</li>
              <li>3° Ejecutar curva de evolución (Maniobra de Anderson o giro redondo) para quedar a sotavento del náufrago, aproximándose proa al viento/corriente.</li>
              <li>4° Cortar arrancada a $1$ o $2$ esloras y <strong>detener la hélice (punto muerto / motor apagado)</strong> antes del contacto físico con la persona en el agua. Embarcar preferentemente por popa/planchada con motor detenido para no comprometer la estabilidad transversal en embarcaciones menores.</li>
            </ul>
          `,
          keyTakeaways: [
            'Si cae un hombre al agua por estribor, el timón se gira inmediatamente a ESTRIBOR para alejar la hélice.',
            'La aproximación final al hombre al agua y al muelle se hace SIEMPRE en contra del viento/corriente (el que domine).',
            'Al llegar al náufrago es obligatorio poner PUNTO MUERTO / APAGAR MOTOR antes de izarlo a bordo.',
            'En hélice dextrógira dando marcha atrás (ciando), la popa cae hacia BABOR.'
          ]
        }
      ]
    },
    {
      id: 'cn-legislacion',
      title: 'Asignatura 2: Legislación y Reglamentación',
      propulsion: 'Motor',
      Modality: 'Teórico-Práctico (5 horas sugeridas)',
      objectivesGeneral: 'Capacitar para tener fundamentos sobre los aspectos legislativos y reglamentarios que refieren a la navegación deportiva. No se dirigirá la instrucción al conocimiento detallado de normas y reglas, sino a lo indispensable como para comprender deberes y derechos, interpretar lo que se aviste y proceder con seguridad.',
      objectivesSpecific: [
        '1. Identificar el balizamiento y las ayudas a la navegación: su aplicación e interpretación de sus funciones.',
        '2. Adquirir el conocimiento e interpretación del Reglamento Nacional e Internacional para prevenir abordajes, reglas de gobierno y maniobra, luces, marcas diurnas y señales acústicas más significativas.',
        '3. Adquirir nociones sobre el régimen de las actividades náutico deportivas, respecto de las embarcaciones y sus tripulantes.',
        '4. Adquirir nociones sobre el régimen contravencional, civil y penal, vinculantes con las embarcaciones deportivas y sus tripulantes.'
      ],
      units: [
        {
          id: 'cn-leg-u1',
          number: 'Unidad 1',
          title: 'Reglamento Internacional para Prevenir los Abordajes (RIPA) y REGINAVE',
          isDemoOpen: true,
          videoSceneId: 'ripa_luces_paso',
          videoTitle: 'Video Explicativo IA (Español): Luces de Navegación, Marcas Diurnas y Derechos de Paso (RIPA)',
          summary: 'Luces y marcas. Derechos de paso para embarcaciones propulsadas a vela y a motor. Señales acústicas de maniobra y prioridades.',
          beginnerContent: `
            <h4>🟢 Explicación desde Cero: Las "Reglas de Tránsito" en el Agua</h4>
            <p>En el agua no hay carriles pintados ni semáforos, por eso existe el <strong>RIPA (Reglamento Internacional para Prevenir los Abordajes)</strong> y el <strong>REGINAVE</strong> argentino. Con estas 4 reglas simples nunca vas a dudar quién tiene prioridad:</p>
            <h5>1. Las 3 Situaciones entre dos lanchas a motor (Reglas 13, 14 y 15)</h5>
            <ol>
              <li><strong>Vuelta Encontrada (De frente):</strong> Si dos lanchas vienen de frente o casi de frente con riesgo de choque, <strong>LAS DOS deben caer (doblar) a ESTRIBOR (a su derecha)</strong> para pasar babor con babor.</li>
              <li><strong>Situación de Cruce:</strong> Si dos lanchas se cruzan, <strong>tiene prioridad la que viene por tu derecha (por tu ESTRIBOR)</strong>. Miralo como un semáforo: si vos mirás al otro barco por tu banda de Estribor (luz verde tuya) y a él le ves su banda de Babor (luz roja suya), ¡el rojo te dice PARE! Vos tenés que cederle el paso cayendo a estribor para pasar por detrás de su popa.</li>
              <li><strong>Barco que Alcanza (Sobrepaso):</strong> Todo barco que viene de atrás más rápido (en el sector de la luz de alcance de popa) y quiere pasar a otro —incluso si el que alcanza es un velero— <strong>debe mantenerse apartado</strong> del barco alcanzado hasta pasarlo por completo.</li>
            </ol>
            <h5>2. ¿Quién tiene prioridad entre distintos tipos de barcos? (Regla 18 - "La Pirámide")</h5>
            <p>Una lancha a motor (buque de propulsión mecánica en navegación) es el más ágil, por lo que debe cederle el paso a casi todos:</p>
            <ol>
              <li><strong>1° Buque Sin Gobierno</strong> (tiene avería y no puede maniobrar).</li>
              <li><strong>2° Buque con Capacidad de Maniobra Restringida</strong> (ej. una draga trabajando, un buque colocando boyas).</li>
              <li><strong>3° Buque Restringido por su Calado</strong> (grandes buques mercantes en un canal que no pueden salirse del cauce).</li>
              <li><strong>4° Buque Dedicado a la Pesca</strong> (con redes o aparejos en el agua que restringen su maniobra; ¡no incluye pesca deportiva con caña!).</li>
              <li><strong>5° Embarcación a Vela</strong> (navegando exclusivamente a vela; ojo: si el velero lleva el motor prendido, reglamentariamente pasa a ser un barco a motor).</li>
              <li><strong>6° Embarcación a Motor</strong> (y en canales de jurisdicción nacional, toda embarcación deportiva debe cederle siempre el paso a los buques comerciales, remolcadores o de pasajeros).</li>
            </ol>
            <h5>3. Luces de Navegación Nocturna</h5>
            <ul>
              <li><strong>Luz de Banda de Estribor:</strong> 🟢 <strong>VERDE</strong> (visible desde la proa hasta $22,5^\\circ$ más atrás del través de estribor = $112,5^\\circ$).</li>
              <li><strong>Luz de Banda de Babor:</strong> 🔴 <strong>ROJA</strong> (visible desde la proa hasta $22,5^\\circ$ más atrás del través de babor = $112,5^\\circ$).</li>
              <li><strong>Luz de Tope (Proa/Mástil en motor):</strong> ⚪ <strong>BLANCA</strong> hacia adelante ($225^\\circ$, suma de las dos bandas).</li>
              <li><strong>Luz de Alcance (Popa):</strong> ⚪ <strong>BLANCA</strong> hacia atrás ($135^\\circ$, completa los $360^\\circ$).</li>
              <li><em>En lanchas menores de 12 metros de eslora:</em> La luz de tope y de alcance pueden reemplazarse por una única <strong>Luz Blanca Todo Horizonte ($360^\\circ$)</strong> más las dos luces de bandas (verde y roja).</li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Luces y Marcas Diurnas Reglamentarias (Parte C del RIPA)</h5>
            <ul>
              <li><strong>Embarcación a motor $<12\\text{ m}$ en navegación:</strong> Luz blanca todo horizonte ($360^\\circ$, alcance mínimo $2\\text{ MN}$) y luces de costado verde y roja ($112,5^\\circ$ cada una, alcance mínimo $1\\text{ MN}$). Si es $<7\\text{ m}$ y su velocidad máxima no supera los $7\\text{ nudos}$, puede exhibir una luz blanca todo horizonte y, si es posible, luces de costado.</li>
              <li><strong>Embarcación fondeada ($<50\\text{ m}$ de eslora):</strong>
                <ul>
                  <li><em>De noche:</em> Una <strong>luz blanca todo horizonte ($360^\\circ$)</strong> en la parte más visible (proa).</li>
                  <li><em>De día:</em> Una <strong>esfera negra</strong> en la parte de proa.</li>
                </ul>
              </li>
              <li><strong>Velero navegando a vela y motor simultáneamente:</strong> De día debe exhibir a proa un <strong>cono negro con el vértice hacia abajo</strong> (indica que a los efectos de derecho de paso es un buque de propulsión mecánica).</li>
              <li><strong>Buque sin gobierno:</strong> De noche dos luces rojas todo horizonte en línea vertical (más luces de banda y alcance si tiene arrancada); de día <strong>dos esferas negras</strong> en línea vertical.</li>
              <li><strong>Buque varado:</strong> Las dos luces rojas verticales de sin gobierno + luz de fondeo; de día <strong>tres esferas negras</strong> en línea vertical.</li>
            </ul>
            <h5>2. Señales Acústicas de Maniobra y Advertencia (Regla 34 RIPA - Cuando se avistan mutuamente)</h5>
            <ul>
              <li>🔊 <strong>1 pitada corta ($1\\text{ seg}$):</strong> <em>"Caigo a ESTRIBOR"</em>.</li>
              <li>🔊 <strong>2 pitadas cortas:</strong> <em>"Caigo a BABOR"</em>.</li>
              <li>🔊 <strong>3 pitadas cortas:</strong> <em>"Mis máquinas van ATRÁS (estoy dando marcha atrás)"</em>.</li>
              <li>🔊 <strong>5 o más pitadas cortas y rápidas:</strong> Señal de duda o advertencia (<em>"No entiendo sus intenciones o dudo que esté tomando medidas suficientes para evitar el abordaje"</em>).</li>
              <li>🔊 <strong>1 pitada larga ($4\\text{ a }6\\text{ seg}$):</strong> Al aproximarse a un recodo o curva de un canal o río donde no se ve del otro lado.</li>
            </ul>
          `,
          keyTakeaways: [
            'Ángulos de luces: Tope 225°, Bandas 112,5° cada una (Verde Estribor / Roja Babor), Alcance 135° (225° + 135° = 360°).',
            'Vuelta encontrada: ambos caen a ESTRIBOR. Cruce: cede el paso quien ve al otro por su ESTRIBOR (ve luz roja).',
            'Pitadas cortas de maniobra: 1 = Caigo a Estribor, 2 = Caigo a Babor, 3 = Mis máquinas van atrás, 5 = Duda/Peligro.',
            'Marca diurna de fondeo: 1 esfera negra en proa; de noche: 1 luz blanca todo horizonte (360°).'
          ]
        },
        {
          id: 'cn-leg-u2',
          number: 'Unidad 2',
          title: 'Reconocimiento de Boyas y Balizamiento (Sistema IALA Región B)',
          isDemoOpen: false,
          videoSceneId: 'iala_balizamiento',
          videoTitle: 'Video Explicativo IA (Español): Boyas Laterales, Cardinales, Peligro Aislado y Aguas Seguras (IALA B)',
          summary: 'Reconocimiento de boyas según el color, forma, marca de tope y luz que exhiben en el Sistema I.A.L.A. Región B (Argentina / América) y sistema anterior.',
          beginnerContent: `
            <h4>🟢 Explicación desde Cero: Cómo leer las Boyas como señales de ruta</h4>
            <p>Argentina pertenece a la <strong>Región B del Sistema Internacional IALA</strong> (igual que toda América, Japón, Corea y Filipinas). En nuestro sistema rige la regla de oro al <strong>ENTRAR desde el mar o aguas abiertas hacia el puerto o río arriba</strong>:</p>
            <blockquote>
              <strong>"Al entrar: VERDE a Babor (izquierda) y ROJO a Estribor (derecha)"</strong><br>
              <em>Truco mnemotécnico:</em> <strong>E-B-R</strong> (<strong>E</strong>ntrando, <strong>B</strong>abor = Verde, <strong>E</strong>stribor = <strong>R</strong>ojo). Y al <strong>salir</strong> hacia el mar, se dejan exactamente al revés.
            </blockquote>
            <h5>1. Las 6 familias de Boyas que tenés que reconocer</h5>
            <ol>
              <li><strong>Laterales de Canal (Marcan los bordes del canal navegable):</strong>
                <ul>
                  <li>🟢 <strong>Babor (entrando):</strong> Color <strong>VERDE</strong>, forma <strong>cilíndrica</strong> (tambor), marca de tope un cilindro verde, números impares, luz verde.</li>
                  <li>🔴 <strong>Estribor (entrando):</strong> Color <strong>ROJO</strong>, forma <strong>cónica</strong> (punta triangular arriba), marca de tope un cono rojo punta arriba, números pares, luz roja.</li>
                  <li><strong>Bifurcación (cuando el canal se divide en dos):</strong> Si es verde con una franja horizontal roja en el medio, el canal principal está a tu derecha (dejala a babor). Si es roja con una franja horizontal verde en el medio, el canal principal está a tu izquierda (dejala a estribor). <em>El color de arriba y abajo te dice qué boya es.</em></li>
                </ul>
              </li>
              <li><strong>Peligro Aislado (¡No pasarle por encima!):</strong>
                <ul>
                  <li>⚫🔴⚫ Color <strong>negro con una o más franjas horizontales rojas</strong>.</li>
                  <li>Marca de tope: <strong>Dos esferas negras</strong> una arriba de la otra.</li>
                  <li>Luz: <strong>Blanca de 2 destellos</strong> cada cierto tiempo ($GpD(2)$). Marca una piedra o casco hundido puntual con agua navegable alrededor.</li>
                </ul>
              </li>
              <li><strong>Aguas Seguras (Recalada o eje de canal):</strong>
                <ul>
                  <li>🔴⚪ Franjas <strong>verticales rojas y blancas</strong>.</li>
                  <li>Marca de tope: <strong>Una esfera roja</strong>.</li>
                  <li>Luz: Blanca (isofase, ocultación o 1 destello largo cada $10\\text{ s}$). Indica que hay agua segura todo alrededor.</li>
                </ul>
              </li>
              <li><strong>Cardinales (Norte, Este, Sur, Oeste):</strong>
                <ul>
                  <li>Te indican <strong>hacia qué punto cardinal está el agua segura</strong> respecto de la boya (por ejemplo, a una Cardinal Norte debés pasarle por el <strong>Norte</strong>).</li>
                  <li>Se reconocen de día por los <strong>dos conos negros</strong> del tope y de noche por los destellos blancos rápidos como las horas de un reloj: <strong>Norte</strong> = continuo (12 en punto), <strong>Este</strong> = 3 destellos (las 3), <strong>Sur</strong> = 6 destellos + 1 largo (las 6), <strong>Oeste</strong> = 9 destellos (las 9).</li>
                </ul>
              </li>
              <li><strong>Marcas Especiales:</strong> Color <strong>Amarillo</strong> con una cruz en forma de <strong>"X"</strong> amarilla arriba y luz amarilla (indican zonas de tuberías, cables submarinos, zonas de regata o fondeo).</li>
              <li><strong>Boya de Nuevos Peligros (Wreck / Naufragio reciente):</strong> Franjas <strong>verticales azules y amarillas</strong> en igual cantidad, cruz amarilla vertical arriba y luz que alterna un destello azul y uno amarillo. ¡Peligro recién detectado que aún no figura en las cartas!</li>
            </ol>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Cuadro Técnico de Boyas Cardinales (IALA)</h5>
            <p>Las señales cardinales emplean dos conos negros superpuestos (donde apuntan las puntas de los conos está el color negro en el cuerpo de la boya):</p>
            <ul>
              <li><strong>Cardinal NORTE:</strong> Dos conos con <strong>vértices hacia arriba</strong> (▲▲). Cuerpo negro arriba y amarillo abajo. Luz blanca centelleante continua ($Q$ o $VQ$). Aguas seguras al Norte de la señal.</li>
              <li><strong>Cardinal SUR:</strong> Dos conos con <strong>vértices hacia abajo</strong> (▼▼). Cuerpo amarillo arriba y negro abajo. Luz blanca de <strong>6 destellos rápidos + 1 destello largo</strong> ($Q(6)+LFl$ o $VQ(6)+LFl$). Aguas seguras al Sur.</li>
              <li><strong>Cardinal ESTE:</strong> Dos conos <strong>unidos por la base</strong> (▲▼, forma de rombo). Cuerpo negro con una franja horizontal amarilla central. Luz blanca de <strong>3 destellos rápidos</strong> ($Q(3)$ o $VQ(3)$). Aguas seguras al Este.</li>
              <li><strong>Cardinal OESTE:</strong> Dos conos <strong>unidos por los vértices</strong> (▼▲, forma de copa de reloj de arena). Cuerpo amarillo con una franja horizontal negra central. Luz blanca de <strong>9 destellos rápidos</strong> ($Q(9)$ o $VQ(9)$). Aguas seguras al Oeste.</li>
            </ul>
            <h5>2. Diferencia entre Sistema IALA Región B y Sistema Anterior</h5>
            <ul>
              <li>En el antiguo sistema argentino previo al IALA B, Babor era negro (luz blanca o verde) y Estribor era rojo (luz roja), y los cascos a pique se boyaban con boyas verdes con inscripción "CP". Con la adopción del Sistema IALA Región B (implementado por el SHN), el verde pasó a ser el color lateral de Babor (y el peligro aislado adoptó negro con franja roja y dos esferas negras).</li>
            </ul>
          `,
          keyTakeaways: [
            'En Argentina (IALA Región B) entrando desde el mar/río exterior: Babor = VERDE (cilíndrica), Estribor = ROJA (cónica).',
            'Peligro Aislado: Negra con franja horizontal roja, tope 2 esferas negras, luz blanca de 2 destellos.',
            'Aguas Seguras: Franjas VERTICALES rojas y blancas, tope 1 esfera roja.',
            'Cardinales (reloj de luces blancas): Norte = continuo, Este = 3 destellos, Sur = 6 destellos + 1 largo, Oeste = 9 destellos.'
          ]
        },
        {
          id: 'cn-leg-u3',
          number: 'Unidad 3',
          title: 'Régimen de Actividades Náutico Deportivas, Matrícula, Seguridad y Despacho',
          isDemoOpen: false,
          videoSceneId: 'regimen_nautico_pna',
          videoTitle: 'Video Explicativo IA (Español): Matrícula REY, Atribuciones, Despacho DEB y Aduana/Migraciones',
          summary: 'Dominio de embarcaciones (certificado de matrícula), elementos de seguridad (Ordenanza 1/18), atribuciones del Conductor Náutico, responsabilidades y despacho nacional/extranjero.',
          beginnerContent: `
            <h4>🟢 Explicación desde Cero: Papeles, Permisos y Trámites para Salir a Navegar</h4>
            <h5>1. ¿Qué me permite manejar el carnet de Conductor Náutico?</h5>
            <ul>
              <li><strong>Tipo de embarcación:</strong> Embarcaciones deportivas propulsadas a <strong>motor</strong> de hasta <strong>7 metros de eslora</strong> y hasta <strong>140 HP de potencia máxima</strong>; y artefactos acuáticos deportivos (motos de agua / jet ski) sin límite de potencia.</li>
              <li><strong>Horario permitido:</strong> Exclusivamente durante horas de <strong>luz diurna</strong> (de sol a sol) y con buena visibilidad. No habilita para navegación nocturna (para navegar de noche necesitás al menos Timonel de Yate).</li>
              <li><strong>Zonas:</strong> Lagos, ríos interiores, Río de la Plata (con límite de alejamiento costero fijado por cada dependencia de PNA) y zonas marítimas portuarias delimitadas.</li>
              <li><strong>Edad mínima y vigencia:</strong> Se obtiene a partir de los 18 años y el certificado tiene una vigencia de <strong>5 años</strong> (luego se renueva sin volver a rendir examen si está dentro de los plazos reglamentarios, mediante trámite TAD / PNA).</li>
            </ul>
            <h5>2. ¿Qué documentos son obligatorios llevar a bordo?</h5>
            <ol>
              <li><strong>Certificado Náutico Deportivo (Carnet de PNA)</strong> vigente acorde a la embarcación.</li>
              <li><strong>Documento Nacional de Identidad (DNI)</strong>.</li>
              <li><strong>Certificado de Matrícula</strong> de la embarcación (inscripta en el <strong>REY - Registro Especial de Yates</strong> o en el registro jurisdiccional de la dependencia de PNA) con las cuotas de la Tasa Fija Anual al día.</li>
              <li><strong>Autorización de manejo:</strong> Si la embarcación no está a tu nombre, debés llevar la autorización del propietario con firma certificada por Prefectura o Escribano Público (o a través de Mi Argentina / TAD según normativa vigente).</li>
              <li><strong>Póliza o constancia de seguro de responsabilidad civil</strong> vigente.</li>
            </ol>
            <h5>3. ¿Cómo se hace el Despacho para cruzar al Uruguay o ir a puerto marítimo?</h5>
            <p>Si vas a salir hacia un puerto extranjero (por ejemplo, cruzar del Tigre o San Isidro a Carmelo o Colonia en Uruguay), antes de zarpar debés hacer el <strong>Rol / Despacho de Salida</strong>:</p>
            <ul>
              <li>Se inicia de forma online en el sistema <strong>DEB (Despacho Electrónico de Buques / Embarcaciones Deportivas)</strong> de PNA.</li>
              <li>Luego se presenta en el destacamento de <strong>Prefectura Naval Argentina, Migraciones y Aduana (ARCA/AFIP)</strong> con todos los tripulantes, sus DNI/Pasaportes, matrícula y elementos de seguridad completos (NOTA: el Conductor Náutico solo puede despachar dentro de los límites y condiciones que autorice la dependencia local según eslora, potencia y navegación diurna costera; para cruces francos del Río de la Plata suele requerirse Timonel o Patrón de Yate).</li>
            </ul>
          `,
          advancedContent: `
            <h4>🔵 Desarrollo Técnico y Reglamentario PNA (Nivel Examen Final)</h4>
            <h5>1. Dominio y Registro de Embarcaciones Deportivas (REGINAVE Tít. 4 Cap. 2 y Ordenanza 1/18)</h5>
            <ul>
              <li><strong>Registro Especial de Yates (REY):</strong> Registro nacional centralizado llevado por la PNA donde se inscriben las embarcaciones deportivas de mayor tonelaje de arqueo, otorgando título de propiedad naval y matrícula nacional con indicación de nombre y número de REY pintado en popa/bandas.</li>
              <li><strong>Registros Jurisdiccionales:</strong> Llevados por las dependencias locales de PNA para embarcaciones menores (identificadas por la sigla de la dependencia, ej. <em>SI</em>, <em>OL</em>, <em>TIG</em>, <em>LP</em>, <em>ZAR</em> seguida del número de matrícula).</li>
              <li><strong>Prohibición absoluta de lucro:</strong> Las embarcaciones inscriptas como deportivas y los poseedores de certificados náutico deportivos tienen expresamente prohibido realizar transporte comercial de pasajeros o carga remunerada con dichas habilitaciones.</li>
            </ul>
            <h5>2. Responsabilidades del Conductor / Timonel a cargo</h5>
            <ul>
              <li><strong>Responsabilidad Contravencional:</strong> Ante la Prefectura Naval Argentina por infracciones al REGINAVE (navegar sin elementos de seguridad, con carnet vencido, exceso de velocidad en canales o zonas de baño, alcoholemia positiva —límite legal $0,0\\text{ g/l}$ o el fijado por la norma local/REGINAVE para conducción segura—), sancionables con apercibimiento, multa, suspensión o cancelación de la habilitación.</li>
              <li><strong>Responsabilidad Civil:</strong> Obligación de reparar económicamente los daños y perjuicios causados a terceros, embarcaciones o instalaciones portuarias (Art. 1716 y cc. del Código Civil y Comercial y Ley de la Navegación N° 20.094).</li>
              <li><strong>Responsabilidad Penal:</strong> Ante la Justicia Federal o Penal ordinaria en caso de lesiones culposas, homicidio culposo, abandono de persona o puesta en peligro de la seguridad de una nave o construcción flotante (Art. 190 del Código Penal Argentino).</li>
            </ul>
          `,
          keyTakeaways: [
            'Atribuciones Conductor Náutico: Motor hasta 7 metros de eslora y hasta 140 HP (y motos de agua sin límite de HP), solo navegación DIURNA.',
            'Vigencia del Certificado Náutico Deportivo: 5 años.',
            'Las embarcaciones deportivas tienen PROHIBIDO su uso con fines comerciales o de lucro.',
            'Existen 3 órdenes de responsabilidad al mando: Contravencional (ante PNA), Civil (daños económicos) y Penal (delitos/lesiones).'
          ]
        }
      ]
    }
  ],
  questions: [
    {
      id: 'q-cn-1',
      unit: 'Seguridad - Unidad 1',
      question: 'Mirando desde la popa hacia la proa de la embarcación, ¿cómo se denomina la banda derecha y de qué color es su luz de navegación?',
      options: [
        'Babor - Luz Roja',
        'Estribor - Luz Verde',
        'Estribor - Luz Roja',
        'Babor - Luz Verde'
      ],
      correctIndex: 1,
      explanation: 'Mirando de popa a proa, el lado derecho de la embarcación se denomina ESTRIBOR y su luz de costado reglamentaria (RIPA Regla 21) es de color VERDE con un arco de horizonte de 112,5°.'
    },
    {
      id: 'q-cn-2',
      unit: 'Seguridad - Unidad 1',
      question: '¿Cómo se define técnicamente el "Calado" de una embarcación?',
      options: [
        'La altura total del casco medida desde la quilla hasta la cubierta principal.',
        'La distancia vertical desde la línea de flotación hasta la cubierta principal.',
        'La distancia vertical desde la línea de flotación hasta el punto más bajo de la quilla o apéndice sumergido (obra viva).',
        'El ancho máximo de la embarcación medido de banda a banda.'
      ],
      correctIndex: 2,
      explanation: 'El Calado es la profundidad sumergida de la embarcación (altura de la obra viva), medida verticalmente desde la línea de flotación hasta la parte más baja del casco, quilla o pata del motor.'
    },
    {
      id: 'q-cn-3',
      unit: 'Seguridad - Unidad 1',
      question: '¿Cuál es el nudo marinero por excelencia que forma una gaza (lazo fijo) que NO se corre ni se ahorca bajo tensión y se utiliza para amarre o rescate?',
      options: [
        'Ballestrinque',
        'Nudo Llano o Rizo',
        'As de Guía',
        'Nudo en Ocho o Lasca'
      ],
      correctIndex: 2,
      explanation: 'El As de Guía es el nudo fundamental para formar una gaza segura que no se corre bajo carga y puede desatarse con facilidad luego de haber trabajado.'
    },
    {
      id: 'q-cn-4',
      unit: 'Seguridad - Unidad 2',
      question: '¿Por qué es tan peligroso un derrame o fuga de vapores de nafta en una embarcación con motor interno o sentina cerrada?',
      options: [
        'Porque los vapores de nafta son más livianos que el aire y se van rápido al cielo.',
        'Porque los vapores de nafta son más pesados que el aire, se acumulan en el fondo de la sentina y pueden explotar ante cualquier chispa eléctrica.',
        'Porque la nafta apaga las baterías por enfriamiento.',
        'Porque mancha la pintura de la obra muerta.'
      ],
      correctIndex: 1,
      explanation: 'De acuerdo con la Ordenanza Marítima 17/72, los gases de hidrocarburos livianos (nafta) son más densos que el aire y descienden al fondo de la sentina, formando una mezcla explosiva si no se ventila durante 4 a 5 minutos antes del arranque.'
    },
    {
      id: 'q-cn-5',
      unit: 'Seguridad - Unidad 2',
      question: '¿Qué tipo de matafuego reglamentario es apto para combatir incendios tanto de sólidos (A), líquidos inflamables (B) como equipos eléctricos con tensión (C) a bordo?',
      options: [
        'Agua presurizada común',
        'Polvo Químico Seco Triclase (ABC)',
        'Balde de agua de río',
        'Arena húmeda únicamente'
      ],
      correctIndex: 1,
      explanation: 'El extintor de Polvo Químico Seco Triclase (ABC) actúa sofocando e inhibiendo la reacción en cadena sin conducir la electricidad ni desparramar hidrocarburos líquidos.'
    },
    {
      id: 'q-cn-6',
      unit: 'Seguridad - Unidad 2',
      question: '¿Cuál es el canal internacional de VHF destinado exclusivamente a Socorro, Urgencia, Seguridad y Llamada que Prefectura Naval Argentina escucha permanentemente?',
      options: [
        'Canal 09',
        'Canal 12',
        'Canal 16 (156,8 MHz)',
        'Canal 71'
      ],
      correctIndex: 2,
      explanation: 'El Canal 16 (156,800 MHz) del Servicio Móvil Marítimo en VHF es el canal internacional de socorro (MAYDAY), urgencia (PAN-PAN), seguridad (SECURITÉ) y llamada.'
    },
    {
      id: 'q-cn-7',
      unit: 'Seguridad - Unidad 2',
      question: 'Al encender una bengala de mano roja en una emergencia, ¿cómo debe sostenerse para evitar quemaduras y accidentes a bordo?',
      options: [
        'Del lado de barlovento (de donde viene el viento) y dentro de la cabina.',
        'En el sector de sotavento (hacia donde va el viento), con el brazo extendido hacia afuera de la borda y en ángulo de 45°.',
        'Apuntando verticalmente hacia el toldo o bimini de la lancha.',
        'Sumergida medio metro debajo del agua.'
      ],
      correctIndex: 1,
      explanation: 'Las señales pirotécnicas de mano deben encenderse siempre a SOTAVENTO y por fuera de la borda a 45° para que el viento aleje el humo y las gotas de escoria incandescente caigan al agua y no sobre el barco o el tripulante.'
    },
    {
      id: 'q-cn-8',
      unit: 'Seguridad - Unidad 2',
      question: '¿Qué longitud mínima de cabo/cadena se recomienda filar al fondear en condiciones meteorológicas normales?',
      options: [
        'Exactamente la misma longitud que la profundidad del lugar.',
        'De 5 a 7 veces la profundidad del lugar (más la altura de la proa al agua).',
        'Solo 2 metros sin importar la profundidad.',
        'Menos de la mitad de la eslora.'
      ],
      correctIndex: 1,
      explanation: 'Para que el ancla trabaje con un ángulo de tracción horizontal óptimo y no garree, se debe filar entre 5 veces (buen tiempo) y 7 a 10 veces (mal tiempo) la profundidad total esperada.'
    },
    {
      id: 'q-cn-9',
      unit: 'Seguridad - Unidad 3',
      question: 'Si navegando en una lancha a motor un tripulante cae al agua por la banda de ESTRIBOR, ¿cuál es la primera maniobra de timón que debe hacer el conductor?',
      options: [
        'Girar el timón inmediatamente hacia ESTRIBOR (la misma banda por donde cayó) y desacelerar para alejar la popa y la hélice del náufrago.',
        'Girar el timón bruscamente a BABOR y acelerar a fondo.',
        'Poner marcha atrás a máxima potencia en línea recta.',
        'Saltar al agua inmediatamente dejando la lancha en marcha.'
      ],
      correctIndex: 0,
      explanation: 'Al caer el timón hacia la MISMA banda por la que cayó la persona (en este caso Estribor), la popa y la hélice se desplazan hacia la banda opuesta (Babor), evitando golpear o lastimar al náufrago con la hélice.'
    },
    {
      id: 'q-cn-10',
      unit: 'Seguridad - Unidad 3',
      question: 'En el momento final de aproximación para recoger a un "Hombre al Agua" en una lancha a motor, ¿cómo debe realizarse la maniobra?',
      options: [
        'A favor del viento y de la corriente, con el motor acelerado.',
        'Enfrentando el viento o la corriente (el que predomine) a mínima velocidad, poniendo punto muerto y apagando el motor antes de tomar contacto con el náufrago.',
        'Acercándose marcha atrás (ciando) a toda velocidad hacia el náufrago.',
        'Pasándole por encima con la proa para que se agarre de la pata del motor.'
      ],
      correctIndex: 1,
      explanation: 'Siempre se aproxima proa al elemento dominante (viento o corriente) para tener pleno control a baja velocidad, y es obligatorio poner punto muerto y apagar el motor antes de contactar e izar al náufrago.'
    },
    {
      id: 'q-cn-11',
      unit: 'Legislación - Unidad 1',
      question: 'Según el RIPA (Regla 14), cuando dos embarcaciones propulsadas a motor se encuentran de vuelta encontrada (de frente) con riesgo de abordaje, ¿cómo deben maniobrar?',
      options: [
        'Ambas deben caer a BABOR.',
        'Ambas deben caer a ESTRIBOR para pasar por la banda de babor de la otra.',
        'La más pequeña debe frenar y la más grande sigue derecho.',
        'Una cae a babor y la otra a estribor al azar.'
      ],
      correctIndex: 1,
      explanation: 'La Regla 14 del RIPA establece que cuando dos buques de propulsión mecánica naveguen de vuelta encontrada a rumbos opuestos o casi opuestos con riesgo de abordaje, cada uno de ellos caerá a ESTRIBOR para pasar por la banda de babor del otro.'
    },
    {
      id: 'q-cn-12',
      unit: 'Legislación - Unidad 1',
      question: 'En una situación de cruce entre dos lanchas a motor en aguas abiertas (Regla 15 RIPA), ¿cuál de las dos debe ceder el paso?',
      options: [
        'La que tiene a la otra por su propia banda de BABOR.',
        'La que tiene a la otra por su propia banda de ESTRIBOR (es decir, la que ve la luz roja de babor de la otra embarcación).',
        'Siempre cede el paso la lancha de color más oscuro.',
        'Ninguna, ambas deben acelerar para pasar primero.'
      ],
      correctIndex: 1,
      explanation: 'Por la Regla 15 del RIPA, el buque que tenga al otro por su propio costado de ESTRIBOR se mantendrá apartado de la derrota de este otro y, si las circunstancias lo permiten, evitará cortarle la proa.'
    },
    {
      id: 'q-cn-13',
      unit: 'Legislación - Unidad 1',
      question: 'Cuando se avistan dos embarcaciones y una de ellas emite DOS (2) pitadas cortas con su silbato o bocina, ¿qué está indicando?',
      options: [
        '"Caigo a Estribor"',
        '"Caigo a Babor"',
        '"Mis máquinas van atrás"',
        '"Necesito auxilio médico"'
      ],
      correctIndex: 1,
      explanation: 'Según la Regla 34 del RIPA: 1 pitada corta = "Caigo a estribor"; 2 pitadas cortas = "Caigo a babor"; 3 pitadas cortas = "Mis máquinas van atrás"; 5 o más pitadas cortas = señal de duda o advertencia.'
    },
    {
      id: 'q-cn-14',
      unit: 'Legislación - Unidad 1',
      question: 'Entre una lancha deportiva a motor y un velero que navega exclusivamente a vela en aguas abiertas (no alcanzando ninguno al otro), ¿quién debe ceder el paso?',
      options: [
        'El velero debe cederle el paso a la lancha porque el velero va más despacio.',
        'La lancha a motor debe mantenerse apartada de la derrota del velero (Regla 18 RIPA).',
        'Tiene paso el de mayor eslora.',
        'Ambos deben fondear de inmediato.'
      ],
      correctIndex: 1,
      explanation: 'De acuerdo con el Artículo 18 del RIPA, los buques de propulsión mecánica en navegación se mantendrán apartados de la derrota de los buques de vela (salvo que el velero sea buque que alcanza o estorbe a un buque que solo pueda navegar dentro de un canal angosto).'
    },
    {
      id: 'q-cn-15',
      unit: 'Legislación - Unidad 2',
      question: 'En el Sistema de Balizamiento IALA Región B (Argentina), al ENTRAR a un canal desde el mar o río abierto, ¿de qué color y forma son las boyas laterales que debemos dejar por nuestra banda de ESTRIBOR?',
      options: [
        'Verdes y cilíndricas.',
        'Rojas y cónicas (con marca de tope cónica punta arriba).',
        'Amarillas con una X en el tope.',
        'Negras con franjas horizontales rojas.'
      ],
      correctIndex: 1,
      explanation: 'En la Región B del sistema IALA (vigente en Argentina y toda América), entrando desde el mar hacia el puerto o aguas arriba: las boyas de ESTRIBOR son ROJAS (cónicas) y las de BABOR son VERDES (cilíndricas).'
    },
    {
      id: 'q-cn-16',
      unit: 'Legislación - Unidad 2',
      question: '¿Qué indica una boya pintada de color NEGRO con una o más franjas HORIZONTALES ROJAS y que tiene DOS ESFERAS NEGRAS en su tope?',
      options: [
        'Aguas Seguras en todo su derredor.',
        'Peligro Aislado (obstáculo, piedra o casco hundido puntual con aguas navegables alrededor).',
        'Zona exclusiva de esquí acuático.',
        'Límite internacional de velocidad.'
      ],
      correctIndex: 1,
      explanation: 'La señal de Peligro Aislado en el sistema IALA es negra con una o más bandas horizontales rojas, marca de tope de dos esferas negras superpuestas y luz blanca de grupos de 2 destellos GpD(2).'
    },
    {
      id: 'q-cn-17',
      unit: 'Legislación - Unidad 2',
      question: 'Si navegando avista una Boya Cardinal NORTE (negra sobre amarillo, con dos conos negros con los vértices hacia arriba), ¿por qué sector respecto de la boya se encuentran las aguas seguras?',
      options: [
        'Al Sur de la boya.',
        'Al Norte de la boya.',
        'Exactamente pasando por encima de la boya.',
        'Al Oeste de la boya.'
      ],
      correctIndex: 1,
      explanation: 'Las boyas Cardinales llevan el nombre del cuadrante donde se encuentran las AGUAS SEGURAS. Por lo tanto, a una Cardinal Norte se la debe dejar al Sur para pasar por el NORTE de la boya.'
    },
    {
      id: 'q-cn-18',
      unit: 'Legislación - Unidad 3',
      question: '¿Cuáles son los límites máximos de eslora y potencia de motor que permite gobernar la habilitación de Conductor Náutico otorgada por PNA?',
      options: [
        'Hasta 12 metros de eslora y sin límite de potencia, de día y de noche.',
        'Hasta 7 metros de eslora y hasta 140 HP de potencia máxima (y artefactos acuáticos deportivos sin límite de HP), exclusivamente en navegación diurna.',
        'Hasta 20 metros de eslora a vela y motor en alta mar.',
        'Solo botes a remo de hasta 3 metros.'
      ],
      correctIndex: 1,
      explanation: 'De acuerdo con el REGINAVE (Título 4, Capítulo 2) y la Ordenanza 1/18 de PNA, el Conductor Náutico habilita para embarcaciones deportivas a motor de hasta 7 metros de eslora y 140 HP (y motos de agua sin límite de HP) solo en horario diurno.'
    },
    {
      id: 'q-cn-19',
      unit: 'Legislación - Unidad 3',
      question: '¿Por cuántos años tiene validez el Certificado Náutico Deportivo otorgado por la Prefectura Naval Argentina antes de requerir su renovación?',
      options: [
        '1 año',
        '5 años',
        '10 años',
        'Es vitalicio y nunca se renueva'
      ],
      correctIndex: 1,
      explanation: 'Los Certificados Náuticos Deportivos (Conductor Náutico, Timonel, Patrón y Piloto de Yate) tienen una vigencia de 5 años desde su emisión o última renovación.'
    },
    {
      id: 'q-cn-20',
      unit: 'Seguridad - Unidad 2',
      question: '¿Qué características presenta el fenómeno meteorológico conocido como "Sudestada" en el Río de la Plata?',
      options: [
        'Viento seco y cálido del Norte que hace bajar el río a niveles mínimos en 1 hora.',
        'Viento persistente del sector Sudeste (SE), acompañado de lluvias, nubosidad baja, fuerte oleaje e importante crecida del nivel de las aguas del Río de la Plata.',
        'Cielo totalmente despejado, viento del Oeste y bajante extraordinaria.',
        'Brisa suave de verano sin olas.'
      ],
      correctIndex: 1,
      explanation: 'La Sudestada se produce por la combinación de un sistema de alta presión al sur y una baja presión al norte/noreste (Litoral/Uruguay), generando vientos fuertes del SE, lluvias, mala visibilidad y apilamiento de agua que provoca importantes crecidas en el Río de la Plata y el Delta.'
    }
  ]
};
