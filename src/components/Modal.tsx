import React from 'react';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  fullscreen?: boolean;
  actions?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, children, fullscreen, actions }) => {
  if (!open) return null;
  return (
    <div className={`modal${fullscreen ? ' modal-fullscreen' : ''}`}>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-content">
        {children}
        {actions && <div className="modal-actions">{actions}</div>}
      </div>
    </div>
  );
};
