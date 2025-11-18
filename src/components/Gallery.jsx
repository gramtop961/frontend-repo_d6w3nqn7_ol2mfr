import { motion, AnimatePresence } from 'framer-motion'

const images = [
  // Placeholder scenic images from Unsplash (royalty-free). In real use, replace with personal photos.
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 bg-gradient-to-b from-stone-900 to-stone-950">
      <div className="container mx-auto px-6">
        <motion.h2 layout className="text-3xl md:text-4xl font-bold text-white mb-8">Galeri Foto Pendakian</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative overflow-hidden rounded-2xl group"
            >
              <img src={src} alt="Pendakian" className="w-full h-64 object-cover" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent"/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
