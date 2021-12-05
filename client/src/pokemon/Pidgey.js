/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes } = useGLTF('/pokemonGLB/Pidgey.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Pidgey.geometry}
        material={nodes.Pidgey.material}
        position={[0,10,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={10}
      />
    </group>
  )
}

useGLTF.preload('/pokemonGLB/Pidgey.glb')
