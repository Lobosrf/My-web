import React from 'react';

export default function EntrarPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navegación Estilo Home */}
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl font-black tracking-tighter uppercase italic">ANTIGRAVITY</div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="mb-32">
          <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
            Tres <br />habilidades.
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-500 leading-tight max-w-2xl font-medium">
            Existen 3 pilares fundamentales que cualquier persona que quiera ser trader debe dominar.
          </p>
        </section>

        {/* Cuerpo de texto con formato */}
        <div className="space-y-16 text-xl md:text-2xl leading-snug text-zinc-300">
          <p>
            Y esto afectará a tu vida sentimental, a tus relaciones personales, familiares y laborales. 
            Es innegable: <span className="text-white">si dominas estas tres, tu vida solo puede mejorar.</span>
          </p>

          <div className="grid gap-4">
            <div className="border-t border-zinc-800 pt-8">
              <span className="text-zinc-600 font-black block mb-2 text-sm uppercase tracking-widest">Pilar 01</span>
              <p className="text-white font-bold">Una estrategia rentable. (Solo probabilidad).</p>
            </div>
            <div className="border-t border-zinc-800 pt-8">
              <span className="text-zinc-600 font-black block mb-2 text-sm uppercase tracking-widest">Pilar 02</span>
              <p className="text-white font-bold">Una gestión de riesgo de hierro.</p>
            </div>
            <div className="border-t border-zinc-800 pt-8">
              <span className="text-zinc-600 font-black block mb-2 text-sm uppercase tracking-widest">Pilar 03</span>
              <p className="text-white font-bold">Una psicología trabajada.</p>
            </div>
          </div>

          <p className="pt-10">
            En el trading no existe la suerte, te guste o no. Suerte es pegar un pelotazo y después perderlo todo en la siguiente jugada.
          </p>

          <p>
            Llevo auditando mi cuenta principal desde el 1 de septiembre de 2025 y el resultado es un <span className="text-white font-bold">41% de ganancias</span>. 
            Mientras tú pierdes meses intentando descifrar cada coma de Wyckoff o ICT, yo simplemente los pongo en práctica seleccionando los dos o tres conceptos que de verdad mueven el precio.
          </p>

          <p className="text-white font-black italic text-3xl md:text-4xl leading-tight border-l-4 border-white pl-8 my-20">
            Yo gano y tú sigues probando estrategias cada vez que pierdes 3 operaciones seguidas. Elige qué prefieres hacer.
          </p>
        </div>

        {/* La Mentira - Caja Destacada */}
        <section className="my-32 bg-zinc-900/50 border border-zinc-800 p-10 md:p-16 rounded-3xl">
          <h2 className="text-4xl font-black mb-8 tracking-tighter uppercase italic">La mentira de la estrategia mágica</h2>
          <div className="space-y-6 text-zinc-400">
            <p>El 85% de los traders retail acaban desangrando sus cuentas poco a poco. Datos publicados por uno de los principales brokers, Capital.com.</p>
            <p className="text-white font-bold">Yo no vendo una estrategia mágica. Te ayudo a crear la tuya de cero. Vendo acompañamiento y orden.</p>
          </div>
        </section>

        {/* CTA Box - Estilo Alto Contraste */}
        <section className="text-center bg-white text-black p-12 md:p-20 rounded-[3rem] my-32">
          <h3 className="text-xs uppercase tracking-[0.4em] font-black mb-6 opacity-40">Acceso Membresía</h3>
          <div className="text-8xl md:text-[10rem] font-black mb-6 tracking-tighter leading-none italic">20€<span className="text-2xl not-italic tracking-normal">/mes</span></div>
          <p className="text-lg font-bold mb-12 uppercase">Precio garantizado para siempre.</p>
          <button className="w-full bg-black text-white py-8 rounded-full font-black text-2xl hover:scale-[1.02] transition-transform uppercase tracking-tighter">
            Suscribirme ahora
          </button>
          <p className="mt-8 text-xs font-black uppercase tracking-widest text-red-600 animate-pulse">
            Sube de precio el 8 de febrero a las 20:59.
          </p>
        </section>

        {/* Footer final */}
        <footer className="py-20 border-t border-zinc-900 text-center">
            <p className="text-zinc-800 font-black tracking-[0.5em] text-xs uppercase">Antigravity — Todo o nada</p>
        </footer>
      </main>
    </div>
  );
}
