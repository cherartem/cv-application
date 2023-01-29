import { Component } from "react";
import { WorkComponent } from "./WorkComponent";
import { v4 as uuidv4 } from 'uuid';

export class WorkExperienceMenu extends Component {
  constructor(props) {
    super(props);
  }

  workFactory = () => {
    return {
      companyName: '',
      title: '',
      started: '',
      finished: '',
      location: '',
      description: []
    }
  }

  newWorkObj = () => {
    const workRef = this.props.getState.workExperience;
    workRef.push({
      ...this.workFactory(),
      id: uuidv4()
    });
    this.props.handleStateChange(this.props.getState, workRef);
  }

  removeWorkObj = (index) => {
    const workRef = this.props.getState.workExperience;
    workRef.splice(index, 1);
    this.props.handleStateChange(this.props.getState, workRef);
  }

  renderWorkComponents = () => {
    const workExperienceRef = this.props.getState.workExperience;
    return workExperienceRef.map((work, index) => (
      <div key={work.id} className="work-container">
        <WorkComponent index={index} getState={work} handleStateChange={this.props.handleStateChange} />
        <button onClick={() => this.removeWorkObj(index)}>Remove</button>
      </div>
    ));
  }

  render() {
    return (
      <div className="work-experience-form-menu">
        <div className="work-list">
          {this.renderWorkComponents()}
        </div>
        <button onClick={this.newWorkObj} >New</button>
      </div>
    );
  }
}