import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import yes from '../../public/images/projects/yes.png'
import eonline from '../../public/images/projects/eonline.png'
import eicad from '../../public/images/projects/eicad.png'
import eyooad from '../../public/images/projects/eyooad.png'
import eyooweb from '../../public/images/projects/eyoo3.png'
import gadaa from '../../public/images/projects/gadaa.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage=motion(Image)
const FeaturedProject=({type,title,summary,img,link,github})=>{
    return(

        <article className='w-full p-12 flex items-center 
        justify-between rounded-3xl border border-solid
        border-dark bg-light shadow-2xl relative
        rounded-br-2xl dark:bg-dark dark:border-light
        lg:flex-col ld:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
           
            <Link href={link} target='_blank'
            className='w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg '
            >
                <FramerImage
                 whileHover={{scale:1.05}}
                 transition={{duration:.2}}
                src={img} alt={title} className='w-full h-auto'
                priority 
                sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw,50vw'
                />
            </Link>
            <div className='w-1/2 lg:w-full lg:pl-0 pt-6 flex flex-col  items-start justify-between pl-6 '>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link className='w-10' href={github} target='_blank'><GithubIcon/></Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg  bg-dark text-light p-2  px-6 text-lg dark:bg-light dark:text-dark font-semibold
                    sm:px-4 sm:text-base
                    '>Visit Project</Link>
                </div>
            </div>


        </article>
    )
}
const Project=({title,type,img,link,github})=>{
    return(
        <article className='w-full flex-col items-center  dark:bg-dark dark:border-light justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
            <div className='absolute dark:bg-light top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:g-dark
             xs:p-4
            '
            />
             
              <Link href={link} target='_blank'
            className='w-full inline-block cursor-pointer overflow-hidden rounded-lg md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'
            >
                <FramerImage
                 whileHover={{scale:1.05}}
                 transition={{duration:.2}}
                src={img} alt={title} className='w-full h-auto'/>
            </Link>
            <div className='w-full flex flex-col  items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='mt-2 flex items-center justify-between w-full'>
                    <Link href={link} target='_blank' 
                        className='text-lg font-semibold underline underline-offset-2 md:text-base'>Visit
                    </Link>
                    <Link className='w-8 md:w-8' href={github} target='_blank'><GithubIcon/></Link>
                   
                </div>
            </div>
        </article>
    )
}
const projects = () => {
  return (
    <>
     <Head>
        <title>Projects | Birhanu Kabito</title>
        <meta name='description' content='By Birhanu Kabito'/>
    </Head>
    <TransitionEffect/>

    <main className='w-full flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text='Imagination Trumps Knowledge!' className='mb-16 lg:!text-6xl sm:!text-5xl sm:mb-8 xs:!text-3xl xs:!text-light sm:mb-8!'/>

            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12'>
                   <FeaturedProject
                    link='https://www.yes.et'
                    title='Job Portal Platform'
                    summary="
                    Developed using WordPress, Superio theme, Bootstrap, Elementor, social login, and other technologies provides a
                     feature-rich platform for job seekers and employers. It allows users to search for
                      job vacancies, create job profiles, and apply for jobs. Additionally, it includes social 
                      login features for easy access, and its responsive design ensures that users can access the portal from any device"
                    github='/'
                    type='Featured Project'
                    img={yes}
                   
                   />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project
                   title='Eyoo fun Website'
                   summary="
                    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency."
                    link='https://eyoofun.netlify.app/'
                    github='/'
                    type='Featured Project'
                    img={eyooweb}
                   
                   />                
                </div>
                <div className='col-span-6 sm:col-span-12'>
                    <Project
                    title='Gadaa News ~ Blog Website'
                    summary="
                        A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link='www.gadanews.com'
                        github='/'
                        type='Featured Project'
                        img={gadaa}
                    
                    />    
                </div>
                <div className='col-span-12'>
                    <FeaturedProject
                    title='EIC Call Center Directory Listing Website'
                    link='https://www.eagleinformationcenter.com'
                    summary="
                    The EIC Directory Listing Website is a robust web 
                    application developed using 
                    Laravel and React. This cutting-edge platform
                     provides an extensive directory of businesses 
                     and services in Ethiopia, making it easy for users 
                     to find what they need quickly and efficiently."
                        github='/'
                        type='Featured Project'
                        img={eonline}
                    
                    />                
                </div>
                <div className='col-span-6 sm:col-span-12'>
                    <Project
                    title='EIC Call Center Application'
                    summary="
                        A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link='/'
                        github='/'
                        type='Featured Project'
                        img={eicad}
                    
                    />    
                </div>
                <div className='col-span-6 sm:col-span-12'>
                    <Project
                    title='Eyoo Admin Dashboard'
                    summary="
                        A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link='/'
                        github='/'
                        type='Featured Project'
                        img={eyooad}
                    
                    />    
                </div>
            </div>
        </Layout>
    </main>
    </>
  )
}

export default projects