import React, {createRef} from "react";
import PropTypes from "prop-types";
import {getVideoProgress} from "../../utils/utils";
import {filmType} from "../../types/types";


const withPlayer = (Component) => {
  class WithPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: true,
        videoCurrentTime: 0,
        progressPosition: 0,
      };

      this._handlePlayerFullScreen = this._handlePlayerFullScreen.bind(this);
      this._handlePlayerPlay = this._handlePlayerPlay.bind(this);
      this._handlePlayerPause = this._handlePlayerPause.bind(this);
      this._handleVideoTimeUpdate = this._handleVideoTimeUpdate.bind(this);
    }

    componentDidMount() {
      const {films} = this.props;
      const video = this._videoRef.current;
      const id = this._returnTheId();
      const currentFilm = films.find((film) => {
        return film.id === +id;
      });

      if (!video) {
        return;
      }

      let videoSrc;

      videoSrc = currentFilm.previewVideoLink;
      video.src = videoSrc;

      this.setState({
        videoCurrentTime: video.currentTime,
        progressPosition: getVideoProgress(video),
      });

      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    _handleVideoTimeUpdate() {
      const video = this._videoRef.current;

      this.setState({
        videoCurrentTime: video.currentTime,
        progressPosition: getVideoProgress(video),
      });
    }

    _handlePlayerFullScreen() {
      const video = this._videoRef.current;

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
      }
    }

    _handlePlayerPlay() {
      this.setState({
        isPlaying: true,
      });
    }

    _handlePlayerPause() {
      this.setState({
        isPlaying: false,
      });
    }

    _returnTheId() {
      let href = window.location.pathname;
      let splittedHref = href.split(`/`);
      return splittedHref[2];
    }

    render() {
      const {films, handlePlayerExit} = this.props;
      const id = +this._returnTheId();

      const currentFilm = films.find((film) => film.id === id);

      const {isPlaying, videoCurrentTime, progressPosition} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          name={currentFilm.name}
          videoCurrentTime={videoCurrentTime}
          progressPosition={progressPosition}
          handlePlayerFullScreen={this._handlePlayerFullScreen}
          handlePlayerPlay={this._handlePlayerPlay}
          handlePlayerPause={this._handlePlayerPause}
          handlePlayerExit={handlePlayerExit}
        >
          <video
            ref={this._videoRef}
            className="player__video"
            onTimeUpdate={this._handleVideoTimeUpdate}
            poster={currentFilm.posterImage}
            muted
          />
        </Component>
      );
    }

  }

  WithPlayer.propTypes = {
    films: PropTypes.arrayOf(
        filmType.isRequired
    ),
    handlePlayerExit: PropTypes.func.isRequired
  };

  return WithPlayer;
};

export default withPlayer;

