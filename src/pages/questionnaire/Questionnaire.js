import React from "react";
import Button from "/src/components/button/Button";
import Question from "/src/components/question/Question";
import ProgressBar from "/src/components/progressBar/ProgressBar";

export default class Questionnaire extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 2
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.getProgress = this.getProgress.bind(this);

  }

  previousQuestion() {
    if (this.state.currentQuestion > 0) {
      this.setState({
        currentQuestion: this.state.currentQuestion - 1
      });
    }
  }

  nextQuestion(){
    if (this.state.currentQuestion+1 < this.props.questionList.length){
      this.setState({
        currentQuestion: this.state.currentQuestion + 1
      });
    }
  }

  getProgress(){
    return (this.state.currentQuestion) / this.props.questionList.length * 100;
  }

  render() {
    return (
      <div className="questionnaire">
        <ProgressBar percentage={this.getProgress()}/>
        <Question question={this.props.questionList[this.state.currentQuestion]}/>
        <div className="footer">
          <Button onClick={this.previousQuestion}>back</Button>
          <Button onClick={this.nextQuestion}>next</Button>
        </div>
      </div>
    );
  }
}
