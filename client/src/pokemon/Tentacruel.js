/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes } = useGLTF(
    '/pokemonGLB/Tentacruel.glb'
  )
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.dokukurage.geometry} material={nodes.dokukurage.material} rotation={[Math.PI/2,0,0]} position={[0,20,0]} scale={[1.5,1.5,1.5]}/>
    </group>
  )
}

useGLTF.preload('/pokemonGLB/Tentacruel.glb')
