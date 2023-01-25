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

  handleRender = () => {
    if (this.state.page === 'default') {
      return (
        <div className="form-content">
          <h1>Set up your CV:</h1>
          <DefaultMenu changeState={this.handlePageStateChange} />
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