import { useNavigate } from "react-router-dom";

import TranscriptCard from "../components/review/TranscriptCard";
import OMRCard from "../components/review/OMRCard";
import ClarificationCard from "../components/review/ClarificationCard";
import ApprovalCard from "../components/review/ApprovalCard";

import { useMemory } from "../context/MemoryContext";

export default function ReviewApprove() {
  const { records, updateRecord } = useMemory();

  const navigate = useNavigate();

  const pendingRecord = [...records]
    .reverse()
    .find((record) => !record.approved);

  if (!pendingRecord) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">
          No documents awaiting validation
        </h2>

        <p className="text-slate-500 mt-3">
          Upload industrial documents to begin AI knowledge extraction and validation.
        </p>
      </div>
    );
  }

  // TypeScript now knows this is defined
  const record = pendingRecord;

  function handleApprove() {
    updateRecord(record.id, {
      approved: true,
      recentlyAdded: true,
    });

    navigate("/memory");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">
          Expert Validation Workspace
        </h1>

        <p className="text-slate-600 mt-2">
          Review AI-extracted entities, engineering knowledge, and document insights before publishing them to the Industrial Knowledge Repository.
        </p>
      </div>

      <TranscriptCard
        transcript={record.transcript}
      />

      <OMRCard
        title={record.title}
        department={record.department}
        tags={record.tags}
      />

      <ClarificationCard />

      <ApprovalCard
        onApprove={handleApprove}
      />
    </div>
  );
}