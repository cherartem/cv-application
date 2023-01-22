import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { ContactItem } from "./ContactItem";

class ContactInfoList extends Component {
  constructor() {
    super();
    this.state = {
      list: new Set(['[ Phone number ]', '[ E-Mail Address ]', '[ Personal Website ]', '[ GitHub Profile ]']),
      isEditing: false
    }
  }

  handleMouseEnter = () => {
    this.setState({ isEditing: true });
  }

  handleMouseLeave = () => {
    this.setState({ isEditing: false });
  }

  removeItem = (item) => {
    const setRef = this.state.list;
    setRef.delete(item);
    this.setState({ list: setRef });
  }

  addItem = (item) => {
    const setRef = this.state.list;
    setRef.add(item);
    this.setState({ list: setRef });
  }

  changeItem = (oldItem, newItem) => {
    let setRef = this.state.list;
    let index = [...setRef].indexOf(oldItem);
    let arraySet = Array.from(setRef);
    arraySet.splice(index, 1, newItem);
    setRef = new Set(arraySet);
    this.setState({ list: setRef });
  }
  
  renderList = () => {
    const result = [];
    for (const item of this.state.list.values()) {
      result.push(
        <ContactItem key={item} item={item} changeItem={this.changeItem} removeItem={this.removeItem} />
      );
    }
    return result;
  }

  renderAll = () => {
    if (this.state.isEditing) {
      return (
        <ul>
          {this.renderList()}
          <li><button onClick={() => this.addItem('New')}>Add +</button></li>
        </ul>
      );
    } else {
      return (
        <ul>
          {this.renderList()}
        </ul>
      );
    }
  }

  render() {
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.renderAll()}
      </div>
    );
  }
}

export { ContactInfoList };