import Curve from '@/components/Layout/Curve'
import Hero from '@/components/AboutComponent/hero'
import AboutDesc from '@/components/AboutComponent/aboutDes'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Sopirye Jamabo</title>
        <meta name="description" content="My name is Sopiriye Jamabo. I am a front-end developer based in Nigeria 🇳🇬. Fueled by my passion and expertise, i have a keen interest in UI animation. JamStack. CMS. Wordpress" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Curve backgroundColor={"#000"}>
        
        <div className='body'>
      <Hero/>
      <AboutDesc/>
               </div>
      </Curve>
    </>
  )
}
