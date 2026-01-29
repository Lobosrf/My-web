import Image from 'next/image';

export default function EntrarPage() {
    return (
        <main style={{ padding: '60px 40px', backgroundColor: '#fff', minHeight: '100vh' }}>
            <div style={{ maxWidth: '850px', margin: '0' }}>

                {/* Título Principal - Tamaño y peso exacto */}
                <h1 style={{
                    fontSize: '48px',
                    fontWeight: '900',
                    marginBottom: '20px',
                    fontFamily: 'sans-serif'
                }}>
                    Tres habilidades
                </h1>

                {/* Subtítulos en negrita con el interlineado de la captura */}
                <p style={{ fontSize: '22px', fontWeight: '800', marginBottom: '10px', lineHeight: '1.3' }}>
                    Existen 3 pilares fundamentales que cualquier persona que quiera ser trader debe dominar.
                </p>
                <p style={{ fontSize: '22px', fontWeight: '800', marginBottom: '40px', lineHeight: '1.3' }}>
                    Y esto afectará a tu vida sentimental, a tus relaciones personales, familiares y laborales.
                </p>

                {/* Texto normal */}
                <p style={{ fontSize: '18px', marginBottom: '25px' }}>
                    Es innegable: si dominas estas tres, tu vida solo puede mejorar.
                </p>

                {/* Lista con numeración y negritas exactas */}
                <div style={{ fontSize: '18px', marginBottom: '40px', paddingLeft: '40px' }}>
                    <p style={{ marginBottom: '8px' }}>1. <strong>Una estrategia rentable.</strong> (Solo probabilidad).</p>
                    <p style={{ marginBottom: '8px' }}>2. <strong>Una gestión de riesgo de hierro.</strong> (Lo que te mantiene vivo cuando fallas).</p>
                    <p style={{ marginBottom: '8px' }}>3. <strong>Una psicología trabajada.</strong> (Lo que te impide pulsar el botón de comprar por miedo).</p>
                </div>

                <p style={{ fontSize: '18px', marginBottom: '25px' }}>
                    En el trading no existe la suerte, te guste o no. Suerte es pegar un pelotazo y después perderlo todo en la siguiente jugada.
                </p>

                <p style={{ fontSize: '18px', marginBottom: '25px' }}>
                    Llevo auditando mi cuenta principal desde el 1 de septiembre de 2025 y el resultado es un <strong>41% de ganancias</strong>. [cite_start]Mientras tú pierdes meses intentando descifrar cada coma de Wyckoff o ICT, yo simplemente los pongo en práctica seleccionando los dos o tres conceptos que de verdad mueven el precio. [cite: 106]
                </p>

                <p style={{ fontSize: '18px', marginBottom: '25px' }}>
                    [cite_start]Yo gano y <strong>tú sigues probando estrategias cada vez que pierdes 3 operaciones seguidas.</strong> Elige qué prefieres hacer. [cite: 108]
                </p>

                {/* Subencabezado en negrita */}
                <p style={{ fontSize: '20px', fontWeight: '800', marginTop: '40px', marginBottom: '20px' }}>
                    La mentira de la estrategia mágica
                </p>

                <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                    [cite_start]El 85% de los traders retail acaban desangrando sus cuentas poco a poco. [cite: 110] [cite_start]Datos publicados por uno de los principales brokers, <strong>Capital.com en su propia página web.</strong> [cite: 111]
                </p>

                <p style={{ fontSize: '18px', marginBottom: '25px' }}>
                    [cite_start]El motivo es que buscan un gurú con un Lamborghini alquilado que les venda el indicador o la estrategia definitiva. [cite: 112]
                </p>

                <p style={{ fontSize: '18px', marginBottom: '25px' }}>
                    [cite_start]Tengo alumnos que sentían miedo al abrir una operación porque habian perdido la confianza en sí mismos. [cite: 113] [cite_start]Vienen intoxicados de información, con la cabeza llena de ruido con indicadores, todo el grafico lleno de lineas y la cuenta reventada. [cite: 114]
                </p>

                <p style={{ fontSize: '18px', marginBottom: '40px' }}>
                    Yo no vendo una estrategia mágica. Te ayudo a crear la tuya de cero. [cite_start]Vendo <strong>acompañamiento y orden.</strong> [cite: 115]
                </p>

                {/* Capturas de testimonios con el ancho original de la imagen */}
                <div style={{ marginBottom: '40px' }}>
                    <img src="/testimonio1.png" style={{ width: '100%', maxWidth: '750px', marginBottom: '20px', display: 'block' }} alt="Testimonio" />
                    <img src="/testimonio2.png" style={{ width: '100%', maxWidth: '750px', marginBottom: '20px', display: 'block' }} alt="Testimonio" />
                    <img src="/testimonio3.png" style={{ width: '100%', maxWidth: '750px', display: 'block' }} alt="Testimonio" />
                </div>

                <p style={{ fontSize: '18px', marginBottom: '25px' }}>
                    Fíate de tu instinto. [cite_start]Si crees que el 41% de rentabilidad que llevo auditando desde septiembre de 2025 es producto de la suerte, de una racha divina o de que el mercado está a mi favor porque “todo sube”, <strong>NO ENTRES.</strong> [cite: 133]
                </p>

                {/* Botón de Pago */}
                <div style={{ margin: '60px 0' }}>
                    <a href="#" style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '20px 40px',
                        fontSize: '24px',
                        fontWeight: '900',
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}>
                        ENLACE DE PAGO
                    </a>
                </div>

            </div>
        </main>
    );
}