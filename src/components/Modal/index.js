import { createPortal } from 'react-dom';
import './Modal.scss';

const Modal = ({ children , onClose}) => {
  return createPortal(
    <div className="Modal">
      <div className="backdrop" onClick={onClose}/>
      <div className="content">{children}</div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal