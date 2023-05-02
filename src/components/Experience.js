import React, { useRef } from 'react'
import {useScroll, motion} from 'framer-motion'
import LiIcon from './LiIcon'

const Details=({position,company,companyLink,time,address,work})=>{
    const ref = useRef(null)
    
    return(
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center
    md:w-[80%]
    '>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:'spring'}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;
                <a href={companyLink} className='capitalize text-primary dark:text-primaryDark' target='_blank'>@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>)
}
const Experience = () => {
    const ref=useRef(null);
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","center start"]
    })
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-5xl xs:text-3xl md:mb-16'>
            Experience
        </h2>

        <div ref={ref} className='w-[75%] lg:-[90%] md:w-full mx-auto relative ' >
            <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-3 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[0px]
            '/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details
                position='Software Developer' company='YES'
                companyLink='www.yes.et'
                time='2022-Present' address='Megenagna, Bethelhem Plazza~301'
                work="Working in a team responsible for developing innovative solutions for our clients. 
                My work involves building new features, improving existing functionalities, and ensuring 
                the overall performance and scalability of our software."            
                />
                <Details
                position='Front End Developer' company='MKS'
                companyLink='#'
                time='2022' address='Bole, Adika bldg'
                work="Developed and maintained high-quality user interfaces using Angular framework. 
                I collaborated with cross-functional teams to ensure the performance and accessibility 
                of web applications while staying up-to-date with the latest front-end development trends
                 and techniques to improve the quality and efficiency of my work."            
                />
                <Details
                position='Freelancer' company='Freelance Ethiopia'
                companyLink='#'
                time='2022-Present' address='Home'
                work="I provide custom software solutions to clients in various industries. 
                I collaborate with clients to understand their requirements, design and develop 
                software applications, and ensure their performance by testing and deploying them. 
                Using cutting-edge technologies and methodologies, I build scalable and robust software 
                solutions that meet business needs."            
                />
               
            </ul>
        </div>

       

    </div>
  )
}

export default Experience