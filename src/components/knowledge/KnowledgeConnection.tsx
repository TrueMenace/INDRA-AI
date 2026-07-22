interface KnowledgeConnectionProps {
  label?: string;
}

export default function KnowledgeConnection({
  label,
}: KnowledgeConnectionProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-0.5 h-10 bg-slate-300"></div>

      {label && (
        <span className="text-xs text-slate-400 mt-1">
          {label}
        </span>
      )}
    </div>
  );
}