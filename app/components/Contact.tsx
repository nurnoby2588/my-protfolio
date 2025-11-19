"use client"
import React, { useState } from 'react'
import SubAndTitle from './Atoms/SubAndTitle'
import bg from '@/public/background.png'
import TextField from './Atoms/TextField'
import TextArea from './Atoms/TextArea'
import IconButton from './Atoms/IconButton'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "754e40bc-4b38-4667-93a8-5e10ecd038e8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 '>
            <div>
                <SubAndTitle title='Get in touch' subTitle='Contact with me' desc="I'd love to hear from you! If you have any question, comments, or feedback, please use the from below"></SubAndTitle>
            </div>
            <form action="" onSubmit={onSubmit} className='max-w-xl mx-auto'>
                <div className='grid_auto gap-6 mt-10 mb-8'>

                    {/* <input type="text" /> */}
                    <TextField name='name' type='text' placeholder='Enter you name' ></TextField>
                    <TextField name='email' type='email' placeholder='Enter you Email' ></TextField>
                </div>
                <TextArea name='message' rows={6} placeholder='Enter your message' className='w-full p-4 mb-6'></TextArea>
                <IconButton type='submit' className='px-8 w-max bg-black/80 text-white mx-auto hover:bg-black duration-500 flex' variant='none' name='Submit now' icon={<IoIosArrowRoundForward className='text-3xl ml-2' />}></IconButton>
                <p className='mt-4'>{result}</p>
            </form>
        </div>
    )
}

export default Contact
