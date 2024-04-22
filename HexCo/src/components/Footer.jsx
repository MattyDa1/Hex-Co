import { NavLink } from 'react-router-dom'
import Facebook from './pictures/Facebook.svg'
import Footer from './pictures/Footer.svg'
import Instagram from './pictures/Instagram.svg'
import Linkedin from './pictures/Linkedin.svg'
import Logo from './pictures/Logo.svg'

export default function Navigation() {
    return ( 
        <footer className='row'>
            <section className='footer1'>
            <img src={Footer} alt="Hexagons" className='footer'/>
            <NavLink to="/" className="f_logo"><img src={Logo} alt="Firma Logo" className='f_logo1'/></NavLink>  
            </section>
            <section className='footer2 column'>
                <p className='f_headline'>Kontakt info</p>
                <a className='f_text' href="https://maps.app.goo.gl/3Y5JEt2sivp8g3XTA">Adresse: Cool Gade 2 8000 Aarhus C</a>
                <a className='f_text' href="tel:+4512345678">Tlf: 12 34 56 78</a>
                <a className='f_text' href="mailto:HexCo@web.com">HexCo@web.com</a>
            </section>
            <section className='footer2 column'>
                <p className='f_headline'>Ydelser</p>
                <NavLink to="services" className='f_text'>Oprettelse</NavLink>
                <NavLink to="services" className='f_text'>Optimering</NavLink>
                <NavLink to="services" className='f_text'>Marketing</NavLink>
            </section>
            <section className='footer2 column'>
                <p className='f_headline'>Info</p>
                <NavLink to="error" className='f_text'>Cookiepolitik</NavLink>
                <NavLink to="error" className='f_text'>Privatlivpolitik</NavLink>
            </section>
            <section className='footer2 column'>
                <p className='f_headline'>Medier</p>
                <div className='medier'>
                    <a className='f_ikon' href="https://www.linkedin.com/"><img src={Linkedin} alt="Linkedin logo" /></a>
                    <a className='f_ikon' href="https://www.facebook.com/"><img src={Facebook} alt="Facebook logo" /></a>
                    <a className='f_ikon' href="https://www.instagram.com/"><img src={Instagram} alt="Instagram logo" /></a>
                </div>
            </section>
        </footer>
    )
}