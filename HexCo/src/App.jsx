import {Navigate, Route, Routes} from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation';
import Footer from './components/Footer'
import Homepage from './pages/Homepage';
import Kontaktospage from './pages/Kontaktospage';
import Medarbejderpage from './pages/Medarbejderpage';
import Omospage from './pages/Omospage';
import Servicespage from './pages/Servicespage';
import Errorpage from './pages/Errorpage';

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/kontaktos" element={<Kontaktospage />} />
        <Route path="/omos" element={<Omospage />} />
        <Route path="/error" element={<Errorpage />} />
        <Route path="*" element={<Navigate to="error" />} />
        <Route path="/medarbejder" element={<Medarbejderpage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
