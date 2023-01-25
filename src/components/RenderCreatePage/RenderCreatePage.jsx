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
        name: 'Chernysh Artem',
        email: 'artem138927@gmail.com',
        phoneNumber: '+1 123 1234',
        address: 'San Francisco, CA',
        linkedInLink: 'https://github.com/TemaTech',
        githubLink: 'https://github.com/TemaTech',
        personalWebsite: 'https://github.com/TemaTech'
      },
      skills: 'JavaScript, React.js, HTML, CSS, SASS, Webpack, Babel, Node, npm, git, GitHub, Web Development, Frontend development',
      education: {
        ed1: {
          uName: 'University of Washington',
          major: 'B.S., Computer Science',
          started: 'August 2004',
          finished: 'May 2008',
          location: 'Seattle, WA'
        },
        ed2: {
          uName: 'University of Washington',
          major: 'B.S., Computer Science',
          started: 'August 2004',
          finished: 'May 2008',
          location: 'Seattle, WA'
        }
      },
      workExperience: {
        w1: {
          companyName: 'Twitter',
          title: 'Senior Software Engineer',
          started: 'October 2016',
          finished: 'current',
          location: 'San Francisco, CA',
          description: [
            'Built and maintained application that scaled to 2M daily users, communicating with cross-functional teams regarding product and design',
            'Built and maintained application that scaled to 2M daily users, communicating with cross-functional teams regarding product and design',
            'Built and maintained application that scaled to 2M daily users, communicating with cross-functional teams regarding product and design'
          ]
        },
        w2: {
          companyName: 'Twitter',
          title: 'Senior Software Engineer',
          started: 'October 2016',
          finished: 'current',
          location: 'San Francisco, CA',
          description: [
            'Built and maintained application that scaled to 2M daily users, communicating with cross-functional teams regarding product and design',
            'Built and maintained application that scaled to 2M daily users, communicating with cross-functional teams regarding product and design',
            'Built and maintained application that scaled to 2M daily users, communicating with cross-functional teams regarding product and design'
          ]
        },
        w3: {
          companyName: 'Twitter',
          title: 'Senior Software Engineer',
          started: 'October 2016',
          finished: 'current',
          location: 'San Francisco, CA',
          description: [
            'Built and maintained application that scaled to 2M daily users, communicating with cross-functional teams regarding product and design',
            'Built and maintained application that scaled to 2M daily users, communicating with cross-functional teams regarding product and design',
            'Built and maintained application that scaled to 2M daily users, communicating with cross-functional teams regarding product and design'
          ]
        },
      }
    }
  }

  render () {
    return (
      <div className="container">
        <div className="form-container">
          <Main/>
        </div>
        <div className="showcase">
          <div className="paper-sheet">
            <General data={this.state.general} />
            <Skills data={this.state.skills} />
            <Education data={this.state.education} />
            <WorkExperience data={this.state.workExperience} />
          </div>
        </div>
      </div>
    );
  }
}

export { RenderCreatePage };