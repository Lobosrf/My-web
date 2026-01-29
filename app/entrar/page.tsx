export default function Entrar() {
    const btnStyle = {
        backgroundColor: '#ff0000',
        color: '#fff',
        padding: '22px 60px',
        fontSize: '2rem',
        fontWeight: '900',
        textDecoration: 'none',
        borderRadius: '4px',
        display: 'inline-block',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
    };

    const cardsImg = (
        <div style={{ marginTop: '20px' }}>
            <img src="/tarjetas.png" alt="Pago seguro" style={{ width: '250px', margin: '0 auto', display: 'block' }} />
        </div>
    );

    return (
        <div style={{ backgroundColor: '#fdfcfb', minHeight: '100vh', color: '#1a1a1a', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '60px 20px' }}>
            <div style={{ maxWidth: '715px', margin: '0 auto' }}>

                <article style={{ lineHeight: '1.6', fontSize: '1.15rem' }}>

                    <h1 style={{ fontSize: '2.8rem', fontWeight: '900', marginBottom: '20px', letterSpacing: '-0.04em' }}>Tres habilidades</h1>

                    <p style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '15px' }}>Existen 3 pilares fundamentales que cualquier persona que quiera ser trader debe dominar.</p>
                    <p style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '40px' }}>Y esto afectará a tu vida sentimental, a tus relaciones personales, familiares y laborales.</p>

                    <p style={{ marginBottom: '25px' }}>Es innegable: si dominas estas tres, tu vida solo puede mejorar.</p>

                    <p style={{ marginBottom: '10px' }}>• Una estrategia rentable. (Solo probabilidad).</p>
                    <p style={{ marginBottom: '10px' }}>• Una gestión de riesgo de hierro. (Lo que te mantiene vivo cuando fallas).</p>
                    <p style={{ marginBottom: '40px' }}>• Una psicología trabajada. (Lo que te impide pulsar el botón de comprar por miedo).</p>

                    <p style={{ marginBottom: '25px' }}>En el trading no existe la suerte, te guste o no. Suerte es pegar un pelotazo y después perderlo todo en la siguiente jugada.</p>

                    <p style={{ marginBottom: '25px' }}>Llevo auditando mi cuenta principal desde el 1 de septiembre de 2025 y el resultado es un 41% de ganancias. Mientras tú pierdes meses intentando descifrar cada coma de Wyckoff o ICT, yo simplemente los pongo en práctica seleccionando los dos o tres conceptos que de verdad mueven el precio.</p>

                    <p style={{ marginBottom: '50px' }}>Yo gano y tú sigues probando estrategias cada vez que pierdes 3 operaciones seguidas. Elige qué prefieres hacer.</p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '20px' }}>La mentira de la estrategia mágica</h2>

                    <p style={{ marginBottom: '25px' }}>El 85% de los traders retail acaban desangrando sus cuentas poco a poco. Datos publicados por uno de los principales brokers, Capital.com en su propia página web.</p>

                    <p style={{ marginBottom: '25px' }}>El motivo es que buscan un gurú con un Lamborghini alquilado que les venda el indicador o la estrategia definitiva.</p>

                    <p style={{ marginBottom: '25px' }}>Tengo alumnos que sentían miedo al abrir una operación porque habían perdido la confianza en sí mismos. Vienen intoxicados de información, con la cabeza llena de ruido con indicadores, todo el grafico lleno de lineas y la cuenta reventada.</p>

                    <p style={{ marginBottom: '25px' }}>Yo no vendo una estrategia mágica. Te ayudo a crear la tuya de cero. Vendo acompañamiento y orden.</p>

                    <p style={{ marginBottom: '50px' }}>Conozco a poca gente que domine los tres pilares. La mayoría no tiene una estrategia, tiene una esperanza y van probando una después de otra cuando los resultados de tres operaciones no salen bien. Otros no gestionan el riesgo, simplemente apuestan. Ganan mucho en un par de operaciones y en las siguientes han fundido todos los profits. Y de la psicología… aquí es donde puedo ayudarte con herramientas para que tu mismo corrijas tus errores. Necesitas añadir la palabra "disciplina" a tu diccionario.</p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '20px' }}>¿Que recibes?</h2>

                    <p style={{ marginBottom: '20px' }}>- 4 directos mensuales (quedan grabados, no te preocupes) los jueves a las 21:00 hora España, donde analizo generalmente Bitcoin, operaciones con estrategias que funcionan, lo que aprendo en mi día a día gracias a mis formaciones y experiencias.</p>
                    <p style={{ marginBottom: '20px' }}>- Información filtrada de RRSS donde el ruido nubla tu criterio y la ilusión mantiene el deseo de que haya un empujón a máximos históricos constantemente (esto no es el oro)</p>
                    <p style={{ marginBottom: '40px' }}>- Sesiones de preguntas y respuestas en directo aprovechando las dudas y errores que cometemos todos haciendo trading.</p>

                    {/* PRIMER ENLACE DE PAGO */}
                    <div style={{ textAlign: 'center', margin: '40px 0' }}>
                        <a href="https://whop.com/checkout/plan_Pn3GawS3QdeWk" style={btnStyle}>ENTRAR</a>
                        {cardsImg}
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '20px' }}>¿Como me ayudará la academia?</h2>

                    <p style={{ marginBottom: '20px' }}>Desde el 2021 llevo enseñando a gente y muchos alumnos han conseguido operar con calma siguiendo su estrategia, sin importar si el precio va a subir o a bajar, y cuando empezaron conmigo alguno no sabía ni lo que era un stop loss.</p>
                    <p style={{ marginBottom: '20px' }}>Aquí aprenderás a leer la dirección más probable del precio, donde esperar paciente y cómo colocar tu entrada, saber calcular el dinero que tienes que perder en cada operación y sobre todo ganar confianza para dominar tus impulsos de cerrar operaciones ganadoras antes de tiempo o mover el stop loss.</p>
                    <p style={{ marginBottom: '20px' }}>Mira, yo no voy a estar detrás de ti para que estudies. Te ayudaré dándote acceso a mis sesiones en directo donde verás cómo analizo Bitcoin y otros activos con las mismas herramientas con las que yo saco rentabilidad.</p>
                    <p style={{ marginBottom: '20px' }}>Te ayudaré filtrando todo el ruido de redes sociales para que dejes de esperar "to the moon" constantes.</p>
                    <p style={{ marginBottom: '40px' }}>Básicamente, te ayudaré a que dejes de ser el que paga las ganancias de los que sí sabemos lo que hacemos. El resto depende de tu disciplina, no de la mía.</p>

                    <p style={{ marginBottom: '20px' }}>Fíate de tu instinto. Si crees que el 41% de rentabilidad que llevo auditando desde septiembre de 2025 es producto de la suerte, de una racha divina o de que el mercado está a mi favor porque “todo sube”, NO ENTRES.</p>
                    <p style={{ marginBottom: '20px' }}>Si piensas que los alumnos que me siguen lo hacen por aburrimiento y no por que lo que enseño funciona, esta academia no te va a servir, NO ENTRES.</p>
                    <p style={{ marginBottom: '20px' }}>Puedes seguir probando EMAS, el RSI o el MACD. NO ENTRES.</p>
                    <p style={{ marginBottom: '40px' }}>Si no puedes asistir a las clases en directo, los jueves a las 21:00, aunque luego quede grabada (no la vas a ver grabada), NO ENTRES.</p>

                    {/* SEGUNDO ENLACE DE PAGO */}
                    <div style={{ textAlign: 'center', margin: '40px 0' }}>
                        <a href="https://whop.com/checkout/plan_Pn3GawS3QdeWk" style={btnStyle}>ENTRAR</a>
                        {cardsImg}
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '20px' }}>Hacer dinero con el trading es una habilidad.</h2>
                    <p style={{ marginBottom: '20px' }}>Y como toda habilidad, se puede aprender. Cuando ves desde fuera como la gente gana dinero y consigue grandes resultados haciendo las cosas simples, no lo achaques a la suerte, a circunstancias únicas e irreplicables.</p>
                    <p style={{ marginBottom: '20px' }}>Todo eso cambia cuando pasas con ellos momentos de calidad, comparten frustraciones por las que tú estás pasando con tu operativa o te ofrecen acciones que a ellos les han servido para mejorar cuando estaban en tu misma situación.</p>
                    <p style={{ marginBottom: '20px' }}>Formar parte de un grupo donde todos reman en la misma dirección no se puede describir desde fuera.</p>
                    <p style={{ marginBottom: '40px' }}>Y sólo tienes que juntarte con esa gente para aprenderlo.</p>

                    {/* TERCER ENLACE DE PAGO */}
                    <div style={{ textAlign: 'center', margin: '40px 0' }}>
                        <a href="https://whop.com/checkout/plan_Pn3GawS3QdeWk" style={btnStyle}>ENTRAR</a>
                        {cardsImg}
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '20px' }}>¿Es otro curso online que no terminaré nunca?</h2>
                    <p style={{ marginBottom: '20px' }}>No, son 4 directos al mes que no te querrás perder porque aprenderás más que en cursos de miles de euros. El contenido importante que no puedes perderte. Asistir es la manera de poder trabajar en TU problema en particular.</p>
                    <p style={{ marginBottom: '20px' }}>Tienes que trabajar sobre tu problema concreto y usar las herramientas que te indico para hacer los deberes para la siguiente clase.</p>
                    <p style={{ marginBottom: '20px' }}>No tengo 100 horas de videos para que repases en tus ratos libres. Todos sabemos que ESO NO FUNCIONA.</p>
                    <p style={{ marginBottom: '20px' }}>Implementar las herramientas creyendo que te harás rico de la noche a la mañana, ESO NO FUNCIONA.</p>
                    <p style={{ marginBottom: '20px' }}>No esperes comprarte un lambo en el próximo año. Esto no funciona así. Si es tu pensamiento, NO ENTRES.</p>
                    <p style={{ marginBottom: '40px' }}>Ver la clase grabada al día siguiente: el valor real está en el directo porque ahí corregimos TU error.</p>

                    {/* SECCIÓN DE TESTIMONIOS: UNO DEBAJO DEL OTRO */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',          // Espacio entre cada testimonio
                        marginBottom: '50px',
                        width: '100%'
                    }}>
                        <img
                            src="/testimonio1.png"
                            alt="Testimonio 1"
                            style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }}
                        />
                        <img
                            src="/testimonio2.png"
                            alt="Testimonio 2"
                            style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }}
                        />
                        <img
                            src="/testimonio3.png"
                            alt="Testimonio 3"
                            style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }}
                        />
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '20px' }}>Preguntas frecuentes</h2>

                    <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '10px' }}>¿Tendré acceso a ti?</h3>
                    <p style={{ marginBottom: '25px' }}>Si eres socio, en los directos tendrás la opción de poner la cámara y el micro para preguntar lo que quieras. Si eres un poco vergonzoso, pues pones sólo el micro. No te voy a tratar distinto sólo por no verte.</p>

                    <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '10px' }}>¿Cuando son los directos?</h3>
                    <p style={{ marginBottom: '15px' }}>Todos los jueves sin excepción a las 21:00 horas España. Salvo el día de nochebuena, el de nochevieja y el 26 de febrero que me voy a esquiar una semana a los pirineos.</p>
                    <img src="/esqui.jpg" alt="Pirineos" style={{ width: '100%', borderRadius: '4px', marginBottom: '40px' }} />

                    <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '10px' }}>¿Puedo cancelar cuando quiera?</h3>
                    <p style={{ marginBottom: '25px' }}>Cuando quieras. Una vez pagas, tienes el mes incluido.</p>

                    <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '10px' }}>¿Tengo 15 días para ver si me gusta y si no me devuelves el dinero?</h3>
                    <p style={{ marginBottom: '25px' }}>Si me haces esa pregunta, no te quiero como alumno.</p>

                    <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '10px' }}>Algunas veces pareces un poco borde</h3>
                    <p style={{ marginBottom: '25px' }}>Tengo 46 años, no tengo que engañar a nadie pero si empujar a la gente a que vea que “no todo sube siempre” y puedo parecer brusco. Necesitas que te digan las cosas como son y no necesitas otro que te diga lo que tu quieres escuchar.</p>

                    <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '10px' }}>¿Como funciona la comunidad?</h3>
                    <p style={{ marginBottom: '15px' }}>Una vez pagas, recibes acceso automático al software Discord. Dentro tienes varios canales de texto y de voz donde puedes escribir lo que quieras, con respeto.</p>
                    <p style={{ marginBottom: '15px' }}>Sólo te pido una cosa.</p>
                    <p style={{ marginBottom: '25px' }}>Puedes pasar operaciones, pero si lo haces, y son en DEMO, es obligatorio ponerlo. Este detalle lo entenderás cuando asistas a una clase en directo.</p>

                    <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '10px' }}>¿Hay que saber de trading? ¿Hay que saber conceptos complejos de ICT, de Wyckoff o similar? ¿Hay que saber abrir una operación en Bingx o en Binance?</h3>
                    <p style={{ marginBottom: '15px' }}>Entras para aprender trading, si empiezas de cero te puede resultar abrumador. Pero más abrumador es seguir fichando de 8 a 17 el resto de tu vida. Por supuesto en las clases en directo te voy a resolver todas tus dudas sobre trading y quizas algunas sobre la vida, mas que nada por la experiencia que me han dado los años.</p>
                    <p style={{ marginBottom: '25px' }}>Además si pones algo de tu parte para usar chatgpt y le preguntas que es un stop loss, pues eso que llevas avanzado.</p>

                    <p style={{ marginBottom: '15px' }}>Se requiere para entrar que seas alguien competente. Y NO ES PARA TI si cumples alguna de estas cualidades:</p>
                    <p>● Has visto en RRSS que el trading da mucho dinero y tu quieres hacer lo mismo trabajando 2 horas al día.</p>
                    <p>● Llevas siglos perdiendo sin saber el motivo y no quieres dedicar varias horas a la semana durante algún tiempo para evitar que tu cuenta siga desangrándose.</p>
                    <p>● Estás perdido, no sabes a qué dedicarte en la vida y el trading te va a dar mucho dinero.</p>
                    <p>● Necesitas un manual paso a paso y que un adulto te supervise en tu vida diaria.</p>
                    <p style={{ marginBottom: '40px' }}>● Eres vago. (Si tienes disciplina y motivación para cambiar tu situación, entonces sí puedes entrar. Si no, quédate fuera).</p>

                    <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '10px' }}>¿Necesito conocimientos técnicos?</h3>
                    <p style={{ marginBottom: '25px' }}>Si. No tienes que ser informático pero con saber usar Trading View, y un exchange es suficiente. Habrá una parte grabada con lo básico de ambas plataformas. Pero si sigues teniendo dudas, NO TE APUNTES.</p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '20px' }}>¿Cuanto vale?</h2>
                    <p style={{ marginBottom: '10px' }}>20€/mes sin permanencia y parasiempre. Nunca subirá el precio hasta que te des de baja.</p>
                    <p style={{ marginBottom: '10px' }}>El precio se mantiene hasta el día 8 de febrero de 2026 a las 20:59 hora España.</p>
                    <p style={{ marginBottom: '20px' }}>Si te piensas apuntar, hazlo antes del 8, hazme caso. Después el precio sube.</p>
                    <p style={{ marginBottom: '40px' }}>No confundas precio con valor. Si crees que 20 € es caro es que para tí es un gasto.</p>

                    <div style={{ textAlign: 'center', marginTop: '50px', borderTop: '1px solid #ddd', paddingTop: '40px' }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: '800' }}>Hasta que no entiendas que invertir en tí no es un gasto, NO TE APUNTES.</p>
                    </div>
                    {/* CUARTO ENLACE DE PAGO */}
                    <div style={{ textAlign: 'center', margin: '40px 0' }}>
                        <a href="https://whop.com/checkout/plan_Pn3GawS3QdeWk" style={btnStyle}>ENTRAR</a>
                        {cardsImg}
                    </div>

                </article>
            </div>
        </div>
    );
}