import { useScrollReveal } from "../hooks";
import { interests } from "../data/portfolioData";

function InterestCard({ item, delay }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`col-sm-6 col-lg-3 reveal delay-${delay} ${visible ? "visible" : ""}`}
    >
      <div className="interest-card">
        <i className={`bi bi-${item.icon}`} aria-hidden="true"></i>
        <span>{item.label}</span>
      </div>
    </div>
  );
}

export default function Interests() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="interests"
      className="section-pad"
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container">
        <div
          ref={ref}
          className={`row mb-5 reveal ${visible ? "visible" : ""}`}
        >
          <div className="col-lg-6">
            <p className="section-label">Personal Focus</p>
            <h2 className="section-heading mb-3">
              AREAS OF<br />
              <span style={{ color: "var(--accent-primary)" }}>INTEREST</span>
            </h2>
            <div className="divider-accent"></div>
          </div>
        </div>

        <div className="row g-3">
          {interests.map((item, i) => (
            <InterestCard key={item.label} item={item} delay={Math.min(i + 1, 6)} />
          ))}
        </div>
      </div>
    </section>
  );
}
