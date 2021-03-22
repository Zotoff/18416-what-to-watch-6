import React, {useRef, useState} from 'react';
import Footer from '../footer/footer';
import ArtBoard from '../art-board/art-board';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";

const Login = ({handleLoginSubmit}) => {
  const loginRef = useRef();
  const passwordRef = useRef();

  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const loginValue = loginRef.current.value;
    const passwordValue = passwordRef.current.value;
    if (!loginValue) {
      setEmailError(true);
    } else {
      setEmailError(false);
      handleLoginSubmit({
        login: loginValue,
        password: passwordValue
      });
    }
  };

  return (
    <>
      <ArtBoard />
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to='/' className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
            <div className="sign-in__message">
              {emailError ? (<p>Please enter a valid email address</p>) : ``}
            </div>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  ref={loginRef}
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  isrequired="true"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  ref={passwordRef}
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  isrequired="true"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="submit">Sign in</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

Login.propTypes = {
  handleLoginSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  handleLoginSubmit(authData) {
    dispatch(login(authData));
  }
});

export {Login};
export default connect(null, mapDispatchToProps)(Login);
