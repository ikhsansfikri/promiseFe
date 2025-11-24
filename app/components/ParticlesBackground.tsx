"use client";

import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";

export default function ParticlesBackground() {
    useEffect(() => {
        const loadParticles = async () => {
            await loadAll(tsParticles);

            await tsParticles.load({
                id: "tsparticles",
                options: {
                    fullScreen: { enable: false }, // tidak menutupi seluruh layar jika container punya ukuran
                    particles: {
                        number: {
                            value: 60,
                            density: { enable: true },
                        },
                        color: {
                            value: ["#ffffff", "#ffb347", "#00cfff"],
                        },
                        shape: { type: "circle" },
                        opacity: {
                            value: { min: 0.3, max: 0.6 },
                            animation: { enable: true, speed: 1, sync: false },
                        },
                        size: {
                            value: { min: 2, max: 5 },
                        },
                        move: {
                            enable: true,
                            speed: 0.6,
                            direction: "none",
                            random: true,
                            straight: false,
                            outModes: "out",
                            attract: { enable: false },
                        },
                        links: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.2,
                            width: 1,
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                            onClick: { enable: true, mode: "push" },
                            resize: { enable: true },
                        },
                        modes: {
                            repulse: { distance: 100, duration: 0.4 },
                            push: { quantity: 4 },
                        },
                    },
                    detectRetina: true,
                    // background: { color: "transparent" },
                },
            });
        };

        loadParticles();
    }, []);

    return (
        <div
            id="tsparticles"
            className="absolute inset-0 -z-10"
        />
    );
}
