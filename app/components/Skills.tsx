import { skills } from '@/assects/assets'
import React from 'react'
import SubAndTitle from './Atoms/SubAndTitle'
import { motion } from "motion/react"
import Image from 'next/image'

const Skills = () => {
    return (
        <div
            id='skill'
            className='w-full px-[8%] py-10 mt-10 mb-10 scroll-mt-20'
        >
            <SubAndTitle subTitle='A quick look at what I do best.' title='Technical Skills' desc='I build modern, scalable web applications using Node.js, Express, Prisma, React, Next.js, and MongoDB/PostgreSQL. I focus on clean architecture, secure APIs, and efficient database design while creating responsive, intuitive frontend experiences with Tailwind CSS.' style='text-[var(--font-color)]'></SubAndTitle>
            <motion.ul
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration:1,
                    delay:1
                }}
                className='
                  sm:px-15
                grid 
                           grid-cols-3 
                           sm:grid-cols-4 
                           md:grid-cols-5 
                           lg:grid-cols-6 
                           xl:grid-cols-8 
                           gap-4 sm:gap-6 md:gap-8'
            >
                {skills.map(({ title, image, icon: Icon }, index) => (
                    // <li
                    //     key={index}
                    //     className='flex flex-col gap-2 justify-center items-center 
                    //                border border-[var(--border)]
                    //                bg-[var(--card-bg)]
                    //                rounded-lg 
                    //                p-4 
                    //                shadow-sm
                    //                hover:-translate-y-2
                    //                hover:shadow-md 
                    //                hover:border-[var(--border-hover)]
                    //                duration-300 
                    //                cursor-pointer'
                    // >
                    //     <span> <Icon className='text-3xl sm:text-4xl ' /> </span>
                    //     <span className='capitalize font-bold'> {title}</span>

                    // </li>
                    <li
                        key={index}
                        className='flex flex-col gap-2 justify-center items-center 
                                   border border-[var(--border)]
                                   bg-[var(--card-bg)]
                                   rounded-lg 
                                   px-4 
py-8
                                   shadow-sm
                                   hover:-translate-y-2
                                   hover:shadow-md 
                                   hover:border-[var(--border-hover)]
                                   hover:bg-[var(--card-bg-hover)]
                                   duration-300 
                                   cursor-pointer'
                    >
                        <span> <Image className='w-15 ' src={image} alt=''></Image> </span>
                        <span className='capitalize font-bold '> {title}</span>

                    </li>
                ))}
            </motion.ul>
        </div>
    )
}

export default Skills
