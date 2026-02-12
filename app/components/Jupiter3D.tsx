'use client';

import { useState, useEffect, useRef } from 'react';

export default function Jupiter3D() {
  const [rotation, setRotation] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAutoRotating) {
      const interval = setInterval(() => {
        setRotation(prev => (prev + 1) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isAutoRotating]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isAutoRotating && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const angle = Math.atan2(y, x) * (180 / Math.PI);
      setRotation((angle + 90) % 360);
    }
  };

  const features = [
    { name: 'Great Red Spot', angle: 45, description: 'A giant storm larger than Earth' },
    { name: 'Bands', angle: 120, description: 'Alternating zones and belts' },
    { name: 'Polar Regions', angle: 200, description: 'Unique polar cyclones' },
    { name: 'Equatorial Region', angle: 300, description: 'Fastest winds on the planet' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-space-dark to-space-blue text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">
          Interactive Jupiter Model
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div 
              ref={containerRef}
              className="relative w-full h-96 flex items-center justify-center cursor-move"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsAutoRotating(false)}
              onMouseLeave={() => setIsAutoRotating(true)}
            >
              <div 
                className="relative w-80 h-80 rounded-full jupiter-gradient jupiter-glow transition-transform duration-100"
                style={{ transform: `rotateY(${rotation}deg)` }}
              >
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-400 via-red-500 to-brown-600 opacity-80"></div>
                
                {features.map((feature, index) => {
                  const angle = (feature.angle + rotation) % 360;
                  const isVisible = angle > 270 || angle < 90;
                  const x = Math.cos((angle - 90) * Math.PI / 180) * 120;
                  const z = Math.sin((angle - 90) * Math.PI / 180) * 120;
                  
                  return (
                    <div
                      key={index}
                      className={`absolute w-4 h-4 bg-yellow-400 rounded-full cursor-pointer transition-all duration-300 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        left: `${160 + x}px`,
                        top: `${160}px`,
                        transform: `translateZ(${z}px) scale(${0.8 + z / 400})`,
                        boxShadow: '0 0 20px rgba(250, 204, 21, 0.8)'
                      }}
                      onClick={() => setSelectedFeature(feature.name)}
                    />
                  );
                })}
                
                <div className="absolute top-1/4 left-1/4 w-24 h-20 bg-red-600 rounded-full opacity-70 blur-md"></div>
                <div className="absolute bottom-1/3 right-1/4 w-20 h-16 bg-orange-400 rounded-full opacity-60 blur-md"></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-12 bg-yellow-300 rounded-full opacity-50 blur-sm"></div>
              </div>
              
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-sm text-gray-400">Click and drag to rotate</p>
                <button 
                  onClick={() => setIsAutoRotating(!isAutoRotating)}
                  className="mt-2 px-4 py-2 bg-orange-600 rounded-full text-sm hover:bg-orange-700 transition-colors"
                >
                  {isAutoRotating ? 'Stop Rotation' : 'Start Rotation'}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-orange-300">Jupiter Features</h3>
            
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedFeature === feature.name 
                    ? 'bg-orange-900/40 border-orange-400' 
                    : 'bg-orange-900/20 border-orange-500/30 hover:bg-orange-900/30'
                }`}
                onClick={() => setSelectedFeature(feature.name)}
              >
                <h4 className="text-lg font-semibold text-orange-200 mb-2">{feature.name}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}

            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30">
              <h4 className="text-lg font-semibold text-purple-300 mb-3">Rotation Info</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">Current rotation: {Math.round(rotation)}°</p>
                <p className="text-gray-300">Auto-rotation: {isAutoRotating ? 'On' : 'Off'}</p>
                <p className="text-gray-300">Actual rotation period: 9.9 hours</p>
              </div>
            </div>
          </div>
        </div>

        {selectedFeature && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedFeature(null)}>
            <div className="bg-gradient-to-br from-orange-900/90 to-red-900/90 p-8 rounded-2xl border border-orange-500/50 max-w-2xl" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-3xl font-bold mb-4 text-orange-300">{selectedFeature}</h3>
              <div className="text-gray-200 space-y-4">
                {selectedFeature === 'Great Red Spot' && (
                  <>
                    <p>The Great Red Spot is a persistent high-pressure region in Jupiter's atmosphere, producing an anticyclonic storm.</p>
                    <p>It has been continuously observed since 1830 and possibly earlier. The storm is large enough to contain two or three planets the size of Earth.</p>
                    <p>Wind speeds in the storm reach up to 432 mph (695 km/h), and it rotates counterclockwise with a period of about six Earth days.</p>
                  </>
                )}
                {selectedFeature === 'Bands' && (
                  <>
                    <p>Jupiter's appearance is dominated by bands of different colors and temperatures, known as zones and belts.</p>
                    <p>Light-colored zones are cooler and at higher altitudes, while dark-colored belts are warmer and at lower altitudes.</p>
                    <p>These bands are created by differences in the chemical composition and temperature of atmospheric gases.</p>
                  </>
                )}
                {selectedFeature === 'Polar Regions' && (
                  <>
                    <p>Jupiter's polar regions are dramatically different from its equatorial regions.</p>
                    <p>Each pole contains a central cyclone surrounded by eight additional cyclones arranged in a geometric pattern.</p>
                    <p>These polar cyclones are stable and have been observed since their discovery by the Juno spacecraft.</p>
                  </>
                )}
                {selectedFeature === 'Equatorial Region' && (
                  <>
                    <p>The equatorial region of Jupiter experiences the fastest winds in the solar system.</p>
                    <p>Wind speeds can exceed 360 mph (580 km/h), creating the distinctive banded appearance.</p>
                    <p>This region also contains some of the most dramatic cloud formations and storm systems on the planet.</p>
                  </>
                )}
              </div>
              <button 
                onClick={() => setSelectedFeature(null)}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
