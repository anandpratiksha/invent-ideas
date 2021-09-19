import React from 'react'
import './cube.css'
import { Zoom, Pulse } from 'react-reveal'

function Cube() {
    return (
        <div>
            <Zoom right cascade>
                <h1 className="text-center">Connecting Investors with Innovators</h1>
            </Zoom>
            <div id="cube-container">
                <div class="cube">
                    <img src="https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1589561253831-b8421dd58261?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aWRlYXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <img src="https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGlkZWFzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGlkZWFzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
            </div>
        </div>
    )
}

export default Cube
