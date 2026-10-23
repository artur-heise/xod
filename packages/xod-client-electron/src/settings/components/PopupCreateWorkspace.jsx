import { propOr } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import { PopupForm } from 'xod-client';

const getForce = propOr(false, 'force');
const getPath = propOr('', 'path');

class PopupCreateWorkspace extends React.Component {
  constructor(props) {
    super(props);
    this.onCreateWorkspace = this.onCreateWorkspace.bind(this);
  }

  onCreateWorkspace() {
    this.props.onCreateWorkspace(getPath(this.props.data));
  }

  getContent() {
    return getForce(this.props.data) ? (
      <div>
        <p>
          <strong>Katalog {getPath(this.props.data)} nie jest pusty.</strong>
          <br />
          Czy mimo to utworzyć obszar roboczy?
        </p>
      </div>
    ) : (
      <div>
        <p>Utworzyć nowy obszar roboczy w katalogu {getPath(this.props.data)}?</p>
      </div>
    );
  }

  getButtonCaption() {
    return getForce(this.props.data) ? 'Utwórz mimo to' : 'Utwórz';
  }

  render() {
    return (
      <PopupForm
        isVisible={this.props.isVisible}
        isClosable={false}
        title="Nowy obszar roboczy"
      >
        <div className="ModalContent">{this.getContent()}</div>
        <div className="ModalFooter">
          <button className="Button" onClick={this.onCreateWorkspace}>
            {this.getButtonCaption()}
          </button>
          <button className="Button" onClick={this.props.onClose}>
            Change location
          </button>
        </div>
      </PopupForm>
    );
  }
}

PopupCreateWorkspace.propTypes = {
  isVisible: PropTypes.bool,
  data: PropTypes.object,
  onCreateWorkspace: PropTypes.func,
  onClose: PropTypes.func,
};

export default PopupCreateWorkspace;
