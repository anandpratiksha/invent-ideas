import React from 'react'
import Nav from '../Navbar/Navbar'
import Chip from '@material-ui/core/Chip';
import { Avatar } from '@material-ui/core';
import './Home.css'
import Animation from '../animation/Animation';
import InnovatorsPage from '../innovatorsPage/InnovatorsPage';
import innovatorItems from '../innovatorsPage/data'

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
                    /><br />
                    <Chip
                        size="medium"
                        label="software"
                        clickable
                        color="primary"
                        avatar={<Avatar>S</Avatar>}
                    /><br />
                    <Chip
                        size="medium"
                        label="software"
                        clickable
                        color="primary"
                        avatar={<Avatar>S</Avatar>}
                    /><br />
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
                    <InnovatorsPage innovatorItems={innovatorItems} />

                </div>
            </div>
            <Animation />
        </div>
    )
}

export default Home
