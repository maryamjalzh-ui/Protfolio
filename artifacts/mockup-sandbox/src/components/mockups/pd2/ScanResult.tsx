import { Microscope, Home, UserPlus, User, LogOut, ArrowLeft, CheckCircle, AlertTriangle, Activity, Baby, Calendar, ScanLine, Download, Share2, ChevronRight } from "lucide-react";

const DIAGNOSES = [
  { name: "Chickenpox", confidence: 89.34, primary: true },
  { name: "Atopic Dermatitis", confidence: 52.1, primary: false },
  { name: "Urticaria", confidence: 31.4, primary: false },
  { name: "Impetigo", confidence: 18.2, primary: false },
];

const SYMPTOMS = ["Vesicular rash", "Pruritus (itching)", "Erythema (redness)", "Widespread distribution"];

const RECOMMENDATIONS = [
  "Keep the child away from others to prevent spread",
  "Apply calamine lotion to relieve itching",
  "Consult a pediatric dermatologist promptly",
  "Monitor for fever or complications over 48 hours",
];

export function ScanResult() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col py-6 flex-shrink-0">
        <div className="px-5 mb-8 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
            <Microscope className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-bold text-sm text-gray-900 leading-none">PediDermScan</p>
            <p className="text-[10px] text-gray-400 mt-0.5">Skin Detection Platform</p>
          </div>
        </div>
        <nav className="flex-1 px-3 space-y-0.5">
          {[
            { icon: Home, label: "Dashboard", active: false },
            { icon: UserPlus, label: "Add Child", active: true },
            { icon: User, label: "Profile", active: false },
          ].map(({ icon: Icon, label, active }) => (
            <button key={label} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active ? "bg-teal-50 text-teal-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"}`}>
              <Icon className="w-4 h-4" />{label}
            </button>
          ))}
        </nav>
        <div className="px-3">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center gap-4 flex-shrink-0">
          <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ArrowLeft className="w-4 h-4 text-gray-400" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-gray-900">Prediction Result</h1>
            <p className="text-xs text-gray-400 mt-0.5">Scan ID: PDX-2025-0441 · May 4, 2025 · 04:47 AM</p>
          </div>
          <button className="flex items-center gap-2 text-xs font-medium text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors">
            <Share2 className="w-3.5 h-3.5" /> Share
          </button>
          <button className="flex items-center gap-2 text-xs font-semibold text-white bg-teal-500 hover:bg-teal-600 rounded-lg px-4 py-2 transition-colors shadow-sm">
            <Download className="w-3.5 h-3.5" /> Export PDF
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto grid grid-cols-5 gap-5">
            {/* Left */}
            <div className="col-span-2 space-y-4">
              {/* Child info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Child Profile</p>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-teal-100 border border-teal-200 flex items-center justify-center">
                    <Baby className="w-7 h-7 text-teal-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Sarah</p>
                    <p className="text-gray-400 text-sm">6 years old</p>
                  </div>
                </div>
                <div className="space-y-2.5 border-t border-gray-100 pt-4">
                  {[
                    { label: "Medical History", value: "None reported" },
                    { label: "Scan Date", value: "2025-05-04 04:47" },
                    { label: "Body Region", value: "Face" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between">
                      <span className="text-gray-400 text-xs">{label}</span>
                      <span className="text-gray-700 text-xs font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary result */}
              <div className="bg-teal-600 rounded-2xl p-5 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-teal-200" />
                  <span className="text-xs font-bold text-teal-200 uppercase tracking-wider">Primary Diagnosis</span>
                </div>
                <p className="text-2xl font-black mb-1">Chickenpox</p>
                <p className="text-teal-200 text-xs mb-5">Varicella-zoster virus infection</p>
                <div className="bg-white/15 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-teal-100 text-xs">Confidence</span>
                    <span className="text-2xl font-black">89.34%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full" style={{ width: "89.34%" }} />
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-xs bg-amber-400/30 text-amber-100 border border-amber-400/20 px-3 py-1 rounded-full font-semibold">Moderate Severity</span>
                </div>
              </div>

              {/* Symptoms */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Identified Signs</p>
                <div className="space-y-2">
                  {SYMPTOMS.map((s) => (
                    <div key={s} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="col-span-3 space-y-4">
              {/* Differential */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-teal-500" /> Differential Diagnoses
                </p>
                <div className="space-y-4">
                  {DIAGNOSES.map((d) => (
                    <div key={d.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-semibold ${d.primary ? "text-gray-900" : "text-gray-400"}`}>{d.name}</span>
                          {d.primary && <span className="text-[10px] bg-teal-100 text-teal-700 border border-teal-200 px-2 py-0.5 rounded-full font-bold">TOP MATCH</span>}
                        </div>
                        <span className={`text-sm font-bold ${d.primary ? "text-teal-600" : "text-gray-400"}`}>{d.confidence.toFixed(1)}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${d.primary ? "bg-teal-500" : "bg-gray-300"}`} style={{ width: `${d.confidence}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Clinical Recommendations</p>
                <div className="space-y-3">
                  {RECOMMENDATIONS.map((r, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-teal-100 text-teal-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                      <p className="text-sm text-gray-600 leading-relaxed">{r}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-700 leading-relaxed">This AI result is for clinical support only and is not a substitute for professional medical advice. Always consult a qualified pediatric dermatologist before starting treatment.</p>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: ScanLine, label: "Model Version", value: "v4.2" },
                  { icon: Calendar, label: "Processed", value: "04:47 AM" },
                  { icon: CheckCircle, label: "Status", value: "Completed" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-3">
                    <Icon className="w-4 h-4 text-gray-300" />
                    <div>
                      <p className="text-gray-400 text-[10px]">{label}</p>
                      <p className="text-gray-700 text-xs font-semibold mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
