import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline full background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Nature gradient veil to blend with outdoor palette */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 via-sky-900/40 to-stone-900/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <motion.h1
              layout
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(16,185,129,0.25)]"
              transition={{ duration: 0.8 }}
            >
              Revanja Nusantara Adjie
            </motion.h1>
            <motion.p
              layout
              className="mt-4 text-lg sm:text-xl text-emerald-100/90"
              transition={{ duration: 0.7 }}
            >
              Pendaki dan penjelajah alam yang mencintai ketinggian, fotografi gunung, dan perjalanan outdoor yang penuh eksplorasi dan makna.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="#gallery"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="px-5 py-3 rounded-xl bg-emerald-500 text-white font-medium shadow-lg shadow-emerald-900/30"
              >
                Lihat Galeri Pendakian
              </motion.a>
              <motion.a
                href="#mountains"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="px-5 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-emerald-50 font-medium"
              >
                Daftar Gunung
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative mountain silhouette */}
      <svg className="absolute bottom-0 left-0 right-0 w-full h-24 text-stone-900" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <motion.path
          initial={{ d: 'M0,120 L0,120 L1440,120 L1440,120 Z' }}
          animate={{ d: 'M0,120 L0,80 C240,40 480,40 720,80 C960,120 1200,100 1440,70 L1440,120 Z' }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          fill="currentColor"
        />
      </svg>
    </section>
  )
}
