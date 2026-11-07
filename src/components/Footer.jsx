import { personalInfo, navLinks } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href, e) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-lg-4">
            <p className="footer-name">
              {personalInfo.name}
              <span style={{ color: "var(--accent-primary)" }}>.</span>
            </p>
            <p className="footer-role">{personalInfo.role}</p>
            <div className="d-flex gap-2 mt-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="icon-link"
                aria-label="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>

          {/* Quick nav */}
          <div className="col-lg-4 offset-lg-1">
            <p
              className="font-mono mb-3"
              style={{ fontSize: "0.68rem", color: "var(--muted)", letterSpacing: "0.1em" }}
            >
              QUICK NAVIGATION
            </p>
            <div className="row g-1">
              {navLinks.map((link) => (
                <div key={link.href} className="col-6">
                  <a
                    href={link.href}
                    className="footer-nav-link"
                    onClick={(e) => handleNav(link.href, e)}
                  >
                    <i className="bi bi-chevron-right me-1" style={{ fontSize: "0.65rem" }}></i>
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-3">
            <p
              className="font-mono mb-3"
              style={{ fontSize: "0.68rem", color: "var(--muted)", letterSpacing: "0.1em" }}
            >
              CONTACT
            </p>
            <a href={`mailto:${personalInfo.email}`} className="footer-nav-link" style={{ wordBreak: "break-word" }}>
              <i className="bi bi-envelope me-1"></i>
              {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="footer-nav-link mt-1">
              <i className="bi bi-telephone me-1"></i>
              {personalInfo.phone}
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
          <p className="footer-copy mb-0">
            © {year} T.V. Bhargav Raju. All rights reserved.
          </p>
          <p className="footer-made-with mb-0">
            Built with{" "}
            <i className="bi bi-heart-fill"></i>
            {" "}using React + Vite + Bootstrap 5
          </p>
        </div>
      </div>
    </footer>
  );
}
