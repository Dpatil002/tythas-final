import { motion } from "motion/react";
import { ShieldCheck, Sparkles } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
};

const lineUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function PromiseSection() {
  return (
    <section style={{ background: "#F8FAFC", padding: "96px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 28px", display: "grid", gridTemplateColumns: "0.85fr 1fr", gap: "64px", alignItems: "center" }} className="promise-grid">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="promise-image" style={{ position: "relative" }}
        >
          <div style={{
            position: "absolute", top: "-8%", left: "-10%", width: "70%", height: "70%",
            background: "radial-gradient(ellipse, rgba(37,99,235,0.16) 0%, transparent 70%)",
            pointerEvents: "none", zIndex: 0,
          }} />
          <div style={{ position: "relative", zIndex: 1, borderRadius: "24px", overflow: "hidden", boxShadow: "0 30px 70px rgba(15,23,42,0.16)" }}>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=1000&fit=crop&auto=format"
              alt="Founder focused on running their business"
              loading="lazy"
              style={{ width: "100%", height: "auto", display: "block", aspectRatio: "4/5", objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.35) 0%, transparent 40%)" }} />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200, damping: 18 }}
            style={{
              position: "absolute", bottom: "-22px", right: "-18px", zIndex: 2,
              background: "#FFFFFF", borderRadius: "16px", padding: "16px 20px",
              boxShadow: "0 16px 40px rgba(15,23,42,0.18)", border: "1px solid #E2E8F0",
              display: "flex", alignItems: "center", gap: "12px", maxWidth: "220px",
            }}
            className="promise-badge"
          >
            <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <ShieldCheck size={20} color="#2563EB" />
            </div>
            <div>
              <div style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: "13px", color: "#0F172A", lineHeight: 1.3 }}>Built on trust,</div>
              <div style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: "13px", color: "#2563EB", lineHeight: 1.3 }}>backed by results.</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <motion.div
          variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={lineUp} style={{ marginBottom: "20px" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              background: "#EFF6FF", color: "#1E40AF", borderRadius: "999px",
              padding: "5px 14px", fontFamily: "'Inter',sans-serif",
              fontWeight: 600, fontSize: "11px", letterSpacing: "0.8px",
              textTransform: "uppercase", border: "1px solid #BFDBFE",
            }}>
              <Sparkles size={12} />
              Our Promise
            </span>
          </motion.div>

          <motion.h2 variants={lineUp} style={{
            fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: "clamp(28px,3.5vw,42px)",
            color: "#0F172A", margin: "0 0 24px", letterSpacing: "-0.8px", lineHeight: 1.15,
          }}>
            A Promise from Tythas
          </motion.h2>

          <motion.p variants={lineUp} style={{ fontFamily: "'Inter',sans-serif", fontSize: "17px", lineHeight: 1.7, color: "#64748B", margin: "0 0 16px" }}>
            Running a business is already challenging.
          </motion.p>

          <motion.p variants={lineUp} style={{
            fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: "clamp(19px,2vw,24px)", lineHeight: 1.4,
            color: "#0F172A", margin: "0 0 24px", paddingLeft: "18px", borderLeft: "3px solid #2563EB",
          }}>
            Your website <span style={{ color: "#2563EB" }}>shouldn't be another thing</span> you have to worry about.
          </motion.p>

          <motion.p variants={lineUp} style={{ fontFamily: "'Inter',sans-serif", fontSize: "16px", lineHeight: 1.8, color: "#475569", margin: "0 0 28px" }}>
            Leave the strategy, design, optimisation and continuous improvement to us. We'll take care of building a website that represents your business, earns trust and helps generate qualified enquiries.
          </motion.p>

          <motion.div variants={lineUp} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: "17px", color: "#0F172A" }}>You focus on delivering great products and services.</span>
            <span style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: "17px", color: "#2563EB" }}>We'll focus on making sure the right customers find you.</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width:900px) {
          .promise-grid { grid-template-columns:1fr !important; gap:56px !important; }
          .promise-image { max-width:420px; margin:0 auto; }
        }
        @media (max-width:560px) {
          .promise-badge { right:8px !important; bottom:-16px !important; padding:12px 16px !important; }
        }
      `}</style>
    </section>
  );
}
