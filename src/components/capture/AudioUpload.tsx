import { useRef, useState } from "react";
import { Upload, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import Card from "../ui/Card";
import SelectedFileCard from "./SelectedFileCard";

export default function AudioUpload() {
  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const fileInputRef =
    useRef<HTMLInputElement>(null);

  function handleBrowseClick() {
    fileInputRef.current?.click();
  }

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedFile(file);
    }
  }

  function removeFile() {
    setSelectedFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  async function handleContinue() {
    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    navigate("/review");
  }

  return (
    <>
      <Card className="mt-8">
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-lg py-16 px-8 text-center">
          <div className="bg-blue-100 p-5 rounded-full mb-5">
            <Mic
              size={36}
              className="text-blue-600"
            />
          </div>

          <h2 className="text-xl font-semibold">
            Upload Audio Recording
          </h2>

          <p className="text-slate-600 mt-3 max-w-md">
            Capture operational experience by uploading
            an audio recording.
          </p>

          <input
            ref={fileInputRef}
            type="file"
            accept=".mp3,.wav,.m4a"
            className="hidden"
            onChange={handleFileChange}
          />

          <Button
            className="mt-8 flex items-center gap-2"
            onClick={handleBrowseClick}
          >
            <Upload size={18} />
            Browse Files
          </Button>

          <p className="mt-5 text-sm text-slate-500">
            Maximum file size: 25 MB
          </p>
        </div>
      </Card>

      {selectedFile && (
        <SelectedFileCard
          file={selectedFile}
          onRemove={removeFile}
          onContinue={handleContinue}
          loading={loading}
        />
      )}
    </>
  );
}