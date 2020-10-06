import React, { Component } from "react";
import "./static/css/index.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text : this.props.location.state,
        }

        if (this.state.text === undefined) {
            this.state.text = {
                    h1 : "To ja Robert",
                    p : "web deweloper"
            };
        }
    }

    changeText = () => {
        if (this.props.location.state !== undefined) {
            // eslint-disable-next-line
            this.state.text = this.props.location.state.header;
        }
    }

    render = () => {
        this.changeText();
        return (
            <header className="header">
                <div className="header__box">
                    <h1 className="header__box--h1">{ this.state.text.h1 }</h1>
                    <p className="header__box--p">{ this.state.text.p }</p>
                </div>
            </header>
        );
    }
}

export default Header;