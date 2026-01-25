import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#fdfbf7] text-left">
      {/* LOGO AZUL SUPERIOR DERECHA */}
      <div className="absolute top-0 right-0 p-8">
        <div className="bg-[#0070f3] text-white px-4 py-1 font-black text-sm uppercase tracking-tighter">
          lobosrf
        </div>
      </div>

      <main className="max-w-[1024px] mx-auto px-8 py-24 md:py-36">
        <div className="max-w-[700px]">

          {/* CABECERA: FOTO IZQUIERDA, TEXTO DERECHA */}
          <header className="flex items-center gap-8 mb-12 text-left justify-start">
            <div className="w-[150px] h-[150px] rounded-full bg-gray-200 flex-shrink-0 overflow-hidden border border-black/5">
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl font-bold italic">L</div>
            </div>
            <div className="text-left">
              <h1 className="text-[38px] font-black mb-1 leading-none text-black">LoboSRF</h1>
              <p className="text-[20px] text-[#575760]">Es imposible no triunfar en esta vida</p>
            </div>
          </header>

          {/* CUERPO DE TEXTO */}
          <article className="space-y-8 text-left">
            <h1 className="text-[52px] font-black leading-[1.1] text-black tracking-tight">
              3 habilidades que todo hombre debe dominar
            </h1>

            <div className="text-[20px] leading-[1.6] text-black space-y-6">
              <p>Aprendo trading institucional minimalista:</p>

              <ol className="list-decimal list-inside space-y-3 font-bold">
                <li>Wyckoff</li>
                <li>Candel Range Theory</li>
                <li>ICT</li>
              </ol>

              <p>Me trae sin cuidado que te guste o te disguste, mientras no sepas hacer eso no conocerás el significado de la palabra libertad.</p>

              <p className="italic font-bold text-[#272727]">Generar, multiplicar, proteger.</p>

              <p>Cada día envío un email en el que cuento cómo hacerlo. Te apuntas ahí:</p>
            </div>

            {/* ENLACES ESTILO LISTA ALINEADOS A LA IZQUIERDA */}
            <nav className="flex flex-col gap-6 pt-10 border-t border-gray-200 items-start">
              {[
                { name: 'Substack', url: 'https://lobosrf.substack.com' },
                { name: 'Trading', url: '#' },
                { name: 'GitHub', url: 'https://github.com/Lobosrf' },
                { name: 'Twitter', url: '#' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="text-xl font-bold text-black border-b-2 border-transparent hover:border-black w-fit transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </article>
        </div>
      </main>
    </div>
  );
}