import React, {useState, useEffect} from 'react';
import {Suspense} from 'react';
import './App.css';
import {Canvas} from '@react-three/fiber';
import Controls from './Controls.js';
import Form from './Form.js';
import Pokemon from './pokemon/Lapras.js';

function App() {
  const [pokemonName, setPokemonName] = useState('Abra');
  // const [pokemonModel, setPokemonModel] = useState();

  var changeName = function(name) {
    setPokemonName(name);
  }

  // useEffect(() => {
  //   let mounted = true;
  //   if (mounted) {
  //     const OtherComponent = React.lazy(() => import('./pokemon/' + pokemonName + '.js'));
  //     setPokemonModel(OtherComponent());
  //   }
  //   return function cleanup() {
  //     mounted = false;
  //   }
  // }, [pokemonName]);

  return (
    <>
      <Form changeName={changeName}/>
      <Canvas
        colorManagement
        shadows
        camera={{position: [0, 45, 45], fov: 60}}
      >
        <Controls/>
        <ambientLight intensity={0.3}/>
        <pointLight position={[-10,0,-20]} intensity={0.5}/>
        <pointLight position={[0,-10,0]} intensity={1.5}/>
        <directionalLight
          castShadow
          position={[0,10,0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <group>
          <mesh receiveShadow rotation={[-Math.PI/2,0,0]} position={[0,-1,0]}>
            <planeBufferGeometry attach='geometry' args={[300,300]}/>
            <shadowMaterial attach='material' opacity={0.3}/>
            <meshPhysicalMaterial attach="material" color="#eba4f7" />
          </mesh>
        </group>

        <Suspense fallback={null}>
          <Pokemon/>
        </Suspense>

      </Canvas>
    </>
  );
}

export default App;
