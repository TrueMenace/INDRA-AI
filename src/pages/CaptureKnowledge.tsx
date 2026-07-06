import PageHeader from "../components/ui/PageHeader";
import WorkflowStepper from "../components/capture/WorkflowStepper";
import AudioUpload from "../components/capture/AudioUpload";

export default function CaptureKnowledge() {
  return (
    <>
      <PageHeader
        title="Capture Knowledge"
        description="Upload operational experience and transform it into reusable enterprise knowledge."
      />

      <WorkflowStepper />
      <AudioUpload />
    </>
  );
}