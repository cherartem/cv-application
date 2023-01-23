import { Component } from 'react';
import './styles/styles.css';
import { Education } from './showcase/education/Education';
import { General } from './showcase/general/General';
import { PersonalProjects } from './showcase/personalProjects/PersonalProjects';
import { Skills } from './showcase/skills/Skills';
import { WorkExperience } from './showcase/workExperience/WorkExperience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

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
          duration: 'August 2004 - May 2008'
        },
        ed2: {
          uName: 'University of Washington',
          major: 'B.S., Computer Science',
          duration: 'August 2004 - May 2008'
        }
      },
      workExperience: {
        w1: {
          companyName: 'Twitter',
          title: 'Senior Software Engineer',
          duration: 'October 2016 - current',
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
          duration: 'October 2016 - current',
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
          duration: 'October 2016 - current',
          location: 'San Francisco, CA',
          description: [
            'Built and maintained application that scaled to 2M daily users, communicating with cross-functional teams regarding product and design',
            'Built and maintained application that scaled to 2M daily users, communicating with cross-functional teams regarding product and design',
            'Built and maintained application that scaled to 2M daily users, communicating with cross-functional teams regarding product and design'
          ]
        }
      },
      personalProjects: {
        p1: {
          name: 'YouTube',
          description: 'Built and maintained application that scaled to 2M daily users, communicating with cross-functional teams regarding product and design'
        },
        p2: {
          name: 'YouTube',
          description: 'Built and maintained application that scaled to 2M daily users, communicating with cross-functional teams regarding product and design'
        }
      }
    }
  }

  render () {
    return (
      <div className="container">
        <div className="form-container">
          
        </div>

        <div className="showcase">
          <div className="paper-sheet">
            <General data={this.state.general} />
            <Skills data={this.state.skills} />
            <Education data={this.state.education} />
            <WorkExperience data={this.state.workExperience} />
            <PersonalProjects data={this.state.personalProjects} />
          </div>
        </div>
      </div>
    );
  }
}

export { RenderCreatePage };