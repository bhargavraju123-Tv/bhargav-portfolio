import { useState, useEffect, useRef } from "react";
import { navLinks } from "../data/portfolioData";
import { useActiveSection } from "../hooks";
import "../styles/navbar.css";

const sectionIds = navLinks.map((n) => n.href.replace("#", ""));

export default function Navbar({ theme, toggleTheme, openCommandMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between w-100">
            {/* Brand */}
            <a
              href="#home"
              className="navbar-brand-custom"
              onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
              aria-label="Go to home"
            >
              BHARGAV<span className="accent-dot">.</span>
            </a>

            {/* Desktop nav */}
            <div className="d-none d-lg-flex align-items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link-custom ${active === link.href.replace("#", "") ? "active" : ""}`}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  aria-current={active === link.href.replace("#", "") ? "page" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="d-flex align-items-center gap-2">
              {/* Cmd shortcut */}
              <button
                className="btn-ghost d-none d-lg-inline-flex"
                onClick={openCommandMenu}
                aria-label="Open command menu"
                style={{ fontSize: "0.75rem", padding: "0.4rem 0.8rem" }}
              >
                <i className="bi bi-command"></i>
                <span className="font-mono" style={{ fontSize: "0.68rem" }}>⌘K</span>
              </button>

              {/* Theme toggle */}
              <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "solar" ? "Crimson Fury" : "Solar Energy"} theme`}
              >
                <i
                  className={`bi bi-${theme === "solar" ? "sun-fill" : "fire"} theme-icon`}
                ></i>
                <span className="d-none d-sm-inline">
                  {theme === "solar" ? "Solar" : "Crimson"}
                </span>
              </button>

              {/* Mobile hamburger */}
              <button
                className="navbar-toggler-custom d-lg-none"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileOpen}
              >
                <i className={`bi bi-${mobileOpen ? "x-lg" : "list"}`}></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu" style={{ position: "fixed", top: "60px", left: 0, right: 0, zIndex: 998 }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${active === link.href.replace("#", "") ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
