import { Component } from 'react';
import './styles/styles.css';
import { Education } from './showcase/education/Education';
import { General } from './showcase/general/General';
import { Skills } from './showcase/skills/Skills';
import { WorkExperience } from './showcase/workExperience/WorkExperience';
import { Main } from './forms/main';

class RenderCreatePage extends Component {
  constructor() {
    super();
    this.state = {
      general: {
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        linkedInLink: '',
        githubLink: '',
        personalWebsite: ''
      },
      skills: {
        skillsList: '',
      },
      education: [],
      workExperience: []
    }
  }

  handleStateChange = (state, newData) => {
    this.setState({ [state]: newData });
  }

  render () {
    return (
      <div className="container">
        <div className="content">
          <Main getState={this.state} handleStateChange={this.handleStateChange} />
        </div>
        <div className="showcase">
          <div className="paper-sheet"> 
            <General data={this.state.general} />
            <Skills data={this.state.skills.skillsList} />
            <Education data={this.state.education} />
            <WorkExperience data={this.state.workExperience} />
          </div>
        </div>
      </div>
    );
  }
}

export { RenderCreatePage };