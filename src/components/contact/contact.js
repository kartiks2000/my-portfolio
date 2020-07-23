import React from 'react';

import '../../component-style/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome/icon';

const Contact = () => {

    return(
        <div className="contact-bg1">
            <h1 className="con-heading">Ping me up...</h1>
            <div className="contact-box">
                <FontAwesomeIcon className="con-icon" icon="phone" />
                <h1 className="my-num1">+91 9956089661</h1>
            </div>
            <div className="contact-box">
                <FontAwesomeIcon className="con-icon" icon="pager" />
                <h1 className="con-email">kartiksaxena2000@gmail.com</h1>
                <h1 className="con-email">kartiksaxena2000@icloud.com</h1>
            </div>
            <div className="con-form-box">
                <h1 className="con-drop-m">Drop me a message...</h1>
                <form action="https://formspree.io/kartiksaxena2000@gmail.com"
                method="POST" className="form-box-c">
                    <input className="con-name1" type="name" placeholder="Your name..." name="name" required/>
                    <input className="con-email1" type="email" placeholder="Your email..." name="email" required/>
                    <input className="con-contact-num1" type="number" placeholder="Contact number..." name="number" required/>
                    <textarea className="con-msg-1" rows="10" cols="35" placeholder="Please type your message here" name="message" required/>
                    <input className="con-subm1" type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
}

export default Contact;