import React, { useEffect, useState } from "react"

const getTextArray = (text) => [
  { char: "<section>", className: "text-red-500" },
  { char: "<h2>", className: "text-purple-500" },
  { char: text, className: "" },
  { char: "</h2>", className: "text-purple-500" },
  { char: "</section>", className: "text-red-500" },
]

const SectionCode = ({ language, text }) => {
  const [displayedText, setDisplayedText] = useState([])
  const [index, setIndex] = useState(0)
  const [textArray, setTextArray] = useState(getTextArray(text))

  const resetText = () => {
    setDisplayedText([])
    setIndex(0)
  }

  useEffect(() => {
    setTextArray(getTextArray(text))
    resetText()
  }, [language, text])

  useEffect(() => {
    if (index < textArray.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => [...prev, textArray[index]])
        setIndex((prev) => prev + 1)
      }, 200) // speed
      return () => clearTimeout(timeout)
    } else {
      const resetTimeout = setTimeout(() => {
        resetText()
      }, 2000) // delay
      return () => clearTimeout(resetTimeout)
    }
  }, [index, textArray])

  return (
    <p className="pt-[60px]">
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

export default SectionCode
