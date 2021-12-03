/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/pokemonGLB/Kakuna.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.polygon0.geometry} material={nodes.polygon0.material} />
      <mesh castShadow geometry={nodes.polygon1.geometry} material={nodes.polygon1.material} />
    </group>
  )
}

useGLTF.preload('/pokemonGLB/Kakuna.glb')
