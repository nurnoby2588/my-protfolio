import asstects, { emailAccount, socialAccount } from '@/assects/assets'
import Image from 'next/image'
import React from 'react'
import { IoIosMail } from "react-icons/io";
import SocialMedia from './SocialMedia';
import { motion } from "motion/react"


function Footer() {
    const year = new Date().getFullYear().toString()
    const name = "Nurnoby Rahaman"
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: .8,
                delay: 1
            }}
            className=' mt-10'>
            <div className='w-full px-[12%] py-10 '>
                <Image className='w-30 mx-auto my-2' src={asstects.nurlogo} alt=''></Image>
                <div className='flex items-center justify-center gap-2'>
                    <Image className='w-5 sm:w-6' src={asstects.mail} alt=''></Image>
                    {/* <IoIosMail className='text-3xl'/> */}
                    <span className='font-bold'>{emailAccount}</span>
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between gap-10 border-t-2 border-[var(--border)] mx-[10%] mt-12 py-6'>
                <p>© {year} {name}. All rights reserved</p>
                <SocialMedia></SocialMedia>
            </div>
        </motion.div>
    )
}

export default Footer
