'use client';

import { useState } from 'react';

export default function JupiterWeather() {
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null);

  const atmosphericLayers = [
    {
      name: 'Thermosphere',
      altitude: '1,000+ km',
      temperature: '1,340°F (727°C)',
      composition: 'Hydrogen, helium ions',
      description: 'The hottest layer where solar radiation creates ionized particles'
    },
    {
      name: 'Upper Stratosphere',
      altitude: '320-1,000 km',
      temperature: '-230°F (-145°C)',
      composition: 'Hydrogen, helium, methane',
      description: 'Cold layer with methane absorbing infrared radiation'
    },
    {
      name: 'Lower Stratosphere',
      altitude: '50-320 km',
      temperature: '-172°F (-113°C)',
      composition: 'Hydrogen, helium, ammonia clouds',
      description: 'Contains the upper cloud decks of ammonia ice'
    },
    {
      name: 'Troposphere',
      altitude: '0-50 km',
      temperature: '-223°F to 70°F (-142°C to 21°C)',
      composition: 'Hydrogen, helium, water, ammonia',
      description: 'Weather layer with clouds and storms'
    }
  ];

  const weatherPhenomena = [
    {
      name: 'Bands and Zones',
      description: 'Alternating dark belts and light zones created by different atmospheric temperatures and compositions',
      windSpeeds: 'Up to 360 mph (580 km/h)',
      location: 'Throughout atmosphere'
    },
    {
      name: 'Vortices and Storms',
      description: 'Rotating storm systems including the Great Red Spot and smaller white ovals',
      windSpeeds: 'Up to 432 mph (695 km/h)',
      location: 'Mid-latitudes'
    },
    {
      name: 'Lightning',
      description: 'Powerful electrical storms in water cloud layers, hundreds of times more powerful than Earth lightning',
      windSpeeds: 'N/A',
      location: 'Deep water cloud layers'
    },
    {
      name: 'Polar Cyclones',
      description: 'Eight cyclones arranged in geometric patterns at each pole, discovered by Juno spacecraft',
      windSpeeds: 'Up to 220 mph (350 km/h)',
      location: 'North and South poles'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-space-dark to-space-blue text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
          Jupiter\'s Weather & Atmosphere
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-6">Atmospheric Layers</h3>
            <div className="space-y-4">
              {atmosphericLayers.map((layer, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/30 cursor-pointer hover:scale-105 transition-all"
                  onClick={() => setSelectedLayer(layer.name)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-blue-200">{layer.name}</h4>
                    <span className="text-sm text-blue-400">{layer.altitude}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-blue-300">Temperature</p>
                      <p className="text-sm font-semibold">{layer.temperature}</p>
                    </div>
                    <div>
                      <p className="text-xs text-blue-300">Composition</p>
                      <p className="text-sm">{layer.composition}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">{layer.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-6">Weather Phenomena</h3>
            <div className="space-y-4">
              {weatherPhenomena.map((phenomenon, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30">
                  <h4 className="text-lg font-semibold text-purple-200 mb-3">{phenomenon.name}</h4>
                  <p className="text-gray-300 mb-3">{phenomenon.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-purple-300">Wind Speeds</p>
                      <p>{phenomenon.windSpeeds}</p>
                    </div>
                    <div>
                      <p className="text-purple-300">Location</p>
                      <p>{phenomenon.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-8 rounded-2xl border border-orange-500/30">
            <h3 className="text-2xl font-bold text-orange-300 mb-6">Extreme Weather Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Highest wind speeds</span>
                <span className="text-xl font-bold text-orange-200">432 mph (695 km/h)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Temperature range</span>
                <span className="text-xl font-bold text-orange-200">-223°F to 1,340°F</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Atmospheric pressure</span>
                <span className="text-xl font-bold text-orange-200">20-100 bar</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Storm duration</span>
                <span className="text-xl font-bold text-orange-200">350+ years (GRS)</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-blue-500/30">
            <h3 className="text-2xl font-bold text-blue-300 mb-6">Atmospheric Composition</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-blue-200">Hydrogen</span>
                  <span className="text-blue-200">89.8%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full" style={{width: '89.8%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-blue-200">Helium</span>
                  <span className="text-blue-200">10.2%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full" style={{width: '10.2%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-blue-200">Methane</span>
                  <span className="text-blue-200">0.3%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full" style={{width: '3%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-blue-200">Ammonia</span>
                  <span className="text-blue-200">0.026%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full" style={{width: '2%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-8 rounded-2xl border border-red-500/30">
          <h3 className="text-2xl font-bold text-red-300 mb-6">Seasonal Weather Patterns</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-red-200 mb-3">No Seasons</h4>
              <p className="text-gray-300">
                Jupiter\'s minimal axial tilt (3.1°) means it has no significant seasonal variations like Earth.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-red-200 mb-3">Constant Activity</h4>
              <p className="text-gray-300">
                Weather patterns are driven by internal heat rather than solar radiation, creating constant storm activity.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-red-200 mb-3">Band Oscillations</h4>
              <p className="text-gray-300">
                The bands and zones undergo periodic changes in color and intensity over multi-year cycles.
              </p>
            </div>
          </div>
        </div>

        {selectedLayer && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedLayer(null)}>
            <div className="bg-gradient-to-br from-blue-900/90 to-purple-900/90 p-8 rounded-2xl border border-blue-500/50 max-w-2xl" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-3xl font-bold mb-4 text-blue-300">{selectedLayer}</h3>
              <div className="text-gray-200 space-y-4">
                {atmosphericLayers.find(l => l.name === selectedLayer) && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-blue-300">Altitude</p>
                        <p className="text-lg">{atmosphericLayers.find(l => l.name === selectedLayer)?.altitude}</p>
                      </div>
                      <div>
                        <p className="text-blue-300">Temperature</p>
                        <p className="text-lg">{atmosphericLayers.find(l => l.name === selectedLayer)?.temperature}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-blue-300">Composition</p>
                      <p className="text-lg">{atmosphericLayers.find(l => l.name === selectedLayer)?.composition}</p>
                    </div>
                    <div>
                      <p className="text-blue-300">Description</p>
                      <p>{atmosphericLayers.find(l => l.name === selectedLayer)?.description}</p>
                    </div>
                  </>
                )}
              </div>
              <button 
                onClick={() => setSelectedLayer(null)}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
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
