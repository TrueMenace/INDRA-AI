import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import CaptureKnowledge from "../pages/CaptureKnowledge";
import ReviewApprove from "../pages/ReviewApprove";
import EnterpriseMemory from "../pages/EnterpriseMemory";
import AskMemory from "../pages/AskMemory";

import KnowledgeGraph from "../pages/KnowledgeGraph";
import MaintenanceIntelligence from "../pages/MaintenanceIntelligence";
import ComplianceIntelligence from "../pages/ComplianceIntelligence";
import LessonsLearned from "../pages/LessonsLearned";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/capture" element={<CaptureKnowledge />} />
          <Route path="/review" element={<ReviewApprove />} />
          <Route path="/memory" element={<EnterpriseMemory />} />
          <Route path="/ask" element={<AskMemory />} />

          <Route
            path="/knowledge-graph"
            element={<KnowledgeGraph />}
          />

          <Route
            path="/maintenance"
            element={<MaintenanceIntelligence />}
          />

          <Route
            path="/compliance"
            element={<ComplianceIntelligence />}
          />

          <Route
            path="/lessons"
            element={<LessonsLearned />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}