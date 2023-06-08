import AnimatedText from '@/components/AnimatedText'
import Experience from '@/components/Experience'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/profile-pic.png'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers=({value})=>{
    const ref =useRef(null);

    const motionValue=useMotionValue(0);
    const springValue=useSpring(motionValue,{duration:3000});
    const isInView=useInView(ref,{once:true});

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }     
    }, [isInView,value,motionValue])
    

    useEffect(()=>{
        springValue.on('change',(latest)=>{
            if(ref.current && latest.toFixed(0)<=value){
                ref.current.textContent=latest.toFixed(0);
            }
        })
    },[springValue,value])
   
    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
    <Head>
        <title>About | Birhanu Kabito</title>
        <meta name='description' content='By Birhanu Kabito'/>
    </Head>
    <TransitionEffect/>
    <main className='flex w-full flex-col items-center justify-center dark:text-light overflow-x-hidden'>
        <Layout className='pt-16'>
            <AnimatedText text='Passion Fuels Purpose!' className='mb-16 !text-8xl lg:!text-6xl sm:5xl xs:!text-2xl sm:mb-8'/>
            <div className='grid w-full grid-cols-8 gap-6 sm:gap-6'>
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 xs:justify-center'>
                    <h2 className='mb-4 text-lg font-bold uppercase dark:text-light/75 text-dark/75'>Biography</h2>
                    <p className='font-sm text-justify'>
                    Hi, I'm <span className='border-b-2  border-red-500 offset-2 hover:bg-red-500 transform origin-bottom transition duration-200 hover:p-1 hover:font-semibold hover:cursor-pointer'>Birhanu Kabito</span>

                    , a skilled software developer with experience in a variety of programming
                     languages and frameworks. My technical expertise includes C++, Java, C#, HTML, CSS, JavaScript,
                      PHP, Laravel, SQL server, MYSQL, Bootstrap, React, Angular,Nextjs, Nodejs and WordPress. 
                      Additionally, I'm proficient in design using Figma, enabling me to deliver visually 
                      appealing web solutions that engage users.
                    </p>
                   <br/>
                    <p className='font-sm text-justify'>
                        My passion for web development drives me to stay up-to-date with the latest advancements 
                        in the field, ensuring that I provide my clients with the most innovative solutions possible. 
                        With my strong work ethic, keen eye for detail, and client-focused approach, I'm confident that
                         I can excel as a web developer and contribute my skills and experience to any organization.
                    </p>

                </div>

                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                xl:col-span-4 md:order-1 md:col-span-8
                bg-light dark:bg-dark dark:border-light p-8'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                    <Image src={profilePic} alt='BIRHANU KABITO' className='w-full h-auto rounded-2xl'
                     priority 
                     sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw,33vw'
                    />
                </div>

                <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>
                        <AnimatedNumbers value={5}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center  xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>
                        <AnimatedNumbers value={5}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                    </div>
                    
                    <div className='flex flex-col items-end justify-center  xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>
                        <AnimatedNumbers value={1}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Year of Expeirence</h2>
                    </div>
                </div>
            </div>
            <Skills/>
            <Experience/>
            <Education/>
        </Layout>
    </main>
    </>
  )
}

export default about