import Image from "next/image";
import Link from "next/link";
import { arrayPorto } from "./data/portofolio";

export default function Home() {
  const featured = arrayPorto.slice(0, 3);

  return (
    <main className="container mx-auto px-6 py-20">

      <section
  className="relative flex flex-col lg:flex-row items-center justify-between py-20 rounded-2xl overflow-hidden"
  style={{
    backgroundImage: 'url("/images/bg.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay gelap biar teks lebih kebaca */}
  <div className="absolute inset-0 bg-white/50"></div>

  <div className="ml-15 relative max-w-xl z-10 px-6">
    <h1 className="text-4xl font-extrabold text-[#1C73C9]">
      Hi, I'm Fadi Al
    </h1>

    <p className="mt-4 text-[#1C73C9] text-lg">
      Frontend Developer yang fokus membuat UI/UX 
      clean, simple, dan profesional.
    </p>

    <div className="mt-6 flex space-x-4">
      <Link
        href="/portofolio"
        className="px-5 py-2 bg-soft-brown text-[#1C73C9] font-semibold rounded-lg hover:opacity-80"
      >
        View Portfolio
      </Link>
    </div>
  </div>

  {/* FOTO PROFIL DI KANAN */}
  <div className="relative z-10 mt-10 lg:mt-0">
    <Image
      src="/images/pp.png"
      alt="Profile"
      width={250}
      height={250}
      className="mr-24 rounded-full border-4 border-soft-brown shadow-xl object-cover"
    />
  </div>
</section>


      <section className="py-16">
        <h2 className="text-3xl font-bold text-[#1C73C9]  mb-4">About Me</h2>

        <p className=" text-[#1C73C9] leading-relaxed max-w-2xl">
          Saya seorang pelajar RPL yang sangat tertarik dengan dunia website dan aplikasi.
          Fokus saya adalah membangun sesuatu yang bukan hanya bagus dilihat,
          tapi juga cepat, responsive, dan nyaman digunakan oleh pengguna.
        </p>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-[#1C73C9] mb-6 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((porto) => (
            <Link key={porto.id} href={`/portofolio/${porto.id}`}>
              <div className="group bg-[#1C73C9] rounded-xl p-4 border border-soft-brown/40 hover:border-soft-brown transition">
                <Image
                  src={porto.image}
                  alt={porto.name}
                  width={400}
                  height={300}
                  unoptimized
                  className="ml-4 rounded-lg object-cover group-hover:opacity-80"
                />
                <h3 className="mt-6 text-white font-semibold">
                  {porto.name}
                </h3>
                <p className="text-yellow-200/100 text-sm">
                  {porto.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/portofolio"
            className="px-6 py-2 bg-soft-brown  text-[#1C73C9] rounded-lg font-bold hover:opacity-80"
          >
            See More Projects →
          </Link>
        </div>
      </section>
    </main>
  );
}