import React from 'react';
import './ProfileIdea.css';

function ProfileIdea(props) {
    return (
        <div className='ideaLayoutContainer'>
            <div className='ideaLayoutTitle'> <li>{props.ideaName}</li></div>
            <div className='ideaLayoutDescription'>{props.description}...</div>
        </div>
    );
}

export default ProfileIdea;