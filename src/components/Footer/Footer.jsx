import React from 'react'
import './Footer.css'

import facebook from '../../assets/Redes/facebook-26.png'
import facebook2 from '../../assets/Redes/facebook-26@2x.png'
import facebook3 from '../../assets/Redes/facebook-26@3x.png'

import red from '../../assets/Redes/group-24.png'
import red1 from '../../assets/Redes/group-24@2x.png'
import red2 from '../../assets/Redes/group-24@3x.png'

import instagram from '../../assets/Redes/insta-25.png'
import instagram2 from '../../assets/Redes/insta-25@2x.png'
import instagram3 from '../../assets/Redes/insta-25@3x.png'

import linkedin from '../../assets/Redes/linkedin-23.png'
import linkedin2 from '../../assets/Redes/linkedin-23@2x.png'
import linkedin3 from '../../assets/Redes/linkedin-23@3x.png'

import twitter from '../../assets/Redes/twitter-22.png'
import twitter2 from '../../assets/Redes/twitter-22@2x.png'
import twitter3 from '../../assets/Redes/twitter-22@3x.png'

import iconoPelota from '../../assets/PNG/fill-2.png'
import iconoPelota2 from '../../assets/PNG/fill-2@2x.png'
import iconoPelota3 from '../../assets/PNG/fill-2@3x.png'


const Footer = () => {
    return (
        <footer>
            <nav className='contenedorFooterNav'>
                <ul className='ulNav'>
                    <li className='nav inicio'>Inicio</li>
                    <li className='nav'>Acerca de nosotros</li>
                    <li className='nav'>Historia</li>
                    <li className='nav'>Contacto</li>
                </ul>
            </nav>
            <div className='contenedorIconos'>
                <div className='contenedorRedes'>
                    <img src={linkedin} srcSet={`${linkedin2} 2x, ${linkedin3} 3x `} alt="" />
                    <img src={red} srcSet={`${red1} 2x, ${red2} 3x `} alt="" />
                    <img src={instagram} srcSet={`${instagram2} 2x, ${instagram3} 3x `} alt="" />
                    <img src={twitter} srcSet={`${twitter2} 2x, ${twitter3} 3x `} alt="" />
                    <img src={facebook} srcSet={`${facebook2} 2x, ${facebook3} 3x `} alt="" />
                </div>

                <div className='contenedorIconoPelota'>
                    <img src={iconoPelota} srcSet={`${iconoPelota2} 2x, ${iconoPelota3} 3x `} alt="" />

                </div>
            </div>

        </footer>
    )
}

export default Footer