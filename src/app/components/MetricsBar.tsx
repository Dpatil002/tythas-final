import { motion } from "motion/react";
import { Globe, Building2, TrendingUp, Users } from "lucide-react";

const metrics = [
  { icon: <Globe size={20}/>, value: "50+", label: "Websites Designed", color: "#2563EB" },
  { icon: <Building2 size={20}/>, value: "20+", label: "Businesses Supported", color: "#7C3AED" },
  { icon: <TrendingUp size={20}/>, value: "2.5×", label: "Avg. Conversion Improvement", color: "#16A34A" },
  { icon: <Users size={20}/>, value: "35%", label: "Average Lead Growth", color: "#EA580C" },
];

export function MetricsBar() {
  return (
    <section style={{ background: "#FFFFFF", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }} className="metrics-grid">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{
                padding: "32px 24px",
                display: "flex", alignItems: "center", gap: "16px",
                borderRight: i < 3 ? "1px solid #E2E8F0" : "none",
              }}
            >
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px",
                background: `${m.color}14`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: m.color, flexShrink: 0,
              }}>{m.icon}</div>
              <div>
                <div style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: "28px", color: "#0F172A", lineHeight: 1.1 }}>{m.value}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", color: "#64748B", marginTop: "3px", lineHeight: 1.4 }}>{m.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width:768px) { .metrics-grid { grid-template-columns:1fr 1fr !important; } }`}</style>
    </section>
  );
}
