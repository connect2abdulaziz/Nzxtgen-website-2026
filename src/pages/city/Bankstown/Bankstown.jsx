import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SEO from "../../../components/SEO";
import LocalBusinessSchema from "../../../components/LocalBusinessSchema";
import WhatsappChat from "../../../components/WhatsappChat";
import MobileCallButton from "../../../components/MobileCallButton";
import bankstownHero from "../../../assets/cities/Bankstown-1.jpg";
import bankstownParallax from "../../../assets/cities/Bankstown-2.webp";
import bankstownThree from "../../../assets/cities/Bankstown-3.jpg";
import "../cityLayout.css";

const Bankstown = () => {
  const serviceList = [
    "Power point additions and upgrades",
    "Lighting installation and upgrades",
    "Switchboard assessments and safety improvements",
    "Smoke alarm installation and testing",
    "Fault finding and electrical repairs",
    "Ceiling fans and ventilation solutions",
    "Smart home and automation systems",
    "Security systems including CCTV and alarms",
  ];

  const olderHomesList = [
    "Identifying overloaded or outdated circuits",
    "Improving safety switch coverage",
    "Upgrading lighting to safer, more efficient options",
    "Addressing recurring faults or nuisance tripping",
  ];

  const renovationsList = [
    "Power and lighting layout planning",
    "Wall chasing and concealed cabling",
    "Bathroom and kitchen electrical compliance",
    "Coordination with builders and other trades",
  ];

  const trustPillars = [
    { title: "Fully Licensed Electrical Services", description: "Compliant work carried out by qualified professionals." },
    { title: "Clear Explanations of Required Work", description: "We explain what is needed before starting — no surprises." },
    { title: "Practical Recommendations Without Pressure", description: "Advice based on real usage, not unnecessary upgrades." },
    { title: "Neat, Respectful Workmanship", description: "Clean installations with minimal disruption." },
    { title: "Reliable Scheduling and Follow-Through", description: "We show up when we say we will and complete the job properly." },
  ];

  const faqItems = [
    {
      question: "Do you work on older homes common in Bankstown?",
      answer:
        "Yes. We regularly assess and upgrade electrical systems in older properties to improve safety and support modern usage.",
    },
    {
      question: "Can electrical work be completed during renovations?",
      answer:
        "Absolutely. We coordinate with builders and other trades to ensure electrical work is completed at the right stages.",
    },
    {
      question: "Do you provide services for small local businesses?",
      answer:
        "Yes. We support retail, office, and light commercial properties with compliant and reliable electrical solutions.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div id="BankstownPage" className="canterbury-page">
      <SEO
        title="Electrician in Bankstown | Local Electrical Services NZXTGEN"
        description="Licensed electricians servicing Bankstown homes and businesses. Electrical, smart home, security and safety work by NZXTGEN."
        canonical={typeof window !== "undefined" ? window.location.origin + "/electrician-bankstown" : undefined}
      />
      <LocalBusinessSchema />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="canterbury-content">
        <section
          className="canterbury-hero"
          style={{ backgroundImage: `url(${bankstownHero})` }}
        >
          <div className="canterbury-hero-overlay">
            <div className="canterbury-hero-inner">
              <p className="canterbury-kicker">Looking for a reliable local electrician?</p>
              <h1>Electrician in Bankstown – NZXTGEN Electrical Services</h1>
              <p className="canterbury-hero-subtext">
                Licensed electricians servicing Bankstown homes and businesses. Electrical, smart
                home, security and safety work by NZXTGEN.
              </p>
              <Link className="canterbury-cta" to="/free-quote">
                👉 Request a free quote from NZXTGEN today
              </Link>
            </div>
          </div>
        </section>

        <section className="canterbury-section">
          <div className="canterbury-section-inner canterbury-intro-grid">
            <div className="canterbury-intro-copy">
              <h2 className="canterbury-section-title">
                Electrician in Bankstown <span className="canterbury-highlight">– NZXTGEN Electrical Services</span>
              </h2>
              <p className="canterbury-lead">
                Bankstown is a diverse and active area with a mix of long-standing family homes,
                newer townhouses, apartment developments, and busy commercial strips. Electrical
                needs here are rarely one-size-fits-all. Older properties often require safety
                upgrades, while renovated homes and small businesses need modern electrical solutions
                that support today's appliances, technology, and compliance requirements.
              </p>
              <p>
                NZXTGEN provides licensed electrical services throughout Bankstown, including
                surrounding areas such as Punchbowl and Yagoona. Our work supports homeowners,
                landlords, and small businesses who want safe, reliable electrical systems that suit
                how their property is used — not generic installations.
              </p>
            </div>
            <div className="canterbury-intro-image-card">
              <img src={bankstownThree} alt="Bankstown residential streetscape" />
            </div>
          </div>
        </section>

        <section className="canterbury-section canterbury-services-modern">
          <div className="canterbury-section-inner">
            <div className="canterbury-services-container">
              <div className="canterbury-services-context">
                <h2 className="canterbury-services-headline">
                  Electrical Services for Bankstown Homes & Businesses
                </h2>
                <div className="canterbury-services-intro">
                  <p>
                    Electrical work in Bankstown commonly involves a balance between upgrading ageing
                    infrastructure and supporting modern lifestyles. Many homes were built decades ago
                    and have since been renovated or extended, creating a mix of old and new wiring that
                    needs careful assessment.
                  </p>
                  <p>We regularly assist with:</p>
                </div>
              </div>
              <div className="canterbury-services-content">
                <div className="canterbury-services-group">
                  <div className="canterbury-services-items">
                    {serviceList.map((item) => (
                      <div key={item} className="canterbury-service-item">
                        <div className="canterbury-service-indicator"></div>
                        <span className="canterbury-service-text">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="canterbury-services-divider"></div>
                <div className="canterbury-services-business">
                  <p className="canterbury-services-business-text">
                    For small businesses, particularly along main roads and local shopping areas,
                    reliability and compliance are critical. Electrical downtime can disrupt operations,
                    and non-compliant systems can cause issues during inspections or insurance claims.
                    Our commercial services are tailored to retail and hospitality spaces, offices and
                    professional services, small warehouses and workshops, and mixed-use buildings.
                    Every job is approached with a practical understanding of how the space operates
                    day to day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="canterbury-feature-band"
          style={{ backgroundImage: `url(${bankstownParallax})` }}
        >
          <div className="canterbury-feature-overlay">
            <div className="canterbury-section-inner">
              <div className="canterbury-section-header light">
                <h2 className="canterbury-section-title">Common Electrical Scenarios in Bankstown</h2>
                <p>
                  Because Bankstown includes a wide range of property types, electrical needs vary
                  significantly from street to street.
                </p>
              </div>
              <div className="canterbury-feature-grid">
                <article className="canterbury-feature-card">
                  <h3>Older Homes and Safety Upgrades</h3>
                  <p>
                    Many homes in the area still rely on older switchboards, limited power outlets,
                    or wiring that was never designed for modern electrical loads. With today's
                    reliance on air conditioning, home offices, EV chargers, and multiple appliances,
                    these systems can become strained.
                  </p>
                  <p>We often help homeowners by:</p>
                  <ul className="canterbury-list">
                    {olderHomesList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>

                <article className="canterbury-feature-card">
                  <h3>Renovations and Extensions</h3>
                  <p>
                    Renovation activity remains strong across Bankstown, Punchbowl, and Yagoona.
                    Electrical work during renovations requires careful planning, particularly when
                    walls are opened or layouts change.
                  </p>
                  <p>Our renovation support includes:</p>
                  <ul className="canterbury-list">
                    {renovationsList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>
                    Good planning at this stage reduces future disruptions and ensures compliance
                    from the outset.
                  </p>
                </article>

                <article className="canterbury-feature-card">
                  <h3>Work-From-Home and Technology Upgrades</h3>
                  <p>
                    With more people working remotely, reliable power, data, and lighting have become
                    essential. Many households now require additional power points, better lighting
                    control, and structured cabling to support home offices.
                  </p>
                  <p>
                    We design practical solutions that improve usability without overcomplicating
                    systems.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="canterbury-section canterbury-why-choose">
          <div className="canterbury-section-inner">
            <div className="canterbury-why-choose-container">
              <div className="canterbury-why-choose-content">
                <h2 className="canterbury-why-choose-title">Why Choose NZXTGEN in Bankstown</h2>
                <p className="canterbury-why-choose-text">
                  Choosing an electrician isn't just about availability — it's about trust, safety,
                  and clear communication. NZXTGEN focuses on delivering work that is compliant,
                  well-organised, and suited to the property.
                </p>
                <p className="canterbury-why-choose-text">
                  We understand local property layouts, common renovation styles, and the electrical
                  challenges that frequently arise in this area. That familiarity allows us to work
                  efficiently and avoid surprises during installations or upgrades.
                </p>
                <p className="canterbury-why-choose-text">
                  Our approach suits homeowners who want things done properly, and small businesses who
                  need dependable electrical support without unnecessary disruption.
                </p>
              </div>
              <div className="canterbury-trust-pillars">
                <div className="canterbury-trust-pillars-grid">
                  {trustPillars.map((pillar, index) => (
                    <div key={index} className="canterbury-trust-pillar">
                      <div className="canterbury-trust-pillar-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="8" stroke="#365996" strokeWidth="2" fill="none" />
                          <path
                            d="M6 10L9 13L14 7"
                            stroke="#365996"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="canterbury-trust-pillar-content">
                        <h3 className="canterbury-trust-pillar-title">{pillar.title}</h3>
                        <p className="canterbury-trust-pillar-description">{pillar.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="canterbury-cta-band">
          <div className="canterbury-cta-band-inner">
            <h2 className="canterbury-cta-band-title">Need electrical work completed safely and professionally?</h2>
            <Link className="canterbury-cta-band-button" to="/free-quote">
              👉 Contact NZXTGEN today for a free quote
            </Link>
          </div>
        </section>

        <section className="canterbury-section canterbury-area-faq">
          <div className="canterbury-section-inner">
            <div className="canterbury-area-faq-grid">
              <div className="canterbury-area-faq-service">
                <h2 className="canterbury-section-title">Service Area</h2>
                <p className="canterbury-area-faq-text">
                  NZXTGEN provides electrical services across Bankstown, including nearby areas such as
                  Punchbowl and Yagoona.
                </p>
                <Link className="canterbury-service-area-cta" to="/free-quote">
                  Request a free quote
                </Link>
              </div>
              <div className="canterbury-area-faq-faq">
                <h2 className="canterbury-section-title">Bankstown Electrical Services – FAQs</h2>
                <div className="canterbury-faq">
                  {faqItems.map((item, index) => (
                    <div
                      key={item.question}
                      className={`canterbury-faq-item ${openIndexes.includes(index) ? "active" : ""}`}
                    >
                      <button
                        className="canterbury-faq-question"
                        type="button"
                        onClick={() => toggleFAQ(index)}
                      >
                        <span>{item.question}</span>
                        <span className="canterbury-faq-icon">
                          {openIndexes.includes(index) ? "–" : "+"}
                        </span>
                      </button>
                      <div className="canterbury-faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Bankstown;
