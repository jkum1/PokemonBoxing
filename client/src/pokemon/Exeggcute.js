/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes } = useGLTF(
    '/pokemonGLB/Exeggcute.glb'
  )
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.tamatama.geometry} material={nodes.tamatama.material}  rotation={[Math.PI/2,0,0]} scale={[3,3,3]}/>
    </group>
  )
}

useGLTF.preload('/pokemonGLB/Exeggcute.glb')
