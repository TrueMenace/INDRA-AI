import Card from "../ui/Card";

export default function AnswerCard() {
  return (
    <Card>

      <h2 className="text-xl font-semibold">
        AI Answer
      </h2>

      <p className="mt-4 leading-7 text-slate-700">

        Based on validated Enterprise Memory,
        the VPN failure occurred because Windows
        updates introduced compatibility issues
        with outdated OpenSSL libraries.

        Updating the OpenSSL dependency followed
        by restarting the VPN service restored
        connectivity.

        Future operating system updates should
        include dependency compatibility checks
        before deployment.

      </p>

    </Card>
  );
}