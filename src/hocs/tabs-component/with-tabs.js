import React from "react";

import {TabsTypes} from "../../constants/constants";

import TabOverView from "../../components/tab-overvlew/tab-overview";
import TabDetails from "../../components/tab-details/tab-details";
import TabReview from "../../components/tab-review/tab-review";
import {filmType} from "../../types/types";

function withTabs(Tabs) {
  class WithTabs extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: TabsTypes.OVERVIEW_TAB,
      };

      this._handleTabClick = this._handleTabClick.bind(this);
      this._renderTab = this._renderTab.bind(this);
    }
    _handleTabClick(tabName) {
      this.setState(
          {
            activeTab: TabsTypes[tabName],
          }
      );
    }

    _renderTab() {
      const {film} = this.props;
      const {description, id, rating, starring, director, scoresCount, released, runTime, genre} = film;

      switch (this.state.activeTab) {
        case TabsTypes.OVERVIEW_TAB:
          return (
            <TabOverView
              description={description}
              scoresCount={scoresCount}
              director={director}
              starring={starring}
              rating={rating}
            />
          );

        case TabsTypes.DETAILS_TAB:
          return (
            <TabDetails
              runTime={runTime}
              released={released}
              genre={genre}
              director={director}
              starring={starring}
            />
          );

        case TabsTypes.REVIEWS_TAB:
          return (
            <TabReview
              id={id}
            />
          );
        default:
          throw new Error(`Something went wrong. No matching tab!`);
      }
    }
    render() {
      return (
        <Tabs
          {...this.props}
          activeTab={this.state.activeTab}
          handleTabClick={this._handleTabClick}
          renderTab={this._renderTab}
        />
      );
    }
  }
  WithTabs.propTypes = {
    film: filmType.isRequired
  };
  return WithTabs;
}

export default withTabs;
