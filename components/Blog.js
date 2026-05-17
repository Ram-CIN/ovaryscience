import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogs } from "@/lib/blogs";

export function BlogCard({ blog }) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-rose-100 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
      <Link href={`/blog/${blog.slug}`} className="block">
        <div className={`relative h-44 bg-gradient-to-br ${blog.tone} p-5`}>
          <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-[#e33459] backdrop-blur">
            {blog.category}
          </span>

          <h3 className="absolute bottom-5 left-5 right-5 line-clamp-2 text-xl font-extrabold leading-tight text-slate-950">
            {blog.title}
          </h3>
        </div>

        <div className="p-5">
          <p className="line-clamp-2 text-sm leading-6 text-slate-600">
            {blog.excerpt}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#e33459]">
            Read more
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function Blog({ limit = 8, showViewAll = true }) {
  const visibleBlogs = blogs.slice(0, limit);

  return (
    <section className="relative overflow-hidden bg-[#fffaf7] px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute right-[-4rem] top-20 h-72 w-72 rounded-full bg-rose-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#e33459]">
              Latest blogs
            </p>
            <h2 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">
              Fertility insights worth reading.
            </h2>
          </div>

          {showViewAll && (
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition hover:text-[#e33459]"
            >
              View all blogs
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
