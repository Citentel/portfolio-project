import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./static/css/index.css";

class Contact extends Component {
    render = () => {
        return (
            <div className="contact">
                <div className="contact__box">
                    <h2 className="contact__box--h2">W czym pomogę?</h2>
                    <h3 className="contact__box--h3">W wolnym czasie realizuję projekty.</h3>
                    <p className="contact__box--p">Jeśli masz projekt, który chcesz rozpocząć, myślisz, że potrzebujesz mojej pomocy lub po prostu chcesz powiedzieć hej, to skontaktuj się ze mną za pomocą spandit.robert.gontarski@gmail.com lub formularza poniżej.</p>
                    <BrowserRouter>
                        <Link 
                            to={{
                                pathname : "/kontakt",
                            }} 
                            className="contact__box--a"
                        >
                            Napisz do mnie
                        </Link>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default Contact;