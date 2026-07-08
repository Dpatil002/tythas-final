import { motion } from "motion/react";
import { EyeOff, MousePointerClick, LayoutDashboard, Filter } from "lucide-react";

const problems = [
  { icon: <EyeOff size={22}/>, title: "You're Hard to Find", text: "Potential customers are searching for businesses like yours, but they're finding your competitors instead." },
  { icon: <MousePointerClick size={22}/>, title: "Visitors Leave Without Taking Action", text: "People visit your website but don't enquire, book a call or request a quote." },
  { icon: <LayoutDashboard size={22}/>, title: "Your Website Doesn't Build Trust", text: "An outdated design, confusing content and poor user experience make prospects hesitate before contacting you." },
  { icon: <Filter size={22}/>, title: "Your Sales Team Chases the Wrong Leads", text: "Instead of attracting qualified enquiries, your website creates unnecessary follow-ups and wasted effort." },
];

interface ProblemSectionProps { onAuditClick?: () => void; }

export function ProblemSection({ onAuditClick }: ProblemSectionProps) {
  return (
    <section style={{ background: "#F8FAFC", padding: "96px 0" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 28px" }}>
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.45 }} style={{ textAlign:"center", marginBottom:"56px" }}>
          <h2 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"clamp(28px,3.5vw,42px)", color:"#0F172A", margin:"0 0 16px", letterSpacing:"-0.8px", lineHeight:1.12 }}>
            Is Your Website Helping Your Business Grow or Holding It Back?
          </h2>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"18px", lineHeight:1.7, color:"#475569", maxWidth:"560px", margin:"0 auto" }}>
            If your website isn't bringing customers, it's not working as hard as it should.
          </p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"20px" }} className="problem-grid">
          {problems.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.08 }}
              style={{ background:"#FFFFFF", border:"1px solid #E2E8F0", borderRadius:"16px", padding:"28px 24px", transition:"box-shadow 0.22s, transform 0.22s, border-color 0.22s", cursor:"default" }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.boxShadow="0 8px 32px rgba(37,99,235,0.08)"; el.style.transform="translateY(-4px)"; el.style.borderColor="#BFDBFE"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.boxShadow="none"; el.style.transform="translateY(0)"; el.style.borderColor="#E2E8F0"; }}
            >
              <div style={{ width:"48px", height:"48px", background:"#EFF6FF", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center", color:"#2563EB", marginBottom:"20px" }}>{p.icon}</div>
              <h3 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"17px", color:"#0F172A", margin:"0 0 10px", lineHeight:1.3 }}>{p.title}</h3>
              <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"15px", lineHeight:1.65, color:"#475569", margin:0 }}>{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width:900px) { .problem-grid { grid-template-columns:1fr 1fr !important; } } @media (max-width:560px) { .problem-grid { grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}
