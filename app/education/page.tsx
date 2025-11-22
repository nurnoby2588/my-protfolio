"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import IconButton from '../components/Atoms/IconButton';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { CiGrid41, CiGrid42 } from 'react-icons/ci';
import { PiListDashes } from 'react-icons/pi';
import SubAndTitle from '../components/Atoms/SubAndTitle';
import { educationInfo, experienceInfo } from '@/assects/assets';
import { li } from 'motion/react-client';

const page = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const title = searchParams.get("title") // Access the query parameter

    return (
        <div className='w-full px-[12%] py-10 scroll-mt-20'>
            <div className='flex justify-between'>
                <IconButton variant='outline' onClick={() => router.back()} className='px-7 py-3 flex gap-3 items-center justify-between'>
                    <IoMdArrowRoundBack />
                    <span>Go Back</span>
                </IconButton>
                <span>
                    <IconButton variant='none'> <CiGrid41 className='text-3xl' /></IconButton>
                    <IconButton variant='none'> <PiListDashes className='text-3xl' /></IconButton>
                </span>
            </div>
            <div className='fixed'>
                <SubAndTitle title='My Educatin Details'></SubAndTitle>
                <div >
                    {experienceInfo.map((experience, index) => (
                <div key={index}>
                    <h4>{experience.title}</h4>
                    <h4>{experience.timeFrame}</h4>
                    <>
                        <h4>Key Responsibilities</h4>
                        {experience.keyResponsibilities.map((value, index) => (
                            <ul key={index}>
                                <li>{value}</li>
                            </ul>
                        ))}

                        <h4>Achievements</h4>
                        {experience.achievements.map((value, index) => (
                            <ul key={index}>
                                <li>{value}</li>
                            </ul>
                        ))}
                    </>
                </div>
            ))}
                </div>

            </div>


        </div>
    );
}

export default page
