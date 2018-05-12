import React, {Component} from "react";
import {Route, Link} from "react-router-dom";
import NavigationLink from 'Components/NavigationLink/NavigationLink';
import {Collapse} from 'react-bootstrap';

/*
 Note:

 The data-toggle="collapse" does nothing.  The CSS for our
 template was written expecting it to be there.  The old jQuery
 implementation of Bootstrap's Collapse feature used it, but
 this React implementation does not.
*/

export default class NavigationGroup extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <Route
          path={this.props.to}
          exact={this.props.activeOnlyWhenExact}
          children={({ match }) => (
              <li className={match ? "active" : ""}>
                <a onClick={() => this.setState({ open: !this.state.open })} data-toggle="collapse">
                  <i className={this.props.icon}/>
                  <p>{this.props.label}
                    <b className="caret"></b>
                  </p>
                </a>
                <Collapse in={this.state.open}>
                  <div>
                    <ul className="nav">
                      {this.props.children}
                    </ul>
                  </div>
                </Collapse>
              </li>
          )}
      />
    );
  }
}