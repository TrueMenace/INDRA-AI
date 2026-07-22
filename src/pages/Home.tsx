import { Link } from "react-router-dom";
import {
  Mic,
  Database,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import PageHeader from "../components/ui/PageHeader";
import { useMemory } from "../context/MemoryContext";
import StatCard from "../components/dashboard/StatCard";
import RecentActivityCard from "../components/dashboard/RecentActivityCard";

export default function Home() {

  const { records } = useMemory();

  const totalRecords = records.length;

  const approvedRecords = records.filter(
    (record) => record.approved
  ).length;

  const pendingRecords = records.filter(
    (record) => !record.approved
  ).length;

  const departments = new Set(
    records.map((record) => record.department)
  ).size;

  return (
    <>
      <PageHeader
        title="Industrial Knowledge Intelligence Platform"
        description="Unify engineering documents, maintenance records, operating procedures, and expert knowledge into a single AI-powered operational intelligence platform."
      />

      {/* Hero Section */}
      <Card className="mb-8">
        <div className="flex items-center justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900">
              Transform fragmented industrial knowledge into operational intelligence.
            </h2>

            <p className="mt-4 text-slate-600">
              Ingest engineering drawings, maintenance records, SOPs, inspection reports, and operational documents. AI extracts relationships, validates knowledge, and delivers actionable insights across the asset lifecycle.
            </p>

            <Link to="/capture">
              <Button className="mt-6">
                Ingest Documents
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Live Dashboard */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        <StatCard
          title="Industrial Assets"
          value={totalRecords}
          description="Knowledge entities indexed"
        />

        <StatCard
          title="Pending Validation"
          value={pendingRecords}
          description="Awaiting expert review"
        />

        <StatCard
          title="Validated Knowledge"
          value={approvedRecords}
          description="AI verified records"
        />

        <StatCard
          title="Business Functions"
          value={departments}
          description="Connected knowledge sources"
        />

      </div>

      <div className="mb-8">
        <RecentActivityCard records={records} />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-6 mb-8">

        <Card>
          <Mic className="text-blue-600 mb-4" size={30} />

          <h3 className="font-semibold text-lg">
            Knowledge Ingestion
          </h3>

          <p className="mt-2 text-slate-600">
            Upload PDFs, P&IDs, inspection reports, maintenance logs, spreadsheets, and SOPs.
          </p>
        </Card>

        <Card>
          <Database className="text-blue-600 mb-4" size={30} />

          <h3 className="font-semibold text-lg">
            Knowledge Repository
          </h3>

          <p className="mt-2 text-slate-600">
            Explore connected engineering knowledge across assets, documents, and operational history.
          </p>
        </Card>

        <Card>
          <MessageSquare className="text-blue-600 mb-4" size={30} />

          <h3 className="font-semibold text-lg">
            Industrial Copilot
          </h3>

          <p className="mt-2 text-slate-600">
            Ask questions and retrieve operational intelligence.
          </p>
        </Card>

      </div>

      {/* Workflow */}

      <Card>

        <h2 className="text-xl font-semibold mb-6">
          Industrial Knowledge Intelligence Pipeline
        </h2>

        <div className="flex items-center justify-between text-center">

          {[
            "Ingest",
            "Extract",
            "Link",
            "Validate",
            "Index",
            "Assist",
          ].map((step, index) => (
            <div
              key={step}
              className="flex items-center"
            >
              <div className="bg-blue-100 text-blue-700 px-4 py-3 rounded-lg font-medium">
                {step}
              </div>

              {index < 5 && (
                <ArrowRight
                  className="mx-3 text-slate-400"
                  size={18}
                />
              )}
            </div>
          ))}

        </div>

      </Card>
    </>
  );
}