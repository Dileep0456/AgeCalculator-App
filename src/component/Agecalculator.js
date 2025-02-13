import React, { Component } from "react";
import "../../src/App.css";

export default class Agecalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "",
      month: "",
      year: "",
      age: "",
      errorMessage: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  calculateAge = () => {
    const { day, month, year } = this.state;

    if (day && month && year) {
      const birthDate = new Date(`${year}-${month}-${day}`);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }

      if (age >= 0) {
        this.setState({
          age: `${age} years old`,
          errorMessage: "",
        });
      } else {
        this.setState({
          errorMessage: "Please enter a valid date",
          age: "",
        });
      }
    } else {
      this.setState({
        errorMessage: "Please enter a valid date",
        age: "",
      });
    }
  };

  render() {
    return (
      <div>
        <div className="navbar">
          <a href="#default" className="logo">
            Age Calculate.Net
          </a>
          <div className="navbar-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

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
                  minLength={1}
                  maxLength={2}
                  autoComplete="off"
                  value={this.state.day}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="month"
                  placeholder="month"
                  minLength={1}
                  maxLength={2}
                  autoComplete="off"
                  value={this.state.month}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="year"
                  placeholder="year"
                  minLength={4}
                  maxLength={4}
                  autoComplete="off"
                  value={this.state.year}
                  onChange={this.handleChange}
                />
              </div>
              <div className="note-section">
                <p>
                  This application calculates your <br />
                  age based on the current date.
                </p>
              </div>
            </div>
            <div className="right-section">
              <div className="output-section">
                <h4>Hey! <br/>
                Time Flies!</h4>
                <h4>{this.state.age}</h4>
                <div className="error-section">
                  <p>{this.state.errorMessage}</p>
                </div>
                <div className="reset-btn">
                  <button
                    type="reset"
                    onClick={() =>
                      this.setState({
                        day: "",
                        month: "",
                        year: "",
                        age: "",
                        errorMessage: "",
                      })
                    }
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="btn">
            <button type="button" onClick={this.calculateAge}>
              Calculate Age
            </button>
          </div>
        </div>
        <div className="line">
          <p>
            Developed by{" "}
            <a href="name">
              <strong>Dileep </strong>
            </a>
            <p>
              This application is a simple implementation of the age calculator
              application using React.js.
            </p>
            <p>
              This application doesn't store any data or use any external APIs.
            </p>
          </p>
        </div>
        <div className="footer">
          <p>© 2025 Age Calculate.Net. All rights reserved.</p>
        </div>
      </div>
    );
  }
}
