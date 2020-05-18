import React from 'react';

const IaC_Form = (props) => {
  return(
    <div>
        <form onSubmit={props.handleSubmit}>
        <label>
          Enter your PAN: <br/>
        </label>
          <label id='input_field'>
            <input type='text' 
            value={props.first_name}
            name='f_name'
            placeholder='Type your name'
            onChange={props.handleChange}/>
          </label>
          <br/>
          <label id='input_field'>
            <input type='password' 
            value={props.pass}
            name='pass'
            placeholder='Type password'
            onChange={props.handleChange}/>
          </label>
          <br/>
          <label>
            <select name='fruitSelect' onChange={props.handleChange}>
              <option name='mango'>Mango</option>
              <option name='apple'>Apple</option>
              <option name='guava'>Guava</option>
            </select>
          </label>
          <label><br/><button onSubmit={props.handleSubmit}>Submit</button></label>
       </form> 
    </div>
  )
}

export default IaC_Form;
