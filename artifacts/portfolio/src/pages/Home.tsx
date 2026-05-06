import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, ExternalLink, Mail, Database, 
  Code, ShieldCheck, Briefcase, GraduationCap, 
  Terminal, BarChart, Cpu, Globe, ArrowRight, User,
  ZoomIn, X, FileText, ChevronRight
} from "lucide-react";
import { 
  SiPython, SiSwift,
  SiHtml5, SiJavascript 
} from "react-icons/si";
import { useRef, useState } from "react";

import certOracle1 from "@assets/Screenshot_1447-08-16_at_11.17.48_AM_1776782330940.png";
import certOracle2 from "@assets/Screenshot_1447-08-16_at_11.18.14_AM_1776782330940.png";
import certOracle3 from "@assets/Screenshot_1447-08-16_at_11.18.28_AM_1776782330940.png";
import certUipath from "@assets/Screenshot_1447-08-16_at_11.18.51_AM_1776782330940.png";
import haikLogo from "@assets/logoJaik_1778075336038.png";
import haikPreview1 from "@assets/fd278997-748c-4313-a4fe-f799d570625e_1778075742628.jpeg";
import haikPreview2 from "@assets/f7fb2ae1-7c8f-47d1-aca9-be0e5321112f_1778075747562.jpeg";
import haikPreview3 from "@assets/cb1274ca-5f79-42dd-a0ec-28835f7d7f8e_1778075752319.jpeg";
import haikPreview4 from "@assets/3507d54e-0ccd-4ca1-8b20-d79f5043f87f_1778075758638.jpeg";
import haikPreview5 from "@assets/8affd824-947b-4825-9a18-6e9d6a1746dc_1778075763304.jpeg";
import profileImage from "@assets/1756459273151_(1)_1778075461770.jpeg";
import recommendationLetter from "@assets/Screenshot_1447-11-19_at_5.00.15_PM_1778076022699.png";

const haikPreviews = [
  { src: haikPreview1, clip: "polygon(4% 1%, 98% 0%, 100% 96%, 1% 100%)" },
  { src: haikPreview2, clip: "polygon(0% 3%, 97% 0%, 99% 98%, 2% 100%)" },
  { src: haikPreview3, clip: "polygon(2% 0%, 100% 2%, 97% 100%, 0% 97%)" },
  { src: haikPreview4, clip: "polygon(1% 2%, 99% 0%, 100% 97%, 3% 100%)" },
  { src: haikPreview5, clip: "polygon(3% 0%, 100% 1%, 98% 100%, 0% 98%)" },
];
const certificates = [
  { img: certOracle1, title: "Data Platform Foundations Associate", issuer: "Oracle", date: "May 27, 2025" },
  { img: certOracle2, title: "OCI Foundations Associate", issuer: "Oracle", date: "June 11, 2025" },
  { img: certOracle3, title: "OCI AI Foundations Associate", issuer: "Oracle", date: "June 11, 2025" },
  { img: certUipath, title: "RPA Citizen Developer Foundation Training", issuer: "UiPath Academy", date: "May 9, 2023" },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [certLightbox, setCertLightbox] = useState<number | null>(null);
  const [pediLightbox, setPediLightbox] = useState<number | null>(null);
  const [haikLightbox, setHaikLightbox] = useState<number | null>(null);
  const [fdsLightbox, setFdsLightbox] = useState<number | null>(null);
  const fdsPreviews = ["/fds-preview-1.jpeg", "/fds-preview-2.jpeg"];

  return (
    <main className="min-h-[100dvh] w-full bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-6 sm:px-12 noise-bg overflow-hidden" id="hero">
        
        <div className="max-w-5xl w-full mx-auto relative z-20 flex flex-col items-start mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-4"
            data-testid="text-name"
          >
            Maryam J. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Aladwany</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
            data-testid="text-headline"
          >
            Data analyst and iOS developer with a track record of building automation and AI-powered solutions at scale.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <a 
              href="#contact" 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              data-testid="link-contact"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a 
              href="https://linkedin.com/in/maryam-jalal/" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 rounded-full font-medium border border-border flex items-center gap-2 hover:bg-secondary transition-colors"
              data-testid="link-linkedin"
            >
              <ExternalLink className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* 2. About Section */}
      <section className="py-32 px-6 sm:px-12 relative bg-secondary/30" id="about">
        <div className="max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <User className="text-primary w-6 h-6" />
                <h2 className="text-3xl font-bold">Profile</h2>
              </div>
              <div className="md:hidden w-16 h-16 rounded-full overflow-hidden glass-card p-1 flex-shrink-0">
                <img
                  src={profileImage}
                  alt="Maryam J. Aladwany"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A high-performing Computer Science graduate with First Class Honors, driven by the intersection of data science, app engineering, and automation.
              </p>
              <p>
                Currently, I am honing my iOS development skills at the prestigious Apple Developer Academy, while simultaneously applying my analytical prowess at Saudi Binladin Group.
              </p>
              <p>
                My professional philosophy centers on delivering precise, scalable solutions. Whether it's architecting an automated ML pipeline, designing a swift user-centric iOS app, or building interactive dashboards that drive corporate strategy, I believe in technology that works flawlessly and looks exceptional.
              </p>
            </div>
            <div className="mt-8 flex gap-6">
              <div>
                <p className="text-3xl font-bold text-foreground">4.81</p>
                <p className="text-xs font-mono text-primary uppercase tracking-wider">GPA</p>
              </div>
              <div className="w-[1px] bg-border"></div>
              <div>
                <p className="text-3xl font-bold text-foreground">1st</p>
                <p className="text-xs font-mono text-primary uppercase tracking-wider">Class Honors</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative hidden md:block"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative glass-card p-2 group max-w-xs mx-auto">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-10 pointer-events-none rounded-2xl"></div>
              <img
                src={profileImage}
                alt="Maryam Jalal Alzahrani"
                className="w-full h-full object-cover rounded-xl"
                data-testid="img-profile"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* 3. Skills Matrix */}
      <section className="py-32 px-6 sm:px-12 relative" id="skills">
        <div className="max-w-5xl w-full mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Technical Arsenal</h2>
            <div className="h-[1px] w-1/3 bg-gradient-to-r from-border to-transparent"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* 1 — AI & Deep Learning */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="glass-card p-5 rounded-2xl border-t-2 border-t-primary hover:-translate-y-2 transition-transform duration-300"
            >
              <Cpu className="w-8 h-8 text-primary mb-5" />
              <h3 className="font-bold text-base mb-4">AI & Deep Learning</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><SiPython className="text-blue-400" /> TensorFlow / Keras</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><SiPython className="text-orange-400" /> PyTorch</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><span className="w-3 h-3 bg-yellow-500 rounded-sm shrink-0"></span> scikit-learn</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><span className="w-3 h-3 bg-purple-500 rounded-sm shrink-0"></span> CNN / RNN</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0"></span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><span className="w-3 h-3 bg-teal-500 rounded-sm shrink-0"></span> Transformers</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0"></span>
                </li>
              </ul>
            </motion.div>

            {/* 2 — Data & Visualization */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-5 rounded-2xl border-t-2 border-t-primary/70 hover:-translate-y-2 transition-transform duration-300"
            >
              <BarChart className="w-8 h-8 text-primary/70 mb-5" />
              <h3 className="font-bold text-base mb-4">Data & Visualization</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><BarChart className="w-4 h-4 text-yellow-500" /> Power BI</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><SiPython className="text-blue-400" /> Python</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><Database className="w-4 h-4" /> SQL</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><span className="text-green-500 font-bold">X</span> Excel</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></span>
                </li>
              </ul>
            </motion.div>

            {/* 3 — Automation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-5 rounded-2xl border-t-2 border-t-primary/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <Cpu className="w-8 h-8 text-primary/50 mb-5" />
              <h3 className="font-bold text-base mb-4">Automation</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><span className="w-3 h-3 bg-blue-600 rounded shrink-0"></span> Power Automate</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><span className="w-3 h-3 bg-orange-500 rounded shrink-0"></span> UiPath (RPA)</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                </li>
              </ul>
            </motion.div>

            {/* 4 — App Development */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-5 rounded-2xl border-t-2 border-t-primary/30 hover:-translate-y-2 transition-transform duration-300"
            >
              <Code className="w-8 h-8 text-primary/30 mb-5" />
              <h3 className="font-bold text-base mb-4">App Development</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><SiSwift className="text-orange-500" /> Swift (iOS)</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><SiHtml5 className="text-orange-600" /> HTML / CSS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><SiJavascript className="text-yellow-400" /> JavaScript</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><SiPython className="text-blue-400" /> Python</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                </li>
              </ul>
            </motion.div>

            {/* 5 — Professional */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-5 rounded-2xl border-t-2 border-t-primary/20 hover:-translate-y-2 transition-transform duration-300"
            >
              <ShieldCheck className="w-8 h-8 text-primary/20 mb-5" />
              <h3 className="font-bold text-base mb-4">Professional</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Problem Solving</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Communication</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Teamwork</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Leadership</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Experience Section */}
      <section className="py-32 px-6 sm:px-12 relative bg-secondary/20" id="experience">
        <div className="max-w-5xl w-full mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
            <div className="h-[1px] flex-1 bg-border/50"></div>
          </div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-12 group"
              data-testid="card-experience-sbg"
            >
              <div className="text-muted-foreground font-mono text-sm pt-1 relative">
                <div className="hidden md:block absolute top-2 -right-6 w-3 h-3 rounded-full bg-primary z-10 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
                Feb 2026 – Present
              </div>
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden transition-all group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.05)] border-l-4 border-l-primary md:border-l-[1px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all"></div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-border/30 p-1.5">
                    <img src="/logo-exp1.png" alt="Saudi Binladin Group" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground leading-snug">Data Analyst</h3>
                    <p className="text-primary font-medium text-sm mt-0.5">Saudi Binladin Group (SBG) — King Fahd Sports City Stadium</p>
                  </div>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    <span>Designed Power Automate flows to process Aconex notifications, reducing processing time by 70%.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    <span>Developed HTML email parsing logic to extract structured fields into validated datasets for automated tracking.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    <span>Applied Python-based data cleaning/normalization; built interactive Power BI dashboards monitoring workflow status, document revisions, and review outcomes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    <span>Built the <span className="text-foreground font-medium">Files Distributor System (FDS)</span> — a PyQt6 desktop app that automated engineering document sorting across 70,000+ records, eliminating manual distribution effort for the team.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-12 group"
              data-testid="card-experience-aramco"
            >
              <div className="text-muted-foreground font-mono text-sm pt-1 relative">
                <div className="hidden md:block absolute top-2 -right-6 w-3 h-3 rounded-full bg-border z-10 group-hover:bg-primary/50 transition-colors"></div>
                Mar 2023 – May 2023
              </div>
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden transition-all group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.05)] border-l-4 border-l-border md:border-l-[1px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-all"></div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-border/30 p-1.5">
                    <img src="/logo-aramco.png" alt="Saudi Aramco" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground leading-snug">Data Analyst Intern</h3>
                    <p className="text-muted-foreground text-sm mt-0.5">Saudi Aramco</p>
                  </div>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-border mt-2 shrink-0 group-hover:bg-primary/50 transition-colors"></div>
                    <span>Automated a weekly Power BI dashboard using UiPath RPA, replacing manual Excel consolidation across departments.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-border mt-2 shrink-0 group-hover:bg-primary/50 transition-colors"></div>
                    <span>Developed presentations and digital materials used in senior management meetings and external visits.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Projects Section */}
      <section className="py-32 px-6 sm:px-12 relative" id="projects">
        <div className="max-w-5xl w-full mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Selected Projects</h2>
            <div className="h-[1px] flex-1 bg-border/50"></div>
          </div>

          <div className="hidden md:flex items-center justify-end gap-1.5 mb-4 text-muted-foreground/40">
            <span className="text-xs font-mono tracking-wide">swipe to explore</span>
            <ChevronRight className="w-4 h-4" />
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
            {/* 1 — Haik */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col w-full md:flex-shrink-0 md:w-[420px]"
              data-testid="card-project-haik"
            >
              {/* Logo header */}
              <div className="flex flex-col items-center justify-center gap-4 px-8 pt-8 pb-4 bg-gradient-to-b from-white/10 to-transparent">
                <img
                  src={haikLogo}
                  alt="Haik App Logo"
                  className="w-24 h-24 object-cover drop-shadow-lg"
                  style={{ borderRadius: "22%" }}
                />
                <a
                  href="https://apps.apple.com/sa/app/haik-%D8%AD%D9%8A-%D9%83/id6759011646"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="btn-appstore-haik"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="135" height="40" viewBox="0 0 135 40">
                    <rect width="135" height="40" rx="8" fill="#fff"/>
                    <rect width="133" height="38" x="1" y="1" rx="7.5" fill="none" stroke="#000" strokeOpacity=".15"/>
                    {/* Apple logo */}
                    <path d="M19.5 20.3c0-3.1 2.5-4.6 2.6-4.7-1.4-2-3.6-2.3-4.4-2.3-1.9-.2-3.6 1.1-4.6 1.1-.9 0-2.4-1.1-3.9-1-2 0-3.9 1.2-4.9 2.9-2.1 3.6-.5 9 1.5 11.9 1 1.4 2.2 3 3.7 2.9 1.5-.1 2-.9 3.8-.9 1.7 0 2.2.9 3.8.9 1.6 0 2.7-1.4 3.6-2.8.7-1 1.2-2.2 1.5-3.4-1.9-.8-3.3-2.7-3.3-5.6z" fill="#000" transform="translate(4,6) scale(0.75)"/>
                    <path d="M16.7 11.4c.8-1 1.4-2.4 1.2-3.8-1.2.1-2.6.8-3.5 1.8-.8.9-1.5 2.3-1.3 3.7 1.3.1 2.7-.7 3.6-1.7z" fill="#000" transform="translate(4,6) scale(0.75)"/>
                    {/* Download on the */}
                    <text x="32" y="16" fontFamily="-apple-system,BlinkMacSystemFont,'Helvetica Neue',sans-serif" fontSize="9" fill="#000" letterSpacing="0.1">Download on the</text>
                    {/* App Store */}
                    <text x="32" y="29" fontFamily="-apple-system,BlinkMacSystemFont,'Helvetica Neue',sans-serif" fontSize="16" fontWeight="600" fill="#000" letterSpacing="-0.3">App Store</text>
                  </svg>
                </a>
              </div>

              {/* App previews — clickable */}
              <div className="relative">
                <div className="flex gap-3 overflow-x-auto px-4 pb-4 pt-2" style={{ scrollbarWidth: "none" }}>
                {haikPreviews.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setHaikLightbox(i)}
                    className="flex-shrink-0 relative group/img focus:outline-none"
                  >
                    <img
                      src={item.src}
                      alt={`Haik App Preview ${i + 1}`}
                      className="h-56 w-auto object-cover transition-transform group-hover/img:scale-[1.02]"
                      style={{ borderRadius: 10 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/30 rounded-[10px]">
                      <ZoomIn className="w-6 h-6 text-white drop-shadow" />
                    </div>
                  </button>
                ))}
                </div>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-7 h-7 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow">
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 relative z-10 pt-2">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-foreground">Haik — حيّك</h3>
                  <span className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary rounded-full">Jan 2026</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-4">Location-based iOS Application — Apple Developer Academy TUWAIQ</p>
                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                  iOS app generating neighborhood recommendations based on lifestyle preferences. Designed custom weighted matching algorithm to rank neighborhoods dynamically, normalizing preference scores for highly tailored user experiences.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-muted-foreground border border-border">Swift</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-muted-foreground border border-border">iOS</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-muted-foreground border border-border">Algorithm Design</span>
                </div>
              </div>
            </motion.div>

            {/* FDS Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col w-full md:flex-shrink-0 md:w-[420px]"
              data-testid="card-project-fds"
            >
              {/* Logo header — same structure as other cards */}
              <div className="flex flex-col items-center justify-center gap-4 px-8 pt-8 pb-4 bg-gradient-to-b from-white/10 to-transparent">
                <div className="w-24 h-24 rounded-[22%] bg-white flex items-center justify-center shadow-lg border border-border/20 p-2 drop-shadow-lg">
                  <img src="/logo-exp1.png" alt="Saudi Binladin Group" className="w-full h-full object-contain" />
                </div>
                {/* Spacer matches Haik's App Store button height */}
                <div className="h-10" />
              </div>

              {/* Screenshot strip — same scrollable style as other cards */}
              <div className="relative">
                <div className="flex gap-3 overflow-x-auto px-4 pb-4 pt-2" style={{ scrollbarWidth: "none" }}>
                  {fdsPreviews.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setFdsLightbox(i)}
                      className="flex-shrink-0 relative group/img focus:outline-none"
                    >
                      <img
                        src={src}
                        alt={`Files Distributor System ${i + 1}`}
                        className="h-56 w-auto object-cover object-top transition-transform group-hover/img:scale-[1.02]"
                        style={{ borderRadius: 10 }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/30 rounded-[10px]">
                        <ZoomIn className="w-6 h-6 text-white drop-shadow" />
                      </div>
                    </button>
                  ))}
                </div>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-7 h-7 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow">
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 relative z-10 pt-2">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-foreground">Files Distributor System</h3>
                  <span className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary rounded-full">Apr 2026</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-4">Saudi Binladin Group — King Fahd Sports City Project</p>
                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                  Developed a Windows desktop application that automates the sorting and distribution of engineering documents based on Aconex metadata. Features a modern dark/light UI, real-time progress tracking, multithreaded processing, and automated Excel reporting — packaged as a standalone .exe for team-wide deployment without requiring Python installation.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-muted-foreground border border-border">Python</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-muted-foreground border border-border">PyQt6</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-muted-foreground border border-border">Pandas</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-muted-foreground border border-border">PyInstaller</span>
                </div>
              </div>
            </motion.div>

            {/* 3 — PediDermScan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col w-full md:flex-shrink-0 md:w-[420px]"
              data-testid="card-project-pedi"
            >
              {/* Logo header */}
              <div className="flex flex-col items-center justify-center gap-4 px-8 pt-8 pb-4 bg-gradient-to-b from-white/10 to-transparent">
                <img
                  src="/pediderm-logo.svg"
                  alt="PediDermScan Logo"
                  className="w-24 h-24 object-cover drop-shadow-lg"
                  style={{ borderRadius: "22%" }}
                />
                {/* Spacer to match Haik's App Store button height */}
                <div className="h-10" />
              </div>

              {/* App previews — clickable */}
              <div className="relative">
                <div className="flex gap-3 overflow-x-auto px-4 pb-4 pt-2" style={{ scrollbarWidth: "none" }}>
                {[
                  { src: "/pediderm-landing.jpeg", label: "Landing" },
                  { src: "/pediderm-dashboard.jpeg", label: "Dashboard" },
                  { src: "/pediderm-scan.jpeg", label: "Scan Result" },
                  { src: "/pediderm-admin.jpeg", label: "Admin Panel" },
                ].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setPediLightbox(i)}
                    className="flex-shrink-0 relative group/img focus:outline-none"
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      className="h-56 w-auto object-cover transition-transform group-hover/img:scale-[1.02]"
                      style={{ borderRadius: 10 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/30 rounded-[10px]">
                      <ZoomIn className="w-6 h-6 text-white drop-shadow" />
                    </div>
                  </button>
                ))}
                </div>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-7 h-7 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow">
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 relative z-10 pt-2">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-foreground">PediDermScan</h3>
                  <span className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary rounded-full">May 2025</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-4">Pediatric Skin Disease Detection ML Pipeline</p>
                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                  Free web-based diagnostic support tool for identifying common pediatric skin conditions from images. Led deep learning model development for 9 skin disease categories, achieving ~90% accuracy. Owned full ML pipeline, SQL database design, and security implementation.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-muted-foreground border border-border">Deep Learning</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-muted-foreground border border-border">SQL</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-muted-foreground border border-border">Python</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Education & Certifications */}
      <section className="py-32 px-6 sm:px-12 relative bg-secondary/30" id="education">
        <div className="max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="glass-card p-6 rounded-xl border-l-2 border-l-primary relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-border/30 p-1.5">
                    <img src="/logo-tuwaiq.png" alt="Tuwaiq Apple Developer Academy" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-snug">Apple Developer Academy</h3>
                    <p className="text-muted-foreground text-sm mt-0.5">TUWAIQ — iOS Development Program</p>
                    <p className="text-xs font-mono text-primary/70 mt-1">Aug 2025 – Present</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="glass-card p-6 rounded-xl border-l-2 border-l-border"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-border/30 p-1.5">
                    <img src="/logo-kku.png" alt="King Khalid University" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-snug">Bachelor of Computer Science</h3>
                    <p className="text-muted-foreground text-sm mt-0.5">King Khalid University</p>
                    <p className="text-xs font-mono text-muted-foreground mt-1">June 2025</p>
                  </div>
                </div>
                <div className="pl-[4.5rem]">
                  <span className="bg-primary/10 text-primary px-3 py-1.5 rounded text-xs font-bold shadow-sm border border-primary/20">GPA: 4.81/5.00 (1st Class Honors)</span>
                </div>
              </motion.div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {certificates.map((cert, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  onClick={() => setCertLightbox(i)}
                  className="glass-card rounded-xl overflow-hidden group text-left relative focus:outline-none focus:ring-2 focus:ring-primary/50"
                  data-testid={`btn-cert-${i}`}
                >
                  <div className="h-28 overflow-hidden relative">
                    <img src={cert.img} alt={cert.title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/30 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-6 h-6 text-white drop-shadow" />
                    </div>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-xs font-bold text-foreground leading-tight line-clamp-2 mb-1">{cert.title}</p>
                    <p className="text-[10px] font-mono text-primary">{cert.issuer} · {cert.date}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation Letter Section */}
      <section className="py-24 px-6 sm:px-12 relative" id="recommendation">
        <div className="max-w-5xl w-full mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Recommendation</h2>
            <div className="h-[1px] flex-1 bg-border/50"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-3 self-start">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-bold text-sm">Letter of Recommendation</p>
                <p className="text-xs text-muted-foreground font-mono">Saudi Aramco — Data Analyst Internship, 2023</p>
              </div>
            </div>

            <div className="w-full max-w-2xl mx-auto relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
                <img
                  src={recommendationLetter}
                  alt="Letter of Recommendation"
                  className="w-full h-auto block"
                  data-testid="img-aramco-letter"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Lightbox */}
      <AnimatePresence>
        {certLightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setCertLightbox(null)}
            data-testid="lightbox-overlay"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={certificates[certLightbox].img}
                alt={certificates[certLightbox].title}
                className="w-full h-auto"
              />
              <div className="absolute top-0 inset-x-0 flex justify-between items-center p-4 bg-gradient-to-b from-black/60 to-transparent">
                <div>
                  <p className="font-bold text-white text-sm">{certificates[certLightbox].title}</p>
                  <p className="text-white/70 text-xs font-mono">{certificates[certLightbox].issuer} · {certificates[certLightbox].date}</p>
                </div>
                <button
                  onClick={() => setCertLightbox(null)}
                  className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  data-testid="btn-lightbox-close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PediDerm Image Lightbox */}
      {(() => {
        const pediImages = [
          { src: "/pediderm-landing.jpeg", label: "Landing" },
          { src: "/pediderm-dashboard.jpeg", label: "Dashboard" },
          { src: "/pediderm-scan.jpeg", label: "Scan Result" },
          { src: "/pediderm-admin.jpeg", label: "Admin Panel" },
        ];
        return (
          <AnimatePresence>
            {pediLightbox !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                onClick={() => setPediLightbox(null)}
              >
                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
                  onClick={e => e.stopPropagation()}
                >
                  <img
                    src={pediImages[pediLightbox].src}
                    alt={pediImages[pediLightbox].label}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-0 inset-x-0 flex justify-between items-center p-4 bg-gradient-to-b from-black/60 to-transparent">
                    <div>
                      <p className="font-bold text-white text-sm">PediDermScan — {pediImages[pediLightbox].label}</p>
                      <p className="text-white/70 text-xs font-mono">Pediatric Skin Disease Detection Platform</p>
                    </div>
                    <button
                      onClick={() => setPediLightbox(null)}
                      className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        );
      })()}

      {/* Haik Image Lightbox */}
      <AnimatePresence>
        {haikLightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setHaikLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-sm w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={haikPreviews[haikLightbox].src}
                alt={`Haik App Preview ${haikLightbox + 1}`}
                className="w-full h-auto"
              />
              <div className="absolute top-0 inset-x-0 flex justify-between items-center p-4 bg-gradient-to-b from-black/60 to-transparent">
                <div>
                  <p className="font-bold text-white text-sm">Haik — حيّك</p>
                  <p className="text-white/70 text-xs font-mono">Screen {haikLightbox + 1} of {haikPreviews.length}</p>
                </div>
                <button
                  onClick={() => setHaikLightbox(null)}
                  className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FDS Image Lightbox */}
      <AnimatePresence>
        {fdsLightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setFdsLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={fdsPreviews[fdsLightbox]}
                alt={`Files Distributor System ${fdsLightbox + 1}`}
                className="w-full h-auto"
              />
              <div className="absolute top-0 inset-x-0 flex justify-between items-center p-4 bg-gradient-to-b from-black/60 to-transparent">
                <div>
                  <p className="font-bold text-white text-sm">Files Distributor System</p>
                  <p className="text-white/70 text-xs font-mono">Saudi Binladin Group — KFSC Project</p>
                </div>
                <button
                  onClick={() => setFdsLightbox(null)}
                  className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. Languages */}
      <section className="py-24 px-6 sm:px-12 relative overflow-hidden" id="languages">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[200px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl w-full mx-auto text-center relative z-10">
          <Globe className="w-10 h-10 text-primary mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-12">Global Perspective</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-4xl font-display font-bold text-foreground mb-2">Arabic</p>
              <p className="text-sm font-mono text-primary tracking-widest uppercase">Native</p>
            </motion.div>
            
            <div className="hidden sm:block w-[1px] bg-border"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-4xl font-display font-bold text-foreground mb-2">English</p>
              <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">Fluent</p>
              <p className="text-xs text-muted-foreground">STEP: 94 <span className="mx-1">|</span> TOEFL iBT equiv. 550</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Contact Section */}
      <section className="py-32 px-6 sm:px-12 relative bg-secondary/10" id="contact">
        <div className="max-w-3xl w-full mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Build the Future?</h2>
          <div className="mb-12" />
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:maryamjalzh@gmail.com" 
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(0,255,255,0.3)] group"
              data-testid="btn-contact-email"
            >
              <Mail className="w-5 h-5" />
              Email Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com/in/maryam-jalal/" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium border border-border flex items-center justify-center gap-2 hover:bg-secondary transition-colors"
              data-testid="btn-contact-linkedin"
            >
              <ExternalLink className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="py-8 px-6 border-t border-border bg-background">
        <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="font-display font-bold text-primary text-sm">M</span>
            </div>
            <div>
              <p className="font-bold text-sm">Maryam J. Aladwany</p>
              <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:maryamjalzh@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> maryamjalzh@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
