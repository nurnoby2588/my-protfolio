import React from 'react'
import { twMerge } from 'tailwind-merge';
import { motion } from "motion/react"

type IconButtonProps = {
    children?: React.ReactNode,
    type?: "submit" | "reset" | "button" | undefined,
    onClick?: () => void,
    className?: string
    size?: 'small' | 'medium' | 'large'; // Size variants
    variant?: 'primary' | 'secondary' | 'danger' | 'none'| 'outline'; // Color variants
    disabled?: boolean; // Disabled state

}
const IconButton: React.FC<IconButtonProps> = ({children, type, onClick, className, size = 'medium', variant = 'danger', disabled = false }) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full focus:outline-none transition-all cursor-pointer';
    const sizeStyles = {
        small: 'p-2 text-sm',
        medium: 'p-3 text-base',
        large: 'p-4 text-lg',
    };
    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
        danger: 'bg-[#FF5656] text-white hover:bg-red-600',
        outline:'border',
        none: ''
    };
    const disabledStyles = 'opacity-50 cursor-not-allowed';
    const mergedClassName = twMerge(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        disabled ? disabledStyles : '',
        className
    );
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type={type} onClick={onClick} className={mergedClassName} disabled={disabled}>
           {children}
        </motion.button>
    )
}

export default IconButton
