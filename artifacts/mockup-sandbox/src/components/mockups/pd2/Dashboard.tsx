import { Microscope, Plus, Home, UserPlus, User, LogOut, Activity, Baby, TrendingUp, ChevronRight, Trash2, ScanLine, Clock } from "lucide-react";

const CHILDREN = [
  { name: "Ali Ahmed", age: "4 years", disease: "Folliculitis", confidence: "66.85%", date: "2025-04-04", initial: "A" },
  { name: "Yasser Alsatibi", age: "3 years", disease: "Atopic Dermatitis", confidence: "56.74%", date: "2025-04-05", initial: "Y" },
  { name: "Rayan Othman", age: "4 years", disease: "Atopic Dermatitis", confidence: "79.33%", date: "2025-04-05", initial: "R" },
  { name: "Sarah", age: "6 years", disease: "Chickenpox", confidence: "89.34%", date: "2025-05-04", initial: "S" },
];

const badgeColor: Record<string, string> = {
  "Folliculitis": "bg-amber-50 text-amber-700 border-amber-200",
  "Atopic Dermatitis": "bg-orange-50 text-orange-700 border-orange-200",
  "Chickenpox": "bg-red-50 text-red-700 border-red-200",
};

export function Dashboard() {
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

        {/* User chip */}
        <div className="px-4 mb-6">
          <div className="bg-teal-50 border border-teal-100 rounded-xl p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white font-bold text-sm">D</div>
            <div>
              <p className="text-gray-800 text-sm font-semibold">dana</p>
              <p className="text-gray-400 text-[10px]">Parent account</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-0.5">
          {[
            { icon: Home, label: "Dashboard", active: true },
            { icon: UserPlus, label: "Add Child", active: false },
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
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between flex-shrink-0">
          <div>
            <div className="text-xs text-teal-600 font-semibold mb-0.5">Login successful ✓</div>
            <h1 className="text-xl font-bold text-gray-900">Welcome back, dana</h1>
          </div>
          <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm">
            <Plus className="w-4 h-4" /> Add New Child
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-5 mb-8">
            {[
              { icon: Baby, label: "Total Children", value: "4", sub: "+1 this month", color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100" },
              { icon: Activity, label: "Total Predictions", value: "4", sub: "All completed", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
              { icon: TrendingUp, label: "Avg Confidence", value: "73%", sub: "Across all scans", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
            ].map(({ icon: Icon, label, value, sub, color, bg, border }) => (
              <div key={label} className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <p className="text-gray-400 text-sm mb-1">{label}</p>
                <p className={`text-3xl font-black ${color} mb-1`}>{value}</p>
                <p className="text-xs text-gray-400">{sub}</p>
              </div>
            ))}
          </div>

          {/* Medical History */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-gray-900">Medical History</h2>
                <p className="text-gray-400 text-xs mt-0.5">Previous Prediction</p>
              </div>
              <div className="flex items-center gap-1.5 text-teal-600 text-xs font-medium cursor-pointer">
                <Clock className="w-3.5 h-3.5" /> All records <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            <div className="divide-y divide-gray-50">
              {CHILDREN.map((c) => (
                <div key={c.name} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {c.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-gray-800 text-sm">{c.name}</p>
                      <span className="text-gray-400 text-xs">· {c.age}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <ScanLine className="w-3 h-3 text-gray-300" />
                      <span className="text-xs text-gray-400">{c.date}</span>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${badgeColor[c.disease] ?? "bg-teal-50 text-teal-700 border-teal-100"}`}>
                    {c.disease}
                  </span>
                  <div className="text-right w-16">
                    <p className="text-sm font-bold text-teal-600">{c.confidence}</p>
                    <p className="text-[10px] text-gray-400">confidence</p>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs text-teal-600 border border-teal-200 rounded-lg px-2.5 py-1.5 hover:bg-teal-50">
                    View <ChevronRight className="w-3 h-3" />
                  </button>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity w-7 h-7 flex items-center justify-center rounded-lg text-red-400 hover:bg-red-50 transition-colors">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Empty prompt */}
            <div className="px-6 py-5 border-t border-gray-50 flex items-center justify-between">
              <p className="text-sm text-gray-400">Want to add another child?</p>
              <button className="flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                <Plus className="w-4 h-4" /> Add Child
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
