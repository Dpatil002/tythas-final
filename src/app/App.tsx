import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MetricsBar } from "./components/MetricsBar";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionFlowSection } from "./components/SolutionFlowSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { ProcessSection } from "./components/ProcessSection";
import { ServicesSection } from "./components/ServicesSection";
import { AISolutionsSection } from "./components/AISolutionsSection";
import { PromiseSection } from "./components/PromiseSection";
import { AuditLeadMagnetSection } from "./components/AuditLeadMagnetSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";
import { AuditModal } from "./components/AuditModal";

export default function App() {
  const [auditOpen, setAuditOpen] = useState(false);
  const open = () => setAuditOpen(true);

  return (
    <div style={{ fontFamily:"'Inter',sans-serif", background:"#F8FAFC", minHeight:"100vh" }}>
      <Navbar onAuditClick={open}/>
      <main>
        <HeroSection onAuditClick={open}/>
        <MetricsBar/>
        <ProblemSection onAuditClick={open}/>
        <SolutionFlowSection/>
        <IndustriesSection/>
        <CaseStudiesSection/>
        <ProcessSection/>
        <ServicesSection onAuditClick={open}/>
        <AISolutionsSection/>
        <PromiseSection/>
        <AuditLeadMagnetSection onAuditClick={open}/>
        <FinalCTASection onAuditClick={open}/>
      </main>
      <Footer onAuditClick={open}/>
      <AuditModal isOpen={auditOpen} onClose={()=>setAuditOpen(false)}/>

      <style>{`
        * { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        body { overflow-x:hidden; }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:transparent; }
        ::-webkit-scrollbar-thumb { background:#CBD5E1; border-radius:3px; }
      `}</style>
    </div>
  );
}
