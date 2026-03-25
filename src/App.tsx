import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/hizmetler" element={<Services />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/yorumlar" element={<Testimonials />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
