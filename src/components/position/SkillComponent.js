'use strict';
import  React, {Component, PropTypes} from 'react';


const SkillComponent = ({skill}) => {
  let skillToRender;
  if (skill.isEditable) {
    skillToRender = <input type="text" value={skill.name}/>
  }
  else{
    skillToRender = <span>{skill.name}</span>
  }
  return (
      <div className="container">
        <div className="well">
          {skillToRender}
        </div>
      </div>
  )
};

SkillComponent.propTypes = {
  skill: PropTypes.object.isRequired
};


export default SkillComponent;
