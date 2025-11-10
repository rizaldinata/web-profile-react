import AuroraBackground from "@/components/AuroraBackground";

export default function Hero() {
    return (
        <section 
            id="home" 
            className="relative flex min-h-screen flex-col items-center justify-center text-white p-24 overflow-hidden bg-slate-900"
        >
            <AuroraBackground />
            <div className="relative z-10 text-center">
                <h1 className="text-5xl font-extrabold text-cyan-400 mb-4 drop-shadow-lg">
                    Halo, ini web profile Rizal!
                </h1>
                <p className="text-2xl font-light drop-shadow-md">
                    Saya sedang belajar Next.js dan Tailwind CSS.
                </p>
            </div>
        </section>
    )
}