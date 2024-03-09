import React from 'react'
import axios from 'axios'
import { SiSpotify } from 'react-icons/si'
import useSWR from 'swr'
import styles from '../../components/Landing/utils/style.module.scss';

const fetcher = url => axios.get(url).then(res => res.data)

const SpotifyCard = () => {
  const { data, error } = useSWR('/api/spotify', fetcher)
  if (error) {
   
    console.log(error)
  }

  return (
      <div className={styles.spotifyCard} >
         <a
            target='_blank'
            rel='noreferrer'
            href={
               data?.isPlaying
                 ? data.songUrl
                 : 'https://open.spotify.com/'
            }
            className={styles.card}>
            <div className={styles.imgCard}>
               {data?.isPlaying
                 ? (
                  <SiSpotify size={30} color={'#fff'} />
                   )
                 : (
                  <SiSpotify size={30} color={'#fff'} />
                   )}
            </div>

            <div className={styles.descCard}>
              
          
               <p className={styles.descTitle}>
                  {data?.isPlaying
                    ? (
                     <h4>{data.title}</h4>
                      )
                    : (
                        'Currently not listening'
                      )}
               </p>
               <p className={styles.descArtist}>
                  {data?.isPlaying ? `Artist: ${data.artist}` : 'Spotify'}
               </p>
               <p className={styles.descAlbum}>
                  {data?.isPlaying ? `Album: ${data.album}` : ''}
               </p>
            </div>
            
         </a>
      </div>
  )
}

export default SpotifyCard  