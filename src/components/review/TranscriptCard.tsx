import Card from "../ui/Card";

export default function TranscriptCard() {
  return (
    <Card className="mb-6">

      <h2 className="text-xl font-semibold mb-4">
        Transcript
      </h2>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 leading-7 text-slate-700">

        Yesterday the VPN stopped working after a Windows
        update. Investigation showed that OpenSSL libraries
        were outdated. After updating the library and
        restarting the VPN service, connectivity was
        restored. Future updates should include compatibility
        testing before deployment.

      </div>

    </Card>
  );
}