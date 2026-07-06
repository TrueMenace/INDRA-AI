import Card from "../ui/Card";

interface MemoryCardProps {
  title: string;
  department: string;
  tags: string[];
  recentlyAdded?: boolean;
}

export default function MemoryCard({
  title,
  department,
  tags,
  recentlyAdded = false,
}: MemoryCardProps) {
  return (
    <Card className="transition hover:shadow-md">

      <div className="flex items-center justify-between">

        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        {recentlyAdded && (
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            Recently Added
          </span>
        )}

      </div>

      <p className="mt-3 text-slate-600">
        Department: {department}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map(tag => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>

    </Card>
  );
}