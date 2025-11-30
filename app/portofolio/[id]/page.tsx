import Link from 'next/link';
import Image from 'next/image';
import { arrayPorto } from '../../data/portofolio';

type Params = {
  id: string;
};

export default function ProjectDetail({ params }: { params: Params }) {
  const { id } = params;
  const porto = arrayPorto.find((p) => p.id === parseInt(id));

  if (!porto)
    return <div className="text-center py-20 text-red-400">Project not found</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">

        {/* Back Button */}
        <Link
          href="/portofolio"
          className="inline-block mb-6 text-soft-brown hover:text-yellow-300 transition font-medium"
        >
          ← Back to Portfolio
        </Link>

        {/* Category */}
        <p className="font-semibold text-sm text-soft-brown tracking-wide uppercase mb-2">
          {porto.category}
        </p>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-4">
          {porto.name}
        </h1>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6">
          {porto.description}
        </p>

        {/* Image (lebih kecil & proporsional) */}
        <div className="overflow-hidden rounded-xl shadow-lg shadow-black/30 border border-[#1C73C9] max-w-md mx-auto">
          <Image
            alt={porto.name}
            src={porto.image}
            width={600}
            height={350}
            className="object-cover "
            unoptimized
          />
        </div>

      </div>
    </div>
  );
}
