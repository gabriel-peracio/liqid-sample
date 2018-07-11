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
              <label key={i}>
                <input type="radio"
                  value={o}
                  onChange={this.handleChange}
                  checked={this.props.selectedOption === o}/>
                {o}
              </label>
            )
          })}
        </form>
      </div>
    );
  }
};
