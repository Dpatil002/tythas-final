import { motion } from "motion/react";
import { ArrowRight, Star, TrendingUp, Users, BarChart3, Zap } from "lucide-react";

interface HeroSectionProps { onAuditClick: () => void; }

function DashboardMockup() {
  return (
    <div style={{
      background: "#FFFFFF", borderRadius: "20px",
      border: "1px solid #E2E8F0",
      boxShadow: "0 24px 64px rgba(15,23,42,0.10), 0 4px 16px rgba(15,23,42,0.06)",
      overflow: "hidden", position: "relative",
    }}>
      {/* Top bar */}
      <div style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0", padding: "12px 18px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ display: "flex", gap: "5px" }}>
          {["#FCA5A5","#FDE68A","#86EFAC"].map(c => <div key={c} style={{ width:"9px",height:"9px",borderRadius:"50%",background:c }}/>)}
        </div>
        <div style={{ flex:1, height:"20px", background:"#E2E8F0", borderRadius:"5px", maxWidth:"180px" }}/>
        <span style={{ fontFamily:"'Inter',sans-serif", fontSize:"11px", color:"#94A3B8", fontWeight:500 }}>Live Dashboard</span>
      </div>

      <div style={{ padding: "18px" }}>
        {/* KPI row */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"10px", marginBottom:"16px" }}>
          {[
            { label:"Qualified Leads", val:"142", change:"+28%", icon:<Users size={13}/>, color:"#2563EB", bg:"#EFF6FF" },
            { label:"Organic Traffic", val:"8.4K", change:"+63%", icon:<TrendingUp size={13}/>, color:"#16A34A", bg:"#F0FDF4" },
            { label:"Conversion Rate", val:"4.8%", change:"+1.2%", icon:<BarChart3 size={13}/>, color:"#7C3AED", bg:"#F5F3FF" },
            { label:"Revenue Influenced", val:"₹12.6L", change:"+41%", icon:<Zap size={13}/>, color:"#EA580C", bg:"#FFF7ED" },
          ].map(kpi => (
            <div key={kpi.label} style={{ background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:"12px", padding:"12px 10px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"6px" }}>
                <span style={{ color:kpi.color, background:kpi.bg, padding:"4px", borderRadius:"6px", display:"flex" }}>{kpi.icon}</span>
                <span style={{ fontFamily:"'Inter',sans-serif", fontSize:"10px", fontWeight:600, color:"#16A34A" }}>{kpi.change}</span>
              </div>
              <div style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"18px", color:"#0F172A", lineHeight:1.1 }}>{kpi.val}</div>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:"9px", color:"#64748B", marginTop:"2px", lineHeight:1.3 }}>{kpi.label}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{ background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:"12px", padding:"14px", marginBottom:"12px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"10px" }}>
            <span style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"12px", color:"#0F172A" }}>Monthly Lead Growth</span>
            <span style={{ fontFamily:"'Inter',sans-serif", fontSize:"10px", color:"#16A34A", fontWeight:600, background:"#F0FDF4", padding:"2px 8px", borderRadius:"999px", border:"1px solid #BBF7D0" }}>↑ 35% vs last quarter</span>
          </div>
          <svg width="100%" height="60" viewBox="0 0 340 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="hGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0 48 C40 44 70 36 100 30 C130 24 150 38 180 26 C210 14 240 10 280 6 C300 4 320 5 340 4" stroke="#2563EB" strokeWidth="2.5" fill="none"/>
            <path d="M0 48 C40 44 70 36 100 30 C130 24 150 38 180 26 C210 14 240 10 280 6 C300 4 320 5 340 4 L340 60 L0 60Z" fill="url(#hGrad)"/>
            <circle cx="340" cy="4" r="4" fill="#2563EB"/>
          </svg>
        </div>

        {/* Top pages + AI score */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" }}>
          <div style={{ background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:"12px", padding:"12px" }}>
            <div style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"11px", color:"#0F172A", marginBottom:"8px" }}>Top Landing Pages</div>
            {[{page:"/services",conv:"12.4%"},{page:"/case-studies",conv:"8.1%"},{page:"/contact",conv:"6.9%"}].map(p=>(
              <div key={p.page} style={{ display:"flex", justifyContent:"space-between", padding:"4px 0", borderBottom:"1px solid #F1F5F9" }}>
                <span style={{ fontFamily:"'Inter',sans-serif", fontSize:"10px", color:"#475569" }}>{p.page}</span>
                <span style={{ fontFamily:"'Inter',sans-serif", fontSize:"10px", fontWeight:600, color:"#16A34A" }}>{p.conv}</span>
              </div>
            ))}
          </div>
          <div style={{ background:"linear-gradient(135deg,#EFF6FF 0%,#DBEAFE 100%)", border:"1px solid #BFDBFE", borderRadius:"12px", padding:"12px" }}>
            <div style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"11px", color:"#1E40AF", marginBottom:"8px" }}>AI Lead Score</div>
            <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"6px" }}>
              <div style={{ flex:1, height:"6px", background:"#BFDBFE", borderRadius:"999px", overflow:"hidden" }}>
                <div style={{ width:"82%", height:"100%", background:"#2563EB", borderRadius:"999px" }}/>
              </div>
              <span style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"16px", color:"#1E40AF" }}>82</span>
            </div>
            <div style={{ fontFamily:"'Inter',sans-serif", fontSize:"10px", color:"#3B82F6", lineHeight:1.5 }}>High-intent leads detected this week</div>
            <div style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"14px", color:"#2563EB", marginTop:"6px" }}>+24 new</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection({ onAuditClick }: HeroSectionProps) {
  return (
    <section style={{ background:"#F8FAFC", paddingTop:"140px", paddingBottom:"80px", overflow:"hidden" }}>
      <div style={{ maxWidth:"1240px", margin:"0 auto", padding:"0 28px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"center" }} className="hero-grid">
        {/* Left */}
        <div>
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.45 }}>
            <span style={{
              display:"inline-flex", alignItems:"center", gap:"6px",
              background:"#EFF6FF", color:"#1E40AF", borderRadius:"999px",
              padding:"5px 14px", fontFamily:"'Inter',sans-serif",
              fontWeight:600, fontSize:"11px", letterSpacing:"0.8px",
              textTransform:"uppercase", marginBottom:"24px", border:"1px solid #BFDBFE",
            }}>
              <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#2563EB" }}/>
              Websites Built to Generate Revenue
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.07 }} style={{
            fontFamily:"'Manrope',sans-serif", fontWeight:800,
            fontSize:"clamp(38px,5vw,64px)", lineHeight:1.08,
            color:"#0F172A", margin:"0 0 24px", letterSpacing:"-1.5px",
          }}>
            Build a Digital Presence That Brings You{" "}
            <span style={{ color:"#2563EB" }}>More Business.</span>
          </motion.h1>

          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.45, delay:0.14 }} style={{
            fontFamily:"'Inter',sans-serif", fontSize:"18px", lineHeight:1.75,
            color:"#475569", margin:"0 0 36px", maxWidth:"520px",
          }}>
            We help growing businesses attract the right audience, generate qualified enquiries and turn more visitors into customers.
          </motion.p>

          <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4, delay:0.2 }} style={{ display:"flex", gap:"12px", flexWrap:"wrap", marginBottom:"36px" }}>
            <button onClick={onAuditClick} style={{
              fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"16px",
              color:"#FFFFFF", background:"#2563EB", border:"none",
              borderRadius:"12px", padding:"14px 28px", cursor:"pointer",
              transition:"background 0.18s, transform 0.15s",
              display:"flex", alignItems:"center", gap:"8px",
            }}
              onMouseEnter={e=>{ e.currentTarget.style.background="#1D4ED8"; e.currentTarget.style.transform="translateY(-1px)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.background="#2563EB"; e.currentTarget.style.transform="translateY(0)"; }}
            >Get My Free Website Audit <ArrowRight size={16}/></button>
            <a href="#" style={{
              fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"16px",
              color:"#0F172A", background:"#FFFFFF", border:"1px solid #E2E8F0",
              borderRadius:"12px", padding:"14px 24px", textDecoration:"none",
              transition:"border-color 0.18s, transform 0.15s",
              display:"inline-flex", alignItems:"center",
            }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor="#2563EB"; e.currentTarget.style.transform="translateY(-1px)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor="#E2E8F0"; e.currentTarget.style.transform="translateY(0)"; }}
            >See Our Work</a>
          </motion.div>

          {/* Trust row */}
          <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4, delay:0.28 }} style={{ display:"flex", alignItems:"center", gap:"14px", flexWrap:"wrap" }}>
            <div style={{ display:"flex" }}>
              {["#2563EB","#7C3AED","#EA580C","#16A34A","#0F172A"].map((c,i) => (
                <div key={i} style={{
                  width:"34px", height:"34px", borderRadius:"50%",
                  background:c, border:"2px solid #FFFFFF",
                  marginLeft: i > 0 ? "-10px" : "0",
                  display:"flex", alignItems:"center", justifyContent:"center",
                }}>
                  <span style={{ fontFamily:"'Inter',sans-serif", fontSize:"11px", fontWeight:700, color:"#fff" }}>
                    {["AK","SR","PM","RV","MK"][i]}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ display:"flex", gap:"2px", marginBottom:"3px" }}>
                {[1,2,3,4,5].map(i=><Star key={i} size={12} fill="#F59E0B" color="#F59E0B"/>)}
              </div>
              <span style={{ fontFamily:"'Inter',sans-serif", fontSize:"13px", color:"#475569", fontWeight:500 }}>
                Trusted by ambitious businesses across India and international markets
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right: dashboard */}
        <motion.div initial={{ opacity:0, x:32 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.6, delay:0.1 }} className="hero-dashboard" style={{ position:"relative" }}>
          {/* Glow */}
          <div style={{
            position:"absolute", top:"10%", left:"5%", right:"5%", height:"70%",
            background:"radial-gradient(ellipse,rgba(37,99,235,0.12) 0%,transparent 70%)",
            pointerEvents:"none", zIndex:0,
          }}/>
          <div style={{ position:"relative", zIndex:1 }}>
            <DashboardMockup/>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width:900px) { .hero-grid { grid-template-columns:1fr !important; gap:40px !important; } .hero-dashboard { display:none !important; } }
      `}</style>
    </section>
  );
}
