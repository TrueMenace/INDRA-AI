import Card from "../ui/Card";

const clarificationQuestions = [
  "Which Windows version was affected?",
  "How should another engineer verify the fix?",
  "How can this issue be prevented in the future?",
];

export default function ClarificationCard() {
  return (
    <Card className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">
          AI Clarification
        </h2>

        <p className="text-slate-500 mt-1">
          AI identified missing operational details that can improve the quality of this knowledge record.
        </p>
      </div>

      {clarificationQuestions.map((question, index) => (
        <div key={index}>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            {question}
          </label>

          <textarea
            rows={3}
            placeholder="Enter your response..."
            className="
              w-full
              rounded-lg
              border
              border-slate-300
              p-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />
        </div>
      ))}
    </Card>
  );
}