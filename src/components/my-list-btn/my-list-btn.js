import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import withMyListBtn from "../../hocs/with-my-list/with-my-list";
import {changeMyList} from "../../store/api-actions";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../constants/constants";

const MyListBtn = ({isInList, handleClick, authorizationStatus}) => {
  return (
    <>
      {
        authorizationStatus === AuthorizationStatus.UNAUTHORIZED ?
          <Link to="/login" className="btn btn--list movie-card__button" type="button"><svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#add"></use></svg><span>My list</span></Link>
          :
          <button className="btn btn--list movie-card__button" type="button" onClick={handleClick}>
            { isInList
              ?
              (<svg viewBox="0 0 18 14" width="18" height="14">
                <use xlinkHref="#in-list"></use>
              </svg>)
              :
              (<svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>)
            }
            <span>My list</span>
          </button>
      }
    </>
  );
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

MyListBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isInList: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  changeMyListAction(id, status) {
    dispatch(changeMyList(id, status));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(withMyListBtn(MyListBtn));

