import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import AdminLogin from './pages/admin/Login'
import AdminDashboard from './pages/admin/Dashboard'
import AdminMessages from './pages/admin/Messages'
import AdminAppointments from './pages/admin/Appointments'
import { isLoggedIn } from './lib/auth'
import './App.css'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  if (!isLoggedIn()) return <Navigate to="/admin/login" replace />
  return <>{children}</>
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes — no navbar/footer */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/messages" element={<ProtectedRoute><AdminMessages /></ProtectedRoute>} />
        <Route path="/admin/appointments" element={<ProtectedRoute><AdminAppointments /></ProtectedRoute>} />

        {/* Public routes */}
        <Route path="/*" element={
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
        } />
      </Routes>
    </Router>
  )
}

export default App
