import { Component } from 'react';
import './styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Info extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="header">
          <h1>About</h1>
          <hr />
        </div>
        <div className="about-block">
          <h3>AceCV</h3>
          <p>
            Unleash your full potential and land your dream job as a software engineer with this cutting-edge app. Create a custom-tailored CV that's guaranteed to make you stand out and secure your spot in the industry.
          </p>
        </div>
        <div className="about-block">
          <h3>A little bit more</h3>
          <p>
            Step up your job hunting game with our sleek and efficient CV creator. Designed specifically for software engineers, this app streamlines the resume building process, cutting out all the fluff and getting straight to the point. Because let's face it, in today's fast-paced job market, recruiters only spend a mere 7 seconds scanning your CV. With our app, you'll be able to showcase all the key information that recruiters are looking for, including your general information, skills, work experience, education, and more. Say goodbye to the tedious task of crafting the perfect CV and hello to landing that dream job in no time.
          </p>
        </div>
        <div className="about-block">
          <h3>Technologies that've been used to create this app:</h3>
          <ul>
            <li>JavaScript</li>
            <li>React js</li>
            <li>SASS</li>
          </ul>
        </div>
        <div className="credits">
          <a href="https://github.com/TemaTech" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://twitter.com/cherrartem" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>
    );
  }
}

export { Info };