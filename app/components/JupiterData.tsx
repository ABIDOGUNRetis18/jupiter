'use client';

import { useState } from 'react';

interface JupiterData {
  diameter: string;
  mass: string;
  distanceFromSun: string;
  orbitalPeriod: string;
  rotationPeriod: string;
  moons: number;
  temperature: string;
  composition: string[];
}

const jupiterData: JupiterData = {
  diameter: "88,846 miles (142,984 km)",
  mass: "1.898 × 10^27 kg",
  distanceFromSun: "484 million miles (778 million km)",
  orbitalPeriod: "11.86 Earth years",
  rotationPeriod: "9.9 hours",
  moons: 95,
  temperature: "-234°F (-145°C) at cloud tops",
  composition: ["Hydrogen (90%)", "Helium (10%)", "Methane", "Ammonia", "Water vapor"]
};

export default function JupiterData() {
  const [selectedData, setSelectedData] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-space-dark to-space-blue text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">
          Jupiter by the Numbers
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div 
            className="bg-gradient-to-br from-orange-900/30 to-red-900/30 p-6 rounded-xl border border-orange-500/40 backdrop-blur-sm cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedData('diameter')}
          >
            <h3 className="text-xl font-bold text-orange-300 mb-2">Diameter</h3>
            <p className="text-2xl font-semibold">{jupiterData.diameter}</p>
            <p className="text-sm text-gray-400 mt-2">11x Earth's diameter</p>
          </div>

          <div 
            className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-6 rounded-xl border border-red-500/40 backdrop-blur-sm cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedData('mass')}
          >
            <h3 className="text-xl font-bold text-red-300 mb-2">Mass</h3>
            <p className="text-2xl font-semibold">{jupiterData.mass}</p>
            <p className="text-sm text-gray-400 mt-2">318x Earth's mass</p>
          </div>

          <div 
            className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 p-6 rounded-xl border border-yellow-500/40 backdrop-blur-sm cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedData('distance')}
          >
            <h3 className="text-xl font-bold text-yellow-300 mb-2">Distance from Sun</h3>
            <p className="text-2xl font-semibold">{jupiterData.distanceFromSun}</p>
            <p className="text-sm text-gray-400 mt-2">5.2 AU</p>
          </div>

          <div 
            className="bg-gradient-to-br from-orange-900/30 to-red-900/30 p-6 rounded-xl border border-orange-500/40 backdrop-blur-sm cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedData('orbital')}
          >
            <h3 className="text-xl font-bold text-orange-300 mb-2">Orbital Period</h3>
            <p className="text-2xl font-semibold">{jupiterData.orbitalPeriod}</p>
            <p className="text-sm text-gray-400 mt-2">One Jovian year</p>
          </div>

          <div 
            className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-6 rounded-xl border border-red-500/40 backdrop-blur-sm cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedData('rotation')}
          >
            <h3 className="text-xl font-bold text-red-300 mb-2">Rotation Period</h3>
            <p className="text-2xl font-semibold">{jupiterData.rotationPeriod}</p>
            <p className="text-sm text-gray-400 mt-2">Fastest in solar system</p>
          </div>

          <div 
            className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 p-6 rounded-xl border border-yellow-500/40 backdrop-blur-sm cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedData('moons')}
          >
            <h3 className="text-xl font-bold text-yellow-300 mb-2">Known Moons</h3>
            <p className="text-2xl font-semibold">{jupiterData.moons}</p>
            <p className="text-sm text-gray-400 mt-2">Including 4 Galilean moons</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm mb-12">
          <h3 className="text-2xl font-bold text-purple-300 mb-6">Atmospheric Composition</h3>
          <div className="space-y-4">
            {jupiterData.composition.map((component, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-lg">{component}</span>
                <div className="w-32 bg-gray-700 rounded-full h-4 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                    style={{ 
                      width: index === 0 ? '90%' : index === 1 ? '10%' : '2%',
                      minWidth: '20px'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedData && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedData(null)}>
            <div className="bg-gradient-to-br from-orange-900/90 to-red-900/90 p-8 rounded-2xl border border-orange-500/50 max-w-2xl" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-3xl font-bold mb-4 text-orange-300">
                {selectedData === 'diameter' && 'Jupiter\'s Massive Size'}
                {selectedData === 'mass' && 'Jupiter\'s Incredible Mass'}
                {selectedData === 'distance' && 'Jupiter\'s Orbit'}
                {selectedData === 'orbital' && 'Jovian Year'}
                {selectedData === 'rotation' && 'Jupiter\'s Rapid Spin'}
                {selectedData === 'moons' && 'Jupiter\'s Moon System'}
              </h3>
              <div className="text-gray-200 space-y-4">
                {selectedData === 'diameter' && (
                  <>
                    <p>Jupiter's diameter of 88,846 miles makes it the largest planet in our solar system.</p>
                    <p>You could fit 1,300 Earths inside Jupiter!</p>
                    <p>If Jupiter were a hollow shell, more than 1,300 Earths could fit inside.</p>
                  </>
                )}
                {selectedData === 'mass' && (
                  <>
                    <p>Jupiter's mass is 1.898 × 10^27 kilograms, making it 2.5 times more massive than all other planets combined.</p>
                    <p>Despite its mass, Jupiter is less dense than Earth because it's composed primarily of gas.</p>
                    <p>Jupiter's gravity is 2.4 times stronger than Earth's gravity.</p>
                  </>
                )}
                {selectedData === 'distance' && (
                  <>
                    <p>Jupiter orbits the Sun at an average distance of 484 million miles (778 million kilometers).</p>
                    <p>This distance is about 5.2 times the distance from Earth to the Sun (1 Astronomical Unit).</p>
                    <p>It takes light about 43 minutes to travel from the Sun to Jupiter.</p>
                  </>
                )}
                {selectedData === 'orbital' && (
                  <>
                    <p>A year on Jupiter lasts 11.86 Earth years.</p>
                    <p>This means Jupiter has completed only about 4 orbits around the Sun since humans first walked on the Moon.</p>
                    <p>Jupiter's orbital speed is about 13 km/s (29,000 mph).</p>
                  </>
                )}
                {selectedData === 'rotation' && (
                  <>
                    <p>Jupiter rotates faster than any other planet, completing one rotation in just 9.9 hours.</p>
                    <p>This rapid rotation creates strong jet streams and gives Jupiter its oblate (flattened) shape.</p>
                    <p>The equatorial diameter is about 7% larger than the polar diameter due to this rapid rotation.</p>
                  </>
                )}
                {selectedData === 'moons' && (
                  <>
                    <p>Jupiter has 95 known moons, with more being discovered regularly.</p>
                    <p>The four largest moons - Io, Europa, Ganymede, and Callisto - were discovered by Galileo Galilei in 1610.</p>
                    <p>Ganymede is the largest moon in the solar system, even bigger than the planet Mercury.</p>
                  </>
                )}
              </div>
              <button 
                onClick={() => setSelectedData(null)}
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
