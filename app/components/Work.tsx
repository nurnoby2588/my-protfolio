import React from 'react'
import SubAndTitle from './Atoms/SubAndTitle'
import { workData } from '@/assects/assets'
import Image from 'next/image'
import { BsSendFill } from "react-icons/bs";
import IconButton from './Atoms/IconButton';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Link from 'next/link';

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20 '>
            <SubAndTitle subTitle='My Protfolio' title='My latest work'
                desc='Welcome to my web developent protfolio! Explore a collection of projects showcasing my expertise in full stack devlopment'
            />
            <div className='grid_auto my-10 gap-5'>
                {workData.map((project, index) => (
                    <div key={project.id} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url(${project.bgImage})` }}>
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-8'>
                            {/* <div>
                            <Image width={300} src={project.image} alt=''></Image>
                        </div> */}
                            <div >
                                <h2>{project.title} </h2>
                                <p>{project.description} </p>
                            </div>
                            <div className='border border-gray-600 aspect-square rounded-full shadow-[2px_2px_0_#000] group-hover:bg-lime-300
                             transition-all'>
                                <IconButton variant='none' icon={<BsSendFill ></BsSendFill >} ></IconButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Link className='w-max px-10 py-3 border-[0.5px] border-gray-700 rounded-full flex items-center gap-2 mx-auto text-lg my-20 hover:border-red-500 hover:text-red-500 transition-all duration-700' href="#">
                    <span>Show more</span>
                    <span><IoIosArrowRoundForward className='text-3xl' /></span>
                </Link>
            </div>
        </div>
    )
}

export default Work
