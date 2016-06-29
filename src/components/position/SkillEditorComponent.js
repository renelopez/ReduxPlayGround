'use strict';
import  React, {Component, PropTypes} from 'react';
import SkillComponent from './SkillComponent';
class SkillEditorComponent extends Component {


  state = {
    skills: []
  };

  componentWillReceiveProps(nextProps) {
    let skillForRender=nextProps.skills.map((skill)=>{
      return{
        isEditable:false,
        name:skill
      }
    });
    this.setState({'skills':skillForRender})
  }

  addSkill= () => {
    let skill = {name:'',isEditable:true};
    console.log(this);
    let currentSkillList=this.state.skills;
    currentSkillList.push(skill);
    this.setState({'skills':currentSkillList});
  };

  onSkillClick= (skill)=>{
    
  };
  

  render() {
    let skillList= this.state.skills.map((skillItem)=> {
      return(
          <SkillComponent skill={skillItem} onSkillClick={this.onSkillClick}/>
      )
    });
   
    return (
        <div className="container">
          <button className="btn btn-primary" onClick={this.addSkill}>Add Skill</button>
          {skillList}
        </div>
    )
  }
}


SkillEditorComponent.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSkillEdit: PropTypes.func.isRequired,
  skills: PropTypes.array.isRequired
};

export default SkillEditorComponent;
