import { GraduationCap } from "lucide-react"

export default function Egitim() {
  const education = [
    {
      degree: "Bilgisayar Mühendisliği Lisans",
      school: "XYZ Üniversitesi",
      period: "2016 - 2020",
      description:
        "Veri yapıları, algoritma analizi, yazılım mühendisliği ve veritabanı sistemleri üzerine yoğunlaştım.",
    },
    {
      degree: "Veri Bilimi Sertifikası",
      school: "ABC Online Akademi",
      period: "2021",
      description:
        "Makine öğrenimi, veri analizi ve büyük veri teknolojileri üzerine 6 aylık yoğun bir program tamamladım.",
    },
    // Diğer eğitim bilgilerinizi buraya ekleyin
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Eğitim Bilgilerim</h1>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-200 transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <GraduationCap className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
              <h2 className="text-2xl font-semibold">{edu.degree}</h2>
            </div>
            <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-2">{edu.school}</h3>
            <p className="text-gray-500 dark:text-gray-500 mb-4">{edu.period}</p>
            <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

