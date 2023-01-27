import { Component } from "react";

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.value
    }
  }

  handleInputChange = async (e) => {
    await this.setState({ text: e.target.value });
    const objRef = this.props.getState;
    objRef[this.props.edit] = this.state.text;
    this.props.handleStateChange(this.props.getState, objRef);
  }

  render() {
    return (
      <input id={this.props.htmlId} value={this.state.text} type={this.props.t} onChange={this.handleInputChange} />
    );
  }
}