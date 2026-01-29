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

            <section style={{ maxWidth: '600px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', lineHeight: '1.1', marginBottom: '30px', letterSpacing: '-0.03em', color: '#1a1a1a' }}>
                    Tres habilidades
                </h2>

                <p style={{ marginBottom: '20px' }}>Existen 3 pilares fundamentales que cualquier persona que quiera ser trader debe dominar.</p>
                <p style={{ marginBottom: '20px' }}>Y esto afectará a tu vida sentimental, a tus relaciones personales, familiares y laborales.</p>

                <p style={{ marginBottom: '20px' }}>Es innegable: si dominas estas tres, tu vida solo puede mejorar.</p>

                <p style={{ marginBottom: '10px' }}><strong>Una estrategia rentable.</strong> (Solo probabilidad).</p>
                <p style={{ marginBottom: '10px' }}><strong>Una gestión de riesgo de hierro.</strong> (Lo que te mantiene vivo cuando fallas).</p>
                <p style={{ marginBottom: '20px' }}><strong>Una psicología trabajada.</strong> (Lo que te impide pulsar el botón de comprar por miedo).</p>

                <p style={{ marginBottom: '20px' }}>En el trading no existe la suerte, te guste o no.</p>
                <p style={{ marginBottom: '20px' }}>Suerte es pegar un pelotazo y después perderlo todo en la siguiente jugada.</p>

                <p style={{ marginBottom: '20px' }}>
                    Llevo auditando mi cuenta principal desde el 1 de septiembre de 2025 y el resultado es un <strong>41% de ganancias</strong>.
                </p>
                <p style={{ marginBottom: '20px' }}>Mientras tú pierdes meses intentando descifrar cada coma de Wyckoff o ICT, yo simplemente los pongo en práctica seleccionando los dos o tres conceptos que de verdad mueven el precio.</p>
                <p style={{ marginBottom: '40px' }}>Yo gano y <strong>tú sigues probando estrategias cada vez que pierdes 3 operaciones seguidas.</strong> Elige qué prefieres hacer.</p>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '20px' }}>La mentira de la estrategia mágica</h3>

                <p style={{ marginBottom: '20px' }}>El 85% de los traders retail acaban desangrando sus cuentas poco a poco.</p>
                <p style={{ marginBottom: '20px' }}>Datos publicados por uno de los principales brokers, <strong>Capital.com en su propia página web.</strong></p>
                <p style={{ marginBottom: '20px' }}>El motivo es que buscan un gurú con un Lamborghini alquilado que les venda el indicador o la estrategia definitiva.</p>
                <p style={{ marginBottom: '20px' }}>Tengo alumnos que sentían miedo al abrir una operación porque habian perdido la confianza en sí mismos.</p>
                <p style={{ marginBottom: '20px' }}>Vienen intoxicados de información, con la cabeza llena de ruido con indicadores, todo el grafico lleno de lineas y la cuenta reventada.</p>
                <p style={{ marginBottom: '20px' }}>Yo no vendo una estrategia mágica. Te ayudo a crear la tuya de cero. Vendo <strong>acompañamiento y orden.</strong></p>

                <div style={{ margin: '40px 0' }}>
                    <a href="#" style={{ backgroundColor: '#000', color: '#fff', padding: '16px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', display: 'block', textAlign: 'center' }}>
                        ENLACE DE PAGO
                    </a>
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '20px' }}>¿Que recibes?</h3>
                <p style={{ marginBottom: '20px' }}>4 directos mensuales (quedan grabados, no te preocupes) los jueves a las 21:00 hora España, donde analizo generalmente Bitcoin, operaciones con estrategias que funcionan, lo que aprendo en mi día a día gracias a mis formaciones y experiencias.</p>

                {/* ... Resto del texto siguiendo exactamente el mismo patrón de márgenes y negritas del docx ... */}

            </section>
        </main>
    );
}