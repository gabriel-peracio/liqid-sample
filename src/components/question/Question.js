import React from "react";
import TextInput from "../textInput/TextInput";
import Dropdown from "../dropdown/Dropdown";
import RadioGroup from "../radioGroup/RadioGroup";

export default ({ question }) => {
  let input;
  switch (question.input.inputType){
    case "dropdown":
      input = <Dropdown options={question.input.options} />;
      break;
    case "radio":
      input = <RadioGroup options={question.input.options} />;
      break;
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
