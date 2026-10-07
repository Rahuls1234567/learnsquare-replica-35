"use client";

/**
 * Decorative hero background.
 *
 * Previously an animated <canvas> particle system with mouse-repulsion physics
 * and an O(n^2) connection loop in requestAnimationFrame. It was already
 * disabled on Safari/touch, which meant Safari users saw nothing here anyway.
 * It is now a static CSS radial-gradient glow for every browser: identical look
 * on Safari, no canvas, no animation frame, no resize observers.
 */
export default function ParticlesBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      style={{
        backgroundImage:
          'radial-gradient(35% 45% at 25% 30%, rgba(99, 102, 241, 0.16), transparent 70%),' +
          'radial-gradient(40% 45% at 78% 65%, rgba(217, 70, 239, 0.10), transparent 70%),' +
          'radial-gradient(45% 55% at 55% 15%, rgba(165, 180, 252, 0.10), transparent 70%)',
      }}
    />
  );
}
