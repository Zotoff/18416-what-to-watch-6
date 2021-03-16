import React from 'react';
import PropTypes from 'prop-types';
import ArtBoard from '../artboard/artboard';
import withPlayer from '../../hocs/with-player/with-player';
import {formatVideoTime} from "../../utils/utils";

const Player = (props) => {
  const {
    isPlaying,
    videoCurrentTime,
    progressPosition,
    children,
    handlePlayerExit,
    handlePlayerFullScreen,
    handlePlayerPlay,
    handlePlayerPause,
    name
  } = props;

  return (
    <>
      <ArtBoard />
      <div className="player">
        {children}

        <a type="button" className="player__exit" onClick={handlePlayerExit}>Exit</a>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={`${progressPosition}`} max="100"></progress>
              <div className="player__toggler">Toggler</div>
            </div>
            <div className="player__time-value">{formatVideoTime(videoCurrentTime)}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={isPlaying ? handlePlayerPause : handlePlayerPlay}>
              {!isPlaying && (
                <>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </>
              )}
              {isPlaying && (
                <>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </>
              )}
            </button>
            <div className="player__name">{name}</div>

            <button type={`button`} className="player__full-screen" onClick={handlePlayerFullScreen}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Player.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  videoCurrentTime: PropTypes.number.isRequired,
  progressPosition: PropTypes.number.isRequired,
  children: PropTypes.object.isRequired,
  handlePlayerExit: PropTypes.func.isRequired,
  handlePlayerFullScreen: PropTypes.func.isRequired,
  handlePlayerPlay: PropTypes.func.isRequired,
  handlePlayerPause: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default withPlayer(Player);

