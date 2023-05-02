import React from 'react'
import {motion} from 'framer-motion'

const Skill=({name,x,y})=>{
    return(
        <motion.div 
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y,transition:{duration:1.5}}}
            viewport={{once:true}}
            className='flex items-centermjustify-center rounded-full font-semibold
            lg:py-2 px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
            xs:text-dark xs:dark:text-light xs:font-bold
             bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light'>
                {name}
        </motion.div>
    )
}
const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-44 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen 
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        relative flex items-center justify-center rounded-full
         bg-circularLight 
         dark:bg-circularDark
         lg:circularLightLg 
         lg:dark:bg-circularDarkLg

         md:circularLightMd 
         md:dark:bg-circularDarkMd

         sm:circularLightSm 
         sm:dark:bg-circularDarkSm

         
         '>
            <motion.div 
            whileHover={{scale:1.05}}
            className='flex items-centermjustify-center rounded-full font-semibold
             bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark
             lg:p-6 md:p-4 xs:text-xs xs:p-2
             '>
                Web
            </motion.div>
            <Skill name='HTML' x='-22vw' y='2vw'/>
            <Skill name='CSS' x='-5vw' y='-10vw'/>
            <Skill name='Javascript' x='20vw' y='6vw'/>
            <Skill name='ReactJS' x='0vw' y='13vw'/>
            <Skill name='NextJS' x='-20vw' y='-15vw'/>
            <Skill name='AngularJS' x='15vw' y='-12vw'/>
            <Skill name='Web Design' x='32vw' y='-5vw'/>
            <Skill name='Figma' x='0vw' y='-19vw'/>
            <Skill name='Laravel' x='-25vw' y='18vw'/>
            <Skill name='Tailwind CSS' x='20vw' y='18vw'/>
        </div>
    </>
  )
}

export default Skills