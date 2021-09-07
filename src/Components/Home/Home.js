import React from 'react'
import Nav from '../Navbar/Navbar'
import Chip from '@material-ui/core/Chip';
import { Avatar } from '@material-ui/core';
import './Home.css'
import Animation from '../animation/Animation';
import InnovatorsPage from '../innovatorsPage/InnovatorsPage';

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
                </div>
                <div className="column-right">
                    <InnovatorsPage />
                </div>
            </div>
            <Animation />
        </div>
    )
}

export default Home
