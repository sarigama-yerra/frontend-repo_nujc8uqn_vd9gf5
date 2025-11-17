import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import Products from './components/Products'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Products />
        <Pricing />
        <Contact />
      </main>
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">P</div>
            <span>© {new Date().getFullYear()} PrintifyPro</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-gray-900">Leistungen</a>
            <a href="#products" className="hover:text-gray-900">Produkte</a>
            <a href="#pricing" className="hover:text-gray-900">Preise</a>
            <a href="#contact" className="hover:text-gray-900">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
