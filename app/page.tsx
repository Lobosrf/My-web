// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container">
      {/* 1. Foto de Perfil */}
      <Image
        src="/tu-foto.jpg" // Asegúrate de poner tu foto en la carpeta /public
        alt="Tu Nombre"
        width={120}
        height={120}
        className="profile-img"
        priority
      />

      {/* 2. Encabezado */}
      <section>
        <h1>Tu Nombre Aquí</h1>
        <h2>Es imposible no triunfar en esta vida</h2>
      </section>

      {/* 3. Cuerpo de texto (Copiando la estructura de la imagen) */}
      <section>
        <h3>3 habilidades que todo hombre debe dominar</h3>
        <p>Estas son las tres habilidades que cualquiera que quiera ser libre debe dominar:</p>

        <ol>
          <li>Ganar dinero</li>
          <li>Invertirlo</li>
          <li>Protegerlo</li>
        </ol>

        <p>
          Me trae sin cuidado que te guste o te disguste, mientras no sepas hacer
          eso no conocerás el significado de la palabra libertad.
        </p>

        <p><em>Generar, multiplicar, proteger.</em></p>

        <p>Cada día envío un email en el que cuento cómo hacerlo. Te apuntas ahí:</p>
      </section>

      {/* 4. Formulario de Suscripción */}
      <form className="form-container">
        <input
          type="email"
          placeholder="Tu mejor email..."
          required
          className="email-input"
        />
        <button type="submit">
          Apuntarme
        </button>
      </form>
    </main>
  );
}