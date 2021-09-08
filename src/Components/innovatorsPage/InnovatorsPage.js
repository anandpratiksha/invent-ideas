import React from 'react'
import './InnovatorsPage.css'
import ImgSlider from '../Home/Caroussel/ImgSlider'
import innovatorItem from '../innovatorsPage/data'

function InnovatorsPage({ innovatorItems }) {
    return (
        <div>
            <div className="column-right">
                {
                    innovatorItems.map((items) => {
                        return (
                            <div className="hovering" key={items.id}>
                                <h2 className="idea-header">Title:{items.name}</h2>
                                <ImgSlider innovatorItem={innovatorItem} />
                                <h4 className="idea-description">Summary: {items.description}</h4>
                                <div className="idea-intrested">
                                    <button className="intrested">Intrested</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InnovatorsPage