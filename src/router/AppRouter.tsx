import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import CaptureKnowledge from "../pages/CaptureKnowledge";
import ReviewApprove from "../pages/ReviewApprove";
import EnterpriseMemory from "../pages/EnterpriseMemory";
import AskMemory from "../pages/AskMemory";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}