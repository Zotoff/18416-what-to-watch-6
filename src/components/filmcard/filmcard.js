import React, {useState} from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from "../videoplayer/videoplayer";

import {useHistory} from 'react-router-dom';

const FilmCard = (props) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideo, setIsVideo] = useState(false);
  const {id, posterImage, name, videoLink} = props.film;
  const {handleFilmHover} = props;
  const history = useHistory();

  return (
    <>
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={()=>{
          setTimeout(setIsVideo(true), 1000);
        }}
        onMouseLeave={()=>{
          setIsVideo(false);
        }}
      >
        <div onMouseEnter={handleFilmHover} className="small-movie-card__image">
          {
            isVideo ?
              <VideoPlayer
                src={videoLink}
                isPlaying={isPlaying}
                onPlayButtonClick={() => setIsPlaying(!isPlaying)}
                poster={posterImage}
              />
              :
              <img src={posterImage} alt={name} width="280" height="175"/>
          }
        </div>
        <h3 className="small-movie-card__title">
          <a onClick={
            (evt) => {
              evt.preventDefault();
              history.push(`/film/${id}`);
            }} className="small-movie-card__link" href="movie-page.html">{name}</a>
        </h3>
      </article>
    </>
  );
};


export default FilmCard;

FilmCard.propTypes = {
  film:
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      videoLink: PropTypes.string.isRequired,
    }),
  handleFilmHover: PropTypes.func.isRequired
};
