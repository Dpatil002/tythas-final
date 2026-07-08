import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

interface AuditCTASectionProps {
  onAuditClick: () => void;
}

export function AuditCTASection({ onAuditClick }: AuditCTASectionProps) {
  const points = [
    "UX and conversion review",
    "SEO and structure review",
    "Lead capture improvement ideas",
  ];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)",
        padding: "96px 0",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(30px, 4vw, 48px)",
              color: "#FFFFFF",
              margin: "0 0 20px",
              letterSpacing: "-0.5px",
              lineHeight: 1.15,
            }}
          >
            Find Out What Your Website Is Missing
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#DBEAFE",
              margin: "0 0 36px",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Get a practical website audit that shows where your current website is losing clarity, trust, visibility, enquiries, and growth opportunities.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "28px",
              flexWrap: "wrap",
              marginBottom: "36px",
            }}
          >
            {points.map((pt) => (
              <span
                key={pt}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#DBEAFE",
                }}
              >
                <CheckCircle size={16} style={{ color: "#93C5FD", flexShrink: 0 }} />
                {pt}
              </span>
            ))}
          </div>

          <button
            onClick={onAuditClick}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              color: "#0B1220",
              background: "#FFFFFF",
              border: "none",
              borderRadius: "12px",
              padding: "15px 32px",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#F1F5F9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#FFFFFF"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Request Website Audit
          </button>
        </motion.div>
      </div>
    </section>
  );
}
