import React, { Component } from "react";
import "./static/css/index.css";
import avatar from "./static/img/avatar.png";
import pencil from "./static/img/pencil.png";

class Intro extends Component {
    render = () => {
        console.log(this.props.image);
        return (
            <div className="intro">
                <div className="intro__box">
                    <img className="intro__box--img" src={ 
                        (() => {
                            switch (this.props.image) {
                              case "basic": return avatar;
                              case "project": return pencil;
                              default: return avatar;
                            }
                        })()
                     } alt="icon"/>
                    <h3 className="intro__box--h3">{ this.props.h3 }</h3>
                    <p className="intro__box--p">{ this.props.p }</p>
                </div>
            </div>
        );
    }
}

export default Intro;