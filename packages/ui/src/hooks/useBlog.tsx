import axios from "axios";

type useBlogProps = {
    id: string;
    backendUrl: string;
    useQuery: any;
}

export const useBlog = ({ id, backendUrl, useQuery }: useBlogProps) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["blog", id],
        queryFn: async () => {
            const response = await axios.get(`${backendUrl}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            return response.data.blog;
        }
    });

    return {
        loading: isLoading,
        data: data,
        error
    }
}
