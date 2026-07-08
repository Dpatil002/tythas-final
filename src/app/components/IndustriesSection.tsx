import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    name: "Manufacturing & Industrial",
    desc: "Lead generation for complex B2B sales cycles and industrial buyers.",
    img: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=600&h=400&fit=crop&auto=format",
  },
  {
    name: "Professional Services",
    desc: "Authority-building websites that attract high-value clients.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&auto=format",
  },
  {
    name: "Healthcare & Clinics",
    desc: "Patient-focused websites optimised for appointment enquiries.",
    img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&h=400&fit=crop&auto=format",
  },
  {
    name: "Real Estate & Construction",
    desc: "High-converting property and project websites with lead capture.",
    img: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=600&h=400&fit=crop&auto=format",
  },
  {
    name: "Consultants & B2B Agencies",
    desc: "Thought-leadership platforms built to generate qualified enquiries.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&auto=format",
  },
];

export function IndustriesSection() {
  return (
    <section style={{ background: "#F8FAFC", padding: "96px 0" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 28px" }}>
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.45 }} style={{ textAlign:"center", marginBottom:"48px" }}>
          <h2 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"clamp(28px,3.5vw,42px)", color:"#0F172A", margin:"0 0 0", letterSpacing:"-0.8px" }}>
            Industries We Help Grow
          </h2>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:"16px", marginBottom:"36px" }} className="industry-grid">
          {industries.map((ind, i) => (
            <motion.a key={ind.name} href="#"
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.07 }}
              style={{
                display:"block", borderRadius:"16px", overflow:"hidden",
                textDecoration:"none", position:"relative",
                height:"260px", cursor:"pointer",
                transition:"transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.transform="translateY(-4px)"; el.style.boxShadow="0 16px 48px rgba(15,23,42,0.16)"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.transform="translateY(0)"; el.style.boxShadow="none"; }}
            >
              {/* Image */}
              <img src={ind.img} alt={ind.name} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}/>
              {/* Gradient overlay */}
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.3) 50%, transparent 100%)" }}/>
              {/* Arrow */}
              <div style={{ position:"absolute", top:"14px", right:"14px", width:"30px", height:"30px", background:"rgba(255,255,255,0.15)", backdropFilter:"blur(4px)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <ArrowUpRight size={14} color="#FFFFFF"/>
              </div>
              {/* Text */}
              <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"18px 16px" }}>
                <h3 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"14px", color:"#FFFFFF", margin:"0 0 5px", lineHeight:1.3 }}>{ind.name}</h3>
                <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"12px", color:"rgba(255,255,255,0.75)", margin:0, lineHeight:1.5 }}>{ind.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div style={{ textAlign:"center" }}>
          <a href="#" style={{
            fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"15px",
            color:"#2563EB", textDecoration:"none", display:"inline-flex",
            alignItems:"center", gap:"6px", border:"1px solid #BFDBFE",
            padding:"11px 22px", borderRadius:"10px", background:"#EFF6FF",
            transition:"background 0.18s",
          }}
            onMouseEnter={e=>e.currentTarget.style.background="#DBEAFE"}
            onMouseLeave={e=>e.currentTarget.style.background="#EFF6FF"}
          >Explore All Industries <ArrowUpRight size={15}/></a>
        </div>
      </div>
      <style>{`
        @media (max-width:900px) { .industry-grid { grid-template-columns:repeat(3,1fr) !important; } }
        @media (max-width:600px) { .industry-grid { grid-template-columns:repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
