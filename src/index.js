import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Questionnaire from "./pages/questionnaire/Questionnaire";
import Summary from "./pages/summary/Summary";

import "./styles.scss";

// just loading some sample data
const QUESTIONS = require("/questions.json");


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Questionnaire questionList={QUESTIONS} />
      </div>
    )
  }
}

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById("app"));
