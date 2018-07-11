import React from "react";
import { render } from "react-dom";
import Questionnaire from "./pages/questionnaire/Questionnaire";

import "./styles.scss";

// just loading some sample data
const QUESTIONS = require("/questions.json");


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Questionnaire questionList={QUESTIONS}/>
    )
  }
}

render(<App />, document.getElementById("app"));
