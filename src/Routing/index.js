import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
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
                            <img src={logo} alt="logo"/>
                        </div>
                        
                            <div className="navbar__box--links">
                                <div className="navbar__box--links__link">
                                    <Link to="/" onClick={((e) => this.handleClick(e))}>Ja</Link>
                                </div>
                                <div className="navbar__box--links__link">
                                    <Link to="/projekty" onClick={((e) => this.handleClick(e))}>Projekty</Link>
                                </div>
                                <div className="navbar__box--links__link">
                                    <Link to="/kontakt" onClick={((e) => this.handleClick(e))}>Kontakt</Link>
                                </div>
                            </div>                        
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" />
                    <Route path="/projekty" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routing;