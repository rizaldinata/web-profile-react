export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm text-white p-4 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-cyan-400">
                    Rizal.dev
                </a>
                <div className="space-x-6">
                    <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
                    <a href="#tentang" className="hover:text-cyan-400 transition-colors">Tentang</a>
                    <a href="#proyek" className="hover:text-cyan-400 transition-colors">Proyek</a>
                    <a href="#kontak" className="hover:text-cyan-400 transition-colors">Kontak</a>
                </div>
            </div>
        </nav>
    );
}