import React from 'react';

const WarningModal = ({ message, onClose }) => {
  return (
    <div style={modal}>
      <div style={modalContent}>
        <h3>{message}</h3>
        <button onClick={onClose}>❌</button>
      </div>
    </div>
  );
};

export default WarningModal;

const modal = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContent = {
  background: 'white',
  padding: '20px',
  borderRadius: '5px',
  textAlign: 'center',
  width: '300px',
};
