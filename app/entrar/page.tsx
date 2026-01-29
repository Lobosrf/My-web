import Image from 'next/image';

export default function EntrarPage() {
    return (
        <main className="container" style={{ position: 'relative' }}>
            {/* Etiqueta superior idéntica a Home */}
            <div style={{
                backgroundColor: '#ffc400ff',
                padding: '8px 16px',
                fontWeight: '900',
                position: 'absolute',
                top: '-40px',
                right: '0',
                color: '#000',
                fontSize: '0.9rem',
                textTransform: 'lowercase'
            }}>
                lobo srf
            </div>

            <header style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                marginBottom: '60px',
                marginTop: '20px'
            }}>
                <div style={{ flexShrink: 0 }}>
                    <Image
                        src="/perfil.JPG"
                        alt="Lobo SRF"
                        width={100}
                        height={100}
                        priority
                        style={{ objectFit: 'cover', borderRadius: '50%', backgroundColor: '#eee' }}
                    />
                </div>
                <div>
                    <h1 style={{ fontSize: '1.8rem', margin: 0, fontWeight: '800', letterSpacing: '-0.02em', color: '#1a1a1a' }}>Lobo SRF</h1>
                    <p style={{ margin: 0, color: '#4a4a4a', fontSize: '1.1rem' }}>Aquí aprendo trading institucional</p>
                </div>
            </header>

            <section style={{ maxWidth: '600px', lineHeight: '1.6', fontSize: '1.15rem', color: '#1a1a1a' }}>
                <p style={{ marginBottom: '20px' }}>Tres habilidades</p>
                <p style={{ marginBottom: '20px' }}>Existen 3 pilares fundamentales que cualquier persona que quiera ser trader debe dominar.</p>
                <p style={{ marginBottom: '20px' }}>Y esto afectará a tu vida sentimental, a tus relaciones personales, familiares y laborales.</p>

                <p style={{ marginBottom: '20px' }}>Es innegable: si dominas estas tres, tu vida solo puede mejorar.</p>
                <p style={{ marginBottom: '10px' }}>Una estrategia rentable. (Solo probabilidad).</p>
                <p style={{ marginBottom: '10px' }}>Una gestión de riesgo de hierro. (Lo que te mantiene vivo cuando fallas).</p>
                <p style={{ marginBottom: '20px' }}>Una psicología trabajada. (Lo que te impide pulsar el botón de comprar por miedo).</p>

                <p style={{ marginBottom: '20px' }}>En el trading no existe la suerte, te guste o no. Suerte es pegar un pelotazo y después perderlo todo en la siguiente jugada.</p>

                <p style={{ marginBottom: '20px' }}>Llevo auditando mi cuenta principal desde el 1 de septiembre de 2025 y el resultado es un <strong>41% de ganancias</strong>. Mientras tú pierdes meses intentando descifrar cada coma de Wyckoff o ICT, yo simplemente los pongo en práctica seleccionando los dos o tres conceptos que de verdad mueven el precio.</p>
                <p style={{ marginBottom: '20px' }}>Yo gano y <strong>tú sigues probando estrategias cada vez que pierdes 3 operaciones seguidas.</strong> Elige qué prefieres hacer.</p>

                <p style={{ marginBottom: '20px' }}>La mentira de la estrategia mágica</p>
                <p style={{ marginBottom: '20px' }}>El 85% de los traders retail acaban desangrando sus cuentas poco a poco. Datos publicados por uno de los principales brokers, <strong>Capital.com en su propia página web.</strong></p>
                <p style={{ marginBottom: '20px' }}>El motivo es que buscan un gurú con un Lamborghini alquilado que les venda el indicador o la estrategia definitiva.</p>
                <p style={{ marginBottom: '20px' }}>Tengo alumnos que sentían miedo al abrir una operación porque habian perdido la confianza en sí mismos. Vienen intoxicados de información, con la cabeza llena de ruido con indicadores, todo el grafico lleno de lineas y la cuenta reventada.</p>
                <p style={{ marginBottom: '20px' }}>Yo no vendo una estrategia mágica. Te ayudo a crear la tuya de cero. Vendo <strong>acompañamiento y orden.</strong></p>
                <p style={{ marginBottom: '20px' }}>Conozco a poca gente que domine los tres pilares. La mayoría no tiene una estrategia, tiene una esperanza y van probando una después de otra cuando los resultados de tres operaciones no salen bien. Otros no gestionan el riesgo, simplemente apuestan. Ganan mucho en un par de operaciones y en las siguientes han fundido todos los profits. Y de la psicología… aquí es donde puedo ayudarte con herramientas para que tu mismo corrijas tus errores. Necesitas añadir la palabra "disciplina" a tu diccionario.</p>

                <p style={{ marginBottom: '20px' }}>¿Que recibes?</p>
                <p style={{ marginBottom: '20px' }}>4 directos mensuales (quedan grabados, no te preocupes) los jueves a las 21:00 hora España, donde analizo generalmente Bitcoin, operaciones con estrategias que funcionan, lo que aprendo en mi día a día gracias a mis formaciones y experiencias.</p>
                <p style={{ marginBottom: '20px' }}>Información filtrada de RRSS donde el ruido nubla tu criterio y la ilusión mantiene el deseo de que haya un empujón a máximos históricos constantemente (esto no es el oro)</p>
                <p style={{ marginBottom: '20px' }}>Sesiones de preguntas y respuestas en directo aprovechando las dudas y errores que cometemos todos haciendo trading.</p>

                <div style={{ margin: '40px 0' }}>
                    <a href="#" style={{ backgroundColor: '#000', color: '#fff', padding: '16px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', display: 'block', textAlign: 'center' }}>ENLACE DE PAGO</a>
                </div>

                <p style={{ marginBottom: '20px' }}>¿Como me ayudará la academia?</p>
                <p style={{ marginBottom: '20px' }}>Desde el 2021 llevo enseñando a gente y muchos alumnos han conseguido operar con calma siguiendo su estrategia, sin importar si el precio va a subir o a bajar, y cuando empezaron conmigo alguno no sabía ni lo que era un stop loss.</p>
                <p style={{ marginBottom: '20px' }}>Aquí aprenderás a leer la dirección más probable del precio, donde esperar paciente y cómo colocar tu entrada, saber calcular el dinero que tienes que perder en cada operación y sobre todo ganar confianza para dominar tus impulsos de cerrar operaciones ganadoras antes de tiempo o mover el stop loss</p>
                <p style={{ marginBottom: '20px' }}>Mira, yo no voy a estar detrás de ti para que estudies. Te ayudaré dándote acceso a mis sesiones en directo donde verás cómo analizo Bitcoin y otros activos con las mismas herramientas con las que yo saco rentabilidad.</p>
                <p style={{ marginBottom: '20px' }}>Te ayudaré filtrando todo el ruido de redes sociales para que dejes de esperar "to the moon" constantes.</p>
                <p style={{ marginBottom: '20px' }}>Básicamente, te ayudaré a que dejes de ser el que paga las ganancias de los que sí sabemos lo que hacemos. El resto depende de tu disciplina, no de la mía.</p>

                <p style={{ marginBottom: '20px' }}>Fíate de tu instinto. Si crees que el 41% de rentabilidad que llevo auditando desde septiembre de 2025 es producto de la suerte, de una racha divina o de que el mercado está a mi favor porque “todo sube”, <strong>NO ENTRES.</strong></p>
                <p style={{ marginBottom: '20px' }}>Si piensas que los alumnos que me siguen lo hacen por aburrimiento y no por que lo que enseño funciona, esta academia no te va a servir, <strong>NO ENTRES</strong></p>
                <p style={{ marginBottom: '20px' }}>Puedes seguir probando EMAS, el RSI o el MACD. <strong>NO ENTRES.</strong></p>
                <p style={{ marginBottom: '40px' }}>Si no puedes asistir a las clases en directo, los jueves a las 21:00, aunque luego quede grabada (no la vas a ver grabada), <strong>NO ENTRES.</strong></p>

                <div style={{ margin: '40px 0' }}>
                    <a href="#" style={{ backgroundColor: '#000', color: '#fff', padding: '16px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', display: 'block', textAlign: 'center' }}>ENLACE DE PAGO</a>
                </div>

                <p style={{ marginBottom: '20px' }}>Hacer dinero con el trading es una habilidad. Y como toda habilidad, se puede aprender.</p>
                <p style={{ marginBottom: '20px' }}>Cuando ves desde fuera como la gente gana dinero y consigue grandes resultados haciendo las cosas simples, no lo achaques a la suerte, a circunstancias únicas e irreplicables.</p>
                <p style={{ marginBottom: '20px' }}>Todo eso cambia cuando pasas con ellos momentos de calidad, comparten frustraciones por las que tú estás pasando con tu operativa o te ofrecen acciones que a ellos les han servido para mejorar cuando estaban en tu misma situación.</p>
                <p style={{ marginBottom: '20px' }}>Formar parte de un grupo donde todos reman en la dirección no se puede describir desde fuera. Y sólo tienes que juntarte con esa gente para aprenderlo</p>

                <div style={{ margin: '40px 0' }}>
                    <a href="#" style={{ backgroundColor: '#000', color: '#fff', padding: '16px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', display: 'block', textAlign: 'center' }}>ENLACE DE PAGO</a>
                </div>

                <p style={{ marginBottom: '20px' }}>¿Es otro curso online que no terminaré nunca?</p>
                <p style={{ marginBottom: '20px' }}>No, son 4 directos al mes que no te querrás perder porque aprenderás más que en cursos de miles de euros. El contenido importante que no puedes perderte. Asistir es la manera de poder trabajar en TU problema en particular.</p>
                <p style={{ marginBottom: '20px' }}>Tienes que trabajar sobre tu problema concreto y usar las herramientas que te indico para hacer los deberes para la siguiente clase.</p>
                <p style={{ marginBottom: '20px' }}>No tengo 100 horas de videos para que repases en tus ratos libres. Todos sabemos que <strong>ESO NO FUNCIONA.</strong></p>
                <p style={{ marginBottom: '20px' }}>Implementar las herramientas creyendo que te harás rico de la noche a la mañana, <strong>ESO NO FUNCIONA.</strong></p>
                <p style={{ marginBottom: '20px' }}>No esperes comprarte un lambo en el próximo año. Esto no funciona así. Si es tu pensamiento, <strong>NO ENTRES</strong></p>
                <p style={{ marginBottom: '40px' }}>Ver la clase grabada al día siguiente: el valor real está en el directo porque ahí corregimos TU error.</p>

                <p style={{ marginBottom: '20px' }}>Preguntas frecuentes</p>
                <p style={{ marginBottom: '20px' }}>¿Tendré acceso a ti?</p>
                <p style={{ marginBottom: '20px' }}>Si eres socio, en los directos tendrás la opción de poner la cámara y el micro para preguntar lo que quieras. Si eres un poco vergonzoso, pues pones sólo el micro. No te voy a tratar distinto sólo por no verte.</p>
                <p style={{ marginBottom: '20px' }}>¿Cuando son los directos?</p>
                <p style={{ marginBottom: '20px' }}>Todos los jueves sin excepción a las 21:00 horas España. Salvo el día de nochebuena, el de nochevieja y el 26 de febrero que me voy a esquiar una semana a los pirineos</p>
                <p style={{ marginBottom: '20px' }}>¿Puedo cancelar cuando quiera?</p>
                <p style={{ marginBottom: '20px' }}>Cuando quieras. Una vez pagas, tienes el mes incluido.</p>
                <p style={{ marginBottom: '20px' }}>¿Tengo 15 días para ver si me gusta y si no me devuelves el dinero?</p>
                <p style={{ marginBottom: '20px' }}>Si me haces esa pregunta, no te quiero como alumno.</p>
                <p style={{ marginBottom: '20px' }}>Algunas veces pareces un poco borde</p>
                <p style={{ marginBottom: '20px' }}>Tengo 46 años, no tengo que engañar a nadie pero si empujar a la gente a que vea que “no todo sube siempre” y puedo parecer brusco. Necesitas que te digan las cosas como son y no necesitas otro que te diga lo que tu quieres escuchar</p>
                <p style={{ marginBottom: '20px' }}>¿Como funciona la comunidad?</p>
                <p style={{ marginBottom: '20px' }}>Una vez pagas, recibes acceso automático al software Discord. Dentro tienes varios canales de texto y de voz donde puedes escribir lo que quieras, con respeto.</p>
                <p style={{ marginBottom: '20px' }}>Sólo te pido una cosa.</p>
                <p style={{ marginBottom: '20px' }}>Puedes pasar operaciones, pero si lo haces, y son en DEMO, es obligatorio ponerlo. Este detalle lo entenderás cuando asistas a una clase en directo.</p>
                <p style={{ marginBottom: '20px' }}>¿Hay que saber de trading? ¿Hay que saber conceptos complejos de ICT, de Wyckoff o similar? ¿Hay que saber abrir una operación en Bingx o en Binance?</p>
                <p style={{ marginBottom: '20px' }}>Entras para aprender trading, si empiezas de cero te puede resultar abrumador. Pero más abrumador es seguir fichando de 8 a 17 el resto de tu vida. Por supuesto en las clases en directo te voy a resolver todas tus dudas sobre trading y quizas algunas sobre la vida, mas que nada por la experiencia que me han dado los años.</p>
                <p style={{ marginBottom: '20px' }}>Además si pones algo de tu parte para usar chatgpt y le preguntas que es un stop loss, pues eso que llevas avanzado.</p>
                <p style={{ marginBottom: '20px' }}>Se requiere para entrar que seas alguien competente. Y <strong>NO ES PARA TI</strong> si cumples alguna de estas cualidades:</p>
                <p style={{ marginBottom: '10px' }}>Has visto en RRSS que el trading da mucho dinero y tu quieres hacer lo mismo trabajando 2 horas al día</p>
                <p style={{ marginBottom: '10px' }}>Llevas siglos perdiendo sin saber el motivo y no quieres dedicar varias horas a la semana durante algún tiempo para evitar que tu cuenta siga desangrándose</p>
                <p style={{ marginBottom: '10px' }}>Estás perdido, no sabes a qué dedicarte en la vida y el trading te va a dar mucho dinero.</p>
                <p style={{ marginBottom: '10px' }}>Necesitas un manual paso a paso y que un adulto te supervise en tu vida diaria.</p>
                <p style={{ marginBottom: '20px' }}>Eres vago. (Si tienes disciplina y motivación para cambiar tu situación, entonces sí puedes entrar. Si no, quédate fuera).</p>
                <p style={{ marginBottom: '20px' }}>¿Necesito conocimientos técnicos?</p>
                <p style={{ marginBottom: '20px' }}>Si. No tienes que ser informático pero con saber usar Trading View, y un exchange es suficiente. Habrá una parte grabada con lo básico de ambas plataformas. Pero si sigues teniendo dudas, <strong>NO TE APUNTES.</strong></p>
                <p style={{ marginBottom: '20px' }}>¿Cuanto vale?</p>
                <p style={{ marginBottom: '20px' }}>20€/mes sin permanencia y parasiempre. Nunca subirá el precio hasta que te des de baja.</p>
                <p style={{ marginBottom: '20px' }}>El precio se mantiene hasta el día 8 de febrero de 2026 a las 20:59 hora España</p>
                <p style={{ marginBottom: '20px' }}>Si te piensas apuntar, hazlo antes del 8, hazme caso. Después el precio sube.</p>
                <p style={{ marginBottom: '20px' }}>No confundas precio con valor. Si crees que 20 € es caro es que para tí es un gasto.</p>
                <p style={{ marginBottom: '20px' }}>Hasta que no entiendas que invertir en tí no es un gasto, <strong>NO TE APUNTES.</strong></p>
            </section>
        </main>
    );
}