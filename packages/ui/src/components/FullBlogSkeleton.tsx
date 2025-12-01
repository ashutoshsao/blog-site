export const FullBlogSkeleton = () => {
    return <div role="status" className="animate-pulse font-sans lg:grid lg:grid-cols-12 gap-4 xl:w-[80%] w-full p-4">
        <div className="lg:grid lg:col-span-8">
            <div className="text-5xl font-extrabold">
                <div className="h-12 bg-gray-200 rounded-full mb-4 w-3/4"></div>
            </div>
            <div className="text-slate-500 pt-4">
                <div className="h-4 bg-gray-200 rounded-full mb-4 w-48"></div>
            </div>
            <div className="pt-4 text-lg text-slate-700">
                <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-full mb-2.5 w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded-full mb-2.5 mt-4"></div>
                <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
        </div>
        <div className="lg:grid lg:col-span-4 py-4 lg:pl-8">
            <div>
                <div className="text-slate-600 text-lg mb-2">
                    <div className="h-4 bg-gray-200 rounded-full w-16"></div>
                </div>
                <div className="flex py-2 gap-2 items-center">
                    <div>
                        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                    </div>
                    <div>
                        <div className="h-6 bg-gray-200 rounded-full w-32"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-48 mt-2"></div>
                    </div>
                </div>
            </div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
}
