import React, {Component} from "react";
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

import PropTypes from 'prop-types';

import './fileActionMenu.css';

export default class FileActions extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    fileActionsService: PropTypes.shape({
      share: PropTypes.func.isRequired,
      wget: PropTypes.func.isRequired,
      rename: PropTypes.func.isRequired,
      mv: PropTypes.func.isRequired,
      cp: PropTypes.func.isRequired,
      rm: PropTypes.func.isRequired
    }).isRequired,
    file: PropTypes.shape({
      format: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired
  };

  static noOpAndStopClickPropagation(e) {
    e.stopPropagation();
  }

  stopClickPropagation = (action) => (e) => {
      e.stopPropagation();
      action();
  };

  render() {
    const actions = [
      ['Share', this.props.fileActionsService.share],
      ['Download', this.props.fileActionsService.wget(
          this.props.file
      )],
      ['Rename', this.props.fileActionsService.rename],
      ['Move', this.props.fileActionsService.mv],
      ['Copy', this.props.fileActionsService.cp],
      ['Delete', this.props.fileActionsService.rm]
    ];
    const menuItems = actions.map((item, index) => {
      return (
          <MenuItem
              eventKey={index}
              onClick={this.stopClickPropagation(item[1])}
              key={index}>
            {item[0]}
          </MenuItem>
      );
    });

    return (
        <ButtonToolbar onClick={FileActions.noOpAndStopClickPropagation}>
          <DropdownButton
            bsStyle="default"
            title={(<i className="ti-more"/>)}
            pullRight
            noCaret
            onClick={FileActions.noOpAndStopClickPropagation}
            id={"ddbtn" + this.props.id}
            className="fileActionBtn btn-simple"
          >
            {menuItems}
          </DropdownButton>
        </ButtonToolbar>
    );
  }
}