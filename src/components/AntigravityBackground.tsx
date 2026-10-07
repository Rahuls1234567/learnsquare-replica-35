import React from 'react';

/**
 * Decorative background.
 *
 * Previously this rendered an animated <canvas> particle field running an
 * O(n^2) connection loop inside requestAnimationFrame forever. On Safari that
 * competed with hydration/first paint and never went idle, so it was the main
 * cause of the "slow to load / janky" feel. It is now a pure static CSS
 * radial-gradient mesh: one paint, GPU-composited, zero JS, zero per-frame work.
 * The export name and (absence of) props are unchanged so every existing
 * consumer keeps working.
 */
const AntigravityBackground: React.FC = () => {
    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none z-0 bg-transparent"
            style={{
                backgroundImage:
                    'radial-gradient(40% 55% at 18% 22%, rgba(139, 92, 246, 0.18), transparent 70%),' +
                    'radial-gradient(45% 50% at 82% 12%, rgba(99, 102, 241, 0.14), transparent 70%),' +
                    'radial-gradient(50% 60% at 65% 88%, rgba(168, 85, 247, 0.12), transparent 70%)',
            }}
        />
    );
};

export default AntigravityBackground;
