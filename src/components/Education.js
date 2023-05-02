import React, { useRef } from 'react'
import {useScroll, motion} from 'framer-motion'
import LiIcon from './LiIcon'

const Details=({type,time,place,info})=>{
    const ref = useRef(null)
    
    return(
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center
    md:w-[80%] justify-center'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:'spring'}}
        >
            <h3 className='capitalize sm:text-xl xs:text-lg font-bold text-2xl'>{type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium md:text-sm w-full'>
                {info}
            </p>
        </motion.div>
    </li>)
}
const Education = () => {
    const ref=useRef(null);
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","center start"]
    })
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-5xl xs:text-3xl md:mb-16'>
            Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90px] md:w-full'>
            <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-2 w-[4px] h-full 
             md:w-[2px] md:left-[30px] xs:left-[0px]
            bg-dark origin-top dark:bg-light'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details
                    type='Bachelor Of Science In Information System'
                    time='2019-2022' place=' Addis Ababa Univeristy (AAU)'
                    info="Relevant courses included Data Structures and Algorithms, Website development, SDLC,  and Artificial 
                    Intelligence."
                />
                <Details
                    type='Certificates related to Software Development'
                    time='2016-2020' place=' Coursera, Udemy, SimplyLearn'
                    info="Relevant courses included Data Structures and Algorithms, Software developmen, and UI/UX"
                />
               
{/*                
                <Details
                    type='Bachelor Of Science In Computer Science'
                    time='2016-2020' place=' Massachusetts Institute Of Technology (MIT)'
                    info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                    Intelligence."
                /> */}
            </ul>
        </div>

       

    </div>
  )
}

export default Education