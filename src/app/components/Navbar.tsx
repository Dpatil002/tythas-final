import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import tythasLogo from "../../assets/tythas-logo.png";

interface NavbarProps {
  onAuditClick: () => void;
}

const NAV_LINKS = ["Services", "Solutions", "Industries", "Case Studies", "About", "Resources"];
const PHONE_NUMBERS = ["8767977216", "7887685816"];
const formatPhone = (n: string) => `+91 ${n.slice(0, 5)} ${n.slice(5)}`;

function PhoneDropdown({ align = "right" }: { align?: "left" | "right" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button onClick={() => setOpen(o => !o)} style={{
        fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px",
        color: "#475569", background: "none", border: "none", cursor: "pointer",
        padding: "8px 14px", display: "flex", alignItems: "center", gap: "6px",
        transition: "color 0.18s",
      }}
        onMouseEnter={e => e.currentTarget.style.color = "#0F172A"}
        onMouseLeave={e => { if (!open) e.currentTarget.style.color = "#475569"; }}
      >
        Talk to an Expert
        <ChevronDown size={14} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
      </button>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 8px)", [align]: 0,
          background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "12px",
          boxShadow: "0 16px 40px rgba(15,23,42,0.14)", padding: "8px", minWidth: "220px", zIndex: 200,
        }}>
          {PHONE_NUMBERS.map(num => (
            <a key={num} href={`tel:+91${num}`} onClick={() => setOpen(false)} style={{
              display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px",
              borderRadius: "8px", textDecoration: "none", color: "#0F172A",
              fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: "14px", transition: "background 0.15s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "#F8FAFC"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <span style={{ width: "30px", height: "30px", borderRadius: "8px", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Phone size={14} color="#2563EB" />
              </span>
              {formatPhone(num)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar({ onAuditClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "#FFFFFF",
      borderBottom: `1px solid ${scrolled ? "#E2E8F0" : "transparent"}`,
      boxShadow: scrolled ? "0 1px 16px rgba(15,23,42,0.06)" : "none",
      transition: "box-shadow 0.3s, border-color 0.3s",
      height: "72px", display: "flex", alignItems: "center",
    }}>
      <div style={{
        maxWidth: "1240px", margin: "0 auto", padding: "0 28px",
        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src={tythasLogo} alt="Tythas — Results That Matter" style={{ height: "44px", width: "auto", display: "block" }} />
        </a>

        {/* Desktop Centre Nav */}
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px",
              color: "#475569", textDecoration: "none",
              padding: "6px 12px", borderRadius: "8px",
              transition: "color 0.18s, background 0.18s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "#0F172A"; e.currentTarget.style.background = "#F8FAFC"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#475569"; e.currentTarget.style.background = "transparent"; }}
            >{link}</a>
          ))}
        </nav>

        {/* Desktop Right CTAs */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <PhoneDropdown />
          <button onClick={onAuditClick} style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "14px",
            color: "#FFFFFF", background: "#2563EB", border: "none",
            borderRadius: "10px", padding: "9px 18px", cursor: "pointer",
            transition: "background 0.18s, transform 0.15s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#1D4ED8"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#2563EB"; e.currentTarget.style.transform = "translateY(0)"; }}
          >Get Free Website Audit</button>
        </div>

        {/* Mobile row */}
        <div className="mobile-controls" style={{ display: "none", alignItems: "center", gap: "10px" }}>
          <button onClick={onAuditClick} style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px",
            color: "#FFFFFF", background: "#2563EB", border: "none",
            borderRadius: "8px", padding: "8px 14px", cursor: "pointer",
          }}>Free Audit</button>
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{
            background: "none", border: "none", cursor: "pointer", color: "#0F172A", padding: "4px",
          }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu" style={{
          position: "absolute", top: "72px", left: 0, right: 0,
          background: "#FFFFFF", borderBottom: "1px solid #E2E8F0",
          padding: "12px 20px 20px", display: "flex", flexDirection: "column", gap: "2px",
        }}>
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" onClick={() => setMobileOpen(false)} style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "16px",
              color: "#0F172A", textDecoration: "none", padding: "12px 4px",
              borderBottom: "1px solid #F1F5F9",
            }}>{link}</a>
          ))}
          <div style={{ padding: "8px 0 0" }}>
            <PhoneDropdown align="left" />
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) { .desktop-nav { display: none !important; } .mobile-controls { display: flex !important; } }
      `}</style>
    </header>
  );
}
