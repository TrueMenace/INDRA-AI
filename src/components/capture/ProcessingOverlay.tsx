import {
  CheckCircle2,
  Loader2,
  Circle,
} from "lucide-react";

import Card from "../ui/Card";

interface ProcessingOverlayProps {
  currentStep: number;
}

const steps = [
  "Document Upload Complete",
  "OCR & Document Intelligence",
  "AI Entity Extraction",
  "Knowledge Graph Linking",
  "Open Expert Validation Workspace",
];

export default function ProcessingOverlay({
  currentStep,
}: ProcessingOverlayProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <Card className="w-full max-w-xl p-8">

        <h2 className="text-2xl font-bold">
          AI Processing
        </h2>

        <p className="mt-2 text-slate-600">
          Analyzing industrial documents, extracting engineering knowledge,
          linking related assets, and preparing AI-generated insights...
        </p>

        <div className="mt-8 space-y-5">

          {steps.map((step, index) => {

            const completed = index < currentStep;

            const active = index === currentStep;

            return (
              <div
                key={step}
                className="flex items-center gap-4"
              >
                {completed ? (
                  <CheckCircle2
                    className="text-green-600"
                    size={22}
                  />
                ) : active ? (
                  <Loader2
                    className="animate-spin text-blue-600"
                    size={22}
                  />
                ) : (
                  <Circle
                    className="text-slate-400"
                    size={22}
                  />
                )}

                <span
                  className={
                    completed || active
                      ? "font-medium"
                      : "text-slate-500"
                  }
                >
                  {step}
                </span>
              </div>
            );
          })}

        </div>

      </Card>

    </div>
  );
}