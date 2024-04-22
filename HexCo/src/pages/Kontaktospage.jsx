import Hextor_bookmøde from "./kontaktospics/Hextor_bookmøde.svg"
import Kalender_ikon from "./kontaktospics/Kalender_ikon.svg"
import Lokation from "./kontaktospics/Lokation.svg"
import s4_uger from "./kontaktospics/s4_uger.svg"
import s1_10 from "./kontaktospics/s1_10.svg"
import Ja from "./kontaktospics/Ja.svg"
import Nej from "./kontaktospics/Nej.svg"
import s2_4_uger from "./kontaktospics/s2_4_uger.svg"
import s11_20 from "./kontaktospics/s11_20.svg"
import s20 from "./kontaktospics/s20.svg"
import Hurtigst_muligt from "./kontaktospics/Hurtigst_muligt.svg"

import React from 'react';
import LazyLoad from 'react-lazyload';

export default function Kontaktospage() {
    return (
        <section className="kontaktos row width-100">
            <aside className="width-30 top hextor_møde">
                <LazyLoad>
                    <img src={Hextor_bookmøde} alt="Hextor Book møde" />
                </LazyLoad>
            </aside>
            <aside className="width-40 top center column">
                <div className="row k_headtxt width-100">
                    <p className="andettxt">Book nyt møde</p>
                    <LazyLoad>
                        <img src={Kalender_ikon} alt="Kalender ikon" className="k_padding" />
                    </LazyLoad>
                </div>
                <div className="column k_form">
                    <div className="row k_topform">
                        <button className="k_topbtn">Services</button> {/*Lav en onclick så den skifter med Display none*/}
                        <button className="k_topbtn">Rådgivning</button> {/*Lav en onclick så den skifter med Display none*/}
                    </div>
                    <div>
                        <form className="column">
                            <label for="fnavn"><p className="kontakt_form">Navn</p></label>
                            <input type="text" id="fnavn" name="firstname" placeholder="Dit fulde navn her.." required />
                            
                            <label for="fmail"><p className="kontakt_form">E-mail</p></label>
                            <input type="text" id="fmail" name="lastname" placeholder="Din mail her.." required />

                            <hr className="k_margin"/>

                            <label for="country"><p className="kontakt_form">Kontakt person</p></label>
                            <select id="country" name="medarbejder">
                                <option value="none"></option>
                                <option value="Frederik">Frederik - Optimering's specialist</option>
                                <option value="Kristian">Kristian - Marketing's specialist</option>
                                <option value="Mads">Mads - Oprettelse's specialist</option>
                                <option value="Mathias">Mathias - Marketing's specialist</option>
                            </select>
                                                    
                            <label for="subject"><p className="kontakt_form">Kommentar</p></label>
                            <textarea id="subject" name="subject" placeholder="Skriv her.."></textarea>

                            <hr className="k_margin"/>
                            
                            <input type="submit" value="Book møde" /> {/*lav en  pop up effekt*/}
                        </form>
                        <form className="column">
                            <label for="fnavn"><p className="kontakt_form">Navn</p></label>
                            <input type="text" id="fnavn" name="firstname" placeholder="Dit fulde navn her.." required />
                            
                            <label for="fmail"><p className="kontakt_form">E-mail</p></label>
                            <input type="text" id="fmail" name="lastname" placeholder="Din mail her.." required />

                            <label for="country"><p className="kontakt_form">Service & person</p></label>
                            <select id="country" name="medarbejder">
                                <option value="none"></option>
                                <option value="Frederik">Frederik - Optimering's specialist</option>
                                <option value="Kristian">Kristian - Marketing's specialist</option>
                                <option value="Mads">Mads - Oprettelse's specialist</option>
                                <option value="Mathias">Mathias - Marketing's specialist</option>
                            </select>

                            <hr className="k_margin"/>

                            <label for="asider"><p className="kontakt_form">Antal sider</p></label>
                            <div className="row">
                                <label class="container" className="nocheck">
                                    <input type="radio" checked="checked" name="radio" />
                                    <div className="k_checkedimg">
                                        <img src={s1_10} alt="1-10" />
                                    </div>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container" className="nocheck">
                                    <input type="radio" name="radio" />
                                    <div className="k_checkedimg ">
                                        <img src={s11_20} alt="11-20" />
                                    </div>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container" className="nocheck">
                                    <input type="radio" name="radio" />
                                    <div className="k_checkedimg">
                                        <img src={s20} alt="20+" />
                                    </div>
                                    <span class="checkmark"></span>
                                </label>
                            </div>

                            <label for="sfunk" required><p className="kontakt_form">Specielle Funktioner</p></label>
                            <div className="row">
                                <label class="container" className="nocheck">
                                    <input type="radio" checked="checked" name="radio" />
                                    <div className="k_checkedimg">
                                        <img src={Ja} alt="Ja" />
                                    </div>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container" className="nocheck">
                                    <input type="radio" name="radio" />
                                    <div className="k_checkedimg">
                                        <img src={Nej} alt="Nej" />
                                    </div>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            
                            <label for="ldesign" required><p className="kontakt_form">Logo design</p></label>
                            <div className="row">
                                <label class="container" className="nocheck">
                                    <input type="radio" checked="checked" name="radio" />
                                    <div className="k_checkedimg">
                                        <img src={Ja} alt="Ja" />
                                    </div>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container" className="nocheck">
                                    <input type="radio" name="radio" />
                                    <div className="k_checkedimg">
                                        <img src={Nej} alt="Nej" />
                                    </div>
                                    <span class="checkmark"></span>
                                </label>
                            </div>

                            <label for="dline" required><p className="kontakt_form">Deadline</p></label>
                            <div className="row">
                                <label class="container" className="nocheck">
                                    <input type="radio" checked="checked" name="radio" />
                                    <div className="k_checkedimg">
                                        <img src={Hurtigst_muligt} alt="Hurtigst muligt" />
                                    </div>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container" className="nocheck">
                                    <input type="radio" name="radio" />
                                    <div className="k_checkedimg">
                                        <img src={s2_4_uger} alt="2-4 uger" />
                                    </div>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container" className="nocheck">
                                    <input type="radio" name="radio" />
                                    <div className="k_checkedimg">
                                        <img src={s4_uger} alt="4 uger" />
                                    </div>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            
                            <hr className="k_margin"/>
                            
                            <input type="submit" value="Book møde" /> {/*lav en hover effekt og pop up effekt*/}
                        </form>
                    </div>
                </div>
            </aside>
            <aside className="width-30 top">
                <div className="column">
                    <p className="k_margin_top andettxt">Vores Kontakt Oplysninger:</p>
                    <p className="k_text">E-mail:</p>
                    <a className="k_brødtext" href="mailto:HexCo@web.com">HexCo@web.com</a>
                    <p className="k_text">Telefon nummer</p>
                    <a className="k_brødtext" href="tel:+4512345678">+45 12 34 56 78</a>
                    <p className="k_text">Åbningstider:</p>
                    <p className="k_brødtext">Hverdage: 9:00 - 16:00</p>
                    <p className="k_text">Adresse:</p>
                    <a className="k_brødtext" href="https://maps.app.goo.gl/3Y5JEt2sivp8g3XTA">Cool Gade 2 <br /> 8000 Aarhus</a>
                    <p className="k_text">Lokation:</p>
                    <a href="https://maps.app.goo.gl/3Y5JEt2sivp8g3XTA" className="k_start">
                    <LazyLoad>
                       <img src={Lokation} alt="Google maps lokation" />                    
                    </LazyLoad>
                    </a>
                </div>
            </aside>
        </section>
    )
}