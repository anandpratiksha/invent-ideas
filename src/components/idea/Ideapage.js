import React, { useState, useEffect } from 'react'
import './IdeaPage.css'
import Nav from '../Navbar/Navbar'
import ImgSlider from '../Home/Caroussel/AliceCarousel'
import avatar from '../img/lenin.jpeg'
import Animation from '../animation/Animation';
import { Button } from '@material-ui/core';
import data from '../ideaShort/data.js';
import { Link } from 'react-router-dom';
import { Fade, Zoom } from 'react-reveal';

function Ideapage(props) {

    const idea = data.filter((item) => item.id === props.match.params.id);

    // console.log(idea, ' ideas')

    const [ideaItem, setIdeaItem] = useState('')

    useEffect(() => {
        setIdeaItem(idea)
        // eslint-disable-next-line 
    }, [props.match.params.id])

    // console.log(ideaItem[0].id)


    return (
        <div>
            <Nav />
            {/* <div className="idea"> */}

            {/* <div className="idea-contents">
                    <img alt="avatar" src={avatar} className='ideaImage' />

                    <h2 className="name">Name:<span>Lenin Dallas</span></h2>
                    <h2 className="date">Date:9/9/21</h2>
                    <h1 className="idea-title">Innovate</h1>
                </div>
                <ImgSlider />
                <h3>Description:</h3>
                <p> It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                    their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                    their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                    purpose (injected humour and the like).</p>
                <div className="contact">
                    <Button className='navigation_button' >Contact</Button>
                </div>
            </div> */}
            <div className="idea" >
                <Fade top>
                    <div className="idea-contents">
                        <img alt="avatar" src={avatar} className='ideaImage' />
                        <h2 className="name">Name:{ideaItem[0]?.name}</h2>
                        <h2 className="date">Date:{ideaItem[0]?.date}</h2>
                    </div>
                    <h1 className="idea-title" align="center">{ideaItem[0]?.title}</h1>
                    <ImgSlider />
                    <p align="center">{ideaItem[0]?.description}</p>
                    <div className="contact">
                        <Button className='navigation_button' >
                            <Link to={`/contact-page/${ideaItem[0]?.id}`} className='globalLink'>
                                Contact
                        </Link>
                        </Button>
                    </div>
                </Fade>
            </div>
            <Animation />
        </div>
    )
}

export default Ideapage
