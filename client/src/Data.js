import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Data(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    let mounted = true;
    if (mounted && props.name !== 'Error') {
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
    } else if (props.name === 'Error') {
      var final = {
        name: 'Error',
        height: 'Error',
        moveset: 'Error',
        type: 'Error',
        weight: 'Error'
      };
      setData(final);
    }
    return function cleanup() {
      mounted = false;
    }
  }, [props.name]);

  return (
    <div className='data'>
      <div id='name'>Name: {data.name}</div>
      <div  className='info'>
        <div id='height'>Height: {data.height} ft</div>
        <div id='weight'>Weight: {data.weight} lb</div>
      </div>
      <div id='type'>Type: {data.type}</div>
    </div>
  )
};