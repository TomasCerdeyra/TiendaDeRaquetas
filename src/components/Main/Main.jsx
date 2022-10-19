import React from 'react'
import './main.css'
import jugador1 from '../../assets/JugadorTenis/action-athlete-ball-342361.jpg'
import raqueta from '../../assets/Raquetas/group-10.jpg'

const Main = ({ }) => {
    return (
        <main>
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
            <section className='section2' >



                <div className='setion2Titulo'>
                    <div>
                        <h3>Nuestras <span>Raquetas</span></h3>
                        <p className='section2P'>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>
                    </div>
                    <div className='contenedorButtons'>
                        <button className='button'>◁</button>
                        <button className='button'>▷</button>
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

            <img className='FotoJugador' src={jugador1} alt="Jugador de Tenis" />
        </main>
    )
}

export default Main