import React from "react";

type Item = { id: number; title: string; excerpt: string };

const generateItems = (start: number, count: number): Item[] =>
  Array.from({ length: count }, (_, i) => ({
    id: start + i,
    title: `Post ${start + i}`,
    excerpt: `This is a short preview for post ${start + i}.`,
  }));

const InfiniteFeed: React.FC = () => {
  // Render a fixed set of posts and make the feed scrollable to a limited height.
  const items = generateItems(1, 18);

  return (
    <section id="posts" className="py-12">
      <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>

      <div
        style={{ maxHeight: "60vh", overflowY: "auto" }}
        className="px-2 py-3 bg-transparent"
        aria-label="Latest posts feed"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-gray-500">End of posts</p>
    </section>
  );
};

export default InfiniteFeed;
