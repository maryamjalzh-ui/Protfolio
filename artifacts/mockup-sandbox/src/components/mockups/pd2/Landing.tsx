import { Microscope, Shield, Zap, ChevronRight, Activity, Users, Brain } from "lucide-react";

const STATS = [
  { value: "9", label: "Skin Conditions" },
  { value: "~90%", label: "Accuracy" },
  { value: "Free", label: "For Everyone" },
];

const FEATURES = [
  { icon: Brain, title: "Deep Learning AI", desc: "Trained on thousands of pediatric skin images for precise detection across 9 condition types." },
  { icon: Shield, title: "Safe & Private", desc: "Patient data is encrypted and never shared. Built with clinical security standards." },
  { icon: Zap, title: "Instant Results", desc: "Upload a photo and receive an AI-powered diagnosis in under 3 seconds." },
];

const CONDITIONS = ["Chickenpox", "Atopic Dermatitis", "Urticaria", "Psoriasis", "Impetigo", "Tinea Corporis", "Folliculitis", "Eczema", "Contact Dermatitis"];

export function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-10 py-4 flex items-center justify-between bg-white sticky top-0 z-20">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
            <Microscope className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-gray-900 tracking-tight">PediDermScan</span>
        </div>
        <div className="flex items-center gap-8 text-sm">
          <a className="text-teal-600 font-semibold cursor-pointer">Home</a>
          <a className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">About Us</a>
          <a className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">Collection</a>
          <a className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">Sign In</a>
        </div>
        <button className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2">
          Try it Free <ChevronRight className="w-4 h-4" />
        </button>
      </nav>

      {/* Hero — single column */}
      <section className="px-10 pt-20 pb-12 max-w-4xl mx-auto">
        <h1 className="text-6xl font-black leading-tight mb-6 text-gray-900">
          Skin Disease<br />
          Detection for<br />
          <span className="text-teal-500">Children & Newborns</span>
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl">
          Powered by deep learning and specialized image processing — fast, accurate, and designed for young patients.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-4 rounded-xl transition-colors flex items-center gap-2 shadow-sm text-base">
            Start Free Scan <ChevronRight className="w-5 h-5" />
          </button>
          <button className="text-gray-500 text-sm font-medium flex items-center gap-2 hover:text-gray-700 transition-colors">
            <Activity className="w-4 h-4 text-teal-400" /> See what's new
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-100 pt-10 max-w-sm">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-black text-teal-500 mb-1">{value}</div>
              <div className="text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>

        {/* Conditions */}
        <div className="mt-10 flex flex-wrap gap-2">
          {CONDITIONS.map((c) => (
            <span key={c} className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 bg-gray-50">{c}</span>
          ))}
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-10 py-5 flex items-center justify-between bg-gray-50">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-teal-500 flex items-center justify-center">
            <Microscope className="w-2.5 h-2.5 text-white" />
          </div>
          <span className="text-gray-400 text-xs">© 2025 PediDermScan. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-xs">
          <Users className="w-3 h-3" />
          Designers: Mayar Ibrahim, Maryam Jalal, Tala Khalid
        </div>
      </footer>
    </div>
  );
}
