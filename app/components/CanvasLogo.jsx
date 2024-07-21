import React, { Suspense, useRef } from "react"
import { Float, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { MeshStandardMaterial } from "three"
import gsap from "gsap"

const Logo = ({ props, logo, position, scale, rotation }) => {
  const { nodes } = useGLTF(logo)
  const groupRef = useRef()

  const material = new MeshStandardMaterial({ color: "#a855f7" })
  const bgMaterial = new MeshStandardMaterial({ color: "#171717" })

  const handleClick = () => {
    gsap.to(groupRef.current.rotation, {
      y: groupRef.current.rotation.y + Math.PI * 2,
      duration: 1,
    })
  }

  return (
    <Float
      speed={10}
      floatIntensity={3}>
      <group
        {...props}
        dispose={null}
        ref={groupRef}
        onPointerOver={handleClick}
        rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          material={bgMaterial}
          geometry={nodes.bg.geometry}
          scale={[0.087, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.logo.geometry}
          material={material}
          position={position}
          rotation={rotation}
          scale={scale}
        />
      </group>
    </Float>
  )
}

const CanvasLogo = ({ logo, position, scale, rotation }) => {
  return (
    <div className="w-[150px] h-[150px]">
      <Canvas
        resize={{ debounce: 0 }}
        shadows
        camera={{ position: [0, 0, 10], fov: 20 }}
        gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={10} />
          <spotLight
            intensity={10}
            position={(0, 0, 1)}
          />
          <Logo
            logo={logo}
            position={position}
            scale={scale}
            rotation={rotation}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default CanvasLogo
