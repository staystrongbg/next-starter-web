import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const CONFIG = {
  nodeCount: 80,
  connectionDist: 150,
  nodeRadius: 2,
  moveSpeed: 0.3,
  edgeOpacity: 0.35,
  nodeOpacity: 0.6,
  mouseRadius: 150,
  mouseForce: 0.5,
};

export function SpiderWeb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouse = { x: -1000, y: -1000 };
    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const nodes: Point[] = Array.from({ length: CONFIG.nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * CONFIG.moveSpeed,
      vy: (Math.random() - 0.5) * CONFIG.moveSpeed,
    }));

    const animate = () => {
      const lineColor = '255,255,255';
      const nodeColor = '255,255,255';

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        n.x += n.vx;
        n.y += n.vy;

        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.hypot(dx, dy);
        if (dist < CONFIG.mouseRadius && dist > 0) {
          const force = (CONFIG.mouseRadius - dist) / CONFIG.mouseRadius * CONFIG.mouseForce;
          n.x -= (dx / dist) * force;
          n.y -= (dy / dist) * force;
        }

        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.hypot(dx, dy);

          if (dist < CONFIG.connectionDist) {
            const alpha = (1 - dist / CONFIG.connectionDist) * CONFIG.edgeOpacity;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(${lineColor},${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, CONFIG.nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeColor},${CONFIG.nodeOpacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onLeave = () => {
      mouse = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', onMouse);
    window.addEventListener('mouseleave', onLeave);

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
