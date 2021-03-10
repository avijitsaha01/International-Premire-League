import React from 'react';
import './LeagueDetail.css';
import image from '../../assets/images/male.png'

const LeagueDetail = () => {
    return (
        <div className="detail row">
            <div className="leagueDetails col-md-6">
                <h4>Premier League</h4>
                <p>Founded: February 20, 1992</p>
                <p>Country: England</p>
                <p>Sport Type: Football</p>
                <p>Gender: Male</p>
            </div>
            <div className="leagueImage col-md-6">
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default LeagueDetail;