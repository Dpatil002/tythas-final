import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const steps = ["Attract","Engage","Convert","Automate","Measure","Grow"];
const colors = ["#2563EB","#7C3AED","#0891B2","#16A34A","#EA580C","#2563EB"];

export function SolutionFlowSection() {
  return (
    <section style={{ background:"#FFFFFF", padding:"96px 0" }}>
      <div style={{ maxWidth:"1240px", margin:"0 auto", padding:"0 28px" }}>
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.45 }} style={{ textAlign:"center", marginBottom:"56px" }}>
          <h2 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"clamp(28px,3.5vw,42px)", color:"#0F172A", margin:"0 0 16px", letterSpacing:"-0.8px", lineHeight:1.12 }}>
            We Don't Just Design Websites.{" "}
            <span style={{ color:"#2563EB" }}>We Build Growth Systems.</span>
          </h2>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"18px", lineHeight:1.7, color:"#475569", maxWidth:"620px", margin:"0 auto" }}>
            From the first visit to the final enquiry, we build websites that attract, engage, convert and support long term business growth.
          </p>
        </motion.div>

        {/* Flow diagram */}
        <div className="flow-desktop" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"0", overflowX:"auto", padding:"0 0 8px" }}>
          {steps.map((step, i) => (
            <motion.div key={step}
              initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }}
              transition={{ duration:0.35, delay:i*0.09 }}
              style={{ display:"flex", alignItems:"center" }}
            >
              <div style={{
                display:"flex", flexDirection:"column", alignItems:"center",
                gap:"10px", padding:"0 4px",
              }}>
                <div style={{
                  width:"52px", height:"52px", borderRadius:"50%",
                  background: i === steps.length-1 ? "#2563EB" : `${colors[i]}14`,
                  border: `2px solid ${colors[i]}`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"11px",
                  color: i === steps.length-1 ? "#FFFFFF" : colors[i],
                  boxShadow: i === steps.length-1 ? "0 0 0 6px #EFF6FF" : "none",
                }}>{String(i+1).padStart(2,"0")}</div>
                <span style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"13px", color:"#0F172A", whiteSpace:"nowrap" }}>{step}</span>
              </div>
              {i < steps.length-1 && (
                <div style={{ display:"flex", alignItems:"center", padding:"0 6px", paddingBottom:"22px" }}>
                  <div style={{ width:"32px", height:"1px", background:"#E2E8F0" }}/>
                  <ArrowRight size={13} style={{ color:"#94A3B8", flexShrink:0 }}/>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="flow-mobile" style={{ display:"none", flexDirection:"column", gap:"0", maxWidth:"320px", margin:"0 auto" }}>
          {steps.map((step, i) => (
            <div key={step} style={{ display:"flex", gap:"16px", paddingBottom: i < steps.length-1 ? "16px" : "0" }}>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
                <div style={{ width:"40px", height:"40px", borderRadius:"50%", background:`${colors[i]}14`, border:`2px solid ${colors[i]}`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"11px", color:colors[i], flexShrink:0 }}>
                  {String(i+1).padStart(2,"0")}
                </div>
                {i < steps.length-1 && <div style={{ width:"2px", flex:1, background:"#E2E8F0", marginTop:"6px" }}/>}
              </div>
              <div style={{ paddingTop:"8px" }}>
                <span style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"15px", color:"#0F172A" }}>{step}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width:640px) { .flow-desktop { display:none !important; } .flow-mobile { display:flex !important; } }`}</style>
    </section>
  );
}
