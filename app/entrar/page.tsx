export default function Entrar() {
    return (
        <div style={{
            backgroundColor: '#fdfcfb',
            minHeight: '100vh',
            color: '#1a1a1a',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            padding: '60px 20px'
        }}>
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

                    <p style={{ marginBottom: '10px' }}>1. Una estrategia rentable. (Solo probabilidad).</p>
                    <p style={{ marginBottom: '10px' }}>2. Una gestión de riesgo de hierro. (Lo que te mantiene vivo cuando fallas).</p>
                    <p style={{ marginBottom: '40px' }}>3. Una psicología trabajada. (Lo que te impide pulsar el botón de comprar por miedo).</p>

                    <p style={{ marginBottom: '25px' }}>En el trading no existe la suerte, te guste o no. Suerte es pegar un pelotazo y después perderlo todo en la siguiente jugada.</p>

                    <p style={{ marginBottom: '25px' }}>
                        Llevo auditando mi cuenta principal desde el 1 de septiembre de 2025 y el resultado es un 41% de ganancias.
                        Mientras tú pierdes meses intentando descifrar cada coma de Wyckoff o ICT, yo simplemente los pongo en práctica seleccionando los dos o tres conceptos que de verdad mueven el precio.
                    </p>

                    <p style={{ marginBottom: '50px' }}>
                        Yo gano y tú sigues probando estrategias cada vez que pierdes 3 operaciones seguidas. Elige qué prefieres hacer.
                    </p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '20px' }}>La mentira de la estrategia mágica</h2>

                    <p style={{ marginBottom: '25px' }}>
                        El 85% de los traders retail acaban desangrando sus cuentas poco a poco. Datos publicados por uno de los principales brokers, Capital.com en su propia página web.
                    </p>

                    <p style={{ marginBottom: '50px' }}>
                        Yo no vendo una estrategia mágica. Te ayudo a crear la tuya de cero. Vendo acompañamiento y orden.
                    </p>

                    {/* BOTÓN Y TARJETAS */}
                    <div style={{ textAlign: 'center', margin: '40px 0' }}>
                        <a href="https://whop.com/checkout/plan_Pn3GawS3QdeWk" style={{
                            backgroundColor: '#ff0000',
                            color: '#fff',
                            padding: '22px 60px',
                            fontSize: '2rem',
                            fontWeight: '900',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            display: 'inline-block',
                            width: '100%',
                            maxWidth: '400px'
                        }}>
                            ENTRAR
                        </a>
                        <div style={{ marginTop: '20px' }}>
                            <img src="/tarjetas.png" alt="Pago seguro" style={{ width: '250px', margin: '0 auto', display: 'block' }} />
                        </div>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '20px' }}>¿Como me ayudará la academia?</h2>
                    <p style={{ marginBottom: '40px' }}>Básicamente, te ayudaré a que dejes de ser el que paga las ganancias de los que sí sabemos lo que hacemos.</p>

                    {/* SECCIÓN DE LAS 3 FOTOS DE TESTIMONIOS */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                        <img src="/testimonio1.png" alt="Testimonio 1" style={{ width: '100%', borderRadius: '8px' }} />
                        <img src="/testimonio2.png" alt="Testimonio 2" style={{ width: '100%', borderRadius: '8px' }} />
                        <img src="/testimonio3.png" alt="Testimonio 3" style={{ width: '100%', borderRadius: '8px' }} />
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '20px' }}>Preguntas frecuentes</h2>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '900' }}>¿Tendré acceso a ti?</h3>
                    <p style={{ marginBottom: '25px' }}>Si eres socio, en los directos tendrás la opción de poner la cámara y el micro para preguntar lo que quieras.</p>

                    <h3 style={{ fontSize: '1.4rem', fontWeight: '900' }}>¿Cuando son los directos?</h3>
                    <p style={{ marginBottom: '15px' }}>Todos los jueves sin excepción a las 21:00 horas España. Salvo cuando me voy a esquiar.</p>

                    <img src="/esqui.jpg" alt="Pirineos" style={{ width: '100%', borderRadius: '4px', marginBottom: '40px' }} />

                    <div style={{ textAlign: 'center', marginTop: '50px', borderTop: '1px solid #ddd', paddingTop: '40px' }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: '800' }}>
                            Hasta que no entiendas que invertir en tí no es un gasto, NO TE APUNTES.
                        </p>
                    </div>

                </article>
            </div>
        </div>
    );
}