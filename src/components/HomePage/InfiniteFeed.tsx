import React from "react";

type Item = { id: number; title: string; excerpt: string };

const generateItems = (start: number, count: number): Item[] =>
  Array.from({ length: count }, (_, index) => ({
    id: start + index,
    title: `Post ${start + index}`,
    excerpt: `This is a short preview for post ${start + index}.`,
  }));

const InfiniteFeed: React.FC = () => {
  const items = generateItems(1, 18);

  return (
    <section id="posts" className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-white">Latest Posts</h2>

      <div
        style={{ maxHeight: "60vh", overflowY: "auto" }}
        className="px-2 py-3 bg-transparent"
        aria-label="Latest posts feed"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-cyan-950/10 backdrop-blur-sm"
            >
              <h3 className="mb-2 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-slate-200/70">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-slate-400">End of posts</p>
    </section>
  );
};

export default InfiniteFeed;
