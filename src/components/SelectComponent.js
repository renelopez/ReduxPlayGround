'use strict';
//
import React from 'react';

const Select = ({items, name, nullValue}) => (
var optionItems = items.map((item)=> {
  return <option>item.name</option>
});
return (<select name={name}>
  {optionItems}
</select>)
)

export default Select;
