import Card from "../ui/Card";

interface TranscriptCardProps {
  transcript: string;
}

export default function TranscriptCard({
  transcript,
}: TranscriptCardProps) {
  return (
    <Card className="mb-6">
      <h2 className="text-xl font-semibold mb-2">
        AI Extracted Document Intelligence
      </h2>

      <p className="text-sm text-slate-500 mb-4">
        Structured information extracted from uploaded industrial
        documents using OCR, document intelligence, and AI entity extraction.
      </p>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 leading-7 text-slate-700">
        {transcript}
      </div>
    </Card>
  );
}