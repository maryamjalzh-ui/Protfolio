import { useState } from "react";
import { Upload as UploadIcon, ScanLine, History, Settings, Home, AlertCircle, Camera, FileImage, ChevronRight, Microscope } from "lucide-react";

const NAV = [
  { icon: Home, label: "Home", active: true },
  { icon: ScanLine, label: "New Scan", active: false },
  { icon: History, label: "History", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const RECENT = [
  { id: "SC-0041", date: "Nov 18, 2025", diagnosis: "Atopic Dermatitis", conf: 94, severity: "Moderate" },
  { id: "SC-0040", date: "Nov 15, 2025", diagnosis: "Tinea Corporis", conf: 88, severity: "Mild" },
  { id: "SC-0039", date: "Nov 10, 2025", diagnosis: "Psoriasis", conf: 91, severity: "Moderate" },
];

export function Upload() {
  const [dragging, setDragging] = useState(false);
  const [selected, setSelected] = useState(false);

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
                active
                  ? "bg-teal-50 text-teal-700"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
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
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between flex-shrink-0">
          <div>
            <h1 className="text-lg font-bold text-gray-900">New Scan</h1>
            <p className="text-xs text-gray-400 mt-0.5">Upload a skin image for AI-powered diagnosis</p>
          </div>
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-xs text-amber-700 font-medium">For clinical support only — not a substitute for medical advice</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Upload Zone */}
            <div
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={() => { setDragging(false); setSelected(true); }}
              onClick={() => setSelected(!selected)}
              className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all ${
                dragging
                  ? "border-teal-400 bg-teal-50"
                  : selected
                  ? "border-teal-500 bg-teal-50"
                  : "border-gray-200 bg-white hover:border-teal-300 hover:bg-gray-50"
              }`}
            >
              {selected ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
                    <FileImage className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">patient_arm_scan.jpg</p>
                    <p className="text-sm text-gray-400 mt-0.5">2.4 MB · Ready to scan</p>
                  </div>
                  <span className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">Click to change image</span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <UploadIcon className="w-7 h-7 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Drop your image here</p>
                    <p className="text-sm text-gray-400 mt-1">or click to browse files</p>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">JPG</span>
                    <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">PNG</span>
                    <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">HEIC</span>
                  </div>
                </div>
              )}
            </div>

            {/* OR divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Camera button */}
            <button className="w-full bg-white border border-gray-200 rounded-xl py-3.5 flex items-center justify-center gap-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              <Camera className="w-4 h-4 text-teal-600" />
              Capture with Camera
            </button>

            {/* Scan button */}
            <button
              className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all ${
                selected
                  ? "bg-teal-600 text-white shadow-md hover:bg-teal-700"
                  : "bg-gray-100 text-gray-300 cursor-not-allowed"
              }`}
            >
              Run AI Scan
            </button>

            {/* Recent Scans */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-bold text-gray-700">Recent Scans</h2>
                <button className="text-xs text-teal-600 font-medium flex items-center gap-1">View all <ChevronRight className="w-3 h-3" /></button>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
                {RECENT.map((scan) => (
                  <div key={scan.id} className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center mr-3 flex-shrink-0">
                      <ScanLine className="w-4 h-4 text-teal-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">{scan.diagnosis}</p>
                      <p className="text-xs text-gray-400">{scan.id} · {scan.date}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        scan.severity === "Mild" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"
                      }`}>{scan.severity}</span>
                      <span className="text-xs font-semibold text-teal-700">{scan.conf}%</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
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
