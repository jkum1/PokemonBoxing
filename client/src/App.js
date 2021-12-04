import React, {useState, useEffect, useRef} from 'react';
import {Suspense} from 'react';
import './App.css';
import {Canvas} from '@react-three/fiber';
import Controls from './Controls.js';
import Form from './Form.js';
import Data from './Data.js';
import { useInView } from "react-intersection-observer";
import {Html} from '@react-three/drei';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonModel, setPokemonModel] = useState();
  const domRef = useRef();
  const [refItem, inView] = useInView({
    threshold: 0,
  });

  var changeName = function(name) {
    window.localStorage.setItem('pokemonName', name);
    setPokemonName(name);
  }

  useEffect(() => {
    if (window.localStorage.getItem('pokemonName') && window.localStorage.getItem('pokemonName') !== 'af') {
      setPokemonName(window.localStorage.getItem('pokemonName'));
    } else {
      setPokemonName('Lapras');
    }
  }, []);

  useEffect(() => {
    inView && (document.body.style.background = '#eba4f7');
  }, [inView]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const OtherComponent = React.lazy(() => import('./pokemon/' + pokemonName + '.js'));
      // const OtherComponent = React.lazy(() => import('./pokemon/Lapras.js'));
      setPokemonModel(<OtherComponent/>)
    }
    return function cleanup() {
      mounted = false;
    }
  }, [pokemonName]);

  return (
    <>
      <Canvas
        colorManagement
        shadows
        camera={{position: [0, 30, 50], fov: 60}}
      >
        <Controls/>
        <ambientLight intensity={0.3}/>
        <pointLight position={[-10,0,-20]} intensity={0.5}/>
        <pointLight position={[0,-10,0]} intensity={1.5}/>
        <directionalLight
          castShadow
          position={[0,30,0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-50}
          shadow-camera-right={50}
          shadow-camera-top={50}
          shadow-camera-bottom={-50}
        />

        <Suspense fallback={null}>
          <Html fullscreen portal={domRef}>
            <div className='textData' ref={refItem}>
              <Form changeName={changeName}/>
              <Data name={pokemonName}/>
            </div>
          </Html>

          <group>
            <mesh receiveShadow rotation={[-Math.PI/2,0,0]} position={[0,-1,0]}>
              <planeBufferGeometry attach='geometry' args={[300,300]}/>
              <shadowMaterial attach='material' opacity={0.3}/>
              <meshPhysicalMaterial attach="material" color="#eba4f7" />
            </mesh>
          </group>
          {pokemonModel}
          {/* <Lapras/> */}
        </Suspense>

      </Canvas>
    </>
  );
}

export default App;
