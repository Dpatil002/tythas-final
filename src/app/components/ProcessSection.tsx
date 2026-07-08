import { motion } from "motion/react";

const steps = [
  { num:"01", title:"Discover", text:"Understand the business, audience, goals and competition." },
  { num:"02", title:"Research & Strategy", text:"Define positioning, user journeys, content structure and conversion opportunities." },
  { num:"03", title:"Design & Development", text:"Create responsive UX/UI and develop a fast, scalable website." },
  { num:"04", title:"Optimise & Automate", text:"Implement SEO, CRO, analytics, CRM, AI and lead automation." },
  { num:"05", title:"Measure & Improve", text:"Track performance, study user behaviour and continuously improve results." },
];

export function ProcessSection() {
  return (
    <section style={{ background:"#F8FAFC", padding:"96px 0" }}>
      <div style={{ maxWidth:"1240px", margin:"0 auto", padding:"0 28px" }}>
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.45 }} style={{ textAlign:"center", marginBottom:"64px" }}>
          <h2 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"clamp(28px,3.5vw,42px)", color:"#0F172A", margin:"0 0 16px", letterSpacing:"-0.8px", lineHeight:1.12 }}>
            Our Proven Website Growth Process
          </h2>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"18px", lineHeight:1.7, color:"#475569", maxWidth:"520px", margin:"0 auto" }}>
            A transparent process built to reduce uncertainty and deliver measurable outcomes.
          </p>
        </motion.div>

        {/* Desktop */}
        <div className="process-desktop" style={{ position:"relative" }}>
          <div style={{ position:"absolute", top:"28px", left:"calc(10% + 26px)", right:"calc(10% + 26px)", height:"2px", background:"#E2E8F0", zIndex:0 }}/>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:"16px", position:"relative", zIndex:1 }}>
            {steps.map((s, i) => (
              <motion.div key={s.num}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.08 }}
                style={{ display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center" }}
              >
                <div style={{ width:"56px", height:"56px", borderRadius:"50%", background:"#2563EB", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"14px", color:"#FFFFFF", marginBottom:"20px", boxShadow:"0 0 0 6px #FFFFFF, 0 0 0 8px #DBEAFE", flexShrink:0 }}>{s.num}</div>
                <div style={{ background:"#FFFFFF", border:"1px solid #E2E8F0", borderRadius:"14px", padding:"18px 14px", width:"100%" }}>
                  <h3 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"14px", color:"#0F172A", margin:"0 0 8px", lineHeight:1.3 }}>{s.title}</h3>
                  <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"12px", lineHeight:1.6, color:"#475569", margin:0 }}>{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="process-mobile" style={{ display:"none", flexDirection:"column", gap:"0" }}>
          {steps.map((s, i) => (
            <motion.div key={s.num}
              initial={{ opacity:0, x:-16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.07 }}
              style={{ display:"flex", gap:"16px", paddingBottom: i < steps.length-1 ? "20px" : "0" }}
            >
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
                <div style={{ width:"44px", height:"44px", borderRadius:"50%", background:"#2563EB", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"12px", color:"#FFFFFF", flexShrink:0 }}>{s.num}</div>
                {i < steps.length-1 && <div style={{ width:"2px", flex:1, background:"#E2E8F0", marginTop:"8px" }}/>}
              </div>
              <div style={{ background:"#FFFFFF", border:"1px solid #E2E8F0", borderRadius:"14px", padding:"16px 18px", flex:1, marginBottom:"8px" }}>
                <h3 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"15px", color:"#0F172A", margin:"0 0 6px" }}>{s.title}</h3>
                <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"14px", lineHeight:1.6, color:"#475569", margin:0 }}>{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width:768px) { .process-desktop { display:none !important; } .process-mobile { display:flex !important; } }`}</style>
    </section>
  );
}
