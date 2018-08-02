import { connect } from 'react-redux';
import DeleteFileModal from './DeleteFileModal';
import MoveCopyModal from './MoveCopyModal';
import React from 'react';
import RenameFileModal from './RenameFileModal';

class ModalWrapper extends React.Component {
  render() {
    return (
        <div>
          {Object.keys(this.props.modals).map((id, i) => {
            switch (this.props.modals[id].modalType) {
              case 'deleteFile':
                return (
                    <DeleteFileModal key={i}
                                     id={id}
                                     action={this.props.modals[id].action}
                                     fileName={this.props.modals[id].fileName}
                    />
                );
              case 'moveCopyFile':
                return (
                    <MoveCopyModal key={i}
                                   id={id}
                                   action={this.props.modals[id].action}
                                   title={this.props.modals[id].title}
                                   fileName={this.props.modals[id].fileName}
                                   prompt={this.props.modals[id].prompt}
                                   submitText={this.props.modals[id].submitText}
                                   path={this.props.modals[id].path}
                                   systemName={this.props.modals[id].systemName}
                    />
                );
              case 'renameFile':
                return (
                    <RenameFileModal key={i}
                                     id={id}
                                     action={this.props.modals[id].action}
                                     fileName={this.props.modals[id].fileName}
                    />
                );
              default:
                return (null);
            }
          })}
        </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    modals: store.modals
  };
};

export default connect(mapStateToProps)(ModalWrapper);