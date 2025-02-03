import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="relative w-48 h-48 mb-8 overflow-hidden rounded-full ring-4 ring-blue-600 dark:ring-blue-400">
        <Image src="/me.JPG" alt="Profil Resmi" layout="fill" objectFit="cover" />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-center">Hoş Geldiniz!</h1>
      <p className="text-xl mb-8 text-center max-w-2xl text-gray-700 dark:text-gray-300">
        Merhaba, ben Muhammet Banzaroğlu. Bu web sitesinde kendimden ve tecrübelerimden bahsediyor olacağım..
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { href: "/hakkimda", label: "Hakkımda", color: "bg-blue-600 hover:bg-blue-700" },
          { href: "/deneyimler", label: "Deneyimlerim", color: "bg-green-600 hover:bg-green-700" },
          { href: "/egitim", label: "Eğitimim", color: "bg-yellow-600 hover:bg-yellow-700" },
          { href: "/hobiler", label: "Hobilerim", color: "bg-purple-600 hover:bg-purple-700" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${item.color} text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 transform hover:scale-105 flex items-center justify-between`}
          >
            {item.label}
            <ArrowRight size={20} />
          </Link>
        ))}
      </div>
    </div>
  )
}

