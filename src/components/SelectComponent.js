'use strict';
//
import React,{PropTypes} from 'react';

const Select = ({name, label, onChange, defaultOption, value, error, options}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}></label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control">
          <option value="">{defaultOption}</option>
          {options.map((option=> {
              return <option key={option.value}>{option.text}</option>
            })
          )}
        </select>
        {error && <div className="alert alert-danger">{error}</div> }
      </div>
    </div>
  );
};

Select.propTypes={
  name:PropTypes.string.isRequired,  
  label:PropTypes.string.isRequired,  
  onChange:PropTypes.func.isRequired,  
  defaultOption:PropTypes.string,  
  value:PropTypes.string,  
  error:PropTypes.string,  
  option:PropTypes.arrayOf(PropTypes.object) 
};


export default Select;
