import Reveal from "./Reveal"
import SectionCode from "./SectionCode"
import { assets } from "../utils/constants"
import Image from "next/image"

const AboutMe = ({ content }) => {
  return (
    <div className="relative pt-[120px] sm:pt-[300px] px-[8%]  max-w-[1200px] mx-auto">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <SectionCode text={content.nav[1]} />
      </div>
      <div className="flex-col md:flex-row flex items-center p-[30px] bg-white gap-[30px] bg-opacity-5 rounded-lg">
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
  )
}

export default AboutMe
