import { motion } from 'framer-motion'

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-20 bg-gradient-to-b from-stone-950 to-stone-900">
      <div className="container mx-auto px-6">
        <motion.h2 layout className="text-3xl md:text-4xl font-bold text-white mb-4">Filosofi & Motivasi Mendaki</motion.h2>
        <motion.p layout className="text-emerald-100/85 max-w-3xl leading-relaxed">
          Mendaki adalah cara untuk berdialog dengan diri sendiri. Setiap langkah adalah percakapan, setiap nafas adalah pengingat untuk hadir sepenuhnya. Puncak adalah bonus; perjalanan adalah guru. Di antara hutan, sabana, dan langit yang luas, aku menemukan ritme hidup yang sederhana namun bermakna.
        </motion.p>
      </div>
    </section>
  )
}
