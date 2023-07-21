'use client'

import { CustomButtonProps } from "@/types"

export const CustomButton = async ({ title, btnType, containerStyles, handleClick }: CustomButtonProps) => {
    return (
        <button 
            className={`custom-btn ${containerStyles}`}
            type={btnType}
            disabled={false}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}