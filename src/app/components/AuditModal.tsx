import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { supabase } from "../../lib/supabaseClient";
import { X, CheckCircle, AlertCircle, Loader2, ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";

interface AuditModalProps { isOpen: boolean; onClose: () => void; }

interface FormData {
  // Step 1
  name: string; email: string; phone: string; company_name: string;
  // Step 2
  website_url: string; industry: string; primary_goal: string; current_problem: string;
  // Step 3
  monthly_traffic: string; timeline: string; budget_range: string; message: string;
  consent: boolean;
  _hp: string;
}

const BLANK: FormData = {
  name:"", email:"", phone:"", company_name:"",
  website_url:"", industry:"", primary_goal:"", current_problem:"",
  monthly_traffic:"", timeline:"", budget_range:"", message:"",
  consent: false, _hp:"",
};

const INDUSTRIES = ["Manufacturing & Industrial","Professional Services","Healthcare & Clinics","Real Estate & Construction","Consultants & B2B Agencies","E-commerce","Education","Other"];
const GOALS = ["Generate more qualified leads","Improve website conversion rate","Increase organic search traffic","Launch a new product/service","Redesign existing website","Other"];
const PROBLEMS = ["Low website traffic","Visitors don't convert","Outdated design","Poor SEO visibility","Weak lead capture","No clear messaging","Other"];
const TRAFFIC = ["Under 500/month","500–2,000/month","2,000–10,000/month","10,000+/month","Not sure"];
const TIMELINES = ["Immediately","Within 1 month","1–3 months","3–6 months","Just exploring"];
const BUDGETS = ["Below ₹50,000","₹50,000–₹1,00,000","₹1,00,000–₹2,50,000","₹2,50,000+","Not sure yet"];

const STEP_LABELS = ["Contact Info","Website Details","Project Scope"];

// ── Input primitives ─────────────────────────────────────────────────────────

function Field({ label, required, error, hint, children }: { label:string; required?:boolean; error?:string; hint?:string; children:React.ReactNode }) {
  return (
    <div>
      <label style={{ fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:"13px", color:"#0F172A", display:"block", marginBottom:"6px" }}>
        {label}{required && <span style={{ color:"#2563EB", marginLeft:"2px" }}>*</span>}
      </label>
      {children}
      {hint && !error && <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"11px", color:"#64748B", margin:"4px 0 0", lineHeight:1.4 }}>{hint}</p>}
      <AnimatePresence>
        {error && <motion.p key="e" initial={{ opacity:0,y:-4 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0 }} transition={{ duration:0.15 }} style={{ fontFamily:"'Inter',sans-serif", fontSize:"12px", color:"#DC2626", margin:"4px 0 0", display:"flex", alignItems:"center", gap:"4px" }}><AlertCircle size={11}/>{error}</motion.p>}
      </AnimatePresence>
    </div>
  );
}

const iStyle = (focused:boolean, err?:boolean): React.CSSProperties => ({
  width:"100%", height:"48px", fontFamily:"'Inter',sans-serif", fontSize:"14px",
  color:"#0F172A", background:"#FFFFFF",
  border:`1px solid ${err?"#DC2626":focused?"#2563EB":"#E2E8F0"}`,
  borderRadius:"10px", padding:"0 14px", outline:"none", boxSizing:"border-box",
  boxShadow: focused&&!err?"0 0 0 3px rgba(37,99,235,0.09)":err?"0 0 0 3px rgba(220,38,38,0.07)":"none",
  transition:"border-color 0.18s,box-shadow 0.18s",
});

function SInput({ err, ...p }: React.InputHTMLAttributes<HTMLInputElement>&{err?:boolean}) {
  const [f,setF]=useState(false);
  return <input {...p} onFocus={e=>{setF(true);p.onFocus?.(e)}} onBlur={e=>{setF(false);p.onBlur?.(e)}} style={iStyle(f,err)}/>;
}

function STextarea(p: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [f,setF]=useState(false);
  return <textarea {...p} rows={3} onFocus={e=>{setF(true);p.onFocus?.(e)}} onBlur={e=>{setF(false);p.onBlur?.(e)}} style={{ width:"100%",fontFamily:"'Inter',sans-serif",fontSize:"14px",color:"#0F172A",background:"#FFFFFF",border:`1px solid ${f?"#2563EB":"#E2E8F0"}`,borderRadius:"10px",padding:"10px 14px",outline:"none",resize:"vertical",boxSizing:"border-box",lineHeight:"1.6",boxShadow:f?"0 0 0 3px rgba(37,99,235,0.09)":"none",transition:"border-color 0.18s,box-shadow 0.18s" }}/>;
}

function SSelect({ opts, placeholder, value, onChange, focused:_ }: { opts:string[];placeholder:string;value:string;onChange:(v:string)=>void;focused?:boolean }) {
  const [f,setF]=useState(false);
  return (
    <div style={{ position:"relative" }}>
      <select value={value} onChange={e=>onChange(e.target.value)} onFocus={()=>setF(true)} onBlur={()=>setF(false)}
        style={{ ...iStyle(f), paddingRight:"32px", appearance:"none", cursor:"pointer", color:value?"#0F172A":"#94A3B8" }}>
        <option value="" disabled>{placeholder}</option>
        {opts.map(o=><option key={o} value={o}>{o}</option>)}
      </select>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",pointerEvents:"none" }}>
        <path d="M2 4L6 8L10 4" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

// ── Step components ──────────────────────────────────────────────────────────

function Step1({ form, set, errors, touched, touch }: any) {
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px" }} className="form-cols">
        <Field label="Full Name" required error={touched.name?errors.name:undefined}>
          <SInput placeholder="Your name" value={form.name} onChange={e=>set("name",e.target.value)} onBlur={()=>touch("name")} err={!!(touched.name&&errors.name)}/>
        </Field>
        <Field label="Company Name">
          <SInput placeholder="Company name" value={form.company_name} onChange={e=>set("company_name",e.target.value)}/>
        </Field>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px" }} className="form-cols">
        <Field label="Business Email" required error={touched.email?errors.email:undefined}>
          <SInput type="email" placeholder="you@company.com" value={form.email} onChange={e=>set("email",e.target.value)} onBlur={()=>touch("email")} err={!!(touched.email&&errors.email)}/>
        </Field>
        <Field label="Phone Number">
          <SInput type="tel" placeholder="Your phone number" value={form.phone} onChange={e=>set("phone",e.target.value)}/>
        </Field>
      </div>
    </div>
  );
}

function Step2({ form, set, errors, touched, touch }: any) {
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
      <Field label="Website URL" required error={touched.website_url?errors.website_url:undefined} hint="We'll review this for UX, SEO, trust and lead-capture opportunities.">
        <SInput placeholder="https://yourwebsite.com" value={form.website_url} onChange={e=>set("website_url",e.target.value)} onBlur={()=>touch("website_url")} err={!!(touched.website_url&&errors.website_url)}/>
      </Field>
      <Field label="Industry">
        <SSelect opts={INDUSTRIES} placeholder="Select your industry" value={form.industry} onChange={v=>set("industry",v)}/>
      </Field>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px" }} className="form-cols">
        <Field label="Primary Goal">
          <SSelect opts={GOALS} placeholder="What's your main goal?" value={form.primary_goal} onChange={v=>set("primary_goal",v)}/>
        </Field>
        <Field label="Biggest Website Problem">
          <SSelect opts={PROBLEMS} placeholder="Current problem?" value={form.current_problem} onChange={v=>set("current_problem",v)}/>
        </Field>
      </div>
    </div>
  );
}

function Step3({ form, set }: any) {
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px" }} className="form-cols">
        <Field label="Monthly Website Traffic">
          <SSelect opts={TRAFFIC} placeholder="Approx. traffic?" value={form.monthly_traffic} onChange={v=>set("monthly_traffic",v)}/>
        </Field>
        <Field label="Project Timeline">
          <SSelect opts={TIMELINES} placeholder="When do you need this?" value={form.timeline} onChange={v=>set("timeline",v)}/>
        </Field>
      </div>
      <Field label="Estimated Budget Range">
        <SSelect opts={BUDGETS} placeholder="Select budget range" value={form.budget_range} onChange={v=>set("budget_range",v)}/>
      </Field>
      <Field label="Additional Message">
        <STextarea placeholder="Any other context, goals or questions for our team..." value={form.message} onChange={e=>set("message",e.target.value)}/>
      </Field>
      <div style={{ display:"flex", alignItems:"flex-start", gap:"10px" }}>
        <input type="checkbox" id="consent" checked={form.consent} onChange={e=>set("consent",e.target.checked)}
          style={{ marginTop:"2px", width:"16px", height:"16px", accentColor:"#2563EB", flexShrink:0, cursor:"pointer" }}/>
        <label htmlFor="consent" style={{ fontFamily:"'Inter',sans-serif", fontSize:"13px", color:"#475569", lineHeight:1.55, cursor:"pointer" }}>
          I agree to be contacted about my website audit request. My details will only be used to respond to this enquiry.
        </label>
      </div>
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────

export function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(BLANK);
  const [touched, setTouched] = useState<Set<keyof FormData>>(new Set());
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [serverError, setServerError] = useState("");

  const touch = (f:keyof FormData) => setTouched(p=>new Set([...p,f]));
  const setField = (f:keyof FormData, v:any) => setForm(p=>({...p,[f]:v}));

  const errors: Partial<Record<keyof FormData,string>> = {};
  if(!form.name.trim()) errors.name="Name is required";
  if(!form.email.trim()) errors.email="Email is required";
  else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email="Enter a valid email";
  if(!form.website_url.trim()) errors.website_url="Website URL is required";
  else if(!/^https?:\/\/.+\..+/.test(form.website_url)) errors.website_url="Enter a valid URL (include https://)";

  useEffect(() => {
    if(isOpen){ setStep(0); setForm(BLANK); setTouched(new Set()); setStatus("idle"); setServerError(""); }
  }, [isOpen]);

  useEffect(() => {
    if(!isOpen) return;
    const h=(e:KeyboardEvent)=>e.key==="Escape"&&onClose();
    window.addEventListener("keydown",h);
    return ()=>window.removeEventListener("keydown",h);
  },[isOpen,onClose]);

  const canAdvance = () => {
    if(step===0) return !errors.name && !errors.email;
    if(step===1) return !errors.website_url;
    return true;
  };

  const next = () => {
    if(step===0){ touch("name"); touch("email"); }
    if(step===1){ touch("website_url"); }
    if(!canAdvance()) return;
    setStep(s=>Math.min(s+1,2));
  };

  const submit = async () => {
    if(form._hp) return;
    if(!form.consent){ setServerError("Please confirm your consent to proceed."); return; }
    if(!canAdvance()) return;

    setStatus("loading");
    setServerError("");
    try {
      const { error } = await supabase.from("website_audit_requests").insert([{
        name: form.name.trim(),
        company_name: form.company_name.trim(),
        website_url: form.website_url.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        improvement_goal: [form.primary_goal, form.current_problem, form.message].filter(Boolean).join(" | "),
        timeline: form.timeline,
        budget_range: form.budget_range,
        source: "website_audit_form",
        status: "new",
      }]);
      if(error) throw new Error(error.message);
      setStatus("success");
    } catch(err) {
      console.error("Audit submit error:",err);
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again or call us: 8767977216 / 7887685816");
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div key="backdrop" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.2 }}
          onClick={onClose}
          style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.65)", backdropFilter:"blur(5px)", zIndex:300, display:"flex", alignItems:"center", justifyContent:"center", padding:"16px", overflowY:"auto" }}
        >
          <motion.div key="modal" initial={{ opacity:0,y:20,scale:0.97 }} animate={{ opacity:1,y:0,scale:1 }} exit={{ opacity:0,y:20,scale:0.97 }} transition={{ duration:0.25, ease:"easeOut" }}
            onClick={e=>e.stopPropagation()}
            style={{ background:"#F8FAFC", borderRadius:"24px", width:"100%", maxWidth:"640px", maxHeight:"92vh", overflow:"hidden", display:"flex", flexDirection:"column", boxShadow:"0 40px 100px rgba(15,23,42,0.25)", margin:"auto" }}
          >
            {/* Header */}
            <div style={{ background:"#FFFFFF", borderBottom:"1px solid #E2E8F0", padding:"20px 24px", flexShrink:0 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom: status==="success"?"0":"16px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                  <div style={{ width:"36px", height:"36px", background:"#EFF6FF", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="#2563EB" strokeWidth="1.5"/><path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <h2 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"17px", color:"#0F172A", margin:0, lineHeight:1.2 }}>Request a Free Website Audit</h2>
                    {status!=="success" && <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"12px", color:"#64748B", margin:0 }}>Step {step+1} of 3 — {STEP_LABELS[step]}</p>}
                  </div>
                </div>
                <button onClick={onClose} aria-label="Close" style={{ background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:"8px", width:"32px", height:"32px", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:"#64748B", transition:"background 0.15s" }}
                  onMouseEnter={e=>e.currentTarget.style.background="#E2E8F0"} onMouseLeave={e=>e.currentTarget.style.background="#F8FAFC"}
                ><X size={15}/></button>
              </div>

              {/* Progress bar */}
              {status!=="success" && (
                <div style={{ display:"flex", gap:"6px" }}>
                  {[0,1,2].map(i=>(
                    <div key={i} style={{ flex:1, height:"4px", borderRadius:"999px", background: i<=step?"#2563EB":"#E2E8F0", transition:"background 0.3s" }}/>
                  ))}
                </div>
              )}
            </div>

            {/* Body */}
            <div style={{ overflowY:"auto", flex:1 }}>
              <AnimatePresence mode="wait">
                {status==="success" ? (
                  <motion.div key="success" initial={{ opacity:0,scale:0.96 }} animate={{ opacity:1,scale:1 }} exit={{ opacity:0 }} transition={{ duration:0.28 }}
                    style={{ padding:"48px 24px", textAlign:"center", display:"flex", flexDirection:"column", alignItems:"center", gap:"14px" }}
                  >
                    <div style={{ width:"68px", height:"68px", borderRadius:"50%", background:"#F0FDF4", border:"2px solid #BBF7D0", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <CheckCircle size={32} style={{ color:"#16A34A" }}/>
                    </div>
                    <h3 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:"22px", color:"#0F172A", margin:0 }}>Audit Request Submitted!</h3>
                    <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"15px", lineHeight:1.7, color:"#475569", maxWidth:"380px", margin:0 }}>
                      Thank you, <strong style={{ color:"#0F172A" }}>{form.name}</strong>. We'll review your website and get back to you within <strong style={{ color:"#0F172A" }}>1–2 business days</strong>.
                    </p>
                    <div style={{ background:"#EFF6FF", border:"1px solid #BFDBFE", borderRadius:"14px", padding:"14px 18px", maxWidth:"360px", textAlign:"left" }}>
                      <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"13px", color:"#1E40AF", margin:0, lineHeight:1.6, fontWeight:500 }}>
                        We'll send practical audit findings on UX, SEO, lead capture and growth opportunities to <strong>{form.email}</strong>
                      </p>
                    </div>
                    <button onClick={onClose} style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"14px", color:"#FFFFFF", background:"#2563EB", border:"none", borderRadius:"10px", padding:"11px 22px", cursor:"pointer", marginTop:"6px", transition:"background 0.18s" }}
                      onMouseEnter={e=>e.currentTarget.style.background="#1D4ED8"} onMouseLeave={e=>e.currentTarget.style.background="#2563EB"}
                    >Back to Website</button>
                  </motion.div>
                ) : (
                  <motion.div key={`step-${step}`} initial={{ opacity:0,x:step>0?24:-24 }} animate={{ opacity:1,x:0 }} exit={{ opacity:0 }} transition={{ duration:0.22 }}
                    style={{ padding:"20px 24px 24px" }}
                  >
                    {/* Honeypot */}
                    <div style={{ position:"absolute",left:"-9999px",opacity:0,pointerEvents:"none" }}>
                      <input type="text" value={form._hp} onChange={e=>setField("_hp",e.target.value)} tabIndex={-1} autoComplete="off"/>
                    </div>

                    {/* Error banner */}
                    <AnimatePresence>
                      {status==="error" && serverError && (
                        <motion.div key="err" initial={{ opacity:0,y:-8 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0 }} style={{ background:"#FEF2F2", border:"1px solid #FECACA", borderRadius:"12px", padding:"12px 14px", marginBottom:"16px", display:"flex", gap:"10px", alignItems:"flex-start" }}>
                          <AlertCircle size={15} style={{ color:"#DC2626", flexShrink:0, marginTop:"1px" }}/>
                          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"13px", color:"#DC2626", margin:0, lineHeight:1.5 }}>{serverError}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {step===0 && <Step1 form={form} set={setField} errors={errors} touched={touched} touch={touch}/>}
                    {step===1 && <Step2 form={form} set={setField} errors={errors} touched={touched} touch={touch}/>}
                    {step===2 && <Step3 form={form} set={setField}/>}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer nav */}
            {status!=="success" && (
              <div style={{ background:"#FFFFFF", borderTop:"1px solid #E2E8F0", padding:"16px 24px", display:"flex", justifyContent:"space-between", alignItems:"center", flexShrink:0 }}>
                <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
                  <ShieldCheck size={13} style={{ color:"#94A3B8" }}/>
                  <span style={{ fontFamily:"'Inter',sans-serif", fontSize:"12px", color:"#94A3B8" }}>Your details are kept private.</span>
                </div>
                <div style={{ display:"flex", gap:"10px", alignItems:"center" }}>
                  {step>0 && (
                    <button onClick={()=>setStep(s=>s-1)} style={{ fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:"14px", color:"#475569", background:"none", border:"1px solid #E2E8F0", borderRadius:"10px", padding:"9px 16px", cursor:"pointer", display:"flex", alignItems:"center", gap:"6px" }}>
                      <ArrowLeft size={14}/> Back
                    </button>
                  )}
                  {step<2 ? (
                    <button onClick={next} style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"14px", color:"#FFFFFF", background:"#2563EB", border:"none", borderRadius:"10px", padding:"9px 20px", cursor:"pointer", transition:"background 0.18s", display:"flex", alignItems:"center", gap:"6px" }}
                      onMouseEnter={e=>e.currentTarget.style.background="#1D4ED8"} onMouseLeave={e=>e.currentTarget.style.background="#2563EB"}
                    >Continue <ArrowRight size={14}/></button>
                  ) : (
                    <button onClick={submit} disabled={status==="loading"} style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"14px", color:"#FFFFFF", background:status==="loading"?"#93C5FD":"#2563EB", border:"none", borderRadius:"10px", padding:"9px 20px", cursor:status==="loading"?"not-allowed":"pointer", transition:"background 0.18s", display:"flex", alignItems:"center", gap:"6px" }}
                      onMouseEnter={e=>{ if(status!=="loading") e.currentTarget.style.background="#1D4ED8"; }}
                      onMouseLeave={e=>{ if(status!=="loading") e.currentTarget.style.background="#2563EB"; }}
                    >
                      {status==="loading"?<><Loader2 size={14} style={{ animation:"audit-spin 1s linear infinite" }}/>Submitting…</>:<>Submit Audit Request <ArrowRight size={14}/></>}
                    </button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
      <style>{`
        @keyframes audit-spin { to { transform:rotate(360deg); } }
        @media (max-width:520px) { .form-cols { grid-template-columns:1fr !important; } }
      `}</style>
    </AnimatePresence>
  );
}
