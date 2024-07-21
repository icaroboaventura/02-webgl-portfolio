import React, { useEffect, useState } from "react"

const getTextArray = (heroCode) => [
  { char: "if", className: "text-red-500" },
  { char: " (", className: "text-purple-500" },
  { char: heroCode[0], className: "text-blue-500" },
  { char: " === ", className: "text-red-500" },
  { char: heroCode[1], className: "text-green-500" },
  { char: ") ", className: "text-purple-500" },
  { char: "{", className: "text-yellow-500" },
  { char: "<br />" },
  { char: "console", className: "text-orange-500" },
  { char: ".log", className: "text-purple-500" },
  { char: "(", className: "text-purple-500" },
  { char: `"${heroCode[2]}"`, className: "text-green-500" },
  { char: ")", className: "text-purple-500" },
  { char: ";", className: "text-purple-500" },
  { char: "<br />" },
  { char: "gsap", className: "text-orange-500" },
  { char: ".to", className: "text-purple-500" },
  { char: "(", className: "text-purple-500" },
  { char: heroCode[0], className: "text-blue-500" },
  { char: ".pos", className: "text-orange-500" },
  { char: ", {", className: "text-yellow-500" },
  { char: " x: ", className: "text-yellow-500" },
  { char: heroCode[0], className: "text-blue-500" },
  { char: ".orig", className: "text-orange-500" },
  { char: " - 0.6", className: "text-orange-500" },
  { char: " }", className: "text-yellow-500" },
  { char: ")", className: "text-purple-500" },
  { char: ";", className: "text-purple-500" },
  { char: "<br />" },
  { char: "setTimeout(", className: "text-purple-500" },
  { char: "() => ", className: "text-red-500" },
  { char: "console", className: "text-orange-500" },
  { char: ".log", className: "text-purple-500" },
  { char: "(", className: "text-purple-500" },
  { char: `"${heroCode[3]}"`, className: "text-green-500" },
  { char: ")", className: "text-purple-500" },
  { char: ", 100)", className: "text-purple-500" },
  { char: ";", className: "text-purple-500" },
  { char: "<br />" },
  { char: "}", className: "text-yellow-500" },
]

const HeroCode = ({ content, language }) => {
  const [displayedText, setDisplayedText] = useState([])
  const [index, setIndex] = useState(0)
  const [textArray, setTextArray] = useState(getTextArray(content.heroCode))

  const resetText = () => {
    setDisplayedText([])
    setIndex(0)
  }

  useEffect(() => {
    setTextArray(getTextArray(content.heroCode))
    resetText()
  }, [language, content.heroCode])

  useEffect(() => {
    if (index < textArray.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => [...prev, textArray[index]])
        setIndex((prev) => prev + 1)
      }, 60) // Adjust the speed here
      return () => clearTimeout(timeout)
    } else {
      const resetTimeout = setTimeout(() => {
        resetText()
      }, 2000) // Adjust the delay before resetting here
      return () => clearTimeout(resetTimeout)
    }
  }, [index, textArray])

  return (
    <p className="px-[10px] sm:px-[100px] py-[90px] sm:py-[100px] font-firacode-light">
      {displayedText.map((item, i) =>
        item.char === "<br />" ? (
          <br key={i} />
        ) : (
          <span
            key={i}
            className={`${item.className} animate-appear`}>
            {item.char}
          </span>
        )
      )}
      <span className="animate-ping duration-500">|</span>
    </p>
  )
}

export default HeroCode
