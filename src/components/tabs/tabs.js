import React from "react";
import PropTypes from "prop-types";

import {TabsTypes} from "../../constants/constants";
import tabsComponent from "../../hocs/tabs-component/with-tabs";

const Tabs = (props) => {
  const {renderTab, activeTab, handleTabClick} = props;
  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.keys(TabsTypes).map((tab)=>(
            <li className={`movie-nav__item ${activeTab === Tabs[tab] ? `movie-nav__item--active` : ``}`} key={`tab_` + tab}>
              <a className="movie-nav__link" onClick={() => handleTabClick(tab)}>{TabsTypes[tab]}</a>
            </li>
          ))}
        </ul>
      </nav>
      {renderTab()}
    </>
  );
};

Tabs.propTypes = {
  adaptedFilm:
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
    }),
  activeTab: PropTypes.string.isRequired,
  handleTabClick: PropTypes.func.isRequired,
  renderTab: PropTypes.func.isRequired,
};

export default tabsComponent(Tabs);
