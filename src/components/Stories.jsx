import { motion } from 'framer-motion'

const stories = [
  {
    title: 'Slamet: Angin Puncak dan Lautan Awan',
    text: 'Malam itu, suara angin di punggungan seperti orkestra. Saat fajar tiba, awan bergerak lambat di bawah kaki—mengingatkan bahwa puncak bukan sekadar tujuan, tapi sudut pandang baru.'
  },
  {
    title: 'Merbabu: Sabana dan Senyap yang Mengajarkan Sabar',
    text: 'Jalur landai mengajak melambat. Sabana luas membuat waktu terasa panjang, dan di setiap langkah, hati belajar menikmati perjalanan.'
  },
  {
    title: 'Prau: Menunggu Matahari dengan Teman-Teman',
    text: 'Tenda menghadap timur, obrolan ringan, dan gelak tawa. Saat matahari muncul, semua terasa sederhana—hangat dan cukup.'
  },
]

export default function Stories() {
  return (
    <section id="stories" className="relative py-20 bg-gradient-to-b from-stone-900 to-stone-950">
      <div className="container mx-auto px-6">
        <motion.h2 layout className="text-3xl md:text-4xl font-bold text-white mb-6">Cerita Perjalanan Mendaki</motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur"
            >
              <motion.h3 layout className="text-white font-semibold text-lg">{s.title}</motion.h3>
              <motion.p layout className="text-emerald-100/80 mt-2 text-sm leading-relaxed">{s.text}</motion.p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
