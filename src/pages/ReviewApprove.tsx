import TranscriptCard from "../components/review/TranscriptCard";
import OMRCard from "../components/review/OMRCard";
import ClarificationCard from "../components/review/ClarificationCard";
import ApprovalCard from "../components/review/ApprovalCard";
import { useMemory } from "../context/MemoryContext";
import { useNavigate } from "react-router-dom";

export default function ReviewApprove() {
  const { records, updateRecord } = useMemory();

  const navigate = useNavigate();

  const pendingRecord = records.find(
    (record) => !record.approved
  );

  function handleApprove() {
    if (!pendingRecord) return;

    updateRecord(pendingRecord.id, {
      approved: true,
      department: "Engineering",
      tags: [
        ...pendingRecord.tags,
        "Approved",
        "AI Extracted",
      ],
      recentlyAdded: true,
    });

    navigate("/memory");
  }

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-4xl font-bold">
          Review & Approve
        </h1>

        <p className="text-slate-600 mt-2">
          Review AI-generated operational knowledge before
          publishing it to Enterprise Memory.
        </p>

      </div>

      <TranscriptCard
        transcript={
          pendingRecord?.transcript ??
          "No transcript available."
        }
      />
      <OMRCard
        title={
          pendingRecord?.title ??
          "Untitled Record"
        }
        department={
          pendingRecord?.department ??
          "Pending Review"
        }
        tags={
          pendingRecord?.tags ?? []
        }
      />
      <ClarificationCard />
      <ApprovalCard
        onApprove={handleApprove}
      />

    </div>
  );
}