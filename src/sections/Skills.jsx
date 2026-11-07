import { skillCategories, marqueeItems } from "../data/portfolioData";
import { useScrollReveal } from "../hooks";

function SkillCard({ cat, delay }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`col-sm-6 col-lg-4 col-xl-3 reveal delay-${delay} ${visible ? "visible" : ""}`}
    >
      <div className="skill-category-card">
        <div className="skill-cat-header">
          <div className="skill-cat-icon">
            <i className={`bi bi-${cat.icon}`}></i>
          </div>
          <h3 className="skill-cat-title">{cat.label}</h3>
        </div>
        <div className="skill-tags">
          {cat.skills.map((skill) => (
            <span key={skill} className="tech-tag">{skill}</span>
          ))}
        </div>
        {cat.note && (
          <p className="skill-note">
            <i className="bi bi-info-circle me-1"></i>
            {cat.note}
          </p>
        )}
      </div>
    </div>
  );
}

function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee-section my-5">
      <div className="marquee-track" aria-hidden="true">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="skills-section section-pad">
      <div className="container">
        {/* Heading */}
        <div
          ref={ref}
          className={`row mb-5 reveal ${visible ? "visible" : ""}`}
        >
          <div className="col-lg-8">
            <p className="section-label">Technical Skills</p>
            <h2 className="section-heading mb-3">
              MY TECH<br />
              <span style={{ color: "var(--accent-primary)" }}>STACK</span>
            </h2>
            <div className="divider-accent mb-3"></div>
            <p className="section-desc">
              A collection of technologies and tools I work with, organized by
              category. Some are part of my ongoing project exploration stack.
            </p>
          </div>
        </div>

        {/* Category cards */}
        <div className="row g-4">
          {skillCategories.map((cat, i) => (
            <SkillCard
              key={cat.id}
              cat={cat}
              delay={Math.min((i % 4) + 1, 6)}
            />
          ))}
        </div>
      </div>

      {/* Marquee strip */}
      <Marquee />
    </section>
  );
}
