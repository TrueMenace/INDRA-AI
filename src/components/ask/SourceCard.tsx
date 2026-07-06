import Card from "../ui/Card";

export default function SourceCard() {
  return (
    <Card>

      <h2 className="text-xl font-semibold">
        Referenced Operational Memory
      </h2>

      <div className="mt-5 rounded-lg border border-slate-200 p-5">

        <h3 className="font-semibold">
          VPN Failure after Windows Update
        </h3>

        <p className="mt-2 text-slate-600">
          IT Support
        </p>

        <div className="mt-4 flex gap-2">

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