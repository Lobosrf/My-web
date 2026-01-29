import Image from 'next/image';

export default function EntrarPage() {
    return (
        /* Contenedor principal con el mismo padding y centrado que la Home */
        <main className="container" style={{
            position: 'relative',
            minHeight: '100vh',
            backgroundColor: '#fff',
            color: '#000',
            padding: '40px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>

            {/* Etiqueta amarilla lobo srf - Posición absoluta igual que Home */}
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

            {/* Ancho máximo limitado a 600px para replicar la lectura de la Home */}
            <div style={{ maxWidth: '600px', width: '100%' }}>

                {/* Cabecera idéntica a la Home */}
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
                            style={{ objectFit: 'cover', borderRadius: '50%' }}
                        />
                    </div>
                    <div>
                        <h1 style={{ fontSize: '1.8rem', margin: 0, fontWeight: '800', color: '#1a1a1a' }}>Lobo SRF</h1>
                        <p style={{ margin: 0, color: '#4a4a4a', fontSize: '1.1rem' }}>Aquí aprendo trading institucional</p>
                    </div>
                </header>

                {/* Cuerpo del texto respetando negritas del Word y alineación de la Home */}
                <article style={{ lineHeight: '1.6', fontSize: '1.15rem', color: '#1a1a1a' }}>

                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '10px', letterSpacing: '-0.03em' }}>Tres habilidades</h2>

                    <p style={{ marginBottom: '20px' }}>Existen 3 pilares fundamentales que cualquier persona que quiera ser trader debe dominar. [cite: 98]</p>
                    <p style={{ marginBottom: '40px' }}>Y esto afectará a tu vida sentimental, a tus relaciones personales, familiares y laborales. [cite: 99]</p>

                    <p style={{ marginBottom: '20px' }}>Es innegable: si dominas estas tres, tu vida solo puede mejorar. [cite: 100]</p>

                    <p style={{ marginBottom: '10px' }}><strong>1. Una estrategia rentable.</strong> (Solo probabilidad). [cite: 101]</p>
                    <p style={{ marginBottom: '10px' }}><strong>2. Una gestión de riesgo de hierro.</strong> (Lo que te mantiene vivo cuando fallas). [cite: 102]</p>
                    <p style={{ marginBottom: '40px' }}><strong>3. Una psicología trabajada.</strong> (Lo que te impide pulsar el botón de comprar por miedo). [cite: 103]</p>

                    <p style={{ marginBottom: '20px' }}>En el trading no existe la suerte, te guste o no. [cite: 104]</p>
                    <p style={{ marginBottom: '20px' }}>Suerte es pegar un pelotazo y después perderlo todo en la siguiente jugada. [cite: 105]</p>

                    <p style={{ marginBottom: '20px' }}>
                        Llevo auditando mi cuenta principal desde el 1 de septiembre de 2025 y el resultado es un <strong>41% de ganancias</strong>. [cite: 106]
                    </p>

                    <p style={{ marginBottom: '40px' }}>
                        Yo gano y <strong>tú sigues probando estrategias cada vez que pierdes 3 operaciones seguidas.</strong> Elige qué prefieres hacer. [cite: 108]
                    </p>

                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '20px' }}>La mentira de la estrategia mágica</h3> [cite: 109]

                    <p style={{ marginBottom: '20px' }}>El 85% de los traders retail acaban desangrando sus cuentas poco a poco. [cite: 110]</p>
                    <p style={{ marginBottom: '40px' }}>Datos publicados por uno de los principales brokers, <strong>Capital.com en su propia página web.</strong> [cite: 111]</p>

                    {/* Botón de pago centrado en el bloque de lectura */}
                    <div style={{ textAlign: 'center', margin: '60px 0' }}>
                        <a href="#" style={{
                            backgroundColor: '#000',
                            color: '#fff',
                            padding: '18px 32px',
                            borderRadius: '4px',
                            fontWeight: '800',
                            textDecoration: 'none',
                            display: 'block',
                            fontSize: '1.2rem'
                        }}>
                            ENLACE DE PAGO [cite: 124]
                        </a>
                    </div>

                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '20px' }}>Preguntas frecuentes</h3> [cite: 153]

                    <p style={{ marginBottom: '5px' }}><strong>¿Tendré acceso a ti?</strong> [cite: 154]</p>
                    <p style={{ marginBottom: '20px' }}>Si eres socio, en los directos tendrás la opción de poner la cámara y el micro para preguntar lo que quieras. [cite: 155]</p>

                    <p style={{ marginBottom: '40px', fontStyle: 'italic', borderLeft: '4px solid #ffc400ff', paddingLeft: '20px' }}>
                        No confundas precio con valor. Si crees que 20 € es caro es que para ti es un gasto. Hasta que no entiendas que invertir en ti no es un gasto, <strong>NO TE APUNTES.</strong> [cite: 191, 192]
                    </p>

                    <div style={{ textAlign: 'center', margin: '60px 0' }}>
                        <a href="#" style={{
                            backgroundColor: '#000',
                            color: '#fff',
                            padding: '18px 32px',
                            borderRadius: '4px',
                            fontWeight: '800',
                            textDecoration: 'none',
                            display: 'block',
                            fontSize: '1.2rem'
                        }}>
                            ENLACE DE PAGO [cite: 137]
                        </a>
                    </div>

                </article>
            </div>
        </main>
    );
}