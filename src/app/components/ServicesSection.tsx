import { motion } from "motion/react";
import { Map, Monitor, Search, BarChart2, Bot, LineChart, ArrowRight } from "lucide-react";

const services = [
  { icon:<Map size={22}/>, title:"Website Strategy", text:"Build a website around your business goals, customers and growth opportunities." },
  { icon:<Monitor size={22}/>, title:"Website Design & Development", text:"Fast, modern websites built to earn trust and generate more enquiries." },
  { icon:<Search size={22}/>, title:"SEO & AI Search", text:"Help the right customers find your business through search and AI platforms." },
  { icon:<BarChart2 size={22}/>, title:"Conversion Optimization", text:"Turn more visitors into enquiries without increasing your marketing spend." },
  { icon:<Bot size={22}/>, title:"AI & Automation", text:"Automate repetitive tasks and respond to leads faster with intelligent workflows." },
  { icon:<LineChart size={22}/>, title:"Analytics & Reporting", text:"Track performance, measure results and make smarter business decisions with confidence." },
];

interface ServicesSectionProps { onAuditClick: () => void; }

export function ServicesSection({ onAuditClick }: ServicesSectionProps) {
  return (
    <section id="services" style={{ background:"#FFFFFF", padding:"96px 0" }}>
      <div style={{ maxWidth:"1240px", margin:"0 auto", padding:"0 28px" }}>
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.45 }} style={{ textAlign:"center", marginBottom:"56px" }}>
          <h2 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"clamp(28px,3.5vw,42px)", color:"#0F172A", margin:"0 0 16px", letterSpacing:"-0.8px", lineHeight:1.12 }}>
            Everything Your Business Needs to Grow Online
          </h2>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px", marginBottom:"40px" }} className="services-grid">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.07 }}
              style={{ background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:"16px", padding:"28px 24px 24px", transition:"box-shadow 0.22s, transform 0.22s, border-color 0.22s", cursor:"default" }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.boxShadow="0 8px 32px rgba(37,99,235,0.08)"; el.style.transform="translateY(-4px)"; el.style.borderColor="#BFDBFE"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.boxShadow="none"; el.style.transform="translateY(0)"; el.style.borderColor="#E2E8F0"; }}
            >
              <div style={{ width:"48px", height:"48px", background:"#EFF6FF", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center", color:"#2563EB", marginBottom:"18px" }}>{s.icon}</div>
              <h3 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"17px", color:"#0F172A", margin:"0 0 10px", lineHeight:1.3 }}>{s.title}</h3>
              <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"15px", lineHeight:1.65, color:"#475569", margin:"0 0 16px" }}>{s.text}</p>
              <a href="#" style={{ display:"inline-flex", alignItems:"center", gap:"5px", fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"13px", color:"#2563EB", textDecoration:"none", transition:"gap 0.18s" }}
                onMouseEnter={e=>e.currentTarget.style.gap="9px"} onMouseLeave={e=>e.currentTarget.style.gap="5px"}
              >Learn more <ArrowRight size={13}/></a>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign:"center" }}>
          <button onClick={onAuditClick} style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"16px", color:"#FFFFFF", background:"#2563EB", border:"none", borderRadius:"12px", padding:"14px 28px", cursor:"pointer", transition:"background 0.18s, transform 0.15s", display:"inline-flex", alignItems:"center", gap:"8px" }}
            onMouseEnter={e=>{ e.currentTarget.style.background="#1D4ED8"; e.currentTarget.style.transform="translateY(-1px)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.background="#2563EB"; e.currentTarget.style.transform="translateY(0)"; }}
          >Get Your Free Website Audit <ArrowRight size={16}/></button>
        </div>
      </div>
      <style>{`@media (max-width:900px) { .services-grid { grid-template-columns:1fr 1fr !important; } } @media (max-width:560px) { .services-grid { grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}
