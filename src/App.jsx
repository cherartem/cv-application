import { Component } from "react";
import './components/generalStyling/styles.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Info } from "./components/Info/Info";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Info/>
      </div>
    );
  }
}

export default App ;
