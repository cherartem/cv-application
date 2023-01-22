import { Component } from "react";

class FullName extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      name: 'Your full name'
    }
  }

  handleMouseEnter = () => {
    this.setState({ isEditing: true });
  }

  handleMouseLeave = () => {
    this.setState({ isEditing: false });
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div
      className="fullNameContainer"
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
      >
        {this.state.isEditing ?
          <input type="text" placeholder="Your full name..." value={this.state.name} onChange={this.handleChange}/>
          :
          <p>{this.state.name ? this.state.name : 'Your full name'}</p>
        }
      </div>
    );
  }
}

export { FullName };