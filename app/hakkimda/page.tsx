import Image from "next/image"

export default function Hakkimda() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Hakkımda</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-full md:w-1/3">
          <div className="relative w-full pt-[100%] rounded-lg overflow-hidden shadow-lg">
            <Image src="/placeholder.svg?height=400&width=400" alt="Profil Resmi" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <p className="mb-4 text-lg">
            Merhaba, ben [Adınız Soyadınız]. [Yaşınız] yaşındayım ve [mesleğiniz/uzmanlık alanınız] olarak çalışıyorum.
          </p>
          <p className="mb-4 text-lg">[Kısa bir özgeçmiş ve kariyer hedeflerinizden bahsedin.]</p>
          <p className="text-lg">[Kişisel ilgi alanlarınız ve motivasyonlarınız hakkında birkaç cümle ekleyin.]</p>
        </div>
      </div>
    </div>
  )
}

