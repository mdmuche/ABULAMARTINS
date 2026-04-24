import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({
  activeSection,
  isMenuOpen,
  navItems,
  setIsMenuOpen,
  socialLinks,
  theme,
  toggleTheme,
}) {
  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-[0_20px_45px_-30px_rgba(15,23,42,0.7)] dark:bg-white dark:text-slate-950">
              AM
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-medium uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                Full-Stack Engineer
              </span>
              <span className="block font-serif text-2xl text-slate-950 dark:text-white">
                Abula Martins Onyemuche
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-950"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 xl:flex">
              {socialLinks.slice(0, 2).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 dark:border-white/10 dark:bg-slate-900 dark:text-white lg:hidden"
              aria-label="Toggle navigation menu"
            >
              <span className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-[5.25rem] z-40 rounded-[2rem] border border-slate-200/80 bg-white/95 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    activeSection === item.id
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
