import React from "react";
import TextInput from "../textInput/TextInput";

export default ({ question }) => {
  let input;
  switch (question.input.inputType){
    case "text":
    default:
      input = <TextInput/>;
  }
  return (
    <div className="question">
      <div className="heading">
        Question: {question.heading}
      </div>
      {input}
    </div>
  );
};
