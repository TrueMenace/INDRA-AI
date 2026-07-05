interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-slate-900">
        {title}
      </h1>

      <p className="mt-2 text-slate-600">
        {description}
      </p>
    </div>
  );
}