import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/main" className="hover:underline">
            Ana Sayfa
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">
            Hakkımda
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:underline">
            Projeler
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            İletişim
          </Link>
        </li>
      </ul>
    </nav>
  );
}
