import React, { useState } from 'react';
import '../investorProfile/InvestorProfile.css';
import { user } from './dataInnovatorProfile.js';
import Avatar from "@material-ui/core/Avatar";
import ProfileIdea from '../profileIdea/ProfileIdea.js';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function InnovatorProfile(props) {

    const { name, pic, postedIdea } = user[0]
    // console.log(investedIdea)
    const [picture, setPicture] = useState(pic);
    // console.log('user', user[0].name);

    return (
        <div>
            <Navbar />
            <div className='profileContainer'>
                <div className="profileUpper">
                    <Avatar
                        alt="investor profile"
                        src={picture ? picture : "https://bit.ly/3td6kYa"}
                        className="profileAvatar profilePic"
                    />
                    <div className="profileName">{name}</div>
                    <div className='profileCountList'>
                        <div className='countCounter'>
                            <p>Invested Ideas</p>
                            <p>{postedIdea.length}</p>
                        </div>
                        {/* <div className='countCounter'>
                        <p>Interested Ideas</p>
                        <p>{interestedIdea.length}</p>
                    </div> */}
                    </div>
                </div>
                <div className='ideaSection'>
                    <div className='ideaSectionTitle'><u>Uploaded ideas</u></div>
                    {
                        postedIdea && postedIdea.map((item) => {
                            return (
                                <ProfileIdea ideaName={item.ideaName} description={item.description} />
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default InnovatorProfile;