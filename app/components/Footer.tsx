"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-20 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-3 gap-12 mb-12"
                >
                    <div className="space-y-4 text-center">
                        <motion.h3
                            className="text-xl font-bold text-white tracking cursor-default"
                            whileHover={{ color: "#f97316" }}
                            transition={{ duration: 0.2 }}
                        >
                            ProMISe
                        </motion.h3>
                        <motion.p
                            className="text-gray-400 leading-relaxed cursor-default"
                            whileHover={{ color: "#e5e7eb" }}
                            transition={{ duration: 0.2 }}
                        >
                            Smart Procurement Management Information System
                        </motion.p>
                        <motion.p
                            className="text-gray-400 leading-relaxed cursor-default"
                            whileHover={{ color: "#e5e7eb" }}
                            transition={{ duration: 0.2 }}
                        >
                            Universitas Syiah Kuala
                        </motion.p>
                    </div>

                    <div className="space-y-4 text-center">
                        <motion.h3
                            className="text-xl font-bold text-white tracking cursor-default"
                            whileHover={{ color: "#f97316" }}
                            transition={{ duration: 0.2 }}
                        >
                            Alamat
                        </motion.h3>
                        <motion.p
                            className="text-gray-400 leading-relaxed cursor-default"
                            whileHover={{ color: "#e5e7eb" }}
                            transition={{ duration: 0.2 }}
                        >
                            Jln. Teuku Nyak Arief Darussalam,
                            <br />
                            Banda Aceh, Aceh 23111
                        </motion.p>
                    </div>

                    <div className="space-y-4 text-center">
                        <motion.h3
                            className="text-xl font-bold text-white tracking cursor-default"
                            whileHover={{ color: "#f97316" }}
                            transition={{ duration: 0.2 }}
                        >
                            Kontak
                        </motion.h3>
                        <div className="space-y-2">
                            <motion.p
                                className="text-gray-400 flex items-center justify-center gap-2 cursor-default"
                                whileHover={{ color: "#e5e7eb" }}
                                transition={{ duration: 0.2 }}
                            >
                                <span className="text-orange-500">📞</span>
                                (0651) 755-3205
                            </motion.p>
                            <motion.p
                                className="text-gray-400 flex items-center justify-center gap-2 cursor-default"
                                whileHover={{ color: "#e5eaterb" }}
                                transition={{ duration: 0.2 }}
                            >
                                <span className="text-orange-500">✉️</span>
                                humas@usk.ac.id
                            </motion.p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="border-t border-gray-800 pt-8"
                >
                    <div className="text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} ProMISe — Universitas Syiah Kuala
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
