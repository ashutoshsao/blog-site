import { useEffect, useState } from "react"
import axios from "axios"

type useBlogsProp = {
    backendUrl: string
}

export const useBlogs = ({ backendUrl }: useBlogsProp) => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get(`${backendUrl}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => {
                setBlogs(res.data.blogs || []);
                setLoading(false);

            })
    }, [])
    return { loading, blogs }
}