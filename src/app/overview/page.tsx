import Link from "next/link";

export default function OverviewPage() {
  return (
    <div className="w-full min-h-screen py-10 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Workspace Sidebar */}
          <aside className="lg:col-span-1 glass-panel rounded-2xl p-6 h-fit border border-white/10">
            <div className="flex items-center justify-between pb-5 border-b border-white/5">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Workspace</span>
                <div className="text-base font-extrabold text-white">Field Workspace</div>
              </div>
              <span className="rounded-lg bg-teal-500/15 border border-teal-500/30 px-2.5 py-1 text-xs font-mono font-bold text-teal-300">
                v1.2
              </span>
            </div>

            <nav className="mt-5 flex flex-col gap-1.5 text-sm font-medium">
              <Link
                href="/overview"
                className="flex items-center justify-between rounded-xl bg-teal-500/15 border border-teal-500/30 px-3.5 py-2.5 text-teal-300 font-bold transition-all shadow-[0_0_15px_rgba(20,184,166,0.15)]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">▦</span>
                  <span>Overview</span>
                </div>
                <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_6px_#2dd4bf]" />
              </Link>
              <button className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all text-left cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <span>🔖</span>
                  <span>Saved Places</span>
                </div>
                <span className="rounded-full bg-slate-800 border border-white/10 px-2 py-0.5 text-xs font-mono font-bold text-slate-300">3</span>
              </button>
              <button className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all text-left cursor-pointer">
                <span>⚙</span>
                <span>Preferences</span>
              </button>
            </nav>

            <div className="mt-8 pt-5 border-t border-white/5 flex flex-col gap-2.5 text-xs">
              <span className="text-slate-500 font-bold uppercase tracking-wider">Index Resources</span>
              <button className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors text-left py-1 cursor-pointer">
                <span>📖</span>
                <span>Documentation</span>
              </button>
              <Link
                href="/"
                className="flex items-center gap-2 text-teal-400 font-semibold hover:text-teal-300 transition-colors py-1"
              >
                <span>←</span>
                <span>Exit to Public Explorer</span>
              </Link>
            </div>
          </aside>

          {/* Main Dashboard Workspace */}
          <main className="lg:col-span-3 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-white/5">
              <div>
                <div className="text-xs text-slate-400 font-mono">Planner / Overview</div>
                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
                  Trip Overview
                </h1>
                <p className="mt-1 text-xs sm:text-sm text-slate-400">
                  Your current route draft and curated spatial bookmarks.
                </p>
              </div>
              <span className="text-xs text-slate-500 font-mono self-start sm:self-auto bg-slate-900/60 border border-white/5 px-3 py-1 rounded-full">
                Updated 42m ago
              </span>
            </div>

            {/* Active Draft & Saved Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Itinerary Column */}
              <div className="md:col-span-2 glass-panel rounded-2xl p-6 sm:p-7 border border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="badge-emerald rounded-full px-3 py-0.5 text-xs font-bold font-mono">
                      Active Draft
                    </span>
                    <h2 className="mt-2.5 text-xl sm:text-2xl font-extrabold text-white">Autumn in Honshu</h2>
                    <div className="text-xs text-slate-400 mt-1 font-medium">Dates: Oct 14–22 · 3 Destinations</div>
                  </div>
                  <span className="rounded-xl border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs font-mono font-bold text-teal-300">
                    8 Days Total
                  </span>
                </div>

                {/* Itinerary Stops */}
                <div className="mt-7 border-t border-white/5 pt-5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Itinerary Stops</span>

                  <div className="mt-4 space-y-3.5">
                    <div className="flex items-start gap-3.5 rounded-xl border border-white/5 bg-slate-950/60 p-4 transition-all hover:border-teal-500/30">
                      <span className="h-3 w-3 rounded-full bg-emerald-400 mt-1.5 shadow-[0_0_8px_#34d399]" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <strong className="text-sm font-bold text-white">Kyoto</strong>
                          <span className="text-xs font-mono text-teal-400 font-semibold">3 nights</span>
                        </div>
                        <p className="mt-1 text-xs text-slate-400">
                          Historic ward corridors, Gion, Arashiyama bamboo path
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 rounded-xl border border-white/5 bg-slate-950/60 p-4 transition-all hover:border-teal-500/30">
                      <span className="h-3 w-3 rounded-full bg-emerald-400 mt-1.5 shadow-[0_0_8px_#34d399]" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <strong className="text-sm font-bold text-white">Osaka</strong>
                          <span className="text-xs font-mono text-teal-400 font-semibold">2 nights</span>
                        </div>
                        <p className="mt-1 text-xs text-slate-400">
                          Dotonbori food district, Namba architectural nexus
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 rounded-xl border border-white/5 bg-slate-950/60 p-4 transition-all hover:border-teal-500/30">
                      <span className="h-3 w-3 rounded-full bg-emerald-400 mt-1.5 shadow-[0_0_8px_#34d399]" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <strong className="text-sm font-bold text-white">Nara</strong>
                          <span className="text-xs font-mono text-teal-400 font-semibold">Day trip</span>
                        </div>
                        <p className="mt-1 text-xs text-slate-400">
                          Todai-ji temple, Kasuga Taisha park preserve
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono">Tokaido-Sanyo Main Corridor</span>
                    <button className="font-semibold text-teal-400 hover:text-teal-300 transition-colors cursor-pointer">
                      Edit Schedule →
                    </button>
                  </div>
                </div>
              </div>

              {/* Side Panels */}
              <div className="space-y-6">
                {/* Saved Destination Nodes */}
                <div className="glass-panel rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center justify-between pb-3.5 border-b border-white/5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">Saved Destination Nodes</h3>
                    <span className="rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 px-2.5 py-0.5 text-xs font-bold font-mono">3</span>
                  </div>

                  <div className="mt-3 divide-y divide-white/5 text-xs">
                    <div className="py-3 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white">Kyoto, Japan</div>
                        <div className="font-mono text-slate-500 text-[11px] mt-0.5">35.0116° N, 135.7681° E</div>
                      </div>
                      <Link href="/destinations/1" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors">
                        Details →
                      </Link>
                    </div>

                    <div className="py-3 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white">Bergen, Norway</div>
                        <div className="font-mono text-slate-500 text-[11px] mt-0.5">60.3913° N, 5.3221° E</div>
                      </div>
                      <Link href="/destinations/2" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors">
                        Details →
                      </Link>
                    </div>

                    <div className="py-3 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white">Florence, Italy</div>
                        <div className="font-mono text-slate-500 text-[11px] mt-0.5">43.7696° N, 11.2558° E</div>
                      </div>
                      <Link href="/destinations/4" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors">
                        Details →
                      </Link>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 text-right">
                    <Link href="/" className="text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors">
                      Browse Spatial Bookmarks →
                    </Link>
                  </div>
                </div>

                {/* Transit & Route Notes */}
                <div className="glass-panel rounded-2xl p-5 border border-white/10 text-xs">
                  <div className="flex items-center gap-2 font-bold text-white pb-3 border-b border-white/5">
                    <span className="text-teal-400">🚆</span>
                    <span>Transit & Route Notes</span>
                  </div>

                  <div className="mt-3.5 rounded-xl border border-white/5 bg-slate-950/60 p-3.5 space-y-2 font-mono text-[11px]">
                    <div className="flex justify-between font-bold">
                      <span className="text-slate-300">JR Kansai W. Pass</span>
                      <span className="text-emerald-400">Valid (Days 1–5)</span>
                    </div>
                    <div className="text-slate-400 flex justify-between">
                      <span>Kyoto ↔ Osaka Express</span>
                      <span className="text-slate-300">28m via Tokaido</span>
                    </div>
                    <div className="text-slate-400 flex justify-between">
                      <span>Osaka ↔ Nara Rapid</span>
                      <span className="text-slate-300">39m via Yamatoji</span>
                    </div>
                  </div>

                  <p className="mt-3 text-slate-400 leading-relaxed text-[11px]">
                    ⓘ Luggage forwarding available between Kyoto & Osaka terminals.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="glass-panel rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10 text-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-400 text-base shadow-sm">
                  📍
                </span>
                <div>
                  <div className="font-bold text-white">Spatial Topology Index: Clean</div>
                  <div className="text-slate-400">All geocodes and route links are verified against catalog definitions.</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="btn-secondary rounded-xl px-4 py-2 font-semibold text-xs cursor-pointer">
                  Export GeoJSON
                </button>
                <button className="btn-secondary rounded-xl px-4 py-2 font-semibold text-xs cursor-pointer">
                  Print Spatial Index
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
