import { internship } from "../data/portfolioData";
import { useScrollReveal } from "../hooks";

export default function Experience() {
  const { ref, visible } = useScrollReveal();
  const { ref: cardRef, visible: cardVisible } = useScrollReveal();

  return (
    <section id="experience" className="experience-section section-pad">
      <div className="container">
        {/* Heading */}
        <div
          ref={ref}
          className={`row mb-5 reveal ${visible ? "visible" : ""}`}
        >
          <div className="col-lg-8">
            <p className="section-label">Experience</p>
            <h2 className="section-heading mb-3">
              INTERNSHIP<br />
              <span style={{ color: "var(--accent-primary)" }}>EXPERIENCE</span>
            </h2>
            <div className="divider-accent"></div>
          </div>
        </div>

        {/* Internship card */}
        <div
          ref={cardRef}
          className={`row reveal ${cardVisible ? "visible" : ""}`}
        >
          <div className="col-lg-8">
            <div className="internship-card">
              <div className="d-flex flex-column flex-sm-row align-items-start gap-4">
                {/* Icon */}
                <div className="internship-org-icon" aria-hidden="true">
                  <i className={`bi bi-${internship.icon}`}></i>
                </div>

                {/* Content */}
                <div className="flex-1" style={{ minWidth: 0 }}>
                  <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-1">
                    <h3 className="internship-title">{internship.title}</h3>
                    <span className="internship-year">
                      <i className="bi bi-calendar3"></i>
                      {internship.year}
                    </span>
                  </div>

                  <p className="internship-org">
                    <i className="bi bi-building me-1"></i>
                    {internship.organization} · {internship.type}
                  </p>

                  <p className="internship-desc">{internship.description}</p>

                  <div className="d-flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <span key={skill} className="internship-skill-tag">
                        <i className="bi bi-check2"></i>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side note */}
          <div className="col-lg-4 mt-4 mt-lg-0 d-flex align-items-center">
            <div
              className="p-4"
              style={{
                background: "var(--bg-main)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
              }}
            >
              <i
                className="bi bi-info-circle"
                style={{ color: "var(--muted)", fontSize: "1.5rem" }}
              ></i>
              <p
                className="font-mono mt-2 mb-0"
                style={{ fontSize: "0.75rem", color: "var(--muted)", lineHeight: 1.6 }}
              >
                This was a structured virtual learning internship focused on
                CCNA networking fundamentals through Cisco's official curriculum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
