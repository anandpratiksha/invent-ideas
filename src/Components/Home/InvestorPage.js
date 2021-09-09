import React from 'react'
import Nav from '../Navbar/Navbar'
import Chip from '@material-ui/core/Chip';
import { Avatar } from '@material-ui/core';
import './Home.css'
import Animation from '../animation/Animation';
import InvestorsPage from '../ideaShort/IdeaShort';
import innovatorItems from '../ideaShort/data'

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
                        label="Mechanincal"
                        clickable
                        color="primary"
                        avatar={<Avatar>M</Avatar>}
                    /><br />
                    <Chip
                        size="medium"
                        label="Deveops"
                        clickable
                        color="primary"
                        avatar={<Avatar>D</Avatar>}
                    /><br />
                    <Chip
                        size="medium"
                        label="Others"
                        clickable
                        color="primary"
                        avatar={<Avatar>O</Avatar>}
                    />
                    <br />
                </div>
                <div className="column-right">
                    <InvestorsPage innovatorItems={innovatorItems} />
                </div>
            </div>
            <Animation />
        </div>
    )
}

export default Home
