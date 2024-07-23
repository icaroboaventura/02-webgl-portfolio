import { useEffect, useState } from "react"
import Reveal from "./Reveal"
import SectionCode from "./SectionCode"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const Projects = ({ content }) => {
  const [activeTab, setActiveTab] = useState(content.projects[0].name)

  useEffect(() => {
    setActiveTab(content.projects[0].name)
  }, [content])

  return (
    <div className="px-[8%] w-full max-w-[1200px] mx-auto">
      <div className="flex items-center justify-center flex-col  mx-auto p-[2%] bg-neutral-800  rounded-lg">
        <SectionCode text={content.nav[4]} />
        <div>
          <div className="flex justify-center flex-wrap w-full max-w-[800px]  ">
            {content.projects.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab.name)}
                className={`${
                  activeTab === tab.name && "text-neutral-50 "
                } px-4 py-2 relative rounded-lg  max-w-[400px]  text-nowrap`}>
                {activeTab === tab.name && (
                  <motion.span
                    layoutId="pill"
                    className={`absolute inset-0 z-10 border-neutral-50 border rounded-lg`}
                    transition={{
                      type: "spring",
                      bounce: 0.3,
                      duration: 0.5,
                    }}
                  />
                )}
                {tab.name}
              </button>
            ))}
          </div>
          <Reveal
            x={-75}
            duration={0.5}
            delay={0.3}>
            <div className="text-center mt-2 flex items-center justify-center text-neutral-50 min-h-[400px] max-w-[800px]  p-4">
              {content.projects.map((project, index) =>
                project.name === activeTab ? (
                  <div
                    key={index}
                    className="flex items-center flex-col md:flex-row justify-center gap-1 w-full ">
                    <div className="w-[220px] h-[120px] md:w-[400px] md:h-[200px] flex-shrink-0">
                      <Image
                        src={project.image}
                        alt="Icaro Boaventura"
                        priority={true}
                        width={300}
                        height={300}
                        className="w-[220px] h-[120px] md:w-[350px] md:h-[200px] object-cover rounded-lg opacity-50"
                      />
                    </div>
                    <div>
                      <h3 className=" font-firacode-medium mb-2">{project.name}</h3>
                      <p className=" text-xs sm:text-sm mb-2">{project.text}</p>
                      <Link
                        className=" text-xs sm:text-sm px-2 py-1 border border-neutral-50 rounded-lg hover:bg-neutral-50 hover:text-neutral-800 transition-colors duration-500"
                        href={`${project.link}`}
                        target="_blank">
                        Link
                      </Link>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default Projects
