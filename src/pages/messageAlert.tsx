import React from 'react';

interface MessageAlertProps {
  type: 'success' | 'danger' | null; // Add more types like 'warning', 'info' if needed
  message: string;
  onClose?: () => void;
}

const icons = {
  success: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
      className="bi bi-check-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.08 0l3.992-3.993a.75.75 0 1 0-1.06-1.06L7.5 9.439 5.522 7.47a.75.75 0 0 0-1.044 1.08l2.492 2.48z"/>
    </svg>
  ),
  danger: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
      className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.964 0L.165 13.233c-.457.778.091 
        1.767.982 1.767h13.707c.89 0 1.438-.99.982-1.767L8.982 1.566zM8 
        5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 
        1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 
        6a1 1 0 1 1-2.002 0 1 1 0 0 1 2.002 0z"/>
    </svg>
  ),
};

const MessageAlert: React.FC<MessageAlertProps> = ({ type, message, onClose }) => {
  if (!message) return null;

  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show d-flex align-items-center gap-2 top-0 start-50 translate-middle-x mt-3`}
      style={{ zIndex: 1050, width: 'fit-content', minWidth: '100%' }}
      role="alert"
    >
      {type && icons[type]}
      <span>{message}</span>
      {onClose && (
        <button type="button" className="btn-close ms-auto" onClick={onClose}></button>
      )}
    </div>
  );
};

export default MessageAlert;
