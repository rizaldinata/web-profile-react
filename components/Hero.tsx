import { cn } from "@/lib/utils";
import { GridPattern } from "./ui/shadcn-io/grid-pattern";


export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen flex-col items-center justify-center text-black p-24 overflow-hidden"
        >
            <div className="relative z-10 text-center">
                <h1 className="text-5xl font-extrabold text-black mb-4 drop-shadow-lg">
                    Halo, ini web profile Rizal!
                </h1>
                <p className="text-2xl font-light drop-shadow-md">
                    Saya sedang belajar Next.js dan Tailwind CSS.
                </p>
            </div>
        </section>
    )
}