import React from "react";


export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.responseHandler(e.target.value);
  }

  render(){
    return (
      <div className="textInput">
        <textarea onChange={this.handleChange} value={this.props.text}></textarea>
      </div>
    );
  }
};
