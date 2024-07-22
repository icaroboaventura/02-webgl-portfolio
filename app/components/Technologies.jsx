import CanvasLogo from "./CanvasLogo"
import SectionCode from "./SectionCode"
import { assets } from "../utils/constants"
import Reveal from "./Reveal"

const Technologies = ({ content }) => {
  return (
    <div className="relative pt-[120px] sm:pt-[180px] px-[8%] max-w-[1200px] mx-auto">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <SectionCode text={content.nav[2]} />
      </div>
      <div className="flex items-center justify-center mx-auto p-[30px] bg-white bg-opacity-5 rounded-lg">
        <Reveal
          x={-75}
          duration={0.5}
          delay={0.3}>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-10">
            {assets.pathLogos.map((logo, index) => (
              <CanvasLogo
                key={index}
                logo={logo.path}
                position={logo.position}
                scale={logo.scale}
                rotation={logo.rotation}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Technologies
