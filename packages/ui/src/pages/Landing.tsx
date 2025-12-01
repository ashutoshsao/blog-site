import { AuroraBackground } from "../components/AuroraBackground";

type LandingProps = {
    Link: any;
}

export const Landing = ({ Link }: LandingProps) => {
    return (
        <AuroraBackground>
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-4 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-7xl">
                    Welcome to Our Blog
                </h1>
                <p className="max-w-2xl py-4 text-base font-light text-slate-700 dark:text-neutral-200 md:text-2xl">
                    Share your thoughts, ideas, and stories with the world.
                    Join our community of writers and readers today.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                        to="/signup"
                        className="rounded-full bg-black px-8 py-3 text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200"
                    >
                        Get Started
                    </Link>
                    <Link
                        to="/signin"
                        className="rounded-full border border-slate-200 bg-white px-8 py-3 text-slate-950 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </AuroraBackground>
    );
};