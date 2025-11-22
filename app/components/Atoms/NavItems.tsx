import Link from 'next/link';
import React from 'react'
import { motion } from "motion/react"
type NavItemsProps = {
    name: string,
    route: string,
    className?: string,
    onClick?: () => void
}
const NavItems: React.FC<NavItemsProps> = ({ name, route, className, onClick }) => {

    return (
        <>
            <motion.li
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className={className}>
                <Link onClick={onClick} href={`#${route}`}>{name}</Link>
            </motion.li>
        </>
    )
}

export default NavItems
