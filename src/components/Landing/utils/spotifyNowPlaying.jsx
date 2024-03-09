import styles from './style.module.scss';
import {  useEffect } from 'react';
import SpotifyCard from '@/common/spotifyCard';
import {landingAnim} from '../../../animation/index'
export default function SpofityNowPlaying() {

      useEffect(() => {
        landingAnim()
      }, [])
    return (
        <div className={styles.spotifyContainer}>
           <span className={styles.line}/>
<div className={styles.spotifyDiv}>
     <SpotifyCard/>
</div>
<span className={styles.line}/>
        </div>
    )
}
