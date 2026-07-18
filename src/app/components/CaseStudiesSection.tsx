import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const cases = [
  {
    tag: "Dewaxify",
    title: "Ear Wax Removal Clinic, UK",
    challenge: "7,900% increase in organic traffic over 12 months period, clicks went from 40 to steady 4000.",
    metrics: [{ val: "+200%", label: "Appointment Enquiries" }, { val: "+3×", label: "Website Conversions" }],
    website: "https://dewaxifylondon.com/",
    color: "#2563EB", bg: "#EFF6FF",
  },
  {
    tag: "SB Patil Group",
    title: "Luxury Real Estate",
    challenge: "Directly converted traffic gains into business revenue by scaling monthly enquiries from 40 to 250 per month.",
    metrics: [{ val: "66.67%", label: "Organic Growth" }, { val: "4.3%", label: "CTR" }],
    website: "https://sbpatilgroup.in/",
    color: "#16A34A", bg: "#F0FDF4",
  },
  {
    tag: "Gixel Labs",
    title: "Building Authority in an AI Market",
    challenge: "Positioned the brand as an industry authority using SEO, content strategy and conversion focused website improvements.",
    metrics: [{ val: "+300%", label: "Organic Enquiries" }, { val: "1.8×", label: "Return on Marketing Spend" }],
    website: "https://www.gixellabs.com/",
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
            Every business has different challenges. Here's how we solved them and the results we achieved.
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
                {c.sentence ? (
                  <p style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"16px", color:"#0F172A", lineHeight:1.45, margin:0 }}>{c.sentence}</p>
                ) : (
                  <div style={{ display:"flex", gap:"24px" }}>
                    {c.metrics!.map(m=>(
                      <div key={m.label}>
                        <div style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"26px", color:c.color, lineHeight:1.1 }}>{m.val}</div>
                        <div style={{ fontFamily:"'Inter',sans-serif", fontSize:"12px", color:"#64748B", marginTop:"2px" }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Body */}
              <div style={{ padding:"20px 24px" }}>
                <h3 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"18px", color:"#0F172A", margin:"0 0 10px" }}>{c.title}</h3>
                <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"14px", lineHeight:1.65, color:"#475569", margin:"0 0 18px" }}>{c.challenge}</p>
                <a href={c.website} target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:"5px", fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"13px", color:c.color, textDecoration:"none", transition:"gap 0.18s" }}
                  onMouseEnter={e=>e.currentTarget.style.gap="9px"} onMouseLeave={e=>e.currentTarget.style.gap="5px"}
                >View Website <ArrowUpRight size={14}/></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width:860px) { .cases-grid { grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}
