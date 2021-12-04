/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes } = useGLTF(
    '/pokemonGLB/Weepinbell.glb'
  )
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.Weepinbell.geometry} material={nodes.Weepinbell.material} scale={[0.1,0.1,0.1]} position={[0,3,0]}/>
    </group>
  )
}

useGLTF.preload('/pokemonGLB/Weepinbell.glb')
