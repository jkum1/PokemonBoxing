import React, {useState, useRef, useEffect} from 'react';
import {Html} from '@react-three/drei';
import { useInView } from "react-intersection-observer";

export default function Form(props) {
  const [input, setInput] = useState('');
  const domC = useRef();
  const [refItem, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    inView && (document.body.style.background = '#eba4f7');
  }, [inView]);

  return (
    <Html fullscreen portal={domC}>
      <form ref={refItem} className='form' onSubmit={(e) => {
        e.preventDefault();
        props.changeName(input)
        setInput('');
      }}>
        <label>
          Enter Pokemon Name:
          <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        </label>
        <input type='submit' value='Render'/>
      </form>
    </Html>
  )
};