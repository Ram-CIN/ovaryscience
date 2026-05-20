import Header from "@/components/Header";
import { blogs, getBlogBySlug } from "@/lib/blogs";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";

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
            {blog.content.map((block, index) => {
              if (typeof block === "string") {
                return <p key={block}>{block}</p>;
              }

              if (block.type === "heading") {
                return (
                  <h2
                    key={`${block.text}-${index}`}
                    className="pt-5 text-2xl font-black leading-tight text-slate-950 sm:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "subheading") {
                return (
                  <h3
                    key={`${block.text}-${index}`}
                    className="pt-2 text-xl font-extrabold leading-tight text-slate-950"
                  >
                    {block.text}
                  </h3>
                );
              }

              if (block.type === "list") {
                return (
                  <ul
                    key={`list-${index}`}
                    className="list-disc space-y-2 pl-6 marker:text-[#e33459]"
                  >
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }

              return <p key={`${block.text}-${index}`}>{block.text}</p>;
            })}
          </div>
        </article>
      </main>
   <Footer />
    </>
  );
}
