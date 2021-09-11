import React from 'react'
import './Timeline.css'
import step1 from '../../img/step1.png'
import step2 from '../../img/step2.png'
import step3 from '../../img/step3.png'
import step4 from '../../img/step4.png'

function Timeline() {
    return (
        <div className="submain">
            <h1 className="description">How it Works</h1>
            <div className="timeline">
                <div className="top_row">
                    <div className="center">
                        <div >Step:1</div>
                        <div >Post your ideas</div>
                        <div >Innovator submit their ideas to our platform.</div>
                    </div>
                    <div className="center">
                        <div >Step:3</div>
                        <div >Connecting investor and innovator</div>
                        <div >Being interested in an idea investor<br /> contacts innovator for furture process.</div>
                    </div>

                </div>
                <div className="how_icon">
                    <div className="box"><img src={step1} alt="" /></div>
                    <div className="box"><img src={step3} alt="" /></div>
                    <div className="box"><img src={step2} alt="" /></div>
                    <div className="box"><img src={step4} alt="" /></div>

                </div>
                <div className="bottom_row">
                    <div className="lower">
                        <div >Step:2</div>
                        <div >Collection of ideas</div>
                        <div >Investors select any ideas they are interested in.</div>
                    </div>
                    <div className='lower'>
                        <div >Step:4</div>
                        <div >Product in market</div>
                        <div >Finally the product of investor and <br />innovator is  now available in market.</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Timeline
