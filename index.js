import React, { Component } from 'react';
import { render } from 'react-dom';
import IaC_Form from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      f_name: ''
    };
  }

  handleChange = (event) =>{
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
       // <Hello name={this.state.f_name} />
        <IaC_Form
          first_name = {this.state.f_name}
          handleChange = {this.handleChange}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
