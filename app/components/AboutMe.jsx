import Reveal from "./Reveal"
import SectionCode from "./SectionCode"
import { assets } from "../utils/constants"
import Image from "next/image"

const AboutMe = ({ content }) => {
  return (
    <div className="px-[8%] max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center p-[2%] bg-neutral-800 rounded-lg">
        <SectionCode text={content.nav[1]} />
        <div className="flex-col sm:flex-row flex items-center gap-[5px]">
          <div className="basis-1/2 w-full flex justify-center items-center ">
            <Reveal
              x={-75}
              duration={0.5}
              delay={0.3}>
              <div className="w-full flex items-center justify-center">
                <Image
                  src={assets.aboutMeImg}
                  alt="Icaro Boaventura"
                  priority={true}
                  width={500}
                  height={500}
                  className="w-1/2 sm:w-full max-w-[400px] rounded-lg opacity-50"
                />
              </div>
            </Reveal>
          </div>
          <div className="basis-1/2 w-full flex justify-center items-center">
            <Reveal
              x={75}
              duration={0.5}
              delay={0.3}>
              <p className="w-full text-center">{content.aboutMeText}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
