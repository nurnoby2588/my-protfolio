"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import IconButton from '../components/Atoms/IconButton';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { CiGrid41, CiGrid42 } from 'react-icons/ci';
import { PiListDashes } from 'react-icons/pi';
import SubAndTitle from '../components/Atoms/SubAndTitle';
import { educationInfo, experienceInfo } from '@/assects/assets';
import { motion } from "motion/react"

const page = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const title = searchParams.get("title") // Access the query parameter

    return (
        <div className='w-full px-[12%] py-10 scroll-mt-20 '>
            <motion.div 
            initial={{
                opacity:0, x:20,
            }}
            whileInView={{opacity:1,x:0}}
            transition={{
                duration:1,
                delay:.8
            }} className='flex items-center '>
                <IconButton variant='outline' onClick={() => router.back()} className='px-7 py-3 '>
                    <IoMdArrowRoundBack />
                    <span>Go Back</span>
                </IconButton>
                {/* <span>
                    <IconButton variant='none'> <CiGrid41 className='text-3xl' /></IconButton>
                    <IconButton variant='none'> <PiListDashes className='text-3xl' /></IconButton>
                </span> */}
            </motion.div>
            <motion.div 
            initial={{
                opacity:0, y:20,
            }}
            whileInView={{opacity:1,y:0}}
            transition={{
                duration:1,
                delay:.8
            }}
            className='flex flex-col gap-3 items-center justify-center'>
                <SubAndTitle title='My Experience Details'></SubAndTitle>
                <div className='flex flex-col gap-5'>
                    {experienceInfo.map((experience, index) => (
                        <div key={index} className='border p-6 rounded-md'>
                            <h4 className='text-2xl font-bold'>{experience.title}</h4>
                            <h4 className='text-2xl font-bold'>{experience.timeFrame}</h4>
                            <>
                                <h4 className='text-xl font-bold mt-2'>Key Responsibilities</h4>
                                {experience.keyResponsibilities.map((value, index) => (
                                    <ul key={index} className='list-disc ml-6'>
                                        <li>{value}</li>
                                    </ul>
                                ))}

                                <h4 className='text-xl font-bold mt-2' >Achievements</h4>
                                {experience.achievements.map((value, index) => (
                                    <ul key={index} className='list-disc ml-6'>
                                        <li>{value}</li>
                                    </ul>
                                ))}
                            </>
                        </div>
                    ))}
                </div>

            </motion.div>


        </div>
    );
}

export default page
