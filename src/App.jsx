import { Component } from "react";
import './components/generalStyling/styles.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Info } from "./components/Info/Info";
import { RenderCreatePage } from "./components/RenderCreatePage/RenderCreatePage";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <RenderCreatePage/>
      </div>
    );
  }
}

export default App ;
