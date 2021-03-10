import React from 'react';
import FacebookIcon from '../../assets/Icon/facebook.png';
import YoutubeIcon from '../../assets/Icon/youtube.png';
import TwitterIcon from '../../assets/Icon/twitter.png';
import FlagIcon from '../../assets/Icon/flag.png';
import GenderIcon from '../../assets/Icon/gender-sign.png';
import FootballIcon from '../../assets/Icon/football.png';
import FoundIcon from '../../assets/Icon/found.png';

import './LeagueDetail.css';
import ImageMale from '../../assets/images/male.png';
import ImageFemale from '../../assets/images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faFlag, faMapMarkerAlt, faMars} from '@fortawesome/free-solid-svg-icons'

const LeagueDetail = () => {
    return (
        <div>
            <div className="detail row">
                <div className="leagueDetails col-md-6">
                    <h2>Premier League</h2>
                    <p><img src={FoundIcon} alt=""/> Founded: February 20, 1992</p>
                    <p><img src={FlagIcon} alt=""/> Country: England</p>
                    <p><img src={FootballIcon} alt=""/> Sport Type: Football</p>
                    <p><img src={GenderIcon} alt=""/> Gender: Male</p>
                </div>
                <div className="leagueImage col-md-6">
                    <img src={ImageMale} alt="" />
                </div>
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempora quas magnam? Molestiae asperiores tenetur corrupti consectetur voluptas, debitis aperiam ducimus corporis dolor dicta enim iusto? Natus ea cumque voluptates!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempora quas magnam? Molestiae asperiores tenetur corrupti consectetur voluptas, debitis aperiam ducimus corporis dolor dicta enim iusto? Natus ea cumque voluptates!voluptas, debitis aperiam ducimus corporis dolor dicta enim iusto? Natus ea cumque voluptates!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempora quas magnam? Molestiae asperiores tenetur corrupti consectetur voluptas, debitis aperiam ducimus corporis dolor dicta enim iusto? Natus ea cumque voluptates!</p>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempora quas magnam? Molestiae asperiores tenetur corrupti consectetur voluptas, debitis aperiam ducimus corporis dolor dicta enim iusto? Natus ea cumque voluptates!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempora quas magnam? Molestiae asperiores tenetur corrupti consectetur voluptas, debitis aperiam ducimus corporis dolor dicta enim iusto? Natus ea cumque voluptates!voluptas, debitis aperiam ducimus corporis dolor dicta enim iusto? Natus ea cumque voluptates!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempora quas magnam? Molestiae asperiores tenetur corrupti consectetur voluptas, debitis aperiam ducimus corporis dolor dicta enim iusto? Natus ea cumque voluptates!</p>
                <div className="socialIcon">
                    <img src={FacebookIcon} alt="facebook"/>
                    <img src={YoutubeIcon} alt="youtube"/>
                    <img src={TwitterIcon} alt="twitter"/>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetail;