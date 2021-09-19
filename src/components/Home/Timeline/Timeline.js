import React from 'react'
import './Timeline.scss'
import step1 from '../../img/step1.png'
import step2 from '../../img/step2.png'
import step3 from '../../img/step3.png'
import step4 from '../../img/step4.png'
import { Flip, Slide } from 'react-reveal'

function Timeline() {
    return (
        <div className="timelineContainer">
            <Flip bottom cascade>
                <h1 className="timelineTextHeading" >How it Works</h1>
            </Flip>
            <div className="timeline">
                <section className="ps-timeline-sec">
                    <div className="container-timeline">
                        <ol className="ps-timeline">
                            <Slide bottom>
                                <li>
                                    <div className="ps-top">
                                        <h4 className="step">Step1</h4><p>Innovator submit their ideas to our platform.</p>
                                    </div>
                                    <div className="ps-bot">
                                        <h5>Post your ideas</h5>
                                    </div>
                                    <span className="ps-sp-top"><img className="timeline-img" src={step1} alt="" /></span>
                                </li>
                                <li>
                                    <div className="ps-bot">
                                        <h4 className="step">step2</h4><p>Investors select any ideas they are interested in.</p>
                                    </div>
                                    <div className="ps-top">
                                        <h5>Collection of ideas</h5>
                                    </div>
                                    <span className="ps-sp-bot"><img className="timeline-img" src={step2} alt="" /></span>
                                </li>
                                <li>
                                    <div className="ps-top">
                                        <h4 className="step">Step3</h4><p>Being interested in an idea investor contacts innovator for furture process.</p>
                                    </div>
                                    <div className="ps-bot">
                                        <h5>Connecting investor and innovator</h5>
                                    </div>
                                    <span className="ps-sp-top"><img className="timeline-img" src={step3} alt="" /></span>
                                </li>
                                <li>
                                    <div className="ps-bot">
                                        <h4 className="step">Step4</h4><p>Finally the product of investor and innovator is  now available in market.</p>
                                    </div>
                                    <div className="ps-top">
                                        <h5>Product in market</h5>
                                    </div>
                                    <span className="ps-sp-bot"><img className="timeline-img" src={step4} alt="" /></span>
                                </li>
                            </Slide>
                        </ol>

                    </div>
                </section>

            </div>
        </div>

    )
}

export default Timeline
