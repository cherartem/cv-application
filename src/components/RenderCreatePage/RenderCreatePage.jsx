import { Component } from 'react';
import './styles/styles.css';
import ReactToPrint from 'react-to-print';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Tip } from './components/Tip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

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
        <Tip/>
        <TransformWrapper defaultScale={1} defaulPositionX={100} defaultPositionY={100}>
          <TransformComponent>
            <div className="paper-sheet" ref={el => (this.componentRef = el)}>
              <h1>Hello world</h1>
            </div>
          </TransformComponent>
        </TransformWrapper>
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