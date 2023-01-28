import { Component } from 'react';
import './styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <button className="title" onClick={() => window.location.reload()}><h1><span><FontAwesomeIcon icon={faFile} /></span> AceCV</h1></button>
        <div className="buttons">
          <button
            onClick={() => this.props.createPage()}
          ><h2>Set up your CV</h2></button>
          <button
            onClick={() => this.props.infoPage()}
          ><h2>About</h2></button>
        </div>
      </div>
    );
  }
}

export { Navbar };