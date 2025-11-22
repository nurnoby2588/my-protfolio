"use client"
import asstects, { educationInfo, experienceInfo, infoList, tools } from '@/assects/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { PiGithubLogoThin } from 'react-icons/pi'
import SubAndTitle from './Atoms/SubAndTitle'
import { motion } from "motion/react"
import Link from 'next/link'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import IconButton from './Atoms/IconButton'
import { IoMdClose } from 'react-icons/io'
import { TbHandClick } from 'react-icons/tb'

const About = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const a = localStorage.theme
    })
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 '>
            <SubAndTitle subTitle='Introduction' title='About me' style='text-[var(--font-color)]'></SubAndTitle>
            {/* <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-changa-one'>About me</h2> */}

            <div className='flex w-full flex-col justify-center lg:flex-row items-center gap-7 my-20 '>
                <motion.div
                    initial={{ opacity: -5 }}
                    whileInView={{ opacity: 1 }}
                    // animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.5,
                        delay: .6,
                        // type: "spring",
                        // stiffness: 100
                    }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image className='w-full rounded-3xl' src={asstects.profileppic} alt='profile'></Image>
                </motion.div>
                <div className='flex-1 px-10 sm:p-3'>
                    <motion.p
                        initial={{ opacity: -5, scale: 1.1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        // animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: .8,
                            delay: .6,
                            // type: "spring",
                            // stiffness: 100
                        }}
                        className='mb-10 max-w-4xl font-ovo p-6 sm:p-0 text-justify text-[var(--font-color)]'>I’m Nurboy, a Backend Developer specializing in Node.js, Express.js, Fastify, Prisma, and modern SQL/NoSQL databases. I focus on building fast, secure, and scalable backend systems with clean architecture and efficient APIs.

                        Previously, I worked as a Backend Developer at Bulipe Tech, contributing to performance improvements and backend workflow optimizations. I’m always learning, exploring system design, and building reliable solutions that scale.
                    </motion.p>
                    <motion.ul
                        initial={{ opacity: -5, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        // animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1.2,
                            delay: .6,
                            type: "spring",
                            stiffness: 100
                        }}

                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl p-6 sm:p-0 '>
                        {/* {infoList.map(({ id, icon, iconDark, title, description }, index) => (

                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                key={index} className=' border-[0.5px] border-[var(--border)] rounded-xl p-6 cursor-pointer bg-[var(--card-bg)]
                              hover:bg-[var(--card-bg-hover)] card-gradient
                              hover:border-[var(--border-hover)] group'
                            >
                                <Link
                                    
                                    href={{
                                        pathname: `${title === "Project" ? "/project" : title === "Education" ? `${() => setOpen(true)}` : "/experience"

                                            }`,
                                        query: { title }

                                    }}


                                // href={`${
                                //     title ==="Project"? '/project':(title ==="Education"? "/education":"/experience")
                                // }` }
                                >
                                    <div className='text-4xl mt-3'>{icon}</div>
                                    <h4 className='my-4 font-semibold  text-[var(--font-color)]'>{title}</h4>
                                    <div className='relative'>
                                        <p
                                            className='text-sm text-[var(--font-color)] transition-opacity duration-300 ease-in-out group-hover:hidden'
                                        >
                                            {description}
                                        </p>
                                        <button
                                            className='hidden flex justify-center items-center gap-2 group-hover:flex text-sm font-semibold text-[var(--font-color)] transition-opacity duration-300 ease-in-out'
                                        >
                                            <TbHandClick className='text-2xl' />
                                            <span>
                                                Show Details
                                            </span>
                                        </button>
                                    </div>
                                </Link>

                            </motion.li>
                        ))} */}
                        {infoList.map(({ id, icon, title, description }) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                key={id}
                                className='relative border-[0.5px] border-[var(--border)] rounded-xl p-6 cursor-pointer bg-[var(--card-bg)]
          hover:bg-[var(--card-bg-hover)] card-gradient
          hover:border-[var(--border-hover)] group'
                            >
                                {/* Conditional Link */}
                                {title === "Education" ? (
                                    <div
                                        onClick={() => {
                                            // Handle your onClick logic here
                                            setOpen(true);

                                        }}
                                        className='cursor-pointer'
                                    >
                                        <AboutCardDetails icon={icon} title={title} description={description} />
                                    </div>
                                ) : (
                                    <Link
                                        href={{
                                            pathname: `${title === "Project" ? "/project" : "/experience"}`,
                                            query: { title },
                                        }}
                                    >
                                        <AboutCardDetails icon={icon} title={title} description={description} />
                                    </Link>
                                )}
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.h4
                        initial={{ opacity: -5, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        // animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1.2,
                            delay: .6,
                            type: "spring",
                            stiffness: 100
                        }}
                        className='my-6 text-xl  font-ovo text-[var(--font-color)]'>Tools I Use</motion.h4>
                    <motion.ul
                        initial={{ opacity: -5, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        // animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1.2,
                            delay: .6,
                            type: "spring",
                            stiffness: 100
                        }}
                        className='flex gap-5  items-center'>
                        {tools.map((tool, index) => (
                            <li key={index} className='border-[0.5px] w-12 sm:w-14 aspect-square  rounded-lg p-3.5 cursor-pointer hover:-translate-y-1.5 duration-500 border-[var(--border)] hover:border-[var(--border-hover)] hover:shadow-[var(--card-shadow)] hover:bg-[var(--card-bg)]'>
                                {(index === 3) ? <PiGithubLogoThin className='text-2xl' /> : <Image className='w-full sm:w-7' src={tool} alt={"index"}></Image>}


                            </li>

                        ))}
                    </motion.ul>
                </div>
            </div>
            <div>
                <Dialog open={open} onClose={setOpen} className="relative z-10">
                    <DialogBackdrop
                        transition
                        className="fixed  inset-0 bg-[var(--dialog-bg)] transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                    />

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <DialogPanel
                                transition
                                className="relative  transform overflow-hidden rounded-lg  text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:w-3xl  data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                            >
                                <div

                                    className="bg-[var(--dialoag-card-bg)] relative w-full px-4 flex justify-center pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">


                                        <div
                                            className=" mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <DialogTitle as="h3" className=" text-5xl font-changa-one w-full inline-flex  text-center mx-auto justify-center items-center">

                                                My Education Details
                                                <IconButton type="button"
                                                    onClick={() => setOpen(false)} className='absolute top-5 right-5'><IoMdClose /></IconButton>
                                            </DialogTitle>
                                            {/* <div
                                                className="mt-5">
                                                {educationInfo.map((item, index) => (
                                                    <div key={index} className='border max-w-xl mb-2 p-5 rounded-lg'>
                                                        <h4>{item.title}</h4>
                                                        {item.details.map((value, index) => (
                                                            <ul key={index} className='ml-6 list-disc'>
                                                                <li >{value.Institution}</li>
                                                                <li >{value.Graduation}</li>
                                                                <li>{value.CGPA}</li>
                                                            </ul>
                                                        ))}
                                                    </div>
                                                ))}

                                            </div> */}

                                            <EducationDetails />



                                        </div>
                                    </div>
                                </div>

                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </div >
        </div >
    )
}

export default About

const AboutCardDetails = ({ icon, title, description }) => {
    return (
        <>
            <div className='text-4xl mt-3'>{icon}</div>
            <h4 className='my-4 font-semibold text-[var(--font-color)]'>{title}</h4>
            <div className='relative'>
                <p className='text-sm text-[var(--font-color)] transition-opacity duration-300 ease-in-out group-hover:hidden'>
                    {description}
                </p>
                <button className='hidden flex justify-center items-center gap-2 group-hover:flex text-sm font-semibold text-[var(--font-color)] transition-opacity duration-300 ease-in-out'>
                    <TbHandClick className='text-2xl' />
                    <span>Show Details</span>
                </button>
            </div>
        </>
    )
}

const EducationDetails = () => {
    return (
        <div
            className="mt-5">
            {educationInfo.map((item, index) => (
                <div key={index} className='border max-w-xl mb-2 p-5 rounded-lg'>
                    <h4>{item.title}</h4>
                    {item.details.map((value, index) => (
                        <ul key={index} className='ml-6 list-disc'>
                            <li >{value.Institution}</li>
                            <li >{value.Graduation}</li>
                            <li>{value.CGPA}</li>
                        </ul>
                    ))}
                </div>
            ))}

        </div>
    )
}

