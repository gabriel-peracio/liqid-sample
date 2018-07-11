import React from "react";
import Button from "/src/components/button/Button";
import Question from "/src/components/question/Question";
import ProgressBar from "/src/components/progressBar/ProgressBar";

export default class Questionnaire extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
  }

  previousQuestion() {
    alert('back');
  }

  nextQuestion(){
    alert('next');
  }

  render() {
    return (
      <div className="questionnaire">
        <ProgressBar percentage="50"/>
        <Question question={this.props.questionList[this.state.currentQuestion]}/>
        <div className="footer">
          <Button onClick={this.previousQuestion}>back</Button>
          <Button onClick={this.nextQuestion}>next</Button>
        </div>
      </div>
    );
  }
}
