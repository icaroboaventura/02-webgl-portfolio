import React, { Suspense, useRef } from "react"
import { Float, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { MeshStandardMaterial } from "three"

const Arrow = (props) => {
  const { nodes } = useGLTF("/arrow.glb")

  const arrowMaterialBlack = new MeshStandardMaterial({ color: "#171717" })

  return (
    <Float
      speed={30}
      floatIntensity={30}>
      <group
        {...props}
        dispose={null}>
        <ambientLight intensity={1} />
        <directionalLight
          position={[0, 0, 2]}
          intensity={6}
        />
        <mesh
          geometry={nodes.arrow.geometry}
          material={arrowMaterialBlack}
          toneMapped={false}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[1, 1, 2.002]}
        />
        <mesh
          geometry={nodes.arrow.geometry}
          material={arrowMaterialBlack}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          position={[0, 3, 0]}
          scale={[1, 1, 2.002]}
        />
      </group>
    </Float>
  )
}

const ArrowCanvas = () => {
  return (
    <Canvas
      resize={{ debounce: 0 }}
      shadows
      camera={{ position: [0, 0, 55], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}>
      <OrbitControls
        enableZoom={false}
        enableDamping={false}
        enableRotate={false}
        enablePan={false}
      />
      <Suspense fallback={null}>
        <Arrow />
      </Suspense>
    </Canvas>
  )
}

export default ArrowCanvas
