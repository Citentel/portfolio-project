import React, { useState } from 'react'
import moment from 'moment'
import './static/css/index.css'

const Footer = () => {
    const [currentDate] = useState(moment().format('YYYY'))

    return(
        <footer className='footer'>
            <div className='footer__box'>
                <div className='footer__box--links'>
                    <div className='footer__box--links__link'>
                        <a href='https://github.com/Citentel/' target='_blank' rel='noopener noreferrer' title='GitHub'>GitHub</a>
                    </div>
                    <div className='footer__box--links__link'>
                        <a href='https://www.linkedin.com/in/robert-gontarski-477ab8175' target='_blank' rel='noopener noreferrer' title='LinkedIn'>LinkedIn</a>
                    </div>
                </div>
                <div className='footer__box--text'>
                    <p className='footer__box--text__paragraf'>&copy; {currentDate} | gontarsky.pl | All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
