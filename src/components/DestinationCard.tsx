import Link from "next/link";
import { Destination } from "@/data/destinationData";

export default function DestinationCard({ destination }: { destination: Destination }) {
  if (!destination) return null;

  return (
    <div className="glass-card group flex flex-col justify-between rounded-2xl p-6 relative overflow-hidden">
      {/* Top subtle highlight line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />

      <div>
        {/* Telemetry Header */}
        <div className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-950/60 px-3 py-2.5 backdrop-blur-md">
          <div className="flex items-center gap-2 font-mono text-xs text-teal-300">
            <span className="text-teal-400">⌖</span>
            <span>{destination.loc}</span>
          </div>
          <span className="rounded-md border border-white/10 bg-slate-800/80 px-2 py-0.5 text-[11px] font-mono font-semibold text-slate-300 shadow-sm">
            {destination.code}
          </span>
        </div>

        {/* Title & Tag */}
        <div className="mt-5 flex items-baseline justify-between gap-2">
          <h2 className="text-xl font-extrabold text-white tracking-tight group-hover:text-teal-300 transition-colors">
            {destination.name}
          </h2>
          <span className="badge-cyan rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider">
            {destination.tag}
          </span>
        </div>

        {/* Geographic location */}
        <p className="mt-1.5 text-xs font-medium text-emerald-400 flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-emerald-400" />
          <span>{destination.country}</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">{destination.region}</span>
        </p>

        {/* Description */}
        <p className="mt-3.5 text-sm text-slate-400 line-clamp-2 leading-relaxed">
          {destination.description}
        </p>
      </div>

      {/* Card Action Footer */}
      <div className="mt-6 border-t border-white/5 pt-4">
        <Link
          href={`/destinations/${destination.id}`}
          className="flex items-center justify-between text-xs font-semibold text-teal-400 group-hover:text-teal-300 transition-colors"
        >
          <span className="flex items-center gap-1.5">
            <span>Explore Destination</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </span>
          <span className="h-2 w-2 rounded-full bg-teal-500/40 group-hover:bg-teal-400 transition-colors shadow-sm" />
        </Link>
      </div>
    </div>
  );
}
