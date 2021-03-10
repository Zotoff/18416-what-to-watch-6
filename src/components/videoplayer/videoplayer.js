import React from 'react';
import {Types} from "../../types/types";

const VideoPlayer = ({playVideo, src, isVideo, poster})=> {
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
  playVideo: Types.FUNCTION_REQUIRED,
  src: Types.STRING_REQUIRED,
  poster: Types.STRING_REQUIRED,
  isVideo: Types.BOOLEAN_REQUIRED
};

export default VideoPlayer;
