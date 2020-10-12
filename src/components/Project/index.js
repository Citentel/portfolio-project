import React, { Component } from "react";
import "./static/css/index.css";

class Project extends Component {

    variants = {
        project1 : {
            css : {
                background : "linear-gradient(90deg,#4e2b8a,#ac145a,#d6001c)"
            },
            link : "http://tarczynska.gontarsky.pl/"
        },
        github : {
            css : {
                background : "linear-gradient(90deg,#212121,#616161,#9E9E9E)"
            },
            link : "https://github.com/Citentel/"
        },
        kantor : {
            css : {
                background : "linear-gradient(90deg,#1A237E,#3949AB,#7986CB)"
            },
            link : "http://kantor.gontarsky.pl/"
        }
    }

    render = () => {
        return (
            <div className="project" style={ this.variants[ this.props.pType ].css }>
                <div className="project__box">
                    <div className="project__box--img">
                        <img src={ require("./static/img/"+ this.props.pType +".png") } alt="project 1 screen website" className="project__box--img__img"/>
                    </div>
                    <div className="project__box--text">
                        <h3 className="project__box--text__h3">{ this.props.h3 }</h3>
                        <p className="project__box--text__p">{ this.props.p }</p>
                        <a  href={ this.variants[ this.props.pType ].link } target="_blank" rel="noopener noreferrer" className="project__box--text__a">Zobacz stronę</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;