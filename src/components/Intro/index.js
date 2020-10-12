import React from 'react'
import './static/css/index.css'

const avatar = require('./static/img/avatar.png')
const pencil = require('./static/img/pencil.png')

const Intro = (props) => (
    <div className='intro'>
        <div className='intro__box'>
            <img 
                className='intro__box--img' 
                src={ 
                    (() => {
                        switch (props.image) {
                            case 'basic': return avatar
                            case 'project': return pencil
                            default: return avatar
                        }
                    })()
                }
                alt='icon'
            />
            <h3 className='intro__box--h3'>{props.h3}</h3>
            <p className='intro__box--p'>{props.p}</p>
        </div>
    </div>
)

export default Intro