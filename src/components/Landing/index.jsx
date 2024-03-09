'use client'
import styles from './style.module.scss';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import useMousePosition from '../../hooks/mousePosition';
import HeroBottom from './utils/heroBottom';
import SpotifyNowPlaying from "./utils/spotifyNowPlaying";
import Banner from "./textComponent/textMobile";
import TextDesktop from "./textComponent/textDesktop";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  useEffect(() => {
    // GSAP animation for .heroTitleOne elements
    gsap.from('.heroTitleOne', {
      translateY: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2, // Stagger the animation for each element
      scrollTrigger: {
        trigger: '.heroTitleOne',
        start: 'top 80%', // Trigger animation when 80% of the element is in view
      },
    });
  }, []);
  return (
    <main className={styles.landing}>
     
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
          I beilieve that the true magic of digital creation lies in it&apos;s ability to evoke emotions, streamline interactions and seamlessy guide users towards their goals.
        </p>
      </motion.div>

     
<TextDesktop/>
     <Banner/>

     <HeroBottom/>
     <SpotifyNowPlaying/>

    </main>
  )
}
