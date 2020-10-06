import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "../components/Header";
import "./static/css/index.css"
import logo from "./static/img/logo.png";

class Routing extends Component {
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
                            <div className="navbar__box--links__link">
                                <Link to={{ pathname : "/kontakt" }} onClick={((e) => this.handleClick(e))}>
                                    Kontakt
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
                                        <Header h1="To ja Robert" p="Web deweloper" />
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
                                        <Header h1="Moja praca" p="Wybrane projekty" />
                                    </div>
                                );
                            }
                        }
                    />
                    <Route
                        path="/kontakt"
                        render = {
                            () => {
                                return (
                                    <div>
                                        <Header h1="Kontakt" p="Napisz do mnie" />
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