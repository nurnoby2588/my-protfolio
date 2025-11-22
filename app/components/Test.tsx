"use client";

import asstects, { infoList, tools } from "@/assects/assets";
import Image from "next/image";
import React from "react";
import { PiGithubLogoThin } from "react-icons/pi";
import TextField from "./Atoms/TextField";
import TextArea from "./Atoms/TextArea";
import IconButton from "./Atoms/IconButton";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "motion/react"

const TestMe = () => {
    return (
        <div
            id="TestMe"
            className="
        w-full px-[12%] py-10 scroll-mt-20
        bg-[var(--background)] text-[var(--foreground)]
      "
        >
            <motion.button initial={false} animate={{ scale: 1 }} >fdasfadsfdasfdfsf</motion.button>
            <IconButton >check me </IconButton>
            <h4 className="text-center mb-2 text-lg font-ovo ">
                Introduction
            </h4>

            <h2 className="text-center text-5xl font-changa-one bg-clip-text text-transparent bg-gradient-to-l from-[#16B3A6] via-[#5E63F2] to-[#6A0F6B]">
                Testing here
            </h2>
            <h2 className="text-center text-5xl font-changa-one ">
                Testing here
            </h2>

            <div className="flex w-full flex-col justify-center lg:flex-row items-center gap-7 my-20">
                <div className="w-64 sm:w-80 rounded-3xl max-w-none bg-[var(--card-bg)]">
                    <Image
                        className="w-full rounded-3xl"
                        src={asstects.profileppic}
                        alt="profile"
                    />
                </div>

                <div className="flex-1 px-10 sm:p-3">
                    <p className="mb-10 max-w-4xl font-ovo p-6 sm:p-0 text-justify text-[var(--foreground)]">
                        I’m Nurboy, a Backend Developer specializing in Node.js, Express.js, Fastify, Prisma, and modern SQL/NoSQL databases. I focus on building fast, secure, and scalable backend systems with clean architecture and efficient APIs.
                        Previously, I worked as a Backend Developer at Bulipe Tech, contributing to performance improvements and backend workflow optimizations. I’m always learning, exploring system design, and building reliable solutions that scale.
                    </p>
                    <button className="bg-gradient-to-r [#FF6F61] via-[#F0B27A] to-[#5A6FF2] text-white rounded-lg px-4 py-2 shadow hover:brightness-105">contact me</button>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl p-6 sm:p-0">
                        {infoList.map(({ icon, title, description }, index) => (
                            <li
                                key={index}
                                className="
                  rounded-xl p-6 cursor-pointer duration-500
                  border border-[var(--border)]
                  card-gradient
               

                  hover:bg-[var(--card-bg-hover)]
                  hover:border-[var(--card-border-hover)]
                  hover:-translate-y-1.5
                  hover:shadow-[0_8px_24px_rgba(var(--shadow-rgb),0.5)]
                "
                            >
                                <div className="text-4xl mt-3 text-[var(--foreground)]">{icon}</div>

                                <h4 className="
                  my-4 font-semibold
                  text-[var(--foreground)]
                  hover:text-[var(--text-hover)]
                ">
                                    {title}
                                </h4>

                                <p className="
                  text-sm
                  text-[color-mix(in_srgb,var(--foreground) 80%, transparent)]
                  hover:text-[var(--text-hover)]
                ">
                                    {description}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <h4 className="my-6 text-xl font-ovo text-[var(--foreground)]">
                        Tools I Use
                    </h4>

                    <ul className="flex gap-5 items-center">
                        {tools.map((tool, index) => (
                            <li
                                key={index}
                                className="
                  border w-12 sm:w-14 aspect-square rounded-lg p-3.5 cursor-pointer duration-500
                  border-[var(--border)]
                  bg-[var(--card-bg)]
                  hover:-translate-y-1.5
                    hover:border-[var(--card-border-hover)]
                  hover:shadow-[0_8px_24px_rgba(var(--shadow-rgb),0.5)]
                "
                            >
                                {index === 3 ? (
                                    <PiGithubLogoThin className="text-2xl text-[var(--foreground)] hover:text-[var(--text-hover)]" />
                                ) : (
                                    <Image className="w-full sm:w-7" src={tool} alt="tool" />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <form action="" className="max-w-xl mx-auto">
                <div className="grid_auto gap-6 mt-10 mb-8">
                    <TextField
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="
        input-theme 
        border border-[var(--input-border)]
        bg-[var(--input-bg)] text-[var(--input-fg)]
        placeholder:[color:var(--placeholder)]
         hover:placeholder:[color:var(--placeholder-hover)]
        focus:placeholder:[color:var(--placeholder-focus)]
        hover:border-[var(--card-border-hover)]
      "
                    />

                    <TextField
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="
        input-theme w-full rounded-md
        border border-[var(--input-border)]
        bg-[var(--input-bg)] text-[var(--input-fg)]
        placeholder:[color:var(--placeholder)]
        hover:placeholder:[color:var(--placeholder-hover)]
        focus:placeholder:[color:var(--placeholder-focus)]
      "
                    />
                </div>

                <TextArea
                    name="message"
                    rows={6}
                    placeholder="Enter your message"
                    className="
      input-theme w-full p-4 mb-6 rounded-md
      border border-[var(--input-border)]
      bg-[var(--input-bg)] text-[var(--input-fg)]
      placeholder:[color:var(--placeholder)]
      hover:placeholder:[color:var(--placeholder-hover)]
      focus:placeholder:[color:var(--placeholder-focus)]
    "
                />

                <IconButton
                    type="submit"
                    className="
      px-8 w-max mx-auto duration-500 flex
      border border-[var(--input-border)]
      bg-[color-mix(in_srgb,var(--foreground) 10%, transparent)]
      text-[var(--foreground)]
      hover:bg-[color-mix(in_srgb,var(--foreground) 20%, transparent)]
    "
                    variant="none"
                  
                   
                > Submit now <span><IoIosArrowRoundForward className="text-3xl ml-2" /></span> </IconButton>

            </form>
            <p className="mt-4 text-5xl text-transparent bg-clip-text  bg-gradient-to-r from-[#16B3A6] via-[#5E63F2] to-[#6A0F6B]">{"result"}</p>

        </div>
    );
};

export default TestMe;
