import Reveal from "./Reveal"
import SectionCode from "./SectionCode"

const Contact = ({ content }) => {
  return (
    <div className="relative pt-[120px] sm:pt-[180px] px-[8%] max-w-[1200px] mx-auto">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <SectionCode text={content.nav[5]} />
      </div>
      <div className="flex items-center justify-center mx-auto p-[30px] bg-white bg-opacity-5 rounded-lg"></div>
    </div>
  )
}

export default Contact
