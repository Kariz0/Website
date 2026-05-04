import React, { useEffect, useState } from "react";

const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let frame = 0;

    const updateVisibility = () => {
      frame = 0;
      setIsVisible(window.scrollY < 24);
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div
        className="banner-hover-strip fixed left-0 right-0 top-0 z-50 h-4"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(window.scrollY < 24)}
        aria-hidden="true"
      />

      <header
        className={`fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl transition-transform duration-300 ease-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        onMouseEnter={() => setIsVisible(true)}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-white">Andy Liu</h1>
            <span className="text-sm text-slate-300/80">
              Computer Engineer
            </span>
          </div>

          <nav className="hidden items-center gap-3 md:flex">
            <a
              href="#about"
              onClick={scrollTo("about")}
              className="rounded-full px-3 py-2 text-slate-200 transition-colors hover:bg-white/10"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={scrollTo("projects")}
              className="rounded-full px-3 py-2 text-slate-200 transition-colors hover:bg-white/10"
            >
              Projects
            </a>
            <a
              href="#posts"
              onClick={scrollTo("posts")}
              className="rounded-full px-3 py-2 text-slate-200 transition-colors hover:bg-white/10"
            >
              Posts
            </a>
            <a
              href="#contact"
              onClick={scrollTo("contact")}
              className="rounded-full px-3 py-2 text-slate-200 transition-colors hover:bg-white/10"
            >
              Contact
            </a>
          </nav>

          <div className="md:hidden">
            <button className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-white">
              Menu
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
