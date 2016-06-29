'use strict';
import  React, {Component, PropTypes} from 'react';
import Input from '../common/InputComponent';
import SkillEditor from './SkillEditorComponent';


const PositionFormComponent = ({data, onChange, onSubmit, isLoading,onSkillEdit}) => (


    <form onSubmit={onSubmit}>
      <div className="container-fluid">
        <h3>Details for Position {data.name}</h3>
        <Input label='Name' name="name" type="text" cssClass="form-control" value={data.name}
               onChange={onChange}/>
        <Input label='Description' name="description" type="text" cssClass="form-control" value={data.description}
               onChange={onChange}/>
        <SkillEditor label='currentSkills' name="skillEditor" onSkillEdit={onSkillEdit} skills={data.skills} />
        
        <input type="submit"
               className="btn btn-default"
               value={isLoading ?'Saving...':'Save'}
               disabled={isLoading}/>
      </div>
    </form>
);

PositionFormComponent.propTypes = {
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  options: PropTypes.array.isRequired
};

export default PositionFormComponent;
