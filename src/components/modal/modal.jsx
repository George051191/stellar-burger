import ReactDOM from "react-dom";
import React from "react";
import popupStyles from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { useEffect } from "react";

export function Modal(props) {
  const modalRef = React.useRef();
  const modalRoot = document.getElementById('modal-root');

  ///закрытие попапа по нажатию на Esc
  function closeByEsc(evt) {
    evt.key === 'Escape' && props.closeModal()
  }
  ///закрытие попапа по нажатию на оверлей
  function closeByClickOverlay(evt) {
    evt.target === modalRef.current && props.closeModal()

  }

  useEffect(() => {
    document.addEventListener('keydown', closeByEsc)

    return () => {
      document.removeEventListener('keydown', closeByEsc)

    }
  })

  return ReactDOM.createPortal(
    (<div className={popupStyles.popup} onClick={(evt) => { closeByClickOverlay(evt) }} >
      <ModalOverlay ref={modalRef} />
      <div className={popupStyles.modal} >
        <div className={props.modalHeaderStyles} >
          {props.headerText && <h2 className={props.modalStyles} >{props.headerText}</h2>}
          <div className={popupStyles.popup__closeicon}><CloseIcon type='primary' onClick={props.closeModal} /></div>
        </div>
        {props.children}
      </div>
    </div>
    ), modalRoot)
}
