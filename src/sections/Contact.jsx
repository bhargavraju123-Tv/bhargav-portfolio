import { personalInfo } from "../data/portfolioData";
import { useScrollReveal, useCopyToClipboard } from "../hooks";

function ContactCard({ href, icon, label, value, external }) {
  const { ref, visible } = useScrollReveal();

  const Tag = href ? "a" : "div";
  const props = href
    ? {
        href,
        ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
      }
    : {};

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""}`}
    >
      <Tag className="contact-card" {...props}>
        <div className="contact-icon-wrap">
          <i className={`bi bi-${icon}`}></i>
        </div>
        <div>
          <span className="contact-label">{label}</span>
          <span className="contact-value">{value}</span>
        </div>
        {href && (
          <i
            className="bi bi-arrow-up-right ms-auto"
            style={{ color: "var(--muted)", fontSize: "0.9rem" }}
            aria-hidden="true"
          ></i>
        )}
      </Tag>
    </div>
  );
}

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const { copied, copy } = useCopyToClipboard();

  return (
    <section id="contact" className="contact-section section-pad">
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Left: Heading */}
          <div
            ref={ref}
            className={`col-lg-5 reveal-left ${visible ? "visible" : ""}`}
          >
            <p className="section-label">Get In Touch</p>
            <h2 className="contact-heading-large mb-4">
              LET&apos;S CONNECT AND BUILD SOMETHING{" "}
              <span style={{ color: "var(--accent-primary)" }}>MEANINGFUL.</span>
            </h2>
            <div className="divider-accent mb-4"></div>
            <p className="section-desc mb-4">
              I&apos;m always open to interesting conversations, collaboration
              opportunities and learning from others in the developer community.
              Feel free to reach out through any of the channels below.
            </p>

            {/* Social links */}
            <div className="d-flex gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label="LinkedIn"
                style={{ width: "48px", height: "48px", fontSize: "1.3rem" }}
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label="GitHub"
                style={{ width: "48px", height: "48px", fontSize: "1.3rem" }}
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="icon-link"
                aria-label="Email"
                style={{ width: "48px", height: "48px", fontSize: "1.3rem" }}
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>

          {/* Right: Contact cards */}
          <div className="col-lg-7">
            <div className="d-flex flex-column gap-3">
              {/* Email with copy */}
              <div className={`reveal delay-1 ${visible ? "visible" : ""}`}>
                <div className="contact-card">
                  <div className="contact-icon-wrap">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="flex-1" style={{ minWidth: 0 }}>
                    <span className="contact-label">EMAIL</span>
                    <span className="contact-value">{personalInfo.email}</span>
                  </div>
                  <div className="d-flex gap-2 ms-auto flex-shrink-0">
                    {copied ? (
                      <span className="copy-success">
                        <i className="bi bi-check2-circle"></i>
                        Copied!
                      </span>
                    ) : (
                      <button
                        className="btn-ghost"
                        onClick={() => copy(personalInfo.email)}
                        aria-label="Copy email address"
                        style={{ padding: "0.4rem 0.75rem", fontSize: "0.78rem" }}
                      >
                        <i className="bi bi-clipboard"></i>
                        Copy
                      </button>
                    )}
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="btn-accent"
                      style={{ padding: "0.4rem 0.75rem", fontSize: "0.78rem" }}
                      aria-label="Send email"
                    >
                      <i className="bi bi-send-fill"></i>
                      Email
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className={`reveal delay-2 ${visible ? "visible" : ""}`}>
                <a href={`tel:${personalInfo.phone}`} className="contact-card" style={{ textDecoration: "none" }}>
                  <div className="contact-icon-wrap">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <span className="contact-label">PHONE</span>
                    <span className="contact-value">{personalInfo.phone}</span>
                  </div>
                  <i className="bi bi-arrow-up-right ms-auto" style={{ color: "var(--muted)", fontSize: "0.9rem" }} aria-hidden="true"></i>
                </a>
              </div>

              {/* LinkedIn */}
              <div className={`reveal delay-3 ${visible ? "visible" : ""}`}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                  style={{ textDecoration: "none" }}
                >
                  <div className="contact-icon-wrap">
                    <i className="bi bi-linkedin"></i>
                  </div>
                  <div>
                    <span className="contact-label">LINKEDIN</span>
                    <span className="contact-value">bhargav-raju-2731a0317</span>
                  </div>
                  <i className="bi bi-arrow-up-right ms-auto" style={{ color: "var(--muted)", fontSize: "0.9rem" }} aria-hidden="true"></i>
                </a>
              </div>

              {/* GitHub */}
              <div className={`reveal delay-4 ${visible ? "visible" : ""}`}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                  style={{ textDecoration: "none" }}
                >
                  <div className="contact-icon-wrap">
                    <i className="bi bi-github"></i>
                  </div>
                  <div>
                    <span className="contact-label">GITHUB</span>
                    <span className="contact-value">bhargavraju123Tv</span>
                  </div>
                  <i className="bi bi-arrow-up-right ms-auto" style={{ color: "var(--muted)", fontSize: "0.9rem" }} aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
