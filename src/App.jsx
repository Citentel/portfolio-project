import React from 'react';
import './static/css/App.css'

const Routing = React.lazy(() => import('./Routing'))
const Footer = React.lazy(() => import('./components/Footer'))
const Contact = React.lazy(() => import('./components/Contact'))

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