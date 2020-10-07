import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import About from "../components/About";
import BreakLine from "../components/BreakLine";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Project1 from "../components/Projects/Project1";
import "./static/css/index.css"
import logo from "./static/img/logo.png";

class Routing extends Component {
    state = {
        basic : {
            header : {
                h1 : "To ja Robert",
                p : "Web deweloper"
            },
            intro : {
                image : "basic",
                h3 : "Cześć",
                p : "Jestem web deweloper-em mieszkajacym w Warszawie. Moją pasją jest tworzenie aplikacji web dostosowanych do każdego urządzenia"
            }
        },
        project : {
            header : {
                h1 : "Moja praca",
                p : "Wybrane moje projekty"
            },
            intro : {
                image : "project",
                h3 : "Co zrobiłem",
                p : "Poniżej znajdziesz moje ostatnie projekty jakie realizowałem. Chcesz zobaczyć mój kod? Zapraszam cię na mojego GitHub - a"
            }
        },
        contact : {
            header : {
                h1 : "Kontakt",
                p : "Napisz do mnie"
            }
        }
    }

    handleClick = (e) => {
        let isActive = document.querySelector(".active");
        if (isActive != null) {
            isActive.classList.remove("active");
        }
        e.target.classList.add("active");
    }

    render = () => {
        return(
            <BrowserRouter>
                <nav className="navbar">
                    <div className="navbar__box">
                        <div className="navbar__box--logo">
                            <img src={ logo } alt="logo"/>
                        </div>
                        <div className="navbar__box--links">
                            <div className="navbar__box--links__link">
                                <Link className="active" to={{ pathname : "/" }} onClick={((e) => this.handleClick(e))}>
                                    Ja
                                </Link>
                            </div>
                            <div className="navbar__box--links__link">
                                <Link to={{ pathname : "/projekty" }} onClick={((e) => this.handleClick(e))}>
                                    Projekty
                                </Link>
                            </div>
                        </div>                        
                    </div>
                </nav>
                <Switch>
                    <Route 
                        exact
                        path="/" 
                        render={
                            () => {
                                return (
                                    <div>
                                        <Header h1={ this.state.basic.header.h1 } p={ this.state.basic.header.p } />
                                        <Intro image={ this.state.basic.intro.image } h3={ this.state.basic.intro.h3 } p={ this.state.basic.intro.p } />
                                        <BreakLine />
                                        <About />
                                        <BreakLine />
                                    </div>
                                );
                            }
                        }
                    />
                    <Route
                        path="/projekty"
                        render = {
                            () => {
                                return (
                                    <div>
                                        <Header h1={ this.state.project.header.h1 } p={ this.state.project.header.p } />
                                        <Intro image={ this.state.project.intro.image } h3={ this.state.project.intro.h3 } p={ this.state.project.intro.p } />
                                        <Project1 />
                                    </div>
                                );
                            }
                        }
                    />
                    <Route 
                        render={
                            () => {
                                return (
                                    <div>
                                        <Header h1={ this.state.basic.header.h1 } p={ this.state.basic.header.p } />
                                        <Intro image={ this.state.basic.intro.image } h3={ this.state.basic.intro.h3 } p={ this.state.basic.intro.p } />
                                        <BreakLine />
                                        <About />
                                        <BreakLine />
                                    </div>
                                );
                            }
                        }
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routing;