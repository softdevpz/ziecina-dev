"use client";

import { useEffect, useRef } from "react";

/*
 * 404 animation: a green planet trembles, cracks with light, explodes into
 * fragments and slowly re-forms, on a loop. Drawn on canvas, no artwork used.
 * With reduced motion it shows the planet standing still.
 */

const SIZE = 360; // CSS px; the canvas is scaled for retina screens
const CYCLE = 7.5; // seconds per loop
const T_CRACK = 2.2; // cracks start
const T_BOOM = 3.6; // explosion
const T_REFORM = 6.3; // planet fades back in

type Fragment = { angle: number; speed: number; size: number; spin: number; color: string };
type Crack = { points: [number, number][] };

const PLANET_COLORS = ["#4f9d4a", "#3c7f3a", "#79c06a", "#2f6a33"];
const EMBER_COLORS = ["#ffd23f", "#f58025", "#fff4c2"];

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function makeFragments(): Fragment[] {
  return Array.from({ length: 140 }, (_, i) => ({
    angle: rand(0, Math.PI * 2),
    speed: rand(40, 190),
    size: i % 3 === 0 ? rand(1.5, 3) : rand(3, 8),
    spin: rand(-4, 4),
    color: i % 3 === 0 ? EMBER_COLORS[i % EMBER_COLORS.length] : PLANET_COLORS[i % PLANET_COLORS.length],
  }));
}

function makeCracks(radius: number): Crack[] {
  return Array.from({ length: 7 }, () => {
    let angle = rand(0, Math.PI * 2);
    let r = rand(0, radius * 0.25);
    const points: [number, number][] = [[Math.cos(angle) * r, Math.sin(angle) * r]];
    while (r < radius * 0.95) {
      r += rand(radius * 0.12, radius * 0.22);
      angle += rand(-0.35, 0.35);
      points.push([Math.cos(angle) * Math.min(r, radius), Math.sin(angle) * Math.min(r, radius)]);
    }
    return { points };
  });
}

function drawPlanet(ctx: CanvasRenderingContext2D, radius: number, alpha: number) {
  ctx.save();
  ctx.globalAlpha = alpha;

  // Atmosphere glow
  const glow = ctx.createRadialGradient(0, 0, radius * 0.9, 0, 0, radius * 1.35);
  glow.addColorStop(0, "rgba(140, 220, 120, 0.35)");
  glow.addColorStop(1, "rgba(140, 220, 120, 0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(0, 0, radius * 1.35, 0, Math.PI * 2);
  ctx.fill();

  // Body, lit from the top left
  const body = ctx.createRadialGradient(-radius * 0.35, -radius * 0.35, radius * 0.1, 0, 0, radius);
  body.addColorStop(0, "#9fdc86");
  body.addColorStop(0.55, "#4f9d4a");
  body.addColorStop(1, "#1f4a26");
  ctx.fillStyle = body;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fill();

  // Water and land blotches, clipped to the sphere
  ctx.save();
  ctx.clip();
  ctx.fillStyle = "rgba(40, 110, 120, 0.45)";
  for (const [x, y, r] of [
    [-0.3, 0.25, 0.32],
    [0.35, -0.2, 0.22],
    [0.15, 0.5, 0.18],
    [-0.5, -0.35, 0.15],
  ]) {
    ctx.beginPath();
    ctx.ellipse(x * radius, y * radius, r * radius, r * radius * 0.7, 0.6, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
  ctx.restore();
}

export function NamekExplosion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    ctx.scale(dpr, dpr);

    const radius = SIZE * 0.26;
    const center = SIZE / 2;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      ctx.translate(center, center);
      drawPlanet(ctx, radius, 1);
      return;
    }

    let fragments = makeFragments();
    let cracks = makeCracks(radius);
    let lastCycle = -1;
    let frame = 0;
    const start = performance.now();

    function render(now: number) {
      const elapsed = (now - start) / 1000;
      const cycle = Math.floor(elapsed / CYCLE);
      const t = elapsed % CYCLE;
      if (cycle !== lastCycle) {
        // New loop: a fresh explosion every time.
        fragments = makeFragments();
        cracks = makeCracks(radius);
        lastCycle = cycle;
      }

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, SIZE, SIZE);
      ctx!.translate(center, center);

      if (t < T_BOOM) {
        // Tremble that grows towards the explosion
        const tension = Math.max(0, (t - 0.8) / (T_BOOM - 0.8));
        const shake = tension * tension * 5;
        ctx!.translate(rand(-shake, shake), rand(-shake, shake));
        drawPlanet(ctx!, radius, 1);

        if (t > T_CRACK) {
          const progress = (t - T_CRACK) / (T_BOOM - T_CRACK);
          ctx!.save();
          ctx!.lineCap = "round";
          ctx!.shadowColor = "#ffd23f";
          ctx!.shadowBlur = 12 + progress * 18;
          ctx!.strokeStyle = `rgba(255, 244, 194, ${0.5 + progress * 0.5})`;
          ctx!.lineWidth = 1.5 + progress * 2.5;
          for (const crack of cracks) {
            const count = Math.max(2, Math.ceil(crack.points.length * Math.min(1, progress * 1.6)));
            ctx!.beginPath();
            crack.points.slice(0, count).forEach(([x, y], i) => (i === 0 ? ctx!.moveTo(x, y) : ctx!.lineTo(x, y)));
            ctx!.stroke();
          }
          ctx!.restore();
        }
      } else {
        const since = t - T_BOOM;

        // Flash
        if (since < 0.35) {
          const flash = 1 - since / 0.35;
          const g = ctx!.createRadialGradient(0, 0, 0, 0, 0, radius * 2.2);
          g.addColorStop(0, `rgba(255, 250, 225, ${flash})`);
          g.addColorStop(0.4, `rgba(255, 210, 63, ${flash * 0.7})`);
          g.addColorStop(1, "rgba(245, 128, 37, 0)");
          ctx!.fillStyle = g;
          ctx!.beginPath();
          ctx!.arc(0, 0, radius * 2.2, 0, Math.PI * 2);
          ctx!.fill();
        }

        // Shockwave ring
        if (since < 1.2) {
          ctx!.strokeStyle = `rgba(255, 210, 63, ${0.8 * (1 - since / 1.2)})`;
          ctx!.lineWidth = 3;
          ctx!.beginPath();
          ctx!.arc(0, 0, radius + since * 150, 0, Math.PI * 2);
          ctx!.stroke();
        }

        // Fragments flying out and slowing down
        const fade = t > T_REFORM ? Math.max(0, 1 - (t - T_REFORM) / 0.8) : 1;
        const travel = 1 - Math.exp(-since * 1.4);
        for (const f of fragments) {
          const d = radius * 0.4 + f.speed * travel * 1.6;
          ctx!.save();
          ctx!.globalAlpha = fade * Math.max(0, 1 - since / 3.6);
          ctx!.translate(Math.cos(f.angle) * d, Math.sin(f.angle) * d);
          ctx!.rotate(f.spin * since);
          ctx!.fillStyle = f.color;
          ctx!.fillRect(-f.size / 2, -f.size / 2, f.size, f.size * 0.7);
          ctx!.restore();
        }

        // The planet slowly re-forms for the next loop
        if (t > T_REFORM) {
          drawPlanet(ctx!, radius, Math.min(1, (t - T_REFORM) / (CYCLE - T_REFORM)));
        }
      }

      frame = requestAnimationFrame(render);
    }

    frame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="aspect-square w-full max-w-[360px]"
      style={{ width: SIZE, maxWidth: "100%" }}
    />
  );
}
