import React from 'react'
import './static/css/index.css'

const Header = (props) => {
    const content = require('./static/content/text').default[props.type]

    return(
        <header className='header'>
            <div className='header__box'>
                <h1 className='header__box--h1'>{content.h1}</h1>
                <p className='header__box--p'>{content.p}</p>
            </div>
        </header>
    )
}



export default Header