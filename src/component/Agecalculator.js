import React, { Component } from "react";
import "../../src/App.css";

export default class Agecalculator extends Component {
 
  render() {
   
    return (
      <div className="container">
        <div className="header">
          <h1>Age Calculator</h1>
        </div>
        <div className="display">
<div className="left-section">
          <div className="input-group">
            <input
              type="text"
              name="day"
              placeholder="day"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="month"
              placeholder="month"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="year"
              placeholder="year"
              onChange={this.handleChange}
            />
          </div>
          </div>
          <div className="right-section">
          <div className="output-section">
            <h4>Hey! Your Age is:</h4>
            <h5>Age: 25 years Old</h5>
            <div className="reset-btn">
          <button type="reset" onClick={() => this.setState({ day: '', month: '', year: '', age: '', error: '' })}>Reset</button></div>
        </div>
          </div>
          </div>
          
        <div className="btn">
        <button type="button" onClick={this.calculateAge}>Calculate Age</button>
        </div>
      </div>
    );
  }
}