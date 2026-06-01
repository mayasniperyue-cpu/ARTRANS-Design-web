import { useState, FormEvent } from "react";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";
import { useLanguage } from "../hooks/useLanguage";

export default function ContactForm() {
  const containerRef = useScrollReveal(0.12);
  const { t, language } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    interest: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const interestOptions = [
    t("contact.interest.p1"),
    t("contact.interest.p2"),
    t("contact.interest.p3"),
    t("contact.interest.p4"),
    t("contact.interest.p5")
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending email safely
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setForm({
      name: "",
      company: "",
      email: "",
      interest: "",
      message: ""
    });
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-32 md:py-40 overflow-hidden noise"
    >
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-navy-mid z-0" />
      <div className="absolute inset-0 grid-bg z-0 opacity-50" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse, rgba(194,154,100,0.06) 0%, transparent 70%)"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Indicator */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold/70">07</span>
          <div className="h-px w-16 bg-gold/30" />
          <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold/70">
            {t("contact.subtitle")}
          </span>
        </div>

        {/* Form panel structure */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left info panel */}
          <div>
            <h2 className="reveal font-display font-black text-[clamp(2.2rem,5vw,5rem)] leading-[0.85] tracking-normal uppercase text-white mb-6">
              {language === "EN" ? (
                <>
                  INITIATE
                  <br />
                  <span className="text-gold">COLLABORATION.</span>
                </>
              ) : (
                <>
                  啟動
                  <br />
                  <span className="text-gold">戰略合作。</span>
                </>
              )}
            </h2>
            <p className="reveal font-body text-base text-silver/60 leading-relaxed mb-10 max-w-md">
              {t("contact.desc")}
            </p>

            <div className="reveal flex flex-col gap-4">
              <div>
                <span className="font-ui text-[10px] uppercase tracking-widest text-gold/50 block mb-1 font-semibold">
                  {t("contact.general")}
                </span>
                <a
                  href="mailto:contact@artrans.hk"
                  className="font-display text-xl text-white hover:text-gold transition-colors font-medium"
                >
                  contact@artrans.hk
                </a>
              </div>
              <div>
                <span className="font-ui text-[10px] uppercase tracking-widest text-gold/50 block mb-1 font-semibold">
                  {t("contact.based")}
                </span>
                <span className="font-display text-xl text-white font-medium">
                  {t("contact.city")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Input Form */}
          <div className="relative glass p-8 md:p-10 reveal border border-gold/15">
            {isSuccess ? (
              <div className="py-12 flex flex-col items-center text-center">
                <CheckCircle2 className="w-16 h-16 text-gold mb-6 animate-pulse" />
                <h3 className="font-display font-semibold text-2xl uppercase text-white mb-3">
                  {t("contact.form.success.title")}
                </h3>
                <p className="font-body text-sm text-silver/65 leading-relaxed max-w-sm mb-8">
                  {t("contact.form.success.desc")}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="font-ui text-xs tracking-widest uppercase border border-gold/40 text-gold px-6 py-3 hover:bg-gold/10 transition-colors cursor-pointer"
                >
                  {t("contact.form.success.btn")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block font-ui text-[10px] uppercase tracking-widest text-gold/60 mb-2 font-semibold">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-navy/60 border border-white/10 hover:border-gold/20 focus:border-gold/60 focus:outline-none p-4 text-silver text-sm transition-colors duration-300 font-body placeholder:text-dim"
                    placeholder={t("contact.form.name.placeholder")}
                  />
                </div>

                {/* Company & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-ui text-[10px] uppercase tracking-widest text-gold/60 mb-2 font-semibold font-semibold">
                      {t("contact.form.company")}
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-navy/60 border border-white/10 hover:border-gold/20 focus:border-gold/60 focus:outline-none p-4 text-silver text-sm transition-colors duration-300 font-body placeholder:text-dim"
                      placeholder={t("contact.form.company.placeholder")}
                    />
                  </div>
                  <div>
                    <label className="block font-ui text-[10px] uppercase tracking-widest text-gold/60 mb-2 font-semibold">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-navy/60 border border-white/10 hover:border-gold/20 focus:border-gold/60 focus:outline-none p-4 text-silver text-sm transition-colors duration-300 font-body placeholder:text-dim"
                      placeholder={t("contact.form.email.placeholder")}
                    />
                  </div>
                </div>

                {/* Area of Interest Selection */}
                <div>
                  <label className="block font-ui text-[10px] uppercase tracking-widest text-gold/60 mb-2 font-semibold">
                    {t("contact.form.interest")}
                  </label>
                  <select
                    required
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full bg-[#111B2E] border border-white/10 hover:border-gold/20 focus:border-gold/60 focus:outline-none p-4 text-silver text-sm transition-colors duration-300 font-body placeholder:text-dim cursor-pointer"
                  >
                    <option value="" disabled>{t("contact.form.interest.placeholder")}</option>
                    {interestOptions.map((opt, i) => (
                      <option key={i} value={opt} className="bg-navy text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-ui text-[10px] uppercase tracking-widest text-gold/60 mb-2 font-semibold">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-navy/60 border border-white/10 hover:border-gold/20 focus:border-gold/60 focus:outline-none p-4 text-silver text-sm transition-colors duration-300 font-body placeholder:text-dim"
                    placeholder={t("contact.form.message.placeholder")}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-light text-navy font-ui text-xs tracking-widest uppercase py-4 font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t("contact.form.btn.submitting")}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t("contact.form.btn.send")}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

