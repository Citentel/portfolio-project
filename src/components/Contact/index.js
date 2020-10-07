import React, { Component } from "react";
import "./static/css/index.css";

class Contact extends Component {
    render = () => {
        return (
            <div className="contact">
                <div className="contact__box">
                    <h2 className="contact__box--h2">W czym pomogę</h2>
                    <h3 className="contact__box--h3">W wolnym czasie realizuję projekty</h3>
                    <p className="contact__box--p">Jeśli masz projekt, który chcesz rozpocząć, myślisz, że potrzebujesz mojej pomocy lub po prostu chcesz powiedzieć hej, to skontaktuj się ze mną za pomocą maila spandit.robert.gontarski@gmail.com</p>
                </div>
            </div>
        );
    }
}

export default Contact;