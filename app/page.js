"use client"

import { ContentDE, ContentENG, ContentPT } from "./utils/constants"
import CanvasKeyboard from "./components/CanvasKeyboard"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

const Home = () => {
  const [language, setLanguage] = useState("ENG")
  const [content, setContent] = useState(ContentENG)

  useEffect(() => {
    switch (language) {
      case "ENG":
        setContent(ContentENG)
        break
      case "DE":
        setContent(ContentDE)
        break
      case "PT":
        setContent(ContentPT)
        break
      default:
        setContent(ContentENG)
        break
    }
  }, [language])
  return (
    <div className=" bg-neutral-900 font-firacode-light text-neutral-50 relative text-sm sm:text-base">
      <div className="w-full absolute top-0 z-50">
        <Navbar
          content={content}
          changeLanguage={setLanguage}
          language={language}
        />
      </div>
      <main className="w-full h-svh">
        <CanvasKeyboard
          content={content}
          language={language}
        />
      </main>
    </div>
  )
}
export default Home
