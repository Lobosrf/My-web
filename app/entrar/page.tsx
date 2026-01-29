import Image from 'next/image';

export default function EntrarPage() {
    return (
        <main className="container" style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#fff', color: '#000', padding: '40px 20px' }}>

            {/* Logo superior derecho idéntico a la Home */}
            <div style={{
                backgroundColor: '#ffc400ff',
                padding: '8px 16px',
                fontWeight: '900',
                position: 'absolute',
                top: '20px',
                right: '20px',
                color: '#000',
                fontSize: '0.9rem',
                textTransform: 'lowercase',
                zIndex: 10
            }}>
                lobo srf
            </div>

            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                {/* Cabecera idéntica a Home */}
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
                            width={80}
                            height={80}
                            priority
                            style={{ objectFit: 'cover', borderRadius: '50%', backgroundColor: '#eee' }}
                        />
                    </div>
                    <div>
                        <h1 style={{ fontSize: '1.8rem', margin: 0, fontWeight: '800', color: '#1a1a1a' }}>Lobo SRF</h1>
                        <p style={{ margin: 0, color: '#4a4a4a', fontSize: '1.1rem' }}>Aquí aprendo trading institucional</p>
                    </div>
                </header>

                {/* Cuerpo del texto con formato exacto del Word */}
                <article style={{ lineHeight: '1.6', fontSize: '1.15rem', color: '#1a1a1a', textAlign: 'left' }}>

                    <h1 style={{ fontSize: '2.4rem', fontWeight: '900', marginBottom: '10px', letterSpacing: '-0.03em' }}>Tres habilidades</h1>

                    <p style={{ marginBottom: '20px' }}>Existen 3 pilares fundamentales que cualquier persona que quiera ser trader debe dominar.</p>
                    <p style={{ marginBottom: '30px' }}>Y esto afectará a tu vida sentimental, a tus relaciones personales, familiares y laborales.</p>

                    <p style={{ marginBottom: '20px' }}>Es innegable: si dominas estas tres, tu vida solo puede mejorar.</p>

                    <p style={{ marginBottom: '10px' }}><strong>Una estrategia rentable.</strong> (Solo probabilidad).</p>
                    <p style={{ marginBottom: '10px' }}><strong>Una gestión de riesgo de hierro.</strong> (Lo que te mantiene vivo cuando fallas).</p>
                    <p style={{ marginBottom: '30px' }}><strong>Una psicología trabajada.</strong> (Lo que te impide pulsar el botón de comprar por miedo).</p>

                    <p style={{ marginBottom: '20px' }}>En el trading no existe la suerte, te guste o no. Suerte es pegar un pelotazo y después perderlo todo en la siguiente jugada.</p>

                    <p style={{ marginBottom: '20px' }}>
                        Llevo auditando mi cuenta principal desde el 1 de septiembre de 2025 y el resultado es un <strong>41% de ganancias</strong>. Mientras tú pierdes meses intentando descifrar cada coma de Wyckoff o ICT, yo simplemente los pongo en práctica seleccionando los dos o tres conceptos que de verdad mueven el precio.
                    </p>

                    <p style={{ marginBottom: '40px' }}>
                        Yo gano y <strong>tú sigues probando estrategias cada vez que pierdes 3 operaciones seguidas.</strong> Elige qué prefieres hacer.
                    </p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '20px' }}>La mentira de la estrategia mágica</h2>

                    <p style={{ marginBottom: '20px' }}>El 85% de los traders retail acaban desangrando sus cuentas poco a poco. Datos publicados por uno de los principales brokers, <strong>Capital.com en su propia página web.</strong></p>

                    <p style={{ marginBottom: '20px' }}>El motivo es que buscan un gurú con un Lamborghini alquilado que les venda el indicador o la estrategia definitiva.</p>

                    <p style={{ marginBottom: '20px' }}>Tengo alumnos que sentían miedo al abrir una operación porque habían perdido la confianza en sí mismos. Vienen intoxicados de información, con la cabeza llena de ruido con indicadores, todo el gráfico lleno de líneas y la cuenta reventada.</p>

                    <p style={{ marginBottom: '20px' }}>Yo no vendo una estrategia mágica. Te ayudo a crear la tuya de cero. <strong>Vendo acompañamiento y orden.</strong></p>

                    <p style={{ marginBottom: '40px' }}>Conozco a poca gente que domine los tres pilares. La mayoría no tiene una estrategia, tiene una esperanza y van probando una después de otra cuando los resultados de tres operaciones no salen bien. Otros no gestionan el riesgo, simplemente apuestan. Ganan mucho en un par de operaciones y en las siguientes han fundido todos los profits. Y de la psicología… aquí es donde puedo ayudarte con herramientas para que tu mismo corrijas tus errores. <strong>Necesitas añadir la palabra "disciplina" a tu diccionario.</strong></p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '20px' }}>¿Qué recibes?</h2>

                    <p style={{ marginBottom: '20px' }}><strong>4 directos mensuales</strong> (quedan grabados, no te preocupes) los jueves a las 21:00 hora España, donde analizo generalmente Bitcoin, operaciones con estrategias que funcionan, lo que aprendo en mi día a día gracias a mis formaciones y experiencias.</p>

                    <p style={{ marginBottom: '20px' }}>Información filtrada de RRSS donde el ruido nubla tu criterio y la ilusión mantiene el deseo de que haya un empujón a máximos históricos constantemente (esto no es el oro)</p>

                    <p style={{ marginBottom: '40px' }}>Sesiones de preguntas y respuestas en directo aprovechando las dudas y errores que cometemos todos haciendo trading.</p>

                    <div style={{ textAlign: 'center', margin: '40px 0' }}>
                        <a href="#" style={{ backgroundColor: '#000', color: '#fff', padding: '16px 32px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', width: '100%' }}>ENLACE DE PAGO</a>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '20px' }}>¿Cómo me ayudará la academia?</h2>

                    <p style={{ marginBottom: '20px' }}>Desde el 2021 llevo enseñando a gente y muchos alumnos han conseguido operar con calma siguiendo su estrategia, sin importar si el precio va a subir o a bajar, y cuando empezaron conmigo alguno no sabía ni lo que era un stop loss.</p>

                    <p style={{ marginBottom: '20px' }}>Aquí aprenderás a leer la dirección más probable del precio, donde esperar paciente y cómo colocar tu entrada, saber calcular el dinero que tienes que perder en cada operación y sobre todo ganar confianza para dominar tus impulsos de cerrar operaciones ganadoras antes de tiempo o mover el stop loss.</p>

                    <p style={{ marginBottom: '40px' }}>Básicamente, te ayudaré a que dejes de ser el que paga las ganancias de los que sí sabemos lo que hacemos. <strong>El resto depende de tu disciplina, no de la mía.</strong></p>

                    <p style={{ marginBottom: '20px' }}>Fíate de tu instinto. Si crees que el 41% de rentabilidad que llevo auditando desde septiembre de 2025 es producto de la suerte, <strong>NO ENTRES.</strong></p>

                    <div style={{ textAlign: 'center', margin: '40px 0' }}>
                        <a href="#" style={{ backgroundColor: '#000', color: '#fff', padding: '16px 32px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', width: '100%' }}>ENLACE DE PAGO</a>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '20px' }}>Preguntas frecuentes</h2>

                    <p style={{ marginBottom: '5px' }}><strong>¿Tendré acceso a ti?</strong></p>
                    <p style={{ marginBottom: '20px' }}>Si eres socio, en los directos tendrás la opción de poner la cámara y el micro para preguntar lo que quieras.</p>

                    <p style={{ marginBottom: '5px' }}><strong>¿Cuándo son los directos?</strong></p>
                    <p style={{ marginBottom: '20px' }}>Todos los jueves sin excepción a las 21:00 horas España.</p>

                    <p style={{ marginBottom: '40px', fontStyle: 'italic', borderLeft: '4px solid #ffc400ff', paddingLeft: '15px' }}>
                        No confundas precio con valor. Si crees que 20 € es caro es que para ti es un gasto. Hasta que no entiendas que invertir en ti no es un gasto, <strong>NO TE APUNTES.</strong>
                    </p>

                    <div style={{ textAlign: 'center', margin: '60px 0' }}>
                        <a href="#" style={{ backgroundColor: '#000', color: '#fff', padding: '16px 32px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', width: '100%' }}>ENLACE DE PAGO</a>
                    </div>

                </article>
            </div>
        </main>
    );
}