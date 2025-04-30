import gsap from "gsap";

export const introAnim = () => {
const tl = gsap.timeline()
tl.from(
    ".overflow-hidden .text",
    {
        duration: 1,
        y: 80,
        skewY: 3,
        opacity: 0,
        stagger: 0.3,
        delay: 0,
        ease: "Power3.easeOut",
    },
    "+=.3"
)
.from(
    ".aboutpage-desc",
    {
      duration: 1.2,
      opacity: 0,
      ease: "Power3.easeOut",
    },
    "-=1.3"
  )
  .from(".aboutpage-cover", {
    duration: 1,
    width:0,
    opacity: 0,
    ease: "Power3.easeInOut",
  })
}
