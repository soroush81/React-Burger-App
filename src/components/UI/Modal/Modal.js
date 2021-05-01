import React, { useEffect } from 'react';
import './Modal.css'
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop'

const Modal = props => {
  useEffect(() => {
    console.log('it did update');
  });

  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.ModalClosed} />
      <div className="Modal" style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
        {props.children}
      </div>
    </React.Fragment>);
}

export default React.memo(Modal, (prevProps, nextProps) => (prevProps.show === nextProps.show && nextProps.children === prevProps.children));