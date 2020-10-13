import React from 'react'
import './static/css/index.css'
import avatar from './static/img/avatar.png'
import pencil from './static/img/pencil.png'

const Intro = (props) => {
    const content = require('./static/content/text').default[props.type]

    return(
        <div className='intro'>
            <div className='intro__box'>
                <img 
                    className='intro__box--img' 
                    src={ 
                        (() => {
                            switch (content.image) {
                                case 'basic': return avatar
                                case 'project': return pencil
                                default: return avatar
                            }
                        })()
                    }
                    alt='icon'
                />
                <h3 className='intro__box--h3'>{content.h3}</h3>
                <p className='intro__box--p'>{content.p}</p>
            </div>
        </div>
    )
}

export default Intro