import React from 'react'
import './Home.css'
import pic from '../img/boundary.png'
import ImgSlider from '../Home/Caroussel/ImgSlider'
import Timeline from '../Home/Timeline/Timeline'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Button from '@material-ui/core/Button';
import Cube from '../cube/Cube'
import Status from '../Home/Status'
import ScrollUpButton from "react-scroll-up-button";

function Home() {
    return (
        <>
            <Navbar />
            <Status />
            <div style={{ overflowY: "scroll" }}></div>
            <ScrollUpButton ContainerClassName="MyOverRideClass"
                TransitionClassName="MyOverRideTransitionedClass"
                StopPosition={0}
                ShowAtPosition={150}
                EasingType='easeOutCubic'
                AnimationDuration={500}
                ContainerClassName='ScrollUpButton__Container'
                TransitionClassName='ScrollUpButton__Toggled'
                style={{}}
                ToggledStyle={{}}
            />
            <div className="main">
                <div className="title">
                    <div className="leftside">
                        <p className="description">We connect Innovators with Investors to bring new products to market.</p>
                        <div className="left">
                            <Button variant="contained">
                                Investor
                            </Button>
                            <Button variant="contained" >
                                Innovator
                            </Button>
                        </div>
                    </div>
                    <div className="rightside">
                        <ScrollAnimation animateIn='bounceInRight'
                            animateOut='bounceInRight'>
                            <img src={pic} alt="" className="animated" />
                        </ScrollAnimation>
                    </div>
                </div>
                <Timeline />
                <Cube />
                <ImgSlider />
            </div>
            <Footer />
        </>
    )
}

export default Home
