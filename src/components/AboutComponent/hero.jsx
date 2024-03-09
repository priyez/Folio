'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useEffect } from 'react';
import { aboutLandingAnim } from '@/animation';
import { motion } from 'framer-motion';


export default function Hero() {

    useEffect(() => {
        aboutLandingAnim()
      }, [])

    return (
        <motion.div className={styles.hero}>



            <div className={styles.body}>
                <div className={styles.heroTitleDiv}>
                    <div className={styles.heroTitleOne}>
                        <div>Hello</div>
                         </div>
                    <br /><div className={styles.heroTitleTwo}> 
                     <div>there! </div>
                     </div>
                </div>
            </div>

            <div className={styles.bodyMobile}>
                <div className={styles.heroTitleDiv}>
                    <div className={styles.heroTitleOne}>  <div>Hello</div> </div>
                    <br /><div className={styles.heroTitleTwo}> 
                    <div>there! </div> 
                    </div>

                </div>
            </div>


<div className={styles.scroll}>
    <p>Scroll to Explore</p>
</div>
        </motion.div>
    )
}
