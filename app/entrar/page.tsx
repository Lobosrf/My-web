import Image from 'next/image';

export default function EntrarPage() {
    return (
        <main className="container" style={{ position: 'relative', backgroundColor: '#fff', color: '#1a1a1a' }}>
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
                        style={{ objectFit: 'cover', borderRadius: '50%' }}
                    />
                </div>
                <div>
                    <h1 style={{ fontSize: '1.8rem', margin: 0, fontWeight: '800', letterSpacing: '-0.02em' }}>Lobo SRF</h1>
                    <p style={{ margin: 0, color: '#4a4a4a', fontSize: '1.1rem' }}>Aquí aprendo trading institucional</p>
                </div>
            </header>

            {/* Cuerpo con el ancho y espaciado de las capturas */}
            <section style={{ maxWidth: '700px', lineHeight: '1.5' }}>
                [cite_start]<h1 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '20px', letterSpacing: '-0.04em' }}>Tres habilidades [cite: 97]</h1>

                <p style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px', maxWidth: '600px' }}>
                    [cite_start]Existen 3 pilares fundamentales que cualquier persona que quiera ser trader debe dominar. [cite: 98]
                </p>
                <p style={{ fontSize: '20px', fontWeight: '800', marginBottom: '40px', maxWidth: '600px' }}>
                    [cite_start]Y esto afectará a tu vida sentimental, a tus relaciones personales, familiares y laborales. [cite: 99]
                </p>

                [cite_start]<p style={{ fontSize: '1.15rem', marginBottom: '30px' }}>Es innegable: si dominas estas tres, tu vida solo puede mejorar. [cite: 100]</p>

                <div style={{ paddingLeft: '20px', marginBottom: '40px' }}>
                    <p style={{ marginBottom: '10px' }}>1. [cite_start]<strong>Una estrategia rentable.</strong> (Solo probabilidad). [cite: 101]</p>
                    <p style={{ marginBottom: '10px' }}>2. [cite_start]<strong>Una gestión de riesgo de hierro.</strong> (Lo que te mantiene vivo cuando fallas). [cite: 102]</p>
                    <p style={{ marginBottom: '10px' }}>3. [cite_start]<strong>Una psicología trabajada.</strong> (Lo que te impide pulsar el botón de comprar por miedo). [cite: 103]</p>
                </div>

                <p style={{ fontSize: '1.15rem', marginBottom: '30px' }}>
                    En el trading no existe la suerte, te guste o no. [cite_start]Suerte es pegar un pelotazo y después perderlo todo en la siguiente jugada. [cite: 104, 105]
                </p>

                <p style={{ fontSize: '1.15rem', marginBottom: '25px' }}>
                    [cite_start]Llevo auditando mi cuenta principal desde el 1 de septiembre de 2025 y el resultado es un <strong>41% de ganancias</strong>. [cite: 106] [cite_start]Mientras tú pierdes meses intentando descifrar cada coma de Wyckoff o ICT, yo simplemente los pongo en práctica seleccionando los dos o tres conceptos que de verdad mueven el precio. [cite: 107]
                </p>

                <p style={{ fontSize: '1.15rem', marginBottom: '45px' }}>
                    [cite_start]Yo gano y <strong>tú sigues probando estrategias cada vez que pierdes 3 operaciones seguidas.</strong> Elige qué prefieres hacer. [cite: 108]
                </p>

                [cite_start]<h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '25px' }}>La mentira de la estrategia mágica [cite: 109]</h2>

                <p style={{ fontSize: '1.15rem', marginBottom: '25px' }}>
                    [cite_start]El 85% de los traders retail acaban desangrando sus cuentas poco a poco. [cite: 110] [cite_start]Datos publicados por uno de los principales brokers, <strong>Capital.com en su propia página web.</strong> [cite: 111]
                </p>

                {/* Espacio para los testimonios visuales */}
                <div style={{ margin: '40px 0', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <img src="/testimonio-1.png" alt="Testimonio" style={{ width: '100%', maxWidth: '650px', border: '1px solid #eee' }} />
                    <img src="/testimonio-2.png" alt="Testimonio" style={{ width: '100%', maxWidth: '650px', border: '1px solid #eee' }} />
                </div>

                [cite_start]<h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '25px' }}>¿Que recibes? [cite: 120]</h2>
                <p style={{ fontSize: '1.15rem', marginBottom: '20px' }}>
                    [cite_start]4 directos mensuales (quedan grabados, no te preocupes) los jueves a las 21:00 hora España... [cite: 121]
                </p>

                <div style={{ margin: '60px 0' }}>
                    <a href="#" style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '20px',
                        display: 'block',
                        textAlign: 'center',
                        fontWeight: '900',
                        fontSize: '1.3rem',
                        textDecoration: 'none'
                    }}>
                        [cite_start]ENLACE DE PAGO [cite: 124]
                    </a>
                </div>
            </section>
        </main>
    );
}