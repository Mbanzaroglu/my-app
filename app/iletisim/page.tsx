"use client"

import { useState } from "react"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Burada form gönderme işlemini gerçekleştirebilirsiniz
    console.log(formData)
    alert("Mesajınız gönderildi!")
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">İletişim</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">Benimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Mail className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
              <span>ornek@email.com</span>
            </li>
            <li className="flex items-center">
              <Linkedin className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
              <a
                href="https://linkedin.com/in/adinizsoyadiniz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/adinizsoyadiniz
              </a>
            </li>
            <li className="flex items-center">
              <Github className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
              <a
                href="https://github.com/kullaniciadiniz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/kullaniciadiniz
              </a>
            </li>
            <li className="flex items-center">
              <Twitter className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
              <a
                href="https://twitter.com/twitterkullaniciadiniz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @twitterkullaniciadiniz
              </a>
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              İsim
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-900 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              E-posta
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-900 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 text-gray-900 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  )
}

