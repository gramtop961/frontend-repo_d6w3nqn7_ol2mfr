import { motion } from 'framer-motion'
import { Phone, Instagram, Mail } from 'lucide-react'

export default function Contact() {
  const contacts = [
    { icon: Phone, label: 'Nomor HP', value: '082220872671', href: 'tel:082220872671' },
    { icon: Instagram, label: 'Instagram', value: '@r.nusantara.a', href: 'https://instagram.com/r.nusantara.a' },
    { icon: Mail, label: 'Email', value: 'ussm723@gmail.com', href: 'mailto:ussm723@gmail.com' },
  ]

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-stone-900 to-stone-950">
      <div className="container mx-auto px-6">
        <motion.h2 layout className="text-3xl md:text-4xl font-bold text-white mb-8">Kontak & Media Sosial</motion.h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {contacts.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col items-start gap-2 hover:bg-white/10"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-emerald-100/70 text-sm">{label}</span>
              <span className="text-white font-medium">{value}</span>
            </motion.a>
          ))}
        </div>

        <p className="text-emerald-100/70 text-sm mt-10">Terima kasih sudah berkunjung. Sampai bertemu di puncak berikutnya.</p>
      </div>
    </section>
  )
}
