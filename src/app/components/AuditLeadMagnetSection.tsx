import { motion } from "motion/react";
import { CheckCircle, ArrowRight } from "lucide-react";

const checklist = [
  "UX and conversion review",
  "SEO and AI search analysis",
  "Website speed assessment",
  "Mobile usability review",
  "Competitor comparison",
  "Actionable recommendations",
];

function AuditReportMockup() {
  const scores = [
    { label:"SEO Score", val:42, color:"#EF4444", bg:"#FEF2F2" },
    { label:"UX Score", val:61, color:"#F59E0B", bg:"#FFFBEB" },
    { label:"Speed Score", val:38, color:"#EF4444", bg:"#FEF2F2" },
    { label:"Conversion", val:28, color:"#EF4444", bg:"#FEF2F2" },
    { label:"Mobile Usability", val:55, color:"#F59E0B", bg:"#FFFBEB" },
  ];

  return (
    <div style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:"20px", overflow:"hidden", backdropFilter:"blur(8px)" }}>
      {/* Report header */}
      <div style={{ background:"rgba(255,255,255,0.1)", padding:"14px 20px", display:"flex", alignItems:"center", gap:"10px", borderBottom:"1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ display:"flex", gap:"5px" }}>{["#FCA5A5","#FDE68A","#86EFAC"].map(c=><div key={c} style={{ width:"8px", height:"8px", borderRadius:"50%", background:c }}/>)}</div>
        <span style={{ fontFamily:"'Manrope',sans-serif", fontWeight:600, fontSize:"12px", color:"rgba(255,255,255,0.7)" }}>Website Growth Audit Report</span>
      </div>
      <div style={{ padding:"20px" }}>
        <div style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"13px", color:"rgba(255,255,255,0.5)", textTransform:"uppercase", letterSpacing:"0.5px", marginBottom:"14px" }}>Performance Scores</div>
        <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
          {scores.map(s=>(
            <div key={s.label} style={{ background:"rgba(255,255,255,0.06)", borderRadius:"10px", padding:"10px 14px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"6px" }}>
                <span style={{ fontFamily:"'Inter',sans-serif", fontSize:"12px", color:"rgba(255,255,255,0.7)", fontWeight:500 }}>{s.label}</span>
                <span style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"13px", color:s.val >= 70?"#4ADE80":s.val >= 50?"#FDE68A":"#FCA5A5" }}>{s.val}/100</span>
              </div>
              <div style={{ height:"5px", background:"rgba(255,255,255,0.1)", borderRadius:"999px", overflow:"hidden" }}>
                <motion.div initial={{ width:0 }} whileInView={{ width:`${s.val}%` }} viewport={{ once:true }} transition={{ duration:0.8, delay:0.2, ease:"easeOut" }}
                  style={{ height:"100%", background:s.val>=70?"#4ADE80":s.val>=50?"#FDE68A":"#FCA5A5", borderRadius:"999px" }}/>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop:"14px", background:"rgba(239,68,68,0.1)", border:"1px solid rgba(239,68,68,0.2)", borderRadius:"10px", padding:"10px 14px" }}>
          <div style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"12px", color:"#FCA5A5", marginBottom:"3px" }}>3 Critical Issues Found</div>
          <div style={{ fontFamily:"'Inter',sans-serif", fontSize:"11px", color:"rgba(252,165,165,0.8)", lineHeight:1.5 }}>No clear CTA above fold · Missing title tags · No lead capture on key pages</div>
        </div>
      </div>
    </div>
  );
}

interface AuditLeadMagnetSectionProps { onAuditClick: () => void; }

export function AuditLeadMagnetSection({ onAuditClick }: AuditLeadMagnetSectionProps) {
  return (
    <section style={{ background:"linear-gradient(135deg,#1E3A8A 0%,#1D4ED8 50%,#2563EB 100%)", padding:"96px 0" }}>
      <div style={{ maxWidth:"1240px", margin:"0 auto", padding:"0 28px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"center" }} className="audit-magnet-grid">
          {/* Left: mockup */}
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}>
            <AuditReportMockup/>
          </motion.div>

          {/* Right: copy */}
          <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.55, delay:0.08 }}>
            <h2 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"clamp(26px,3.5vw,40px)", color:"#FFFFFF", margin:"0 0 20px", letterSpacing:"-0.8px", lineHeight:1.12 }}>
              Get Your Free Website Growth Audit
            </h2>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"17px", lineHeight:1.75, color:"rgba(255,255,255,0.8)", margin:"0 0 28px" }}>
              We'll analyse your website and identify the biggest issues affecting visibility, user experience, lead generation and conversions.
            </p>

            <div style={{ display:"flex", flexDirection:"column", gap:"10px", marginBottom:"32px" }}>
              {checklist.map(item=>(
                <div key={item} style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                  <CheckCircle size={16} style={{ color:"#86EFAC", flexShrink:0 }}/>
                  <span style={{ fontFamily:"'Inter',sans-serif", fontSize:"15px", color:"rgba(255,255,255,0.88)", fontWeight:500 }}>{item}</span>
                </div>
              ))}
            </div>

            <button onClick={onAuditClick} style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"16px", color:"#1E3A8A", background:"#FFFFFF", border:"none", borderRadius:"12px", padding:"15px 28px", cursor:"pointer", transition:"background 0.18s, transform 0.15s", display:"inline-flex", alignItems:"center", gap:"8px", marginBottom:"14px" }}
              onMouseEnter={e=>{ e.currentTarget.style.background="#F1F5F9"; e.currentTarget.style.transform="translateY(-1px)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.background="#FFFFFF"; e.currentTarget.style.transform="translateY(0)"; }}
            >Request My Free Audit <ArrowRight size={16}/></button>

            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"13px", color:"rgba(255,255,255,0.6)", margin:0 }}>
              No obligation. Get clear, practical recommendations.
            </p>
          </motion.div>
        </div>
      </div>
      <style>{`@media (max-width:860px) { .audit-magnet-grid { grid-template-columns:1fr !important; gap:40px !important; } }`}</style>
    </section>
  );
}
