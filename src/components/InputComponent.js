/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
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
