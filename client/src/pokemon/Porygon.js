/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes } = useGLTF('/pokemonGLB/Porygon.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.Porygon.geometry} material={nodes.Porygon.material} scale={[0.3,0.3,0.3]}/>
    </group>
  )
}

useGLTF.preload('/pokemonGLB/Porygon.glb')