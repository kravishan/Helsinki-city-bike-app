import React from 'react';
import './popupModal.css';

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
