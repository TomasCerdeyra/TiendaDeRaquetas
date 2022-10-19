import React from 'react'
import './Section1.css'

const Section1 = () => {
    return (
        <section className='section1'>
            <div className='contenedorSpan'>
                <span className='spanTennis'>
                    TENNIS
                </span>
            </div>
            <div className='contenedorH2'>
                <h2>Raquetas.Accesorios.Pelotas.</h2>
                <p>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profecional.</p>
            </div>
            <div className='contenedorButtonHistoria'>
                <button className='buttonHistoria'>HISTORIA →</button>
            </div>

        </section>
    )
}

export default Section1