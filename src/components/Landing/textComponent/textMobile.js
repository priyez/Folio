import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from '../style.module.scss'
import {landingAnim} from '../../../animation/index'





const Banner = () => {
  useEffect(() => {
    landingAnim()
  }, [])

  return (
    <div className={styles.bodyMobile} >
      <div className={styles.heroTitleDiv}>
      
        <div className={styles.heroTitleOne}>
          <div> Translating</div>
        </div>

        <br />
        <div className={styles.heroTitleOne}>
          <div> ideas in to</div>
        </div>
        <br />
        <div className={styles.heroTitleOne}>
          <div> Digital</div>
        </div>
        <br />
        <div className={styles.heroTitleOne}>
          <div> Experience</div>
        </div>
      </div>
    </div>
  );
};


export default Banner;
