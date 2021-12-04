import React, {useState} from 'react';
import Valid from './Valid.js';

export default function Form(props) {
  const [input, setInput] = useState('');

  var validName = function(name) {
    if (Valid(name)) {
      props.changeName(name);
    } else {
      props.changeName('Error');
    }
  }

  return (
    <form className='form' onSubmit={(e) => {
      e.preventDefault();
      validName(input);
      setInput('');
    }}>
      <label>
        Enter Pokemon Name:
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      </label>
      <input type='submit' value='Render'/>
    </form>
    )
};