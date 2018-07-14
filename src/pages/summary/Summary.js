import React from "react";
import Answer from "/src/components/answer/Answer";


export default class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="summary">
        {this.props.questionList.map((q,i)=>{
          return (<Answer key={i} heading={`Question ${i+1}: ${q.heading}`}>{q.response}</Answer>)
        })}
      </div>
    );
  }
}
