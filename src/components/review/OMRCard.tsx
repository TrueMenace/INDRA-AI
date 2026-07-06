import Card from "../ui/Card";

export default function OMRCard() {
  return (
    <Card className="space-y-6">

      <div>
        <h2 className="text-xl font-semibold">
          AI Generated Operational Memory
        </h2>

        <p className="text-slate-500 mt-1">
          Structured operational knowledge extracted from the transcript.
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Title
        </label>

        <p className="mt-1 text-lg font-medium">
          VPN Failure after Windows Update
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Problem
        </label>

        <p className="mt-1">
          Users were unable to establish a VPN connection after a Windows update.
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Root Cause
        </label>

        <p className="mt-1">
          Outdated OpenSSL libraries became incompatible after the operating system update.
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Resolution
        </label>

        <ol className="list-decimal pl-5 mt-2 space-y-2">
          <li>Update OpenSSL libraries.</li>
          <li>Restart the VPN service.</li>
          <li>Verify secure connectivity.</li>
        </ol>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Prevention
        </label>

        <p className="mt-1">
          Validate dependency compatibility before deploying operating system updates.
        </p>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-500">
          Tags
        </label>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
            VPN
          </span>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
            Windows
          </span>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
            OpenSSL
          </span>
        </div>
      </div>

    </Card>
  );
}