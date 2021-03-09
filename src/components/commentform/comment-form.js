import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {setComment} from "../../store/api-actions";

const CommentForm = ({onSubmit, id}) => {

  const [commentForm, setCommentForm] = React.useState({
    reviewText: ``,
    rating: 0
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(
        {
          rating: commentForm.rating,
          comment: commentForm.reviewText,
        },
        id);
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setCommentForm({...commentForm, [name]: value});
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-1" onChange={handleFieldChange} type="radio" name="rating" value="1"/>
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input className="rating__input" id="star-2" onChange={handleFieldChange} type="radio" name="rating" value="2" />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-3" onChange={handleFieldChange} type="radio" name="rating" value="3" />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-4" onChange={handleFieldChange} type="radio" name="rating" value="4" />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-5" onChange={handleFieldChange} type="radio" name="rating" value="5" />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input className="rating__input" id="star-6" onChange={handleFieldChange} type="radio" name="rating" value="6"/>
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input className="rating__input" id="star-7" onChange={handleFieldChange} type="radio" name="rating" value="7" />
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input className="rating__input" id="star-8" onChange={handleFieldChange} type="radio" name="rating" value="8" />
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input className="rating__input" id="star-9" onChange={handleFieldChange} type="radio" name="rating" value="9" />
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input className="rating__input" id="star-10" onChange={handleFieldChange} type="radio" name="rating" value="10" />
            <label className="rating__label" htmlFor="star-10">Rating 10</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" onChange={handleFieldChange} name="reviewText" id="reviewText" placeholder="Review text" ></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(data, id) {
    dispatch(setComment(data, id));
  }
});

export {CommentForm};
export default connect(null, mapDispatchToProps)(CommentForm);
