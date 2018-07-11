import React from "react";

// export default ({ options, selectedOption, responseHandler }) => {
export default class Dropdown extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.responseHandler(e.target.value);
  }

  render() {
    return (
      <div className="dropdown">
        <select value={this.props.selectedOption} onChange={this.handleChange}>
          {this.props.options.map((o, i) => {
            return <option key={i} value={o}>{o}</option>
          })}
        </select>
      </div>
    );
  }
};
