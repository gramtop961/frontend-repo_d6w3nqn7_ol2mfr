import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import MountainList from './components/MountainList'
import Stories from './components/Stories'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <NavBar />
      <main>
        <Hero />
        <Gallery />
        <MountainList />
        <Stories />
        <Philosophy />
        <Contact />
      </main>
      <footer className="py-8 text-center text-emerald-100/60 bg-stone-950 border-t border-white/5">© {new Date().getFullYear()} Revanja Nusantara Adjie</footer>
    </div>
  )
}

export default App
