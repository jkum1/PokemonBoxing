/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(
    '/pokemonGLB/Electrode.glb'
  )
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.polygon0.geometry} material={nodes.polygon0.material} />
      <mesh castShadow geometry={nodes.polygon1.geometry} material={nodes.polygon1.material} />
      <mesh castShadow geometry={nodes.polygon2.geometry} material={nodes.polygon2.material} />
      <mesh castShadow geometry={nodes.polygon3.geometry} material={nodes.polygon3.material} />
    </group>
  )
}

useGLTF.preload('/pokemonGLB/Electrode.glb')
