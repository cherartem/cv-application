import { Component } from "react";

export class Skills extends Component {
  render() {
    return (
      <div className="showcase-skills">
        <div className="sector-header">
          <p>Skills</p>
          <hr />
        </div>
        <p>{this.props.data}</p>
      </div>
    );
  }
}