import { motion } from "motion/react";
import { Bot, SlidersHorizontal, Sparkles, Workflow, ArrowRight, ChevronRight } from "lucide-react";

const capabilities = [
  { icon:<Bot size={20}/>, title:"AI Chatbot & Customer Support", text:"Qualify visitors, answer questions and route enquiries automatically, 24/7." },
  { icon:<SlidersHorizontal size={20}/>, title:"Lead Qualification & Scoring", text:"Score inbound leads by intent, behaviour and profile to focus on high-value prospects." },
  { icon:<Sparkles size={20}/>, title:"Personalised Service Recommendations", text:"Serve dynamic content and recommendations based on visitor behaviour and context." },
  { icon:<Workflow size={20}/>, title:"CRM & Email Automation", text:"Connect website activity to your CRM, trigger follow-up sequences and reduce manual work." },
];

const flow = ["Website Visitor","AI Conversation","Qualified Lead","CRM","Follow-up"];

export function AISolutionsSection() {
  return (
    <section style={{ background:"#0F172A", padding:"96px 0" }}>
      <div style={{ maxWidth:"1240px", margin:"0 auto", padding:"0 28px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"center" }} className="ai-grid">
          {/* Left */}
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}>
            <span style={{ display:"inline-flex", alignItems:"center", gap:"6px", background:"rgba(37,99,235,0.15)", color:"#60A5FA", borderRadius:"999px", padding:"5px 14px", fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"11px", letterSpacing:"0.8px", textTransform:"uppercase", marginBottom:"20px", border:"1px solid rgba(96,165,250,0.25)" }}>
              AI-Powered Business Websites
            </span>
            <h2 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"clamp(26px,3vw,40px)", color:"#FFFFFF", margin:"0 0 20px", letterSpacing:"-0.8px", lineHeight:1.12 }}>
              Automate More Than Just Your Contact Form
            </h2>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"17px", lineHeight:1.75, color:"#94A3B8", margin:"0 0 36px" }}>
              Use AI to qualify leads, answer customer questions, recommend services and connect website activity with your business workflows.
            </p>

            <div style={{ display:"flex", flexDirection:"column", gap:"16px", marginBottom:"36px" }}>
              {capabilities.map((cap, i) => (
                <motion.div key={cap.title}
                  initial={{ opacity:0, x:-16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.08 }}
                  style={{ display:"flex", gap:"14px", alignItems:"flex-start", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"14px", padding:"16px 18px", transition:"background 0.2s, border-color 0.2s" }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(37,99,235,0.08)"; el.style.borderColor="rgba(96,165,250,0.2)"; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,0.04)"; el.style.borderColor="rgba(255,255,255,0.08)"; }}
                >
                  <div style={{ width:"38px", height:"38px", background:"rgba(37,99,235,0.15)", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", color:"#60A5FA", flexShrink:0 }}>{cap.icon}</div>
                  <div>
                    <h3 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"15px", color:"#FFFFFF", margin:"0 0 5px" }}>{cap.title}</h3>
                    <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"13px", lineHeight:1.6, color:"#94A3B8", margin:0 }}>{cap.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a href="#" style={{ display:"inline-flex", alignItems:"center", gap:"8px", fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"15px", color:"#60A5FA", textDecoration:"none", background:"rgba(37,99,235,0.12)", border:"1px solid rgba(96,165,250,0.2)", borderRadius:"10px", padding:"11px 20px", transition:"background 0.18s" }}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(37,99,235,0.2)"}
              onMouseLeave={e=>e.currentTarget.style.background="rgba(37,99,235,0.12)"}
            >Explore AI Solutions <ArrowRight size={16}/></a>
          </motion.div>

          {/* Right: AI flow visual */}
          <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.1 }}>
            <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.10)", borderRadius:"20px", padding:"32px" }}>
              <div style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"14px", color:"#94A3B8", marginBottom:"28px", textTransform:"uppercase", letterSpacing:"0.6px" }}>AI Lead Flow</div>
              <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
                {flow.map((step, i) => (
                  <div key={step}>
                    <div style={{
                      background: i === 0 ? "rgba(37,99,235,0.15)" : i === flow.length-1 ? "rgba(22,163,74,0.12)" : "rgba(255,255,255,0.06)",
                      border: `1px solid ${i === 0 ? "rgba(96,165,250,0.3)" : i === flow.length-1 ? "rgba(34,197,94,0.25)" : "rgba(255,255,255,0.08)"}`,
                      borderRadius:"12px", padding:"14px 18px",
                      display:"flex", alignItems:"center", justifyContent:"space-between",
                    }}>
                      <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                        <div style={{ width:"28px", height:"28px", borderRadius:"50%", background: i===0?"rgba(37,99,235,0.3)":i===flow.length-1?"rgba(22,163,74,0.25)":"rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"11px", color: i===0?"#60A5FA":i===flow.length-1?"#4ADE80":"#64748B" }}>
                          {String(i+1).padStart(2,"0")}
                        </div>
                        <span style={{ fontFamily:"'Manrope',sans-serif", fontWeight:600, fontSize:"14px", color: i===0?"#93C5FD":i===flow.length-1?"#4ADE80":"#CBD5E1" }}>{step}</span>
                      </div>
                      {i===0 && <span style={{ fontFamily:"'Inter',sans-serif", fontSize:"11px", color:"#60A5FA", background:"rgba(37,99,235,0.15)", padding:"3px 10px", borderRadius:"999px", border:"1px solid rgba(96,165,250,0.2)" }}>Entry</span>}
                      {i===flow.length-1 && <span style={{ fontFamily:"'Inter',sans-serif", fontSize:"11px", color:"#4ADE80", background:"rgba(22,163,74,0.12)", padding:"3px 10px", borderRadius:"999px", border:"1px solid rgba(34,197,94,0.2)" }}>Revenue</span>}
                    </div>
                    {i < flow.length-1 && (
                      <div style={{ display:"flex", justifyContent:"center", margin:"2px 0" }}>
                        <ChevronRight size={14} style={{ color:"#334155", transform:"rotate(90deg)" }}/>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ marginTop:"24px", background:"rgba(37,99,235,0.08)", border:"1px solid rgba(96,165,250,0.15)", borderRadius:"12px", padding:"14px 18px" }}>
                <div style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"13px", color:"#60A5FA", marginBottom:"4px" }}>Result</div>
                <div style={{ fontFamily:"'Inter',sans-serif", fontSize:"13px", color:"#94A3B8", lineHeight:1.55 }}>High-intent leads are automatically qualified, scored and routed to your team — reducing manual effort and improving response speed.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media (max-width:900px) { .ai-grid { grid-template-columns:1fr !important; gap:40px !important; } }`}</style>
    </section>
  );
}
