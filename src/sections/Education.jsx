import { education } from "../data/portfolioData";
import { useScrollReveal } from "../hooks";

function EduItem({ item, delay }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`edu-item reveal delay-${delay} ${visible ? "visible" : ""}`}
    >
      <div className="edu-dot" aria-hidden="true"></div>
      <div className="edu-card">
        <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
          <h3 className="edu-degree">{item.degree}</h3>
          {item.current && (
            <span className="edu-current-badge">CURRENT</span>
          )}
        </div>
        <p className="edu-institution">{item.institution}</p>
        <div className="edu-meta">
          <span className="edu-period">
            <i className="bi bi-calendar3 me-1"></i>
            {item.period}
          </span>
          <span className="edu-score">{item.score}</span>
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="education" className="education-section section-pad">
      <div className="container">
        <div className="row g-5">
          {/* Heading */}
          <div
            ref={ref}
            className={`col-lg-4 reveal-left ${visible ? "visible" : ""}`}
          >
            <p className="section-label">Academic Background</p>
            <h2 className="section-heading mb-3">
              MY<br />
              <span style={{ color: "var(--accent-primary)" }}>EDUCATION</span>
            </h2>
            <div className="divider-accent mb-3"></div>
            <p className="section-desc">
              An academic journey spanning strong fundamentals in science and
              technology, culminating in a Computer Science Engineering degree.
            </p>
          </div>

          {/* Timeline */}
          <div className="col-lg-8">
            <div className="education-timeline">
              {education.map((item, i) => (
                <EduItem key={item.id} item={item} delay={i + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
