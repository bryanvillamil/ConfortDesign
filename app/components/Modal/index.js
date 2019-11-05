/**
 *
 * Modal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { ModalFade, ModalContent, ModalClose } from './styledComponents';

function Modal(props) {
  const { openButton, setOpenButton } = props;

  const closeModal = () => {
    setOpenButton(false);
  };

  return (
    <ModalFade className={openButton ? 'open' : ''}>
      <ModalContent pose={openButton ? 'open' : 'closed'}>
        <ModalClose>
          <FontAwesomeIcon icon={faTimes} onClick={closeModal} size="2x" />
        </ModalClose>
      </ModalContent>
    </ModalFade>
  );
}

Modal.propTypes = {
  openButton: PropTypes.bool.isRequired,
  setOpenButton: PropTypes.func.isRequired,
};

export default Modal;
