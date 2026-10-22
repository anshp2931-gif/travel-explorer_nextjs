import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#07090e]/90 py-8 mt-auto text-sm text-slate-500 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-950 font-bold text-xs shadow-sm">
            W
          </div>
          <span className="text-xs text-slate-400">
            © 2026 Wayfinder Spatial Index. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-medium text-slate-400">
          <Link href="/" className="hover:text-teal-400 transition-colors">
            Destinations
          </Link>
          <Link href="/regions" className="hover:text-teal-400 transition-colors">
            Regions
          </Link>
          <Link href="/overview" className="hover:text-teal-400 transition-colors">
            Trip Planner
          </Link>
          <div className="hidden md:flex items-center gap-1.5 pl-4 border-l border-white/10 font-mono text-[11px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981] animate-pulse" />
            <span>NODES ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
