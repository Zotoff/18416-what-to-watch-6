import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ArtBoard from '../artboard/artboard';

const Player = (props) => {
  const {videoLink, posterImage, runTime} = props.film;
  return (
    <>
      <ArtBoard />
      <div className="player">
        <video src={videoLink} className="player__video" poster={posterImage}></video>

        <Link to={`/`} type="button" className="player__exit">Exit</Link>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{runTime}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;

Player.propTypes = {
  film:
    PropTypes.shape({
      videoLink: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      runTime: PropTypes.number.isRequired
    })
};
