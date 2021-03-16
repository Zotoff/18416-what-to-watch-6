import React from "react";
import {connect} from "react-redux";
import withMyListBtn from "../../hocs/with-my-list/with-my-list";
import {changeMyList} from "../../store/api-actions";
import PropTypes from "prop-types";

const MyListBtn = ({handleClick, isFavorite}) => {
  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={handleClick}>
      {
        !isFavorite ?
          (
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add">
              </use>
            </svg>
          )
          :
          (
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg>
          )
      }
      <span>My list</span>
    </button>
  );
};

MyListBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  changeMyListAction(id, status) {
    dispatch(changeMyList(id, status));
  },
});


export default connect(null, mapDispatchToProps)(withMyListBtn(MyListBtn));

