import { Microscope, LayoutDashboard, Users, Activity, Database, LogOut, TrendingUp, Baby, ShieldCheck, Search, Filter, ChevronUp } from "lucide-react";

const PREDICTIONS = [
  { date: "2025-04-04 23:34", user: "Maryam Jalal", child: "Ali Ahmed", age: "4 yrs", disease: "Folliculitis", conf: 66.85 },
  { date: "2025-04-05 00:17", user: "Maryam Jalal", child: "Yasser Alsatibi", age: "3 yrs", disease: "Atopic Dermatitis", conf: 56.74 },
  { date: "2025-04-05 00:20", user: "Maryam Jalal", child: "Rayan Othman", age: "4 yrs", disease: "Atopic Dermatitis", conf: 79.33 },
  { date: "2025-04-05 00:26", user: "Tala Khalid", child: "Asmal Yasser", age: "6 yrs", disease: "Chickenpox", conf: 99.93 },
  { date: "2025-04-05 00:27", user: "Tala Khalid", child: "Raad Alqahtani", age: "4 yrs", disease: "Atopic Dermatitis", conf: 79.33 },
  { date: "2025-04-27 16:05", user: "Mayar Ibrahim", child: "Jr Mayar", age: "8 yrs", disease: "Chickenpox", conf: 75.12 },
  { date: "2025-05-04 04:30", user: "Jalal", child: "sarah", age: "6 yrs", disease: "Chickenpox", conf: 89.34 },
  { date: "2025-05-04 04:47", user: "dana", child: "sarah", age: "6 yrs", disease: "Chickenpox", conf: 89.34 },
];

const confColor = (c: number) => c >= 85 ? "text-teal-600" : c >= 65 ? "text-amber-600" : "text-orange-500";

const diseaseStyle: Record<string, string> = {
  Chickenpox: "bg-red-50 text-red-700 border-red-200",
  "Atopic Dermatitis": "bg-orange-50 text-orange-700 border-orange-200",
  Folliculitis: "bg-amber-50 text-amber-700 border-amber-200",
};

export function AdminPanel() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col py-6 flex-shrink-0">
        <div className="px-5 mb-6 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
            <Microscope className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-bold text-sm text-gray-900 leading-none">PediDermScan</p>
            <p className="text-[10px] text-gray-400 mt-0.5">Admin Console</p>
          </div>
        </div>

        {/* Admin badge */}
        <div className="px-4 mb-6">
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">A</div>
            <div>
              <p className="text-gray-800 text-sm font-semibold">Hi, Admin</p>
              <div className="flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3 h-3 text-indigo-500" />
                <p className="text-indigo-600 text-[10px] font-semibold">Super Admin</p>
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-0.5">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: true },
            { icon: Users, label: "User Accounts", active: false },
            { icon: Activity, label: "Prediction Results", active: false },
            { icon: Database, label: "Dataset Management", active: false },
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
            <h1 className="text-lg font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-xs text-gray-400 mt-0.5">PediDerm Scan · Skin Disease Detection Platform</p>
          </div>
          <button className="flex items-center gap-2 text-xs text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors">
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { icon: Users, label: "Total Users", value: "12", trend: "+3", color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100" },
              { icon: Baby, label: "Children", value: "28", trend: "+7", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
              { icon: Activity, label: "Predictions", value: "8", trend: "+2", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
              { icon: TrendingUp, label: "Avg Confidence", value: "79%", trend: "+4%", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
            ].map(({ icon: Icon, label, value, trend, color, bg, border }) => (
              <div key={label} className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className={`w-9 h-9 rounded-xl ${bg} border ${border} flex items-center justify-center mb-3`}>
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
                <p className="text-gray-400 text-xs mb-1">{label}</p>
                <div className="flex items-end gap-2">
                  <p className={`text-2xl font-black ${color}`}>{value}</p>
                  <div className="flex items-center gap-0.5 mb-0.5 text-teal-500">
                    <ChevronUp className="w-3 h-3" />
                    <span className="text-xs font-semibold">{trend}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Predictions table */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-gray-900">All Predictions</h2>
                <p className="text-gray-400 text-xs mt-0.5">{PREDICTIONS.length} total records</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-gray-300 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input className="pl-8 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg w-44 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-400 text-gray-600 placeholder-gray-300" placeholder="Search..." readOnly />
                </div>
                <button className="flex items-center gap-2 text-xs text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors">
                  <Filter className="w-3.5 h-3.5" /> Filter
                </button>
              </div>
            </div>

            {/* Header */}
            <div className="grid grid-cols-12 gap-3 px-6 py-3 bg-gray-50 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <div className="col-span-2">Date</div>
              <div className="col-span-2">User</div>
              <div className="col-span-2">Child</div>
              <div className="col-span-1">Age</div>
              <div className="col-span-3">Skin Disease</div>
              <div className="col-span-2 text-right">Confidence</div>
            </div>

            <div className="divide-y divide-gray-50">
              {PREDICTIONS.map((p, i) => (
                <div key={i} className="grid grid-cols-12 gap-3 px-6 py-3.5 items-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="col-span-2">
                    <p className="text-xs font-mono text-gray-400">{p.date}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm font-medium text-gray-700 truncate">{p.user}</p>
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-teal-100 text-teal-600 text-[10px] font-bold flex items-center justify-center flex-shrink-0">{p.child[0].toUpperCase()}</div>
                    <p className="text-sm text-gray-600 truncate">{p.child}</p>
                  </div>
                  <div className="col-span-1">
                    <p className="text-xs text-gray-400">{p.age}</p>
                  </div>
                  <div className="col-span-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${diseaseStyle[p.disease] ?? "bg-teal-50 text-teal-700 border-teal-100"}`}>{p.disease}</span>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className={`text-sm font-black ${confColor(p.conf)}`}>{p.conf.toFixed(2)}%</span>
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
