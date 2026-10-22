import Link from "next/link";
import { continentalDivisions } from "@/data/regionData";

export default function RegionsPage() {
  return (
    <div className="w-full py-10 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Path */}
        <div className="text-xs text-slate-400 font-mono flex items-center gap-2 mb-4">
          <Link href="/" className="hover:text-teal-400 transition-colors">catalog</Link>
          <span className="text-slate-600">/</span>
          <span className="text-teal-300 font-semibold">Regions</span>
        </div>

        {/* Hero Title & Telemetry Stats */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-white/5">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Geographic <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Regions</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Explore global destinations cataloged by continent, subcontinent, and terrain systems. Select a continental division to drill down into nested jurisdictions.
            </p>
          </div>

          <div className="flex items-center gap-5 glass-panel rounded-2xl p-4 border border-white/10">
            <div className="pr-5 border-r border-white/10">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">SETTLEMENTS</div>
              <div className="mt-0.5 text-xl font-extrabold text-teal-400 font-mono">70 Indexed</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">JURISDICTIONS</div>
              <div className="mt-0.5 text-xl font-extrabold text-emerald-400 font-mono">4 Divisions</div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-white">Continental Divisions</h2>
            <span className="badge-teal rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 px-3 py-0.5 text-xs font-semibold">
              4 systems active
            </span>
          </div>
        </div>

        {/* Divisions Cards Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {continentalDivisions.map((division) => (
            <div
              key={division.id}
              className="glass-card flex flex-col justify-between rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="h-10 w-10 rounded-xl border border-teal-500/30 bg-teal-500/10 flex items-center justify-center text-lg text-teal-300 shadow-[0_0_12px_rgba(20,184,166,0.2)]">
                      🌐
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                        {division.name}
                      </h3>
                      <div className="font-mono text-xs text-teal-400 mt-0.5">{division.code}</div>
                    </div>
                  </div>
                  <span className="badge-emerald rounded-full px-2.5 py-0.5 text-xs font-semibold font-mono">
                    {division.settlements}
                  </span>
                </div>

                {/* Terrain Backdrop Banner */}
                <div className="mt-5 rounded-xl border border-white/5 bg-gradient-to-br from-slate-900 to-slate-950 h-32 flex items-end p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-radial from-cyan-500/10 via-transparent to-transparent opacity-60" />
                  <span className="relative z-10 rounded-lg bg-slate-950/80 border border-white/10 px-3 py-1 font-mono text-xs text-cyan-300 backdrop-blur-md shadow-sm">
                    Terrain: {division.terrain}
                  </span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {division.subregions}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 border-t border-white/5 pt-4 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500">{division.jurisdiction}</span>
                <Link
                  href={division.path}
                  className="font-semibold text-teal-400 hover:text-teal-300 transition-colors inline-flex items-center gap-1 group-hover:translate-x-1 duration-200"
                >
                  <span>{division.linkText}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Index Status Footer */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-5 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            <span className="text-emerald-400 font-semibold">INDEX STATUS: SYNCED</span>
          </div>
          <div>
            PROJECTION: EPSG:4326 · GRANULARITY: SUBREGIONAL
          </div>
        </div>
      </div>
    </div>
  );
}
