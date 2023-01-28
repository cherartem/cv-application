import { Component } from "react";
import { DefaultMenu } from "./defaultMenu";
import { EducationMenu } from "./EducationMenu";
import { GeneralMenu } from "./GeneralMenu";
import { ReturnButton } from "./ReturnButton";
import { SkillsMenu } from "./SkillsMenu";
import { WorkExperienceMenu } from "./WorkExperienceMenu";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'default'
    }
  }

  handlePageStateChange = (newState) => {
    this.setState({ page: newState });
  }

  handleRender = () => {
    if (this.state.page === 'default') {
      return (
        <div className="form-content">
          <h1>Set up your CV:</h1>
          <DefaultMenu changeState={this.handlePageStateChange} />
          <button id="download-btn">Download your CV in PDF</button>
        </div>
      );
    } else if (this.state.page === 'general') {
      return (
        <div className="form-content">
          <ReturnButton changeState={this.handlePageStateChange} />
          <GeneralMenu getState={this.props.getState} handleStateChange={this.props.handleStateChange} />
        </div>
      )
    } else if (this.state.page === 'skills') {
      return (
        <div className="form-content">
          <ReturnButton changeState={this.handlePageStateChange} />
          <SkillsMenu getState={this.props.getState} handleStateChange={this.props.handleStateChange} />
        </div>
      );
    } else if (this.state.page === 'education') {
      return (
        <div className="form-content">
          <ReturnButton changeState={this.handlePageStateChange} />
          <EducationMenu getState={this.props.getState} handleStateChange={this.props.handleStateChange} />
        </div>
      );
    } else if (this.state.page === 'workExperience') {
      return (
        <div className="form-content">
          <ReturnButton changeState={this.handlePageStateChange} />
          <WorkExperienceMenu getState={this.props.getState} handleStateChange={this.props.handleStateChange} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="form-container">
        {this.handleRender()}
      </div>
    );
  }
}