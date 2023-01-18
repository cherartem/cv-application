import { Component } from 'react';
import './styles/styles.css';
import ReactToPrint from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { General } from './components/General';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';

class RenderCreatePage extends Component {
  constructor() {
    super();
    this.generatePDF = this.generatePDF.bind(this);
  }

  generatePDF() {
    console.log('hello')
  }

  render () {
    return (
      <div className="container">
        <div className="paper-sheet" ref={el => (this.componentRef = el)}>
          <General/>
          <Skills/>
          <Experience/>
          <Education/>
          <Projects/>
        </div>
        <div className="final-buttons-container">
          <button><FontAwesomeIcon icon={faRemove} />Reset All</button>
          <ReactToPrint
            trigger={() => { return (<button><FontAwesomeIcon icon={faSave} />Download as a PDF</button>) }}
            content={() => this.componentRef}
            documentTitle='CV'
          />
        </div>
      </div>
    );
  }
}

export { RenderCreatePage };