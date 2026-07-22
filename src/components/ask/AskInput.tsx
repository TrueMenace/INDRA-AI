import { Search, Sparkles } from "lucide-react";

import Card from "../ui/Card";
import Button from "../ui/Button";

interface AskInputProps {
  question: string;
  setQuestion: React.Dispatch<
    React.SetStateAction<string>
  >;
  onAsk: () => void;
}

const suggestions = [
  "Why did Pump-101 fail repeatedly?",
  "Show maintenance history of Boiler-3",
  "Find inspection reports for Compressor-A",
  "List overdue preventive maintenance",
  "Show similar bearing failures",
  "Open SOP for Motor-204",
];

export default function AskInput({
  question,
  setQuestion,
  onAsk,
}: AskInputProps) {
  return (
    <Card>
      <div className="flex items-center gap-3">
        <Sparkles className="text-blue-600" size={26} />

        <div>
          <h2 className="text-2xl font-semibold">
            Ask INDRA AI
          </h2>

          <p className="text-slate-600 mt-1">
            Ask questions across industrial assets,
            engineering documents, maintenance records,
            incidents and expert knowledge.
          </p>
        </div>
      </div>

      <textarea
        rows={4}
        value={question}
        onChange={(event) =>
          setQuestion(event.target.value)
        }
        placeholder="Example: Why did Pump-101 fail repeatedly?"
        className="
          mt-6
          w-full
          rounded-xl
          border
          border-slate-300
          p-4
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

      <div className="mt-5">
        <p className="text-sm font-medium text-slate-600 mb-3">
          Suggested Questions
        </p>

        <div className="flex flex-wrap gap-2">
          {suggestions.map((item) => (
            <button
              key={item}
              onClick={() => setQuestion(item)}
              className="
                rounded-full
                border
                border-slate-300
                px-4
                py-2
                text-sm
                hover:bg-blue-50
                hover:border-blue-400
                transition
              "
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <Button
        onClick={onAsk}
        className="mt-6 flex items-center gap-2"
      >
        <Search size={18} />

        Ask INDRA AI
      </Button>
    </Card>
  );
}