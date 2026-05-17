import Blog from "@/components/Blog";
import Header from "@/components/Header";

export const metadata = {
  title: "Blogs | Ovira Science",
  description: "Read fertility, IVF, and reproductive health articles from Ovira Science.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <Blog showViewAll={false} />
    </>
  );
}
