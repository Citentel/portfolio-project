import React, { Component } from 'react';
import './static/css/index.css';

class Loader extends Component {
    render = () => {
        return (
            <div className="loader">
                <div className="loader__box">
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h3 className="loader__box--h3">Ładowanie zawartości</h3>
                </div>
            </div>
        );
    }
}

export default Loader;