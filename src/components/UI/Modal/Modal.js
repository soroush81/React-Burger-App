import React from 'react';
import './Modal.css'
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {
  console.log('oooooh:' + props.show)
  return (
    <Auxiliary>
      <Backdrop show={props.show} clicked={props.ModalClosed}/>
      <div className="Modal" style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
        {props.children}
      </div>
    </Auxiliary>);
};

export default Modal;