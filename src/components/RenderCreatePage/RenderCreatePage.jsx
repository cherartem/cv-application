import { Component } from 'react';
import './styles/styles.css';
import ReactToPrint from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { GeneralInfo } from './components/general/GeneralInfo';

class RenderCreatePage extends Component {
  render () {
    return (
      <div className="container">
        <div className="paper-sheet" ref={el => (this.componentRef = el)}>
          <GeneralInfo/>
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