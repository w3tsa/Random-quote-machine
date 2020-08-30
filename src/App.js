import React, { Component } from "react";
import Box from "./Box";
import { getData, Choice } from "./Helpers";
import "./styles.css";

class App extends Component {
  static defaultProps = {
    allColors: [
      "purple",
      "magenta",
      "violet",
      "red",
      "black",
      "blue",
      "brown",
      "chocolate",
      "coral",
      "crimson",
      "AliceBlue",
      "AntiqueWhite",
      "DarkGreen",
      "DarkSlateBlue",
      "DarkSlateGrey",
      "Fuchsia",
      "Indigo"
    ]
  };
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      author: "",
      color: "",
      animate: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.handleClick());
  }

  async handleClick() {
    const result = await getData();
    let newColor;
    do {
      newColor = Choice(this.props.allColors);
    } while (newColor === this.state.color);
    this.setState((st) => ({
      quote: result.data,
      author: result.author,
      color: newColor,
      animate: true
    }));

    setTimeout(
      function () {
        this.setState({
          animate: false
        });
      }.bind(this),
      1000
    );
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        <Box
          color={this.state.color}
          quote={this.state.quote}
          author={this.state.author}
          animate={this.state.animate}
        />
        <button
          onClick={this.handleClick}
          className="newQuoteBtn"
          style={{ backgroundColor: this.state.color }}
        >
          New Quote
        </button>
      </div>
    );
  }
}

export default App;
