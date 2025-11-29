import type { ChangeEvent } from "react"

type LabelledInputProps = {
    label: string
    placeholder: string
    type?: "text" | "password"
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}



export const LabelledInput = ({ label, placeholder, type = "text", onChange }: LabelledInputProps) => {
    return <div className="flex flex-col w-full gap-2">
        <label className="text-lg font-semibold">
            {label}
        </label>
        <input type={type} placeholder={placeholder} className="text-lg font-sans border border-slate-500 rounded-md shadow-sm p-2 px-3 w-full" onChange={onChange} />
    </div>
}