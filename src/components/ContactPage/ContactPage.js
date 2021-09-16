import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './ContactPage.css'
import Animation from '../animation/Animation'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import data from '../ideaShort/data.js';

function ContactPage(props) {

    const user = data.filter((item) => item.id === props.match.params.id);

    const [ideaItem, setIdeaItem] = useState('')

    useEffect(() => {
        setIdeaItem(user)
    }, [props.match.params.id])

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
                <div className="contactInfo">
                    <div className="contact-content">
                        <EmojiObjectsIcon className="icons" /> <p>Idea : {ideaItem[0]?.title}</p>
                    </div>
                    <div className="contact-content">
                        <DescriptionIcon className="icons" /> <p>Name : {ideaItem[0]?.name}</p>
                    </div>
                    <div className="contact-content">
                        <EmailIcon className="icons" /> <p>Email : {ideaItem[0]?.email}</p>
                    </div>
                    <div className="contact-content">
                        <CallIcon className="icons" />  <p>Phone Number : {ideaItem[0]?.mobileno}</p>
                    </div>
                    <div className="contact-content">

                        <ContactMailIcon className="icons" />  <p>Address : {ideaItem[0]?.address}</p>
                    </div>
                </div>
            </div>
            <br />
            <Animation />
        </div>
    )
}

export default ContactPage
