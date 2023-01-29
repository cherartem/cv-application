import { Component } from "react";
import { Textarea } from "./Textarea";

export class SkillsMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skills-form-menu">
        <div>
          <label htmlFor="skills-textarea">Skills for this job position</label>
          <Textarea
            htmlId="skills-textarea"
            getState={this.props.getState.skills}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.skills.skillsList}
            edit='skillsList'
          />
        </div>
      </div>
    );
  }
}