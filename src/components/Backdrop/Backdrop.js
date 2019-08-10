import React from 'react';

import './Backdrop.css';

const backdrop = props => {
  let classes = ['backdrop',
    props.show
      ? 'backdrop--open'
      : 'backdrop--closed'
  ];
  return (
    <div className={classes.join(' ')}></div>
  );
};

export default backdrop;