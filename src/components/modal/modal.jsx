import ReactDOM from "react-dom";

import popupStyles from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export function Modal(props) {
  const modalRoot = document.getElementById('modal-root');

  function closeModals(evt) {
    (evt.target === 'Escape' || evt.target.classList.contains('overlay')) && props.closeByClick()
  }



  return ReactDOM.createPortal(
    (
      <div className={popupStyles.modal} >
        <div className='mt-10 mr-10 ml-10' >
          {props.headerText && <h2 className={props.modalStyles} >{props.headerText}</h2>}
          <CloseIcon type='primary' onClick={props.closeByClick} />
        </div>
        {props.children}
      </div>

    ), modalRoot
  )
}
