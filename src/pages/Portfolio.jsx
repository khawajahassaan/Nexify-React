import Grainient from '../components/Grainient';
import Masonry from '../components/Masonry';

export default function Portfolio() {
  const companies = [
    { id: '1', name: "Acme Corp", description: "Revolutionized their enterprise dashboard with our UI kit, cutting development time by 40%.", height: 320 },
    { id: '2', name: "Globex Inc", description: "Built a fully accessible, WCAG-compliant customer portal in record time.", height: 280 },
    { id: '3', name: "Soylent Corp", description: "Scaled their complex data visualization tools using our lightweight, high-performance components.", height: 350 },
    { id: '4', name: "Initech", description: "Streamlined their internal reporting systems with our pre-built themes and charts.", height: 260 },
    { id: '5', name: "Stark Industries", description: "Secured their defense-grade applications with our enterprise-ready architecture.", height: 310 },
    { id: '6', name: "Wayne Enterprises", description: "Modernized their legacy infrastructure with our sleek, dark-mode first design tokens.", height: 380 },
    { id: '7', name: "Umbrella Corp", description: "Redesigned their bio-research portals for lightning-fast performance across all secure facilities.", height: 330 },
    { id: '8', name: "Cyberdyne Systems", description: "Integrated our advanced logic trees into their neural net UI, resulting in a flawless user experience.", height: 290 },
    { id: '9', name: "Oscorp", description: "Leveraged our modular components to build out highly interactive testing suites.", height: 310 },
    { id: '10', name: "Aperture Science", description: "Used our cutting-edge responsive grids to map out multidimensional testing chambers.", height: 360 },
    { id: '11', name: "Massive Dynamic", description: "Transformed their sprawling data logs into clean, sortable data tables using Nexify components.", height: 280 },
    { id: '12', name: "Hooli", description: "Rebuilt their compression algorithm dashboard, vastly improving cross-browser compatibility.", height: 340 },
    { id: '13', name: "Pied Piper", description: "Achieved the perfect middle-out architecture for their new platform using our flexible routing utilities.", height: 270 },
    { id: '14', name: "Dunder Mifflin", description: "Brought their paper inventory system into the modern web era with our minimalist form controls.", height: 320 },
    { id: '15', name: "E Corp", description: "Overhauled their global banking interfaces, meeting strict compliance and accessibility standards.", height: 390 }
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col items-center pt-40 pb-20 px-4">
      {/* Background Grainient */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#0f172a"
          color2="#1e3a8a"
          color3="#000000"
          timeSpeed={0.5}
          colorBalance={0.0}
          warpStrength={1.5}
          warpFrequency={3.0}
          warpSpeed={2.0}
          warpAmplitude={80.0}
          blendAngle={45.0}
          blendSoftness={0.1}
          rotationAmount={200.0}
          noiseScale={1.5}
          grainAmount={0.08}
          grainScale={1.5}
          grainAnimated={true}
          contrast={1.2}
          gamma={1.1}
          saturation={1.2}
          zoom={0.8}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        {/* Spacer to clear navbar safely */}
        <div className="w-full h-32 md:h-48 flex-shrink-0"></div>

        <div className="flex flex-col items-center justify-center text-center w-full mb-16 px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight !text-center">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl !mx-auto leading-relaxed !text-center">
            See how the world's most innovative companies are using Nexify to build the next generation of web applications.
          </p>
        </div>

        <div className="w-full relative" style={{ minHeight: '1200px' }}>
          <Masonry 
            items={companies}
            ease="power3.out"
            duration={0.8}
            stagger={0.08}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.96}
            blurToFocus={true}
          />
        </div>
      </div>
    </div>
  );
}
