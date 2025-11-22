"use client";

import { motion } from "motion/react"
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import IconButton from "../components/Atoms/IconButton";
import { IoMdArrowRoundBack } from "react-icons/io";
import SubAndTitle from "../components/Atoms/SubAndTitle";
import { CiGrid41 } from "react-icons/ci";
import { PiListDashes } from "react-icons/pi";

const ProjectPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const title = searchParams.get("title") // Access the query parameter

    return (
        <div className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.div
                initial={{
                    opacity: 0, x: 20,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1,
                    delay: .8
                }} className='flex justify-between items-center '>
                <IconButton variant='outline' onClick={() => router.back()} className='px-10 py-3 flex items-center gap-2'>
                    <IoMdArrowRoundBack className="text-2xl" />
                    <span>Go Back</span>
                </IconButton>
                <span>
                    <IconButton variant='none'> <CiGrid41 className='text-3xl' /></IconButton>
                    <IconButton variant='none'> <PiListDashes className='text-3xl' /></IconButton>
                </span>
            </motion.div>
            <div>
                <SubAndTitle style="text-2xl" title={`My ${title} `}></SubAndTitle>
            </div>
            <h1>Welcome to the {title} Page</h1>
            <button onClick={() => router.back()}>go back</button>
            <button onClick={() => router.back()}>go back</button>
            <button onClick={() => router.back()}>go back</button>
        </div>
    );
};

export default ProjectPage;
