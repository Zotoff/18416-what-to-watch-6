import React from "react";
import PropTypes from 'prop-types';
import {filmType} from "../../types/types";

const withMyListBtn = (Component) => {
  class WithMyListBtn extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFavorite: this.props.film.isFavorite,
      };
      this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
      this.setState({
        isFavorite: !this.props.film.isFavorite,
      });
      this.props.changeMyListAction(this.props.film.id, Number(!this.state.isFavorite));
    }

    render() {
      return (
        <Component
          {...this.props}
          handleClick={this._handleClick}
          isInList={this.state.isFavorite}
        />
      );
    }
  }
  WithMyListBtn.propTypes = {
    changeMyListAction: PropTypes.func.isRequired,
    film: filmType,
  };

  return WithMyListBtn;
};

export default withMyListBtn;
