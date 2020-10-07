import React, { Component } from "react";
import "./static/css/index.css";
import pencil from"./static/img/pencil.png";
import code from"./static/img/code.png";

class About extends Component {
    render = () => {
        return (
            <div className="about">
                <div className="about__box">
                    <h2 className="about__box--h2">Co mogę stworzyć</h2>
                    <div className="about__box--item about__box--item__1">
                        <img src={ pencil } alt="img" className="about__box--item__img"/>
                        <div className="about__box--item__text">
                            <h3 className="about__box--item__text--h3">Zaprojektuję co chcesz</h3>
                            <p className="about__box--item__text--p">Prosta strona to dobra strona. Najważniejsze jest czytelność i odbiór strony przez użytkownika</p>
                        </div>
                    </div>
                    <div className="about__box--item about__box--item__2">
                        <img src={ code } alt="img" className="about__box--item__img"/>
                        <div className="about__box--item__text">
                            <h3 className="about__box--item__text--h3">Oprogramowanie</h3>
                            <p className="about__box--item__text--p">Jako deweloper stworzę stronę internetową, która będzie korzystać z najnowszych technologii</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;