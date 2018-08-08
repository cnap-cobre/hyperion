import Col from 'react-bootstrap/lib/Col';
import {fileIconResolver} from "../../../../util/FileIconResolver";
import Grid from 'react-bootstrap/lib/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import './fileGridIcon.css'


export default class FileBrowserGrid extends React.Component {
  static propTypes = {
    showDotfiles: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired,
    path: PropTypes.string.isRequired,
    handleFileClick: PropTypes.func.isRequired,
  };

  fileToComponent = (item, i) => (
      <Col xs={6} sm={4} md={3} lg={2} key={item.name}
           onDoubleClick={(e) => this.props.handleFileClick(item, e)}
           className="fileGridIcon"
      >
        {fileIconResolver(item)}&nbsp;&nbsp;
        {item.name}
      </Col>
  );

  render() {
    const folders = this.props.list.filter(
        (item, i) => ((this.props.showDotfiles || !item.name.match(/^\./i)) && item.type === "dir")
    );

    const files = this.props.list.filter(
        (item, i) => ((this.props.showDotfiles || !item.name.match(/^\./i)) && item.type === "file")
    );

    return (
        <Grid fluid={true}>
          <Row style={{display: this.props.error || this.props.loading ? 'none' : 'block'}}>

            {folders.length ? (
                <Col xs={12}>
                  <h6>Folders</h6>
                  <hr />
                </Col>
            ) : (null)}

            {folders.map(this.fileToComponent)}


            {files.length ? (
                <Col xs={12}>
                  <h6>Files</h6>
                  <hr />
                </Col>
            ) : (null)}

            {files.map(this.fileToComponent)}

          </Row>
        </Grid>
    );
  }
}