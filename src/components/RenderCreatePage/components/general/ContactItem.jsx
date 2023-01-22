import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';

class ContactItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      text: this.props.item
    }
  }

  handleMouseEnter = () => {
    this.setState({ isEditing: true });
  }

  handleMouseLeave = () => {
    this.setState({ isEditing: false });
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSave = () => {
    const oldItem = this.props.item;
    const newItem = this.state.text ? this.state.text : 'New';
    this.props.changeItem(oldItem, newItem);
  }

  returnElement = () => {
    if (this.state.isEditing === false) {
      return (
        <div
          onMouseLeave={this.handleMouseLeave}
          onMouseEnter={this.handleMouseEnter}
        >
          <p>{this.props.item}</p>
        </div>
      );
    } else {
      return (
        <div
          onMouseLeave={this.handleMouseLeave}
          onMouseEnter={this.handleMouseEnter}
        >
          <input
            type="text" 
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button onClick={() => this.handleSave()}><FontAwesomeIcon icon={faSave} /> Save</button>
          <button onClick={() => this.props.removeItem(this.props.removeItem(this.props.item))}><FontAwesomeIcon icon={faRemove} /> Remove</button>
        </div>
      );
    }
  }

  render() {
    return (
      <li>
        {this.returnElement()}
      </li>
    );
  }
}

export { ContactItem };