import React from 'react';
import Nav from '../Navbar/Navbar';
import Chip from '@material-ui/core/Chip';
import { Avatar } from '@material-ui/core';
import '../ideaShort/IdeaShort.css';
import innovatorItems from '../ideaShort/data';
import IdeaShort from '../ideaShort/IdeaShort';
import Footer from '../Footer/Footer.js';

function InvestorsPage() {
    return (
        <div>
            <Nav />
            <div className="">
                <div className="column-left">
                    <Chip
                        size="medium"
                        label="software"
                        clickable
                        color="primary"
                        avatar={<Avatar>s</Avatar>}
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
                    <IdeaShort innovatorItems={innovatorItems} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default InvestorsPage
