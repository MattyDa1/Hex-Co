import React from 'react';
import LazyLoad from 'react-lazyload';

export default function Medarbejderpage() {
    return (
        <section className="medarbejder">
            <aside className="m_titler row m_avg">
                <div className="m_sect1">
                    <p>Navn</p>
                </div>
                <div className="m_sect2">
                    <p>E-mail</p>
                </div>
                <div className="m_sect3">
                    <p>Service</p>
                </div>
                <div className="m_sect4">
                    <p>Sider</p>
                </div>
                <div className="m_sect5">
                    <p>Funktioner</p>
                </div>
                <div className="m_sect6">
                    <p>Logo</p>
                </div>
                <div className="m_sect7">
                    <p>Deadline</p>
                </div>
            </aside>
            <aside className="m_avg">
                <div>
                    <div className="m_titel">
                        <p>Igang satte:</p>
                    </div>
                    <div className="row m_back1">
                        <div className="m_sect1">
                            <p>Birgitte Larsen</p>
                        </div>
                        <div className="m_sect2">
                            <p>Birgitte@hotmail.com</p>
                        </div>
                        <div className="m_sect3">
                            <p>Optimering</p>
                        </div>
                        <div className="m_sect4">
                            <p>11-20</p>
                        </div>
                        <div className="m_sect5">
                            <p>Nej</p>
                        </div>
                        <div className="m_sect6">
                            <p>Ja</p>
                        </div>
                        <div className="m_sect7">
                            <p>2-4 Uger</p>
                        </div>
                    </div>
                    <div className="row m_back2">
                        <div className="m_sect1">
                            <p>Hans Jensen</p>
                        </div>
                        <div className="m_sect2">
                            <p>Hans@hotmail.com</p>
                        </div>
                        <div className="m_sect3">
                            <p>Oprettelse</p>
                        </div>
                        <div className="m_sect4">
                            <p>20+</p>
                        </div>
                        <div className="m_sect5">
                            <p>Ja</p>
                        </div>
                        <div className="m_sect6">
                            <p>Nej</p>
                        </div>
                        <div className="m_sect7">
                            <p>4 + Uger</p>
                        </div>
                    </div>
                    <div className="row m_back1">
                        <div className="m_sect1">
                            <p>Gudrun Holm</p>
                        </div>
                        <div className="m_sect2">
                            <p>Gudrun@hotmail.com</p>
                        </div>
                        <div className="m_sect3">
                            <p>Marketing</p>
                        </div>
                        <div className="m_sect4">
                            <p>1-10</p>
                        </div>
                        <div className="m_sect5">
                            <p>Ja</p>
                        </div>
                        <div className="m_sect6">
                            <p>Ja</p>
                        </div>
                        <div className="m_sect7">
                            <p>Hurtigst muligt</p>
                        </div>
                    </div>
                </div>
            </aside>
            <aside className="m_avg">
                <div>
                    <div className="m_titel">
                        <p>Færdige:</p>
                    </div>
                    <div className="row m_back3">
                        <div className="m_sect1">
                            <p>Birgitte Larsen</p>
                        </div>
                        <div className="m_sect2">
                            <p>Birgitte@hotmail.com</p>
                        </div>
                        <div className="m_sect3">
                            <p>Optimering</p>
                        </div>
                        <div className="m_sect4">
                            <p>11-20</p>
                        </div>
                        <div className="m_sect5">
                            <p>Nej</p>
                        </div>
                        <div className="m_sect6">
                            <p>Ja</p>
                        </div>
                        <div className="m_sect7">
                            <p>2-4 Uger</p>
                        </div>
                    </div>
                </div>
            </aside>
            <aside className="m_spacing m_avg" />
        </section>
    )
}