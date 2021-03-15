import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getReviews} from "../../store/api-actions";
import {sortComments, dateCommentFormat} from "../../utils/utils";

const createCommentTemplate = (comments) => {
  if (comments) {
    return (
      <>
        {Object.values(comments.map((review, i) => {
          const {comment, user, date, rating} = review;
          return (
            <div className="review" key={i}>
              <blockquote className="review__quote">
                <p className="review__text">{comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{user.name}</cite>
                  <time className="review__date" dateTime="">{dateCommentFormat(date)}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{rating}</div>
            </div>
          );
        }))}
      </>
    );
  }
  return 0;
};

const TabReview = (props) => {
  useEffect(() => {
    const {loadReviews, id} = props;
    loadReviews(id);
  }, []);

  let loadedComments;

  let firstCommentsArray;
  let secondCommentsArray;

  if (props.comments) {
    loadedComments = props.comments[`data`];
  }


  if (loadedComments) {
    const sortedComments = loadedComments.slice().sort(sortComments);
    const commentsArrayLength = Object.keys(loadedComments).length;
    const commentsHalfArrayLength = Math.round(commentsArrayLength / 2);

    firstCommentsArray = sortedComments.slice(0, commentsHalfArrayLength);
    secondCommentsArray = sortedComments.slice(commentsHalfArrayLength);
  }


  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {
            (firstCommentsArray) ? createCommentTemplate(firstCommentsArray) : `<p>No reviews</p>`
          }
        </div>
        <div className="movie-card__reviews-col">
          {
            (secondCommentsArray) ? createCommentTemplate(secondCommentsArray) : `<p>No reviews</p>`
          }
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadReviews: (id) => dispatch(getReviews(id))
  };
};

TabReview.propTypes = {
  id: PropTypes.number.isRequired,
  loadReviews: PropTypes.func.isRequired,
  comments: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TabReview);
