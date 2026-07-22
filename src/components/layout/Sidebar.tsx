import { NavLink } from "react-router-dom";

import {
  Home,
  FileUp,
  ClipboardCheck,
  Database,
  Bot,
  Network,
  Wrench,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

const navigationItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: Home,
  },
  {
    title: "Knowledge Ingestion",
    path: "/capture",
    icon: FileUp,
  },
  {
    title: "Review & Validate",
    path: "/review",
    icon: ClipboardCheck,
  },
  {
    title: "Knowledge Repository",
    path: "/memory",
    icon: Database,
  },
  {
    title: "Industrial Copilot",
    path: "/ask",
    icon: Bot,
  },

  {
  title: "Knowledge Graph",
  path: "/knowledge-graph",
  icon: Network,
},
{
  title: "Maintenance Intelligence",
  path: "/maintenance",
  icon: Wrench,
},
{
  title: "Compliance Intelligence",
  path: "/compliance",
  icon: ShieldCheck,
},
{
  title: "Lessons Learned",
  path: "/lessons",
  icon: Lightbulb,
},
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen">
      <div className="px-6 py-6 border-b border-slate-700">
        <h2 className="text-lg font-bold">INDRA AI</h2>

        <p className="text-sm text-slate-400 mt-1">
          Industrial Knowledge Intelligence
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