import React from 'react'
import './static/css/index.css'
import project1 from './static/img/project1.png'
import project2 from './static/img/project2.png'
import project3 from './static/img/project3.png'

const Project = (props) => {
    const content = require('./static/content/text').default[props.type]

    return(
        <div 
            className='project' 
            style={content.css}
        >
            <div className='project__box'>
                <div className='project__box--img'>
                    <img
                        src={
                            (() => {
                                switch (props.type) {
                                    case 'project1': return project1
                                    case 'project2': return project2
                                    case 'project3': return project3
                                    default: return null
                                }
                            })()
                        }
                        alt='project 1 screen website'
                        className='project__box--img__img'
                    />
                </div>
                <div className='project__box--text'>
                    <h3 className='project__box--text__h3'>{content.h3}</h3>
                    <p className='project__box--text__p'>{content.p}</p>
                    <a 
                        href={content.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='project__box--text__a'
                    >
                        Zobacz stronę
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project