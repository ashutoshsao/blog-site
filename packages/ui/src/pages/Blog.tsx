import { useBlog } from "../hooks/useBlog";

type blogProps = {
    backendUrl: string
    useQuery: any
    useParams: any
}

export const Blog = ({ backendUrl, useQuery, useParams }: blogProps) => {
    const { id } = useParams(); // get id from route
    const { loading, data, error } = useBlog({ id: id || "", backendUrl, useQuery });
    if (loading) {
        return <div>
            Loading...
        </div>
    }
    if (error) { console.log(error) }
    return <div>
        <div className="flex justify-center">
            <div className="max-w-xl pt-12">
                <div className="text-5xl font-extrabold">
                    {data.title}
                </div>
                <div className="text-slate-500 pt-2">
                    {
                        new Date(data.updatedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        })}

                </div>
                <div className="pt-4">
                    {data.content}
                </div>
            </div>
        </div>
    </div>
}