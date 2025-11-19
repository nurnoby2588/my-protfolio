import React from 'react'
import { twMerge } from 'tailwind-merge';

type IconButtonProps = {
    icon?: React.ReactNode,
    type?: "submit" | "reset" | "button" | undefined,
    name?: React.ReactNode,
    onClick?: () => void,
    className?: string
    size?: 'small' | 'medium' | 'large'; // Size variants
    variant?: 'primary' | 'secondary' | 'danger' | 'none'; // Color variants
    disabled?: boolean; // Disabled state

}
const IconButton: React.FC<IconButtonProps> = ({ type, name, icon, onClick, className, size = 'medium', variant = 'danger', disabled = false }) => {
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
        <button type={type} onClick={onClick} className={mergedClassName} disabled={disabled}>
            <samp>
                {name}
            </samp>
            {icon}
        </button>
    )
}

export default IconButton
