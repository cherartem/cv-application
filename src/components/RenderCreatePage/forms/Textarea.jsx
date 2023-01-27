import { Component } from "react";

export class Textarea extends Component {
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
      <textarea id={this.props.htmlId} value={this.state.text} onChange={this.handleInputChange} ></textarea>
    );
  }
}