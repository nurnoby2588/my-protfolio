"use client"
import React, { useState } from 'react'
import SubAndTitle from './Atoms/SubAndTitle'
import bg from '@/public/background.png'
import TextField from './Atoms/TextField'
import TextArea from './Atoms/TextArea'
import IconButton from './Atoms/IconButton'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { motion } from "motion/react"

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
                <SubAndTitle style='text-[var(--font-color)]' title='Get in touch' subTitle='Contact with me' desc="I'd love to hear from you! If you have any question, comments, or feedback, please use the from below"></SubAndTitle>
            </div>
            <form action="" onSubmit={onSubmit} className='max-w-xl mx-auto'>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: .8,
                        delay: 1.2
                    }}
                    className='grid_auto gap-6 mt-10 mb-8'>

                    {/* <input type="text" /> */}
                    <TextField className="input-theme 
        border border-[var(--input-border)]
        bg-[var(--input-bg)] text-[var(--input-fg)]
        placeholder:[color:var(--placeholder)]
         hover:placeholder:[color:var(--placeholder-hover)]
        focus:placeholder:[color:var(--placeholder-focus)]
        hover:border-[var(--card-border-hover)]
      "  name='email' type='email' placeholder='Enter you Email' ></TextField>
                    <TextField className="
        input-theme 
        border border-[var(--input-border)]
        bg-[var(--input-bg)] text-[var(--input-fg)]
        placeholder:[color:var(--placeholder)]
         hover:placeholder:[color:var(--placeholder-hover)]
        focus:placeholder:[color:var(--placeholder-focus)]
        hover:border-[var(--card-border-hover)]
      " name='name' type='text' placeholder='Enter you name' ></TextField>
                </motion.div>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: .8,
                        delay: 1.2
                    }}>

                    <TextArea name='message' rows={6} placeholder='Enter your message' className="
      input-theme w-full p-4 mb-6 rounded-md
      border border-[var(--input-border)]
      bg-[var(--input-bg)] text-[var(--input-fg)]
      placeholder:[color:var(--placeholder)]
      hover:placeholder:[color:var(--placeholder-hover)]
      focus:placeholder:[color:var(--placeholder-focus)]
    "></TextArea>
                </motion.div>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: .8,
                        delay: 1.2
                    }}>
                    <IconButton type='submit' className='px-8 w-max border bg-black/80 text-white mx-auto hover:bg-black  flex' variant='none' >
                        Submit now
                        <span>
                            <IoIosArrowRoundForward className='text-3xl ml-2' />
                        </span>
                    </IconButton>
                </motion.div>
                <p className='mt-4'>{result}</p>
            </form>
        </div>
    )
}

export default Contact
