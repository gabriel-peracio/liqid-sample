import React from "react";
import { render } from "react-dom";
import Questionnaire from "./pages/questionnaire/Questionnaire";

import "./styles.scss";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Questionnaire />
    )
  }
}

render(<App />, document.getElementById("app"));
