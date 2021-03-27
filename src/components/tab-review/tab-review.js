import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getComments} from "../../store/api-actions";
import {sortComments, dateCommentFormat} from "../../utils/utils";
import {commentType} from "../../types/types";

const createCommentTemplate = (comments) => {
  if (comments) {
    return (
      <>
        {Object.values(comments.map((review) => {
          const {comment, user, date, rating} = review;
          return (
            <div className="review" key={`review_` + user.name}>
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

  const commentsArray = props.comments;
  let firstCommentsArray;
  let secondCommentsArray;

  if (commentsArray.length > 0) {
    const sortedComments = commentsArray.slice().sort(sortComments);
    const commentsArrayLength = Object.keys(commentsArray).length;
    const commentsHalfArrayLength = Math.round(commentsArrayLength / 2);
    firstCommentsArray = sortedComments.slice(0, commentsHalfArrayLength);
    secondCommentsArray = sortedComments.slice(commentsHalfArrayLength);
  }


  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {
            (firstCommentsArray) ? createCommentTemplate(firstCommentsArray) : `No reviews`
          }
        </div>
        <div className="movie-card__reviews-col">
          {
            (secondCommentsArray) ? createCommentTemplate(secondCommentsArray) : ``
          }
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({DATA}) => {
  return {
    comments: DATA.comments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadReviews: (id) => dispatch(getComments(id))
  };
};


TabReview.propTypes = {
  id: PropTypes.number.isRequired,
  loadReviews: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(
      commentType.isRequired
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(TabReview);
