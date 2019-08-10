import React from 'react';

import './Modal.css';

const modal = props => {
  let classes = ['modal',
    props.show
    ? 'modal--open'
    : 'modal--closed'
  ];
  return (
    <div className={classes.join(' ')}>
      <h1>A Modal</h1>
      <button className='button' onClick={props.closeModalHandler}>Dismiss</button>
    </div>
  );
};

export default modal;