import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import Card from "../ui/Card";
import Button from "../ui/Button";

interface ApprovalCardProps {
  onApprove: () => void;
}

export default function ApprovalCard({
  onApprove,
}: ApprovalCardProps) {
  const [saving, setSaving] = useState(false);

  async function handleApprove() {
    setSaving(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    onApprove();
  }

  return (
    <Card className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">
          Knowledge Approval
        </h2>

        <p className="text-slate-500 mt-1">
          Review the generated Operational Memory Record
          before publishing it to Enterprise Memory.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-slate-600">
          Status
        </span>

        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
          Draft
        </span>
      </div>

      <Button
        onClick={handleApprove}
        disabled={saving}
        className="flex items-center gap-2"
      >
        <CheckCircle2 size={18} />

        {saving
          ? "Approving..."
          : "Approve Knowledge"}
      </Button>
    </Card>
  );
}