import NewsCard from "./NewsCard";

function Index() {
  return (
    <div className="relative">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-yellow-50 to-orange-100"></div>
      
      {/* Sophisticated Geometric Pattern Layer */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(45deg, rgba(251, 146, 60, 0.3) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(236, 72, 153, 0.3) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(239, 68, 68, 0.3) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(245, 158, 11, 0.3) 75%)
        `,
        backgroundSize: '60px 60px',
        backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
      }}></div>

      {/* Elegant Hexagonal Pattern */}
      <div className="absolute inset-0 opacity-8" style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.2) 1px, transparent 1px),
          radial-gradient(circle at 25% 25%, rgba(236, 72, 153, 0.15) 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px, 80px 80px, 120px 120px'
      }}></div>

      {/* Subtle Noise Texture for Depth */}
      <div className="absolute inset-0 opacity-6" style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(139, 69, 19, 0.02) 2px,
            rgba(139, 69, 19, 0.02) 4px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(160, 82, 45, 0.02) 2px,
            rgba(160, 82, 45, 0.02) 4px
          )
        `
      }}></div>

      {/* Floating Abstract Shapes */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          radial-gradient(ellipse 200px 100px at 20% 30%, rgba(251, 146, 60, 0.1) 20%, transparent 50%),
          radial-gradient(ellipse 150px 200px at 80% 20%, rgba(236, 72, 153, 0.1) 20%, transparent 50%),
          radial-gradient(ellipse 180px 120px at 60% 80%, rgba(239, 68, 68, 0.1) 20%, transparent 50%),
          radial-gradient(ellipse 120px 160px at 90% 70%, rgba(245, 158, 11, 0.1) 20%, transparent 50%)
        `
      }}></div>
      
      <div className="relative z-10">
        <NewsCard />
      </div>
    </div>
  );
}

export default Index;
