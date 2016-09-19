'use strict';

export function getCandidatesFormattedForDropdown(state){
  console.log(state);
  return state.map((item)=>{
    return {
      value: item.id,
      text: item.name
    };
  })
}


