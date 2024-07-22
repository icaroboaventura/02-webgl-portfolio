import Reveal from "./Reveal"
import SectionCode from "./SectionCode"
import { assets } from "../utils/constants"

const AboutMe = ({ content }) => {
  return (
    <div className="relative pt-[100px] sm:pt-[300px] px-[8%]  max-w-[1200px] mx-auto">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <SectionCode text={content.nav[1]} />
      </div>
      <div className="bg-white relative bg-opacity-5  p-[2px] rounded-lg overflow-hidden">
        {/* <div className="animate-rotate absolute h-full w-full rounded-full bg-[conic-gradient(#8800ff_20deg,transparent_120deg)]"></div> */}
        <div className="flex-col md:flex-row flex items-center gap-6 bg-neutral-900 relative p-[30px]">
          <div className="basis-1/2 w-full flex justify-center items-center relative">
            <Reveal
              x={-75}
              duration={0.5}
              delay={0.5}>
              <div className="w-full flex items-center justify-center">
                <img
                  src={assets.aboutMeImg}
                  alt=""
                  className="w-1/2 sm:w-full max-w-[400px] rounded-lg opacity-50"
                />
              </div>
            </Reveal>
          </div>
          <div className="basis-1/2 w-full flex justify-center items-center">
            <Reveal
              x={75}
              duration={0.5}
              delay={0.5}>
              <p className="w-full text-center">{content.aboutMeText}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
