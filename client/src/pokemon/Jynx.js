/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes } = useGLTF('/pokemonGLB/Jynx.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.rougela.geometry} material={nodes.rougela.material} rotation={[Math.PI/2,0,0]}/>
    </group>
  )
}

useGLTF.preload('/pokemonGLB/Jynx.glb')
