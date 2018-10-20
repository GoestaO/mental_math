import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
const {generateRandomNumber, generateProposedAnswer, calculateSum, compareNumbers} = require('./helper');

// const proposedAnswer = generateProposedAnswer(value1, value2, value3);

class App extends Component {
  value1 = generateRandomNumber();
  value2 = generateRandomNumber();
  value3 = generateRandomNumber();
  proposedAnswer = generateProposedAnswer(this.value1, this.value2, this.value3);

  state = {
    numCorrect: 0,
    numQuestions: 0,
    value1: this.value1,
    value2: this.value2,
    value3: this.value3,
    proposedAnswer: this.proposedAnswer
  };

  // proposedAnswer = generateProposedAnswer(this.state.value1, this.state.value2, this.state.value3);

  increaseNumQuestions() {
    let numQuestions = this.state.numQuestions;
    this.setState({
      numQuestions: numQuestions + 1
    })
  }

  increaseNumCorrect() {
    let numCorrect = this.state.numCorrect;
    this.setState({
      numCorrect: numCorrect + 1
    });
  }

  generateNewNumbers() {
    this.value1 = generateRandomNumber();
    this.value2 = generateRandomNumber();
    this.value3 = generateRandomNumber();
    this.proposedAnswer = generateProposedAnswer(this.value1, this.value2, this.value3);
    this.setState({value1: this.value1, value2: this.value2, value3: this.value3, proposedAnswer: this.proposedAnswer});
  }

  onClick(e) {
    let answer = e
      .target
      .value
      .toString();
    let sumOfValues = calculateSum(this.state.value1, this.state.value2, this.state.value3);
    let rightAnswer = compareNumbers(this.state.proposedAnswer, sumOfValues).toString();
    if (answer === rightAnswer) {
      this.increaseNumCorrect()
    }
    this.increaseNumQuestions();
    this.generateNewNumbers();
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
        </div>
        <button onClick={(e) => this.onClick(e)} value="true">True</button>
        <button onClick={(e) => this.onClick(e)} value="false">False</button>
        <p className="text">
          Your Score: {this.state.numCorrect}/{this.state.numQuestions}
        </p>
      </div>
    </div>);
  }
}

export default App;
