'use strict';
import React, {PropTypes} from 'react';


const Input = ({type,name,cssClass,label,onChange,value}) => (
    <div className="form-group">
      <div className="row">
        <div className="col-md-1">
          <label htmlFor={name}>{label}</label>
        </div>
        <div className="col-md-11">
          <input type={type} name={name} className={cssClass} value={value} onChange={(event)=>{onChange(event.target.name,event.target.value)}}/>
        </div>
      </div>
    </div>
);

Input.propTypes={
  type:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  cssClass:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  value:PropTypes.string
};

export default Input;
