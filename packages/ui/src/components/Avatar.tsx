export const Avatar = ({ name, size = "small" }: { name: string, size?: "small" | "big" }) => {
    return <div className={`bg-blue-300 relative inline-flex items-center justify-center overflow-hidden bg-neutral-tertiary rounded-full ${size === "small" ? "w-7 h-7" : "w-10 h-10"}`}>
        <span className={`font-medium text-body ${size === "small" ? "text-sm" : null}`}>{name[0]?.toUpperCase()}</span>
    </div>
}