import { Component } from "react";
import { EducationComponent } from "./EducationComponent";
import { v4 as uuidv4 } from 'uuid';

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
    educationRef.push({
      ...this.edFactory(),
      id: uuidv4()
    });
    this.props.handleStateChange(this.props.getState, educationRef);
  }

  removeEdObj = (index) => {
    const educationRef = this.props.getState.education;
    educationRef.splice(index, 1);
    this.props.handleStateChange(this.props.getState, educationRef);
  }

  renderEdComponents = () => {
    const educationRef = this.props.getState.education;
    return educationRef.map((education, index) => (
      <div key={education.id} className="ed-container">
        <EducationComponent index={index} getState={education} handleStateChange={this.props.handleStateChange} />
        <button id="rm-ed-btn" onClick={() => this.removeEdObj(index)}>Remove</button>
      </div>
    ));
  }  

  render() {
    return (
      <div className="education-form-menu">
        <div className="education-list">
          {this.renderEdComponents()}
        </div>
        <button id="new-ed-btn" onClick={this.newEdObj}>+ Add</button>
      </div>
    );
  }
}