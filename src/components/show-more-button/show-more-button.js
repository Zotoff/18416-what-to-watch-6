import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = (props) => {
  const {handleClick} = props;
  return (
    <button className="catalog__button" type="button" onClick={handleClick}>Show more</button>
  );
};

export default ShowMoreButton;

ShowMoreButton.propTypes = {
  handleClick: PropTypes.func.isRequired
};
