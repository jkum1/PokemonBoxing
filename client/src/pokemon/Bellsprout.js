/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes } = useGLTF(
    '/pokemonGLB/Bellsprout.glb'
  )
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.madatsubomi.geometry} material={nodes.madatsubomi.material} rotation={[Math.PI/2,0,0]} scale={[3,3,3]}/>
    </group>
  )
}

useGLTF.preload('/pokemonGLB/Bellsprout.glb')