export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-sm text-black p-4 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-black">
                    Rizal.dev
                </a>
                <div className="space-x-6">
                    <a href="#home" className="hover:text-black transition-colors">Home</a>
                    <a href="#tentang" className="hover:text-black transition-colors">Tentang</a>
                    <a href="#proyek" className="hover:text-black transition-colors">Proyek</a>
                    <a href="#kontak" className="hover:text-black transition-colors">Kontak</a>
                </div>
            </div>
        </nav>
    );
}