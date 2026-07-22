import Card from "../ui/Card";
import { Brain, Link2, ShieldCheck, Wrench } from "lucide-react";

export default function RelationshipPanel() {
  const insights = [
    {
      icon: Link2,
      title: "Connected Knowledge",
      value: "48 Relationships",
      color: "text-blue-600",
    },
    {
      icon: Wrench,
      title: "Maintenance Records",
      value: "27 Linked Records",
      color: "text-amber-600",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Status",
      value: "96% Coverage",
      color: "text-green-600",
    },
    {
      icon: Brain,
      title: "AI Confidence",
      value: "96%",
      color: "text-violet-600",
    },
  ];

  return (
    <Card>
      <h2 className="text-lg font-semibold text-slate-800 mb-5">
        AI Relationship Insights
      </h2>

      <div className="space-y-4">
        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0"
            >
              <div className="flex items-center gap-3">
                <Icon className={item.color} size={20} />

                <div>
                  <p className="font-medium text-slate-700">
                    {item.title}
                  </p>

                  <p className="text-sm text-slate-500">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-lg bg-slate-50 p-4">
        <h3 className="font-semibold text-slate-700 mb-2">
          AI Recommendations
        </h3>

        <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
          <li>Similar bearing failures detected across two production lines.</li>
          <li>Preventive maintenance is recommended within the next 7 days.</li>
          <li>Related SOP and OEM manual have been automatically linked.</li>
          <li>Inspection history indicates recurring vibration anomalies.</li>
        </ul>
      </div>
    </Card>
  );
}