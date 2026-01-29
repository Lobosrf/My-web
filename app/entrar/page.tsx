import React from 'react';

export default function EntrarPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navegación */}
      <nav className="p-6 max-w-6xl mx-auto">
        <div className="text-2xl font-black tracking-tighter italic">ANTIGRAVITY</div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Título Principal */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            TRES HABILIDADES.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Existen 3 pilares fundamentales que cualquier persona que quiera ser trader debe dominar.
          </p>
        </section>

        {/* Los 3 Pilares */}
        <section className="space-y-12 mb-24">
          <div className="text-lg md:text-xl text-zinc-300 space-y-8">
            <p>Y esto afectará a tu vida sentimental, a tus relaciones personales, familiares y laborales. Es innegable: si dominas estas tres, tu vida solo puede mejorar.</p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-12">
              <div className="p-8 border border-zinc-800 bg-zinc-900/50 rounded-2xl">
                <span className="text-white font-black block mb-4 text-3xl">01.</span>
                <p className="font-medium">Una estrategia rentable. (Solo probabilidad).</p>
              </div>
              <div className="p-8 border border-zinc-800 bg-zinc-900/50 rounded-2xl">
                <span className="text-white font-black block mb-4 text-3xl">02.</span>
                <p className="font-medium">Una gestión de riesgo de hierro.</p>
              </div>
              <div className="p-8 border border-zinc-800 bg-zinc-900/50 rounded-2xl">
                <span className="text-white font-black block mb-4 text-3xl">03.</span>
                <p className="font-medium">Una psicología trabajada.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Auditoría */}
        <section className="mb-24 space-y-8 text-lg md:text-xl text-zinc-300 leading-relaxed">
          <p>En el trading no existe la suerte, te guste o no. Suerte es pegar un pelotazo y después perderlo todo en la siguiente jugada.</p>
          <p>Llevo auditando mi cuenta principal desde el 1 de septiembre de 2025 y el resultado es un 41% de ganancias. Mientras tú pierdes meses intentando descifrar cada coma de Wyckoff o ICT, yo simplemente los pongo en práctica seleccionando los dos o tres conceptos que de verdad mueven el precio.</p>
          <p className="text-white font-black italic text-2xl py-6 border-y border-zinc-900">
            Yo gano y tú sigues probando estrategias cada vez que pierdes 3 operaciones seguidas. Elige qué prefieres hacer.
          </p>
        </section>

        {/* La Mentira */}
        <section className="mb-24 bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-3xl">
          <h2 className="text-3xl font-black mb-8 tracking-tighter uppercase">La mentira de la estrategia mágica</h2>
          <div className="space-y-6 text-zinc-400 text-lg">
            <p>El 85% de los traders retail acaban desangrando sus cuentas poco a poco. Datos publicados por uno de los principales brokers, Capital.com en su propia página web.</p>
            <p>El motivo es que buscan un gurú con un Lamborghini alquilado que les venda el indicador o la estrategia definitiva.</p>
            <p className="text-white font-bold text-xl leading-snug">Yo no vendo una estrategia mágica. Te ayudo a crear la tuya de cero. Vendo acompañamiento y orden.</p>
          </div>
        </section>

        {/* Qué recibes */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-12 tracking-tighter italic">¿QUÉ RECIBES?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-6 border border-zinc-900 rounded-xl">
              <span className="text-white font-black">→</span>
              <p className="text-zinc-300">4 directos mensuales los jueves a las 21:00 hora España, donde analizo Bitcoin y operaciones reales.</p>
            </div>
            <div className="flex items-start gap-4 p-6 border border-zinc-900 rounded-xl">
              <span className="text-white font-black">→</span>
              <p className="text-zinc-300">Información filtrada de RRSS donde el ruido nubla tu criterio.</p>
            </div>
            <div className="flex items-start gap-4 p-6 border border-zinc-900 rounded-xl">
              <span className="text-white font-black">→</span>
              <p className="text-zinc-300">Sesiones de preguntas y respuestas en directo aprovechando las dudas y errores que cometemos todos.</p>
            </div>
          </div>
        </section>

        {/* Caja de Venta */}
        <section className="text-center mb-24 bg-white text-black p-12 rounded-[2.5rem] shadow-2xl">
          <h3 className="text-sm uppercase tracking-[0.3em] font-black mb-4 opacity-50">Suscripción Mensual</h3>
          <div className="text-8xl font-black mb-4 tracking-tighter leading-none italic">20€<span className="text-2xl not-italic">/mes</span></div>
          <p className="text-zinc-600 mb-10 font-medium italic">Precio garantizado para siempre mientras no te des de baja.</p>
          <button className="w-full bg-black text-white py-6 rounded-full font-black text-2xl hover:bg-zinc-800 transition-all uppercase tracking-tighter">
            Suscribirme ahora
          </button>
          <p className="mt-8 text-sm font-black uppercase tracking-widest text-red-600">
            Sube de precio el 8 de febrero a las 20:59.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-12 tracking-tight">PREGUNTAS FRECUENTES</h2>
          <div className="grid md:grid-cols-2 gap-12 text-zinc-400">
            <div>
              <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-widest">¿Tendré acceso a ti?</h4>
              <p>Si eres socio, en los directos tendrás la opción de poner la cámara y el micro para preguntar lo que quieras.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-widest">¿Puedo cancelar?</h4>
              <p>Cuando quieras. Una vez pagas, tienes el mes incluido. Sin permanencias.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-widest">¿Devoluciones?</h4>
              <p className="italic underline">Si me haces esa pregunta, no te quiero como alumno.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-widest">¿Conocimientos?</h4>
              <p>Saber usar Trading View y un exchange es suficiente. Habrá una parte grabada con lo básico.</p>
            </div>
          </div>
        </section>

        {/* Advertencia Final */}
        <section className="mb-24 p-10 border-2 border-zinc-800 rounded-3xl">
          <h2 className="text-white font-black mb-6 italic uppercase tracking-widest text-xl">No entres si...</h2>
          <ul className="space-y-4 text-zinc-500 font-medium text-lg">
            <li>• Quieres hacerte rico trabajando 2 horas al día.</li>
            <li>• Buscas un manual paso a paso y que un adulto te supervise.</li>
            <li className="text-zinc-300">• Eres vago. (Si no tienes disciplina para cambiar tu situación, quédate fuera).</li>
          </ul>
        </section>

        <footer className="text-center py-10 text-zinc-800 text-xs font-black tracking-[0.4em] uppercase">
          ANTIGRAVITY / TODO O NADA.
        </footer>
      </main>
    </div>
  );
}
