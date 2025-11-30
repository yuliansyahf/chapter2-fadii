import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#1C73C9] text-soft-brown py-4 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold text-white 400 transition">
          Fadii
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-yellow-300 transition text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/portofolio" className="hover:text-yellow-300 transition text-white">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-yellow-300 transition text-white">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
