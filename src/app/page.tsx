import destinationData from "@/data/destinationData";
import DestinationCard from "@/components/DestinationCard";

export default function DestinationsPage() {
  const destinations = destinationData.slice(0, 6);

  return (
    <div className="w-full pb-20 pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Survey Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-bold tracking-widest text-emerald-400 uppercase font-mono shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>CATALOGUE // 01 • LIVE SURVEY</span>
        </div>

        {/* Hero Title Section */}
        <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-white/5">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Explore <span className="bg-gradient-to-r from-teal-300 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">destinations</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Browse curated global travel destinations organized by geographic region, terrain systems, and spatial telemetry.
            </p>
          </div>

          <div className="md:text-right glass-panel rounded-2xl px-5 py-3 border border-white/10">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              TOTAL RECORDED ENTITIES
            </div>
            <div className="mt-0.5 text-2xl font-extrabold text-teal-400 font-mono flex items-center md:justify-end gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf]" />
              <span>06 NODES ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Region Filter Chips */}
        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          <button className="rounded-full border border-teal-500/40 bg-teal-500/15 px-4 py-1.5 text-xs font-bold text-teal-300 shadow-[0_0_12px_rgba(20,184,166,0.25)] transition-all">
            All Regions
          </button>
          <button className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-400 hover:border-white/20 hover:text-slate-200 hover:bg-slate-800/60 transition-all">
            East Asia
          </button>
          <button className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-400 hover:border-white/20 hover:text-slate-200 hover:bg-slate-800/60 transition-all">
            Southern Europe
          </button>
          <button className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-400 hover:border-white/20 hover:text-slate-200 hover:bg-slate-800/60 transition-all">
            Scandinavia
          </button>
          <button className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-400 hover:border-white/20 hover:text-slate-200 hover:bg-slate-800/60 transition-all">
            South America
          </button>
          <button className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-400 hover:border-white/20 hover:text-slate-200 hover:bg-slate-800/60 transition-all">
            North Africa
          </button>
        </div>

        {/* Grid of Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((item) => (
            <DestinationCard key={item.id} destination={item} />
          ))}
        </div>

        {/* Bottom Cartographic Info Banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/5 bg-slate-950/60 backdrop-blur-md p-4 sm:p-5 text-xs text-slate-400">
          <div className="flex items-center gap-2.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold">
              ⓘ
            </span>
            <span>Destinations are systematically validated against public cartographic terrain datasets.</span>
          </div>
          <div className="font-mono text-teal-400/80 font-medium tracking-wide">
            COORDINATE FORMAT: WGS84 // EPSG:4326
          </div>
        </div>
      </div>
    </div>
  );
}
