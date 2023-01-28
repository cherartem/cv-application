import { Component } from "react";

export class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }

  renderWork = () => {
    const result = [];
    for (let obj in this.props.data) {
      result.push(
        <div className="w-block" key={obj}>
          <p id="w-title">{this.props.data[obj].companyName} - {this.props.data[obj].title}</p>
          <div className="duration-location">
            <p>{this.props.data[obj].started} - {this.props.data[obj].finished}</p>
            <p>{this.props.data[obj].location}</p>
          </div>
          <ul className="description">
            <li>{this.props.data[obj].description}</li>
          </ul>
        </div>
      );
    }
    return result;
  }

  render() {
    return (
      <div className="showcase-work-experience">
        <div className="sector-header">
          <p>Work Experience</p>
          <hr />
        </div>
        <div className="work-experience">
          {this.renderWork()}
        </div>
      </div>
    );
  }
}