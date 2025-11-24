export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
                <div>
                    <h3 className="text-lg font-semibold mb-3">ProMISe</h3>
                    <p className="text-sm">
                        Smart Procurement Management Information System <br />
                        Universitas Syiah Kuala
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Alamat</h3>
                    <p className="text-sm">
                        Jln. Teuku Nyak Arief Darussalam,
                        <br /> Banda Aceh, Aceh 23111
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Kontak</h3>
                    <p className="text-sm">Telepon: (0651) 755-3205</p>
                    <p className="text-sm">Email: humas@unsyiah.ac.id</p>
                </div>
            </div>

            <div className="text-center text-sm text-gray-400 mt-10">
                © {new Date().getFullYear()} ProMISe — Powered by Universitas Terbuka
            </div>
        </footer>
    );
}
