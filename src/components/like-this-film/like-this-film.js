import React from "react";
import {Link} from "react-router-dom";
import {filmType} from "../../types/types";

const LikeThisFilm = ({film}) => {
  return (
    <>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={film.posterImage}
            alt={film.name} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`${film.id}`}>{film.name}</Link>
        </h3>
      </article>
    </>
  );
};

LikeThisFilm.propTypes = {
  film: filmType.isRequired
};

export default LikeThisFilm;
