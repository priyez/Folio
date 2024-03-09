import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { slideUp, opacity } from '../animation';
import gsap from 'gsap';
export default function HeroContentOne() {

    const phrase = " A Front-end developer based in 🇳🇬 NG focused on creating interactive digital experience."
    
    

    const myWorks = useRef(null);
    const isInView = useInView(myWorks)
    return (
        <div ref={myWorks} className={styles.heroContentOne}>
            <div  className={styles.body}>
               
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>{phrase}</motion.p>
              
            </div>
        </div>
    )
}
