import { Component } from "react";
import { Input } from "./Input";

export class EducationComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ed-el">
        <div>
          <label htmlFor={"uName" + this.props.index}>University name</label>
          <Input
            htmlId={"uName" + this.props.index}
            getState={this.props.getState}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.uName}
            t="text"
            edit="uName"
          />
        </div>
        <div>
          <label htmlFor={"major" + this.props.index}>Major</label>
          <Input
            htmlId={"major" + this.props.index}
            getState={this.props.getState}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.major}
            t="text"
            edit="major"
          />
        </div>
        <div>
          <label htmlFor={"started" + this.props.index}>Enrollment date (month and year)</label>
          <Input
            htmlId={"started" + this.props.index}
            getState={this.props.getState}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.started}
            t="text"
            edit="started"
          />
        </div>
        <div>
          <label htmlFor={"finished" + this.props.index}>Graduation date (month and year / current)</label>
          <Input
            htmlId={"finished" + this.props.index}
            getState={this.props.getState}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.finished}
            t="text"
            edit="finished"
          />
        </div>
        <div>
          <label htmlFor={"city" + this.props.index}>City, state or country</label>
          <Input
            htmlId={"city" + this.props.index}
            getState={this.props.getState}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.location}
            t="text"
            edit="location"
          />
        </div>
      </div>
    );
  }
}