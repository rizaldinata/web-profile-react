"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function AuroraBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            background: {
                color: "#0a0e27",
            },
            particles: {
                number: {
                    value: 100,
                },
                color: {
                    value: ["#00ffff", "#00ff88", "#0088ff", "#ff00ff"],
                },
                opacity: {
                    value: 0.5,
                },
                size: {
                    value: 3,
                },
                move: {
                    enable: true,
                    speed: 1,
                },
                links: {
                    enable: true,
                    distance: 150,
                    color: "#00ffff",
                    opacity: 0.3,
                    width: 1,
                },
            },
        }),
        []
    );

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={options}
            className="absolute inset-0 z-0"
        />
    );
}