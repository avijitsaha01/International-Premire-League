import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = (props) => {
    const { strBadge } = props.LeagueDetails;

    return (

        <div className="header">
            {
                strBadge ? <Link to="/"><img src={strBadge} alt="" /></Link> : <h1>International Premire League</h1>
            }
        </div>

    );
};

export default Header;