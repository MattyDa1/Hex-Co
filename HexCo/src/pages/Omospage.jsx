import Hexter_holder1 from "./omospics/Hexter_holder1.svg"
import Hexter_holder2 from "./omospics/Hexter_holder2.svg"
import Omos_top from "./omospics/Omos_top.svg"
import MouseD from "./omospics/MouseD.svg"
import Frederik from "./omospics/Frederik.svg"
import FrederikS from "./omospics/FrederikS.svg"
import Kristian from "./omospics/Kristian.svg"
import KristianS from "./omospics/KristianS.svg"
import Mads from "./omospics/Mads.svg"
import MadsS from "./omospics/MadsS.svg"
import Mathias from "./omospics/Mathias.svg"
import MathiasS from "./omospics/MathiasS.svg"

import React from 'react';
import LazyLoad from 'react-lazyload';

export default function Omospage() {
    return (
        <section className="width-100 column">
            <aside>
                <LazyLoad>
                    <img src={Omos_top} alt="Omos breaker" />
                </LazyLoad>
                <LazyLoad>
                    <img src={MouseD} alt="Mouse" className="s_mouse"/> {/*onclick til scroll ned*/}
                </LazyLoad>
            </aside>
            <div className="column">
                <aside className="top row">
                    <div className="width-60 margin_wide">
                        <h1 className="headline">Bæredygtig Webdesign</h1>
                        <p>
                            Opdag vigtigheden af bæredygtigt webdesign, hvor æstetik og ansvarlighed forenes for at skabe digitale oplevelser med et miljømæssigt fodaftryk i tankerne. Bæredygtigt webdesign handler ikke kun om at skabe smukke og funktionelle hjemmesider, men også om at tage ansvar for vores planet. Uden bæredygtighed risikerer vi at belaste vores jord unødvendigt med tunge dataindlæsninger, komplekse scripts og energikrævende servere. Hvert klik og hver handling på nettet har en indvirkning på miljøet. <br /> <br />

                            Bæredygtigt webdesign handler om at minimere denne indvirkning ved at optimere kode, reducere filstørrelser og vælge hostingløsninger, der bruger vedvarende energikilder. Ved at gøre dette kan vi ikke kun mindske vores CO2-udledning, men også forbedre brugeroplevelsen med hurtigere indlæsningstider og øget tilgængelighed. <br /> <br />

                            Ved at prioritere bæredygtighed i vores webdesign skaber vi en digital verden, der ikke kun er æstetisk tiltalende, men også beskytter vores planet for fremtidige generationer. Sammen kan vi gøre en forskel ved at vælge bæredygtige løsninger og tage en aktiv del i bevarelsen af vores miljø. <br /> <br />
                        </p>
                    </div>
                    <div className="width-40">
                        <LazyLoad>
                            <img src={Hexter_holder1} alt="Hextor holder 1" className="margin_top" />                    
                        </LazyLoad>
                    </div>
                </aside>
                <aside className="top row">
                    <div className="width-40">
                        <LazyLoad>
                            <img src={Hexter_holder2} alt="Hextor holder 2" className="margin_top" />
                        </LazyLoad>
                    </div>
                    <div className="width-60 margin_wide">
                        <h1 className="headline">Mission, Vision, Værdier og Formål</h1>
                        <p>
                            Mission: <br />
                            Vores mission er at revolutionere den digitale verden ved at tilbyde mere bæredygtige webdesign løsninger, der ikke kun imponerer, men også respekterer vores planet. Vi stræber efter at skabe smukke og funktionelle hjemmesider, der ikke kun afspejler vores kunders unikke visioner, men også bidrager positivt til miljøet. <br /> <br />


                            Vision: <br />
                            Vores vision er at være førende inden for og skabe mere bæredygtige webdesigns og inspirere andre til at følge vores eksempel. Vi ser en fremtid, hvor hver hjemmeside er designet med omhu for miljøet og hvor digitale oplevelser og ansvarlighed går hånd i hånd. <br /> <br />


                            Værdier: <br />
                            Vores værdier er forankret i vores engagement i bæredygtighed, kreativitet og kundeservice. Vi tror på at tage ansvar for vores handlinger og stræber altid efter at levere løsninger af højeste kvalitet til vores kunder. <br /> <br />


                            Formål: <br />
                            Vores formål er at levere ikke blot hjemmesider, men mere bæredygtige digitale løsninger, der gør en positiv forskel. Vi ønsker at skabe et digitalt landskab, der er skånsomt for miljøet og samtidig inspirerende og engagerende for vores kunder og deres brugere. <br /> <br />

                        </p>
                    </div>
                </aside>
                <aside className="top">
                    <div className="o_titel">
                        <h1 className="headline">Mød teamet</h1>
                    </div>
                    <div className="row o_flip">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={Frederik} alt="Frederik" className="m_imgs"/>
                                </div>
                                <div class="flip-card-back">
                                    <img src={FrederikS} alt="Frederik sjov" className="m_imgs" />
                                </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={Mads} alt="Mads" className="m_imgs"/>
                                </div>
                                <div class="flip-card-back">
                                    <img src={MadsS} alt="Mads sjov" className="m_imgs" />
                                </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={Kristian} alt="Kristian" className="m_imgs"/>
                                </div>
                                <div class="flip-card-back">
                                    <img src={KristianS} alt="Kristian sjov" className="m_imgs" />
                                </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={Mathias} alt="Mathias" className="m_imgs"/>
                                </div>
                                <div class="flip-card-back">
                                    <img src={MathiasS} alt="Mathias sjov" className="m_imgs" />
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    )
}