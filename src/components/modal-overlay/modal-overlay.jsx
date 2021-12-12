import overlayStyles from './modal-overlay.module.css';
import React from 'react';

export const ModalOverlay = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={overlayStyles.overlay}>
    </div>
  )
})
