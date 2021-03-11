import React, {useState} from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from "../videoplayer/videoplayer";

import {useHistory} from 'react-router-dom';
import {Types} from '../../types/types';
import {adaptFilms} from "../../utils/utils";

const FilmCard = (props) => {

  const [isVideo, setIsVideo] = useState(false);
  const adaptedFilm = adaptFilms(props.film);
  const {posterImage, previewVideoLink, name, id} = adaptedFilm;
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
  adaptedFilm:
    PropTypes.shape({
      id: Types.NUMBER_REQUIRED,
      name: Types.STRING_REQUIRED,
      posterImage: Types.STRING_REQUIRED,
      previewVideoLink: Types.STRING_REQUIRED,
    }),
  handleFilmHover: Types.FUNCTION_REQUIRED,
  film: Types.OBJECT_REQUIRED
};
