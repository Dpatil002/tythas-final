import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const cases = [
  {
    tag: "Manufacturing Company",
    title: "Industrial B2B Lead System",
    challenge: "Low online visibility and no structured lead capture for a complex B2B product line.",
    metrics: [{ val: "+68%", label: "Qualified Leads" }, { val: "+175%", label: "Organic Traffic" }],
    color: "#2563EB", bg: "#EFF6FF",
  },
  {
    tag: "Healthcare Brand",
    title: "Clinic Appointment Platform",
    challenge: "Outdated website failing to convert visitors into patient appointment enquiries.",
    metrics: [{ val: "+42%", label: "Appointment Enquiries" }, { val: "+145%", label: "Website Conversion" }],
    color: "#16A34A", bg: "#F0FDF4",
  },
  {
    tag: "Professional Services Firm",
    title: "B2B Authority Website",
    challenge: "Generic website with no content strategy, weak SEO and unqualified inbound leads.",
    metrics: [{ val: "+300%", label: "Organic Enquiries" }, { val: "1.8×", label: "Return on Marketing Spend" }],
    color: "#7C3AED", bg: "#F5F3FF",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="work" style={{ background: "#FFFFFF", padding: "96px 0" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 28px" }}>
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.45 }} style={{ textAlign:"center", marginBottom:"56px" }}>
          <h2 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"clamp(28px,3.5vw,42px)", color:"#0F172A", margin:"0 0 16px", letterSpacing:"-0.8px", lineHeight:1.12 }}>
            Real Results. Not Empty Promises.
          </h2>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"18px", lineHeight:1.7, color:"#475569", maxWidth:"560px", margin:"0 auto" }}>
            See how strategy-led design and optimisation helped businesses improve their digital performance.
          </p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"24px" }} className="cases-grid">
          {cases.map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.09 }}
              style={{ background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:"20px", overflow:"hidden", transition:"box-shadow 0.25s, transform 0.25s" }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.boxShadow="0 12px 40px rgba(15,23,42,0.08)"; el.style.transform="translateY(-4px)"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.boxShadow="none"; el.style.transform="translateY(0)"; }}
            >
              {/* Metric band */}
              <div style={{ background:c.bg, padding:"20px 24px", borderBottom:"1px solid #E2E8F0" }}>
                <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"11px", color:c.color, textTransform:"uppercase", letterSpacing:"0.6px", display:"block", marginBottom:"14px" }}>{c.tag}</span>
                <div style={{ display:"flex", gap:"24px" }}>
                  {c.metrics.map(m=>(
                    <div key={m.label}>
                      <div style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"26px", color:c.color, lineHeight:1.1 }}>{m.val}</div>
                      <div style={{ fontFamily:"'Inter',sans-serif", fontSize:"12px", color:"#64748B", marginTop:"2px" }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Body */}
              <div style={{ padding:"20px 24px" }}>
                <h3 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"18px", color:"#0F172A", margin:"0 0 10px" }}>{c.title}</h3>
                <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"14px", lineHeight:1.65, color:"#475569", margin:"0 0 18px" }}>{c.challenge}</p>
                <a href="#" style={{ display:"inline-flex", alignItems:"center", gap:"5px", fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"13px", color:c.color, textDecoration:"none", transition:"gap 0.18s" }}
                  onMouseEnter={e=>e.currentTarget.style.gap="9px"} onMouseLeave={e=>e.currentTarget.style.gap="5px"}
                >View Case Study <ArrowUpRight size={14}/></a>
              </div>
            </motion.div>
          ))}
        </div>
        <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"12px", color:"#94A3B8", textAlign:"center", marginTop:"16px" }}>
          * All results are representative and marked as placeholders until verified client data is confirmed.
        </p>
      </div>
      <style>{`@media (max-width:860px) { .cases-grid { grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}
