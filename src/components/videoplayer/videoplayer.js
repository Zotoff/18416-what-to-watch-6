import React, {Fragment, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({isPlaying, src, poster, onPlayButtonClick})=> {
  const videoRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }
    videoRef.current.pause();
  }, [isPlaying]);

  return (
    <>
      <video ref={videoRef} poster={poster} className={`videoPlayer`} muted src={src} onMouseOver={onPlayButtonClick}></video>
    </>
  );
};

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default VideoPlayer;
