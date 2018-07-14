import React from "react";
import { Route, Redirect } from 'react-router'
import {cloneDeep} from "lodash";
import Button from "/src/components/button/Button";
import Question from "/src/components/question/Question";
import Summary from "../summary/Summary";
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
      currentQuestion: 0
    };

    this.getNextQuestion = this.getNextQuestion.bind(this);
    this.getPreviousQuestion = this.getPreviousQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.getProgress = this.getProgress.bind(this);
    this.responseHandler = this.responseHandler.bind(this);

  }

  nextQuestion() {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
  }
  previousQuestion() {
    if (this.state.currentQuestion > 0) {
      this.setState({
        currentQuestion: this.state.currentQuestion - 1
      });
    }
  }

  getPreviousQuestion() {
    if (this.state.currentQuestion > 0) {
      return `/question/${this.state.currentQuestion - 1}`;
    }
  }

  getNextQuestion(){
    const { currentQuestion } = this.state;
    const { questionList} = this.props;
    if (currentQuestion+1 < questionList.length){
      return `/question/${currentQuestion + 1}`;
    } else if (currentQuestion + 1 === questionList.length){
      return "/summary";
    }
  }

  getProgress() {
    const { questionList } = this.props;
    return this.state.currentQuestion / questionList.length * 100;
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
    const { questionList} = this.state;
    const { currentQuestion } = this.props;
    return (
      <div className="questionnaire">
        <Route exact path="/" component={() => (
          <Redirect to="/question/0" />
        )} />
        <ProgressBar percentage={this.getProgress()}/>
          <Route path="/question/:questionNumber" render={(r) => (
            <Question question={questionList[r.match.params.questionNumber]} responseHandler={this.responseHandler} />
          )} />
          <Route exact path="/summary" render={(r) => (
            <Summary questionList={questionList} />
          )} />
        <div className="footer">
          <Button onClick={this.previousQuestion} path={this.getPreviousQuestion()} disabled={currentQuestion === 0}>back</Button>
          <Button onClick={this.nextQuestion} path={this.getNextQuestion()} disabled={currentQuestion >= questionList.length}>next</Button>
        </div>
      </div>
    );
  }
}
