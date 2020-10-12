import React from 'react'
import './static/css/index.css'

const pencil = require('./static/img/pencil.png')
const code = require('./static/img/code.png')

const About = () => (
    <div className='about'>
        <div className='about__box'>
            <h2 className='about__box--h2'>Co mogę stworzyć</h2>
            <div className='about__box--item about__box--item__1'>
                <img
                    src={pencil}
                    alt='img pencil'
                    className='about__box--item__img'
                />
                <div className='about__box--item__text'>
                    <h3 className='about__box--item__text--h3'>Zaprojektuję co chcesz</h3>
                    <p className='about__box--item__text--p'>Prosta strona to dobra strona. Najważniejsze jest czytelność i odbiór strony przez użytkownika</p>
                </div>
            </div>
            <div className='about__box--item about__box--item__2'>
                <img
                    src={code}
                    alt='img code' 
                    className='about__box--item__img'
                />
                <div className='about__box--item__text'>
                    <h3 className='about__box--item__text--h3'>Oprogramowanie</h3>
                    <p className='about__box--item__text--p'>Jako deweloper stworzę stronę internetową, która będzie korzystać z najnowszych technologii</p>
                </div>
            </div>
        </div>
    </div>
)

export default About