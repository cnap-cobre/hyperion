// @flow
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { fileIconResolver } from '../../util/FileIconResolver';
import Loader from '../Loader/Loader';
import { toggleDotfiles } from '../../store/ui/visualOptions/VisualOptions';
import { getShowDotfiles } from '../../store/ui/reducer';
import type { FileType } from '../../types/fileTypes';

type Props = {
  showDotfiles: boolean,
  error: boolean,
  loading: boolean,
  list: Array<FileType>,
  path: string,
  toggleDotfiles(): typeof undefined,
  handleDoubleClick(string): typeof undefined,
  style?: any,
}

class DirectoryBrowser extends React.Component<Props> {
  render = () => (
    <div style={this.props.style}>
      <table
        className="table table-hover"
        style={{ display: this.props.error || this.props.loading ? 'none' : 'table' }}
      >
        <tbody>
          {this.props.list.map((item, i) => (
            <tr
              onDoubleClick={() => { this.props.handleDoubleClick(`${item.fullPath}/`); }}
              key={i}
            >
              <td>
                {fileIconResolver(item)}
&nbsp;&nbsp;&nbsp;
                {item.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{
        display: (!(this.props.error || this.props.loading) && this.props.list.length === 0) ? 'block' : 'none',
        marginBottom: '2em',
      }}
      >
          This folder has no sub-folders.
      </div>
      <Loader visible={this.props.loading} />
    </div>
  );
}

const mapStateToProps = (store, ownProps) => {
  console.log('ownProps.path', ownProps.path);
  const filesAtPath = store.files[ownProps.path];

  const loading = (filesAtPath === undefined || filesAtPath.loading);
  const list = (loading) ? [] : filesAtPath.files.filter(item => item.type === 'dir');

  const showDotfiles = getShowDotfiles(store);

  return {
    loading,
    error: false, // TODO: fix hack
    list: list.filter(
      (item, i) => ((showDotfiles || !item.name.match(/^\./i)) && item.type === 'dir'),
    ),
    showDotfiles,
  };
};

const mapDispatchToProps = dispatch => ({
  toggleDotfiles: () => {
    dispatch(toggleDotfiles());
  },
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DirectoryBrowser);
