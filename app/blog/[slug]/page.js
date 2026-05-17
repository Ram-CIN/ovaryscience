import Header from "@/components/Header";
import { blogs, getBlogBySlug } from "@/lib/blogs";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog not found | Ovira Science",
    };
  }

  return {
    title: `${blog.title} | Ovira Science`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#e33459]">
            {blog.category}
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            {blog.title}
          </h1>

          <div className={`mt-8 h-72 rounded-[2rem] bg-gradient-to-br ${blog.tone}`} />

          <div className="mt-10 space-y-6 text-base leading-8 text-slate-700 sm:text-lg">
            {blog.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
