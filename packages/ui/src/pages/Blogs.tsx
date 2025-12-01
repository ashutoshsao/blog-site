import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks/useBlogs"
import { BlogSkeleton } from "../components/BlogSkeleton"
type blogsProp = {
    backendUrl: string
    Link: any
    ref: string
    createPageRef: () => void
}

type blog = {
    id: string
    title: string
    content: string
    author: { name: string }
    createdAt: string
    updatedAt: string
}

export const Blogs = ({ Link, backendUrl, ref, createPageRef }: blogsProp) => {
    const { loading, blogs } = useBlogs({ backendUrl })
    if (loading) {
        return <div>
            <AppBar Link={Link} ref={ref} createPageRef={createPageRef} />
            <div className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }
    else {
        return <div><AppBar Link={Link} ref={ref} createPageRef={createPageRef} />
            <div className="flex justify-center">
                <div className="justify-center">
                    {blogs.map((blog: blog) => <Link key={blog.id} to={`/blog/${blog.id}`}> <BlogCard authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate={new Date(blog.updatedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })} /></Link>)}
                </div>
            </div>
        </div>
    }
}