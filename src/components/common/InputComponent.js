'use strict';
import React from 'react';


let Input = ({type,name,cssClass,label,onChange,value}) => (
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

export default Input;
