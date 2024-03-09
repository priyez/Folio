import React, { useState, useEffect } from 'react';
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link';
import '@/styles/styles.scss';


export default function App({ Component, pageProps, router }) {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Define a scroll threshold (e.g., 100 pixels)
      const threshold = 400;

      // Update the state based on whether the user has scrolled beyond the threshold
      setScrolled(scrollTop > threshold);
    };

    // Add event listener for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <div className='main'>
        <header className={scrolled ? 'head' : ''}>
           <Link href="/">Home</Link>
           <Link href="/about">About</Link>
        
       </header>
       <AnimatePresence mode='wait'>
           <Component key={router.route} {...pageProps} />
       </AnimatePresence>
   </div>
    )
}

