import Card from "../ui/Card";
import type { MemoryRecord } from "../../context/MemoryContext";

interface SourceCardProps {
  records: MemoryRecord[];
}

export default function SourceCard({
  records,
}: SourceCardProps) {
  return (
    <Card>
      <h2 className="text-xl font-semibold">
        Referenced Operational Memory
      </h2>

      {records.length === 0 ? (
        <p className="mt-5 text-slate-500">
          No matching operational memories found.
        </p>
      ) : (
        <div className="mt-5 space-y-4">
          {records.map((record) => (
            <div
              key={record.id}
              className="rounded-lg border border-slate-200 p-5"
            >
              <h3 className="font-semibold">
                {record.title}
              </h3>

              <p className="mt-2 text-slate-600">
                {record.department}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {record.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}