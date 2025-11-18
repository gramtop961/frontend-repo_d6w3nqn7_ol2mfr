import { motion } from 'framer-motion'
import { Mountain } from 'lucide-react'

const mountains = [
  {
    name: 'Gunung Slamet',
    desc: 'Gunung tertinggi di Jawa Tengah dengan jalur berbatu menantang dan panorama puncak yang luas serta dramatis.'
  },
  {
    name: 'Gunung Sumbing',
    desc: 'Dikenal dengan jalur menanjak sejak awal, padang sabana indah, dan pemandangan tiga gunung sekaligus.'
  },
  {
    name: 'Gunung Sindoro',
    desc: 'Gunung kembar Sumbing dengan jalur bersahabat, kawah aktif, dan pemandangan sunrise yang sangat fotogenik.'
  },
  {
    name: 'Gunung Merbabu',
    desc: 'Penuh padang sabana luas, jalur berbukit landai, dan pemandangan 360° dari puncaknya.'
  },
  {
    name: 'Gunung Bismo',
    desc: 'Gunung Dieng dengan jalur bervariasi—hutan, sabana, dan punggungan tebing—serta lautan awan yang menawan.'
  },
  {
    name: 'Gunung Prau',
    desc: 'Gunung dengan sunrise terbaik di Jawa Tengah dan kontur sabana luas khas Dieng.'
  },
  {
    name: 'Gunung Pakuwaja',
    desc: 'Gunung sunyi di Dieng dengan tanjakan curam dan panorama pegunungan yang megah.'
  },
  {
    name: 'Gunung Telomoyo',
    desc: 'Gunung dengan akses mudah dan panorama luas Merbabu, Merapi, dan Rawa Pening.'
  },
  {
    name: 'Gunung Gajah',
    desc: 'Gunung yang terkenal dengan lembah dan gugusan bukit kecil yang sangat fotogenik.'
  },
  {
    name: 'Bukit Sriharjo',
    desc: 'Bukit dengan panorama lembah hijau dan sunset indah, cocok untuk trekking ringan.'
  },
]

export default function MountainList() {
  return (
    <section id="mountains" className="relative py-20 bg-gradient-to-b from-stone-950 to-stone-900">
      <div className="container mx-auto px-6">
        <motion.h2 layout className="text-3xl md:text-4xl font-bold text-white mb-6">Daftar Gunung & Penjelasan</motion.h2>
        <p className="text-emerald-100/80 mb-8 max-w-3xl">Setiap pendakian meninggalkan jejak cerita—dari jalur yang dipilih, cuaca yang menemani, hingga momen kecil yang membentuk pengalaman besar.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mountains.map((mtn, i) => (
            <motion.div
              key={mtn.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Mountain className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{mtn.name}</h3>
                  <p className="text-emerald-100/80 text-sm mt-1">{mtn.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
