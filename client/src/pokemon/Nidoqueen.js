/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes } = useGLTF(
    '/pokemonGLB/Nidoqueen.glb'
  )
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.nidoqueen.geometry} material={nodes.nidoqueen.material} rotation={[Math.PI/2,0,0]} scale={[2,2,2]}/>
    </group>
  )
}

useGLTF.preload('/pokemonGLB/Nidoqueen.glb')
