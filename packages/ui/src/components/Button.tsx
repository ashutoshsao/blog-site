"use client"


interface ButtonProps {
    buttonLabel?: string
    onClick?: () => void
}

export const Button = ({ buttonLabel, onClick }: ButtonProps) => {
    return <button onClick={onClick} className=" rounded-md bg-black text-lg text-white w-full p-2 hover:bg-slate-900 hover:text-slate-200 cursor-pointer transition-colors">
        {buttonLabel}
    </button>
}