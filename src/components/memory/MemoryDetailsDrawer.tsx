import type { MemoryRecord } from "../../context/MemoryContext";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface MemoryDetailsDrawerProps {
  record: MemoryRecord | null;
  onClose: () => void;
}

export default function MemoryDetailsDrawer({
  record,
  onClose,
}: MemoryDetailsDrawerProps) {
  if (!record) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex justify-end"
      onClick={onClose}
    >
      <div
        className="
          h-full
          w-full
          max-w-2xl
          overflow-y-auto
          bg-slate-100
          p-6
          shadow-2xl
          animate-in
          slide-in-from-right
          duration-300
        "
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="space-y-8">

          {/* Header */}

          <div className="flex justify-between items-start">

            <div>

              <h2 className="text-3xl font-bold">
                {record.title}
              </h2>

              <p className="mt-2 text-slate-500">
                {record.department}
              </p>

            </div>

            <span
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                record.approved
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {record.approved
                ? "Approved"
                : "Pending"}
            </span>

          </div>

          {/* Transcript */}

          <div>

            <h3 className="text-lg font-semibold mb-2">
              Transcript
            </h3>

            <div className="rounded-lg bg-slate-50 border p-5 leading-7">
              {record.transcript}
            </div>

          </div>

          {/* AI Summary */}

          <div className="grid gap-5">

            <div>

              <h3 className="font-semibold mb-2">
                Problem
              </h3>

              <p className="text-slate-600">
                Users were unable to access the VPN after
                installing a Windows update.
              </p>

            </div>

            <div>

              <h3 className="font-semibold mb-2">
                Root Cause
              </h3>

              <p className="text-slate-600">
                OpenSSL dependency incompatibility.
              </p>

            </div>

            <div>

              <h3 className="font-semibold mb-2">
                Resolution
              </h3>

              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Update OpenSSL.</li>
                <li>Restart VPN Service.</li>
                <li>Verify connectivity.</li>
              </ul>

            </div>

            <div>

              <h3 className="font-semibold mb-2">
                Prevention
              </h3>

              <p className="text-slate-600">
                Validate dependency compatibility before
                Windows deployment.
              </p>

            </div>

          </div>

          {/* Tags */}

          <div>

            <h3 className="font-semibold mb-3">
              Tags
            </h3>

            <div className="flex flex-wrap gap-2">

              {record.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-100 px-3 py-1 text-blue-700 text-sm"
                >
                  {tag}
                </span>
              ))}

            </div>

          </div>

          <div className="pt-4">

            <Button onClick={onClose}>
              Close
            </Button>

          </div>

        </Card>
      </div>
    </div>
  );
}