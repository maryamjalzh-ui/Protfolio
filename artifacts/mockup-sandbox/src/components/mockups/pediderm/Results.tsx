import { ArrowLeft, ScanLine, History, Settings, Home, CheckCircle, AlertTriangle, ChevronRight, Download, Share2, Microscope, Stethoscope, Info } from "lucide-react";

const NAV = [
  { icon: Home, label: "Home", active: false },
  { icon: ScanLine, label: "New Scan", active: true },
  { icon: History, label: "History", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const DIAGNOSES = [
  { name: "Atopic Dermatitis", confidence: 94, color: "teal" },
  { name: "Contact Dermatitis", confidence: 62, color: "gray" },
  { name: "Psoriasis", confidence: 41, color: "gray" },
  { name: "Tinea Corporis", confidence: 28, color: "gray" },
];

const SYMPTOMS = ["Erythema (redness)", "Pruritus (itching)", "Lichenification", "Xerosis (dry skin)"];
const RECOMMENDATIONS = [
  "Avoid known allergens and irritants",
  "Apply prescribed emollient twice daily",
  "Schedule follow-up with dermatologist",
  "Monitor symptom progression for 2 weeks",
];

export function Results() {
  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-800 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col py-6 flex-shrink-0">
        <div className="px-5 mb-8 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
            <Microscope className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-bold text-sm text-gray-900 leading-none">PediDerm</p>
            <p className="text-[10px] text-gray-400 mt-0.5">Scan v2.1</p>
          </div>
        </div>
        <nav className="flex-1 px-3 space-y-0.5">
          {NAV.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active ? "bg-teal-50 text-teal-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>
        <div className="px-4 mt-6">
          <div className="rounded-xl bg-teal-600 p-4 text-white">
            <p className="text-xs font-semibold mb-1">Model Version</p>
            <p className="text-lg font-bold">v4.2</p>
            <p className="text-xs opacity-75 mt-1">9 condition types · ~90% accuracy</p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center gap-4 flex-shrink-0">
          <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ArrowLeft className="w-4 h-4 text-gray-500" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-gray-900">Scan Results</h1>
            <p className="text-xs text-gray-400 mt-0.5">Scan ID: SC-0042 · Nov 19, 2025 · 09:41 AM</p>
          </div>
          <button className="flex items-center gap-2 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors">
            <Share2 className="w-3.5 h-3.5" /> Export Report
          </button>
          <button className="flex items-center gap-2 text-xs font-medium text-white bg-teal-600 rounded-lg px-3 py-2 hover:bg-teal-700 transition-colors">
            <Download className="w-3.5 h-3.5" /> Download PDF
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-5 gap-5">
              {/* Left: Image + top match */}
              <div className="col-span-2 space-y-4">
                {/* Scanned image */}
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                  <div className="bg-gray-900 h-48 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Simulated scan image */}
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-rose-200 via-orange-100 to-amber-100 opacity-80 blur-sm" />
                      <div className="absolute w-20 h-20 rounded-full bg-rose-300 opacity-60" />
                    </div>
                    <div className="absolute top-2 right-2 bg-teal-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">ANALYZED</div>
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-semibold text-gray-700">patient_arm_scan.jpg</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">2.4 MB · Right forearm · Natural light</p>
                  </div>
                </div>

                {/* Primary diagnosis card */}
                <div className="bg-teal-600 rounded-2xl p-5 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-xs font-semibold opacity-80 uppercase tracking-wider">Primary Diagnosis</span>
                  </div>
                  <p className="text-xl font-bold leading-tight">Atopic Dermatitis</p>
                  <p className="text-xs opacity-70 mt-1 mb-4">Chronic inflammatory skin condition</p>
                  <div className="bg-white/20 rounded-xl p-3">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-medium">Confidence</span>
                      <span className="text-lg font-bold">94%</span>
                    </div>
                    <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: "94%" }} />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xs bg-amber-400/30 text-amber-100 px-2 py-0.5 rounded-full font-medium">Moderate Severity</span>
                  </div>
                </div>
              </div>

              {/* Right: Details */}
              <div className="col-span-3 space-y-4">
                {/* All diagnoses */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                  <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-teal-600" />
                    Differential Diagnoses
                  </h3>
                  <div className="space-y-3">
                    {DIAGNOSES.map((d, i) => (
                      <div key={d.name}>
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-sm font-medium ${i === 0 ? "text-teal-700" : "text-gray-600"}`}>{d.name}</span>
                          <span className={`text-sm font-bold ${i === 0 ? "text-teal-700" : "text-gray-500"}`}>{d.confidence}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${i === 0 ? "bg-teal-500" : "bg-gray-300"}`}
                            style={{ width: `${d.confidence}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Identified symptoms */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                  <h3 className="text-sm font-bold text-gray-800 mb-3">Identified Symptoms</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {SYMPTOMS.map((s) => (
                      <div key={s} className="flex items-center gap-2 bg-teal-50 rounded-lg px-3 py-2">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                        <span className="text-xs text-teal-800 font-medium">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                  <h3 className="text-sm font-bold text-gray-800 mb-3">Clinical Recommendations</h3>
                  <div className="space-y-2">
                    {RECOMMENDATIONS.map((r, i) => (
                      <div key={i} className="flex items-start gap-3 py-1.5">
                        <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">{i + 1}</div>
                        <p className="text-sm text-gray-600">{r}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-700">This result is AI-generated and intended for clinical support only. A qualified healthcare professional must confirm any diagnosis before treatment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
