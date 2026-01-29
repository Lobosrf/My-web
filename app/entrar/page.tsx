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

            <section style={{ maxWidth: '600px', color: '#1a1a1a', fontSize: '1.15rem' }}>
                {/* Título y subtítulos con formato exacto del docx */}
                <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '10px', letterSpacing: '-0.03em' }}>Tres habilidades</h1>
                <p style={{ fontSize: '1.3rem', fontWeight: '700', color: '#666', marginBottom: '10px', lineHeight: '1.2' }}>Existen 3 pilares fundamentales que cualquier persona que quiera ser trader debe dominar.</p>
                <p style={{ fontSize: '1.3rem', fontWeight: '700', color: '#666', marginBottom: '40px', lineHeight: '1.2' }}>Y esto afectará a tu vida sentimental, a tus relaciones personales, familiares y laborales.</p>

                <p style={{ marginBottom: '20px' }}>Es innegable: si dominas estas tres, tu vida solo puede mejorar.</p>

                {/* Lista numerada con negritas exactas */}
                <div style={{ marginBottom: '40px', paddingLeft: '20px' }}>
                    <p style={{ marginBottom: '10px' }}>1. <strong>Una estrategia rentable.</strong> (Solo probabilidad).</p>
                    <p style={{ marginBottom: '10px' }}>2. <strong>Una gestión de riesgo de hierro.</strong> (Lo que te mantiene vivo cuando fallas).</p>
                    <p style={{ marginBottom: '10px' }}>3. <strong>Una psicología trabajada.</strong> (Lo que te impide pulsar el botón de comprar por miedo).</p>
                </div>

                <p style={{ marginBottom: '20px' }}>En el trading no existe la suerte, te guste o no. Suerte es pegar un pelotazo y después perderlo todo en la siguiente jugada.</p>

                <p style={{ marginBottom: '20px' }}>
                    Llevo auditando mi cuenta principal desde el 1 de septiembre de 2025 y el resultado es un <strong>41% de ganancias</strong>. Mientras tú pierdes meses intentando descifrar cada coma de Wyckoff o ICT, yo simplemente los pongo en práctica seleccionando los dos o tres conceptos que de verdad mueven el precio.
                </p>

                <p style={{ marginBottom: '40px' }}>
                    Yo gano y tú sigues probando estrategias cada vez que pierdes 3 operaciones seguidas. Elige qué prefieres hacer.
                </p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '20px' }}>La mentira de la estrategia mágica</h2>
            </section>
        </main>
    );
}