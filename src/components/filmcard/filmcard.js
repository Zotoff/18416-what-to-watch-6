import React, {useState} from 'react';

import VideoPlayer from "../videoplayer/videoplayer";

import {useHistory} from 'react-router-dom';
import {filmType} from '../../types/types';

const FilmCard = (props) => {

  const [isVideo, setIsVideo] = useState(false);
  const {film} = props;
  const {posterImage, previewVideoLink, name, id} = film;
  const history = useHistory();

  const playVideo = (element) => {
    if (element) {
      setTimeout(() => element.play(), 1000);
    }
  };

  const handleEnter = () => {
    setIsVideo(true);
  };

  const handleLeave = () => {
    setIsVideo(false);
  };

  return (
    <>
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            src={previewVideoLink}
            isVideo={isVideo}
            playVideo={playVideo}
            poster={posterImage}
            name={name}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a onClick={
            (evt) => {
              evt.preventDefault();
              history.push(`/film/${id}`);
            }} className="small-movie-card__link" href="">{name}</a>
        </h3>
      </article>
    </>
  );
};


export default FilmCard;

FilmCard.propTypes = {
  film: filmType.isRequired
};
