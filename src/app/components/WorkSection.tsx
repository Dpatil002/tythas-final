import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "Website Redesign",
    title: "Premium Product Website",
    problem: "Product story and key sections lacked clarity and visual hierarchy.",
    solution: "Improved homepage flow, product storytelling, trust sections, mobile experience, and enquiry direction.",
    outcome: "Stronger brand perception and smoother product discovery.",
    colors: ["#EFF6FF", "#DBEAFE", "#BFDBFE"],
  },
  {
    tag: "Lead Generation Website",
    title: "Service Business Website",
    problem: "The website looked basic and the enquiry journey was weak.",
    solution: "Restructured service pages, CTA placement, contact journey, and lead capture flow.",
    outcome: "Clearer user path and stronger enquiry structure.",
    colors: ["#F0FDF4", "#DCFCE7", "#BBF7D0"],
  },
  {
    tag: "SEO + UX Improvement",
    title: "Business Website Growth System",
    problem: "Website pages were not structured for search visibility, clarity, or conversion.",
    solution: "Improved sitemap, on-page SEO structure, content hierarchy, and conversion-focused sections.",
    outcome: "Better discoverability foundation and stronger website experience.",
    colors: ["#FDF4FF", "#FAE8FF", "#F3D2FE"],
  },
];

function MockupVisual({ colors }: { colors: string[] }) {
  return (
    <div
      style={{
        height: "180px",
        background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 60%, ${colors[2]} 100%)`,
        borderRadius: "12px 12px 0 0",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          width: "80%",
          background: "#FFFFFF",
          borderRadius: "10px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          overflow: "hidden",
        }}
      >
        <div style={{ height: "24px", background: "#F8FAFC", display: "flex", alignItems: "center", padding: "0 10px", gap: "5px", borderBottom: "1px solid #E2E8F0" }}>
          <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#FCA5A5" }} />
          <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#FDE68A" }} />
          <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#86EFAC" }} />
          <div style={{ flex: 1, height: "12px", background: "#E2E8F0", borderRadius: "4px", marginLeft: "6px" }} />
        </div>
        <div style={{ padding: "10px" }}>
          <div style={{ height: "8px", background: "#E2E8F0", borderRadius: "4px", marginBottom: "6px", width: "70%" }} />
          <div style={{ height: "6px", background: "#F1F5F9", borderRadius: "4px", marginBottom: "4px" }} />
          <div style={{ height: "6px", background: "#F1F5F9", borderRadius: "4px", width: "85%", marginBottom: "8px" }} />
          <div style={{ display: "flex", gap: "6px" }}>
            <div style={{ height: "22px", background: "#2563EB", borderRadius: "6px", flex: "0 0 60px" }} />
            <div style={{ height: "22px", background: "#E2E8F0", borderRadius: "6px", flex: "0 0 50px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkSection() {
  return (
    <section id="work" style={{ background: "#F8FAFC", padding: "96px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <h2
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(30px, 4vw, 46px)",
              color: "#0B1220",
              margin: "0 0 16px",
              letterSpacing: "-0.5px",
              lineHeight: 1.15,
            }}
          >
            Work That Improves Clarity, Trust &amp; Conversion
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#475569",
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            We focus on improving how businesses explain their value, structure their pages, capture enquiries, and create a stronger digital presence.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
          className="work-grid"
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "24px",
                overflow: "hidden",
                transition: "box-shadow 0.25s, transform 0.25s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 12px 40px rgba(37,99,235,0.10)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              <MockupVisual colors={p.colors} />
              <div style={{ padding: "24px" }}>
                <span
                  style={{
                    display: "inline-block",
                    background: "#EFF6FF",
                    color: "#1E40AF",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    borderRadius: "999px",
                    padding: "4px 12px",
                    marginBottom: "14px",
                  }}
                >
                  {p.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontWeight: 600,
                    fontSize: "19px",
                    color: "#0B1220",
                    margin: "0 0 16px",
                    lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                  {[
                    { label: "Problem", value: p.problem },
                    { label: "Solution", value: p.solution },
                    { label: "Outcome", value: p.outcome },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "#64748B",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          display: "block",
                          marginBottom: "2px",
                        }}
                      >
                        {label}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "14px",
                          lineHeight: 1.55,
                          color: "#475569",
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#2563EB",
                    textDecoration: "none",
                    transition: "gap 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}
                >
                  View Project <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .work-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
