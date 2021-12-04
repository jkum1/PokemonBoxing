/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes } = useGLTF('/pokemonGLB/Machop.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.Machop.geometry} material={nodes.Machop.material} scale={[0.3,0.3,0.3]}/>
    </group>
  )
}

useGLTF.preload('/pokemonGLB/Machop.glb')
