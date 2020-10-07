import React, { Component } from "react";
import "./static/css/index.css";
import project1Screen from "./static/img/project1Screen.png";

class Project1 extends Component {
    render = () => {
        return (
            <div className="project1">
                <div className="project1__box">
                    <div className="project1__box--img">
                        <img src={ project1Screen } alt="project 1 screen website" className="project1__box--img__img"/>
                    </div>
                    <div className="project1__box--text">
                        <h3 className="project1__box--text__h3">Strona promocyjna kandydatki</h3>
                        <p className="project1__box--text__p">Projekt na stworzenie strony dla kandydatki na sejm RP. Był wyzwaniem pod względem czasu realizacji, który miał trwać maksymalnie 3 dni. Strona jest obsługiowana przez autorskie rozwiązanie MVC udostępnione na github.</p>
                        <a  href="http://tarczynska.gontarsky.pl/" target="_blank" rel="noopener noreferrer" className="project1__box--text__a">Zobacz stronę</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project1;