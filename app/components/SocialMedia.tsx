import { socialAccount } from '@/assects/assets'
import React from 'react'

const SocialMedia = () => {
    return (
        <ul className='inline-flex  items-center gap-4 justify-center mt-4 sm:mt-0'>
            {socialAccount.map((account, index) => (
                <li key={index} className='inline-flex justify-center items-center border-[0.5px] w-12  sm:w-14 aspect-square border-gray-400 rounded-lg p-3.5 cursor-pointer hover:-translate-y-1.5 duration-500 hover:border-rose-400 hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)]'>
                    <a className='text-3xl ' target='-b' href={`${account.link}`}>{account.icon} </a>
                </li>
            ))}
        </ul>
    )
}

export default SocialMedia
