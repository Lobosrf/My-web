import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[700px] mx-auto px-6 py-24 md:py-32 relative font-sans">
      {/* Top Right Logo Tag */}
      <div className="fixed top-0 right-0 bg-[#FFF000] px-4 py-2 font-bold text-lg md:text-xl border-b border-l border-black/5 z-50">
        lobosrf
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
        <div className="shrink-0">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm">
            {/* Placeholder for profile image - using next.svg for now if no custom image available, 
                 but ideally this should be a real profile pic. 
                 Using a simple div color fallback if image fails or isn't desired. */}
            <div className="w-full h-full bg-zinc-300 flex items-center justify-center text-zinc-500">
              <span className="text-4xl">L</span>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left pt-2">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-2 text-black">
            LoboSRF
          </h1>
          <p className="text-xl md:text-2xl font-medium text-black/80">
            Es imposible no triunfar en esta vida
          </p>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex flex-col gap-6 text-xl md:text-2xl font-semibold text-black">
        <a
          href="https://substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4 decoration-2 decoration-black/30 transition-all"
        >
          Substack
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4 decoration-2 decoration-black/30 transition-all"
        >
          Trading
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4 decoration-2 decoration-black/30 transition-all"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4 decoration-2 decoration-black/30 transition-all"
        >
          Twitter
        </a>
      </div>
    </main>
  );
}
