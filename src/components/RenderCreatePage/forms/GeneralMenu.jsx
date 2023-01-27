import { Component } from "react";
import { Input } from "./Input";

export class GeneralMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="general-form-menu">
        <div>
          <label htmlFor="name-input">Full name</label>
          <Input
            htmlId="name-input"
            getState={this.props.getState.general}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.general.name}
            t="text"
            edit='name'
          />
        </div>
        <div>
          <label htmlFor="email-input">Email</label>
          <Input
            htmlId="email-input"
            getState={this.props.getState.general}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.general.email}
            t="email"
            edit='email'
          />
        </div>
        <div>
          <label htmlFor="address-input">Address</label>
          <Input
            htmlId="address-input"
            getState={this.props.getState.general}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.general.address}
            t="text"
            edit='address'
          />
        </div>
        <div>
          <label htmlFor="phoneNumber-input">Phone number</label>
          <Input
            htmlId="phoneNumber-input"
            getState={this.props.getState.general}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.general.phoneNumber}
            t="tel"
            edit='phoneNumber'
          />
        </div>
        <div>
          <label htmlFor="linkedIn-input">LinkedIn profile</label>
          <Input
            htmlId="linkedIn-input"
            getState={this.props.getState.general}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.general.linkedInLink}
            t="url"
            edit='linkedInLink'
          />
        </div>
        <div>
          <label htmlFor="github-input">GitHub profile</label>
          <Input
            htmlId="github-input"
            getState={this.props.getState.general}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.general.githubLink}
            t="url"
            edit='githubLink'
          />
        </div>
        <div>
          <label htmlFor="personalWebsite-input">Personal Website</label>
          <Input
            htmlId="personalWebsite-input"
            getState={this.props.getState.general}
            handleStateChange={this.props.handleStateChange}
            value={this.props.getState.general.personalWebsite}
            t="url"
            edit='personalWebsite'
          />
        </div>
      </div>
    );
  }
}