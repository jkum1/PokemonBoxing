/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes } = useGLTF('/pokemonGLB/Chansey.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.lucky.geometry} material={nodes.lucky.material} rotation={[Math.PI/2,0,0]} scale={[2,2,2]}/>
    </group>
  )
}

useGLTF.preload('/pokemonGLB/Chansey.glb')
