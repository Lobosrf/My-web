import Image from 'next/image';

export default function EntrarPage() {
    return (
        <main style={{
            backgroundColor: '#fdfcfb',
            minHeight: '100vh',
            color: '#1a1a1a',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            padding: '60px 20px'
        }}>
            {/* Contenedor ensanchado un 5% (de 650px a 715px) */}
            <div style={{ maxWidth: '715px', margin: '0 auto' }}>

                <article style={{ lineHeight: '1.6', fontSize: '1.15rem' }}>

                    <h1 style={{ fontSize: '2.8rem', fontWeight: '900', marginBottom: '20px', letterSpacing: '-0.04em' }}>
                        Tres habilidades
                    </h1>

                    <p style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '15px' }}>
                        Existen 3 pilares fundamentales que cualquier persona que quiera ser trader debe dominar.
                    </p>

                    <p style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '40px' }}>
                        Y esto afectará a tu vida sentimental, a tus relaciones personales, familiares y laborales.
                    </p>

                    <p style={{ marginBottom: '25px' }}>Es innegable: si dominas estas tres, tu vida solo puede mejorar.</p>

                    <div style={{ marginBottom: '40px', paddingLeft: '10px' }}>
                        <p style={{ marginBottom: '10px' }}>1. <strong>Una estrategia rentable.</strong> (Solo probabilidad).</p>
                        <p style={{ marginBottom: '10px' }}>2. <strong>Una gestión de riesgo de hierro.</strong> (Lo que te mantiene vivo cuando fallas).</p>
                        <p style={{ marginBottom: '10px' }}>3. <strong>Una psicología trabajada.</strong> (Lo que te impide pulsar el botón de comprar por miedo).</p>
                    </div>

                    <p style={{ marginBottom: '25px' }}>En el trading no existe la suerte, te guste o no. Suerte es pegar un pelotazo y después perderlo todo en la siguiente jugada.</p>

                    <p style={{ marginBottom: '25px' }}>
                        Llevo auditando mi cuenta principal desde el 1 de septiembre de 2025 y el resultado es un <strong>41% de ganancias</strong>.
                        Mientras tú pierdes meses intentando descifrar cada coma de Wyckoff o ICT, yo simplemente los pongo en práctica seleccionando los dos o tres conceptos que de verdad mueven el precio.
                    </p>

                    <p style={{ marginBottom: '50px' }}>
                        Yo gano y <strong>tú sigues probando estrategias cada vez que pierdes 3 operaciones seguidas.</strong> Elige qué prefieres hacer.
                    </p>

                    <h2 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '20px' }}>La mentira de la estrategia mágica</h2>

                    <p style={{ marginBottom: '25px' }}>
                        El 85% de los traders retail acaban desangrando sus cuentas poco a poco.
                        Datos publicados por uno de los principales brokers, <strong>Capital.com en su propia página web</strong>.
                    </p>

                    <p style={{ marginBottom: '25px' }}>El motivo es que buscan un gurú con un Lamborghini alquilado que les venda el indicador o la estrategia definitiva.</p>

                    <p style={{ marginBottom: '25px' }}>
                        Tengo alumnos que sentían miedo al abrir una operación porque habían perdido la confianza en sí mismos.
                        Vienen intoxicados de información, con la cabeza llena de ruido con indicadores, todo el gráfico lleno de líneas y la cuenta reventada.
                    </p>

                    <p style={{ marginBottom: '40px' }}>
                        Yo no vendo una estrategia mágica. Te ayudo a crear la tuya de cero. Vendo <strong>acompañamiento y orden</strong>.
                    </p>

                    <p style={{ marginBottom: '25px' }}>Conozco a poca gente que domine los tres pilares. La mayoría no tiene una estrategia, tiene una esperanza. Otros no gestionan el riesgo, simplemente apuestan. Necesitas añadir la palabra "disciplina" a tu diccionario.</p>

                    <h2 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '20px' }}>¿Que recibes?</h2>
                    <p style={{ marginBottom: '25px' }}>4 directos mensuales (quedan grabados) los jueves a las 21:00 hora España, donde analizo Bitcoin, operaciones reales y lo que aprendo en mi día a día.</p>

                    {/* Testimonios */}
                    <div style={{ margin: '50px 0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <img src="/testimonio1.png" alt="Testimonio 1" style={{ width: '100%', borderRadius: '4px' }} />
                        <img src="/testimonio2.png" alt="Testimonio 2" style={{ width: '100%', borderRadius: '4px' }} />
                        <img src="/testimonio3.png" alt="Testimonio 3" style={{ width: '100%', borderRadius: '4px' }} />
                    </div>

                    <p style={{ marginBottom: '25px' }}>Fíate de tu instinto. Si crees que mi rentabilidad es suerte, <strong>NO ENTRES</strong>. Si no puedes asistir a los directos, <strong>NO ENTRES</strong>.</p>

                    <div style={{ textAlign: 'center', margin: '60px 0' }}>
                        <a href="#" style={{ backgroundColor: '#000', color: '#fff', padding: '20px 40px', fontSize: '1.4rem', fontWeight: '900', textDecoration: 'none', borderRadius: '4px', display: 'block' }}>
                            ENLACE DE PAGO
                        </a>
                    </div>

                    <h2 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '20px' }}>Preguntas frecuentes</h2>

                    <p style={{ marginBottom: '10px' }}><strong>¿Tendré acceso a ti?</strong></p>
                    <p style={{ marginBottom: '25px' }}>Si eres socio, en los directos tendrás la opción de poner la cámara y el micro para preguntar lo que quieras.</p>

                    <p style={{ marginBottom: '10px' }}><strong>¿Cuando son los directos?</strong></p>
                    <p style={{ marginBottom: '25px' }}>Todos los jueves a las 21:00 horas España, salvo en fechas señaladas o vacaciones avisadas.</p>

                    <img src="/esqui.jpg" alt="Pirineos" style={{ width: '100%', marginBottom: '40px', borderRadius: '4px' }} />

                    <p style={{ marginBottom: '10px' }}><strong>¿Cuanto vale?</strong></p>
                    <p style={{ marginBottom: '40px' }}>20€/mes sin permanencia y para siempre. El precio se mantiene hasta el 8 de febrero.</p>

                    <p style={{ fontSize: '1.2rem', fontWeight: '800', marginTop: '50px', textAlign: 'center' }}>
                        Hasta que no entiendas que invertir en ti no es un gasto, <strong>NO TE APUNTES.</strong>
                    </p>

                </article>
            </div>
        </main>
    );
}