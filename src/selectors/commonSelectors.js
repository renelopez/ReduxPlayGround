'use strict';

export function getItemById(module,id){
  return module.byId[id];
}

export function getAllItems(module){
  return module.allIds.map((id)=>{
    return module.byId[id];
  });
}

