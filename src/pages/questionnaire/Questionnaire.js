import React from "react";
import {cloneDeep} from "lodash";
import Button from "/src/components/button/Button";
import Question from "/src/components/question/Question";
import Summary from "/src/components/summary/Summary";
import ProgressBar from "/src/components/progressBar/ProgressBar";

export default class Questionnaire extends React.Component {
  constructor(props) {
    super(props);

    let questionList = cloneDeep(this.props.questionList);

    questionList.forEach((e)=>{
      if(e.input.inputType === "text"){
        e.response = "";
      } else {
        e.response = e.input.options[0]
      }
    });

    this.state = {
      questionList: questionList,
      currentQuestion: 3
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.getProgress = this.getProgress.bind(this);
    this.responseHandler = this.responseHandler.bind(this);

  }

  previousQuestion() {
    if (this.state.currentQuestion > 0) {
      this.setState({
        currentQuestion: this.state.currentQuestion - 1
      });
    }
  }

  nextQuestion(){
    if (this.state.currentQuestion+1 <= this.props.questionList.length){
      this.setState({
        currentQuestion: this.state.currentQuestion + 1
      });
    }
  }

  getProgress(){
    return (this.state.currentQuestion) / this.props.questionList.length * 100;
  }

  responseHandler(response){
    let questionList = cloneDeep(this.state.questionList);
    let currentQuestion = this.state.currentQuestion;
    questionList[currentQuestion].response = response;

    this.setState({
      questionList: questionList
    });
  }

  render() {
    let { currentQuestion, questionList} = this.state;
    return (
      <div className="questionnaire">
        <ProgressBar percentage={this.getProgress()}/>
        {(currentQuestion < questionList.length) ?
        <Question question={questionList[currentQuestion]} responseHandler={this.responseHandler}/>
          : <Summary questionList={questionList}/>}
        <div className="footer">
          <Button onClick={this.previousQuestion} disabled={currentQuestion === 0}>back</Button>
          <Button onClick={this.nextQuestion} disabled={currentQuestion >= questionList.length}>next</Button>
        </div>
      </div>
    );
  }
}
