//Core
import React from 'react';

const fieldGroup = (props) => {
  return (
    <div>
      <h3>{props.heading}</h3>
      {props.children}
    </div>
  );
};

export default fieldGroup;