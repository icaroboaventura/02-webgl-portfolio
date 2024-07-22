import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const Reveal = ({ children, x, y, duration, delay, width = "fit-content" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])
  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: x, y: y },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: delay }}>
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal
