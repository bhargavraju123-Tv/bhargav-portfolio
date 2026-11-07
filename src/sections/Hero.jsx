import { personalInfo } from "../data/portfolioData";
import { useTypingEffect } from "../hooks";
import "../styles/hero.css";

const taglines = personalInfo.taglines;

export default function Hero() {
  const typedText = useTypingEffect(taglines);

  return (
    <section id="home" className="hero-section">
      {/* Background elements */}
      <div className="hero-bg-glow" aria-hidden="true">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
      </div>
      <div className="hero-grid-pattern" aria-hidden="true"></div>

      <div className="container hero-content">
        <div className="row align-items-center g-5">
          {/* Left: Text */}
          <div className="col-lg-7">
            <p className="hero-pre-title">
              Available for opportunities
            </p>

            <h1 className="hero-name">
              <span>T.V.</span>
              <br />
              <span className="accent-line">BHARGAV</span>
              <br />
              <span>RAJU</span>
            </h1>

            <p className="hero-subtitle">
              <span className="font-mono" style={{ color: "var(--muted)" }}>{">"}</span>
              <span>{typedText}</span>
              <span className="typing-cursor" aria-hidden="true"></span>
            </p>

            <p className="hero-bio">
              {personalInfo.bio}
            </p>

            <div className="hero-cta">
              <a
                href="#projects"
                className="btn-accent"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                <i className="bi bi-grid-3x3-gap-fill"></i>
                View My Projects
              </a>

              {personalInfo.resumePath ? (
                <a href={personalInfo.resumePath} download className="btn-outline">
                  <i className="bi bi-download"></i>
                  Download Resume
                </a>
              ) : (
                <button
                  className="btn-outline"
                  disabled
                  title="Resume PDF will be available soon"
                  style={{ opacity: 0.45, cursor: "not-allowed" }}
                >
                  <i className="bi bi-download"></i>
                  Resume Coming Soon
                </button>
              )}

              <a
                href="#contact"
                className="btn-ghost"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                Contact Me
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <div className="hero-socials">
              <span className="hero-social-label">Find me on</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label="LinkedIn profile"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label="GitHub profile"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="icon-link"
                aria-label="Send email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>

          {/* Right: Code card visual */}
          <div className="col-lg-5">
            <div className="hero-visual">
              <div className="hero-code-card">
                <div className="code-card-header">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                  <span className="code-card-title">Developer.java</span>
                </div>
                <div className="code-card-body">
                  <div className="code-comment">// T.V. Bhargav Raju</div>
                  <div>
                    <span className="code-keyword">public class </span>
                    <span className="code-fn">Developer</span>
                    <span> {"{"}</span>
                  </div>
                  <div className="code-indent">
                    <span className="code-keyword">String </span>
                    <span className="code-var">name </span>
                    <span>= </span>
                    <span className="code-string">"Bhargav Raju"</span>
                    <span>;</span>
                  </div>
                  <div className="code-indent">
                    <span className="code-keyword">String </span>
                    <span className="code-var">focus </span>
                    <span>= </span>
                    <span className="code-string">"Java Backend"</span>
                    <span>;</span>
                  </div>
                  <div className="code-indent">
                    <span className="code-keyword">String </span>
                    <span className="code-var">cloud </span>
                    <span>= </span>
                    <span className="code-string">"AWS"</span>
                    <span>;</span>
                  </div>
                  <div>&nbsp;</div>
                  <div className="code-indent">
                    <span className="code-keyword">String</span>
                    <span>[] </span>
                    <span className="code-var">skills </span>
                    <span>= {"{"}</span>
                  </div>
                  <div className="code-indent2">
                    <span className="code-string">"Spring Boot"</span>
                    <span>, </span>
                    <span className="code-string">"React"</span>
                    <span>,</span>
                  </div>
                  <div className="code-indent2">
                    <span className="code-string">"MySQL"</span>
                    <span>, </span>
                    <span className="code-string">"Networking"</span>
                  </div>
                  <div className="code-indent">
                    <span>{"}"}</span>
                    <span>;</span>
                  </div>
                  <div>
                    <span>{"}"}</span>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="hero-stats px-3 mt-3">
                <div className="stat-item">
                  <div className="stat-num">3+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">3</div>
                  <div className="stat-label">Certifications</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">8.65</div>
                  <div className="stat-label">CGPA</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">2027</div>
                  <div className="stat-label">Graduating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-line"></div>
        <span className="scroll-text">scroll</span>
      </div>
    </section>
  );
}
