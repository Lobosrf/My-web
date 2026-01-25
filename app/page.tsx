import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[650px] mx-auto px-6 py-20">
      <h1 className="text-xl font-bold mb-6">LoboSRF</h1>
      
      <div className="mb-10 text-base leading-relaxed">
        <p className="mb-4">
          Hola, soy LoboSRF. Me dedico al desarrollo de software y al trading algorítmico.
          Busco la simplicidad y la eficiencia en todo lo que construyo.
        </p>
        <p>
          Aquí puedes encontrar algunos de mis proyectos y dónde leerme.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <a 
          href="https://substack.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4 decoration-1"
        >
          Substack
        </a>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4 decoration-1"
        >
          Trading
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4 decoration-1"
        >
          GitHub
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4 decoration-1"
        >
          Twitter
        </a>
      </div>
    </main>
  );
}
