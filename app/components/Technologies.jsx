import CanvasLogo from "./CanvasLogo"
import SectionCode from "./SectionCode"

const Technologies = ({ content }) => {
  return (
    <div className="relative flex items-start pt-[100px] sm:pt-[180px] px-[8%] gap-6 flex-col md:flex-row">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <SectionCode text={content.nav[2]} />
      </div>
      <div className="flex">
        {content.pathLogos.map((logo, index) => (
          <CanvasLogo
            key={index}
            logo={logo.path}
            position={logo.position}
            scale={logo.scale}
            rotation={logo.rotation}
          />
        ))}
      </div>
    </div>
  )
}

export default Technologies
