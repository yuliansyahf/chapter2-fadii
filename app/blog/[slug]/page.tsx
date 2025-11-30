import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { blogPosts } from "../../data/root/blog";

interface Params {
  slug: string;
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen text-white p-10">
        <Link href="/blog" className="text-soft-brown hover:underline">
          ← Back to Blog
        </Link>
        <h1 className="text-3xl font-bold mt-8 text-[#1C73C9]">404 - Post Not Found</h1>
      </div>
    );
  }

  return (
    <section
      className="relative min-h-screen bg-cover bg-center px-6 py-16"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="absolute inset-0 bg-[#694537]/50"></div>

      <main className="relative z-10 max-w-3xl mx-auto text-white">
        <Link href="/blog" className="text-soft-brown hover:underline">
          ← Back to Blog
        </Link>

        <h1 className="text-4xl font-extrabold mt-6 mb-4">{post.title}</h1>
        <p className="text-gray-300 mb-8">{post.date}</p>

        <article className="prose prose-invert prose-lg">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </main>
    </section>
  );
}
