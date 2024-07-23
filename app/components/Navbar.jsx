"use client"
import { motion } from "framer-motion"
import Image from "next/image"

import { useEffect, useState } from "react"

const Navbar = ({ changeLanguage, language }) => {
  const [activeTab, setActiveTab] = useState("ENG")
  console.log(activeTab)

  useEffect(() => {
    changeLanguage(activeTab)
  }, [activeTab])

  const lan = ["ENG", "DE", "PT"]
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div>
        <Image
          src="/logo.png"
          alt="Icaro Boaventura"
          priority={true}
          width={40}
          height={40}
          className=""
        />
      </div>
      <div className="flex items-center justify-center">
        {lan.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${activeTab === tab && "text-neutral-50 "} px-2 py-1 relative rounded-lg`}>
            {activeTab === tab && (
              <motion.span
                layoutId="pill2"
                className={`absolute inset-0 -z-10 border-neutral-50 border rounded-lg`}
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.5,
                }}
              />
            )}
            {tab}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
