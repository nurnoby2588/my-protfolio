import Link from 'next/link';
import React from 'react'
type NavItemsProps = {
    name: string,
    route: string,
    className?: string,
    onClick?: () => void
}
const NavItems: React.FC<NavItemsProps> = ({ name, route, className, onClick }) => {

    return (
        <>
            <li className={className}>
                <Link onClick={onClick} href={`#${route}`}>{name}</Link>
            </li>
        </>
    )
}

export default NavItems
