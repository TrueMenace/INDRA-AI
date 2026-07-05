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

export default function Home() {
  return (
    <>
      <PageHeader
        title="Enterprise Operational Memory System"
        description="Transform operational experience into reusable organizational intelligence."
      />

      {/* Hero Section */}
      <Card className="mb-8">
        <div className="flex items-center justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900">
              Preserve knowledge before it disappears.
            </h2>

            <p className="mt-4 text-slate-600">
              Capture operational experience through voice,
              transform it into structured knowledge using AI,
              validate it, and make it reusable across the organization.
            </p>

            <Link to="/capture">
              <Button className="mt-6">
                Capture Knowledge
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-6 mb-8">

        <Card>
          <Mic className="text-blue-600 mb-4" size={30} />

          <h3 className="font-semibold text-lg">
            Capture Knowledge
          </h3>

          <p className="mt-2 text-slate-600">
            Upload operational experience using voice recordings.
          </p>
        </Card>

        <Card>
          <Database className="text-blue-600 mb-4" size={30} />

          <h3 className="font-semibold text-lg">
            Enterprise Memory
          </h3>

          <p className="mt-2 text-slate-600">
            Browse validated organizational knowledge.
          </p>
        </Card>

        <Card>
          <MessageSquare className="text-blue-600 mb-4" size={30} />

          <h3 className="font-semibold text-lg">
            Ask Memory
          </h3>

          <p className="mt-2 text-slate-600">
            Ask questions and retrieve operational intelligence.
          </p>
        </Card>

      </div>

      {/* Workflow */}

      <Card>

        <h2 className="text-xl font-semibold mb-6">
          Knowledge Lifecycle
        </h2>

        <div className="flex items-center justify-between text-center">

          {[
            "Capture",
            "Extract",
            "Clarify",
            "Review",
            "Store",
            "Reuse",
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