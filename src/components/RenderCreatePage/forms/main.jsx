import { Component } from "react";
import { DefaultMenu } from "./defaultMenu";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      page: 'default'
    }
  }

  handlePageStateChange = (newState) => {
    this.setState({ page: newState });
  }

  renderDefault = () => {
    return (
      <div className="form-content">
        <h1>Set up your CV:</h1>
        <DefaultMenu changeState={this.handlePageStateChange} />
      </div>
    );
  }

  handleRender = () => {
    if (this.state.page === 'default') {
      return this.renderDefault();
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