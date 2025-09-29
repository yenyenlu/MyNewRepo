<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackgroundAudio from './components/BackgroundAudio'
=======

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
>>>>>>> d377e5a6218764aae94e18afed64d6f1b6e65417
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'
<<<<<<< HEAD

=======
>>>>>>> d377e5a6218764aae94e18afed64d6f1b6e65417
export default function App(){
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
<<<<<<< HEAD
      <BackgroundAudio />
    </div>
  )
}
=======
    </div>
  )
}
>>>>>>> d377e5a6218764aae94e18afed64d6f1b6e65417
