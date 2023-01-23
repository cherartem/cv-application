import { Component } from "react";

export class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="showcase-general">
        <div className="general-side-left">
          <p>{this.props.data.linkedInLink}</p>
          <p>{this.props.data.githubLink}</p>
          <p>{this.props.data.personalWebsite}</p>
        </div>
        <div className="name">
          <p>{this.props.data.name}</p>
        </div>
        <div className="general-side-right">
          <p>{this.props.data.email}</p>
          <p>{this.props.data.address}</p>
          <p>{this.props.data.phoneNumber}</p>
        </div>
      </div>
    );
  }
}