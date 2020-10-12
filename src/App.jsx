import React from 'react';
import './static/css/App.css'
import Routing from './Routing'
import Footer from './components/Footer'
import Contact from './components/Contact'

const blockEvent = () => {
    document.addEventListener('contextmenu', ((event) => event.preventDefault()))
}

const App = () => {
    blockEvent()
    return(
        <>
            <Routing />
            <Contact />
            <Footer />
        </>
    )
}

export default App