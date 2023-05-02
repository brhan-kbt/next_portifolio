import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import pagination from '../../public/images/articles/pagination component in reactjs.jpg'
import modal from '../../public/images/articles/create modal component in react using react portals.png'
import validation from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import scrolling from '../../public/images/articles/smooth scrolling in reactjs.png'
import todo from '../../public/images/articles/todo list app built using react redux and framer motion.png'
import deploynext from '../../public/images/articles/deploy.png'
import redux from '../../public/images/articles/What is Redux with easy explanation.png'
import hoc from '../../public/images/articles/What is higher order component in React.jpg'
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage=motion(Image)

const FeaturedArticle=({img,title,time,summary,link})=>{
    return(
        <li className='col-span-1 dark:bg-dark dark:border-light relative w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'/>
            
            <Link href={link} target='_blank'
            className='w-full inline-block cursor-pointer overflow-hidden rounded-lg '
            >
                <FramerImage 
                whileHover={{scale:1.05}}
                transition={{duration:.2}}
                src={img} alt={title} className='w-full h-auto'
                priority 
                sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw,50vw'
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline underline-offset-2 xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}

const Article=({img,title,date,link})=>{
    return(
        <motion.li 
        initial={{y:200}}
        whileInView={{y:0,transition:{duration:0.5,ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
        bg-light text-dark first:mt-0 border border-solid border-dark
       border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
       sm:flex-col
       '>
            <MovingImg title={title} img={img} link={link}/>
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const MovingImg=({title,img,link})=>{

    const x=useMotionValue(0);
    const y=useMotionValue(0);
    const imgRef=useRef(null);

    function handleMouse(e){
        imgRef.current.style.display='inline-block';
        x.set(e.pageX);
        y.set(-10);
    }
    function handleMouseLeave(e){
        imgRef.current.style.display='none';
        x.set(0);
        y.set(0);
    }

    return(
        <Link href={link} target='_blank'
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className='font-semibold text-md hover:underline underline-offset-2'>
                {title}
            </h2>
            <FramerImage
            style={{x:x,y:y}}
            initial={{opacity:0}}
            whileInView={{opacity:1,transition:{duration:0.2}}}
            ref={imgRef} src={img} alt={title} className='w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden'/>
        
        </Link>
    )
}
const articles = () => {
  return (
    <>
     <Head>
        <title>Articles | Birhanu Kabito</title>
        <meta name='description' content='By Birhanu Kabito'/>
    </Head>
    <TransitionEffect/>
    <main className='dark:text-light w-full flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
            <AnimatedText text='Words Can Change The World! ' className='mb-16 lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-3xl'/>
            <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1'>
                    <FeaturedArticle
                        title='Build A Custom Pagination Component In Reactjs From Scratch'
                        summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                            Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
                        time='9 min read'
                        link='https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/'
                        img={pagination}
                    />
                    <FeaturedArticle
                            title='How to Deploy Next.js Sites to Netlify'
                            summary='Netlify provides a powerful CLI that allows you to interact with your account. 
                            This means you can deploy a Next.js site to Netlify without ever leaving the command line! '
                            time='5 min read'
                            link=''
                            img={deploynext}
                        />
            </ul>
            <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
            <ul>
                <Article
                title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                img={validation}
                date='April 17, 2023'
                link='https://www.bing.com/search?q=Form+Validation+In+Reactjs%3A+Build+A+Reusable+Custom+Hook+For+Inputs+And+Error+Handling&cvid=5ca9c96c1dc14613990ae668cce8ec1b&aqs=edge..69i57.299j0j4&FORM=ANAB01&PC=U531'
                />
                 <Article
                title='Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers       '
                img={scrolling}
                date='April 17, 2023'
                link='https://www.bing.com/search?q=Silky+Smooth+Scrolling+In+Reactjs%3A+A+Step-By-Step+Guide+For+React+Developers&cvid=8182484b39f74ab69f5e1939f2446b18&aqs=edge..69i57.371j0j4&FORM=ANAB01&PC=U531'
                />
                 <Article
                title='Creating An Efficient Modal Component In React Using Hooks And Portals
                '
                img={modal}
                date='April 17, 2023'
                link='https://wecodetheweb.com/2019/03/02/easy-modals-with-react-hooks/#:~:text=We%20used%20hooks%20and%20render%20props%20to%20create,anywhere%2C%20but%20is%20positioned%20consistently%20on%20the%20page.'
                />
                 <Article
                title='Build A Fabulous Todo List App With React, Redux And Framer-Motion
                '
                img={todo}
                date='April 17, 2023'
                link='https://dev.to/shaifarfan08/a-complete-react-todo-app-using-react-redux-framer-motion-2hk0'
                />
                 <Article
                title='Redux Simplified: A Beginners Guide For Web Developers
                '
                img={redux}
                date='April 17, 2023'
                link='https://redux.js.org/tutorials/fundamentals/part-1-overview'
                />
                  <Article
                title='What Is Higher Order Component (Hoc) In React?
                '
                img={hoc}
                date='April 17, 2023'
                link='https://medium.com/geekculture/understanding-react-higher-order-component-hoc-8e7a96820205'
                />
            </ul>
        </Layout>
    </main>
    </>
  )
}

export default articles