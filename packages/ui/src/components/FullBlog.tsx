import { Avatar } from "./Avatar"

export const FullBlog = ({ data }: { data: any }) => {
    return <div className="font-sans lg:grid lg:grid-cols-12 gap-4 xl:w-[80%]">
        <div className="lg:grid lg:col-span-8">
            <div className="text-5xl font-extrabold">
                {data.title}
            </div>
            <div className="text-slate-500 pt-4">

                {`Posted On ${new Date(data.updatedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                })}`}

            </div>
            <div className="pt-4 text-lg text-slate-700">
                {data.content}
            </div>
        </div>
        <div className="lg:grid lg:col-span-4 py-4">
            <div>
                <div>
                    Author
                </div>
                <div className="flex py-2 gap-2 items-center">
                    <div>
                        <Avatar name={data.author.name} size="small" />
                    </div>
                    <div>
                        {data.author.name}
                    </div>
                </div>
            </div>
        </div>
    </div>
}