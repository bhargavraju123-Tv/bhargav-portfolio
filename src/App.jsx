import { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/sections.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CommandMenu from "./components/CommandMenu";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Education from "./sections/Education";
import Interests from "./sections/Interests";
import Contact from "./sections/Contact";

import { useTheme } from "./hooks";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [cmdOpen, setCmdOpen] = useState(false);

  // Global Ctrl+K / Cmd+K listener
  const handleKeyDown = useCallback((e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      setCmdOpen((o) => !o);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        openCommandMenu={() => setCmdOpen(true)}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Interests />
        <Contact />
      </main>

      <Footer />

      <CommandMenu open={cmdOpen} onClose={() => setCmdOpen(false)} />
    </>
  );
}
