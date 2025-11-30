import { Avatar } from "./BlogCard"

export const AppBar = () => {
    return <div className="border-b flex justify-between items-center p-2">
        <div>
            Medium
        </div>
        <div onClick={() => {
            alert("hello")
        }} className="cursor-pointer">
            <Avatar size="big" name="ashutosh Sao" />
        </div>
    </div>
}