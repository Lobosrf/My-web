import Image from 'next/image';

export default function Home() {
  return (
    <main className="container">
      {/* 1. Cabecera con Foto y Nombre alineados horizontalmente */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        marginBottom: '60px',
        marginTop: '20px'
      }}>
        <div style={{ flexShrink: 0 }}>
          <Image
            src="/perfil.jpg" // Asegúrate de que el nombre coincida con tu archivo en /public
            alt="Tu Foto de Perfil"
            width={120}
            height={120}
            className="profile-img"
            priority
            style={{ objectFit: 'cover', borderRadius: '50%' }}
          />
        </div>
        <div>
          <h1 style={{
            fontSize: '1.8rem',
            margin: 0,
            fontWeight: '800',
            letterSpacing: '-0.02em'
          }}>
            Tu Nombre Aquí
          </h1>
          <p style={{
            margin: 0,
            color: '#4a4a4a',
            fontSize: '1.1rem'
          }}>
            Es imposible no triunfar en esta vida
          </p>
        </div>
      </header>

      {/* 2. Cuerpo de Texto con el estilo de la referencia */}
      <section style={{ maxWidth: '600px' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '900',
          lineHeight: '1.1',
          marginBottom: '30px',
          letterSpacing: '-0.03em'
        }}>
          3 habilidades que todo hombre debe dominar
        </h2>

        <p>Estas son las tres habilidades que cualquiera que quiera ser libre debe dominar:</p>

        <ol style={{
          paddingLeft: '20px',
          margin: '25px 0',
          fontSize: '1.15rem'
        }}>
          <li style={{ marginBottom: '10px' }}>Ganar dinero</li>
          <li style={{ marginBottom: '10px' }}>Invertirlo</li>
          <li style={{ marginBottom: '10px' }}>Protegerlo</li>
        </ol>

        <p style={{ marginBottom: '20px' }}>
          Me trae sin cuidado que te guste o te disguste, mientras no sepas hacer
          eso no conocerás el significado de la palabra libertad.
        </p>

        <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>
          Generar, multiplicar, proteger.
        </p>

        <p style={{ marginTop: '40px', fontWeight: '500' }}>
          Cada día envío un email en el que cuento cómo hacerlo. Te apuntas ahí:
        </p>
      </section>

      {/* 3. Formulario de Suscripción */}
      <form className="form-container" style={{ marginTop: '20px' }}>
        <input
          type="email"
          placeholder="Tu mejor email..."
          required
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '1rem',
            marginBottom: '10px'
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '14px',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Apuntarme
        </button>
      </form>

      {/* 4. El logo amarillo superior (Opcional) */}
      <div style={{
        backgroundColor: '#FFEB00',
        padding: '8px 16px',
        fontWeight: '900',
        position: 'absolute',
        top: '0',
        right: '10%',
        color: '#000',
        fontSize: '0.9rem',
        textTransform: 'lowercase'
      }}>
        tu-marca
      </div>
    </main>
  );
}