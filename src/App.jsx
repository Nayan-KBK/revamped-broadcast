import { Route, Routes } from 'react-router-dom'
import './App.css'
import './components/Global/Global.css'
import Home from './components/Home/Home'
import Navbar from './components/Home/Navbar'
import Footer from './components/Global/Footer'
import Career from './components/Career/Career'
import Service from './components/Service/Service'
import About from './components/About/About'
import JobApplication from './components/Career/JobApplication'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/apply/:id" element={<JobApplication/>} />
        <Route path="/contact-us" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
