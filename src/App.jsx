import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {
  contactDetails,
  heroStats,
  navItems,
  projects,
  skillGroups,
  socialLinks,
} from "./data/portfolio";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <div
      className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.10),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(251,191,36,0.12),_transparent_26%)] text-slate-950 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(244,114,182,0.12),_transparent_26%),linear-gradient(180deg,_#020617_0%,_#020617_100%)]
     dark:text-white"
    >
      <Navbar
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        navItems={navItems}
        setIsMenuOpen={setIsMenuOpen}
        socialLinks={socialLinks}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero stats={heroStats} socialLinks={socialLinks} />
        <About />
        <Skills skillGroups={skillGroups} />
        <Projects projects={projects} />
        <Contact contactDetails={contactDetails} />
      </main>

      <Footer />
    </div>
  );
}
