import { useBlog } from "../hooks/useBlog";
import { FullBlog } from "../components/FullBlog";
import { AppBar } from "../components/AppBar";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton"
type blogProps = {
    backendUrl: string
    useQuery: any
    useParams: any
    ref: string
    Link: any
    createPageRef: () => void
}

export const Blog = ({ backendUrl, useQuery, useParams, ref, Link, createPageRef }: blogProps) => {
    const { id } = useParams(); // get id from route
    const { loading, data, error } = useBlog({ id: id || "", backendUrl, useQuery });
    if (loading) {
        return <div>
            <AppBar Link={Link} ref={ref} createPageRef={createPageRef} />
            <div className="flex justify-center p-8">
                <FullBlogSkeleton />
            </div>
        </div>
    }
    if (error) {
    }
    return <div>
        <AppBar Link={Link} ref={ref} createPageRef={createPageRef} />
        <div className="flex justify-center p-8">
            <FullBlog data={data} />
        </div>
    </div>
}