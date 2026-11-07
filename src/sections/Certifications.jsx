import { useState } from "react";
import { certifications } from "../data/portfolioData";
import { useScrollReveal } from "../hooks";

/* ——— Certificate PDF Modal ——— */
function CertModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div
      className="modal show d-block modal-custom"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <div>
              <p className="font-mono mb-1" style={{ fontSize: "0.68rem", color: "var(--muted)" }}>
                {cert.issuer}
              </p>
              <h5 className="modal-title" id="cert-modal-title">
                {cert.title}
              </h5>
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close certificate viewer"
            ></button>
          </div>
          <div className="modal-body" style={{ padding: "1rem" }}>
            <iframe
              src={cert.pdfPath}
              title={`Certificate: ${cert.title}`}
              style={{
                width: "100%",
                height: "70vh",
                border: "none",
                borderRadius: "8px",
                background: "#fff",
              }}
            />
          </div>
          <div className="modal-footer">
            <a
              href={cert.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              <i className="bi bi-box-arrow-up-right"></i>
              Open in New Tab
            </a>
            <button className="btn-ghost" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ——— Certificate Card ——— */
function CertCard({ cert, delay, onClick }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`col-lg-4 reveal delay-${delay} ${visible ? "visible" : ""}`}
    >
      <div className="cert-card h-100">
        {/* Issuer badge */}
        <span className="cert-issuer-badge">
          <i className="bi bi-building"></i>
          {cert.issuerShort}
        </span>

        {/* Icon */}
        <i
          className={`bi bi-${cert.icon} cert-icon-large`}
          style={{ color: cert.color }}
          aria-hidden="true"
        ></i>

        {/* Title */}
        <h3 className="cert-title">{cert.title}</h3>

        {/* Date */}
        <p className="cert-date">
          <i className="bi bi-calendar3 me-1"></i>
          {cert.date}
        </p>

        {/* Credential ID */}
        {cert.credentialId && (
          <p className="cert-id">
            <i className="bi bi-fingerprint me-1"></i>
            ID: {cert.credentialId}
          </p>
        )}

        {/* Button */}
        <div className="mt-auto pt-3">
          <button
            className="btn-accent w-100"
            onClick={() => onClick(cert)}
            aria-label={`View certificate: ${cert.title}`}
          >
            <i className="bi bi-eye-fill"></i>
            View Certificate
          </button>
        </div>
      </div>
    </div>
  );
}

/* ——— Certifications Section ——— */
export default function Certifications() {
  const [modalCert, setModalCert] = useState(null);
  const { ref, visible } = useScrollReveal();

  return (
    <section id="certifications" className="section-pad" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        {/* Heading */}
        <div
          ref={ref}
          className={`row mb-5 reveal ${visible ? "visible" : ""}`}
        >
          <div className="col-lg-8">
            <p className="section-label">Credentials</p>
            <h2 className="section-heading mb-3">
              MY<br />
              <span style={{ color: "var(--accent-primary)" }}>CERTIFICATIONS</span>
            </h2>
            <div className="divider-accent mb-3"></div>
            <p className="section-desc">
              Verified certifications from Oracle University and Cisco Networking
              Academy, reflecting my growth in Java development and networking.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {certifications.map((cert, i) => (
            <CertCard
              key={cert.id}
              cert={cert}
              delay={i + 1}
              onClick={setModalCert}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalCert && (
        <CertModal cert={modalCert} onClose={() => setModalCert(null)} />
      )}
    </section>
  );
}
