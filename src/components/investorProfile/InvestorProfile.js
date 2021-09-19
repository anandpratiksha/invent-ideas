import React, { useState } from 'react';
import './InvestorProfile.css';
import Avatar from "@material-ui/core/Avatar";
import { user } from './dataInvestorProfile.js';
import ProfileIdea from '../profileIdea/ProfileIdea.js';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


function InvestorProfile(props) {

    const { name, pic, investedIdea, interestedIdea } = user[0]
    // console.log(investedIdea)
    const [picture] = useState(pic);
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
                            <p>{investedIdea.length}</p>
                        </div>
                        <div className='countCounter'>
                            <p>Interested Ideas</p>
                            <p>{interestedIdea.length}</p>
                        </div>
                    </div>
                </div>
                <div className='ideaSection'>
                    <div className='ideaSectionTitle'><u>Invested ideas</u></div>
                    {
                        investedIdea && investedIdea.map((item, idx) => {
                            return (
                                <ProfileIdea key={idx} ideaName={item.ideaName} description={item.description} />
                            )
                        })
                    }
                </div>
                <div className='ideaSection'>
                    <div className='ideaSectionTitle'><u>Interested ideas</u></div>
                    {
                        interestedIdea && interestedIdea.map((item, idx) => {
                            return (
                                <ProfileIdea key={idx} ideaName={item.ideaName} description={item.description} />
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default InvestorProfile;