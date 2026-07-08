import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, TrendingUp, BookOpen, Cpu, BarChart2, Globe } from "lucide-react";

const categories = [
  {
    icon: <TrendingUp size={18} />,
    title: "Search Strategy & Market Intelligence",
    description:
      "Understand what your customers search for, where competitors are winning, and which opportunities can bring qualified traffic.",
    tags: [
      "Search Intent Mapping",
      "Competitor Intelligence",
      "Content Gap Analysis",
      "Trend Analysis",
      "Lead-Focused SEO",
    ],
  },
  {
    icon: <BookOpen size={18} />,
    title: "Authority & Content Growth",
    description:
      "Build strong content systems that improve relevance, trust, topical depth, and long-term organic visibility.",
    tags: [
      "Topical Authority Strategy",
      "Content Cluster Development",
      "Semantic SEO",
      "E-E-A-T Optimization",
      "Industry Authority Building",
    ],
  },
  {
    icon: <Cpu size={18} />,
    title: "Technical & Structural SEO",
    description:
      "Improve how search engines understand, crawl, connect, and surface your website across traditional and AI-driven search.",
    tags: [
      "Internal Linking Architecture",
      "Advanced Schema",
      "Programmatic SEO",
      "AI Search Optimization",
    ],
  },
  {
    icon: <BarChart2 size={18} />,
    title: "SEO + Conversion Optimization",
    description:
      "Connect SEO with conversion so traffic is not wasted and the website is optimized for real enquiries and business outcomes.",
    tags: [
      "SEO + CRO Integration",
      "Conversion Funnel Optimization",
      "User Behavior Analysis",
      "Heatmaps & Sessions",
      "Revenue Tracking",
    ],
  },
  {
    icon: <Globe size={18} />,
    title: "Growth & Authority Expansion",
    description:
      "Strengthen your authority, local visibility, and market presence through targeted SEO and trust-building strategies.",
    tags: [
      "Strategic Link Building",
      "Digital PR",
      "Local Market Domination",
      "Lead Generation SEO",
    ],
  },
];

function SEOGrowthVisual() {
  return (
    <div
      style={{
        background: "#F8FAFC",
        border: "1px solid #E2E8F0",
        borderRadius: "16px",
        padding: "20px 20px 16px",
        marginBottom: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 600,
            fontSize: "13px",
            color: "#0B1220",
          }}
        >
          Organic Growth Trajectory
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "11px",
            color: "#16A34A",
            background: "#F0FDF4",
            padding: "3px 10px",
            borderRadius: "999px",
            border: "1px solid #BBF7D0",
          }}
        >
          ↑ Compound growth
        </span>
      </div>
      <svg width="100%" height="64" viewBox="0 0 320 64" preserveAspectRatio="none">
        <defs>
          <linearGradient id="seoGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* baseline before SEO */}
        <path
          d="M0 52 C30 50 60 48 90 46 C110 44 120 44 140 43"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 3"
        />
        {/* growth after SEO */}
        <path
          d="M140 43 C160 40 180 32 210 22 C240 12 270 8 320 4"
          stroke="#2563EB"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M140 43 C160 40 180 32 210 22 C240 12 270 8 320 4 L320 64 L0 64 L0 52 C30 50 60 48 90 46 C110 44 120 44 140 43 Z"
          fill="url(#seoGrad)"
        />
        {/* SEO start marker */}
        <line x1="140" y1="10" x2="140" y2="56" stroke="#2563EB" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="140" cy="43" r="4" fill="#2563EB" />
        <rect x="106" y="6" width="70" height="16" rx="4" fill="#EFF6FF" stroke="#DBEAFE" strokeWidth="1" />
        <text x="141" y="17" textAnchor="middle" fill="#1E40AF" fontSize="9" fontFamily="Inter" fontWeight="600">SEO Growth Plan</text>
      </svg>
      <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
        {[
          { label: "Organic Sessions", val: "↑ 3–8×" },
          { label: "Keyword Rankings", val: "↑ Compound" },
          { label: "Lead Quality", val: "↑ Targeted" },
        ].map(({ label, val }) => (
          <div key={label} style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                color: "#2563EB",
              }}
            >
              {val}
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "10px",
                color: "#64748B",
                marginTop: "1px",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface AdvancedSEOSectionProps {
  onAuditClick?: () => void;
}

export function AdvancedSEOSection({ onAuditClick }: AdvancedSEOSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ background: "#FFFFFF", padding: "100px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="seo-main-grid"
        >
          {/* LEFT — sticky */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{ position: "sticky", top: "100px" }}
            className="seo-left-sticky"
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#EFF6FF",
                color: "#1E40AF",
                borderRadius: "999px",
                padding: "5px 14px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                marginBottom: "20px",
                border: "1px solid #DBEAFE",
              }}
            >
              <TrendingUp size={12} />
              Advanced SEO Services
            </span>

            <h2
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 3.2vw, 42px)",
                color: "#0B1220",
                margin: "0 0 20px",
                letterSpacing: "-0.5px",
                lineHeight: 1.15,
              }}
            >
              SEO Built for Visibility, Authority &amp; Lead Generation
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                lineHeight: 1.75,
                color: "#475569",
                margin: "0 0 28px",
              }}
            >
              We go beyond basic keywords and metadata. Our SEO approach connects search intent, content strategy, technical structure, user behavior, authority building, and conversion tracking to help your website attract and convert better-quality traffic.
            </p>

            <button
              onClick={onAuditClick}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                color: "#FFFFFF",
                background: "#2563EB",
                border: "none",
                borderRadius: "12px",
                padding: "13px 24px",
                cursor: "pointer",
                transition: "background 0.2s, transform 0.15s",
                marginBottom: "32px",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#1E40AF"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#2563EB"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Plan My SEO Growth
            </button>

            <SEOGrowthVisual />
          </motion.div>

          {/* RIGHT — accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {categories.map((cat, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  style={{
                    background: "#F8FAFC",
                    border: `1px solid ${isOpen ? "#2563EB" : "#E2E8F0"}`,
                    borderRadius: "20px",
                    overflow: "hidden",
                    transition: "border-color 0.25s",
                  }}
                >
                  {/* Header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "20px 22px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "10px",
                        background: isOpen ? "#2563EB" : "#EFF6FF",
                        color: isOpen ? "#FFFFFF" : "#2563EB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "background 0.25s, color 0.25s",
                      }}
                    >
                      {cat.icon}
                    </div>
                    <span
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#0B1220",
                        flex: 1,
                        lineHeight: 1.3,
                      }}
                    >
                      {cat.title}
                    </span>
                    <ChevronDown
                      size={18}
                      style={{
                        color: "#64748B",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s",
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  {/* Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          style={{
                            padding: "0 22px 22px",
                            borderTop: "1px solid #E2E8F0",
                            marginTop: "0",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "14px",
                              lineHeight: 1.7,
                              color: "#475569",
                              margin: "16px 0 14px",
                            }}
                          >
                            {cat.description}
                          </p>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {cat.tags.map((tag) => (
                              <span
                                key={tag}
                                style={{
                                  fontFamily: "'Inter', sans-serif",
                                  fontWeight: 500,
                                  fontSize: "12px",
                                  color: "#1E40AF",
                                  background: "#EFF6FF",
                                  border: "1px solid #DBEAFE",
                                  borderRadius: "999px",
                                  padding: "4px 12px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .seo-main-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .seo-left-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}
