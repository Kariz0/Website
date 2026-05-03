import React from "react";

const Banner: React.FC = () => {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Jane Doe</h1>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            Developer • Designer
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-3">
          <a
            href="#about"
            onClick={scrollTo("about")}
            className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={scrollTo("projects")}
            className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
          >
            Projects
          </a>
          <a
            href="#posts"
            onClick={scrollTo("posts")}
            className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
          >
            Posts
          </a>
          <a
            href="#contact"
            onClick={scrollTo("contact")}
            className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
          >
            Contact
          </a>
        </nav>

        <div className="md:hidden">
          <button className="px-3 py-2 border rounded">Menu</button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
