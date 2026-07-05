import { NavLink } from "react-router-dom";
import {
  Home,
  Mic,
  ClipboardCheck,
  Database,
  MessageSquare,
} from "lucide-react";

const navigationItems = [
  {
    title: "Home",
    path: "/",
    icon: Home,
  },
  {
    title: "Capture Knowledge",
    path: "/capture",
    icon: Mic,
  },
  {
    title: "Review & Approve",
    path: "/review",
    icon: ClipboardCheck,
  },
  {
    title: "Enterprise Memory",
    path: "/memory",
    icon: Database,
  },
  {
    title: "Ask Memory",
    path: "/ask",
    icon: MessageSquare,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen">
      <div className="px-6 py-6 border-b border-slate-700">
        <h2 className="text-lg font-bold">EOMS</h2>
        <p className="text-sm text-slate-400 mt-1">
          Enterprise Memory
        </p>
      </div>

      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={18} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}