import React from 'react'
type TestButtonProps = {
    icon?: React.ReactNode,
    type?: "submit" | "reset" | "button" | undefined,
    name?: React.ReactNode,
    onClick?: () => void,
    className?: string
    size?: 'small' | 'medium' | 'large'; // Size variants
    variant?: 'primary' | 'secondary' | 'danger' | 'none'; // Color variants
    disabled?: boolean; // Disabled state

}
const TextButton = ({ children, type, onClick, className, size = 'medium', variant = 'danger', disabled = false }) => {
    return (
        <button className={className}>
            {children}
        </button>
    )
}

export default TextButton
