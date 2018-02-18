//Core
import React from 'react';

//Components
import Validator from '../validator/validator';

//CSS
import classes from './field.css';

const field = (props) => {
  let label = null;
  if(props.required) {
    label = (
      <label className={classes.bold}>{props.label}</label>
    );
  } else {
    label = (
      <label>{props.label}</label>
    );  
  }

  let input = null;
  if(props.elementType) {
    switch(props.elementType) {
      case 'input':
        input = (<input {...props.attributes} value={props.value} onChange={props.changed}/>);
        break;
      case 'textarea':
        input = (<textarea {...props.attributes} value={props.value} onChange={props.changed}/>);
        break;
      case 'select':
        input = (
          <select {...props.attributes} value={props.value} onChange={props.changed}>
          {props.options.map(option => (
            <option key={option.value} value={option.value}>{option.name}</option>
          ))}
          </select>
        );
        break;
      default:
        console.error("Components/Forms/Field::Unrecognized Element Type") 
        break;
    }
  } else {
    console.error("Components/Forms/Field::Element Type Not Set")
  }
  return(
    <div className={classes.field}>
      {label}
      <div className={classes.row}>
        {input}
        <Validator valid={props.valid} touched={props.touched}/>
      </div>
    </div>
  );
};

export default field;