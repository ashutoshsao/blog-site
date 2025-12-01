import { Avatar } from "./Avatar"
type appBarProps = {
    Link: any
    ref: string
    createPageRef?: () => void
    buttonText?: string
    onButtonClick?: () => void
    loading?: boolean
}
export const AppBar = ({ Link, ref, createPageRef, buttonText, onButtonClick, loading }: appBarProps) => {
    return <div className="border-b flex justify-between items-center p-2 px-8 bg-fuchsia-300">
        <Link to={ref}>
            <div className="font-bold text-xl">
                Medium
            </div>
        </Link>
        <div className="flex items-center gap-4">
            <button disabled={loading} onClick={onButtonClick || createPageRef} className={`rounded-lg text-md text-black font-medium w-full p-2 cursor-pointer transition-colors ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-500"}`}>
                {loading ? "Publishing..." : (buttonText || "Publish")}
            </button>
            <div onClick={() => {
                alert("hello")
            }} className="cursor-pointer">
                <Avatar size="big" name="ashutosh Sao" />
            </div>
        </div>
    </div>
}