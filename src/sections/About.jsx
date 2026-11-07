import { personalInfo } from "../data/portfolioData";
import { useScrollReveal } from "../hooks";

export default function About() {
  const { ref: sectionRef, visible: sectionVisible } = useScrollReveal();
  const { ref: rightRef, visible: rightVisible } = useScrollReveal();

  return (
    <section id="about" className="about-section section-pad">
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Left column */}
          <div
            className={`col-lg-6 reveal-left ${sectionVisible ? "visible" : ""}`}
            ref={sectionRef}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-heading mb-3">
              A LITTLE<br />
              <span style={{ color: "var(--accent-primary)" }}>ABOUT ME</span>
            </h2>
            <div className="divider-accent mb-4"></div>

            <p className="section-desc mb-3">
              I am a Computer Science Engineering student pursuing my B.E. at
              Sathyabama Institute of Science and Technology. My academic
              journey has given me a solid foundation in Java, AWS Cloud,
              computer networking and data structures.
            </p>

            <p className="section-desc mb-4">
              I am particularly drawn to backend application development using
              Spring Boot, cloud infrastructure on AWS and networking
              technologies. I enjoy learning through hands-on projects and
              exploring how software, cloud systems and networks can be
              connected to build reliable and useful applications.
            </p>

            <div className="about-quote">
              "Building software that connects ideas, infrastructure and
              intelligence — one project at a time."
            </div>

            <div className="mt-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                <i className="bi bi-linkedin"></i>
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Right column: info cards */}
          <div
            className={`col-lg-6 reveal-right ${rightVisible ? "visible" : ""}`}
            ref={rightRef}
          >
            <div className="row g-3">
              <div className="col-12">
                <div className="about-info-card">
                  <i className="bi bi-mortarboard-fill about-info-icon"></i>
                  <div>
                    <span className="about-info-label">CURRENT EDUCATION</span>
                    <span className="about-info-value">
                      B.E. Computer Science & Engineering — Sathyabama Institute of Science & Technology
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="about-info-card">
                  <i className="bi bi-calendar3 about-info-icon"></i>
                  <div>
                    <span className="about-info-label">BATCH</span>
                    <span className="about-info-value">2023 – 2027</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="about-info-card">
                  <i className="bi bi-award-fill about-info-icon"></i>
                  <div>
                    <span className="about-info-label">CGPA</span>
                    <span className="about-info-value">8.65</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="about-info-card">
                  <i className="bi bi-geo-alt-fill about-info-icon"></i>
                  <div>
                    <span className="about-info-label">LOCATION</span>
                    <span className="about-info-value">Chennai, India</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="about-info-card">
                  <i className="bi bi-lightbulb-fill about-info-icon"></i>
                  <div>
                    <span className="about-info-label">INTERESTS</span>
                    <span className="about-info-value">Java Backend, Cloud, Networking</span>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="about-info-card">
                  <i className="bi bi-envelope-fill about-info-icon"></i>
                  <div>
                    <span className="about-info-label">EMAIL</span>
                    <span className="about-info-value">{personalInfo.email}</span>
                  </div>
                </div>
              </div>

              {/* Quick tech highlight */}
              <div className="col-12">
                <div className="about-info-card flex-wrap">
                  <i className="bi bi-code-slash about-info-icon"></i>
                  <div>
                    <span className="about-info-label">CORE TECHNOLOGIES</span>
                    <div className="d-flex flex-wrap gap-2 mt-1">
                      {["Java", "Spring Boot", "AWS", "React.js", "MySQL", "Networking"].map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
