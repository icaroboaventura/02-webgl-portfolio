"use client"

import { Scroll, useScroll } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import Hero from "./Hero"
import AboutMe from "./AboutMe"
import Technologies from "./Technologies"

const Overlay = ({ content, language }) => {
  return (
    <Scroll html>
      <div className="w-screen overflow-y-auto">
        <section className="w-full h-svh overflow-hidden">
          <Hero
            content={content}
            language={language}
          />
        </section>
        <section className="w-full h-svh overflow-hidden">
          <AboutMe content={content} />
        </section>
        <section className="w-full h-svh overflow-hidden">
          <Technologies content={content} />
        </section>
        <section className="w-3 h-svh bg-green-300"></section>
        <section className="w-3 h-svh bg-red-300"></section>
        <section className="w-3 h-svh bg-green-300"></section>
      </div>
    </Scroll>
  )
}

export default Overlay
