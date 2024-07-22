import Reveal from "./Reveal"
import SectionCode from "./SectionCode"

const Experience = ({ content }) => {
  return (
    <div className="relative pt-[100px] sm:pt-[300px] max-w-[1200px] mx-auto">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <SectionCode text={content.nav[3]} />
      </div>
    </div>
  )
}

export default Experience
