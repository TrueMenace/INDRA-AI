import { Search, Bell, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      <div>
        <h1 className="text-xl font-semibold text-slate-800">
          Enterprise Operational Memory System
        </h1>

        <p className="text-sm text-slate-500">
          Transform Experience into Organizational Intelligence
        </p>
      </div>

      <div className="flex items-center gap-5 text-slate-600">
        <Search
          size={20}
          className="cursor-pointer hover:text-blue-600 transition-colors"
        />
        <Bell
          size={20}
          className="cursor-pointer hover:text-blue-600 transition-colors"
        />
        <UserCircle size={30} />
      </div>
    </header>
  );
}