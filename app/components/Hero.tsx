"use client";

import MotionFade from "./MotionFade";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";



export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden top-18"
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
                className="absolute top-40 left-20 w-72 h-72 bg-orange-400/30 blur-3xl rounded-full"
            />

            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 0.35, scale: 1.2 }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-40 right-20 w-80 h-80 bg-blue-500/30 blur-3xl rounded-full"
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center flex flex-col justify-center items-center min-h-screen">
                <MotionFade>
                    <h1 className="text-4xl font-extrabold mb-6 leading-tight text-white drop-shadow-xl">
                        Procurement Management Information System<br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-400 to-yellow-300 drop-shadow">
                            ProMISe
                        </span>
                    </h1>
                </MotionFade>

                <MotionFade>
                    <p className="max-w-2xl mx-auto text-gray-200 text-lg md:text-xl leading-relaxed mb-10 drop-shadow">
                        Procurement Management Information System yang dibangun untuk
                        meningkatkan transparansi, efisiensi, dan integrasi proses pengadaan
                        di {process.env.NEXT_PUBLIC_APP_PARTNER}.
                    </p>
                </MotionFade>

                <MotionFade>
                    <div className="mt-14 mx-auto max-w-3xl p-6 rounded-3xl bg-white/20 backdrop-blur-xl shadow-2xl border border-white/20">
                        <p className="text-sm md:text-base leading-relaxed">
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
