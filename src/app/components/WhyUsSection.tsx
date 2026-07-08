import { motion } from "motion/react";
import { Brain, Shield, Link2, ClipboardCheck } from "lucide-react";

const points = [
  {
    icon: <Brain size={20} />,
    title: "We Think Beyond Design",
    text: "Every section is planned around clarity, trust, conversion, SEO, and business goals.",
  },
  {
    icon: <Shield size={20} />,
    title: "We Take Ownership",
    text: "We guide decisions instead of waiting for random instructions at every step.",
  },
  {
    icon: <Link2 size={20} />,
    title: "We Connect the Full System",
    text: "Strategy, UX, design, development, SEO, and automation work together instead of separately.",
  },
  {
    icon: <ClipboardCheck size={20} />,
    title: "We Keep Execution Clear",
    text: "You get defined milestones, practical updates, launch support, and a controlled delivery process.",
  },
];

export function WhyUsSection() {
  return (
    <section style={{ background: "#FFFFFF", padding: "96px 0" }}>
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
            Why Businesses Trust Us With Their Website
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#475569",
              maxWidth: "540px",
              margin: "0 auto",
            }}
          >
            We don't just ask what you want. We identify what your website needs to perform better.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            marginBottom: "32px",
          }}
          className="whyus-grid"
        >
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{
                display: "flex",
                gap: "18px",
                alignItems: "flex-start",
                background: "#F8FAFC",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #E2E8F0",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,99,235,0.07)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  background: "#EFF6FF",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2563EB",
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
                    color: "#0B1220",
                    margin: "0 0 8px",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "#475569",
                    margin: 0,
                  }}
                >
                  {p.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderLeft: "4px solid #2563EB",
            borderRadius: "0 16px 16px 0",
            padding: "28px 32px",
          }}
        >
          <p
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.6,
              color: "#0B1220",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            "We don't build websites just to look modern. We build digital systems that help businesses earn trust, explain clearly, and capture better opportunities."
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .whyus-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
