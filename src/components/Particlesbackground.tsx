import { useEffect, useRef } from "react";

const Particlesbackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Non-null aliases for convenience
    const context = ctx as CanvasRenderingContext2D;
    const cvs = canvas as HTMLCanvasElement;

    const particleCount = 50;
    const colors = ["rgba(255,255,255,0.7)"];

    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * cvs.width;
        this.y = Math.random() * cvs.height;
        this.radius = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.shadowBlur = 10;
        context.shadowColor = this.color;
        context.fillStyle = this.color;
        context.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // wrap edges
        if (this.x < 0) this.x = cvs.width;
        if (this.x > cvs.width) this.x = 0;
        if (this.y < 0) this.y = cvs.height;
        if (this.y > cvs.height) this.y = 0;

        this.draw();
      }
    }

    let particles: Particle[] = [];

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const handleResize = () => {
      cvs.width = window.innerWidth;
      cvs.height = window.innerHeight;
      createParticles();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    let animationId: number;

    const animate = () => {
      // ✨ only clear the canvas (no background color fill)
      context.clearRect(0, 0, cvs.width, cvs.height);

      particles.forEach((p) => p.update());
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0 "
    />
  );
};

export default Particlesbackground;
