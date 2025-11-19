import React from 'react'
type SubAndTitleProps = {
    subTitle: string
    title: string,
    desc?: string
}

const SubAndTitle: React.FC<SubAndTitleProps> = ({ subTitle, title, desc }) => {
    return (
        <>
            <h4 className='text-center mb-2 text-lg font-ovo'>{subTitle}</h4>
            <h2 className='text-center text-5xl font-changa-one'>{title}</h2>
            <p className='font-ovo md:text-center max-w-2xl mx-auto mt-5 mb-12 text-justify'>{desc}</p>
        </>
    )
}

export default SubAndTitle
