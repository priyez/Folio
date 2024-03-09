'use client'
import styles from './style.module.scss';
import { useEffect } from 'react';
// import { aboutLandingAnim } from '@/animation';
import { motion } from 'framer-motion';


export default function AboutDesc() {

    useEffect(() => {
     
      }, [])

    return (
        <motion.div className={styles.desc}>
<p>
   My name is Sopiriye Jamabo. I am a front-end developer based in Nigeria 🇳🇬. Fueled by my passion and expertise, i have a keen interest in UI animation. JamStack. CMS. Wordpress
   <br/>
   I spend time converting designs into pixel-perfect, aceessible & responsive websites. I&apos;ve embraced the concept of being a life long learner. Learning to solve whatever problem i encountered.
   <br/>
   <span>I am currently interested in a Full time Front-end developer role(remote). but still open to other opportunities.</span>
   <br/>
  Feel free to drop  me a line! Cheers
</p>

<div className={styles.contact}>
  <h5 className={styles.title}>Contact</h5>

  <div>
    <h5 className={styles.title}>Mail</h5>
    <a href="mailto:sopiriyejamabo@gmail.com">sopriyejamabo@gmail.com</a>
  </div>
  <div>
    <h5 className={styles.title}>Github</h5>
    <a href="https://github.com/priyez">Pri_yez</a>
  </div>
  <div>
    <h5 className={styles.title}>Linkedin</h5>
    <a href="https://www.linkedin.com/in/sopiriye-jamabo-14b314151">@Sopiriye Jamabo</a>
  </div>
</div>
        </motion.div>
    )
}
