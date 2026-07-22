import Card from "../ui/Card";
import type { MemoryRecord } from "../../context/MemoryContext";

interface RecentActivityCardProps {
  records: MemoryRecord[];
}

export default function RecentActivityCard({
  records,
}: RecentActivityCardProps) {
  const recentRecords = [...records]
    .reverse()
    .slice(0, 5);

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-6">
        Recent Activity
      </h2>

      {recentRecords.length === 0 ? (
        <p className="text-slate-500">
          No activity yet.
        </p>
      ) : (
        <div className="space-y-4">
          {recentRecords.map((record) => (
            <div
              key={record.id}
              className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0"
            >
              <div>
                <p className="font-medium">
                  {record.title}
                </p>

                <p className="text-sm text-slate-500">
                  {record.department}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                  record.approved
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {record.approved
                  ? "Approved"
                  : "Pending"}
              </span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}