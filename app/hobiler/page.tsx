import { Camera, FishIcon as Swim, Book } from "lucide-react"

export default function Hobiler() {
  const hobbies = [
    {
      name: "Fotoğrafçılık",
      description:
        "Doğa ve sokak fotoğrafçılığı ile ilgileniyorum. Hafta sonları genellikle fotoğraf çekmek için şehir dışına çıkıyorum.",
      icon: Camera,
    },
    {
      name: "Yüzme",
      description:
        "Haftada en az 3 gün yüzmeye gidiyorum. Su sporları benim için hem bir egzersiz hem de rahatlama yöntemi.",
      icon: Swim,
    },
    {
      name: "Kitap Okuma",
      description: "Bilim kurgu ve tarih kitapları okumayı seviyorum. Ayda ortalama 2-3 kitap bitirmeye çalışıyorum.",
      icon: Book,
    },
    // Diğer hobilerinizi buraya ekleyin
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Hobilerim</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-200 transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              {<hobby.icon className="text-blue-600 dark:text-blue-400 mr-2" size={24} />}
              <h2 className="text-2xl font-semibold">{hobby.name}</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

