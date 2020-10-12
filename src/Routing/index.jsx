import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import "./static/css/index.css"

const logo = require("./static/img/logo.png");

const About = React.lazy(() => import('../components/About'))
const BreakLine = React.lazy(() => import('../components/BreakLine'))
const Header = React.lazy(() => import('../components/Header'))
const Intro = React.lazy(() => import('../components/Intro'))
const Project = React.lazy(() => import('../components/Project'))

const Routing = () => {
    const content = {
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
        }
    }

    const handleClick = (e) => {
        let isActive = document.querySelector(".active");
        if (isActive != null) {
            isActive.classList.remove("active");
        }
        e.target.classList.add("active");
    }

    return(
        <BrowserRouter>
            <nav className="navbar">
                <div className="navbar__box">
                    <div className="navbar__box--logo">
                        <img 
                            src={logo}
                            alt="logo"
                        />
                    </div>
                    <div className="navbar__box--links">
                        <div className="navbar__box--links__link">
                            <Link 
                                className="active"
                                to={{ pathname : "/" }}
                                onClick={((e) => handleClick(e))}
                            >
                                Ja
                            </Link>
                        </div>
                        <div className="navbar__box--links__link">
                            <Link
                                to={{ pathname : "/projekty" }}
                                onClick={((e) => handleClick(e))}
                            >
                                Projekty
                            </Link>
                        </div>
                    </div>                        
                </div>
            </nav>
            <Switch>
                <Route 
                    exact={true}
                    path="/" 
                    render={
                        () => (
                            <div>
                                <Header
                                    h1={content.basic.header.h1}
                                    p={content.basic.header.p}
                                />
                                <Intro
                                    image={content.basic.intro.image}
                                    h3={content.basic.intro.h3} 
                                    p={content.basic.intro.p}
                                />
                                <BreakLine />
                                <About />
                                <BreakLine />
                            </div>
                        )
                    }
                />
                <Route
                    exact={true}
                    path="/projekty"
                    render = {
                        () => (
                            <div>
                                <Header
                                    h1={content.project.header.h1}
                                    p={content.project.header.p}
                                />
                                <Intro 
                                    image={content.project.intro.image}
                                    h3={content.project.intro.h3}
                                    p={content.project.intro.p}
                                />
                                <Project
                                    h3={content.project.project2.h3}
                                    p={content.project.project2.p}
                                    pType="github"
                                />
                                <Project
                                    h3={content.project.project3.h3}
                                    p={content.project.project3.p}
                                    pType="kantor"
                                />
                                <Project
                                    h3={content.project.project1.h3}
                                    p={content.project.project1.p}
                                    pType="project1"
                                />
                            </div>
                        )
                    }
                />
                <Route 
                    exact={true}
                    path="/404"
                    render={
                        () => (
                            <div>
                                <Header 
                                    h1={content.notFound.header.h1}
                                    p={content.notFound.header.p}
                                />
                                <Intro 
                                    image={content.notFound.intro.image} 
                                    h3={content.notFound.intro.h3} 
                                    p={content.notFound.intro.p}
                                />
                                <BreakLine />
                            </div>
                        )
                    }
                />
                <Redirect 
                    from="*"
                    to="/404"
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routing;