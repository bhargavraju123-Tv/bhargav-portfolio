import { useEffect, useState, useCallback, useRef } from "react";
import { navLinks } from "../data/portfolioData";

const menuItems = [
  { label: "Home", href: "#home", icon: "house-fill" },
  { label: "About", href: "#about", icon: "person-fill" },
  { label: "Skills", href: "#skills", icon: "code-slash" },
  { label: "Projects", href: "#projects", icon: "grid-3x3-gap-fill" },
  { label: "Experience", href: "#experience", icon: "briefcase-fill" },
  { label: "Certifications", href: "#certifications", icon: "patch-check-fill" },
  { label: "Education", href: "#education", icon: "mortarboard-fill" },
  { label: "Contact", href: "#contact", icon: "envelope-fill" },
];

export default function CommandMenu({ open, onClose }) {
  const [focused, setFocused] = useState(0);
  const listRef = useRef(null);

  const navigate = useCallback(
    (href) => {
      onClose();
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    setFocused(0);

    const handleKey = (e) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocused((f) => (f + 1) % menuItems.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocused((f) => (f - 1 + menuItems.length) % menuItems.length);
      }
      if (e.key === "Enter") {
        navigate(menuItems[focused].href);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, focused, navigate, onClose]);

  if (!open) return null;

  return (
    <div
      className="command-menu-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Quick navigation menu"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="command-menu-box">
        {/* Header */}
        <div className="command-menu-header">
          <i className="bi bi-search command-menu-search-icon" aria-hidden="true"></i>
          <span className="command-menu-title">Quick Navigate</span>
          <span
            className="ms-auto font-mono"
            style={{ fontSize: "0.65rem", color: "var(--muted)" }}
          >
            ↑↓ to navigate · Enter to go
          </span>
        </div>

        {/* Items */}
        <div className="command-menu-items" ref={listRef} role="listbox">
          {menuItems.map((item, i) => (
            <button
              key={item.href}
              role="option"
              aria-selected={i === focused}
              className={`command-menu-item w-100 text-start border-0 ${i === focused ? "focused" : ""}`}
              onClick={() => navigate(item.href)}
              onMouseEnter={() => setFocused(i)}
            >
              <i className={`bi bi-${item.icon}`} aria-hidden="true"></i>
              {item.label}
              <i
                className="bi bi-arrow-return-left ms-auto"
                aria-hidden="true"
                style={{
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  opacity: i === focused ? 1 : 0,
                  transition: "opacity 0.2s",
                }}
              ></i>
            </button>
          ))}
        </div>

        {/* Footer hints */}
        <div className="command-menu-footer">
          <span className="cmd-hint">
            <span className="kbd">Esc</span> close
          </span>
          <span className="cmd-hint">
            <span className="kbd">↑↓</span> navigate
          </span>
          <span className="cmd-hint">
            <span className="kbd">Enter</span> go
          </span>
        </div>
      </div>
    </div>
  );
}
