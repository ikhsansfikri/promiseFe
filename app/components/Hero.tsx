"use client";

import MotionFade from "./MotionFade";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <ParticlesBackground />
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/illust-usk/bg-1.png')" }}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-white/10" />
            <div className="absolute inset-0 bg-linear-to-r from-orange-500/20 via-transparent to-blue-900/20 mix-blend-overlay" />

            {/* Animated Light Glow */}
            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 0.45, scale: 1.3 }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-20 sm:top-40 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-orange-400/30 blur-3xl rounded-full"
            />

            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 0.35, scale: 1.2 }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-20 sm:bottom-40 right-10 sm:right-20 w-56 sm:w-80 h-56 sm:h-80 bg-blue-500/30 blur-3xl rounded-full"
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center items-center min-h-screen">
                <MotionFade>
                    <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight text-white drop-shadow-xl px-2">
                        Procurement Management Information System<br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-400 to-yellow-300 drop-shadow">
                            ProMISe
                        </span>
                    </h1>
                </MotionFade>

                <MotionFade>
                    <p className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-10 drop-shadow px-4">
                        Procurement Management Information System yang dibangun untuk
                        meningkatkan transparansi, efisiensi, dan integrasi proses pengadaan
                        di {process.env.NEXT_PUBLIC_APP_PARTNER}.
                    </p>
                </MotionFade>

                <MotionFade>
                    <div className="mt-6 sm:mt-8 lg:mt-10 mx-auto max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-white/20 backdrop-blur-xl shadow-2xl border border-white/20">
                        <p className="text-xs sm:text-sm leading-relaxed">
                            Kerjasama antara <b>Universitas Syiah Kuala</b> dan
                            <b> Universitas Terbuka</b> dalam menghadirkan sistem pengadaan
                            terintegrasi yang modern, efisien, dan terpercaya.
                        </p>
                    </div>
                </MotionFade>
            </div>
        </section>

    );
}