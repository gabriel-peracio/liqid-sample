import React from "react";


export default class Questionnaire extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 1
    };
  }

  render() {
    return (
      <div className="questionnaire">
        Questionnaire
      </div>
    );
  }
}
