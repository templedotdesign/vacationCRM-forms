//Core
import React from 'react';

//CSS
import classes from './validator.css';

const validator = (props) => {
  let valid = null;
  if(props.touched) {
    if(props.valid) {
      valid = (<i className="fa fa-check-circle" aria-hidden="true" style={{color: 'green'}}></i>);
    } else {
      valid = (<i className="fa fa-times-circle" aria-hidden="true" style={{color: 'red'}}></i>);
    }
  }
  return (
    <span className={classes.validator}>{valid}</span>
  );
};

export default validator;
