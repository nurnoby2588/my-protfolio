import React from 'react'
import { twMerge } from 'tailwind-merge'
type TextFieldProps = {
    placeholder: string, type?: string, className?: string, id?: string, name?: string, onChange?: () => void
}
const TextField: React.FC<TextFieldProps> = ({ id, name, placeholder, type, className, onChange }) => {
    const baseStyle = 'flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
    const margeStyle = twMerge(
        baseStyle,
        className
    )
    return (
        <>
            <input onChange={onChange} id={id} name={name} type={type} placeholder={placeholder} required className={margeStyle} />
        </>
    )
}

export default TextField
