"use client";
import asstects from "@/assects/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { RiMenuUnfold4Fill } from "react-icons/ri";
import IconButton from "./Atoms/IconButton";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import NavItems from "./Atoms/NavItems";
import { FiSun } from "react-icons/fi";
import { motion } from "motion/react"

type NavbarProps = {
    isDarkMode?: boolean,
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
// Navigation items
const navitem = [
    { route: "home", name: "Home" },
    { route: "about", name: "About me" },
    { route: "services", name: "Services" },
    { route: "skill", name: "Skills" },
    { route: "work", name: "My Work" },
    { route: "contact", name: "Contact me" },
];
const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
    const sideMenuRef = useRef<HTMLUListElement | null>(null);
    const [isScroll, setIsScroll] = useState(false)
    
    const openMenu = () => {
        sideMenuRef.current
            ? (sideMenuRef.current.style.transform = "translateX(-16rem)")
            : null;
    };

    const closeMenu = () => {
        sideMenuRef.current
            ? (sideMenuRef.current.style.transform = "translateX(16rem)")
            : null;
    };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            }
            else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
        <>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between z-40 ${isScroll ? " shadow-sm backdrop-blur-lg transparent-bg" : ""}`}
            >
                {/* Left Logo */}
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="#top"
                    className="lg:mr-[10%]">
                    <Image
                        src={asstects.nurlogo}
                        alt="logo"
                        className="w-20 cursor-pointer  animate-bounce"
                    />

                </motion.a>

                {/* Center Navigation */}
                <ul
                    className={`hidden md:flex items-center justify-center gap-6 lg:gap-8  px-12 py-3  mx-auto ${isScroll ? "" : "shadow-sm rounded-full nab-item-bg"}`}
                >
                    {navitem.slice(0,5).map((item, index) => (
                        <NavItems
                            className="font-ovo"
                            name={item?.name}
                            route={item?.route}
                            key={index}
                        />
                    ))}
                </ul>

                {/* Right Buttons */}
                <div className="flex items-center gap-2 justify-end">
                    <motion.button
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            setIsDarkMode(prev => {
                                const next = !prev;
                                // persist the next value
                                try {
                                    localStorage.setItem("mode", JSON.stringify(next));
                                } catch { }
                                return next;
                            });
                        }}
                        className="text-3xl cursor-pointer"
                    >
                        {isDarkMode ? <IoMoonOutline /> : <FiSun />}
                    </motion.button>


                    {/* Contact Button */}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden lg:flex items-center gap-3 px-10 py-2 border-2 border-[var(--border)] rounded-full ml-4  "
                        href="#contact"
                    >
                        <span> Contact me</span>
                        <span className="text-xl">
                            <MdArrowOutward />
                        </span>
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <IconButton
                        variant="none"
                        onClick={openMenu}
                        size="small"
                       
                    > <RiMenuUnfold4Fill className="text-3xl block md:hidden" /></IconButton>
                </div>

                {/* Mobile Menu */}
                <ul
                    ref={sideMenuRef}
                    className="font-ovo flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[var(--rightbar-bg)] transition-transform duration-500"
                >
                    {/* Close Button */}
                    <div>
                        <MdClose
                            className="text-3xl cursor-pointer absolute right-8 top-6"
                            onClick={closeMenu}
                        />
                    </div>

                    {/* Mobile Navigation Items */}
                    {navitem.map((item, index) => (
                        <NavItems
                            onClick={closeMenu}
                            className="font-ovo"
                            name={item?.name}
                            route={item?.route}
                            key={index}
                        />
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
