/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes } = useGLTF('/pokemonGLB/Weedle.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.polygon0.geometry} material={nodes.polygon0.material} rotation={[-Math.PI/2,0,0]} position={[0,8,0]} scale={[3,3,3]}/>
      <mesh castShadow geometry={nodes.polygon1.geometry} material={nodes.polygon1.material} rotation={[-Math.PI/2,0,0]} position={[0,8,0]} scale={[3,3,3]}/>
    </group>
  )
}

useGLTF.preload('/pokemonGLB/Weedle.glb')
