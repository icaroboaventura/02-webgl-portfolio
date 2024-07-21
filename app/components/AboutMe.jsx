import Reveal from "./Reveal"
import SectionCode from "./SectionCode"

const AboutMe = ({ content }) => {
  return (
    <div className="relative flex items-start pt-[100px] sm:pt-[180px] px-[8%] gap-6 flex-col md:flex-row">
      <div className="absolute top-0 sm:left-1/2 transform sm:-translate-x-1/2">
        <SectionCode text={content.nav[1]} />
      </div>
      <div className="basis-1/2 w-full flex justify-center items-center">
        <Reveal
          x={-75}
          duration={0.5}
          delay={1}>
          <img
            src="/aboutMeImg.jpg"
            alt=""
            className="w-1/3 md:w-full max-w-[400px] rounded-md opacity-50"
          />
        </Reveal>
      </div>
      <div className="basis-1/2 w-full flex justify-center items-center">
        <Reveal
          x={75}
          duration={0.5}
          delay={1}>
          <p className="w-full">{content.aboutMeText}</p>
        </Reveal>
      </div>
    </div>
  )
}

export default AboutMe
