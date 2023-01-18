import { Component } from "react";

class EditableComponent extends Component {
  constructor(props) {
    super(props);
    this.StartEditing = this.StartEditing.bind(this);
    this.SaveEditing = this.SaveEditing.bind(this);
    this.state = {
      editing: false
    }
  }
  
  StartEditing() {
    this.setState({ editing: true });
  }

  SaveEditing() {
    this.setState({ editing: false });
  }

  render() {
    if (this.state.editing === true) {
      return (
        <div className={"editable-component" + ' ' + this.props.class} onMouseEnter={() => this.StartEditing()} onMouseLeave={() => this.SaveEditing()}>
          {this.props.EditingElement()}
        </div>
      );
    } else {
      return (
        <div className={"editable-component" + ' ' + this.props.class} onMouseEnter={() => this.StartEditing()} onMouseLeave={() => this.SaveEditing()}>
          {this.props.Element()}
        </div>
      );
    }
  }
}

export { EditableComponent };