'use client';

import { useState } from 'react';

interface Mission {
  name: string;
  agency: string;
  launchYear: number;
  arrivalYear: number;
  missionType: 'flyby' | 'orbiter' | 'probe';
  status: 'completed' | 'active' | 'planned';
  description: string;
  discoveries: string[];
  image?: string;
}

const missions: Mission[] = [
  {
    name: 'Pioneer 10',
    agency: 'NASA',
    launchYear: 1972,
    arrivalYear: 1973,
    missionType: 'flyby',
    status: 'completed',
    description: 'First spacecraft to travel through the asteroid belt and make direct observations of Jupiter.',
    discoveries: [
      'First close-up images of Jupiter',
      'Measured Jupiter\'s intense radiation belts',
      'Studied Jupiter\'s magnetic field'
    ]
  },
  {
    name: 'Pioneer 11',
    agency: 'NASA',
    launchYear: 1973,
    arrivalYear: 1974,
    missionType: 'flyby',
    status: 'completed',
    description: 'Follow-up to Pioneer 10, providing additional data on Jupiter and its moons.',
    discoveries: [
      'Better images of Jupiter\'s Great Red Spot',
      'Discovered Jupiter\'s magnetic field is tilted',
      'Studied interactions with solar wind'
    ]
  },
  {
    name: 'Voyager 1',
    agency: 'NASA',
    launchYear: 1977,
    arrivalYear: 1979,
    missionType: 'flyby',
    status: 'completed',
    description: 'Part of the Voyager program, provided unprecedented detailed images and data.',
    discoveries: [
      'Discovered active volcanoes on Io',
      'Detailed study of Great Red Spot dynamics',
      'Found thin rings around Jupiter'
    ]
  },
  {
    name: 'Voyager 2',
    agency: 'NASA',
    launchYear: 1977,
    arrivalYear: 1979,
    missionType: 'flyby',
    status: 'completed',
    description: 'Sister spacecraft to Voyager 1, continued the exploration of Jupiter.',
    discoveries: [
      'Confirmed Io\'s volcanic activity',
      'Studied Jupiter\'s aurora',
      'Analyzed atmospheric composition'
    ]
  },
  {
    name: 'Galileo',
    agency: 'NASA',
    launchYear: 1989,
    arrivalYear: 1995,
    missionType: 'orbiter',
    status: 'completed',
    description: 'First spacecraft to orbit Jupiter, conducted extensive study of the planet and its moons.',
    discoveries: [
      'Deployed probe into Jupiter\'s atmosphere',
      'Discovered evidence for subsurface oceans on Europa',
      'Mapped Jupiter\'s magnetic field in detail'
    ]
  },
  {
    name: 'Cassini',
    agency: 'NASA/ESA',
    launchYear: 1997,
    arrivalYear: 2000,
    missionType: 'flyby',
    status: 'completed',
    description: 'Used Jupiter\'s gravity for a slingshot maneuver to Saturn, conducted observations during flyby.',
    discoveries: [
      'Studied Jupiter\'s atmospheric dynamics',
      'Observed cloud movements and storms',
      'Collaborated with Galileo observations'
    ]
  },
  {
    name: 'New Horizons',
    agency: 'NASA',
    launchYear: 2006,
    arrivalYear: 2007,
    missionType: 'flyby',
    status: 'completed',
    description: 'Used Jupiter for gravity assist on its way to Pluto, conducted observations during flyby.',
    discoveries: [
      'Studied Jupiter\'s lightning storms',
      'Observed changes in Great Red Spot',
      'Analyzed volcanic plumes on Io'
    ]
  },
  {
    name: 'Juno',
    agency: 'NASA',
    launchYear: 2011,
    arrivalYear: 2016,
    missionType: 'orbiter',
    status: 'active',
    description: 'Currently studying Jupiter\'s composition, gravity field, magnetic field, and polar magnetosphere.',
    discoveries: [
      'Discovered massive cyclones at poles',
      'Found Jupiter\'s magnetic field is stronger than expected',
      'Revealed deep atmospheric structure'
    ]
  },
  {
    name: 'JUICE',
    agency: 'ESA',
    launchYear: 2023,
    arrivalYear: 2031,
    missionType: 'orbiter',
    status: 'planned',
    description: 'JUpiter ICy moons Explorer will study Jupiter and three of its Galilean moons.',
    discoveries: [
      'Will study Europa, Ganymede, and Callisto',
      'Investigate potential for habitability',
      'Analyze Jupiter\'s atmosphere and magnetosphere'
    ]
  }
];

export default function SpaceMissions() {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [filter, setFilter] = useState<'all' | 'flyby' | 'orbiter' | 'probe'>('all');

  const filteredMissions = filter === 'all' ? missions : missions.filter(mission => mission.missionType === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-600/50 text-green-200';
      case 'active': return 'bg-blue-600/50 text-blue-200';
      case 'planned': return 'bg-yellow-600/50 text-yellow-200';
      default: return 'bg-gray-600/50 text-gray-200';
    }
  };

  const getMissionTypeColor = (type: string) => {
    switch (type) {
      case 'flyby': return 'bg-purple-600/50 text-purple-200';
      case 'orbiter': return 'bg-orange-600/50 text-orange-200';
      case 'probe': return 'bg-red-600/50 text-red-200';
      default: return 'bg-gray-600/50 text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-space-dark to-space-blue text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
          Jupiter Space Missions
        </h2>

        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 mb-6">
            Over 50 years of robotic exploration have revealed Jupiter's secrets
          </p>
          
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'all' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              All Missions
            </button>
            <button 
              onClick={() => setFilter('flyby')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'flyby' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Flybys
            </button>
            <button 
              onClick={() => setFilter('orbiter')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'orbiter' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Orbiters
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredMissions.map((mission, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-green-900/30 to-blue-900/30 p-6 rounded-xl border border-green-500/30 backdrop-blur-sm cursor-pointer hover:scale-105 transition-all hover:border-green-400/50"
              onClick={() => setSelectedMission(mission)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-green-300">{mission.name}</h3>
                <div className="flex space-x-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(mission.status)}`}>
                    {mission.status}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getMissionTypeColor(mission.missionType)}`}>
                    {mission.missionType}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2 text-sm mb-4">
                <p className="text-gray-300">
                  <span className="text-green-200">Agency:</span> {mission.agency}
                </p>
                <p className="text-gray-300">
                  <span className="text-green-200">Launch:</span> {mission.launchYear}
                </p>
                <p className="text-gray-300">
                  <span className="text-green-200">Arrival:</span> {mission.arrivalYear}
                </p>
              </div>
              
              <p className="text-gray-400 text-sm line-clamp-3">
                {mission.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-blue-500/30">
            <h3 className="text-2xl font-bold text-blue-300 mb-6">Mission Timeline</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-green-200 font-semibold">1970s: Pioneer Era</p>
                  <p className="text-gray-300 text-sm">First spacecraft to reach Jupiter</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-blue-200 font-semibold">1979: Voyager Era</p>
                  <p className="text-gray-300 text-sm">Detailed observations and moon discoveries</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-purple-200 font-semibold">1995-2003: Galileo Era</p>
                  <p className="text-gray-300 text-sm">First orbiter and atmospheric probe</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-orange-200 font-semibold">2016-Present: Juno Era</p>
                  <p className="text-gray-300 text-sm">Current polar orbiter studying deep structure</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-yellow-200 font-semibold">2031+: Future Era</p>
                  <p className="text-gray-300 text-sm">JUICE and other planned missions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-8 rounded-2xl border border-green-500/30">
            <h3 className="text-2xl font-bold text-green-300 mb-6">Key Discoveries</h3>
            <div className="space-y-4">
              <div className="bg-green-900/20 p-4 rounded-lg">
                <h4 className="text-green-200 font-semibold mb-2">Volcanic Io</h4>
                <p className="text-gray-300 text-sm">Voyager discovered Io is the most volcanically active body in the solar system.</p>
              </div>
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <h4 className="text-blue-200 font-semibold mb-2">Europa's Ocean</h4>
                <p className="text-gray-300 text-sm">Galileo found strong evidence for a subsurface ocean on Europa.</p>
              </div>
              <div className="bg-purple-900/20 p-4 rounded-lg">
                <h4 className="text-purple-200 font-semibold mb-2">Jupiter's Rings</h4>
                <p className="text-gray-300 text-sm">Voyager 1 discovered Jupiter has faint rings composed of dust particles.</p>
              </div>
              <div className="bg-orange-900/20 p-4 rounded-lg">
                <h4 className="text-orange-200 font-semibold mb-2">Polar Cyclones</h4>
                <p className="text-gray-300 text-sm">Juno revealed geometric arrangements of cyclones at Jupiter's poles.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-8 rounded-2xl border border-yellow-500/30">
          <h3 className="text-2xl font-bold text-yellow-300 mb-6">Mission Statistics</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-200 mb-2">9</div>
              <p className="text-gray-300">Total Missions</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-200 mb-2">6</div>
              <p className="text-gray-300">Flyby Missions</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-200 mb-2">2</div>
              <p className="text-gray-300">Orbiter Missions</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-200 mb-2">1</div>
              <p className="text-gray-300">Active Mission</p>
            </div>
          </div>
        </div>

        {selectedMission && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedMission(null)}>
            <div className="bg-gradient-to-br from-green-900/90 to-blue-900/90 p-8 rounded-2xl border border-green-500/50 max-w-2xl" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-3xl font-bold mb-4 text-green-300">{selectedMission.name}</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-green-200">Agency</p>
                  <p className="text-lg">{selectedMission.agency}</p>
                </div>
                <div>
                  <p className="text-sm text-green-200">Mission Type</p>
                  <p className="text-lg capitalize">{selectedMission.missionType}</p>
                </div>
                <div>
                  <p className="text-sm text-green-200">Launch Year</p>
                  <p className="text-lg">{selectedMission.launchYear}</p>
                </div>
                <div>
                  <p className="text-sm text-green-200">Arrival Year</p>
                  <p className="text-lg">{selectedMission.arrivalYear}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-green-200 mb-2">Description</p>
                <p className="text-gray-200">{selectedMission.description}</p>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-green-200 mb-2">Key Discoveries</p>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  {selectedMission.discoveries.map((discovery, index) => (
                    <li key={index}>{discovery}</li>
                  ))}
                </ul>
              </div>
              
              <button 
                onClick={() => setSelectedMission(null)}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-all"
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
