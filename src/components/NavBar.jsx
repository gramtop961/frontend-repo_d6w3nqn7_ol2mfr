import { motion } from 'framer-motion'
import { Mountain, Image as ImageIcon, BookOpen, Quote, Mail } from 'lucide-react'

export default function NavBar() {
  const items = [
    { href: '#home', label: 'Beranda', icon: Mountain },
    { href: '#gallery', label: 'Galeri', icon: ImageIcon },
    { href: '#mountains', label: 'Gunung', icon: BookOpen },
    { href: '#stories', label: 'Cerita', icon: Quote },
    { href: '#contact', label: 'Kontak', icon: Mail },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="backdrop-blur bg-stone-900/50 border border-white/10 rounded-2xl shadow-lg">
          <nav className="flex items-center justify-between px-4 py-3">
            <motion.a href="#home" className="flex items-center gap-3" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
              <Mountain className="w-6 h-6 text-emerald-400" />
              <span className="text-white font-semibold tracking-wide">Revanja • Mountain Explorer</span>
            </motion.a>
            <ul className="hidden md:flex items-center gap-2">
              {items.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <motion.a
                    href={href}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-emerald-50 hover:bg-white/5"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{label}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
