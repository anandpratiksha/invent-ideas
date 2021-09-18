import React, { useEffect } from 'react'
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
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_OWNER } from '../../redux/constants/owner'
import { Bounce, Fade, Flip, LightSpeed, Slide } from 'react-reveal'
import undraw1 from '../img/undraw1-removebg-preview.png'
import undraw2 from '../img/undraw2-removebg-preview.png'
import undraw3 from '../img/undraw3-removebg-preview.png'
import undraw4 from '../img/undraw4-removebg-preview.png'
import undraw5 from '../img/undraw5-removebg-preview.png'
import undraw6 from '../img/undraw6-removebg-preview.png'

function Home() {

    const dispatch = useDispatch();

    const userFromReducer = useSelector((state) => {
        let user = state.signupInnovator;
        if (!user.user) {
            user = state.signinInnovator;
        } if (!user.user) {
            user = state.signupInvestor;
        } if (!user.user) {
            user = state.signinInvestor;
        }
        return user
    });

    useEffect(() => {

        if (userFromReducer.user) {
            dispatch({ type: UPDATE_OWNER, payload: userFromReducer.user.data })
        }
    }, [userFromReducer.user])

    const [investor, setInvestor] = React.useState(userFromReducer.user?.data.investor);
    const [innovator, setInnovator] = React.useState(userFromReducer.user?.data.innovator);

    return (
        <>
            <div className="scrollbar scrollbar-juicy-peach">
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
                            <Fade left>
                                <p className="description">We connect Innovators with Investors to bring new products to market.</p>
                            </Fade>
                            <div className="left">
                                <Button variant="contained">
                                    <Link to={investor ? '/investor-page' : '/signin-investor'} className='globalLink'>
                                        Investor
                                    </Link>
                                </Button>
                                <Button variant="contained" >
                                    <Link to={innovator ? '/innovator-form' : '/signin-innovator'} className='globalLink'>
                                        Innovator
                                    </Link>
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
                    <div className="undraw">
                        <Flip bottom cascade>
                            <p className="undraw-name">The Age of             Invention </p>
                        </Flip>
                        <Slide bottom>
                            <img className="undrawImg u1" src={undraw2} alt="" />
                        </Slide>
                        <Slide bottom>
                            <img className="undrawImg u2" src={undraw1} alt="" />
                        </Slide>
                        <Slide left>
                            <img className="undrawImg u3" src={undraw4} alt="" />
                        </Slide>
                        <Slide bottom>
                            <img className="undrawImg u4" src={undraw3} alt="" />
                        </Slide>
                        <Slide right>
                            <img className="undrawImg u5" src={undraw5} alt="" />
                        </Slide>
                        <Slide left>
                            <img className="undrawImg u6" src={undraw6} alt="" />
                        </Slide>
                        <p className="undraw-name2">Turn Ideas Into             Reality </p>
                    </div>
                    <ImgSlider />
                    <br /><br />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home
