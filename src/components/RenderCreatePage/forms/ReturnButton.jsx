import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export class ReturnButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        id="return-btn"
        onClick={() => this.props.changeState('default')}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
        <p>Return</p>
      </button>
    );
  }
}