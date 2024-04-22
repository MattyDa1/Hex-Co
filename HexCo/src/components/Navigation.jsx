import { NavLink } from "react-router-dom";
import Logo from "./pictures/Logo.svg";
import Blade from "./pictures/Blade.svg"
import Hexagon_s from "./pictures/Hexagon_s.svg";
import Hexagong_s from "./pictures/Hexagong_s.svg"; {/*Light mode skift*/}


export default function Navigation() {
    return (
        <section>
            <nav className="nav">
                <aside className="width-80 row">
                    <div className="nav_logo">
                        <NavLink to="/"><img src={Logo} alt="HexCo Logo" className="navlogo"/></NavLink>
                    </div>
                    <div className="nav_links">
                        <NavLink to="services" className="navlink"><p>Services</p></NavLink>
                        <NavLink to="kontaktos" className="navlink"><p>Kontakt os</p></NavLink>
                        <NavLink to="omos" className="navlink"><p>Om os</p></NavLink>
                        <NavLink to="medarbejder"><button className="navbutton">Login</button></NavLink>
                    </div>
                </aside>
            </nav>
            <section className="fixed">
                <NavLink to="error">
                    <div className="hex_fixed1"> {/*lav en onclick på div*/}
                        <img src={Hexagong_s} alt="Hexagon green"/>
                        <p className="daen_text">EN</p>
                    </div>
                </NavLink>
                <NavLink to="error">
                    <div className="hex_fixed2"> {/*lav en onclick på div*/}
                        <img src={Hexagon_s} alt="Hexagon" />
                        <img src={Blade} alt="plante ikon" className="f_blade"/>
                    </div>
                    </NavLink>
            </section>
        </section>        
    )
}