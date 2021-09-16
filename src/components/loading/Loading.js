import React from 'react';
import './Loading.css';
import load from './load2.gif';

function Loading(props) {
    return (
        <div>
            <div className='loadingContainer'>
                <div className='loading__image'>
                    <img src={load} alt='spinner' className='spinner' />
                    <p className='spinner__text'>Loading...</p>
                </div>
            </div>
        </div>
    );
}

export default Loading;