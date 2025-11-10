export default function Contact() {
    return (
        <section id="kontak" className="bg-white text-gray-800 p-24">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Hubungi Saya</h2>
                <p className="text-lg mb-12 max-w-xl mx-auto">
                    Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar bertukar
                    pikiran. Jangan ragu untuk menghubungi saya melalui platform di bawah
                    ini:
                </p>

                {/* Wrapper untuk Tombol/Link Kontak */}
                <div className="flex justify-center items-center gap-6">
                    {/* Link Email */}
                    <a
                        href="mailto:emailanda@gmail.com" // <-- Ganti dengan email Anda
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:bg-cyan-600 hover:scale-110"
                    >
                        Email
                    </a>

                    {/* Link GitHub */}
                    <a
                        href="https://github.com/rizaldinata" // <-- URL GitHub Anda
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:bg-gray-900 hover:scale-110"
                    >
                        GitHub
                    </a>

                    {/* Link LinkedIn (opsional) */}
                    <a
                        href="#" // <-- Ganti dengan URL LinkedIn Anda jika ada
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:bg-blue-700 hover:scale-110"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
