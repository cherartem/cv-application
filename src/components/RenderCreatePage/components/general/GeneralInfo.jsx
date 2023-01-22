import { Component } from "react";
import { ContactInfoList } from "./ContactInfoList";
import { FullName } from "./FullName";

class GeneralInfo extends Component {
  render() {
    return (
      <div className="general">
        <FullName />
        <ContactInfoList />
      </div>
    );
  }
}

export { GeneralInfo };