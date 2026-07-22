import { useState } from "react";

import PageHeader from "../components/ui/PageHeader";

import AskInput from "../components/ask/AskInput";
import AnswerCard from "../components/ask/AnswerCard";
import SourceCard from "../components/ask/SourceCard";

import { useMemory } from "../context/MemoryContext";

export default function AskMemory() {
  const { records } = useMemory();

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const [sources, setSources] =
    useState<typeof records>([]);

  async function handleAsk() {
    if (!question.trim()) return;

    const matches = records.filter(
      (record) =>
        record.title
          .toLowerCase()
          .includes(question.toLowerCase()) ||
        record.transcript
          .toLowerCase()
          .includes(question.toLowerCase()) ||
        record.tags.some((tag) =>
          question
            .toLowerCase()
            .includes(tag.toLowerCase())
        )
    );

    setSources(matches);

    if (matches.length === 0) {
      setAnswer(
        "No relevant operational memory could be found."
      );
      return;
    }

    await new Promise((resolve) =>
      setTimeout(resolve, 1200)
    );

    const asset =
      matches[0].title || "the requested asset";

    setAnswer(`
    INDRA AI analyzed ${matches.length} validated knowledge ${
      matches.length === 1 ? "record" : "records"
    }.

    Summary

    ${matches[0].transcript}

    Root Cause

    The available engineering knowledge indicates that the issue is most likely associated with previously documented operational patterns linked to ${asset}.

    Operational Impact

    The identified issue may affect equipment reliability, maintenance planning, and production continuity if left unresolved.

    Recommended Actions

    • Review related maintenance history
    • Verify the latest inspection reports
    • Compare similar historical incidents
    • Execute preventive maintenance as per the linked SOP
    `);

  }

  return (
    <>

      <PageHeader
        title="Industrial AI Copilot"
        description="Ask INDRA AI questions about industrial assets, engineering documents, inspections, incidents, maintenance history and operational knowledge."
      />

      <div className="space-y-6">

        <AskInput
          question={question}
          setQuestion={setQuestion}
          onAsk={handleAsk}
        />

        {answer && (
          <>
            <AnswerCard
              answer={answer}
            />

            <SourceCard
              records={sources}
            />
          </>
        )}

      </div>
    </>
  );
}