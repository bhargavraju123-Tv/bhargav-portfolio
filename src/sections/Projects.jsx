import { useState } from "react";
import { projects } from "../data/portfolioData";
import { useScrollReveal } from "../hooks";

/* ——— Project Details Modal ——— */
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="modal show d-block modal-custom"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <div>
              <p className="font-mono mb-1" style={{ fontSize: "0.68rem", color: "var(--muted)" }}>
                {project.subtitle}
              </p>
              <h5 className="modal-title" id="project-modal-title">
                {project.title}
              </h5>
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close modal"
            ></button>
          </div>
          <div className="modal-body">
            {/* Status */}
            {project.status && (
              <span className="tech-tag mb-3 d-inline-block">
                <i className="bi bi-circle-fill me-1" style={{ fontSize: "0.5rem" }}></i>
                {project.status}
              </span>
            )}

            {/* Visual */}
            {project.image ? (
              <div className="mb-4" style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)" }}>
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  style={{ width: "100%", height: "240px", objectFit: "cover", filter: project.id === 2 ? "blur(0)" : "none" }}
                />
                {project.id === 2 && (
                  <p className="font-mono p-2 mb-0" style={{ fontSize: "0.65rem", color: "var(--muted)", background: "var(--bg-navbar)" }}>
                    <i className="bi bi-info-circle me-1"></i>
                    Note: Any personal information visible in the screenshot has been noted — please supply a clean screenshot for a production deployment.
                  </p>
                )}
              </div>
            ) : (
              <div
                className="mb-4 d-flex flex-column align-items-center justify-content-center"
                style={{
                  background: project.gradient,
                  borderRadius: "12px",
                  height: "180px",
                  border: "1px solid var(--border)",
                }}
              >
                <i className="bi bi-file-earmark-text" style={{ fontSize: "2.5rem", color: "var(--accent-primary)", opacity: 0.6 }}></i>
                <span className="font-mono mt-2" style={{ fontSize: "0.72rem", color: "var(--muted)" }}>Live Preview Available</span>
              </div>
            )}

            {/* Description */}
            <h6 className="font-heading mb-2" style={{ color: "var(--heading)" }}>About this project</h6>
            <p style={{ color: "var(--paragraph)", lineHeight: 1.75, fontSize: "0.95rem" }}>
              {project.longDescription}
            </p>

            {/* Technologies */}
            <h6 className="font-heading mb-2 mt-3" style={{ color: "var(--heading)" }}>Technologies Used</h6>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {project.technologies.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>

            {/* Cloud tech */}
            {project.cloudTech.length > 0 && (
              <>
                <h6 className="font-heading mb-2" style={{ color: "var(--heading)" }}>Cloud Architecture</h6>
                <div className="d-flex flex-wrap gap-2">
                  {project.cloudTech.map((t) => (
                    <span
                      key={t}
                      className="font-mono"
                      style={{
                        fontSize: "0.68rem",
                        color: "var(--muted)",
                        border: "1px solid var(--border)",
                        borderRadius: "6px",
                        padding: "0.2rem 0.6rem",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="modal-footer">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                <i className="bi bi-box-arrow-up-right"></i>
                Live Preview
              </a>
            )}
            <button className="btn-ghost" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ——— Single Project Card ——— */
function ProjectCard({ project, delay, onDetails }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`col-lg-4 reveal delay-${delay} ${visible ? "visible" : ""}`}
    >
      <div className="project-card h-100">
        {/* Image / visual area */}
        <div className="project-img-wrapper">
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                loading="lazy"
              />
              <div className="project-img-overlay"></div>
            </>
          ) : (
            <div
              className="project-placeholder-visual"
              style={{ background: project.gradient }}
            >
              <i className="bi bi-file-earmark-richtext placeholder-icon"></i>
              <span className="placeholder-label">
                {project.liveUrl ? "Live Preview Available" : "Project Simulation"}
              </span>
            </div>
          )}

          {project.status && (
            <span className="project-status-badge">
              ● {project.status}
            </span>
          )}
        </div>

        {/* Body */}
        <div className="project-body">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-desc">{project.description}</p>

          <div className="project-tech-row">
            {project.technologies.slice(0, 5).map((t) => (
              <span key={t} className="project-tech-tag">{t}</span>
            ))}
            {project.technologies.length > 5 && (
              <span className="project-tech-tag">+{project.technologies.length - 5}</span>
            )}
          </div>

          <div className="project-btn-row">
            <button
              className="btn-accent"
              onClick={() => onDetails(project)}
              aria-label={`View details for ${project.title}`}
            >
              <i className="bi bi-info-circle"></i>
              Details
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label={`Live demo for ${project.title}`}
              >
                <i className="bi bi-box-arrow-up-right"></i>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ——— Projects Section ——— */
export default function Projects() {
  const [modalProject, setModalProject] = useState(null);
  const { ref, visible } = useScrollReveal();

  return (
    <section id="projects" className="projects-section section-pad">
      <div className="container">
        {/* Heading */}
        <div
          ref={ref}
          className={`row mb-5 reveal ${visible ? "visible" : ""}`}
        >
          <div className="col-lg-8">
            <p className="section-label">Featured Work</p>
            <h2 className="section-heading mb-3">
              MY FEATURED<br />
              <span style={{ color: "var(--accent-primary)" }}>PROJECTS</span>
            </h2>
            <div className="divider-accent mb-3"></div>
            <p className="section-desc">
              A selection of projects I have built and am currently developing —
              spanning backend systems, web applications and network simulations.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i + 1}
              onDetails={setModalProject}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </section>
  );
}
