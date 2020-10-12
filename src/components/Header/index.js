import React from 'react'
import './static/css/index.css'

const Header = (props) => (
    <header className='header'>
        <div className='header__box'>
            <h1 className='header__box--h1'>{props.h1}</h1>
            <p className='header__box--p'>{props.p}</p>
        </div>
    </header>
)

export default Header