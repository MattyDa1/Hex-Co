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

import LazyLoad from 'react-lazyload';

import React, { useRef, useState } from 'react';
import {firestore} from "../firebase"
import { addDoc,collection } from "firebase/firestore"

export default function Kontaktospage() {
    const [block1Visible, setBlock1Visible] = useState(true);
    const [block2Visible, setBlock2Visible] = useState(false);

    const toggleBlocks = () => {
        setBlock1Visible(!block1Visible);
        setBlock2Visible(!block2Visible);
    };

    const messageRef1 = useRef ();
    const messageRef2 = useRef ();
    const messageRef3 = useRef ();
    const messageRef4 = useRef ();
    const ref = collection(firestore,"messages");

    const handleSave = async (e) => {
        e.preventDefault();
        console.log(messageRef1.current.value);

        let data = {
            Navn: messageRef1.current.value,
            Mail: messageRef2.current.value,
            Medarbejder: messageRef3.current.value,
            Kommentar: messageRef4.current.value,
        };

        try {
            addDoc(ref, data);
        } catch (e) {
            console.log(e);
        }
    };

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
                        <button className="k_topbtn" onClick={toggleBlocks}>Services</button> {/*Lav en onclick så den skifter med Display none*/}
                        <button className="k_topbtn" onClick={toggleBlocks}>Rådgivning</button> {/*Lav en onclick så den skifter med Display none*/}
                    </div>
                    <div style={{ display: block1Visible ? 'block' : 'none' }}>
                        <form  onSubmit={handleSave} className="column" id="k_service">
                            <label htmlFor="fnavn"><p className="kontakt_form">Navn</p></label>
                            <input type="text" id="Navn" name="Navn" placeholder="Dit fulde navn her.." required  ref={messageRef1}/>

                            <label htmlFor="fmail"><p className="kontakt_form">E-mail</p></label>
                            <input type="text" id="Mail" name="Mail" placeholder="Din mail her.." required  ref={messageRef2}/>

                            <hr className="k_margin"/>

                            <label htmlFor="fmedarbejder"><p className="kontakt_form">Kontakt person</p></label>
                            <select id="Medarbejder" name="Medarbejder" ref={messageRef3}>
                                <option value="none"></option>
                                <option value="Frederik">Frederik - Optimering's specialist</option>
                                <option value="Kristian">Kristian - Marketing's specialist</option>
                                <option value="Mads">Mads - Oprettelse's specialist</option>
                                <option value="Mathias">Mathias - Marketing's specialist</option>
                            </select>
                                                    
                            <label htmlFor="kommentar"><p className="kontakt_form">Kommentar</p></label>
                            <textarea id="Kommentar" name="Kommentar" placeholder="Skriv her.." ref={messageRef4}></textarea>

                            <hr className="k_margin"/>
                            
                            <input type="submit" id="bookknap" value="bookmøde" /> {/*lav en  pop up effekt*/}
                        </form>
                    </div>
                    <div style={{ display: block2Visible ? 'block' : 'none' }}>
                        <form className="column" id="k_rådgivning">
                            <label htmlFor="fnavn"><p className="kontakt_form">Navn</p></label>
                            <input type="text" id="fnavn" name="Navn" placeholder="Dit fulde navn her.." required />
                            
                            <label htmlFor="fmail"><p className="kontakt_form">E-mail</p></label>
                            <input type="text" id="fmail" name="Mail" placeholder="Din mail her.." required />

                            <label htmlFor="fmedarbejder"><p className="kontakt_form">Service & person</p></label>
                            <select id="country" name="Medarbejder">
                                <option value="none"></option>
                                <option value="Frederik">Frederik - Optimering's specialist</option>
                                <option value="Kristian">Kristian - Marketing's specialist</option>
                                <option value="Mads">Mads - Oprettelse's specialist</option>
                                <option value="Mathias">Mathias - Marketing's specialist</option>
                            </select>

                            <hr className="k_margin"/>

                            <label htmlFor="asider"><p className="kontakt_form">Antal sider</p></label>
                            <div className="row">
                                <label className="nocheck">
                                    <input type="radio" checked="Checked" name="1-10 sider" />
                                    <div className="k_checkedimg">
                                        <img src={s1_10} alt="1-10" />
                                    </div>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="nocheck">
                                    <input type="radio" name="11-20 sider" />
                                    <div className="k_checkedimg ">
                                        <img src={s11_20} alt="11-20" />
                                    </div>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="nocheck">
                                    <input type="radio" name="20+ sider" />
                                    <div className="k_checkedimg">
                                        <img src={s20} alt="20+" />
                                    </div>
                                    <span className="checkmark"></span>
                                </label>
                            </div>

                            <label htmlFor="sfunktioner" required><p className="kontakt_form">Specielle Funktioner</p></label>
                            <div className="row">
                                <label className="nocheck">
                                    <input type="radio" checked="Checked" name="Ja til specielle funktioner" />
                                    <div className="k_checkedimg">
                                        <img src={Ja} alt="Ja" />
                                    </div>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="nocheck">
                                    <input type="radio" name="Nej til specielle funktioner" />
                                    <div className="k_checkedimg">
                                        <img src={Nej} alt="Nej" />
                                    </div>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            
                            <label htmlFor="ldesign" required><p className="kontakt_form">Logo design</p></label>
                            <div className="row">
                                <label className="nocheck">
                                    <input type="radio" checked="checked" name="Ja til logo design" />
                                    <div className="k_checkedimg">
                                        <img src={Ja} alt="Ja" />
                                    </div>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="nocheck">
                                    <input type="radio" name="Nej til logo design" />
                                    <div className="k_checkedimg">
                                        <img src={Nej} alt="Nej" />
                                    </div>
                                    <span className="checkmark"></span>
                                </label>
                            </div>

                            <label htmlFor="deadline" required><p className="kontakt_form">Deadline</p></label>
                            <div className="row">
                                <label className="nocheck">
                                    <input type="radio" checked="checked" name="Hurtigst muligt" />
                                    <div className="k_checkedimg">
                                        <img src={Hurtigst_muligt} alt="Hurtigst muligt" />
                                    </div>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="nocheck">
                                    <input type="radio" name="2-4 uger" />
                                    <div className="k_checkedimg">
                                        <img src={s2_4_uger} alt="2-4 uger" />
                                    </div>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="nocheck">
                                    <input type="radio" name="4 uger" />
                                    <div className="k_checkedimg">
                                        <img src={s4_uger} alt="4 uger" />
                                    </div>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            
                            <hr className="k_margin"/>
                            
                            <input type="submit" value="bookmøde" /> {/*pop up effekt*/}
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