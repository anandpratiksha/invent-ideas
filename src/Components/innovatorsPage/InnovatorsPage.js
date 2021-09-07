import React from 'react'
import './InnovatorsPage.css'
import ImgSlider from '../Home/Caroussel/ImgSlider'

function InnovatorsPage() {
    return (
        <div>
            <div className="column-right">
                <h2>Name Of Idea</h2>
                <ImgSlider />
                <h3>Description about idea</h3>
                <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in th sometimes on purpose (injected humour and the like).</h4>
                <button>Intrested</button>
            </div>
        </div>
    )
}

export default InnovatorsPage
