"use client";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-sm">
            <div className="container mx-auto px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src="/illust-usk/logo.png" className="h-10" />
                    <span className="text-xl font-bold text-gray-800 tracking-tight">
                        ProMISe
                    </span>
                </div>

                <div className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <a href="#hero" className="hover:text-orange-500">Beranda</a>
                    <a href="#fitur" className="hover:text-orange-500">Fitur</a>
                    <a href="#aplikasi" className="hover:text-orange-500">Aplikasi</a>
                </div>
            </div>
        </nav>
    );
}
