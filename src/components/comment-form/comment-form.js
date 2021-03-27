import React, {useState} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {RATING_INPUTS_COUNT, Film} from "../../constants/constants";

import {postComment} from "../../store/api-actions";

const CommentForm = ({handleCommentSubmit, id}) => {

  const [commentForm, setCommentForm] = useState({
    reviewText: ``,
    rating: Film.INITIAL_COMMENT_STARS
  });

  const [formError, setFormError] = useState(false);
  const [formSubmitStatus, setIsFormSubmitStatus] = useState(false);
  const [isTextEntered, setIstextEntered] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const commentRating = commentForm.rating;
    const commentMessage = commentForm.reviewText;
    if (commentRating === 0 || commentMessage === ``) {
      setFormError(true);
    } else {
      setFormError(false);
      handleCommentSubmit(
          {
            rating: commentRating,
            comment: commentMessage
          },
          id);
      setIsFormSubmitStatus(true);
    }
  };

  const handleFieldChange = (evt) => {
    let {name, value} = evt.target;
    setIstextEntered(true);
    setCommentForm({...commentForm, [name]: value});
  };

  const renderInputStars = () => {
    const inputStarsArray = RATING_INPUTS_COUNT;
    return (
      inputStarsArray.map((value) => {
        return (
          <React.Fragment key={`comment_` + value}>
            <input className="rating__input" id={`star-${value}`} onChange={handleFieldChange} disabled={formSubmitStatus} type="radio" checked={value === +commentForm.rating} name="rating" value={value}/>
            <label className="rating__label" htmlFor={`star-${value}`}>Rating ${value}</label>
          </React.Fragment>
        );
      }
      )
    );
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="add-review__message">
          {formError ? (<p>Please check all fields</p>) : ``}
        </div>
        <div className="rating">
          <div className="rating__stars" >
            {
              renderInputStars()
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" onChange={handleFieldChange} name="reviewText" minLength="50" maxLength="400" id="reviewText" disabled={formSubmitStatus} placeholder="Review text" ></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!isTextEntered}>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  handleCommentSubmit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  handleCommentSubmit(data, id) {
    dispatch(postComment(data, id));
  }
});

export {CommentForm};
export default connect(null, mapDispatchToProps)(CommentForm);
