import React from 'react'
import Nav from '../Navbar/Navbar'
import Chip from '@material-ui/core/Chip';
import { Avatar } from '@material-ui/core';
import ImgSlider from './Caroussel/ImgSlider'
import './Home.css'
import image from '../img/slideA.png'
import Animation from '../animation/Animation';

function Home() {
    return (
        <div>
            <Nav />
            <div className="columns">
                <div className="column-left">
                    <Chip
                        size="medium"
                        label="software"
                        clickable
                        color="primary"
                        avatar={<Avatar>S</Avatar>}
                    />
                    <br />
                    <Chip
                        size="medium"
                        label="software"
                        clickable
                        color="primary"
                        avatar={<Avatar>S</Avatar>}
                    />  <br />
                    <Chip
                        size="medium"
                        label="software"
                        clickable
                        color="primary"
                        avatar={<Avatar>S</Avatar>}
                    />  <br />
                    <Chip
                        size="medium"
                        label="software"
                        clickable
                        color="primary"
                        avatar={<Avatar>S</Avatar>}
                    />  <br />
                </div>
                <div className="column-right">
                    <h2>Name Of Idea</h2>
                    <ImgSlider />
                    <h3>Description about idea</h3>
                    <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in th sometimes on purpose (injected humour and the like).</h4>
                    <button>Intrested</button>
                </div>
                {/* <div className="container">
                    <div className="portfolio">
                        <div className="image-data">
                            <img src={image} alt="" />
                        </div>
                        <ul className="hover-items">
                            <li>
                                <a href="https://github.com/anandpratiksha/portfolio/blob/master/src/styles/project.scss">xyz</a>
                            </li>
                        </ul>
                    </div>
                    <h5>IdeaName</h5>
                    <p><b>Description:</b>It is a long established fact that a reader will be distracted byas opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing </p>
                    <button>Intrested</button>

                </div> */}
            </div>
            <div className="portfolis container">
                <div className="portfolio">
                    <div className="image-data">
                        <img src={image} alt="" />
                        <ul className="hover-items">
                            <li>
                                <a href="https://github.com/anandpratiksha/portfolio/blob/master/src/styles/project.scss">xyz</a>
                            </li>
                        </ul>
                    </div>
                    <h5>inventIdeas</h5>
                    <h5>IdeaName</h5>
                    <p><b>Description:</b>It is a long established fact that a reader will be distracted byas opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing </p>
                    <button>Intrested</button>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br />
            <Animation />
        </div>
    )
}

export default Home
