"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ["hero", "aplikasi"];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { id: "hero", label: "Beranda" },
        { id: "aplikasi", label: "Aplikasi" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 bg-transparent backdrop-blur-sm`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
                {/* Logo Section */}
                <motion.div
                    className="flex items-center gap-3 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        const element = document.getElementById("hero");
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                >
                    <div className="relative">
                        <img
                            src="/illust-usk/logo.png"
                            className="h-10 w-auto drop-shadow-lg"
                            alt="ProMISe Logo"
                        />
                        {/* Glow effect on logo */}
                        <div className="absolute inset-0 bg-orange-400/20 blur-xl rounded-full -z-10" />
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${activeSection === "hero" ? "text-white" : "text-gray-900"}`}>
                            ProMISe
                        </span>
                        <span className={`text-xs font-medium tracking-wider transition-colors duration-300 ${activeSection === "hero" ? "text-orange-300" : "text-orange-500"}`}>
                            PROCUREMENT SYSTEM
                        </span>
                    </div>
                </motion.div>

                {/* Navigation Items */}
                <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => scrollToSection(e, item.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeSection === item.id
                                ? "bg-orange-500 text-white shadow-lg"
                                : "text-white/90 hover:text-white"
                                }`}
                        >
                            {item.label}
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden p-2 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg
                        className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-white"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </motion.button>
            </div>
        </motion.nav>
    );
}
