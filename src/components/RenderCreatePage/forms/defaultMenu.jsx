import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faScrewdriverWrench, faUserGraduate, faBriefcase } from '@fortawesome/free-solid-svg-icons';

export class DefaultMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="default-form-menu">
        <button
          onClick={this.props.changeState('general')}
        >
          <FontAwesomeIcon icon={faUser} />
          <p>General</p>
        </button>
        <button
          onClick={this.props.changeState('skills')}
        >
          <FontAwesomeIcon icon={faScrewdriverWrench} />
          <p>Skills</p>
        </button>
        <button
          onClick={this.props.changeState('education')}
        >
          <FontAwesomeIcon icon={faUserGraduate} />
          <p>Education</p>
        </button>
        <button
          onClick={this.props.changeState('workExperience')}
        >
          <FontAwesomeIcon icon={faBriefcase} />
          <p>Work experience</p>
        </button>
      </div>
    );
  }
}