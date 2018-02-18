//Core
import React from 'react';

//CSS
import classes from './notification.css';

const notification = (props) => {
  let attachedClasses = [classes.notification];
  if(props.success) {
    attachedClasses.push(classes.green)
  } else {
    attachedClasses.push(classes.red)
  } 
  return(
    <div className={attachedClasses.join(' ')}>
      <h3 style={{color: 'white'}}>{props.text}</h3>
    </div>
  );
};

export default notification;