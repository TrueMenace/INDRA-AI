import Card from "../ui/Card";

interface OMRCardProps {
  title: string;
  department: string;
  tags: string[];
}

export default function OMRCard({
  title,
  department,
  tags,
}: OMRCardProps) {
  return (
    <Card className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">
          AI Generated Industrial Knowledge Record
        </h2>

        <p className="text-slate-500 mt-1">
          Structured engineering knowledge automatically extracted and organized
          from industrial documents.
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Document Name
        </label>

        <p className="mt-1 text-lg font-medium">
          {title}
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Plant / Business Function
        </label>

        <p className="mt-1">
          {department}
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Detected Asset
        </label>

        <p className="mt-1">
          PUMP-101 (AI Extracted)
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Document Category
        </label>

        <p className="mt-1">
          Preventive Maintenance Record
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          AI Summary
        </label>

        <p className="mt-1">
          AI identified critical equipment information, maintenance history,
          operational procedures, and engineering relationships from the uploaded
          document.
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Engineering Recommendation
        </label>

        <ol className="list-decimal pl-5 mt-2 space-y-2">
          <li>Inspect the affected asset.</li>
          <li>Review historical maintenance records.</li>
          <li>Verify operating parameters.</li>
          <li>Update the centralized knowledge repository.</li>
        </ol>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Knowledge Entities
        </label>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
            >
              {tag}
            </span>
          ))}

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
            Equipment
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
            Maintenance
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
            Inspection
          </span>
        </div>
      </div>
    </Card>
  );
}