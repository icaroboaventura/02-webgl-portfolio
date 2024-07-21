"use client"

import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Keyboard from "./Keyboard"
import { Suspense } from "react"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import Overlay from "./Overlay"

const CanvasKeyboard = ({ content }) => {
  return (
    <Canvas
      resize={{ debounce: 0 }}
      shadows
      camera={{ position: [0, 0, 80], fov: 20 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}>
      <ambientLight intensity={1} />
      <directionalLight
        position={[0, 5, 5]}
        intensity={1.5}
      />
      <OrbitControls
        enableZoom={false}
        enableDamping={false}
        enableRotate={false}
        enablePan={false}
      />
      <Suspense fallback={null}>
        <ScrollControls
          pages={6}
          damping={0.25}>
          <Overlay content={content} />
          <Keyboard />
        </ScrollControls>
        <EffectComposer>
          <Bloom
            intensity={0.4}
            luminanceThreshold={2.8}
            luminanceSmoothing={3.2}
            mipmapBlur={true}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}

export default CanvasKeyboard
