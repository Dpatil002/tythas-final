import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";
import tythasLogo from "../../assets/tythas-logo.png";

interface FooterProps { onAuditClick: () => void; }

export function Footer({ onAuditClick }: FooterProps) {
  const cols = [
    { heading:"Services", links:["Website Strategy","UI/UX Design","Website Development","SEO and CRO","AI Integrations","Automation"] },
    { heading:"Industries", links:["Manufacturing","Healthcare","Professional Services","Real Estate","Consultants"] },
    { heading:"Company", links:["About","Case Studies","Resources","Contact","Privacy Policy"] },
  ];

  return (
    <footer style={{ background:"#0F172A", padding:"72px 0 0" }}>
      <div style={{ maxWidth:"1240px", margin:"0 auto", padding:"0 28px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr 1.4fr", gap:"48px", paddingBottom:"56px", borderBottom:"1px solid rgba(255,255,255,0.07)" }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ background:"#FFFFFF", borderRadius:"10px", padding:"8px 14px", display:"inline-flex", alignItems:"center", marginBottom:"16px" }}>
              <img src={tythasLogo} alt="Tythas — Results That Matter" style={{ height:"34px", width:"auto", display:"block" }} />
            </div>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"14px", lineHeight:1.75, color:"#64748B", margin:"0 0 24px", maxWidth:"240px" }}>
              Strategy, design, development, SEO and automation for websites built to generate qualified leads.
            </p>
            <div style={{ display:"flex", gap:"10px" }}>
              {[<Twitter size={16}/>,<Linkedin size={16}/>,<Instagram size={16}/>].map((icon,i)=>(
                <a key={i} href="#" style={{ width:"34px", height:"34px", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center", color:"#64748B", transition:"background 0.18s, color 0.18s" }}
                  onMouseEnter={e=>{ e.currentTarget.style.background="rgba(37,99,235,0.2)"; e.currentTarget.style.color="#60A5FA"; }}
                  onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.06)"; e.currentTarget.style.color="#64748B"; }}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col=>(
            <div key={col.heading}>
              <h4 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"13px", color:"#FFFFFF", margin:"0 0 18px", textTransform:"uppercase", letterSpacing:"0.5px" }}>{col.heading}</h4>
              <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:"10px" }}>
                {col.links.map(l=>(
                  <li key={l}><a href="#" style={{ fontFamily:"'Inter',sans-serif", fontSize:"14px", color:"#64748B", textDecoration:"none", transition:"color 0.18s" }}
                    onMouseEnter={e=>e.currentTarget.style.color="#FFFFFF"}
                    onMouseLeave={e=>e.currentTarget.style.color="#64748B"}
                  >{l}</a></li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:700, fontSize:"13px", color:"#FFFFFF", margin:"0 0 18px", textTransform:"uppercase", letterSpacing:"0.5px" }}>Contact</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:"12px", marginBottom:"20px" }}>
              {[
                { icon:<Mail size={14}/>, text:"work@tythas.com" },
                { icon:<Phone size={14}/>, text:"8767977216" },
                { icon:<Phone size={14}/>, text:"7887685816" },
                { icon:<MapPin size={14}/>, text:"Pune, India" },
              ].map(({icon,text})=>(
                <span key={text} style={{ display:"flex", alignItems:"center", gap:"8px", fontFamily:"'Inter',sans-serif", fontSize:"13px", color:"#64748B" }}>
                  <span style={{ color:"#334155", flexShrink:0 }}>{icon}</span>{text}
                </span>
              ))}
            </div>
            <button onClick={onAuditClick} style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"13px", color:"#FFFFFF", background:"#2563EB", border:"none", borderRadius:"9px", padding:"9px 16px", cursor:"pointer", transition:"background 0.18s", whiteSpace:"nowrap" }}
              onMouseEnter={e=>e.currentTarget.style.background="#1D4ED8"}
              onMouseLeave={e=>e.currentTarget.style.background="#2563EB"}
            >Get Free Website Audit</button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"20px 0", flexWrap:"wrap", gap:"10px" }}>
          <span style={{ fontFamily:"'Inter',sans-serif", fontSize:"13px", color:"#334155" }}>© 2026 Tythas. All rights reserved.</span>
          <div style={{ display:"flex", gap:"20px" }}>
            {["Privacy Policy","Terms and Conditions"].map(l=>(
              <a key={l} href="#" style={{ fontFamily:"'Inter',sans-serif", fontSize:"13px", color:"#334155", textDecoration:"none", transition:"color 0.18s" }}
                onMouseEnter={e=>e.currentTarget.style.color="#FFFFFF"}
                onMouseLeave={e=>e.currentTarget.style.color="#334155"}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width:1024px) { .footer-grid { grid-template-columns:1fr 1fr 1fr !important; } }
        @media (max-width:640px) { .footer-grid { grid-template-columns:1fr 1fr !important; } }
      `}</style>
    </footer>
  );
}
