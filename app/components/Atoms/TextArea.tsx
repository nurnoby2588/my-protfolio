import React from 'react'
import { twMerge } from 'tailwind-merge'
type TextAreaProps = {
    placeholder: string, rows: number, className?: string, id?: string, name?: string, onChange?: () => void
}

const TextArea: React.FC<TextAreaProps> = ({ placeholder, rows, className, id, name, onChange }) => {
    const baseStyle = 'flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
    const margeStyle = twMerge(
        baseStyle,
        className
    )
    return (
        <div>
            <textarea onChange={onChange} id={id} name={name} rows={rows} placeholder={placeholder} required className={margeStyle} />
        </div>
    )
}

export default TextArea
