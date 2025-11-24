"use client";

import { useState } from "react";
import { AiFillFilePdf } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

interface Announcement {
    id: number;
    title: string;
    description: string;
    pdfUrl: string;
}

// Konfigurasi worker PDF
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Contoh data pengumuman
const announcements: Announcement[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Pengumuman ${i + 1}`,
    description: `Deskripsi singkat untuk pengumuman ${i + 1}.`,
    pdfUrl: `/pengumuman/sample-${i + 1}.pdf`,
}));

export default function AnnouncementsSection() {
    const [currentPage, setCurrentPage] = useState(1);
    const announcementsPerPage = 6;
    const totalPages = Math.ceil(announcements.length / announcementsPerPage);
    const currentAnnouncements = announcements.slice(
        (currentPage - 1) * announcementsPerPage,
        currentPage * announcementsPerPage
    );

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPDF, setSelectedPDF] = useState<string | null>(null);

    const openModal = (pdfUrl: string) => {
        setSelectedPDF(pdfUrl);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedPDF(null);
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <section id="announcements" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
                    Pengumuman Terbaru
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {currentAnnouncements.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <button
                                onClick={() => openModal(item.pdfUrl)}
                                className="text-orange-500 hover:text-orange-600 underline text-sm font-medium transition flex items-center gap-2"
                            >
                                <AiFillFilePdf />
                                Lihat PDF
                            </button>

                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12 gap-3">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50 hover:bg-gray-300 transition"
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => goToPage(i + 1)}
                            className={`px-4 py-2 rounded-lg transition ${currentPage === i + 1
                                ? "bg-orange-500 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50 hover:bg-gray-300 transition"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Modal PDF */}
            {modalOpen && selectedPDF && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-2xl w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-auto relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-xl font-bold"
                        >
                            &times;
                        </button>
                        <div className="p-6 flex justify-center">
                            <Document file={selectedPDF}>
                                <Page pageNumber={1} width={800} />
                            </Document>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
