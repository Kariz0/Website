import React from "react";
import Banner from "../Banner/banner.tsx";
import InfiniteFeed from "./InfiniteFeed.tsx";
import logo from "../../logo.svg";
import "../../App.css";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Banner />

      <main className="container mx-auto px-6 py-12">
        {/* Hero */}
        <section
          id="hero"
          style={{ scrollMarginTop: "80px" }}
          className="mb-12 grid gap-6 lg:grid-cols-2 items-center"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Hi, I'm Andy Liu
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Soon to be Computer Engineer · Robotics Enthusiast · Lifelong
              Learner
            </p>
            <p className="mb-6 max-w-xl">
              Just a website for me to learn React and Tailwind CSS. It will
              eventually be a portfolio site showcasing my projects and
              experience. Stay tuned for updates!
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                View Projects
              </a>
              <a href="#contact" className="px-4 py-2 border rounded">
                Contact
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={logo}
              alt="logo"
              className="w-48 h-48 rounded-full shadow-lg"
            />
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          style={{ scrollMarginTop: "80px" }}
          className="mb-12 border-t pt-8"
        >
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="max-w-2xl text-gray-600 dark:text-gray-300">
            I'm a full-stack developer specializing in React and modern tooling.
            I enjoy building accessible, fast, and well-tested user interfaces.
          </p>
        </section>

        {/* Projects */}
        <section
          id="projects"
          style={{ scrollMarginTop: "80px" }}
          className="mb-12 border-t pt-8"
        >
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Project Alpha</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                A small description of project Alpha.
              </p>
            </article>
            <article className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Project Beta</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                A small description of project Beta.
              </p>
            </article>
            <article className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Project Gamma</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                A small description of project Gamma.
              </p>
            </article>
          </div>
        </section>

        {/* Posts (feed) */}
        <div className="border-t pt-8">
          <InfiniteFeed />
        </div>

        {/* Contact */}
        <section
          id="contact"
          style={{ scrollMarginTop: "80px" }}
          className="mt-12 mb-24 border-t pt-8"
        >
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <form className="max-w-xl grid gap-4">
            <input
              placeholder="Your name"
              className="p-3 border rounded bg-white dark:bg-gray-800"
            />
            <input
              placeholder="Your email"
              className="p-3 border rounded bg-white dark:bg-gray-800"
            />
            <textarea
              placeholder="Message"
              className="p-3 border rounded bg-white dark:bg-gray-800 h-32"
            />
            <button className="px-4 py-2 bg-green-600 text-white rounded w-max">
              Send
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
