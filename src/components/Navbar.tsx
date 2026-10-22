import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#07090e]/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white">
            <span className="relative flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 shadow-md shadow-teal-500/30 group-hover:shadow-teal-400/50 transition-all">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            </span>
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:to-teal-300 transition-all">
              Wayfinder
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
            <Link
              href="/"
              className="relative py-1 text-teal-400 font-semibold transition-colors hover:text-teal-300"
            >
              <span>Destinations</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full" />
            </Link>
            <Link
              href="/regions"
              className="py-1 text-slate-400 hover:text-slate-100 transition-colors"
            >
              Regions
            </Link>
            <Link
              href="/overview"
              className="py-1 text-slate-400 hover:text-slate-100 transition-colors"
            >
              Overview
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs font-mono text-slate-400 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span>GEO.INDEX v2.4</span>
          </div>
          <Link
            href="/overview"
            className="btn-primary rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide"
          >
            Plan Trip
          </Link>
        </div>
      </div>
    </header>
  );
}
