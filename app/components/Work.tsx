import React from 'react'
import SubAndTitle from './Atoms/SubAndTitle'
import { workData } from '@/assects/assets'
import Image from 'next/image'
import { BsSendFill } from "react-icons/bs";
import IconButton from './Atoms/IconButton';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Link from 'next/link';
import { motion } from "motion/react"

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20 '>
            <SubAndTitle style='text-[var(--font-color)]' subTitle='My Protfolio' title='My latest work'
                desc='Welcome to my web developent protfolio! Explore a collection of projects showcasing my expertise in full stack devlopment'
            />
            <motion.div
                initial={{ opacity: -50, y: 50, scale: 1.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                // animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.2,
                    delay: .6,
                    // type: "spring",
                    // stiffness: 100
                }}
                className='grid_auto my-10 gap-5'>
                {workData.map(({ title, description, id, bgImage }, index) => (
                    <Link href={{
                        pathname: "/project",
                        query: { title }
                    }} key={id} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url(${bgImage})` }}>
                        <div className='bg-[var(--bg)] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-8'>
                            {/* <div>
                            <Image width={300} src={image} alt=''></Image>
                        </div> */}
                            <div >
                                <h2 className='font-semibold'>{title} </h2>
                                <p>{description} </p>
                            </div>
                            <div className='border border-[var(--border)] aspect-square rounded-full shadow-[2px_2px_0_#000] group-hover:bg-lime-300 
                             transition-all'>
                                <IconButton variant='none'  ><BsSendFill ></BsSendFill > </IconButton>
                            </div>
                        </div>
                    </Link>
                ))}
            </motion.div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: .8,
                    delay: 1.2
                }}>
                <Link className='w-max px-10 py-3 border-[0.5px] border-gray-700 rounded-full flex items-center gap-2 mx-auto text-lg my-20 hover:border-red-500 hover:text-red-500 transition-all duration-700' href="#">
                    <span>Show more</span>
                    <span><IoIosArrowRoundForward className='text-3xl' /></span>
                </Link>
            </motion.div>
        </div>
    )
}

export default Work
