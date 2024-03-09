import gsap from "gsap"

// Landing Hero Component
export const landingAnim = () => {
  const tl = gsap.timeline({

  })
  tl.from(
    ".style_heroTitleOne__IR_T8 div",
    {
      duration: 1.5,
      y: 40,
      skewY: 3,
      opacity: 0,
      stagger: 0.3,
      delay: 0.55,
      ease: "Power3.easeOut",
    },
    "+=.3"
  )
  tl.to(
    ".style_heroTitleOne__IR_T8 div",
    {
      y: 12,
    //   ease: "Power3.easeOut",
      skewY: 0,
      opacity: 1,
      stagger: 0,
      delay: 0,
    },
    "+=.3"
  )
  tl.from(
    ".style_heroBottom__RwOQ1",
    {
      duration: 0.7,
      opacity: 0,
      stagger: 0.3,
      delay: 0.1,
      ease: "Power3.easeOut",
    },
    "+=.3"
  )
  tl.to(
    ".style_heroBottom__RwOQ1",
    {
      duration: 0,
      opacity: 1,
      stagger: 0,
      delay: 0,
    //   ease: "Power3.easeOut",
    },
    "+=.3"
  )
  tl.from(
    ".style_line__jmRDd",
    {
    scaleX:0,
      duration: 0.1,
      delay: 0.2,
      ease: "Power3.easeOut",
    },
    "+=.3"
  )
  tl.to(
    ".style_line__jmRDd",
    {
    scaleX:2,
      duration: 0.4,
      delay: 0,
      ease: "Power3.easeOut",
    },
    "+=.3"
  )
  tl.from(
    ".style_card__ruir0",
    {
      duration: 1,
      y: 30,
      skewY: 3,
      opacity: 0,
      stagger: 0.3,
      delay: 0,
      ease: "Power3.easeOut",
    },
    "+=.3"
  )
  tl.to(
    ".style_card__ruir0",
    {
      y: 0,
      skewY: 0,
      opacity: 1,
      stagger: 0,
      delay: 0,
    },
    "+=.3"
  )
    .set("body", { background: "unset" })
}


// About Component
export const aboutLandingAnim = () => {
  const tl = gsap.timeline({
 
  })
  tl.from(
    ".style_heroTitleOne__eZA7W div",
    {
      duration: 1.0,
      y: 60,
      skewY: 3,
      opacity: 0,
      stagger: 0.3,
      delay: 0.20,
      ease: "Power3.easeOut",
    },
    "+=.3"
  )
  tl.to(
    ".style_heroTitleOne__eZA7W div",
    {
      y: 6,
    //   ease: "Power3.easeOut",
      skewY: 0,
      opacity: 1,
      stagger: 0,
      delay: 0,
    },
    "+=.3"
  )
  tl.from(
    ".style_heroTitleTwo__Z_pfb div",
    {
      duration: 1.0,
      y: 60,
      skewY: 3,
      opacity: 0,
      stagger: 0.3,
      delay: -1,
      ease: "Power3.easeOut",
    },
    "+=.3"
  )
  tl.to(
    ".style_heroTitleTwo__Z_pfb div",
    {
      y: 6,
    //   ease: "Power3.easeOut",
      skewY: 0,
      opacity: 1,
      stagger: 0,
      delay: 0,
    },
    "+=.3"
  )
  tl.from(
    ".style_scroll__wY0ZP p",
    {
      duration: 0.7,
      opacity: 0,
      stagger: 0.3,
      delay: -0.8,
      ease: "Power3.easeOut",
    },
    "+=.3"
  )
  tl.to(
    ".style_scroll__wY0ZP p",
    {
      duration: 0,
      opacity: 1,
      stagger: 0,
      delay: 0,
    //   ease: "Power3.easeOut",
    },
    "+=.3"
  )
  tl.from(
    ".style_desc__aLopj",
    {
      duration: 0.7,
      opacity: 0,
      stagger: 0.3,
      delay: 0,
      ease: "Power3.easeOut",
    },
    "+=.3"
  )
  tl.to(
    ".style_desc__aLopj",
    {
      duration: 0,
      opacity: 1,
      stagger: 0,
      ease: "Power3.easeOut",
    },
    "+=.3"
  )
    .set("body", { background: "unset" })
}
