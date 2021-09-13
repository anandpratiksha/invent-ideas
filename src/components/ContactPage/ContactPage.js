import React from 'react'
import Navbar from '../Navbar/Navbar'
import './ContactPage.css'
import Animation from '../animation/Animation'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

function ContactPage() {
    return (
        <div>
            <Navbar />
            <div className="card-main">
                <div class="card">
                    <div class="card-img"></div>
                    <div class="card-body">
                        <span class="bg"></span>
                        <span class="bg"></span>
                        <span class="bg"></span>
                        <div class="content">
                            <h2 className="title">Invent Ideas</h2>
                            <p className="para">Innovation In You !!!!!</p>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <div className="contact-content">
                        <EmojiObjectsIcon className="icons" /> <p>Idea : Development</p>
                    </div>
                    <div className="contact-content">
                        <DescriptionIcon className="icons" /> <p>Name : Vaulstien Rodrigues</p>
                    </div>
                    <div className="contact-content">
                        <ContactMailIcon className="icons" />  <p>Address : Navi Mumbai Maharashtra 414 001</p>
                    </div>
                    <div className="contact-content">
                        <CallIcon className="icons" />  <p>Phone Number : 1234567890</p>
                    </div>
                    <div className="contact-content">
                        <EmailIcon className="icons" /> <p>Email : Vaulstien@gmail.com</p>
                    </div>
                </div>
            </div>
            <Animation />
        </div>
    )
}

export default ContactPage
