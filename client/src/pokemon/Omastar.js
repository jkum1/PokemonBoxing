/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/pokemonGLB/Omastar.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.omstar.geometry} material={nodes.omstar.material} rotation={[Math.PI/2,0,0]}/>
    </group>
  )
}

useGLTF.preload('/pokemonGLB/Omastar.glb')
