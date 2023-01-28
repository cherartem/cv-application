import { Component } from "react";
import { EducationComponent } from "./EducationComponent";

export class EducationMenu extends Component {
  constructor(props) {
    super(props);
  }

  edFactory = () => {
    return {
      uName: '',
      major: '',
      started: '',
      finished: '',
      location: ''
    }
  }

  newEdObj = () => {
    const educationRef = this.props.getState.education;
    educationRef.push(this.edFactory());
    this.props.handleStateChange(this.props.getState, educationRef);
  }

  removeEdObj = (index) => {
    const educationRef = this.props.getState.education;
    educationRef.splice(educationRef[index], 1);
    this.props.handleStateChange(this.props.getState, educationRef);
  }

  renderEdComponents = () => {
    const result = [];
    for (let i = 0; i < this.props.getState.education.length; i++) {
      result.push(
        <div key={i} className="ed-container">
          <EducationComponent index={i} getState={this.props.getState.education[i]} handleStateChange={this.props.handleStateChange} />
          <button onClick={this.removeEdObj}>Remove</button>
        </div>
      );
    }
    return result;
  }

  render() {
    return (
      <div className="education-form-menu">
        <div className="education-list">
          {this.renderEdComponents()}
        </div>
        <button onClick={this.newEdObj}>New</button>
      </div>
    );
  }
}