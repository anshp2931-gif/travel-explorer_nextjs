import Link from "next/link";
import { notFound } from "next/navigation";
import destinationData from "@/data/destinationData";

export async function generateStaticParams() {
  return destinationData.map((d) => ({
    id: String(d.id),
  }));
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const destination = destinationData.find((d) => String(d.id) === String(id));

  if (!destination) {
    notFound();
  }

  return (
    <div className="w-full py-10 pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb & Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 rounded-lg border border-white/5 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-400 font-mono backdrop-blur-sm">
            <Link href="/" className="hover:text-teal-400 transition-colors">Destinations</Link>
            <span className="text-slate-600">/</span>
            <span>Asia</span>
            <span className="text-slate-600">/</span>
            <span>{destination.country}</span>
            <span className="text-slate-600">/</span>
            <span className="text-teal-300 font-bold">{destination.name}</span>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
          >
            <span>←</span> Back to destinations
          </Link>
        </div>

        {/* Region Badge */}
        <div className="mb-4">
          <span className="badge-emerald inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {destination.country} · {destination.region}
          </span>
        </div>

        {/* Header with Title and GEO tags */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-white/5">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {destination.name}
          </h1>

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-xl border border-white/10 bg-slate-900/80 px-3 py-1.5 font-mono text-xs text-teal-300 backdrop-blur-sm shadow-sm">
              GEO: {destination.geo}
            </span>
            <span className="rounded-xl border border-white/10 bg-slate-900/80 px-3 py-1.5 font-mono text-xs text-slate-400 backdrop-blur-sm">
              INDEX: KIX-{destination.subRegion.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Main Cartographic Overview Panel */}
        <div className="mt-8 glass-panel rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest text-teal-400 uppercase font-mono flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  CARTOGRAPHIC OVERVIEW
                </span>
                <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {destination.overview}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4 text-xs">
                <div className="rounded-xl border border-white/5 bg-slate-950/40 p-3">
                  <span className="text-slate-400 font-medium">Elevation</span>
                  <div className="mt-0.5 text-sm font-bold text-teal-300 font-mono">{destination.elevation}</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-slate-950/40 p-3">
                  <span className="text-slate-400 font-medium">Prefecture</span>
                  <div className="mt-0.5 text-sm font-bold text-slate-200">{destination.prefecture}</div>
                </div>
              </div>
            </div>

            {/* Spatial Inset Graphic */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-5 flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-radial from-teal-500/10 to-transparent opacity-50" />
              <div className="relative z-10">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/15 border border-teal-500/30 text-teal-300 text-lg shadow-[0_0_20px_rgba(45,212,191,0.25)]">
                  ⌖
                </div>
                <div className="mt-3 text-xs font-mono text-slate-400">Spatial Inset (480 × 200 Ref)</div>
                <span className="mt-2 inline-block text-[11px] font-bold text-teal-300 bg-teal-950/60 border border-teal-500/30 rounded-lg px-2.5 py-1 font-mono">
                  Zone 03 / Historic Core
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Information Section */}
        <div className="mt-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-4 w-1 bg-gradient-to-b from-teal-400 to-emerald-500 rounded" />
            <h2 className="text-lg font-bold text-white">Key Information</h2>
          </div>

          <div className="glass-panel rounded-2xl divide-y divide-white/5 text-sm">
            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-4 gap-2">
              <div className="flex items-center gap-2.5 text-slate-400 font-medium">
                <span className="text-teal-400">🗓</span>
                <span>Best season</span>
              </div>
              <div className="sm:col-span-3 text-slate-200 font-normal">
                {destination.bestSeason}
              </div>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-4 gap-2">
              <div className="flex items-center gap-2.5 text-slate-400 font-medium">
                <span className="text-teal-400">🧭</span>
                <span>Known for</span>
              </div>
              <div className="sm:col-span-3 text-slate-200 font-normal">
                {destination.knownFor}
              </div>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-4 gap-2">
              <div className="flex items-center gap-2.5 text-slate-400 font-medium">
                <span className="text-teal-400">⏱</span>
                <span>Typical trip length</span>
              </div>
              <div className="sm:col-span-3 text-slate-200 font-normal">
                {destination.tripLength}
              </div>
            </div>
          </div>
        </div>

        {/* Practical Transit Notes */}
        <div className="mt-8 glass-panel rounded-2xl p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-teal-500/15 border border-teal-500/30 p-2.5 text-teal-300 text-xl shadow-[0_0_12px_rgba(20,184,166,0.2)]">
              🚆
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Practical Transit Notes</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {destination.transitNotes}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Taxonomy Link */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <span className="font-mono">Spatial Taxonomy Division: West Honshu Basin</span>
          <Link
            href="/regions/asia/japan/kansai"
            className="font-semibold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Explore Kansai Region</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
