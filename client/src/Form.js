import React, {useState} from 'react';

export default function Form(props) {
  const [input, setInput] = useState('');

  return (
    <form id='form' onSubmit={(e) => {
      e.preventDefault();
      props.changeName(input);
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