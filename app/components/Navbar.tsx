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

// Navigation items
const navitem = [
    { route: "home", name: "Home" },
    { route: "about", name: "About me" },
    { route: "services", name: "Services" },
    { route: "work", name: "My Work" },
    { route: "contact", name: "Contact Me" },
];

const Navbar: React.FC = () => {
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
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between z-50 ${isScroll ? " shadow-sm backdrop-blur-lg " : ""}`} style={isScroll ? { backgroundColor: "rgba(255, 255, 255, 0.5)" } : {}}>
                {/* Left Logo */}
                <a href="#top">
                    <Image
                        src={asstects.nurlogo}
                        alt="logo"
                        className="w-20 cursor-pointer mr-14 animate-bounce"
                    />

                </a>

                {/* Center Navigation */}
                <ul
                    className={`hidden md:flex items-center justify-center gap-6 lg:gap-8  px-12 py-3  mx-auto ${isScroll ? "" : "shadow-sm rounded-full"}`}
                    style={isScroll ? {} : { backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                >
                    {navitem.map((item, index) => (
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
                    {/* Dark Mode Button */}
                    <button className="text-3xl cursor-pointer">
                        <IoMoonOutline />
                    </button>

                    {/* Contact Button */}
                    <a
                        className="hidden lg:flex items-center gap-3 px-10 py-1 border-2 border-gray-500 rounded-full ml-4 hover:border-red-500 hover:text-red-500 transition-all duration-700"
                        href="#contact"
                    >
                        <span> Contact</span>
                        <span className="text-xl">
                            <MdArrowOutward />
                        </span>
                    </a>

                    {/* Mobile Menu Button */}
                    <IconButton
                        variant="none"
                        onClick={openMenu}
                        size="small"
                        icon={<RiMenuUnfold4Fill className="text-3xl block md:hidden" />}
                    />
                </div>

                {/* Mobile Menu */}
                <ul
                    ref={sideMenuRef}
                    className="font-ovo flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-sereen bg-rose-50 transition-transform duration-500"
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
