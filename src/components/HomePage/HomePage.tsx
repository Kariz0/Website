import React, { useEffect, useState } from "react";
import Banner from "../Banner/banner.tsx";
import InfiniteFeed from "./InfiniteFeed.tsx";
import logo from "../../logo.svg";
import falls from "../../falls.jpeg";
import "../../App.css";

const HomePage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateScroll = () => {
      frame = 0;
      setScrollY(window.scrollY);
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      className="homepage-shell min-h-screen bg-slate-950 text-slate-100"
      style={{ ["--scroll-y" as string]: `${scrollY}px` }}
    >
      <div className="space-bg" aria-hidden="true">
        <div className="space-bg__layer space-bg__layer--far">
          <div className="space-bg__stars space-bg__stars--far" />
        </div>
        <div className="space-bg__layer space-bg__layer--near">
          <div className="space-bg__stars space-bg__stars--near" />
        </div>
        <div className="space-bg__layer space-bg__layer--nebula-one">
          <div className="space-bg__nebula space-bg__nebula--one" />
        </div>
        <div className="space-bg__layer space-bg__layer--nebula-two">
          <div className="space-bg__nebula space-bg__nebula--two" />
        </div>
        <div className="space-bg__layer space-bg__layer--nebula-three">
          <div className="space-bg__nebula space-bg__nebula--three" />
        </div>
        <div className="space-bg__layer space-bg__layer--planet">
          <div className="space-bg__planet" />
        </div>
        <div className="space-bg__layer space-bg__layer--orbit">
          <div className="space-bg__orbit" />
        </div>
        <div className="space-bg__shooting-star space-bg__shooting-star--one" />
        <div className="space-bg__shooting-star space-bg__shooting-star--two" />
        <div className="space-bg__shooting-star space-bg__shooting-star--three" />
      </div>

      <Banner />

      <main className="relative z-10 container mx-auto px-6 pb-12 pt-28 sm:pt-32">
        {/* Hero */}
        <section
          id="hero"
          style={{
            scrollMarginTop: "80px",
            backgroundImage: `linear-gradient(rgba(2,6,23,0.72), rgba(2,6,23,0.25)), url(${falls})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="mb-12 grid gap-6 lg:grid-cols-2 items-center rounded-3xl border border-white/10 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur-md"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white drop-shadow-[0_0_18px_rgba(125,211,252,0.18)]">
              Hi, I'm Andy Liu
            </h1>
            <p className="text-lg text-cyan-100/80 mb-6">
              Soon to be Computer Engineer · Robotics Enthusiast · Lifelong
              Learner
            </p>
            <p className="mb-6 max-w-xl text-slate-200/80">
              Just a website for me to learn React and Tailwind CSS. It will
              eventually be a portfolio site showcasing my projects and
              experience. Stay tuned for updates!
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={logo}
              alt="logo"
              className="w-48 h-48 rounded-full shadow-2xl shadow-cyan-500/20 ring-1 ring-white/10"
            />
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          style={{ scrollMarginTop: "80px" }}
          className="mb-12 border-t border-white/10 pt-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-white">About</h2>
          <p className="max-w-2xl text-slate-200/75">
            I'm a full-stack developer specializing in React and modern tooling.
            I enjoy building accessible, fast, and well-tested user interfaces.
          </p>
        </section>

        {/* Projects */}
        <section
          id="projects"
          style={{ scrollMarginTop: "80px" }}
          className="mb-12 border-t border-white/10 pt-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="p-6 rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-cyan-950/10 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Project Alpha
              </h3>
              <p className="text-sm text-slate-200/70">
                A small description of project Alpha.
              </p>
            </article>
            <article className="p-6 rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-cyan-950/10 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Project Beta
              </h3>
              <p className="text-sm text-slate-200/70">
                A small description of project Beta.
              </p>
            </article>
            <article className="p-6 rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-cyan-950/10 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Project Gamma
              </h3>
              <p className="text-sm text-slate-200/70">
                A small description of project Gamma.
              </p>
            </article>
          </div>
        </section>

        {/* Posts (feed) */}
        <div className="border-t border-white/10 pt-8">
          <InfiniteFeed />
        </div>

        {/* Contact */}
        <section
          id="contact"
          style={{ scrollMarginTop: "80px" }}
          className="mt-12 mb-24 border-t border-white/10 pt-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-white">Contact</h2>
          <div className="max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/10 backdrop-blur-md">
            <p className="mb-6 max-w-xl text-slate-200/75">
              Reach out through email or connect with me on LinkedIn.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:your.email@example.com"
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition-transform duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-slate-950/80"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                  Email
                </p>
                <p className="mt-2 break-all text-lg font-semibold text-white">
                  AND9L1U@gmail.com
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/your-linkedin-handle"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition-transform duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-slate-950/80"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                  LinkedIn
                </p>
                <p className="mt-2 break-all text-lg font-semibold text-white">
                  https://www.linkedin.com/in/andyliu05/
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
