import { Component } from "react";
import { EditableComponent } from "./EditableComponent";

class General extends Component {
  constructor() {
    super();
    this.Element = this.Element.bind(this);
    this.EditingElement = this.EditingElement.bind(this);
  }

  Element() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }

  EditingElement() {
    return (
      <input type="text" />
    );
  }

  render() {
    return (
      <div className="general-container">
        <EditableComponent 
          Element={() => this.Element()}
          EditingElement={() => this.EditingElement()}
          class=""
        />
      </div>
    );
  }
}

export { General };