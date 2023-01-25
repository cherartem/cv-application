import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="showcase-general">
        <div className="general-side-left">
          <p><FontAwesomeIcon icon={faLinkedin} /> {this.props.data.linkedInLink}</p>
          <p><FontAwesomeIcon icon={faGithub} /> {this.props.data.githubLink}</p>
          <p><FontAwesomeIcon icon={faGlobe} /> {this.props.data.personalWebsite}</p>
        </div>
        <div className="name">
          <p>{this.props.data.name}</p>
        </div>
        <div className="general-side-right">
          <p>{this.props.data.email} <FontAwesomeIcon icon={faEnvelope} /></p>
          <p>{this.props.data.address} <FontAwesomeIcon icon={faLocationDot} /></p>
          <p>{this.props.data.phoneNumber} <FontAwesomeIcon icon={faPhone} /></p>
        </div>
      </div>
    );
  }
}