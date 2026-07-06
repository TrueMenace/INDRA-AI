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
          AI Generated Operational Memory
        </h2>

        <p className="text-slate-500 mt-1">
          Structured operational knowledge extracted from the transcript.
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Title
        </label>

        <p className="mt-1 text-lg font-medium">
          {title}
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Department
        </label>

        <p className="mt-1">
          {department}
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Problem
        </label>

        <p className="mt-1">
          Users experienced an operational issue requiring investigation.
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Root Cause
        </label>

        <p className="mt-1">
          AI extracted the most probable root cause from the uploaded recording.
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Resolution
        </label>

        <ol className="list-decimal pl-5 mt-2 space-y-2">
          <li>Investigate the issue.</li>
          <li>Apply the recommended fix.</li>
          <li>Verify successful operation.</li>
        </ol>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Prevention
        </label>

        <p className="mt-1">
          Capture this knowledge so similar incidents can be resolved faster.
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Tags
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
        </div>
      </div>
    </Card>
  );
}