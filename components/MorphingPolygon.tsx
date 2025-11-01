"use client";

interface MorphingPolygonProps {
  color?: string;
  opacity?: number;
  outline?: boolean;
  delay?: number;
}

const MorphingPolygon = ({ 
  color = "rgba(0, 0, 0, 0.25)", 
  outline = false,
  delay = 0 
}: MorphingPolygonProps) => {
  // Simple fixed polygon shape (6)
  const polygonPath = "M 30 10 L 70 10 L 90 50 L 70 90 L 30 90 L 10 50 Z";

  return (
    <div 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 5 }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          animation: `morphPolygon${delay} ${45 + (delay * 15)}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
          transformOrigin: "30% 70%",
          willChange: "transform"
        }}
      >
        <path
          d={polygonPath}
          fill={outline ? "none" : color}
          stroke={outline ? color : "none"}
          strokeWidth={outline ? "0.5" : "0"}
        />
      </svg>
    </div>
  );
};

export default MorphingPolygon;
