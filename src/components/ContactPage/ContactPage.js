import React from 'react'
import Navbar from '../Navbar/Navbar'
import './ContactPage.css'
import Animation from '../animation/Animation'

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
                <div>
                    <p>Name</p>
                    <p>Address</p>
                    <p>Contact</p>
                </div>
            </div>
            <Animation />
        </div>
    )
}

export default ContactPage
