import Image from "next/image";
import Link from "next/link";
import { arrayPorto } from '../data/portofolio';

export default function Portofolio({ searchParams }: { searchParams: { category?: string } }) {

  const category = searchParams.category;

  const filteredPorto = category
    ? arrayPorto.filter(porto => porto.category.toLowerCase() === category.toLowerCase())
    : arrayPorto;

  return (
    <main className="container mx-auto">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-center text-[#1C73C9] mb-6">
          My Portfolio
        </h2>

        {/* Category Filter */}
        <div className="mb-10 flex justify-center space-x-6">
          <Link href="/portofolio" 
            className={`px-4 py-2 rounded-lg transition ${
              !category ? 'bg-[#1C73C9] text-white shadow-md' : 'text-gray-700 hover:text-yellow-300'
            }`}
          >
            All
          </Link>

          <Link href="/portofolio?category=website" 
            className={`px-4 py-2 rounded-lg transition ${
              category === 'website' ? 'bg-[#3b2b23] text-white shadow-md' : 'text-gray-700 hover:text-yellow-300'
            }`}
          >
            Web
          </Link>

          <Link href="/portofolio?category=mobile" 
            className={`px-4 py-2 rounded-lg transition ${
              category === 'mobile' ? 'bg-[#3b2b23] text-white shadow-md' : 'text-gray-700 hover:text-yellow-300'
            }`}
          >
            Mobile
          </Link>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          {filteredPorto.map((porto, index) => (
            <div key={index} className="group relative  bg-[#1C73C9] rounded-xl p-4 shadow-xl border border-[#1C73C9] hover:border-white/20 transition">

              <Link href={`/portofolio/${porto.id}`}>

                {/* Image Card */}
                <div className="overflow-hidden rounded-lg bg-[#1C73C9] group-hover:opacity-90 transition lg:h-56 h-48">

                  <Image
                    alt={porto.name}
                    src={porto.image}
                    width={300}
                    height={200}
                    unoptimized
                    className="h-full w-full object-cover rounded-lg group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Text Content */}
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-white">
                    {porto.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">
                    {porto.description}
                  </p>
                </div>

              </Link>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
