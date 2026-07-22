import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import KnowledgeNode from "../components/knowledge/KnowledgeNode";
import RelationshipPanel from "../components/knowledge/RelationshipPanel";
import KnowledgeConnection from "../components/knowledge/KnowledgeConnection";

import {
  Search,
  Cog,
  FileText,
  Wrench,
  AlertTriangle,
  Users,
} from "lucide-react";

export default function KnowledgeGraph() {
  return (
    <>
      <PageHeader
        title="Knowledge Graph Explorer"
        description="Explore AI-discovered relationships between industrial assets, engineering documents, maintenance history, incidents, and expert knowledge."
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="xl:col-span-2 space-y-6">

          <Card>
            <div className="relative">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search equipment, work orders, documents, incidents..."
                className="w-full rounded-lg border border-slate-300 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold text-slate-800 mb-8">
              Interactive Knowledge Relationships
            </h2>

            <div className="flex flex-col items-center">

              <KnowledgeNode
                title="Pump-101"
                subtitle="Critical Asset"
                icon={Cog}
                color="bg-blue-100 text-blue-700"
              />

              <KnowledgeConnection />

              <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">

                <KnowledgeNode
                  title="Maintenance SOP"
                  subtitle="Engineering Document"
                  icon={FileText}
                  color="bg-green-100 text-green-700"
                />

                <KnowledgeNode
                  title="WO-2458"
                  subtitle="Work Order"
                  icon={Wrench}
                  color="bg-amber-100 text-amber-700"
                />

                <KnowledgeNode
                  title="Inspection"
                  subtitle="Quality Report"
                  icon={FileText}
                  color="bg-cyan-100 text-cyan-700"
                />

              </div>

              <KnowledgeConnection label="Linked Knowledge" />

              <KnowledgeNode
                title="Bearing Failure"
                subtitle="Root Cause Event"
                icon={AlertTriangle}
                color="bg-red-100 text-red-700"
              />

              <KnowledgeConnection />

              <KnowledgeNode
                title="Maintenance Team"
                subtitle="Responsible Experts"
                icon={Users}
                color="bg-violet-100 text-violet-700"
              />

            </div>
          </Card>

        </div>

        {/* Right Section */}
        <RelationshipPanel />

      </div>
    </>
  );
}