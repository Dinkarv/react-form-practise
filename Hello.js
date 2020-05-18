import React from 'react';

const IaC_Form = (props) => {
  return(
    <div>
    <form>
          <input type='text' 
          value={props.first_name}
          name='f_name'
          placeholder='Type your name'
          onChange={props.handleChange}/>
    </form>
    </div>
  )
}

export default IaC_Form;
