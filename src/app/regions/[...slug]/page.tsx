import Link from "next/link";
import { kansaiRegion } from "@/data/regionData";

export async function generateStaticParams() {
  return [
    { slug: ["asia", "japan", "kansai"] },
  ];
}

export default async function RegionDetailPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const currentPath = slug.join("/");
  const region = kansaiRegion;

  return (
    <div className="w-full py-8 pb-24">
      {/* Telemetry Header Bar */}
      <div className="border-b border-white/5 bg-slate-950/60 backdrop-blur-md py-3 mb-8 text-xs font-mono text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
          <div>
            URI: <span className="text-teal-300 font-bold">/regions/{currentPath}</span> · TYPE: <span className="text-emerald-400">SUB_REGION_INDEX</span>
          </div>
          <div className="text-slate-500">
            CRS: <span className="text-slate-400">EPSG:4326</span> · INDEX_ID: <span className="text-teal-400 font-semibold">#7240-KNSI</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Navigation & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
          <Link
            href="/regions"
            className="text-xs font-semibold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1.5 transition-colors"
          >
            <span>←</span> Back to regions
          </Link>

          <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
            <Link href="/" className="hover:text-teal-400 transition-colors">Destinations</Link>
            <span className="text-slate-600">/</span>
            <span>Asia</span>
            <span className="text-slate-600">/</span>
            <span>Japan</span>
            <span className="text-slate-600">/</span>
            <span className="font-bold text-teal-300">Kansai</span>
          </div>
        </div>

        {/* Region Title & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="text-xs font-mono text-teal-400 flex items-center gap-1.5">
              <span>↳</span> Asia / Japan / Kansai
            </div>

            <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {region.name}
            </h1>

            <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {region.description}
            </p>

            {/* Parent & Hierarchy Chips */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5 text-xs">
              <span className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-1.5 text-slate-300 font-mono">
                Parent: <strong className="text-teal-300">{region.parent}</strong> ↗
              </span>
              <span className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-1.5 text-slate-300 font-mono">
                Grandparent: <strong className="text-teal-300">{region.grandparent}</strong> ↗
              </span>
              <span className="badge-emerald rounded-xl px-3 py-1.5 font-mono font-medium">
                ● {region.prefectures}
              </span>
            </div>
          </div>

          {/* Spatial Index Metrics Box */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between border-b border-white/5 pb-3.5 text-xs">
              <span className="font-bold text-slate-400 uppercase tracking-wider font-mono">Spatial Index Metrics</span>
              <span className="font-mono text-teal-400 font-bold">{region.spatialMetrics.index}</span>
            </div>

            <div className="divide-y divide-white/5 text-xs mt-1">
              <div className="py-3 flex justify-between">
                <span className="text-slate-400">Administrative Division</span>
                <span className="font-semibold text-slate-200">{region.spatialMetrics.admin}</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-slate-400">Total Area</span>
                <span className="font-semibold text-teal-300 font-mono">{region.spatialMetrics.area}</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-slate-400">Population Index</span>
                <span className="font-semibold text-slate-200 font-mono">{region.spatialMetrics.population}</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-slate-400">Principal Gateway</span>
                <span className="font-semibold text-slate-200">{region.spatialMetrics.gateway}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Region Destinations Grid */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-white/5 gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Destinations in this region ({region.destinations.length})
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Settlement nodes cataloged with active transit corridors and spatial reference points.
              </p>
            </div>
            <div className="text-xs font-mono text-teal-400">
              Sort: Hierarchy | Density Map
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {region.destinations.map((dest) => (
              <div
                key={dest.id}
                className="glass-card flex flex-col justify-between rounded-2xl p-6 relative overflow-hidden group"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />

                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-mono text-xs text-teal-400">
                        {dest.shortCode} • {dest.code}
                      </div>
                      <h3 className="mt-1 text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                        {dest.name}
                      </h3>
                    </div>
                    <span className="badge-cyan rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase">
                      {dest.tag}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {dest.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-500">{dest.coords}</span>
                  <Link
                    href={`/destinations/${dest.id}`}
                    className="font-semibold text-teal-400 hover:text-teal-300 transition-colors inline-flex items-center gap-1 group-hover:translate-x-1 duration-200"
                  >
                    <span>View destination</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Spatial Notes & Connectivity */}
        <div className="mt-14 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-500/15 text-teal-400 text-sm font-bold">
              ⓘ
            </span>
            <h3 className="text-base font-bold text-white">Regional Spatial Notes & Connectivity</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-300">
            <div className="rounded-xl border border-white/5 bg-slate-950/40 p-5">
              <div className="flex items-center gap-2 font-bold text-white mb-2">
                <span className="text-teal-400">🚆</span>
                <span>Rail Interconnectivity & Transit Arteries</span>
              </div>
              <p className="leading-relaxed text-slate-400 text-xs sm:text-sm">
                The Kansai corridor is bound by one of the densest private and national rail meshes globally. The JR Tokaido-Sanyo Shinkansen anchors the primary east-west spine connecting Kyoto, Shin-Osaka, and Shin-Kobe in under 30 minutes. Hankyu, Hanshin, Keihan, and Kintetsu private networks provide non-JR redundant links serving suburban belts and pilgrimage footpaths into Mount Koya and Yoshino.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-slate-950/40 p-5">
              <div className="flex items-center gap-2 font-bold text-white mb-1">
                <span className="text-teal-400">🌡</span>
                <span>Geographic Microclimates & Topography</span>
              </div>
              <p className="leading-relaxed text-slate-400 text-xs sm:text-sm">
                Flanked by the Tamba highlands to the north, the Kii mountain spine to the south, and Osaka Bay to the west, Kansai experiences stark microclimates. Kyoto&apos;s closed basin results in sharp seasonal temperature deltas, whereas Kobe and southern Osaka benefit from maritime moderations created by the Seto Inland Sea wind tunnels.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 font-mono">
            <div>
              Primary pass: <span className="text-teal-300">JR Kansai Area Pass</span> · Transit: <span className="text-slate-400">ICOCA / Suica integrated</span>
            </div>
            <div className="text-emerald-400">
              Verified spatial notes (Updated: Autumn cycle)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
