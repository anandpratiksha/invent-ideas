import React from 'react'
import './IdeaPage.css'
import Nav from '../Navbar/Navbar'
import ImgSlider from '../../Components/Home/Caroussel/ImgSlider'

function Ideapage() {
    return (
        <div>
            <Nav />
            <div className="idea">
                <h1>Title:Innovate</h1>
                <div className="idea-contents">
                    <p>pic</p>
                    <h2>Name</h2>
                    <h3>Date</h3>
                </div>
                <ImgSlider />
                <h1>Description:egwrsdx dcsxzbj dcsbx  gdsxbz</h1>
                <div className="contact">
                    <button>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Ideapage
