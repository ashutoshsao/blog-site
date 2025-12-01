import { Avatar } from "./Avatar"
type appBarProps = {
    Link: any
    ref: string
}
export const AppBar = ({ Link, ref }: appBarProps) => {
    return <div className="border-b flex justify-between items-center p-2 px-8 bg-fuchsia-300">
        <Link to={ref}>
            <div>
                Medium
            </div>
        </Link>
        <div onClick={() => {
            alert("hello")
        }} className="cursor-pointer">
            <Avatar size="big" name="ashutosh Sao" />
        </div>
    </div>
}