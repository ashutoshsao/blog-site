import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks/useBlogs"
type blogsProp = {
    backendUrl: string
    Link: any
    ref: string
}

type blog = {
    id: string
    title: string
    content: string
    author: { name: string }
    createdAt: string
    updatedAt: string
}

export const Blogs = ({ Link, backendUrl, ref }: blogsProp) => {
    const { loading, blogs } = useBlogs({ backendUrl })
    if (loading) {
        return <div>
            Loading...
        </div>
    }
    else {
        return <div><AppBar Link={Link} ref={ref} />
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