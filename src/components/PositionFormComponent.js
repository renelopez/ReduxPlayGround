'use strict';
import  React, {Component, PropTypes} from 'react';
import Input from './InputComponent';


class PositionFormComponent extends Component {

  state = {
    id:'',
    name:'',
    hardSkills:[],
    softSkills:[],
    yearsOfExperience:null
  };

  componentWillReceiveProps=(nextProps) => {
    if(nextProps.isEdit) {
      this.setState({
        'id': nextProps.data.id,
        'name': nextProps.data.name,
        'hardSkills': nextProps.data.position,
        'softSkills': nextProps.data.candidate,
        'yearsOfExperience': nextProps.data.reviewer
      });
    }
  };

  onChange = (name,value) => {
      let currentState=this.state;
      currentState[name]=value;
      this.setState(currentState);
  };

  onSubmit=(event) =>{
    event.preventDefault();
    if(this.props.isEdit) {
      this.setState({creationDate: new Date().toLocaleDateString()});
    }
    else{
      this.setState({editionDate:new Date().toLocaleDateString()})
    }
    this.props.onSubmit(this.state);
  };

  render() {
    return(
          <form onSubmit={this.onSubmit}>
            <div className="container-fluid">
              <h3>Details for Feedback {this.state.name}</h3>
              <Input label='Name' name="name" type="text" cssClass="form-control" value={this.state.name} onChange={this.onChange} />
              <Input label='Place the name of the hard skill you know' name="hardSkill" type="text" cssClass="form-control" value={this.state.hardSkills} onChange={this.onChange} />
              <Input label='Place the name of the soft skill you know' name="softSkill" type="text" cssClass="form-control" value={this.state.softSkills} onChange={this.onChange} />
              <Input label='Years of Experience' name="yearsOfExperience" type="number" cssClass="form-control" value={this.state.candidate} onChange={this.onChange} />
              <input type="submit" className="btn btn-default" />
            </div>
          </form>
    )
  }
}

export default PositionFormComponent;
