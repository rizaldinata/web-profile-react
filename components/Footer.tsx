export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-black p-8">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-sm">
                    ©{currentYear} Rizal. Dibuat dengan Next.js & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}