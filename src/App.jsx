import { Component } from "react";
import './components/generalStyling/styles.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Info } from "./components/Info/Info";
import { RenderCreatePage } from "./components/RenderCreatePage/RenderCreatePage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      createPage: true
    }
  }

  handleCreatePage = () => {
    this.setState({ createPage: true });
  }

  handleInfoPage = () => {
    this.setState({ createPage: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar createPage={this.handleCreatePage} infoPage={this.handleInfoPage} />
        {this.state.createPage === true ?
          <RenderCreatePage />
          :
          <Info />
        }
      </div>
    );
  }
}

export default App ;
