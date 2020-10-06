import React, { Component } from "react";
import "./static/css/index.css";

class Header extends Component {
    render = () => {
        return (
            <header className="header">
                <div className="header__box">
                    <h1 className="header__box--h1">{ this.props.h1 }</h1>
                    <p className="header__box--p">{ this.props.p }</p>
                </div>
            </header>
        );
    }
}

export default Header;