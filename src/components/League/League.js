import React from 'react';
import image from '../../assets/images/image8.png';
import './League.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
const League = () => {
    return (
        <div className="col-md-4">
            <div className="card card-height">
            <img src={image} className="card-img-top card-image" alt="" />
            <div className="card-body">
              <h3 className="card-title">Card title</h3>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button className="btn-explore btn">Explore <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            </div>
          </div>
        </div>
    );
};

export default League;