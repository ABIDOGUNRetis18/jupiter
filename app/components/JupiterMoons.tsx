'use client';

import { useState } from 'react';

interface Moon {
  name: string;
  diameter: string;
  distanceFromJupiter: string;
  orbitalPeriod: string;
  discoveredBy: string;
  yearDiscovered: number;
  type: 'galilean' | 'inner' | 'outer';
  description: string;
  interestingFact: string;
}

const moons: Moon[] = [
  {
    name: 'Io',
    diameter: '2,263 miles (3,643 km)',
    distanceFromJupiter: '262,000 miles (422,000 km)',
    orbitalPeriod: '1.77 Earth days',
    discoveredBy: 'Galileo Galilei',
    yearDiscovered: 1610,
    type: 'galilean',
    description: 'The most volcanically active body in the solar system, with over 400 active volcanoes.',
    interestingFact: 'Io\'s volcanic plumes can reach heights of 300 miles (500 km) above the surface.'
  },
  {
    name: 'Europa',
    diameter: '1,940 miles (3,122 km)',
    distanceFromJupiter: '417,000 miles (671,000 km)',
    orbitalPeriod: '3.55 Earth days',
    discoveredBy: 'Galileo Galilei',
    yearDiscovered: 1610,
    type: 'galilean',
    description: 'A world with a subsurface ocean beneath an icy crust, making it a prime candidate for extraterrestrial life.',
    interestingFact: 'Europa may contain twice as much water as all of Earth\'s oceans combined.'
  },
  {
    name: 'Ganymede',
    diameter: '3,273 miles (5,268 km)',
    distanceFromJupiter: '665,000 miles (1,070,000 km)',
    orbitalPeriod: '7.15 Earth days',
    discoveredBy: 'Galileo Galilei',
    yearDiscovered: 1610,
    type: 'galilean',
    description: 'The largest moon in the solar system, even larger than the planet Mercury.',
    interestingFact: 'Ganymede is the only moon known to have its own magnetic field.'
  },
  {
    name: 'Callisto',
    diameter: '2,998 miles (4,821 km)',
    distanceFromJupiter: '1,170,000 miles (1,883,000 km)',
    orbitalPeriod: '16.69 Earth days',
    discoveredBy: 'Galileo Galilei',
    yearDiscovered: 1610,
    type: 'galilean',
    description: 'The most heavily cratered object in the solar system, with a surface unchanged for billions of years.',
    interestingFact: 'Callisto may have a subsurface ocean, making it another potential habitat for life.'
  },
  {
    name: 'Amalthea',
    diameter: '125 miles (200 km)',
    distanceFromJupiter: '112,000 miles (181,000 km)',
    orbitalPeriod: '0.498 Earth days',
    discoveredBy: 'Edward Emerson Barnard',
    yearDiscovered: 1892,
    type: 'inner',
    description: 'An irregularly shaped inner moon with a reddish color, possibly composed of water ice.',
    interestingFact: 'Amalthea gives off more heat than it receives from the Sun.'
  },
  {
    name: 'Himalia',
    diameter: '105 miles (170 km)',
    distanceFromJupiter: '7,100,000 miles (11,460,000 km)',
    orbitalPeriod: '250.6 Earth days',
    discoveredBy: 'Charles Dillon Perrine',
    yearDiscovered: 1904,
    type: 'outer',
    description: 'The largest of Jupiter\'s irregular outer moons.',
    interestingFact: 'Himalia may be a captured asteroid from the asteroid belt.'
  }
];

export default function JupiterMoons() {
  const [selectedMoon, setSelectedMoon] = useState<Moon | null>(null);
  const [filter, setFilter] = useState<'all' | 'galilean' | 'inner' | 'outer'>('all');

  const filteredMoons = filter === 'all' ? moons : moons.filter(moon => moon.type === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-space-dark to-space-blue text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">
          Jupiter\'s Moon System
        </h2>

        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 mb-6">
            Jupiter has 95 known moons, from tiny asteroid-sized objects to worlds larger than Mercury
          </p>
          
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'all' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              All Moons
            </button>
            <button 
              onClick={() => setFilter('galilean')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'galilean' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Galilean
            </button>
            <button 
              onClick={() => setFilter('inner')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'inner' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Inner
            </button>
            <button 
              onClick={() => setFilter('outer')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'outer' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Outer
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredMoons.map((moon, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm cursor-pointer hover:scale-105 transition-all hover:border-purple-400/50"
              onClick={() => setSelectedMoon(moon)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-purple-300">{moon.name}</h3>
                <span className="text-xs px-2 py-1 bg-purple-600/50 rounded-full">
                  {moon.type}
                </span>
              </div>
              
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">
                  <span className="text-purple-200">Diameter:</span> {moon.diameter}
                </p>
                <p className="text-gray-300">
                  <span className="text-purple-200">Distance:</span> {moon.distanceFromJupiter}
                </p>
                <p className="text-gray-300">
                  <span className="text-purple-200">Orbit:</span> {moon.orbitalPeriod}
                </p>
                <p className="text-gray-300">
                  <span className="text-purple-200">Discovered:</span> {moon.yearDiscovered}
                </p>
              </div>
              
              <p className="text-gray-400 text-sm mt-4 line-clamp-2">
                {moon.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-8 rounded-2xl border border-orange-500/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-orange-300 mb-6">The Galilean Moons</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
                The four largest moons of Jupiter—Io, Europa, Ganymede, and Callisto—were discovered by Galileo Galilei in 1610. 
                This discovery provided strong evidence for the Copernican heliocentric model of the solar system.
              </p>
              <p className="text-gray-300">
                These moons are remarkable worlds in their own right, each with unique characteristics that make them 
                fascinating subjects for scientific study.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Io: Volcanic hellscape</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Europa: Ice-covered ocean world</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                <span className="text-gray-300">Ganymede: Largest moon, has magnetic field</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-brown-400 rounded-full"></div>
                <span className="text-gray-300">Callisto: Ancient, heavily cratered surface</span>
              </div>
            </div>
          </div>
        </div>

        {selectedMoon && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedMoon(null)}>
            <div className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 p-8 rounded-2xl border border-purple-500/50 max-w-2xl" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-3xl font-bold mb-4 text-purple-300">{selectedMoon.name}</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-purple-200">Diameter</p>
                  <p className="text-lg">{selectedMoon.diameter}</p>
                </div>
                <div>
                  <p className="text-sm text-purple-200">Distance from Jupiter</p>
                  <p className="text-lg">{selectedMoon.distanceFromJupiter}</p>
                </div>
                <div>
                  <p className="text-sm text-purple-200">Orbital Period</p>
                  <p className="text-lg">{selectedMoon.orbitalPeriod}</p>
                </div>
                <div>
                  <p className="text-sm text-purple-200">Discovered</p>
                  <p className="text-lg">{selectedMoon.discoveredBy} ({selectedMoon.yearDiscovered})</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-purple-200 mb-2">Description</p>
                <p className="text-gray-200">{selectedMoon.description}</p>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-purple-200 mb-2">Interesting Fact</p>
                <p className="text-gray-200">{selectedMoon.interestingFact}</p>
              </div>
              
              <button 
                onClick={() => setSelectedMoon(null)}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full font-semibold hover:from-purple-600 hover:to-blue-700 transition-all"
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
