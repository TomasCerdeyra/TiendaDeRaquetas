import React, { useState } from 'react'
import './Header.css'
import png1 from '../../assets/PNG/fill-2.png'
import menu from '../../assets/PNG/menu.png'

const Header = () => {

    const [despliegueMenu, setDespliegueMenu] = useState(false);

    const despliegue = () => {
        if (despliegueMenu) {
            setDespliegueMenu(false)
        } else {
            setDespliegueMenu(true);
        }
    }

    return (
        <header>
            <div className={despliegueMenu ? 'contenedorNavegacion' : 'ocultar'}>
                <nav >
                    <ul className='contenedorInteriorNav1'>
                        <li className='nav inicio' onClick={despliegue}>Inicio</li>
                        <li className='nav' onClick={despliegue}>Acerca de nosotros</li>
                        <li className='nav' onClick={despliegue}>Historia</li>
                        <li className='nav' onClick={despliegue}>Contacto</li>
                    </ul>
                    <hr className='lineInicio'/>
                </nav>
                <div className='contenedorInteriorNav2'>
                    <p className='nav' onClick={despliegue}>ES</p>
                    <p className='nav' onClick={despliegue}>EN</p>
                </div>
            </div>

            <div className='line'>
                <img className='png1' src={png1} alt="Pelota de tenis" />
            </div>

            <img className='pngMenu' src={menu} alt="Pelota de tenis" onClick={despliegue} />


            <div className='contenedorTitulo'>
                <h1>Las mejores raquetas para jugar <span>Tennis</span> </h1>
                <button className='buttonTitulo'>ACERCA DE NOSOTROS →  </button>
            </div>


        </header>
    )
}

export default Header