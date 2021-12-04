import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import {Html} from '@react-three/drei';
import { useInView } from "react-intersection-observer";

export default function Data(props) {
  const [data, setData] = useState({});
  const domC = useRef();
  const [refItem, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      var path = 'https://pokeapi.co/api/v2/pokemon/' + props.name.toLowerCase();
      axios.get(path)
      .then((info, err) => {
        if (err) {
          throw err
        } else {
          var final = {name: props.name};
          final['height'] = info.data.height;
          final['moveset'] = info.data.moves;
          final['type'] = info.data.types[0].type.name;
          final['weight'] = info.data.weight;
          setData(final);
        }
      })
      .catch(err => {
        console.log(err);
      });
    }
    return function cleanup() {
      mounted = false;
    }
  }, [props.name]);

  useEffect(() => {
    inView && (document.body.style.background = '#eba4f7');
  }, [inView]);

  return (
    <Html fullscreen portal={domC}>
      <div ref={refItem} id='name'>Name: {data.name}</div>
      <div ref={refItem} id='height'>Height: {data.height}</div>
      <div ref={refItem} id='weight'>Weight: {data.weight}</div>
      <div ref={refItem} id='type'>Type: {data.type}</div>
    </Html>
  )
};