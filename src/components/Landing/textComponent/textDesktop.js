import { useEffect } from "react";
import styles from '../style.module.scss'
import HeroContentOne from '../utils/heroContentOne';
import {landingAnim} from '../../../animation/index'





const TextDesktop = () => {
  useEffect(() => {
    // landingAnim()
  }, [])

  return (
    <div className={styles.body}>
    <div className={styles.heroTitleDiv}>
        <div className={styles.heroTitleOne}>
            <div>Translating <span>ideas</span></div>
            </div>
      <br /><div className={styles.heroTitleTwo}> 
      <div>in to Digital </div> <HeroContentOne /> </div>
      <br /><div className={styles.heroTitleOne}>
        <div>Experience.</div>
      </div>
  </div>
  </div>
  );
};


export default TextDesktop;
