"use client"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Float, useGLTF, useScroll } from "@react-three/drei"
import { MeshStandardMaterial } from "three"
import { meshData } from "../utils/meshData"
import gsap from "gsap"
import { useFrame, useThree } from "@react-three/fiber"

const Keyboard = ({ props }) => {
  const { nodes, scene } = useGLTF("/keyboard.glb")
  const [keyboardColor, setKeyboardColor] = useState("#171717")
  const { size } = useThree()
  const originalPositions = useRef({})
  const ref = useRef()
  const keyboardRef = useRef()
  const keyRefs = useRef({})
  const tl = useRef()
  const scroll = useScroll()

  let scale

  if (size.width <= 640 && size.height <= 900) {
    scale = size.width / 700
  } else if (size.width <= 640 && size.height <= 1000) {
    scale = size.width / 1000
  } else if (size.width <= 1500) {
    scale = size.width / 1600
  } else {
    scale = size.width / 2200
  }

  // Update timeline based on scroll position
  useFrame(({ mouse, viewport }) => {
    if (tl.current) {
      tl.current.seek(scroll.offset * tl.current.duration())
    }
  })

  // Set up animations
  useLayoutEffect(() => {
    tl.current = gsap.timeline()

    tl.current.to(ref.current.rotation, { duration: 1, x: -Math.PI * 2, y: 0, z: 0 }, 0)
  }, [])

  // Material settings
  const keyboardMaterial = new MeshStandardMaterial({ color: keyboardColor })
  const plateMaterial = new MeshStandardMaterial({
    emissive: "#a21caf",
    emissiveIntensity: 20,
  })

  // Handle key hover effect
  const handlePointerOver = (event, name) => {
    event.stopPropagation()
    if (!originalPositions.current[name]) {
      originalPositions.current[name] = event.object.position.clone()
    }
    gsap.to(event.object.position, {
      x: originalPositions.current[name].x - 0.6,
      duration: 0.02,
    })
  }

  // Handle key hover out effect
  const handlePointerOut = (event, name) => {
    event.stopPropagation()
    gsap.to(event.object.position, {
      x: originalPositions.current[name].x,
      duration: 0.02,
    })
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const handleAnimation = () => {
        const randomIndex = Math.floor(Math.random() * meshData.length)
        const randomKey = meshData[randomIndex]
        const keyNode = keyRefs.current[randomKey.name]

        if (keyNode) {
          if (!originalPositions.current[randomKey.name]) {
            originalPositions.current[randomKey.name] = keyNode.position.clone()
          }

          gsap.to(keyNode.position, {
            x: originalPositions.current[randomKey.name].x - 0.6,
            duration: 0.1,
          })
          gsap.to(keyNode.position, {
            x: originalPositions.current[randomKey.name].x,
            duration: 0.1,
            delay: 0.1,
          })
        }
      }
      handleAnimation()
    }, 100)

    return () => clearInterval(intervalId)
  }, [nodes])

  return (
    <Float
      speed={3.5}
      floatIntensity={0}>
      <group
        ref={ref}
        {...props}
        dispose={null}>
        <group
          scale={scale}
          name="Keyboard"
          position={[0, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}>
          <group ref={keyboardRef}>
            <mesh
              name="case"
              geometry={nodes.case.geometry}
              position={[-1.182, 0, 0]}
              scale={[0.255, 1, 1]}
              material={keyboardMaterial}
            />
            <mesh
              name="plate"
              geometry={nodes.plate.geometry}
              position={[-1.329, 0, 0]}
              scale={[0.255, 1, 1]}
              material={plateMaterial}
              toneMapped={false}
            />
            <group ref={keyRefs}>
              {meshData.map((mesh, index) => (
                <mesh
                  key={index}
                  name={mesh.name}
                  geometry={nodes[mesh.name].geometry}
                  position={mesh.position}
                  scale={mesh.scale}
                  material={keyboardMaterial}
                  onPointerOver={(event) => handlePointerOver(event, mesh.name)}
                  onPointerOut={(event) => handlePointerOut(event, mesh.name)}
                  ref={(el) => {
                    if (el) {
                      keyRefs.current[mesh.name] = el
                    }
                  }}
                />
              ))}
            </group>
          </group>
        </group>
      </group>
    </Float>
  )
}

useGLTF.preload("/keyboard.glb")

export default Keyboard
