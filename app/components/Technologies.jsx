import CanvasLogo from "./CanvasLogo"
import SectionCode from "./SectionCode"
import { assets } from "../utils/constants"
import Reveal from "./Reveal"

const Technologies = ({ content }) => {
  return (
    <div className="px-[8%] w-full max-w-[1200px] mx-auto">
      <div className="flex justify-center items-center flex-col mx-auto p-[2%] bg-neutral-800 rounded-lg">
        <SectionCode text={content.nav[2]} />
        <div className="flex items-center justify-center ">
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
    </div>
  )
}

export default Technologies
