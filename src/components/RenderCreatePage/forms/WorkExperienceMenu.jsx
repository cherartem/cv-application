import { Component } from "react";
import { WorkComponent } from "./WorkComponent";

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
    workRef.push(this.workFactory());
    this.props.handleStateChange(this.props.getState, workRef);
  }

  removeWorkObj = (index) => {
    const workRef = this.props.getState.workExperience;
    workRef.splice(workRef[index], 1);
    this.props.handleStateChange(this.props.getState, workRef);
  }

  renderWorkComponents = () => {
    const result = [];
    for (let i = 0; i < this.props.getState.workExperience.length; i++) {
      result.push(
        <div key={i} className="work-container">
          <WorkComponent index={i} getState={this.props.getState.workExperience[i]} handleStateChange={this.props.handleStateChange} />
          <button onClick={this.removeWorkObj}>Remove</button>
        </div>
      );
    }
    return result;
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