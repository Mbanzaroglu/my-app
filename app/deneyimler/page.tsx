import { Briefcase } from "lucide-react"

export default function Deneyimler() {
  const experiences = [
    {
      title: "Yazılım Geliştirici",
      company: "ABC Teknoloji",
      period: "Ocak 2020 - Günümüz",
      description: "Full-stack web uygulamaları geliştirme, API tasarımı ve uygulama, veritabanı yönetimi.",
    },
    {
      title: "Stajyer Yazılım Mühendisi",
      company: "XYZ Yazılım",
      period: "Haziran 2019 - Ağustos 2019",
      description: "Mobil uygulama geliştirme projelerinde yer aldım, kullanıcı arayüzü tasarımı ve kodlama yaptım.",
    },
    // Diğer deneyimlerinizi buraya ekleyin
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">İş Deneyimlerim</h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-200 transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="text-blue-600 dark:text-blue-400 mr-2" size={24} />
              <h2 className="text-2xl font-semibold">{exp.title}</h2>
            </div>
            <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-2">{exp.company}</h3>
            <p className="text-gray-500 dark:text-gray-500 mb-4">{exp.period}</p>
            <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

