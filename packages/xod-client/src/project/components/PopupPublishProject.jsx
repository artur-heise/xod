import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-fa';
import * as XP from 'xod-project';

import sanctuaryPropType from '../../utils/sanctuaryPropType';
import PopupForm from '../../utils/components/PopupForm';
import { HOSTNAME } from '../../utils/urls';
import Button from '../../core/components/Button';

const PopupPublishProject = ({
  isVisible,
  isPublishing,
  project,
  user,
  onPublish,
  onRequestToEditPreferences,
  onClose,
}) => {
  const projectName = XP.getProjectName(project);
  const version = XP.getProjectVersion(project);
  const description = XP.getProjectDescription(project);
  const license = XP.getProjectLicense(project);

  // When popup is hidden, `user` could be Nothing
  const { username } = user.getOrElse({});

  const isValidName =
    XP.isValidIdentifier(projectName) && projectName.length > 0;

  const invalidNameMessage = isValidName ? null : (
    <span className="error">
      Nie ustawiono publicznej nazwy projektu.<br />
      Edytuj
      <a tabIndex="0" role="button" onClick={onRequestToEditPreferences}>
        ustawienia projektu
      </a>
      przed opublikowaniem projektu.
    </span>
  );

  return (
    <PopupForm
      className="PopupPublishProject"
      isVisible={isVisible}
      isClosable={!isPublishing}
      title={`Zamierzasz opublikować projekt w ${HOSTNAME}`}
      onClose={onClose}
    >
      <p className="property">
        <span className="propertyLabel">Nazwa: </span>
        <span className="libName">
          {username}/{projectName}
        </span>
        {invalidNameMessage}
      </p>
      <p className="property">
        <span className="propertyLabel">Wersja: </span>
        {version}
      </p>
      <p className="property">
        <span className="propertyLabel">Licencja: </span>
        {license}
      </p>
      <p className="property">
        <span className="propertyLabel">Opis: </span>
        {description}
      </p>
      {isPublishing ? (
        <div className="ModalFooter">
          <Icon name="circle-o-notch" spin size="lg" /> Publikowanie…
        </div>
      ) : (
        <div className="ModalFooter">
          <Button onClick={onPublish} disabled={!isValidName} autoFocus>
            Opublikuj
          </Button>
          <Button onClick={onRequestToEditPreferences}>Edycja</Button>
          <Button onClick={onClose}>Anuluj</Button>
        </div>
      )}
    </PopupForm>
  );
};

PopupPublishProject.propTypes = {
  isVisible: PropTypes.bool,
  isPublishing: PropTypes.bool,
  user: PropTypes.object,
  project: sanctuaryPropType(XP.Project),
  onPublish: PropTypes.func,
  onRequestToEditPreferences: PropTypes.func,
  onClose: PropTypes.func,
};

PopupPublishProject.defaultProps = {
  isVisible: false,
};

export default PopupPublishProject;
