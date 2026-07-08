import { motion } from "motion/react";
import { Lightbulb, Layers, BarChart2 } from "lucide-react";

const pillars = [
  {
    icon: <Lightbulb size={20} />,
    title: "Strategic Decisions",
    text: "We recommend what your business actually needs, not what is easiest to sell or design.",
  },
  {
    icon: <Layers size={20} />,
    title: "End-to-End Execution",
    text: "Strategy, UX, UI, SEO, development, integrations, testing, and launch support work under one process.",
  },
  {
    icon: <BarChart2 size={20} />,
    title: "Clear Progress",
    text: "You get structured updates, milestones, approvals, and visibility without daily confusion.",
  },
];

export function OwnershipSection() {
  return (
    <section style={{ background: "#0B1220", padding: "96px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="ownership-grid"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                color: "#60A5FA",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Our Promise
            </span>
            <h2
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(30px, 3.8vw, 46px)",
                color: "#FFFFFF",
                margin: "0 0 24px",
                letterSpacing: "-0.5px",
                lineHeight: 1.15,
              }}
            >
              You Bring the Business. We Handle the Website Decisions.
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "17px",
                lineHeight: 1.75,
                color: "#CBD5E1",
                margin: 0,
              }}
            >
              Once we understand your goals, audience, and requirements, we take ownership of the website strategy and execution. You don't need to manage designers, developers, SEO experts, and automation tools separately. We make informed decisions, keep you updated, and move the project forward with a clear process.
            </p>
          </motion.div>

          {/* Right: Pillars */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: "16px",
                  padding: "24px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  transition: "background 0.25s, border-color 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(96,165,250,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(96,165,250,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.10)";
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(96,165,250,0.12)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#60A5FA",
                    flexShrink: 0,
                  }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontWeight: 600,
                      fontSize: "17px",
                      color: "#FFFFFF",
                      margin: "0 0 6px",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "15px",
                      lineHeight: 1.65,
                      color: "#CBD5E1",
                      margin: 0,
                    }}
                  >
                    {p.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ownership-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
