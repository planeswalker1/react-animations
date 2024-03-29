import React from 'react';
import {CSSTransition} from 'react-transition-group';

import './Modal.css';

const animationTiming = {
  enter: 400,
  exit: 1000
};

const modal = props => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: '',
        enterActive: 'modal--open',
        exit: '',
        exitActive: 'modal--close'
      }}
    >
      <div className="modal">
        <h1>A Modal</h1>
        <button className='button' onClick={props.closeModalHandler}>Dismiss</button>
      </div>
    </CSSTransition>
  );
};

export default modal;