import React from "react";

export default class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.responseHandler(e.target.value);
  }

  render(){
    return (
      <div className="radioGroup">
        <form>
          {this.props.options.map((o,i) => {
            return (
              <div className="radioOption" key={i}>
                <input type="radio"
                  id={`option_${i}`}
                  value={o}
                  onChange={this.handleChange}
                  checked={this.props.selectedOption === o}/>
                <label htmlFor={`option_${i}`} className="label">
                  {o}
                </label>
              </div>
            )
          })}
        </form>
      </div>
    );
  }
};
