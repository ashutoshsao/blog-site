import { useBlog } from "../hooks/useBlog";
import { FullBlog } from "../components/FullBlog";
import { AppBar } from "../components/AppBar";
type blogProps = {
    backendUrl: string
    useQuery: any
    useParams: any
    ref: string
    Link: any
}

export const Blog = ({ backendUrl, useQuery, useParams, ref, Link }: blogProps) => {
    const { id } = useParams(); // get id from route
    const { loading, data, error } = useBlog({ id: id || "", backendUrl, useQuery });
    if (loading) {
        return <div>
            Loading...
        </div>
    }
    if (error) { console.log(error) }
    return <div>
        <AppBar Link={Link} ref={ref} />
        <div className="flex justify-center p-8">
            <FullBlog data={data} />
        </div>
    </div>
}