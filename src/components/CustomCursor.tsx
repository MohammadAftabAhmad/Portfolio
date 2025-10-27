import { useEffect, useState } from "react";

function CustomCursor() {
  const [Position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveHandler);

    return () => window.removeEventListener("mousemove", moveHandler);
  });

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 z-[9999]"
        style={{
          transform: `translate(${Position.x - 40}px, ${Position.y - 40}px)`,
        }}
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-r  from-pink-500 to-blue-500 blur-3xl opacity-80 " />
      </div>
    </>
  );
}

export default CustomCursor;
