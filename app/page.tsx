import Image from 'next/image';

export default function EntrarPage() {
  return (
    <main className="container" style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#fff', color: '#000' }}>
      {/* 1. El logo amarillo superior (igual que en Home) */}
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
        Lobo SRF
      </div>

      {/* 2. Cabecera idéntica a la Home */}
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
            alt="Tu Foto de Perfil"
            width={100}
            height={100}
            priority
            style={{
              objectFit: 'cover',
              borderRadius: '50%',
              backgroundColor: '#eee'
            }}
          />
        </div>
        <div>
          <h1 style={{
            fontSize: '1.8rem',
            margin: 0,
            fontWeight: '800',
            letterSpacing: '-0.02em',
            color: '#1a1a1a'
          }}>
            Lobo SRF
          </h1>
          <p style={{
            margin: 0,
            color: '#4a4a4a',
            fontSize: '1.1rem'
          }}>
            Aquí aprendo trading institucional
          </p>
        </div>
      </header>

      {/* 3. Cuerpo de Texto con el formato original del documento */}
      <section style={{ maxWidth: '600px', paddingBottom: '100px' }}>
        <div style={{
          whiteSpace: 'pre-wrap',
          lineHeight: '1.6',
          fontSize: '1.1rem',
          color: '#1a1a1a'
        }}>
          Tres habilidades
          Existen 3 pilares fundamentales que cualquier persona que quiera ser trader debe dominar.
          Y esto afectará a tu vida sentimental, a tus relaciones personales, familiares y laborales.

          Es innegable: si dominas estas tres, tu vida solo puede mejorar.
          Una estrategia rentable. (Solo probabilidad).
          Una gestión de riesgo de hierro. (Lo que te mantiene vivo cuando fallas).
          Una psicología trabajada. (Lo que te impide pulsar el botón de comprar por miedo).

          En el trading no existe la suerte, te guste o no. Suerte es pegar un pelotazo y después perderlo todo en la siguiente jugada.

          Llevo auditando mi cuenta principal desde el 1 de septiembre de 2025 y el resultado es un 41% de ganancias. Mientras tú pierdes meses intentando descifrar cada coma de Wyckoff o ICT, yo simplemente los pongo en práctica seleccionando los dos o tres conceptos que de verdad mueven el precio.
          Yo gano y tú sigues probando estrategias cada vez que pierdes 3 operaciones seguidas. Elige qué prefieres hacer.
          La mentira de la estrategia mágica
          El 85% de los traders retail acaban desangrando sus cuentas poco a poco. Datos publicados por uno de los principales brokers, Capital.com en su propia página web.
          El motivo es que buscan un gurú con un Lamborghini alquilado que les venda el indicador o la estrategia definitiva.
          Tengo alumnos que sentían miedo al abrir una operación porque habian perdido la confianza en sí mismos. Vienen intoxicados de información, con la cabeza llena de ruido con indicadores, todo el grafico lleno de lineas y la cuenta reventada.
          Yo no vendo una estrategia mágica. Te ayudo a crear la tuya de cero. Vendo acompañamiento y orden.
          Conozco a poca gente que domine los tres pilares. La mayoría no tiene una estrategia, tiene una esperanza y van probando una después de otra cuando los resultados de tres operaciones no salen bien. Otros no gestionan el riesgo, simplemente apuestan. Ganan mucho en un par de operaciones y en las siguientes han fundido todos los profits. Y de la psicología… aquí es donde puedo ayudarte con herramientas para que tu mismo corrijas tus errores. Necesitas añadir la palabra "disciplina" a tu diccionario.

          ¿Que recibes?

          4 directos mensuales (quedan grabados, no te preocupes) los jueves a las 21:00 hora España, donde analizo generalmente Bitcoin, operaciones con estrategias que funcionan, lo que aprendo en mi día a día gracias a mis formaciones y experiencias.

          Información filtrada de RRSS donde el ruido nubla tu criterio y la ilusión mantiene el deseo de que haya un empujón a máximos históricos constantemente (esto no es el oro)

          Sesiones de preguntas y respuestas en directo aprovechando las dudas y errores que cometemos todos haciendo trading.


          <a href="#" style={{
            display: 'block',
            margin: '40px 0',
            padding: '16px',
            backgroundColor: '#000',
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
            textDecoration: 'none',
            borderRadius: '4px'
          }}>
            ENLACE DE PAGO
          </a>

          ¿Como me ayudará la academia?

          Desde el 2021 llevo enseñando a gente y muchos alumnos han conseguido operar con calma siguiendo su estrategia, sin importar si el precio va a subir o a bajar, y cuando empezaron conmigo alguno no sabía ni lo que era un stop loss.

          Aquí aprenderás a leer la dirección más probable del precio, donde esperar paciente y cómo colocar tu entrada, saber calcular el dinero que tienes que perder en cada operación y sobre todo ganar confianza para dominar tus impulsos de cerrar operaciones ganadoras antes de tiempo o mover el stop loss

          Mira, yo no voy a estar detrás de ti para que estudies. Te ayudaré dándote acceso a mis sesiones en directo donde verás cómo analizo Bitcoin y otros activos con las mismas herramientas con las que yo saco rentabilidad.

          Te ayudaré filtrando todo el ruido de redes sociales para que dejes de esperar "to the moon" constantes.

          Básicamente, te ayudaré a que dejes de ser el que paga las ganancias de los que sí sabemos lo que hacemos. El resto depende de tu disciplina, no de la mía.

          Fíate de tu instinto. Si crees que el 41% de rentabilidad que llevo auditando desde septiembre de 2025 es producto de la suerte, de una racha divina o de que el mercado está a mi favor porque “todo sube”, NO ENTRES.

          Si piensas que los alumnos que me siguen lo hacen por aburrimiento y no por que lo que enseño funciona, esta academia no te va a servir, NO ENTRES

          Puedes seguir probando EMAS, el RSI o el MACD. NO ENTRES.

          Si no puedes asistir a las clases en directo, los jueves a las 21:00, aunque luego quede grabada (no la vas a ver grabada), NO ENTRES.

          <a href="#" style={{
            display: 'block',
            margin: '40px 0',
            padding: '16px',
            backgroundColor: '#000',
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
            textDecoration: 'none',
            borderRadius: '4px'
          }}>
            ENLACE DE PAGO
          </a>

          Hacer dinero con el trading es una habilidad.
          Y como toda habilidad, se puede aprender.
          Cuando ves desde fuera como la gente gana dinero y consigue grandes resultados haciendo las cosas simples, no lo achaques a la suerte, a circunstancias únicas e irreplicables.

          Todo eso cambia cuando pasas con ellos momentos de calidad, comparten frustraciones por las que tú estás pasando con tu operativa o te ofrecen acciones que a ellos les han servido para mejorar cuando estaban en tu misma situación.

          Formar parte de un grupo donde todos reman en la dirección no se puede describir desde fuera.

          Y sólo tienes que juntarte con esa gente para aprenderlo

          <a href="#" style={{
            display: 'block',
            margin: '40px 0',
            padding: '16px',
            backgroundColor: '#000',
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
            textDecoration: 'none',
            borderRadius: '4px'
          }}>
            ENLACE DE PAGO
          </a>

          ¿Es otro curso online que no terminaré nunca?
          No, son 4 directos al mes que no te querrás perder porque aprenderás más que en cursos de miles de euros. El contenido importante que no puedes perderte. Asistir es la manera de poder trabajar en TU problema en particular.

          Tienes que trabajar sobre tu problema concreto y usar las herramientas que te indico para hacer los deberes para la siguiente clase.

          No tengo 100 horas de videos para que repases en tus ratos libres. Todos sabemos que ESO NO FUNCIONA.

          Implementar las herramientas creyendo que te harás rico de la noche a la  mañana, ESO NO FUNCIONA.

          No esperes comprarte un lambo en el próximo año. Esto no funciona así. Si es tu pensamiento, NO ENTRES

          Ver la clase grabada al día siguiente: el valor real está en el directo porque ahí corregimos TU error.


          Preguntas frecuentes

          ¿Tendré acceso a ti?

          Si eres socio, en los directos tendrás la opción de poner la cámara y el micro para preguntar lo que quieras. Si eres un poco vergonzoso, pues pones sólo el micro. No te voy a tratar distinto sólo por no verte.

          ¿Cuando son los directos?
          Todos los jueves sin excepción a las 21:00 horas España. Salvo el día de nochebuena, el de nochevieja y el 26 de febrero que me voy a esquiar una semana a los pirineos


          ¿Puedo cancelar cuando quiera?
          Cuando quieras. Una vez pagas, tienes el mes incluido.

          ¿Tengo 15 días para ver si me gusta y si no me devuelves el dinero?
          Si me haces esa pregunta, no te quiero como alumno.

          Algunas veces pareces un poco borde
          Tengo 46 años, no tengo que engañar a nadie pero si empujar a la gente a que vea que “no todo sube siempre” y puedo parecer brusco. Necesitas que te digan las cosas como son y no necesitas otro que te diga lo que tu quieres escuchar

          ¿Como funciona la comunidad?
          Una vez pagas, recibes acceso automático al software Discord. Dentro tienes varios canales de texto y de voz donde puedes escribir lo que quieras, con respeto.

          Sólo te pido una cosa.

          Puedes pasar operaciones, pero si lo haces, y son en DEMO, es obligatorio ponerlo. Este detalle lo entenderás cuando asistas a una clase en directo.

          ¿Hay que saber de trading? ¿Hay que saber conceptos complejos de ICT, de Wyckoff o similar? ¿Hay que saber abrir una operación en Bingx o en Binance?
          Entras para aprender trading, si empiezas de cero te puede resultar abrumador. Pero más abrumador es seguir fichando de 8 a 17 el resto de tu vida. Por supuesto en las clases en directo te voy a resolver todas tus dudas sobre trading y quizas algunas sobre la vida, mas que nada por la experiencia que me han dado los años.

          Además si pones algo de tu parte para usar chatgpt y le preguntas que es un stop loss, pues eso que llevas avanzado.

          Se requiere para entrar que seas alguien competente. Y NO ES PARA TI si cumples alguna de estas cualidades:

          Has visto en RRSS que el trading da mucho dinero y tu quieres hacer lo mismo trabajando 2 horas al día
          Llevas siglos perdiendo sin saber el motivo y no quieres dedicar varias horas a la semana durante algún tiempo para evitar que tu cuenta siga desangrándose
          Estás perdido, no sabes a qué dedicarte en la vida y el trading te va a dar mucho dinero.
          Necesitas un manual paso a paso y que un adulto te supervise en tu vida diaria.
          Eres vago. (Si tienes disciplina y motivación para cambiar tu situación, entonces sí puedes entrar. Si no, quédate fuera).

          ¿Necesito conocimientos técnicos?
          Si. No tienes que ser informático pero con saber usar Trading View, y un exchange es suficiente.
          Habrá una parte grabada con lo básico de ambas plataformas. Pero si sigues teniendo dudas, NO TE APUNTES.

          ¿Cuanto vale?
          20€/mes sin permanencia y parasiempre. Nunca subirá el precio hasta que te des de baja.

          El precio se mantiene hasta el día 8 de febrero de 2026 a las 20:59 hora España

          Si te piensas apuntar, hazlo antes del 8, hazme caso. Después el precio sube.

          No confundas precio con valor. Si crees que 20 € es caro es que para tí es un gasto.

          Hasta que no entiendas que invertir en tí no es un gasto, NO TE APUNTES.
        </div>
      </section>
    </main>
  );
}