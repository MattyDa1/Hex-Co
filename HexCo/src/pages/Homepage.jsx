import { NavLink } from "react-router-dom";
import Bæredygtig_ikon from "./homepics/Bæredygtig_ikon.svg";
import Bæredygtig_ikoner from "./homepics/Bæredygtig_ikoner.svg";
import F_baggrund from "./homepics/F_baggrund.svg";
import F_breaker1 from "./homepics/F_breaker1.svg";
import F_breaker2 from "./homepics/F_breaker2.svg";
import Hexagon from "./homepics/Hexagon.svg";
import Hexagong from "./homepics/Hexagong.svg"; {/*Light mode skift*/}
import Hextor_sidder from "./homepics/Hextor_sidder.svg";
import Hextor_skubber from "./homepics/Hextor_skubber.svg";
import Kalender_ikon from "./homepics/Kalender_ikon.svg";
import Logo from "./homepics/Logo.svg";
import Marketing_ikon from "./homepics/Marketing_ikon.svg";
import Marketing_ikonw from "./homepics/Marketing_ikonw.svg";
import MouseD from "./homepics/MouseD.svg";
import MouseL from "./homepics/MouseL.svg"; {/*Light mode skift*/}
import Mød_teamet_ikon from "./homepics/Mød_teamet_ikon.svg";
import Oprettelse_ikon from "./homepics/Oprettelse_ikon.svg"
import Oprettelse_ikonw from "./homepics/Oprettelse_ikonw.svg"
import Optimerings_ikon from "./homepics/Optimerings_ikon.svg";
import Optimerings_ikonw from "./homepics/Optimerings_ikonw.svg";

import Hextor_skubber1 from './JSON/Hextor_skubber.json'
import Lottie from 'lottie-react'

import React from 'react';
import LazyLoad from 'react-lazyload';

export default function Homepage() {
    return (
        <section>
            <aside className="width">
                <img src={F_breaker1} alt="Vores team" className="f_breaker1"/>
                <div className="f_breaker1text">
                    <h1 className="headline billedetext">
                        Gør en forskel <br /> med HexCo
                    </h1>
                    <NavLink to="kontaktos"><button className="cta_btn"><span>Book møde</span></button></NavLink>
                </div>
                <div className="hextor_s">
                    <LazyLoad>
                        <img src={Hextor_sidder} alt="Vores team" className="hextor_sidder"/> {/*lav en onclick*/}
                    </LazyLoad>
                </div>
                <div className="none">
                    <LazyLoad>
                        <img src={MouseD} alt="Mouse" className="f_mouse"/> {/*onclick til scroll ned*/}
                    </LazyLoad>
                </div>
            </aside>
            <aside className="f_textlogo row">
                <div className="f_textlogodiv">
                    Effektivitet
                </div>
                <div className="f_textlogologo">
                    <LazyLoad>
                        <img src={Logo} alt="HexCo Logo" className="textlogologo"/>
                    </LazyLoad>
                </div>
                <div className="f_textlogodiv">
                    Energibesparende
                </div>
            </aside>
            <aside className="row top">
                <div className="width-60">
                    <h1 className="headline f_bæredygtig">
                        Bæredygtigt webdesign
                    </h1>
                    <p className="f_bæredygtig">
                        Opdag vigtigheden af bæredygtigt webdesign, hvor æstetik og ansvarlighed forenes for at skabe digitale oplevelser med et miljømæssigt fodaftryk i tankerne. Uden bæredygtighed risikerer vi at belaste planeten unødvendigt med tunge dataindlæsninger, komplekse scripts og energikrævende servere. Dette kan føre til øget CO2-udledning og forringelse af vores klima. <br /><br />
                        Ved at prioritere bæredygtighed i webdesign skaber vi en digital verden, der beskytter vores planet for fremtidige generationer.
                    </p>
                    <div className="f_bæredygtig">
                    <NavLink to="omos"><button className="cta_btn "><span>Læs mere</span></button></NavLink>
                    </div>
                </div>
                <div>
                    <LazyLoad>
                        <img src={Bæredygtig_ikoner} alt="Bæredygtige ikoner"  className="bæredygtig_ikoner"/>
                    </LazyLoad>
                    <div className="column">
                        <div className="skubber"></div>
                        <Lottie animationData={Hextor_skubber1} />
                    </div>
                </div>
            </aside>
            <aside className="top">
                <LazyLoad>
                    <img src={F_breaker2} alt="Team konsulering" />
                </LazyLoad>
            </aside>
            <aside className="top1 oom row">
                <div>
                    <div className="f_baggrund">
                        <LazyLoad>
                            <img src={F_baggrund} alt="Hexter malermester" />
                        </LazyLoad>
                    </div>
                </div>
                <div className="f_oprettelse">
                    <h1 className="headline">
                        Oprettelse
                    </h1>
                    <p>
                        Mangler du en helt NY hjemmeside og nogen til, at lave dine tanker til virkelighed? <br /><br />

                        Lad os hjælpe dig med og skabe et tidløst og brugervenligt design som afspejler din virksomheds vision og mission.
                    </p> <br />
                    <LazyLoad>
                        <img src={Oprettelse_ikonw} alt="Oprettelses ikon" className="oom_ikon1"/> <br />
                    </LazyLoad>
                    <NavLink to="services"><button className="cta_btn"><span>Læs mere</span></button></NavLink>
                </div>
                <div className="column f_right">
                    <div className="f_optimering">
                        <h1 className="headline">
                            Optimering
                        </h1>
                        <div className="row">
                            <p>
                                Skal du have en af internettets bedste makeovers? <br /> <br />

                                Lad os derfor hjælpe dig med at få optimeret din hjemmeside og give den en makeover.
                            </p>
                            <LazyLoad>
                                <img src={Optimerings_ikonw} alt="Optimerings ikon" className="oom_ikon"/>     
                            </LazyLoad>
                        </div> <br /> <br />
                        <NavLink to="services"><button className="cta_btn cta_margin"><span>Læs mere</span></button></NavLink>
                    </div>
                    <div className="f_marketing">
                        <h1 className="headline">
                            Marketing
                        </h1>
                        <div className="row">
                            <p>
                                Er trafikken på din hjemmeside nedadgående eller helt stoppet?<br /> <br />

                                Lad os derfor være dine partnere og lad os få din hjemmeside ud på søgemaskinerne igen.
                            </p>
                            <LazyLoad>
                                <img src={Marketing_ikonw} alt="marketings ikon" className="oom_ikon"/>
                            </LazyLoad>
                        </div> <br /> <br />
                        <NavLink to="services"><button className="cta_btn cta_margin"><span>Læs mere</span></button></NavLink>
                    </div>
                </div>
            </aside>
        </section>
    )
}