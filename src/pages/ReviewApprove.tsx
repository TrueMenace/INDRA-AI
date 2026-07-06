import TranscriptCard from "../components/review/TranscriptCard";
import OMRCard from "../components/review/OMRCard";
import ClarificationCard from "../components/review/ClarificationCard";
import ApprovalCard from "../components/review/ApprovalCard";

export default function ReviewApprove() {
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

      <TranscriptCard />
      <OMRCard />
      <ClarificationCard />
      <ApprovalCard />

    </div>
  );
}