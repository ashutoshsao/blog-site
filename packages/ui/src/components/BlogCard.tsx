type blogCardProps = {
    authorName: string
    publishedDate: string
    title: string
    content: string
}

export const BlogCard = ({ authorName, publishedDate, title, content }: blogCardProps) => {
    return <div className="border-b border-gray-300 flex items-center py-4 px-4 2xl:px-0">
        <div className="grid grid-cols gap-3 py-4">
            <div className="flex flex-cols items-center gap-2">
                {<Avatar name={authorName} />}
                {authorName}
                {<Circle />}
                <div className="font-light text-gray-700">{publishedDate}</div>
            </div>
            <div className="font-bold text-2xl">
                {title}
            </div>
            <div className="font-serif font-semibold text-gray-600">
                {content.slice(0, 200) + "..."}
            </div>
            <div className="text-gray-500">
                {`${Math.ceil(content.length / 150)} min read`}
            </div>
        </div>
    </div>
}

export const Circle = () => {
    return <div className="h-0.5 w-0.5 rounded-full bg-black">

    </div>
}

export const Avatar = ({ name, size = "small" }: { name: string, size?: "small" | "big" }) => {
    return <div className={`bg-blue-300 relative inline-flex items-center justify-center overflow-hidden bg-neutral-tertiary rounded-full ${size === "small" ? "w-7 h-7" : "w-10 h-10"}`}>
        <span className={`font-medium text-body ${size === "small" ? "text-sm" : null}`}>{name[0]?.toUpperCase()}</span>
    </div>
}