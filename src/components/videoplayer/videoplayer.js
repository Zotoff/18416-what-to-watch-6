import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({playVideo, src, isVideo, poster, name})=> {
  return (
    <>
      {
        isVideo
          ?
          <video
            ref={playVideo}
            poster={poster}
            className={`videoPlayer`}
            muted
            src={src}
            width="280"
            height="175"
          >
          </video>
          :
          <img src={poster} alt={name} width="280" height="175"/>
      }
    </>
  );
};

VideoPlayer.propTypes = {
  playVideo: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isVideo: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default VideoPlayer;
