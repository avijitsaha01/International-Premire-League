import React, { useEffect} from 'react';

import FacebookIcon from '../../assets/Icon/facebook.png';
import YoutubeIcon from '../../assets/Icon/youtube.png';
import TwitterIcon from '../../assets/Icon/twitter.png';
import FlagIcon from '../../assets/Icon/flag.png';
import GenderIcon from '../../assets/Icon/gender-sign.png';
import FootballIcon from '../../assets/Icon/football.png';
import FoundIcon from '../../assets/Icon/found.png';
import ImageMale from '../../assets/images/male.png';
import ImageFemale from '../../assets/images/female.png';
import './LeagueDetail.css';
import { useParams } from 'react-router';


const LeagueDetail = (props) => {
    const { id } = useParams()
    const {LeagueDetails, setLeagueDetails} = props

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagueDetails(data.leagues[0]))
    }, []);

    const { strCountry, strGender, strLeague, strSport, dateFirstEvent, strDescriptionEN, strDescriptionES } = LeagueDetails
    return (
        <div>
            <div className="detail row">
                <div className="leagueDetails col-md-6">
                    <h2>{strLeague}</h2>
                    <p><img src={FoundIcon} alt="" /> Founded: {dateFirstEvent}</p>
                    <p><img src={FlagIcon} alt="" /> Country: {strCountry}</p>
                    <p><img src={FootballIcon} alt="" /> Sport Type: {strSport}</p>
                    <p><img src={GenderIcon} alt="" /> Gender: {strGender}</p>
                </div>
                <div className="leagueImage col-md-6">
                    {
                        strGender === 'Male' ? <img src={ImageMale} alt="" /> : <img src={ImageFemale} alt="" />
                    }
                </div>
            </div>
            <div className="description">
                <p>{strDescriptionEN}</p>
                <p>{strDescriptionES}</p>
                <div className="socialIcon">
                    <img src={FacebookIcon} alt="facebook" />
                    <img src={YoutubeIcon} alt="youtube" />
                    <img src={TwitterIcon} alt="twitter" />
                </div>
            </div>
        </div>
    );
};

export default LeagueDetail;