import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Data(props) {
  const [data, setData] = useState({});

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
          console.log(final);
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

  return (
    <div id='Data'>
      <div id='name'>Name: {data.name}</div>
      <div id='height'>Height: {data.height}</div>
      <div id='weight'>Weight: {data.weight}</div>
      <div id='type'>Type: {data.type}</div>
    </div>
  )
};