import Link from "next/link"
import { assets } from "../utils/constants"
import Reveal from "./Reveal"
import SectionCode from "./SectionCode"
import { FaLinkedin } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Contact = ({ content }) => {
  return (
    <div className=" px-[8%] w-full max-w-[1200px] mx-auto text-center">
      <div className="flex items-center flex-col justify-center mx-auto p-[2%] bg-neutral-800 rounded-lg">
        <SectionCode text={content.nav[5]} />
        <div className=" py-[15%]">
          <Reveal
            x={75}
            duration={0.5}
            delay={0.3}>
            <h3 className=" font-firacode-bold text-lg sm:text-2xl text-center">
              {content.footerText}
            </h3>
            <div className="flex flex-col items-center justify-center gap-10 mt-10">
              <div className="flex items-center gap-4">
                <div className="text-4xl">
                  <MdEmail />
                </div>
                <p>{assets.contact.email}</p>
              </div>
              <div className="flex items-center justify-center gap-10">
                <Link
                  className="text-4xl hover:scale-110"
                  href={assets.contact.linkedin}
                  target="_blank">
                  <FaLinkedin />
                </Link>
                <Link
                  className="text-4xl hover:scale-110"
                  href={assets.contact.github}
                  target="_blank">
                  <FaGithubSquare />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default Contact
