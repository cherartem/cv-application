import { Component } from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

export class WorkComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-el">
        <div>
          <label htmlFor={"companyName" + this.props.index}>Company name</label>
          <Input
            htmlId={"companyName" + this.props.index}
            getState={this.props.getState}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.companyName}
            t="text"
            edit='companyName'
          />
        </div>
        <div>
          <label htmlFor={"title" + this.props.index}>Position</label>
          <Input
            htmlId={"title" + this.props.index}
            getState={this.props.getState}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.title}
            t="text"
            edit='title'
          />
        </div>
        <div>
          <label htmlFor={"started" + this.props.index}>Started working (month and year)</label>
          <Input
            htmlId={"started" + this.props.index}
            getState={this.props.getState}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.started}
            t="text"
            edit='started'
          />
        </div>
        <div>
          <label htmlFor={"finished" + this.props.index}>Finished working (month and year / current)</label>
          <Input
            htmlId={"finished" + this.props.index}
            getState={this.props.getState}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.finished}
            t="text"
            edit='finished'
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
            edit='location'
          />
        </div>
        <div>
          <label htmlFor={"description" + this.props.index}>Description</label>
          <Textarea
            htmlId={"description" + this.props.index}
            getState={this.props.getState}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.description}
            edit='description' 
          />
        </div>
      </div>
    );
  }
}