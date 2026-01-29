import Image from 'next/image';

export default function EntrarPage() {
    return (
        <main style={{
            backgroundColor: '#fdfcfb', // Fondo crema único para toda la página
            minHeight: '100vh',
            color: '#1a1a1a',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            padding: '60px 20px'
        }}>
            {/* Contenedor con ancho de lectura cómodo (ensanchado un 5%) */}
            <div style={{ maxWidth: '715px', margin: '0 auto', backgroundColor: 'transparent' }}>

                <article style={{ lineHeight: '1.6', fontSize: '1.15rem' }}>

                    <h1 style={{ fontSize: '2.8rem', fontWeight: '900', marginBottom: '20px', letterSpacing: '-0.04em' }}>
                        [cite_start]Tres habilidades [cite: 97]
                    </h1>

                    <p style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '15px' }}>
                        [cite_start]Existen 3 pilares fundamentales que cualquier persona que quiera ser trader debe dominar. [cite: 98]
                    </p>

                    <p style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '40px' }}>
                        [cite_start]Y esto afectará a tu vida sentimental, a tus relaciones personales, familiares y laborales. [cite: 99]
                    </p>

                    [cite_start]<p style={{ marginBottom: '25px' }}>Es innegable: si dominas estas tres, tu vida solo puede mejorar. [cite: 100]</p>

                    <div style={{ marginBottom: '40px', paddingLeft: '10px' }}>
                        <p style={{ marginBottom: '10px' }}>1. [cite_start]<strong>Una estrategia rentable.</strong> (Solo probabilidad). [cite: 101]</p>
                        <p style={{ marginBottom: '10px' }}>2. [cite_start]<strong>Una gestión de riesgo de hierro.</strong> (Lo que te mantiene vivo cuando fallas). [cite: 102]</p>
                        <p style={{ marginBottom: '10px' }}>3. [cite_start]<strong>Una psicología trabajada.</strong> (Lo que te impide pulsar el botón de comprar por miedo). [cite: 103]</p>
                    </div>

                    <p style={{ marginBottom: '25px' }}>
                        [cite_start]En el trading no existe la suerte, te guste o no. [cite: 104] [cite_start]Suerte es pegar un pelotazo y después perderlo todo en la siguiente jugada. [cite: 105]
                    </p>

                    <p style={{ marginBottom: '25px' }}>
                        [cite_start]Llevo auditando mi cuenta principal desde el 1 de septiembre de 2025 y el resultado es un <strong>41% de ganancias</strong>. [cite: 106]
                        [cite_start]Mientras tú pierdes meses intentando descifrar cada coma de Wyckoff o ICT, yo simplemente los pongo en práctica seleccionando los dos o tres conceptos que de verdad mueven el precio. [cite: 107]
                    </p>

                    <p style={{ marginBottom: '50px' }}>
                        [cite_start]Yo gano y <strong>tú sigues probando estrategias cada vez que pierdes 3 operaciones seguidas.</strong> Elige qué prefieres hacer. [cite: 108]
                    </p>

                    [cite_start]<h2 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '20px' }}>La mentira de la estrategia mágica [cite: 109]</h2>

                    <p style={{ marginBottom: '25px' }}>
                        [cite_start]El 85% de los traders retail acaban desangrando sus cuentas poco a poco. [cite: 110]
                        [cite_start]Datos publicados por uno de los principales brokers, <strong>Capital.com en su propia página web.</strong> [cite: 111]
                    </p>

                    <p style={{ marginBottom: '25px' }}>
                        [cite_start]El motivo es que buscan un gurú con un Lamborghini alquilado que les venda el indicador o la estrategia definitiva. [cite: 112]
                    </p>

                    <p style={{ marginBottom: '25px' }}>
                        [cite_start]Tengo alumnos que sentían miedo al abrir una operación porque habían perdido la confianza en sí mismos. [cite: 113]
                        [cite_start]Vienen intoxicados de información, con la cabeza llena de ruido con indicadores, todo el gráfico lleno de líneas y la cuenta reventada. [cite: 114]
                    </p>

                    <p style={{ marginBottom: '40px' }}>
                        Yo no vendo una estrategia mágica. Te ayudo a crear la tuya de cero. [cite_start]Vendo <strong>acompañamiento y orden.</strong> [cite: 115]
                    </p>

                    <p style={{ marginBottom: '25px' }}>
                        Conozco a poca gente que domine los tres pilares. [cite_start]La mayoría no tiene una estrategia, tiene una esperanza. [cite: 116]
                        [cite_start]Otros no gestionan el riesgo, simplemente apuestan. [cite: 117]
                        [cite_start]Y de la psicología… aquí es donde puedo ayudarte. [cite: 118] [cite_start]Necesitas añadir la palabra "disciplina" a tu diccionario. [cite: 119]
                    </p>

                    [cite_start]<h2 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '20px' }}>¿Qué recibes? [cite: 120]</h2>
                    <p style={{ marginBottom: '25px' }}>
                        [cite_start]4 directos mensuales los jueves a las 21:00 hora España, donde analizo Bitcoin, operaciones reales y experiencias. [cite: 121]
                    </p>

                    {/* Testimonios con fondo transparente para no crear bloques blancos */}
                    <div style={{ margin: '50px 0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <img src="/testimonio1.png" alt="Testimonio" style={{ width: '100%', borderRadius: '4px' }} />
                        <img src="/testimonio2.png" alt="Testimonio" style={{ width: '100%', borderRadius: '4px' }} />
                        <img src="/testimonio3.png" alt="Testimonio" style={{ width: '100%', borderRadius: '4px' }} />
                    </div>

                    <p style={{ marginBottom: '25px' }}>
                        Fíate de tu instinto. [cite_start]Si crees que el 41% de rentabilidad es suerte, <strong>NO ENTRES.</strong> [cite: 133]
                        [cite_start]Si no puedes asistir a las clases en directo, <strong>NO ENTRES.</strong> [cite: 136]
                    </p>

                    {/* Botón de Pago */}
                    <div style={{ textAlign: 'center', margin: '60px 0' }}>
                        <a href="#" style={{
                            backgroundColor: '#000',
                            color: '#fff',
                            padding: '20px 40px',
                            fontSize: '1.4rem',
                            fontWeight: '900',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            display: 'block'
                        }}>
                            [cite_start]ENLACE DE PAGO [cite: 137]
                        </a>
                    </div>

                    [cite_start]<h2 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '20px' }}>Preguntas frecuentes [cite: 153]</h2>

                    [cite_start]<p style={{ marginBottom: '10px' }}><strong>¿Tendré acceso a ti? [cite: 154]</strong></p>
                    [cite_start]<p style={{ marginBottom: '25px' }}>Si eres socio, en los directos tendrás la opción de poner la cámara y el micro para preguntar lo que quieras. [cite: 155]</p>

                    [cite_start]<p style={{ marginBottom: '10px' }}><strong>¿Cuándo son los directos? [cite: 157]</strong></p>
                    [cite_start]<p style={{ marginBottom: '25px' }}>Todos los jueves sin excepción a las 21:00 horas España. [cite: 158]</p>

                    <img src="/esqui.jpg" alt="Pirineos" style={{ width: '100%', marginBottom: '40px', borderRadius: '4px' }} />

                    [cite_start]<p style={{ marginBottom: '10px' }}><strong>¿Cuánto vale? [cite: 187]</strong></p>
                    [cite_start]<p style={{ marginBottom: '40px' }}>20€/mes sin permanencia y para siempre. [cite: 188] [cite_start]El precio se mantiene hasta el 8 de febrero. [cite: 189]</p>

                    <p style={{ fontSize: '1.2rem', fontWeight: '800', marginTop: '50px', textAlign: 'center' }}>
                        [cite_start]Hasta que no entiendas que invertir en ti no es un gasto, <strong>NO TE APUNTES.</strong> [cite: 192]
                    </p>

                </article>
            </div>
        </main>
    );
}