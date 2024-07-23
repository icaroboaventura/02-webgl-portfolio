import { useEffect, useState } from "react"
import Reveal from "./Reveal"
import SectionCode from "./SectionCode"
import { motion } from "framer-motion"

import Link from "next/link"

const Experience = ({ content }) => {
  const [activeTab, setActiveTab] = useState(content.experienceTitle[0])

  useEffect(() => {
    setActiveTab(content.experienceTitle[0])
  }, [content])

  return (
    <div className="px-[8%] w-full max-w-[1200px] mx-auto">
      <div className="flex items-center flex-col min-h-[500px] mx-auto p-[2%] bg-neutral-800 rounded-lg">
        <SectionCode text={content.nav[3]} />
        <div className="flex w-full flex-col items-center justify-center ">
          <div className="w-full flex items-center justify-center  ">
            {content.experienceTitle.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab && "text-neutral-50 "
                } px-4 py-2 relative rounded-lg max-w-[400px] w-full lg:w-[400px]`}>
                {activeTab === tab && (
                  <motion.span
                    layoutId="bubble"
                    className={`absolute inset-0 z-10 border-neutral-50 border rounded-lg`}
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
          <Reveal
            x={75}
            duration={0.5}
            delay={0.3}>
            {activeTab === content.experienceTitle[0] ? (
              <div className="text-center mt-2 flex flex-col items-center gap-2 text-neutral-50 min-h-[400px] max-w-[800px] p-5 ">
                {content.educational.map((edu, index) => (
                  <div
                    key={index}
                    className="flex items-center flex-col  gap-1 w-full">
                    <h3 className=" font-firacode-medium">{edu.company}</h3>
                    <p className=" text-xs sm:text-sm">{edu.duration}</p>
                    <p className=" text-xs sm:text-sm font-firacode-medium">{edu.title}</p>
                    {edu.status.length !== 0 ? (
                      <p className=" text-xs sm:text-sm">{edu.status}</p>
                    ) : (
                      ""
                    )}
                    {edu.link[0].length !== 0 ? (
                      <Link
                        className=" text-xs sm:text-sm px-2 py-1 border border-neutral-50 rounded-lg hover:bg-neutral-50 hover:text-neutral-800 transition-colors duration-500"
                        href={edu.link[1]}
                        target="_blank">
                        {edu.link[0]}
                      </Link>
                    ) : (
                      ""
                    )}

                    {index !== content.educational.length - 1 ? (
                      <div className="w-full bg-neutral-50 bg-opacity-20 h-[1px] my-2"></div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-2 flex items-center  flex-col gap-2 text-neutral-50 w-full  min-h-[400px] max-w-[800px] p-5">
                {content.professional.map((pro, index) => (
                  <div
                    key={index}
                    className="flex items-center flex-col gap-1 text-center">
                    <h3 className=" font-firacode-medium">{pro.company}</h3>
                    <p className=" text-xs sm:text-sm">{pro.duration}</p>
                    <p className=" text-xs sm:text-sm font-firacode-medium">{pro.title}</p>
                    {pro.responsibilities.map((resp, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-neutral-50 rounded-full"></div>
                        <p className=" text-xs sm:text-sm">{resp}</p>
                      </div>
                    ))}
                    {index !== content.professional.length - 1 ? (
                      <div className="w-full bg-neutral-50 h-[1px]"></div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default Experience
