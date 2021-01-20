import React from 'react';
import { Tag } from './../../../ui/misc'
import Blocks from './Blocks'
const Matches = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag
                    bck="#0e1731"
                    size="50px"
                    color="#ffffff"
                >Matches
                </Tag>

                <Blocks/>

                <Tag
                    bck="#ffffff"
                    size="25px"
                    color="#0e1731"
                    link={true}
                    linkto="/the_team"
                >
                    See More Matches
                </Tag>
            </div>
        </div>
    );
};

export default Matches; 