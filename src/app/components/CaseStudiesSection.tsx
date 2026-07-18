import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const cases = [
  {
    tag: "Dewaxify",
    labels: ["Healthcare", "SEO", "CRO", "Website"],
    title: "Ear Wax Removal Clinic, UK",
    description: "7,900% increase in organic traffic over 12 months period, clicks went from 40 to steady 4000.",
    metricType: "stat",
    metrics: [{ val: "+200%", label: "Appointment Enquiries" }, { val: "+3×", label: "Website Conversions" }],
    website: "https://dewaxifylondon.com/",
    cta: "View Website",
    color: "#2563EB", bg: "#EFF6FF",
  },
  {
    tag: "SB Patil Group",
    labels: ["Real Estate", "SEO", "Lead Generation", "Luxury"],
    title: "Luxury Real Estate",
    description: "Directly converted traffic gains into business revenue by scaling monthly enquiries from 40 to 250 per month.",
    metricType: "stat",
    metrics: [{ val: "66.67%", label: "Organic Growth" }, { val: "4.3%", label: "CTR" }],
    website: "https://sbpatilgroup.in/",
    cta: "View Website",
    color: "#16A34A", bg: "#F0FDF4",
  },
  {
    tag: "Gixel Labs",
    labels: ["AI", "3D", "Branding", "SEO"],
    title: "Building Authority in an AI Market",
    description: "Positioned the brand as an industry authority using SEO, content strategy and conversion focused website improvements.",
    metricType: "stat",
    metrics: [{ val: "+300%", label: "Organic Enquiries" }, { val: "1.8×", label: "Return on Marketing Spend" }],
    website: "https://www.gixellabs.com/",
    cta: "View Website",
    color: "#7C3AED", bg: "#F5F3FF",
  },
  {
    tag: "Homyfyd",
    labels: ["SaaS", "CRM", "Dashboard", "Real Estate"],
    title: "Building a Smarter Real Estate Platform for Property Businesses",
    description: "Designed a comprehensive real estate platform that simplifies property listings, inquiry management, CRM operations, and site visit scheduling. The experience enables developers, brokers, and property consultants to manage the complete customer journey through one intuitive platform.",
    metricType: "highlight",
    metrics: [{ val: "CRM Powered" }, { val: "End-to-End Platform" }],
    website: null,
    cta: "View Case Study",
    color: "#0891B2", bg: "#ECFEFF",
  },
  {
    tag: "Happy Haven",
    labels: ["AI", "E-commerce", "Personalization", "Product Design"],
    title: "Redefining Personalized Gifting with AI",
    description: "Designed an AI-powered gifting platform that helps users build thoughtful, personalized gift hampers through intelligent recommendations, seamless customization, and an effortless shopping experience.",
    metricType: "highlight",
    metrics: [{ val: "AI Powered" }, { val: "100% Customizable" }],
    website: null,
    cta: "View Case Study",
    color: "#DB2777", bg: "#FDF2F8",
  },
  {
    tag: "The PowerPoint Coworking",
    labels: ["Commercial", "Coworking", "Lead Generation", "UX"],
    title: "Creating a Digital Experience for Modern Workspaces",
    description: "Designed a conversion-focused coworking website that helps professionals and businesses discover workspaces, compare facilities, understand pricing, and submit enquiries through a clean and intuitive user experience.",
    metricType: "highlight",
    metrics: [{ val: "Lead Focused" }, { val: "Mobile Optimized" }],
    website: null,
    cta: "View Case Study",
    color: "#EA580C", bg: "#FFF7ED",
  },
] as const;

function NavButton({ direction, onClick, disabled }: { direction: "prev" | "next"; onClick: () => void; disabled: boolean }) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous case study" : "Next case study"}
      whileHover={disabled ? {} : { scale: 1.08, y: -2, boxShadow: "0 14px 34px rgba(37,99,235,0.28)" }}
      whileTap={disabled ? {} : { scale: 0.94 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
      style={{
        position: "absolute", top: "50%", [direction === "prev" ? "left" : "right"]: "8px",
        transform: "translateY(-50%)", zIndex: 20,
        width: "48px", height: "48px", borderRadius: "50%",
        background: "rgba(255,255,255,0.65)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 8px 24px rgba(15,23,42,0.10)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#0F172A", cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.35 : 1,
      }}
    >
      {direction === "prev" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </motion.button>
  );
}

function MetricBand({ c, hovered }: { c: (typeof cases)[number]; hovered: boolean }) {
  return (
    <div style={{ background: c.bg, padding: "20px 24px", borderBottom: "1px solid #E2E8F0", minHeight: "96px", transition: "background 0.25s" }}>
      <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: "11px", color: c.color, textTransform: "uppercase", letterSpacing: "0.6px", display: "block", marginBottom: "14px" }}>{c.tag}</span>
      {c.metricType === "stat" ? (
        <div style={{ display: "flex", gap: "24px" }}>
          {c.metrics.map((m: any) => (
            <div key={m.label}>
              <div style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: "26px", color: c.color, lineHeight: 1.1, transition: "transform 0.25s", transform: hovered ? "scale(1.06)" : "scale(1)", transformOrigin: "left center" }}>{m.val}</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "12px", color: "#64748B", marginTop: "2px" }}>{m.label}</div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {c.metrics.map((m: any) => (
            <span key={m.val} style={{
              fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: "13px", color: c.color,
              background: "#FFFFFF", border: `1px solid ${c.color}33`, borderRadius: "999px", padding: "7px 14px",
              transition: "transform 0.25s", transform: hovered ? "scale(1.06)" : "scale(1)", display: "inline-block",
            }}>{m.val}</span>
          ))}
        </div>
      )}
    </div>
  );
}

function CaseCard({ c, isActive }: { c: (typeof cases)[number]; isActive: boolean }) {
  const [hovered, setHovered] = useState(false);
  const [arrowGap, setArrowGap] = useState("5px");

  return (
    <motion.div
      animate={{ scale: isActive ? 1 : 0.94, opacity: isActive ? 1 : 0.55 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? `linear-gradient(135deg, ${c.bg} 0%, #F8FAFC 100%)` : "#F8FAFC",
        border: `1px solid ${hovered ? `${c.color}55` : "#E2E8F0"}`,
        borderRadius: "20px", overflow: "hidden", height: "100%",
        boxShadow: hovered ? `0 16px 44px ${c.color}22` : "none",
        transition: "background 0.28s, border-color 0.28s, box-shadow 0.28s",
        display: "flex", flexDirection: "column",
      }}
    >
      <MetricBand c={c} hovered={hovered} />
      <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "14px" }}>
          {c.labels.map((label) => (
            <span key={label} style={{
              fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: "11px", color: "#475569",
              background: "rgba(255,255,255,0.6)", backdropFilter: "blur(6px)",
              border: "1px solid rgba(15,23,42,0.08)", borderRadius: "999px", padding: "4px 11px",
              transition: "box-shadow 0.2s", boxShadow: hovered ? `0 0 0 1px ${c.color}33` : "none",
            }}>{label}</span>
          ))}
        </div>
        <h3 style={{
          fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: "18px", color: "#0F172A", margin: "0 0 10px", lineHeight: 1.35,
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{c.title}</h3>
        <p style={{
          fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.65, color: "#475569", margin: "0 0 20px", flex: 1,
          display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{c.description}</p>
        {c.website ? (
          <a href={c.website} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: arrowGap, fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: "13px", color: c.color, textDecoration: "none", transition: "gap 0.2s" }}
            onMouseEnter={() => setArrowGap("9px")} onMouseLeave={() => setArrowGap("5px")}
          >{c.cta} <ArrowUpRight size={14} /></a>
        ) : (
          <button
            style={{ display: "inline-flex", alignItems: "center", gap: arrowGap, fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: "13px", color: c.color, background: "none", border: "none", padding: 0, cursor: "pointer", transition: "gap 0.2s" }}
            onMouseEnter={() => setArrowGap("9px")} onMouseLeave={() => setArrowGap("5px")}
          >{c.cta} <ArrowUpRight size={14} /></button>
        )}
      </div>
    </motion.div>
  );
}

export function CaseStudiesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(true);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); scrollPrev(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); scrollNext(); }
  };

  return (
    <section id="work" style={{ background: "#FFFFFF", padding: "96px 0" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 28px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} style={{ textAlign: "center", marginBottom: "56px" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: "#EFF6FF", color: "#1E40AF", borderRadius: "999px",
            padding: "5px 14px", fontFamily: "'Inter',sans-serif",
            fontWeight: 600, fontSize: "11px", letterSpacing: "0.8px",
            textTransform: "uppercase", marginBottom: "18px", border: "1px solid #BFDBFE",
          }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2563EB" }} />
            Client Success Stories
          </span>
          <h2 style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: "clamp(28px,3.5vw,42px)", color: "#0F172A", margin: "0 0 16px", letterSpacing: "-0.8px", lineHeight: 1.12 }}>
            Real Results. Not Empty Promises.
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "18px", lineHeight: 1.7, color: "#475569", maxWidth: "620px", margin: "0 auto" }}>
            Explore projects across Healthcare, Real Estate, AI, SaaS and E-commerce — see how strategy-led design turned each into measurable results.
          </p>
        </motion.div>

        <div
          style={{ position: "relative" }}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Case studies"
          onKeyDown={handleKeyDown}
        >
          <div ref={emblaRef} style={{ overflow: "hidden" }} className="cs-viewport">
            <div style={{ display: "flex" }}>
              {cases.map((c, i) => (
                <div key={c.tag} className="cs-slide">
                  <CaseCard c={c} isActive={i === selectedIndex} />
                </div>
              ))}
            </div>
          </div>

          <NavButton direction="prev" onClick={scrollPrev} disabled={!canScrollPrev} />
          <NavButton direction="next" onClick={scrollNext} disabled={!canScrollNext} />
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginTop: "28px", fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F172A" }}>
          <AnimatePresence mode="wait">
            <motion.span key={selectedIndex} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
              {String(selectedIndex + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
          <span style={{ color: "#94A3B8", fontWeight: 500 }}>/ {String(cases.length).padStart(2, "0")}</span>
        </div>
      </div>

      <style>{`
        .cs-slide { flex: 0 0 100%; padding: 0 10px; min-width: 0; }
        @media (min-width: 640px) { .cs-slide { flex: 0 0 50%; } }
        @media (min-width: 1024px) { .cs-slide { flex: 0 0 33.3333%; } }
        [role="region"][aria-roledescription="carousel"]:focus-visible { outline: 2px solid #2563EB; outline-offset: 6px; border-radius: 20px; }
      `}</style>
    </section>
  );
}
