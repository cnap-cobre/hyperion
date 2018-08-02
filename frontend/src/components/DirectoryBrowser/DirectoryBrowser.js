import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import {toggle_dotfiles} from "../../actions/visualOptions";

class DirectoryBrowser extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    toggleDotfiles: PropTypes.func.isRequired,
  };

  render = () => (
    <b>Hello World 2</b>
  );
}

const mapStateToProps = (store, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDotfiles: () => {
      dispatch(toggle_dotfiles())
    },
    dispatch
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DirectoryBrowser);