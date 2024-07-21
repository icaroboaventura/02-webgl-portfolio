import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"

const Hero = ({ content }) => {
  return (
    <div>
      <div className="font-firacode-medium text-xs sm:text-base">
        <p className="px-[4%] sm:px-[10%] py-[80px] sm:py-[100px]">
          <span className="text-red-500">if</span> <span className="text-purple-500">(</span>
          <span className="text-blue-500">{content.heroCode[0]}</span>{" "}
          <span className="text-red-500">===</span>{" "}
          <span className="text-green-500">{content.heroCode[1]}</span>
          <span className="text-purple-500">)</span> <span className="text-yellow-500">{"{"} </span>
          <br />
          console<span className="text-orange-500">.log</span>
          <span className="text-purple-500">(</span>
          <span className="text-green-500">"{content.heroCode[2]}"</span>
          <span className="text-purple-500">)</span>; <br />
          gsap<span className="text-orange-500">.to</span>
          <span className="text-purple-500">(</span>
          <span className="text-blue-500">{content.heroCode[0]}</span>
          <span className="text-orange-500">.pos</span>,{" "}
          <span className="text-yellow-500">{"{"}</span> x{":"}{" "}
          <span className="text-blue-500">{content.heroCode[0]}</span>
          <span className="text-orange-500">.orig</span> - 0.6{" "}
          <span className="text-yellow-500">{"}"}</span>
          <span className="text-purple-500">)</span>; <br />
          <span className="text-purple-500">setTimeout(</span>(){" "}
          <span className="text-red-500">{"=>"}</span> console
          <span className="text-orange-500">.log</span>
          <span className="text-purple-500">(</span>{" "}
          <span className="text-green-500">"{content.heroCode[3]}"</span>
          <span className="text-purple-500">)</span>, 100<span className="text-purple-500">)</span>;{" "}
          <br />
          <span className="text-yellow-500">{"}"}</span>
        </p>
      </div>
    </div>
  )
}

export default Hero
