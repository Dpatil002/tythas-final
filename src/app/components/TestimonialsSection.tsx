import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "The team redesigned our website with a clear strategy and real conversion focus. We started getting more qualified enquiries within the first two months.",
    name: "Rahul M.", role: "Director", company: "Manufacturing Co.", initials: "RM", color: "#2563EB",
    service: "Website Strategy & Development",
  },
  {
    text: "They understood our healthcare audience and restructured our patient journey. Appointment enquiries increased noticeably and the feedback from patients has been positive.",
    name: "Dr. Priya S.", role: "Founder", company: "Medical Clinic", initials: "PS", color: "#16A34A",
    service: "UX Design & CRO",
  },
  {
    text: "Our SEO was practically non-existent before. They rebuilt the content structure, fixed our technical issues and we're now ranking for terms that actually bring in clients.",
    name: "Amit K.", role: "Managing Partner", company: "B2B Consulting Firm", initials: "AK", color: "#7C3AED",
    service: "SEO & Content Strategy",
  },
];

export function TestimonialsSection() {
  return (
    <section style={{ background:"#F8FAFC", padding:"96px 0" }}>
      <div style={{ maxWidth:"1240px", margin:"0 auto", padding:"0 28px" }}>
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.45 }} style={{ textAlign:"center", marginBottom:"56px" }}>
          <h2 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"clamp(28px,3.5vw,42px)", color:"#0F172A", margin:"0 0 0", letterSpacing:"-0.8px" }}>
            What Our Clients Say
          </h2>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"24px" }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.09 }}
              style={{ background:"#FFFFFF", border:"1px solid #E2E8F0", borderRadius:"20px", padding:"28px", display:"flex", flexDirection:"column", gap:"20px", transition:"box-shadow 0.22s, transform 0.22s" }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.boxShadow="0 8px 32px rgba(15,23,42,0.07)"; el.style.transform="translateY(-3px)"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.boxShadow="none"; el.style.transform="translateY(0)"; }}
            >
              <div style={{ display:"flex", gap:"2px" }}>
                {[1,2,3,4,5].map(s=><Star key={s} size={14} fill="#F59E0B" color="#F59E0B"/>)}
              </div>
              <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"15px", lineHeight:1.75, color:"#475569", margin:0, flex:1 }}>
                "{t.text}"
              </p>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", paddingTop:"4px", borderTop:"1px solid #F1F5F9" }}>
                <div style={{ width:"40px", height:"40px", borderRadius:"50%", background:t.color, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <span style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"12px", color:"#FFFFFF" }}>{t.initials}</span>
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"14px", color:"#0F172A" }}>{t.name}</div>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:"12px", color:"#64748B" }}>{t.role}, {t.company}</div>
                </div>
                <span style={{ fontFamily:"'Inter',sans-serif", fontSize:"10px", color:t.color, background:`${t.color}14`, padding:"3px 9px", borderRadius:"999px", fontWeight:600, whiteSpace:"nowrap" }}>{t.service}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width:860px) { .testimonials-grid { grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}
