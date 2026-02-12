'use client';

import { useState, useEffect } from 'react';

export default function GreatRedSpot() {
  const [time, setTime] = useState(0);
  const [selectedEra, setSelectedEra] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const historicalData = [
    {
      era: '1665-1713',
      observer: 'Giovanni Cassini',
      description: 'First detailed observations of a permanent spot on Jupiter',
      size: 'Unknown',
      color: 'Dark brown',
      significance: 'First recorded evidence of the Great Red Spot'
    },
    {
      era: '1831-present',
      observer: 'Multiple astronomers',
      description: 'Continuous observations of the current Great Red Spot',
      size: '16,350 km wide (10,160 miles)',
      color: 'Reddish-orange',
      significance: 'Longest continuously observed atmospheric feature'
    },
    {
      era: '1979',
      observer: 'Voyager spacecraft',
      description: 'First close-up images revealing complex internal structure',
      size: '23,000 km wide (14,300 miles)',
      color: 'Deep red',
      significance: 'Realed counter-clockwise rotation and internal dynamics'
    },
    {
      era: '2017-2024',
      observer: 'Juno spacecraft',
      description: 'High-resolution imaging and atmospheric composition analysis',
      size: '16,000 km wide (9,900 miles)',
      color: 'Orange-red',
      significance: 'Showing gradual shrinking and color changes'
    }
  ];

  const stormCharacteristics = [
    {
      title: 'Wind Speeds',
      value: '432 mph (695 km/h)',
      description: 'Faster than any hurricane on Earth'
    },
    {
      title: 'Rotation Period',
      value: '6 Earth days',
      description: 'Complete counter-clockwise rotation'
    },
    {
      title: 'Altitude',
      value: '8 km (5 miles) above surroundings',
      description: 'Rises above surrounding cloud tops'
    },
    {
      title: 'Temperature',
      value: '-200°F (-129°C)',
      description: 'Much colder than surrounding areas'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-space-dark to-space-blue text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-300 to-orange-400 bg-clip-text text-transparent">
          The Great Red Spot
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full jupiter-gradient jupiter-glow relative overflow-hidden">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-400 via-red-500 to-brown-600 opacity-80"></div>
                
                <div 
                  className="absolute w-32 h-24 bg-red-600 rounded-full opacity-80 blur-md"
                  style={{
                    top: '35%',
                    left: '30%',
                    transform: `rotate(${time * 2}deg) scale(${1 + Math.sin(time * 0.1) * 0.1})`,
                    boxShadow: '0 0 40px rgba(220, 38, 38, 0.8)'
                  }}
                ></div>
                
                <div 
                  className="absolute w-24 h-16 bg-red-500 rounded-full opacity-60 blur-sm"
                  style={{
                    top: '40%',
                    left: '35%',
                    transform: `rotate(${-time * 1.5}deg)`,
                    animation: 'pulse 2s infinite'
                  }}
                ></div>
                
                <div className="absolute top-1/4 left-1/4 w-20 h-16 bg-orange-400 rounded-full opacity-60 blur-sm"></div>
                <div className="absolute bottom-1/3 right-1/4 w-16 h-12 bg-yellow-300 rounded-full opacity-50 blur-sm"></div>
              </div>
              
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-sm text-gray-400">Live simulation of storm rotation</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-red-300">Storm Characteristics</h3>
            
            {stormCharacteristics.map((char, index) => (
              <div key={index} className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-4 rounded-xl border border-red-500/30">
                <h4 className="text-lg font-semibold text-red-200 mb-1">{char.title}</h4>
                <p className="text-2xl font-bold text-white mb-2">{char.value}</p>
                <p className="text-sm text-gray-300">{char.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-orange-300">Historical Timeline</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {historicalData.map((data, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30 cursor-pointer hover:scale-105 transition-all"
                onClick={() => setSelectedEra(data.era)}
              >
                <h4 className="text-lg font-bold text-purple-300 mb-2">{data.era}</h4>
                <p className="text-sm text-purple-200 mb-2">{data.observer}</p>
                <p className="text-sm text-gray-300 mb-2">{data.description}</p>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>Size: {data.size}</p>
                  <p>Color: {data.color}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-8 rounded-2xl border border-orange-500/30">
            <h3 className="text-2xl font-bold text-orange-300 mb-6">What Creates the Red Color?</h3>
            <div className="space-y-4 text-gray-300">
              <p>The distinctive red color of the Great Red Spot is believed to come from complex organic molecules called chromophores.</p>
              <p>These compounds form when ultraviolet radiation from the Sun breaks down ammonia and other chemicals in Jupiter\'s upper atmosphere.</p>
              <p>The exact chemical composition is still being studied, but scientists believe it involves sulfur and phosphorus compounds.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-8 rounded-2xl border border-red-500/30">
            <h3 className="text-2xl font-bold text-red-300 mb-6">Is the Great Red Spot Disappearing?</h3>
            <div className="space-y-4 text-gray-300">
              <p>Recent observations show that the Great Red Spot has been shrinking over the past century. In the 1800s, it was about 40,000 km wide.</p>
              <p>Today it\'s roughly 16,000 km wide - about the size of Earth. However, the shrinking rate has slowed in recent years.</p>
              <p>Scientists debate whether it will eventually disappear or stabilize at its current size.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-8 rounded-2xl border border-yellow-500/30">
          <h3 className="text-2xl font-bold text-yellow-300 mb-6">Fascinating Facts</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-200 mb-2">350+</div>
              <p className="text-gray-300">Years of continuous observation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-200 mb-2">2-3x</div>
              <p className="text-gray-300">Larger than Earth</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-200 mb-2">Counterclockwise</div>
              <p className="text-gray-300">Rotation direction (anticyclone)</p>
            </div>
          </div>
        </div>

        {selectedEra && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedEra(null)}>
            <div className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 p-8 rounded-2xl border border-purple-500/50 max-w-2xl" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-3xl font-bold mb-4 text-purple-300">
                {historicalData.find(d => d.era === selectedEra)?.era}
              </h3>
              <div className="text-gray-200 space-y-4">
                <p><strong>Observer:</strong> {historicalData.find(d => d.era === selectedEra)?.observer}</p>
                <p><strong>Description:</strong> {historicalData.find(d => d.era === selectedEra)?.description}</p>
                <p><strong>Size:</strong> {historicalData.find(d => d.era === selectedEra)?.size}</p>
                <p><strong>Color:</strong> {historicalData.find(d => d.era === selectedEra)?.color}</p>
                <p><strong>Significance:</strong> {historicalData.find(d => d.era === selectedEra)?.significance}</p>
              </div>
              <button 
                onClick={() => setSelectedEra(null)}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full font-semibold hover:from-purple-600 hover:to-blue-700 transition-all"
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
