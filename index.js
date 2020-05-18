import React, { Component } from 'react';
import { render } from 'react-dom';
import IaC_Form from './Hello';
import Formvalidation from './useFormValidation.js';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      f_name: '',
      pass: '',
      fruitSelect:'',
      onTab: false
    };
  }

  handleChange = (event) =>{
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) =>{
    this.setState({
      onTab: true
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        {this.state.onTab?
          <div>
          <div>Your Entry : {this.state.f_name}</div>
          <div>Your Password is: {this.state.pass}</div>
          <div>Selected Fruit is: {this.state.fruitSelect}</div>
          </div>
        : ''}
        <IaC_Form
        first_name = {this.state.f_name}
        handleChange = {this.handleChange}
        handleSubmit = {this.handleSubmit} />
        <Formvalidation
        state={this.state}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
