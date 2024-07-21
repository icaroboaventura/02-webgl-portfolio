import { IoCaretDownOutline } from "react-icons/io5"
import HeroCode from "./HeroCode"
import ArrowCanvas from "./ArrowCanvas"
import SectionCode from "./SectionCode"

const Hero = ({ content, language }) => {
  return (
    <div className="h-svh flex flex-col justify-between relative">
      <div className="absolute top-0 sm:left-1/2 transform sm:-translate-x-1/2 px-[10px] sm:px-[100px]">
        <SectionCode text={content.nav[0]} />
      </div>
      <div>
        <HeroCode
          content={content}
          language={language}
        />
      </div>
      <div className="mx-auto p-[50px] text-orange-500 ">
        <div className="animate-bounce duration-500">
          <IoCaretDownOutline fontSize={40} />
        </div>
      </div>
    </div>
  )
}

export default Hero
