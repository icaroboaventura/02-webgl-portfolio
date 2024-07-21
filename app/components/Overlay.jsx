"use client"

import { Scroll, useScroll } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import Hero from "./Hero"

const Overlay = ({ content }) => {
  return (
    <Scroll html>
      <div className="w-screen overflow-y-scroll relative">
        <section className="w-full h-svh">
          <Hero content={content} />
        </section>
        <section className="w-3 h-svh bg-green-300"></section>
        <section className="w-3 h-svh bg-red-300"></section>
        <section className="w-3 h-svh bg-green-300"></section>
        <section className="w-3 h-svh bg-red-300"></section>
        <section className="w-3 h-svh bg-green-300"></section>
      </div>
    </Scroll>
  )
}

export default Overlay
