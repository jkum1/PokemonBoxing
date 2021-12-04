/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes } = useGLTF(
    '/pokemonGLB/Victreebel.glb'
  )
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.utsubot.geometry} material={nodes.utsubot.material} rotation={[Math.PI/2,0,0]} position={[0,9,0]}/>
    </group>
  )
}

useGLTF.preload('/pokemonGLB/Victreebel.glb')
