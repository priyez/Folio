'use client';
import styles from './style.module.scss'
import { useState, useContext, useEffect, useRef } from 'react';
import Link from 'next/link';
import Project from './components/project';
import { useInView, motion } from 'framer-motion';
import { slideUp, opacity } from './animation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import AnimationContext from '../../common/contexts/animation-context';


const projects = [
  {
    title: "Porfolio",
    src: "portfolio.png",
    cat: "Front-end Dev",
    link:"http://localhost:3000/",
    color: "#000000"
  },
  {
    title: "RaevKitchen",
    src: "raevs.png",
    cat: "Web Dev",
    link:"https://raevskitchen.com/",
    color: "#E6FF55"
  },
  {
    title: "Next js Blog with Spotify",
    src: "blog.png",
    cat: "Front-end Dev",
    link:"https://blog-three-teal-97.vercel.app/",
    color: "#000"
  },
  {
    title: "Sabi Converter",
    src: "sabi.png",
    cat: "Front-end Dev",
    link:"https://sabi-exchange-typescript.vercel.app/",
    color: "#0000"
  }
]

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);




  let secondRef = useRef(null);
  let textRef = useRef(null);

  let animationContext = useContext(AnimationContext);

  gsap.registerPlugin(ScrollTrigger);

 

  useEffect( () => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  
  
    gsap.timeline({
      scrollTrigger: {
        trigger: secondRef.current,
        start: "+=200 70%",
        end: "+=200 60%",
        scrub: true,
        markers: false,
        pinSpacing: false,
        onEnter: () => {
          animationContext.setCurrentBg('#fff');
          gsap.to(textRef.current, {
            color: '#000',
            duration: 1
          })
        },
        onLeaveBack: () => {
          animationContext.setCurrentBg('#000');
          gsap.to(textRef.current, {
            color: '#fff',
            duration: 1
          })
        }
      }
    })
  
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({active, index})
  }

const titleOne ="Selected "
const titleTwo  ="(jan 24 - 2024)"
const myWorks = useRef(null);
const isInView = useInView(myWorks)

  return (
  <main  ref={secondRef}  onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.projects}>
 <div ref={textRef} className={styles.w}>
 <div ref={myWorks} className={styles.sectionTitle}>
  <h2> {
                    titleOne.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                } Projects ({projects.length})</h2>
  <h2> {
                    titleTwo.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                } </h2>

 </div>
 <div className={styles.projectSubDesc} >
  <p>Each project is unique, showing skill, Constantly curious and eager to learn, I stay up-to-date with the latest trends. Let&apos;s create something amazing together!🌐 </p>
 </div>
    <div className={styles.contain}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} link={project.link} cat={project.cat} manageModal={manageModal} key={index}/>
        })
      }
    </div>
 
    <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
            {
                projects.map( (project, index) => {
                const { src, color } = project
                return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
                    <Image 
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                    />
        
                </div>
                })
            }
            </div>
        </motion.div>
      <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div> 
    </>
    </div>
  </main>
  )
}
