import React from 'react'
import './IdeaPage.css'
import Nav from '../Navbar/Navbar'
import ImgSlider from '../Home/Caroussel/AliceCarousel'
import Avatar from '@material-ui/core/Avatar';
import avatar from '../img/lenin.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import Animation from '../animation/Animation';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        border: '4px solid #7d2ae8'
    },
}));

function Ideapage({ ideaItems }) {
    const classes = useStyles();
    return (
        <div>
            <Nav />
            <div className="idea">

                <div className="idea-contents">
                    <Avatar alt="avatar" src={avatar} className={classes.large} />

                    <h2 className="name">Name:<span>Lenin Dallas</span></h2>
                    <h2 className="date">Date:9/9/21</h2>
                    <h1 className="idea-title">Innovate</h1>
                </div>
                <ImgSlider />
                <h3>Description:</h3><p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <div className="contact">
                    <Button className='navigation_button' >Contact</Button>
                </div>
            </div>

            {/* {
                ideaItems.map((items) => {
                    return (
                        <div className="idea" key={items.id}>
                            <h1 className="idea-title">{items.name}</h1>
                            <div className="idea-contents">
                                <Avatar alt="avatar" src={items.image} className={classes.large} />
                                <h2 className="name">Name:{items.names}</h2>
                                <h2 className="date">Date:9/9/21</h2>
                            </div>
                            <ImgSlider />
                            <p>{items.description}</p>
                            <div className="contact">
                                <button>Contact</button>
                            </div>
                        </div>
                    )
                })
            } */}
            <Animation />
        </div>
    )
}

export default Ideapage
