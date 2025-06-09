import './globals.css'
import Navbar from './components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio | Tu Nombre',
  description: 'Mi portfolio personal con Next.js y Tailwind CSS.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white dark:bg-black text-gray-900 dark:text-white scroll-smooth`}>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
