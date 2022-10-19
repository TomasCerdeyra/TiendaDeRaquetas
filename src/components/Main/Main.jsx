import React from 'react'
import Section1 from '../Section1Main/Section1'
import Section2 from '../Section2Main/Section2'
import './main.css'
import jugador from '../../assets/JugadorTenis/action-athlete-ball-342361.jpg'
import jugador1 from '../../assets/JugadorTenis/action-athlete-ball-342361@2x.jpg'
import jugador2 from '../../assets/JugadorTenis/action-athlete-ball-342361@3x.jpg'

const Main = ({ }) => {
    return (
        <main>
            <Section1 />
            <Section2 />
            <img
                className='FotoJugador'
                src={jugador}
                srcSet={`${jugador} x1, ${jugador1} x2, ${jugador2} x3`}
                alt="Jugador de Tenis" />
        </main>
    )
}

export default Main