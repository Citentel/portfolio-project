import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import About from "../components/About";
import BreakLine from "../components/BreakLine";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Project from "../components/Project";
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
            },
            project1 : {
                h3 : "Strona promocyjna kandydatki",
                p : "Projekt na stworzenie strony dla kandydatki na sejm RP. Strona jest obsługiowana przez autorskie rozwiązanie MVC udostępnione na github."
            },
            project2 : {
                h3 : "Repozytorium GitHub",
                p : "Platforma na której znajdziesz moje projekty. Takie jak to portfolio."
            },
            project3 : {
                h3 : "Projekt przelicznika walut",
                p : "Zrealizowany dzięki pobieraniu danych od api NBP. Pliki znajdziesz na github."
            }
        },
        notFound : {
            header : {
                h1 : "404",
                p : "Coś poszło nie tak..."
            },
            intro : {
                image : "basic",
                h3 : "Cześć",
                p : "Jesteś tutaj, więc możesz wrócić do strony startowej. Kliknij przycisk poniżej który przeniesie cię na stronę główną.",
                btn: "Strona startowa"
            }
        },
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
                                <Link 
                                    className="active"
                                    to={{ pathname : "/" }}
                                    onClick={((e) => this.handleClick(e))}>
                                    Ja
                                </Link>
                            </div>
                            <div className="navbar__box--links__link">
                                <Link
                                    to={{ pathname : "/projekty" }}
                                    onClick={((e) => this.handleClick(e))}>
                                    Projekty
                                </Link>
                            </div>
                        </div>                        
                    </div>
                </nav>
                <Switch>
                    <Route 
                        exact={ true }
                        path="/" 
                        render={
                            () => {
                                return (
                                    <div>
                                        <Header
                                            h1={ this.state.basic.header.h1 }
                                            p={ this.state.basic.header.p }
                                        />
                                        <Intro
                                            image={ this.state.basic.intro.image }
                                            h3={ this.state.basic.intro.h3 } 
                                            p={ this.state.basic.intro.p }
                                        />
                                        <BreakLine />
                                        <About />
                                        <BreakLine />
                                    </div>
                                );
                            }
                        }
                    />
                    <Route
                        exact={ true }
                        path="/projekty"
                        render = {
                            () => {
                                return (
                                    <div>
                                        <Header
                                            h1={ this.state.project.header.h1 }
                                            p={ this.state.project.header.p }
                                        />
                                        <Intro 
                                            image={ this.state.project.intro.image }
                                            h3={ this.state.project.intro.h3 }
                                            p={ this.state.project.intro.p }
                                        />
                                        <Project
                                            h3={ this.state.project.project2.h3 }
                                            p={ this.state.project.project2.p }
                                            pType="github"
                                        />
                                        <Project
                                            h3={ this.state.project.project3.h3 }
                                            p={ this.state.project.project3.p }
                                            pType="kantor"
                                        />
                                        <Project
                                            h3={ this.state.project.project1.h3 }
                                            p={ this.state.project.project1.p }
                                            pType="project1"
                                        />
                                    </div>
                                );
                            }
                        }
                    />
                    <Route 
                        exact={ true }
                        path="/404"
                        render={
                            () => {
                                return (
                                    <div>
                                        <Header 
                                            h1={ this.state.notFound.header.h1 }
                                            p={ this.state.notFound.header.p }
                                        />
                                        <Intro 
                                            image={ this.state.notFound.intro.image } 
                                            h3={ this.state.notFound.intro.h3 } 
                                            p={ this.state.notFound.intro.p } 
                                            btn={ this.state.notFound.intro.btn }
                                        />
                                        <BreakLine />
                                    </div>
                                );
                            }
                        }
                    />
                    <Redirect 
                        from="*"
                        to="/404"
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routing;