import MotionFade from "./MotionFade";
import { IconCheck, IconShield, IconRocket } from "@tabler/icons-react";

const features = [
    {
        icon: <IconCheck size={32} className="text-orange-600" />,
        title: "Proses Efisien",
        desc: "Pengadaan lebih cepat, terstruktur, dan minim kesalahan.",
    },
    {
        icon: <IconShield size={32} className="text-orange-600" />,
        title: "Transparansi Tinggi",
        desc: "Setiap proses terekam dengan detail dan aman.",
    },
    {
        icon: <IconRocket size={32} className="text-orange-600" />,
        title: "Integrasi Sistem",
        desc: "Seluruh aplikasi terhubung dalam satu ekosistem.",
    },
];

export default function FeatureGrid() {
    return (
        <section id="fitur" className="py-28 bg-white">
            <div className="container mx-auto px-6">
                <MotionFade>
                    <h2 className="section-title">Fitur Unggulan</h2>
                    <p className="section-subtitle">
                        Fitur terbaik untuk mendukung proses pengadaan modern.
                    </p>
                </MotionFade>

                <div className="grid md:grid-cols-3 gap-10">
                    {features.map((item, i) => (
                        <MotionFade key={i}>
                            <div className="p-8 text-center rounded-2xl border bg-white shadow-sm hover:shadow-lg transition">
                                <div className="mb-4 flex justify-center">{item.icon}</div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        </MotionFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
