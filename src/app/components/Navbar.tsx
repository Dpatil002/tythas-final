import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  onAuditClick: () => void;
}

const NAV_LINKS = ["Services", "Solutions", "Industries", "Case Studies", "About", "Resources"];

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
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Tythas mark — T letterform with upward arrow accent */}
          <div style={{
            width: "34px", height: "34px", borderRadius: "9px",
            background: "linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 8px rgba(37,99,235,0.28)",
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {/* Horizontal bar of T */}
              <rect x="3" y="4" width="14" height="2.5" rx="1.25" fill="white"/>
              {/* Vertical stem of T */}
              <rect x="8.75" y="6.5" width="2.5" height="9.5" rx="1.25" fill="white"/>
              {/* Small upward accent chevron */}
              <path d="M7.5 3.5L10 1.2L12.5 3.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.55"/>
            </svg>
          </div>
          <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: "18px", color: "#0F172A", letterSpacing: "-0.5px" }}>
            Tythas
          </span>
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
          <a href="#" style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px",
            color: "#475569", textDecoration: "none", padding: "8px 14px",
            transition: "color 0.18s",
          }}
            onMouseEnter={e => e.currentTarget.style.color = "#0F172A"}
            onMouseLeave={e => e.currentTarget.style.color = "#475569"}
          >Talk to an Expert</a>
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
          <a href="#" style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "15px",
            color: "#475569", textDecoration: "none", padding: "12px 4px",
          }}>Talk to an Expert</a>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) { .desktop-nav { display: none !important; } .mobile-controls { display: flex !important; } }
      `}</style>
    </header>
  );
}
