import error from './errorpics/error.svg'

import React from 'react';
import LazyLoad from 'react-lazyload';

export default function Errorpage() {
    return (
        <section className="errorpage"> {/*Indsæt en ny af hextor der arbjeder*/}
            <img src={error} alt="error404" className="error"/>
        </section>
    )
}