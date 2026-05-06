import { ScanLine, History as HistoryIcon, Settings, Home, Search, Filter, ChevronRight, TrendingUp, Calendar, Microscope, Eye } from "lucide-react";

const NAV = [
  { icon: Home, label: "Home", active: false },
  { icon: ScanLine, label: "New Scan", active: false },
  { icon: HistoryIcon, label: "History", active: true },
  { icon: Settings, label: "Settings", active: false },
];

const SCANS = [
  { id: "SC-0042", date: "Nov 19, 2025", time: "09:41 AM", diagnosis: "Atopic Dermatitis", conf: 94, severity: "Moderate", region: "Right forearm", colorClass: "amber" },
  { id: "SC-0041", date: "Nov 18, 2025", time: "02:15 PM", diagnosis: "Atopic Dermatitis", conf: 91, severity: "Moderate", region: "Left arm", colorClass: "amber" },
  { id: "SC-0040", date: "Nov 15, 2025", time: "11:02 AM", diagnosis: "Tinea Corporis", conf: 88, severity: "Mild", region: "Torso", colorClass: "green" },
  { id: "SC-0039", date: "Nov 10, 2025", time: "03:30 PM", diagnosis: "Psoriasis", conf: 91, severity: "Moderate", region: "Scalp", colorClass: "amber" },
  { id: "SC-0038", date: "Nov 5, 2025",  time: "09:00 AM", diagnosis: "Contact Dermatitis", conf: 85, severity: "Mild", region: "Hands", colorClass: "green" },
  { id: "SC-0037", date: "Oct 29, 2025", time: "01:45 PM", diagnosis: "Impetigo", conf: 79, severity: "Severe", region: "Face", colorClass: "red" },
  { id: "SC-0036", date: "Oct 22, 2025", time: "10:10 AM", diagnosis: "Eczema", conf: 96, severity: "Mild", region: "Neck", colorClass: "green" },
];

const severityStyle: Record<string, string> = {
  Mild: "bg-green-50 text-green-700",
  Moderate: "bg-amber-50 text-amber-700",
  Severe: "bg-red-50 text-red-700",
};

const confColor = (c: number) => c >= 90 ? "text-teal-700" : c >= 75 ? "text-amber-600" : "text-gray-500";

export function History() {
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
        {/* Mini stats */}
        <div className="px-4 mt-6 space-y-2">
          <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">Total Scans</p>
            <p className="text-2xl font-bold text-gray-800">42</p>
          </div>
          <div className="bg-teal-50 rounded-xl p-3 border border-teal-100">
            <p className="text-[10px] text-teal-600 font-medium uppercase tracking-wider mb-1">Avg Confidence</p>
            <p className="text-2xl font-bold text-teal-700">89%</p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center gap-4 flex-shrink-0">
          <div className="flex-1">
            <h1 className="text-lg font-bold text-gray-900">Scan History</h1>
            <p className="text-xs text-gray-400 mt-0.5">42 total scans · Last 90 days</p>
          </div>
          {/* Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              className="pl-8 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg w-52 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400"
              placeholder="Search diagnoses..."
              readOnly
            />
          </div>
          <button className="flex items-center gap-2 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
          <button className="flex items-center gap-2 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors">
            <Calendar className="w-3.5 h-3.5" /> Date range
          </button>
        </header>

        {/* Stats row */}
        <div className="px-8 py-4 bg-white border-b border-gray-100 flex gap-6 flex-shrink-0">
          {[
            { label: "Atopic Dermatitis", count: 18, pct: 43 },
            { label: "Psoriasis", count: 9, pct: 21 },
            { label: "Tinea Corporis", count: 7, pct: 17 },
            { label: "Other conditions", count: 8, pct: 19 },
          ].map((stat) => (
            <div key={stat.label} className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-500 truncate">{stat.label}</span>
                <span className="text-xs font-semibold text-gray-700 ml-2">{stat.count}</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-teal-400 rounded-full" style={{ width: `${stat.pct}%` }} />
              </div>
            </div>
          ))}
          <div className="flex items-center gap-1.5 ml-2">
            <TrendingUp className="w-4 h-4 text-teal-500" />
            <span className="text-xs text-teal-600 font-semibold">+12% vs last month</span>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-12 gap-4 px-5 py-3 bg-gray-50 border-b border-gray-200 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
              <div className="col-span-1">ID</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-3">Diagnosis</div>
              <div className="col-span-2">Body Region</div>
              <div className="col-span-1">Severity</div>
              <div className="col-span-1">Confidence</div>
              <div className="col-span-2 text-right">Action</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-100">
              {SCANS.map((scan) => (
                <div
                  key={scan.id}
                  className="grid grid-cols-12 gap-4 px-5 py-3.5 items-center hover:bg-gray-50 cursor-pointer transition-colors group"
                >
                  <div className="col-span-1">
                    <span className="text-xs font-mono text-gray-400">{scan.id}</span>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs font-medium text-gray-700">{scan.date}</p>
                    <p className="text-[10px] text-gray-400">{scan.time}</p>
                  </div>
                  <div className="col-span-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <ScanLine className="w-3 h-3 text-teal-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800 truncate">{scan.diagnosis}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-xs text-gray-500">{scan.region}</span>
                  </div>
                  <div className="col-span-1">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${severityStyle[scan.severity]}`}>
                      {scan.severity}
                    </span>
                  </div>
                  <div className="col-span-1">
                    <span className={`text-sm font-bold ${confColor(scan.conf)}`}>{scan.conf}%</span>
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <button className="flex items-center gap-1.5 text-xs text-teal-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity border border-teal-200 rounded-lg px-2.5 py-1.5 hover:bg-teal-50">
                      <Eye className="w-3 h-3" /> View <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
