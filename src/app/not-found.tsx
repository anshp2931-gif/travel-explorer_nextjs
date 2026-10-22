import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full py-16 pb-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-xs text-slate-400 font-mono mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-teal-400 transition-colors">Wayfinder</Link>
          <span className="text-slate-600">/</span>
          <span className="text-teal-400 font-semibold">Error 404</span>
        </div>

        <div className="glass-panel rounded-3xl p-7 sm:p-10 border border-white/10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-white/5 pb-5 text-xs font-mono">
            <span className="badge-emerald inline-flex items-center gap-2 rounded-full px-3.5 py-1 font-sans font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              404 · Unresolved Destination Path
            </span>
            <span className="text-slate-500">REF: ERR_PATH_UNRESOLVED</span>
          </div>

          <div className="mt-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Destination or region not found
            </h1>
            <p className="mt-3.5 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              The requested geographic route identifier could not be resolved within the Wayfinder spatial database. The path may have changed or the slug syntax is invalid.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide"
            >
              <span>↗</span>
              <span>Return to Destinations</span>
            </Link>
            <Link
              href="/regions"
              className="btn-secondary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide"
            >
              <span>▦</span>
              <span>Browse All Regions</span>
            </Link>
          </div>

          <div className="mt-12 border-t border-white/5 pt-7">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 font-mono">
              <span>Suggested Directory Shortcuts</span>
              <span className="text-teal-400">SPATIAL INDEX VERIFIED</span>
            </div>

            <div className="divide-y divide-white/5 rounded-2xl border border-white/5 bg-slate-950/50 text-xs overflow-hidden">
              <Link
                href="/destinations/1"
                className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-teal-400">⌖</span>
                  <span className="font-bold text-white group-hover:text-teal-300 transition-colors">Kyoto, Japan</span>
                </div>
                <span className="font-mono text-slate-400 group-hover:text-teal-300 transition-colors">/destinations/1 →</span>
              </Link>
              <Link
                href="/destinations/2"
                className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-teal-400">⌖</span>
                  <span className="font-bold text-white group-hover:text-teal-300 transition-colors">Bergen, Norway</span>
                </div>
                <span className="font-mono text-slate-400 group-hover:text-teal-300 transition-colors">/destinations/2 →</span>
              </Link>
              <Link
                href="/destinations/4"
                className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-teal-400">⌖</span>
                  <span className="font-bold text-white group-hover:text-teal-300 transition-colors">Florence, Italy</span>
                </div>
                <span className="font-mono text-slate-400 group-hover:text-teal-300 transition-colors">/destinations/4 →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
