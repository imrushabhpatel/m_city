import React from 'react';
import Enroll from './Enroll';
import Animation from './Animation';
const Promotion = () => {
    return (
        <div className="promotion_wrapper" style={{background:'#ffffff'}}>
            <div className="container">
                <Animation/>
                <Enroll/>
            </div>
        </div>
    );
};

export default Promotion;