/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes } = useGLTF('/pokemonGLB/Seadra.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.seadra.geometry} material={nodes.seadra.material} rotation={[Math.PI/2,0,0]} position={[0,5,0]}/>
    </group>
  )
}

useGLTF.preload('/pokemonGLB/Seadra.glb')
