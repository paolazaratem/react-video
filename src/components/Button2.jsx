import React from "react";

class Button2 extends React.Component {
  // const [ state, setState ] = useState(0);

  state = {
    count: 0,
  };

  handleClickAdd = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleClickRemove = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  handleClickReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Apples: {count} </h1>
        <button type="button" onClick={this.handleClickAdd}>
          Add
        </button>
        <button type="button" onClick={this.handleClickRemove}>
          Remove
        </button>
        <button type="button" onClick={this.handleClickReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Button2;
