import { useRef, useState } from "react";
import {
  Upload,
  FileStack,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMemory } from "../../context/MemoryContext";
import ProcessingOverlay from "./ProcessingOverlay";

import Button from "../ui/Button";
import Card from "../ui/Card";
import SelectedFileCard from "./SelectedFileCard";

export default function AudioUpload() {
  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const navigate = useNavigate();

  const { addRecord } = useMemory();

  const [loading, setLoading] = useState(false);

  const [currentStep, setCurrentStep] = useState(0);

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
    if (!selectedFile) return;

    setLoading(true);
    setCurrentStep(0);

    const wait = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    await wait(800);

    setCurrentStep(1);
    await wait(1000);

    setCurrentStep(2);
    await wait(1200);

    setCurrentStep(3);
    await wait(1000);

    setCurrentStep(4);
    await wait(800);

    addRecord({
      id: Date.now(),
      title: selectedFile.name.replace(/\.[^/.]+$/, ""),
      department: "Pending Review",
      transcript:
        "Industrial knowledge will be extracted from uploaded documents using AI-powered entity extraction and document intelligence.",
      tags: ["Document", "AI Extracted"],
      approved: false,
      recentlyAdded: true,
    });

    navigate("/review");
  }

  return (
    <>
      <Card className="mt-8">
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-lg py-16 px-8 text-center">
          <div className="bg-blue-100 p-5 rounded-full mb-5">
            <FileStack
              size={36}
              className="text-blue-600"
            />
          </div>

          <h2 className="text-xl font-semibold">
            Upload Industrial Documents
          </h2>

          <p className="text-slate-600 mt-3 max-w-md">
            Upload engineering drawings, maintenance records,
            inspection reports, SOPs, OEM manuals, spreadsheets,
            or other industrial documents for AI knowledge extraction.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-xl">
            {[
              "PDF",
              "P&ID",
              "SOP",
              "Inspection",
              "Maintenance",
              "Work Order",
              "Excel",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.png,.jpg,.jpeg"
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
            Supported formats: PDF, DOCX, XLSX, CSV, PNG, JPG
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

      {loading && (
        <ProcessingOverlay
          currentStep={currentStep}
        />
      )}

    </>
  );
}