import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[600px] mx-auto px-6 py-24 relative font-sans text-center">
      {/* Top Right Logo Tag - Twitter Blue */}
      <div className="fixed top-0 right-0 bg-[#1DA1F2] px-4 py-2 font-bold text-lg border-b border-l border-black/5 z-50 text-white">
        lobosrf
      </div>

      {/* Header Section - Centered */}
      <div className="flex flex-col items-center gap-6 mb-16">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm shrink-0">
          {/* Placeholder for profile image */}
          <div className="w-full h-full bg-zinc-300 flex items-center justify-center text-zinc-500">
            <span className="text-4xl">L</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-black tracking-tight mb-2 text-black">
            LoboSRF
          </h1>
          <p className="text-xl font-medium text-black/80">
            Es imposible no triunfar en esta vida
          </p>
        </div>
      </div>

      {/* Links Section - Centered List */}
      <div className="flex flex-col gap-6 text-xl font-semibold text-black items-center">
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
