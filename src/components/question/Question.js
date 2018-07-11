import React from "react";
import TextInput from "../textInput/TextInput";
import Dropdown from "../dropdown/Dropdown";
import RadioGroup from "../radioGroup/RadioGroup";

export default ({ question, responseHandler }) => {
  let input;
  switch (question.input.inputType){
    case "dropdown":
      input = <Dropdown options={question.input.options} responseHandler={responseHandler} selectedOption={question.response}/>;
      break;
    case "radio":
      input = <RadioGroup options={question.input.options} responseHandler={responseHandler} selectedOption={question.response}/>;
      break;
    case "text":
    default:
      input = <TextInput responseHandler={responseHandler} text={question.response}/>;
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
