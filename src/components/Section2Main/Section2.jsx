import React from 'react'
import './Section2.css'
import raqueta from '../../assets/Raquetas/group-10.jpg'
import button from '../../assets/button/group-copy-2.png'
import button2 from '../../assets/button/group-copy-2@2x.png'
import button3 from '../../assets/button/group-copy-2@3x.png'
import triangulo from '../../assets/button/path-2.png'
import triangulo1 from '../../assets/button/path-2@2x.png'
import triangulo2 from '../../assets/button/path-2@3x.png'

import oval from '../../assets/ovals/oval.png'
import oval1 from '../../assets/ovals/oval@2x.png'
import oval2 from '../../assets/ovals/oval@3x.png'

import ovalColor from '../../assets/ovals/ovalColor.png'
import ovalColor2 from '../../assets/ovals/ovalColor@2x.png'
import ovalColor3 from '../../assets/ovals/ovalColor@3x.png'

const Section2 = () => {
    return (
        <section className='section2' >
            <div className='setion2Titulo'>
                <div>
                    <h3>Nuestras <span>Raquetas</span></h3>
                    <p className='section2P'>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>
                </div>
                <div className='contenedorButtons'>
                    <div className='contenedorOvals'>
                        <img src={ovalColor} srcSet={`${ovalColor2} x2, ${ovalColor3} x3`} alt="Oval color" />
                        <img src={oval} srcSet={`${oval1} x2, ${oval2} x3`} alt="oval" />
                        <img src={oval} srcSet={`${oval1} x2, ${oval2} x3`} alt="oval" />
                        <img src={oval} srcSet={`${oval1} x2, ${oval2} x3`} alt="oval" />
                    </div>
                    <div className='contenedorInternoButtons'>
                        <button className='button'>
                            <img src={triangulo} srcSet={`${triangulo1} 2x, ${triangulo2} 3x`} alt="" />
                        </button>
                        <img src={button} srcSet={`${button2} x2, ${button3} x3`} alt="Boton" />
                    </div>
                </div>
            </div>

            <div className='contenedorGenerarlRaqueta'>
                <div className='contenedorRaqueta'>
                    <p className='numeroRaqueta'>1</p>
                    <img src={raqueta} className='imgRaqueta' alt="Raqueta de tenis" />
                </div>
                <div className='contenedorRaqueta'>
                    <p className='numeroRaqueta'>2</p>
                    <img src={raqueta} className='imgRaqueta' alt="Raqueta de tenis" />
                </div>
                <div className='contenedorRaqueta'>
                    <p className='numeroRaqueta'>3</p>
                    <img src={raqueta} className='imgRaqueta' alt="Raqueta de tenis" />
                </div>
            </div>

        </section>
    )
}

export default Section2