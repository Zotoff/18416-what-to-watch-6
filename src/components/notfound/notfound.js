import React from 'react';
import Footer from '../footer/footer';
import {Link} from 'react-router-dom';

const NotFoundScreen = () => {
  return (
    <>
      <div className="page-content">
        <div className="notfound" style={{height: `100vh`, display: `flex`, alignItems: `center`, justifyContent: `center`}}>
          <div className="notFoundWrapper" style={{width: `400px`, height: `400px`, display: `flex`, alignItems: `center`, justifyContent: `center`, flexWrap: `wrap`}}>
            <p style={{fontSize: `50px`}}>Page Not Found</p>
            <Link to={`/`}>
          To main page
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundScreen;
