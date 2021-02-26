import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
  render() {
    return (
      <div className="Box" style={{ backgroundColor: "#dbd9e0" }}>
        <p
          style={{ color: this.props.color }}
          className={`${this.props.animate ? "animate" : ""}`}
        >
          <i className="fas fa-quote-left"></i> {this.props.quote}
        </p>
        <p
          style={{ color: this.props.color }}
          className={`${this.props.animate ? "animate" : ""}`}
        >
          - {this.props.author}
        </p>
        <br />
        <div className="box-author">
          <button style={{ backgroundColor: this.props.color }}>
            <a
              href={`https://twitter.com/intent/tweet?&text=${this.props.quote} ${this.props.author}`}
            >
              <i class="fab fa-twitter"></i>
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default Box;
