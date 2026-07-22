import Card from "../ui/Card";

interface StatCardProps {
  title: string;
  value: number;
  description: string;
}

export default function StatCard({
  title,
  value,
  description,
}: StatCardProps) {
  return (
    <Card className="transition hover:shadow-md">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-blue-600">
        {value}
      </h2>

      <p className="mt-3 text-sm text-slate-500">
        {description}
      </p>

    </Card>
  );
}