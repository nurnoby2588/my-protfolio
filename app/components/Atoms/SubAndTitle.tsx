import React from 'react'
import { motion } from "motion/react"
type SubAndTitleProps = {
    subTitle?: string
    title: string,
    desc?: string,
    style?: string;
}

const SubAndTitle: React.FC<SubAndTitleProps> = ({ subTitle, title, desc, style }) => {

    return (
        <>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.6
                }}
                className={`text-center mb-2 text-lg font-ovo ${style}`}>{subTitle}</motion.h4>
            <motion.h2 initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.9,
                    delay: 1
                }} className={`text-center text-5xl font-changa-one ${style}`}>{title}</motion.h2>
            <motion.p initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1.1,
                    delay: 1.2,
                     type: "spring",
                        stiffness: 100
                }} className={`font-ovo md:text-center max-w-2xl mx-auto mt-5 mb-12 text-justify ${style}`}>{desc}</motion.p>
        </>
    )
}

export default SubAndTitle
