import { Search, Bell, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      <div>
        <h1 className="text-xl font-bold text-slate-800">
          INDRA AI
        </h1>

        <p className="text-sm text-slate-500">
          Unified Asset & Operations Brain
        </p>
      </div>

      <div className="flex items-center gap-5">
        <button className="text-slate-600 hover:text-blue-600 transition-colors">
          <Search size={20} />
        </button>

        <button className="relative text-slate-600 hover:text-blue-600 transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-2 border border-slate-200 rounded-full px-3 py-1.5">
          <UserCircle size={28} className="text-slate-600" />
          <div className="hidden md:block">
            <p className="text-sm font-medium text-slate-700">
              Engineering Expert
            </p>
            <p className="text-xs text-slate-500">
              Industrial AI Workspace
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}