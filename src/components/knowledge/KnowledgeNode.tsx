import Card from "../ui/Card";
import type { LucideIcon } from "lucide-react";

interface KnowledgeNodeProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color?: string;
}

export default function KnowledgeNode({
  title,
  subtitle,
  icon: Icon,
  color = "bg-blue-100 text-blue-700",
}: KnowledgeNodeProps) {
  return (
    <Card className="flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}
      >
        <Icon size={24} />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-slate-800">{title}</h3>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
    </Card>
  );
}