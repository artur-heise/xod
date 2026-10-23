import React from 'react';
import PropTypes from 'prop-types';
import { PopupForm } from 'xod-client';

import PortSelect from './PortSelect';

class PopupPołączSerial extends React.Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
    this.onPołączClicked = this.onPołączClicked.bind(this);
  }

  onClose() {
    this.props.onClose();
  }

  onPołączClicked() {
    this.props.onPołącz(this.props.selectedPort);
  }

  canUnpload() {
    return this.props.selectedPort && !this.props.isDeploymentInProgress;
  }

  render() {
    return (
      <PopupForm isVisible title="Połącz przez port szeregowy" onClose={this.onClose}>
        <div className="ModalContent">
          <PortSelect
            selectedPort={this.props.selectedPort}
            listPorts={this.props.listPorts}
            onPortChanged={this.props.onPortChanged}
          />
        </div>
        <div className="ModalFooter">
          <button
            onClick={this.onPołączClicked}
            className="Button"
            disabled={!this.canUnpload()}
          >
            Połącz
          </button>
          {this.props.isDeploymentInProgress ? (
            <span className="busy-message">Trwa wgrywanie programu</span>
          ) : null}
        </div>
      </PopupForm>
    );
  }
}

PopupPołączSerial.propTypes = {
  isDeploymentInProgress: PropTypes.bool,
  selectedPort: PropTypes.object,
  listPorts: PropTypes.func,
  onPortChanged: PropTypes.func,
  onPołącz: PropTypes.func,
  onClose: PropTypes.func,
};

PopupPołączSerial.defaultProps = {
  isVisible: false,
  isDeploymentInProgress: false,
};

export default PopupPołączSerial;
