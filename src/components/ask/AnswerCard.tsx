import Card from "../ui/Card";
import {
  Brain,
  CheckCircle2,
  FileText,
  Lightbulb,
} from "lucide-react";

interface AnswerCardProps {
  answer: string;
}

export default function AnswerCard({
  answer,
}: AnswerCardProps) {
  return (
    <Card>
      <div className="flex items-center gap-3 mb-6">
        <Brain
          size={28}
          className="text-blue-600"
        />

        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            INDRA AI Analysis
          </h2>

          <p className="text-sm text-slate-500">
            AI-generated response based on validated industrial knowledge.
          </p>
        </div>
      </div>

      <div className="space-y-6">

        {/* AI Summary */}

        <div>
          <h3 className="flex items-center gap-2 font-semibold text-slate-800">
            <Brain
              size={18}
              className="text-blue-600"
            />

            AI Summary
          </h3>

          <p className="mt-3 leading-7 text-slate-700">
            {answer}
          </p>
        </div>

        {/* Supporting Evidence */}

        <div>
          <h3 className="flex items-center gap-2 font-semibold text-slate-800">
            <FileText
              size={18}
              className="text-green-600"
            />

            Supporting Evidence
          </h3>

          <ul className="mt-3 space-y-2 text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2
                size={16}
                className="text-green-600"
              />
              Validated maintenance records
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2
                size={16}
                className="text-green-600"
              />
              Inspection reports
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2
                size={16}
                className="text-green-600"
              />
              Engineering SOPs
            </li>
          </ul>
        </div>

        {/* Recommendations */}

        <div className="rounded-xl bg-blue-50 border border-blue-100 p-5">
          <h3 className="flex items-center gap-2 font-semibold text-blue-800">
            <Lightbulb size={18} />

            AI Recommendations
          </h3>

          <ul className="mt-3 space-y-2 text-blue-900">
            <li>
              • Review related maintenance history before the next shutdown.
            </li>

            <li>
              • Compare similar incidents across connected assets.
            </li>

            <li>
              • Schedule preventive inspection if recurring patterns are detected.
            </li>
          </ul>
        </div>

      </div>
    </Card>
  );
}