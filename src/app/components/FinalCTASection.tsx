import { motion } from "motion/react";
import { ArrowRight, MessageSquare } from "lucide-react";

interface FinalCTASectionProps { onAuditClick: () => void; }

export function FinalCTASection({ onAuditClick }: FinalCTASectionProps) {
  return (
    <section id="contact" style={{ background:"#FFFFFF", padding:"100px 0" }}>
      <div style={{ maxWidth:"700px", margin:"0 auto", padding:"0 28px", textAlign:"center" }}>
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}>
          <h2 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"clamp(28px,4vw,46px)", color:"#0F172A", margin:"0 0 20px", letterSpacing:"-0.8px", lineHeight:1.1 }}>
            Ready to Turn Your Website Into a Growth Engine?
          </h2>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"18px", lineHeight:1.75, color:"#475569", margin:"0 0 40px" }}>
            Let's identify what is stopping your website from generating consistent leads.
          </p>
          <div style={{ display:"flex", justifyContent:"center", gap:"12px", flexWrap:"wrap" }}>
            <button onClick={onAuditClick} style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"16px", color:"#FFFFFF", background:"#2563EB", border:"none", borderRadius:"12px", padding:"14px 28px", cursor:"pointer", transition:"background 0.18s, transform 0.15s", display:"flex", alignItems:"center", gap:"8px" }}
              onMouseEnter={e=>{ e.currentTarget.style.background="#1D4ED8"; e.currentTarget.style.transform="translateY(-1px)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.background="#2563EB"; e.currentTarget.style.transform="translateY(0)"; }}
            >Get Free Website Audit <ArrowRight size={16}/></button>
            <a href="#" style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"16px", color:"#0F172A", background:"#FFFFFF", border:"1px solid #E2E8F0", borderRadius:"12px", padding:"14px 24px", textDecoration:"none", transition:"border-color 0.18s, transform 0.15s", display:"inline-flex", alignItems:"center", gap:"8px" }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor="#2563EB"; e.currentTarget.style.transform="translateY(-1px)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor="#E2E8F0"; e.currentTarget.style.transform="translateY(0)"; }}
            ><MessageSquare size={16}/> Talk to a Strategist</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
