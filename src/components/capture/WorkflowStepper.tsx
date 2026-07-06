const workflowSteps = [
  "Upload",
  "Transcription",
  "AI Extraction",
  "Review",
  "Store",
];

export default function WorkflowStepper() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-slate-900 mb-6">
        Knowledge Capture Workflow
      </h2>

      <div className="flex items-center justify-between">
        {workflowSteps.map((step, index) => (
          <div
            key={step}
            className="flex items-center flex-1"
          >
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  font-semibold
                  ${
                    index === 0
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200 text-slate-600"
                  }
                `}
              >
                {index + 1}
              </div>

              <span className="mt-3 text-sm font-medium text-slate-700">
                {step}
              </span>
            </div>

            {index < workflowSteps.length - 1 && (
              <div className="flex-1 h-1 bg-slate-200 mx-3 rounded" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}