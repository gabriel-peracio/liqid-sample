import React from "react";

export default class RadioGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: this.props.options[0]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      selectedOption: e.target.value
    });
  }

  render(){
    return (
      <div className="radioGroup">
        <form>
          {this.props.options.map((o) => {
            return (
              <label>
                <input type="radio"
                  value={o}
                  onChange={this.handleChange}
                  checked={this.state.selectedOption === o}/>
                {o}
              </label>
            )
          })}
        </form>
      </div>
    );
  }
};
