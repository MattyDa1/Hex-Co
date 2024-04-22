import Hexter_vinker from "./servicepics/Hexter_vinker.svg"
import Marketing from "./servicepics/Marketing.svg"
import Oprettelse from "./servicepics/Oprettelse.svg"
import Optimering from "./servicepics/Optimering.svg"
import S_breaker from "./servicepics/S_breaker.svg"
import MouseD from "./servicepics/MouseD.svg"
import { NavLink } from "react-router-dom"

import React from 'react';
import LazyLoad from 'react-lazyload';

export default function Servicespage() {
    return (
        <section className="services">
            <aside className="s_billede">
                <LazyLoad>
                    <img src={S_breaker} alt="Breaker billede" />
                </LazyLoad>
                <div className="none">
                    <LazyLoad>
                        <img src={Hexter_vinker} alt="Hextor vinker" className="hextor_v" />
                    </LazyLoad>    
                </div>
                    <LazyLoad>
                        <img src={MouseD} alt="mus" className="s_mouse"/> {/*onclick til scroll ned*/}
                    </LazyLoad>    
            </aside>
            <aside className="s_section row">
                <div className="s_text">
                    <h1 className="headline s_textspace">Oprettelse</h1>
                    <p>
                        Mangler du en helt NY hjemmeside, hvor vi skaber en hjemmeside fra bunden som er specifik til jer ud fra jeres behov og værdier. <br />
                        Vi vil fokusere på at skabe et smukt og brugervenligt website med fokus på et (mere) bæredygtigt webdesign. <br /> <br />

                        Så hvis du står og skal bruge en helt ny hjemmeside så lad os hjælpe dig med og skabe et tidløst og brugervenligt design som afspejler din virksomheds vision og mission.
                    </p>
                    <NavLink to="kontaktos"><button className="cta_btn s_textspace"><span>Book møde</span></button></NavLink>
                </div>
                <div>
                    <LazyLoad>
                        <img src={Oprettelse} alt="oprettelses team" />                    
                    </LazyLoad>
                </div>
            </aside>
            <aside className="s_section row">
                <div>
                    <LazyLoad>
                        <img src={Optimering} alt="Optimerings team" />                    
                    </LazyLoad>
                </div>
                <div className="s_text">
                    <h1 className="headline s_textspace">Optimering</h1>
                    <p>
                        Skal du have en af internettets bedste makeovers? <br /> <br />

                        Så er vores optimerings service lige noget for din virksomhed. Vi er klar til at skabe et helt nyt design for jer eller bare optimere hjemmesiden så vi reducerer det miljømæssige aftryk. Derudover lægger vi meget fokus på og gøre din side brugervenlig og tidløst i dets design.  <br /> <br />

                        Lad os derfor hjælpe dig med at få optimeret din hjemmeside og give den en makeover.
                    </p>
                    <NavLink to="kontaktos"><button className="cta_btn s_textspace"><span>Book møde</span></button></NavLink>
                </div>                
            </aside>
            <aside className="s_section row bottom">
                <div className="s_text">
                    <h1 className="headline s_textspace">Marketing</h1>
                    <p>
                        Er trafikken på din hjemmeside nedadgående eller helt stoppet? <br /> <br />

                        Så lad os sørge for, at du kan blive opdaget igen på det store internet. Vores specialister inden for marketing er eksperter indenfor og øge synligheden af din hjemmesiden og SEO optimere den. Vi er meget målrettet på, at sørge for din hjemmeside når ud til din målgruppe og bliver fundet i diverse søgemaskiner.  <br /> <br />

                        Lad os derfor være dine partnere og lad os få din hjemmeside ud på søgemaskinerne igen. 
                    </p>
                    <NavLink to="kontaktos"><button className="cta_btn s_textspace"><span>Book møde</span></button></NavLink>
                </div>
                <div className="width-50">
                    <LazyLoad>
                        <img src={Marketing} alt="Marketings team" />                    
                    </LazyLoad>
                </div>
            </aside>
        </section>
    )
}