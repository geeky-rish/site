import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { buildEnquiryMessage, BUSINESS_EMAIL, WHATSAPP_NUMBER } from "@/lib/enquiry";

const AUDIENCES = [
  { title: "Small businesses", text: "Websites, enquiry handling and simple tools that save the owner time every week." },
  { title: "Coaching institutes", text: "Admissions enquiries, student records, fee tracking and timely parent communication." },
  { title: "Manufacturers", text: "Production, inventory and order data turned into clear, dependable reports." },
  { title: "Distributors", text: "Order, stock and dealer workflows brought out of scattered spreadsheets." },
  { title: "Service businesses", text: "Bookings, follow-ups and job tracking that keep customers informed." },
];
const NAV = [["services", "Services"], ["industries", "Industries"], ["approach", "Approach"], ["about", "About"]] as const;
const TICKER = ["WEB DEVELOPMENT", "WORKFLOW AUTOMATION", "DATA & REPORTING", "DASHBOARDS", "CUSTOM TOOLS", "ONGOING SUPPORT"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RIKA TECH — Make work flow better." },
      { name: "description", content: "RIKA TECH builds practical websites, workflow automation, reporting systems and custom digital tools for growing businesses." },
      { property: "og:title", content: "RIKA TECH — Real-world Impact through Knowledge and Automation" },
      { property: "og:description", content: "Practical digital solutions that help businesses work smarter." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const [fallback, setFallback] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const year = new Date().getFullYear();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const items = document.querySelectorAll<HTMLElement>(".section-heading, .service-card, .audience-card, .step, .statement-content, .cta-band, .contact-copy, .contact-form");
    items.forEach((el, i) => { el.classList.add("reveal"); el.style.setProperty("--reveal-delay", `${(i % 4) * 70}ms`); });
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }), { threshold: 0.12 });
    items.forEach((el) => io.observe(el));
    const spy = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach((el) => spy.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); spy.disconnect(); };
  }, []);

  const read = () => {
    const d = new FormData(formRef.current!);
    const g = (k: string) => String(d.get(k) || "");
    return { name: g("name"), business: g("business"), service: g("service"), message: g("message") };
  };
  const mailto = () => {
    const f = read();
    return `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(`Project enquiry from ${f.name.trim()}`)}&body=${encodeURIComponent(buildEnquiryMessage(f))}`;
  };
  const onWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current?.reportValidity()) return;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildEnquiryMessage(read()))}`;
    setFallback("WhatsApp should open with your enquiry ready to send. If it does not, choose the email option.");
    const w = window.open(url, "_blank", "noopener,noreferrer");
    if (!w) window.location.href = mailto();
  };
  const onEmail = () => {
    if (!formRef.current?.reportValidity()) return;
    window.location.href = mailto();
  };

  return (
    <>
<div className="site-shell">
    <header className={scrolled ? "topbar is-scrolled" : "topbar"}>
      <a className="brand" href="#home" aria-label="RIKA TECH home">
        <span className="brand-mark">R<span>.</span></span>
        <span className="brand-name">RIKA <b>TECH</b></span>
      </a>
      <button type="button" className="menu-toggle" id="menuToggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span></span><span></span>
      </button>
      <nav className={open ? "nav open" : "nav"} id="navMenu" onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }} aria-label="Main navigation">
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? "is-active" : undefined} aria-current={active === id ? "true" : undefined}>{label}</a>
        ))}
        <a href="#contact" className="nav-cta">Let&apos;s talk <span>↗</span></a>
      </nav>
    </header>

    <main>
      <section className="hero section" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"></span> INDEPENDENT DIGITAL STUDIO</div>
          <h1>Make your<br /><span className="gradient-text">work flow</span><br />better.</h1>
          <p className="hero-lede">We turn repetitive work, scattered information and outdated processes into practical digital systems that help your business move forward.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Tell us what you need <span>↗</span></a>
            <a className="text-link" href="#services">Explore what we do <span>↓</span></a>
          </div>
          <div className="hero-note"><span className="note-line"></span><span>REAL-WORLD IMPACT THROUGH KNOWLEDGE AND AUTOMATION.</span></div>
        </div>
        <div className="hero-visual" aria-label="Abstract illustration of connected digital systems">
          <div className="visual-grid"></div>
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="visual-core"><div className="core-glow"></div><span>R</span><small>RIKA SYSTEMS</small></div>
          <div className="float-card card-top"><span className="card-icon">↗</span><div><small>WORKFLOW</small><b>Less manual work</b></div><i className="mini-bars"><em></em><em></em><em></em><em></em></i></div>
          <div className="float-card card-bottom"><span className="card-icon chart-icon">▥</span><div><small>INSIGHTS</small><b>Clearer decisions</b></div><span className="pulse-line">⌁⌁⌁</span></div>
          <div className="visual-caption">DIGITAL SYSTEMS, BUILT AROUND YOUR BUSINESS.</div>
        </div>
      </section>

      <section className="ticker" aria-label="Our capabilities">
        <div className="ticker-track">{[...TICKER, ...TICKER].map((t, i) => (<span className="ticker-item" key={i} aria-hidden={i >= TICKER.length}>{t}<i>✳</i></span>))}</div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <div><div className="eyebrow">01 / WHAT WE DO</div><h2>Useful technology.<br /><span className="muted-heading">Measurable progress.</span></h2></div>
          <p className="section-intro">No unnecessary complexity. Just well-designed digital tools that solve real operational problems.</p>
        </div>
        <div className="service-grid">
          <article className="service-card service-featured">
            <div className="service-top"><span className="service-number">01</span><span className="service-symbol">↗</span></div>
            <div className="service-illustration browser-illustration"><div className="browser-bar"><i></i><i></i><i></i></div><div className="browser-content"><b></b><b></b><span></span><span></span><em></em></div></div>
            <h3>Websites & digital presence</h3>
            <p>Fast, responsive websites that explain what you do, build trust and make it easy for customers to contact you.</p>
            <ul><li>Business and service websites</li><li>Landing pages and enquiry forms</li><li>WhatsApp and contact integration</li></ul>
          </article>
          <article className="service-card">
            <div className="service-top"><span className="service-number">02</span><span className="service-symbol">⤴</span></div>
            <div className="service-illustration flow-illustration"><div className="flow-node">NEW ENQUIRY</div><div className="flow-connector">↓</div><div className="flow-node active-node">AUTOMATION</div><div className="flow-connector">↓</div><div className="flow-result"><span>✓</span> FOLLOW-UP SENT</div></div>
            <h3>Workflow automation</h3>
            <p>Connect everyday tools and reduce repetitive tasks, missed follow-ups and manual coordination.</p>
            <ul><li>Enquiry and lead workflows</li><li>Notifications and reminders</li><li>Process and spreadsheet automation</li></ul>
          </article>
          <article className="service-card">
            <div className="service-top"><span className="service-number">03</span><span className="service-symbol">▥</span></div>
            <div className="service-illustration data-illustration"><div className="data-label">WEEKLY PERFORMANCE</div><div className="chart-bars"><i style={{height:"34%"}}></i><i style={{height:"52%"}}></i><i style={{height:"43%"}}></i><i style={{height:"72%"}}></i><i style={{height:"62%"}}></i><i style={{height:"91%"}}></i><i style={{height:"78%"}}></i></div><div className="chart-foot"><span>MON</span><span>WED</span><span>FRI</span></div></div>
            <h3>Data & reporting</h3>
            <p>Turn scattered spreadsheets and business data into clear reports that help you understand what is happening.</p>
            <ul><li>Excel and Google Sheets automation</li><li>Dashboards and summaries</li><li>Data cleanup and consolidation</li></ul>
          </article>
          <article className="service-card">
            <div className="service-top"><span className="service-number">04</span><span className="service-symbol">⌘</span></div>
            <div className="service-illustration system-illustration"><div className="system-window"><span className="window-title">BUSINESS TOOLKIT</span><div className="system-row"><i></i><b></b><em></em></div><div className="system-row"><i></i><b></b><em></em></div><div className="system-row"><i></i><b></b><em></em></div></div></div>
            <h3>Custom digital tools</h3>
            <p>Purpose-built internal tools and lightweight applications for workflows that off-the-shelf software does not quite fit.</p>
            <ul><li>Internal dashboards and portals</li><li>Simple business applications</li><li>Integrations between existing tools</li></ul>
          </article>
          <article className="service-card service-wide">
            <div className="service-top"><span className="service-number">05</span><span className="service-symbol">↻</span></div>
            <div className="service-wide-body">
              <div>
                <h3>Maintenance & technical support</h3>
                <p>Keep your website and tools running smoothly after launch, with updates, fixes and small improvements when your business needs them.</p>
                <ul><li>Updates and content changes</li><li>Bug fixes and monitoring</li><li>Ongoing improvements</li></ul>
              </div>
              <div className="uptime-illustration" aria-hidden="true">
                <div className="data-label">SYSTEM STATUS</div>
                <div className="uptime-row"><span className="uptime-dot" /> Website <em>OPERATIONAL</em></div>
                <div className="uptime-row"><span className="uptime-dot" /> Automations <em>OPERATIONAL</em></div>
                <div className="uptime-row"><span className="uptime-dot" /> Reports <em>OPERATIONAL</em></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section audience-section" id="industries">
        <div className="section-heading">
          <div><div className="eyebrow">WHO WE HELP</div><h2>Built for businesses<br /><span className="muted-heading">that run on real work.</span></h2></div>
          <p className="section-intro">We work with small and growing teams whose day-to-day operations deserve better tools.</p>
        </div>
        <div className="audience-grid">
          {AUDIENCES.map((a, i) => (
            <article className="audience-card" key={a.title}>
              <span className="service-number">{String(i + 1).padStart(2, "0")}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement-section" id="about">
        <div className="statement-mark">“</div>
        <div className="statement-content">
          <div className="eyebrow">02 / WHY RIKA</div>
          <h2>Technology should<br />remove friction,<br /><span className="gradient-text">not add to it.</span></h2>
          <p>RIKA stands for <strong>Real-world Impact through Knowledge and Automation.</strong> We believe useful technology starts by understanding the work people already do, then making that work simpler, clearer and more reliable.</p>
          <a className="text-link" href="#contact">Have a process worth improving? <span>↗</span></a>
        </div>
        <div className="statement-side"><div className="side-orb"></div><span>THINK CLEAR.<br />BUILD PRACTICAL.<br />KEEP IMPROVING.</span></div>
      </section>

      <section className="section approach-section" id="approach">
        <div className="section-heading">
          <div><div className="eyebrow">03 / HOW WE WORK</div><h2>Small steps.<br /><span className="muted-heading">Solid outcomes.</span></h2></div>
          <p className="section-intro">A straightforward process keeps the project focused, transparent and useful from day one.</p>
        </div>
        <div className="steps">
          <article className="step"><span>01</span><div><h3>Understand</h3><p>We learn how your business works, where time gets lost and what a better process should look like.</p></div></article>
          <article className="step"><span>02</span><div><h3>Plan</h3><p>We agree on the scope, deliverables, timeline and cost before building anything.</p></div></article>
          <article className="step"><span>03</span><div><h3>Build & test</h3><p>We create the solution, test it with realistic scenarios and refine it with your feedback.</p></div></article>
          <article className="step"><span>04</span><div><h3>Support</h3><p>We hand over the work clearly and can provide ongoing maintenance when you need it.</p></div></article>
        </div>
      </section>

      <section className="cta-band">
        <div><div className="eyebrow">LET&apos;S MAKE SOMETHING WORK BETTER</div><h2>What is slowing<br />your business down?</h2></div>
        <a className="button button-light" href="#contact">Let&apos;s figure it out <span>↗</span></a>
        <div className="cta-decoration">R<span>.</span></div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-copy">
          <div className="eyebrow">04 / START A CONVERSATION</div>
          <h2>Tell us what<br />you&apos;re trying<br /><span className="gradient-text">to solve.</span></h2>
          <p>Have a project in mind, or just know that something in your business could work better? Send a few details. We&apos;ll take it from there.</p>
          <div className="contact-direct">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener"><span className="direct-icon">◉</span><span><small>WHATSAPP</small><b>+91 88616 06007</b></span><span className="direct-arrow">↗</span></a>
            <a href={`tel:+${WHATSAPP_NUMBER}`}><span className="direct-icon">☎</span><span><small>CALL</small><b>+91 88616 06007</b></span><span className="direct-arrow">↗</span></a>
            <a href={`mailto:${BUSINESS_EMAIL}`}><span className="direct-icon">✉</span><span><small>EMAIL</small><b>{BUSINESS_EMAIL}</b></span><span className="direct-arrow">↗</span></a>
          </div>
        </div>
        <form className="contact-form" id="leadForm" ref={formRef} onSubmit={onWhatsApp}>
          <div className="form-heading"><span>PROJECT ENQUIRY</span><span className="form-required">* REQUIRED</span></div>
          <label htmlFor="name">Your name <em>*</em></label>
          <input id="name" name="name" type="text" placeholder="What should we call you?" required maxLength={80} />
          <label htmlFor="business">Business / organisation</label>
          <input id="business" name="business" type="text" placeholder="Your business name (optional)" maxLength={100} />
          <label htmlFor="service">What do you need help with? <em>*</em></label>
          <select id="service" name="service" required defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Website or digital presence</option>
            <option>Workflow automation</option>
            <option>Excel, reporting or dashboard</option>
            <option>Custom digital tool</option>
            <option>Not sure yet — let&apos;s discuss</option>
          </select>
          <label htmlFor="message">A little about the problem <em>*</em></label>
          <textarea id="message" name="message" rows={4} placeholder="What are you trying to improve or build?" required maxLength={1200}></textarea>
          <button className="button button-primary submit-button" type="submit">Send enquiry on WhatsApp <span>↗</span></button>
          <button className="button button-email" id="emailSubmit" type="button" onClick={onEmail}>Send enquiry by email <span>↗</span></button>
          <p className="form-note">Choose WhatsApp or email. Your message is handed to the selected app; this static website does not store submissions.</p>
          <p className="form-fallback" id="formFallback" aria-live="polite">{fallback}</p>
        </form>
      </section>
    </main>

    <footer className="footer">
      <div className="footer-main"><a className="brand" href="#home"><span className="brand-mark">R<span>.</span></span><span className="brand-name">RIKA <b>TECH</b></span></a><p>Real-world Impact through<br />Knowledge and Automation.</p><a className="back-top" href="#home">BACK TO TOP ↑</a></div>
      <div className="footer-bottom"><span>© <span id="year">{year}</span> RIKA TECH. All rights reserved.</span><span>INDEPENDENT DIGITAL STUDIO · INDIA</span><span><a href={`mailto:${BUSINESS_EMAIL}`}>GET IN TOUCH ↗</a></span></div>
      <p className="footer-disclaimer">RIKA TECH is an independent digital studio. Project scope, timelines and pricing are confirmed individually before work begins.</p>
    </footer>
  </div>
  <a className="floating-whatsapp" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi RIKA TECH, I'd like to discuss a project.")}`} target="_blank" rel="noopener" aria-label="Chat with RIKA TECH on WhatsApp"><span>◉</span><b>Let&apos;s chat</b></a>
    </>
  );
}
