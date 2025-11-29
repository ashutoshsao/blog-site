type headerProp = {
    Link: any
    heading: string
    subHeading: string
    redirect: string
    ref: string
}

export const Header = ({ subHeading, heading, redirect, ref, Link }: headerProp) => {
    return <div className="flex flex-col items-center gap-2">
        <div className="font-bold text-4xl ">{heading}</div>
        <div className="flex items-center text-slate-500 text-xl">
            <div className="">{subHeading}</div>
            <Link to={`/${ref}`} className="pl-2 underline hover:text-slate-700">
                {redirect}
            </Link>
        </div>
    </div>
}