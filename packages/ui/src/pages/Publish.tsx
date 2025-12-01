import axios from "axios"
import { useState } from "react"
import { AppBar } from "../components/AppBar"

type publishProp = {
    backendUrl: string
    Link: any
    ref: string
    createPageRef: () => void
    onPublishSuccess?: (id: string) => void
}

export const Publish = ({ Link, backendUrl, ref, createPageRef, onPublishSuccess }: publishProp) => {
    const [postInput, setPostInput] = useState<{ title: string, content: string }>({
        title: "",
        content: ""
    });
    const [loading, setLoading] = useState(false);

    const publishBlog = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("You are not logged in!");
                return;
            }

            if (postInput.title.trim() === "" || postInput.content.trim() === "") {
                alert("Title and content are required!");
                return;
            }

            setLoading(true);
            const response = await axios.post(`${backendUrl}/api/v1/blog`, postInput, {
                headers: {
                    Authorization: token
                }
            });

            if (response.status === 200) {
                alert("Blog published!");
                if (onPublishSuccess && response.data.id) {
                    onPublishSuccess(response.data.id);
                }
            }
        } catch (e) {
            console.error("Error publishing blog:", e);
            alert("Failed to publish blog. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return <div className="min-h-screen bg-white">
        <AppBar
            Link={Link}
            ref={ref}
            createPageRef={createPageRef}
            buttonText="Publish"
            onButtonClick={publishBlog}
            loading={loading}
        />
        <div className="flex justify-center w-full pt-8">
            <div className="max-w-3xl w-full px-4">
                <div className="w-full mb-6">
                    <input onChange={(e) => {
                        setPostInput({
                            ...postInput,
                            title: e.target.value
                        })
                    }}
                        type="text"
                        className="w-full bg-transparent border-none text-5xl font-sans font-bold placeholder:text-gray-300 focus:outline-none focus:ring-0 px-0"
                        placeholder="Title"
                        autoFocus
                    />
                </div>
                <div className="w-full">
                    <textarea onChange={(e) => {
                        setPostInput({
                            ...postInput,
                            content: e.target.value
                        })
                    }}
                        className="w-full bg-transparent border-none text-xl font-sans placeholder:text-gray-300 focus:outline-none focus:ring-0 resize-none px-0 min-h-[calc(100vh-200px)]"
                        placeholder="Tell your story..."
                    ></textarea>
                </div>
            </div>
        </div>
    </div>
}