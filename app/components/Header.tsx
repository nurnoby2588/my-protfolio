import asstects from '@/assects/assets'
import Image from 'next/image'
import React from 'react'
import { FaHandsClapping } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import SocialMedia from './SocialMedia';

const Header = () => {
    return (
        <div className="relative min-h-screen">
            {/* <div className="absolute inset-0 -z-10 overflow-hidden">

                <Image
                    src={asstects.herobg}
                    alt="Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 backdrop-blur-[2px] bg-white/10" />
            </div> */}

            <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
                <div >
                    <Image className='rounded-full w-40' src={asstects.profile} alt='profile'></Image>
                </div>
                <h3 className='flex items-center gap-2 text-xl md:text-2xl md-3 font-ovo'>
                    <span> Hi! I'm Nurnoby Rahaman</span>
                    <span><FaHandsClapping className='animate-bounce text-[#FF8F8F]' /> </span>

                </h3>
                <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-changa-one'>
                    Full Stack Developer
                </h1>
                <p className=' max-w-2xl mx-auto p-6 sm:p-0 font-ovo text-justify'>I am a Full-Stack Developer with 1.7 years of professional experience working with multiple companies, including Builpe Tech and BDEMR. I specialize in building scalable, efficient, and user-friendly web applications. My expertise spans both front-end and back-end development, allowing me to deliver complete solutions tailored to business needs.
                </p>
                <div className='w-full justify-center items-center sm:px-10 flex flex-col flex-wrap sm:flex-row sm:items-center gap:3  sm:gap-5  mt-4'>
                    <a className='w-50 mb-3 sm:mb-0 px-10  py-3 border border-white rounded-full bg-black text-white flex items-center gap-2' href="#contact">
                        <span>Contact me</span>
                        <span><IoIosArrowRoundForward className='text-3xl' /></span>
                    </a>
                    <button className='w-50'>
                        <a className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2' href="/Nurnoby_Rahman.pdf">
                            <span>My Resume</span>
                            <span><GoDownload className='text-xl' /> </span>
                        </a>
                    </button>
                    <SocialMedia />
                </div>

            </div>
        </div>
    )
}

export default Header
