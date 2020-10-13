import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import logo from './static/img/logo.png'
import "./static/css/index.css"
import About from '../components/About'
import BreakLine from '../components/BreakLine'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Project from '../components/Project'

const Routing = () => {
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
                                <Header type='basic' />
                                <Intro type='basic' />
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
                                <Header type='project' />
                                <Intro type='project' />
                                <Project type='project1' />
                                <Project type='project2' />
                                <Project type='project3' />
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
                                <Header type='notFound' />
                                <Intro type='notFound' />
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