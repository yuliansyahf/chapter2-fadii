import Link from 'next/link';
import { blogPosts } from "../data/root/blog";



export default function BlogPage() {
  return (
    <main className="container mx-auto">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        
        <h1 className="text-4xl font-bold mb-12 text-black">
          Blog Posts
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-[#1C73C9] border border-[#1C73C9]  p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold mb-3 text-yellow-200 hover:text-yellow-300 transition">
                  {post.title}
                </h2>
              </Link>

              <p className="text-gray-300 text-sm mb-3">
                {post.date}
              </p>

              <p className="text-gray-200 leading-relaxed">
                {post.content}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
