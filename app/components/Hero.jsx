import { IoCaretDownOutline } from "react-icons/io5"
import HeroCode from "./HeroCode"
import SectionCode from "./SectionCode"
import { motion } from "framer-motion"

const Hero = ({ content, language }) => {
  return (
    <div className="h-svh flex items-end relative">
      <div className=" absolute top-[10%] pl-[5%]">
        <HeroCode
          content={content}
          language={language}
        />
      </div>
      <div className="mx-auto p-[50px] text-orange-500 ">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}>
          <IoCaretDownOutline fontSize={40} />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
