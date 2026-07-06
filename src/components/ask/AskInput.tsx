import { Search } from "lucide-react";

import Card from "../ui/Card";
import Button from "../ui/Button";

export default function AskInput() {
  return (
    <Card>

      <h2 className="text-xl font-semibold">
        Ask Enterprise Memory
      </h2>

      <p className="mt-2 text-slate-600">
        Search validated operational knowledge using natural language.
      </p>

      <textarea
        rows={4}
        placeholder="Example: Why did the VPN stop working after Windows update?"
        className="
          mt-6
          w-full
          rounded-lg
          border
          border-slate-300
          p-4
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

      <Button
        className="mt-5 flex items-center gap-2"
      >
        <Search size={18} />

        Ask AI
      </Button>

    </Card>
  );
}