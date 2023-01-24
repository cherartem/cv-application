import { Component } from "react";

export class Education extends Component {
  constructor(props) {
    super(props);
  }

  renderEducation = () => {
    const result = [];
    for (let obj in this.props.data) {
      result.push(
        <div className="ed-block" key={obj}>
          <p id="u-title">{this.props.data[obj].uName} - {this.props.data[obj].major}</p>
          <div className="duration-location">
            <p>{this.props.data[obj].started} - {this.props.data[obj].finished}</p>
            <p>{this.props.data[obj].location}</p>
          </div>
        </div>
      );
    }
    return result;
  }

  render() {
    return (
      <div className="showcase-education">
        <div className="sector-header">
          <p>Education</p>
          <hr />
        </div>
        <div className="education">
          {this.renderEducation()}
        </div>
      </div>
    );
  }
}