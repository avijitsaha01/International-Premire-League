import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import './League.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';


const League = (props) => {
  const { strSport, idLeague } = props.data;
  const history = useHistory();
  const showDetails = id => {
    const url = `details/${id}`;
    history.push(url);
  }

  const [LeagueDetails, setLeagueDetails] = useState({});

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then(res => res.json())
      .then(dt => setLeagueDetails(dt.leagues[0]))
  }, [idLeague]);

  const { strBadge, strLeague } = LeagueDetails;

  return (
    <div className="col-md-4">
      <div className="card card-height">
        <img src={strBadge} className="card-img-top card-image" alt="" />
        <div className="card-body">
          <h3 className="card-title">{strLeague}</h3>
          <p className="card-text">Sports Type: {strSport}</p>
        </div>
        <div className="card-footer border-0 bg-white">
          <button onClick={() => showDetails(idLeague)} className="btn-explore btn">Explore
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default League;