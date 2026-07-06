import { FileAudio, Trash2 } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";

interface SelectedFileCardProps {
  file: File;
  onRemove: () => void;
  onContinue: () => void;
  loading: boolean;
}

export default function SelectedFileCard({
  file,
  onRemove,
  onContinue,
  loading,
}: SelectedFileCardProps) {
  return (
    <Card className="mt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <FileAudio className="text-blue-600" />
          </div>

          <div>
            <h3 className="font-semibold">{file.name}</h3>

            <p className="text-sm text-slate-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            className="bg-red-600 hover:bg-red-700"
            onClick={onRemove}
            disabled={loading}
          >
            <Trash2 size={18} />
          </Button>

          <Button
            onClick={onContinue}
            disabled={loading}
          >
            {loading ? "Transcribing..." : "Continue"}
          </Button>
        </div>
      </div>
    </Card>
  );
}