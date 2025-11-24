import AppIcon from "./AppIcon";
import MotionFade from "./MotionFade";

export default function AppGrid() {
    const apps = [
        {
            url: process.env.NEXT_PUBLIC_SIDAPET,
            img: "/illust-icon/icon-sidapet.png",
            title: "SI-DaPeT",
            subtitle: "Daftar Penyedia Terpilih",
        },
        {
            url: process.env.NEXT_PUBLIC_SIPPAN,
            img: "/illust-icon/icon-sippan.png",
            title: "SI-PPan",
            subtitle: "Perencanaan Pengadaan",
        },
        {
            url: process.env.NEXT_PUBLIC_SIBELA,
            img: "/illust-icon/icon-sibela.png",
            title: "SI-BeLa",
            subtitle: "Pembelian Langsung",
        },
        {
            url: process.env.NEXT_PUBLIC_SIPLANG,
            img: "/illust-icon/icon-siplang.png",
            title: "SI-PLang",
            subtitle: "Pengadaan Langsung",
        },
        {
            url: process.env.NEXT_PUBLIC_SIPUNG,
            img: "/illust-icon/icon-sipung.png",
            title: "SI-Pung",
            subtitle: "Penunjukan Langsung",
        },
        {
            url: process.env.NEXT_PUBLIC_SIQUT,
            img: "/illust-icon/icon-siqut.png",
            title: "SI-Qut",
            subtitle: "Quotation",
        },
        {
            url: process.env.NEXT_PUBLIC_TENDER,
            img: "/illust-icon/icon-tender.png",
            title: "Tender",
            subtitle: "Terbuka, Dua Tahap",
        },
        {
            url: process.env.NEXT_PUBLIC_EKATALOG,
            img: "/illust-icon/icon-ekatalog.png",
            title: "E-Katalog",
            subtitle: "Electronic Catalogue",
        },
        {
            url: process.env.NEXT_PUBLIC_ESIGN,
            img: "/illust-icon/icon-esign.png",
            title: "E-Sign",
            subtitle: "Electronic Signature",
        },
        {
            url: process.env.NEXT_PUBLIC_EAUDIT,
            img: "/illust-icon/icon-eaudit.png",
            title: "E-Audit",
            subtitle: "Electronic Audit",
        },
    ];

    return (
        <section id="aplikasi" className="py-28 bg-gray-50">
            <div className="container mx-auto px-6">
                <MotionFade>
                    <h2 className="section-title">Aplikasi</h2>
                    <p className="section-subtitle">
                        Satu ekosistem pengadaan lengkap dan terintegrasi.
                    </p>
                </MotionFade>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {apps.map((app, i) => (
                        <MotionFade key={i}>
                            <AppIcon {...app} />
                        </MotionFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
