import PageHeader from "../components/ui/PageHeader";

import AskInput from "../components/ask/AskInput";
import AnswerCard from "../components/ask/AnswerCard";
import SourceCard from "../components/ask/SourceCard";

export default function AskMemory() {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Ask Enterprise Memory"
        description="Retrieve validated operational intelligence using natural language."
      />

      <AskInput />

      <AnswerCard />

      <SourceCard />

    </div>
  );
}