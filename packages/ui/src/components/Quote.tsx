type quoteProps = {
    quote: string
    name: string
    position: string
}

export const Quote = ({ quote, name, position }: quoteProps) => {
    return <div className="h-screen bg-gray-200 flex justify-center items-center ">
        <div className="w-[80%] flex flex-col font-sans ">
            <div className="text-4xl font-bold pb-4 ">
                {`"${quote}"`}
            </div>
            <div className="text-3xl font-bold">
                {name}
            </div>
            <div className="text-2xl text-gray-500">
                {position}
            </div>
        </div>
    </div>
}