import React from 'react';
import PropTypes from 'prop-types';
import { remote } from 'electron';
import { PopupForm } from 'xod-client';

class PopupSetWorkspace extends React.Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
    this.onChange = this.onChange.bind(this);
    this.changeWorkspace = this.changeWorkspace.bind(this);
  }

  onChange({ filePaths, canceled }) {
    if (!canceled) {
      this.props.onChange(filePaths[0]);
    }
  }
  onClose() {
    if (this.props.isClosable) {
      this.props.onClose();
    }
  }

  getWorkspaceView() {
    if (!this.props.workspace) {
      return {
        currentWorkspace: (
          <p>
            Aby zapisać projekt, wybierz katalog obszaru roboczego.<br />
            W tym katalogu będą przechowywane wszystkie projekty, ale możesz
            łatwo zmienić go w przyszłości.
          </p>
        ),
        buttonLabel: 'Wybierz katalog obszaru roboczego',
      };
    }

    return {
      currentWorkspace: (
        <p>
          Bieżący katalog obszaru roboczego:<br />
          <code>{this.props.workspace}</code>
        </p>
      ),
      buttonLabel: 'Zmień katalog obszaru roboczego',
    };
  }

  changeWorkspace() {
    remote.dialog
      .showOpenDialog({
        title: 'Wybierz katalog obszaru roboczego',
        properties: ['openDirectory'],
        buttonLabel: 'Wybierz katalog',
      })
      .then(this.onChange);
  }

  render() {
    const { currentWorkspace, buttonLabel } = this.getWorkspaceView();
    return (
      <PopupForm
        title="Wybierz katalog obszaru roboczego"
        isVisible={this.props.isVisible}
        isClosable={this.props.isClosable}
        onClose={this.onClose}
      >
        <div className="ModalContent">{currentWorkspace}</div>
        <div className="ModalFooter">
          <button className="Button" onClick={this.changeWorkspace}>
            {buttonLabel}
          </button>
        </div>
      </PopupForm>
    );
  }
}

PopupSetWorkspace.propTypes = {
  workspace: PropTypes.string,
  isClosable: PropTypes.bool,
  isVisible: PropTypes.bool, // eslint-disable-line
  onChange: PropTypes.func,
  onClose: PropTypes.func,
};

export default PopupSetWorkspace;
