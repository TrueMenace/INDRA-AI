import PageHeader from "../components/ui/PageHeader";
import WorkflowStepper from "../components/capture/WorkflowStepper";
import AudioUpload from "../components/capture/AudioUpload";

export default function CaptureKnowledge() {
  return (
    <>
      <PageHeader
        title="Knowledge Ingestion"
        description="Upload engineering drawings, maintenance records, SOPs, inspection reports, and industrial documents for AI-powered knowledge extraction."
      />

      <WorkflowStepper />
      <AudioUpload />
    </>
  );
}